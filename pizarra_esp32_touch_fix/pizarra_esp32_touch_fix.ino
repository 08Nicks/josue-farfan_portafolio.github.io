#include <Arduino.h>
#include <stdint.h>
#include <LovyanGFX.hpp>
#include <Wire.h>
#include <Adafruit_INA219.h>
#include <ESP32Encoder.h>
#include "TouchScreen.h"

// --- PINES DEL TOUCH ---
#define YP 32   // Pin analógico
#define XM 33   // Pin analógico
#define YM 13   // Pin digital
#define XP 14   // Pin digital

TouchScreen ts = TouchScreen(XP, YP, XM, YM, 300);

// --- CONFIGURACIÓN DE LA PANTALLA ---
class LGFX : public lgfx::LGFX_Device {
  lgfx::Panel_ILI9341 _panel_instance;
  lgfx::Bus_Parallel8 _bus_instance;
public:
  LGFX(void) {
    {
      auto cfg = _bus_instance.config();
      cfg.pin_wr = 27; cfg.pin_rd = 26; cfg.pin_rs = 32;
      cfg.pin_d0 = 13; cfg.pin_d1 = 14; cfg.pin_d2 = 16; cfg.pin_d3 = 17;
      cfg.pin_d4 = 18; cfg.pin_d5 = 19; cfg.pin_d6 = 23; cfg.pin_d7 = 25;
      _bus_instance.config(cfg);
      _panel_instance.setBus(&_bus_instance);
    }
    {
      auto cfg = _panel_instance.config();
      cfg.pin_cs   = 33;
      cfg.pin_rst  = 4;
      cfg.panel_width  = 240;
      cfg.panel_height = 320;
      cfg.invert = false;
      cfg.rgb_order = false;
      _panel_instance.config(cfg);
    }
    setPanel(&_panel_instance);
  }

  // Restaurar los pines del bus I2S después de leer el touch
  void restoreBus() {
    _bus_instance.init();
  }
};

LGFX lcd;
Adafruit_INA219 ina219;
ESP32Encoder encoder;

// --- CALIBRACIÓN TOUCH ---
#define TS_MINX 166
#define TS_MAXX 935
#define TS_MINY 176
#define TS_MAXY 901

// --- MOTOR GA25-370 ---
// El GA25-370 tiene un encoder Hall de 11 PPR en el eje del motor.
// Con attachHalfQuad se cuentan 11 pulsos/vuelta del motor.
// Multiplica por la relación de tu caja reductora:
//   1:34 → 11 * 34 = 374    |   1:75 → 11 * 75 = 825
//   1:107 → 11 * 107 = 1177 |   1:150 → 11 * 150 = 1650
const float PULSOS_POR_VUELTA = 374.0;

long ultimaPosicion = 0;
unsigned long ultimoTiempo = 0;
float rpm = 0.0;
String direccion = "Detenido ";

// --- PANTALLAS ---
enum Pantalla { MONITOR, PIZARRA };
Pantalla pantallaActual = MONITOR;
bool modoOscuro = true;
bool redibujar = true;

// --- COLORES DEL TEMA ---
uint32_t colFondo, colTexto, colEtiqueta, colBarra, colBorde;

// --- PIZARRA ---
int colorActual = TFT_WHITE;
int grosorPincel = 3;

// ============================================================
// TEMA
// ============================================================
void actualizarTema() {
  if (modoOscuro) {
    colFondo    = TFT_BLACK;                     // Fondo negro
    colTexto    = TFT_RED;                       // Variables en rojo (ej. RPM)
    colEtiqueta = TFT_WHITE;                     // Letras blancas
    colBarra    = lcd.color565(30, 30, 30);      // Gris muy oscuro
    colBorde    = lcd.color565(100, 100, 100);   // Borde gris oscuro
  } else {
    colFondo    = TFT_WHITE;                     // Fondo blanco
    colTexto    = lcd.color565(30, 30, 30);      // Gris muy oscuro para texto general
    colEtiqueta = lcd.color565(0, 0, 139);       // Azul oscuro
    colBarra    = lcd.color565(230, 230, 230);   // Gris muy claro para barras
    colBorde    = lcd.color565(150, 150, 150);   // Gris medio
  }
}

// ============================================================
// ICONOS (dibujados con primitivas)
// ============================================================

// Engrane: círculo con 6 dientes
void dibujarEngrane(int cx, int cy, uint32_t color) {
  lcd.fillCircle(cx, cy, 6, color);
  lcd.fillCircle(cx, cy, 2, colBarra);  // hueco central
  // Dientes (arriba, abajo, izq, der, diagonales)
  lcd.fillRect(cx - 2, cy - 10, 4, 4, color);
  lcd.fillRect(cx - 2, cy + 6,  4, 4, color);
  lcd.fillRect(cx - 10, cy - 2, 4, 4, color);
  lcd.fillRect(cx + 6,  cy - 2, 4, 4, color);
  lcd.fillRect(cx + 4, cy - 8,  3, 3, color);
  lcd.fillRect(cx - 7, cy + 5,  3, 3, color);
}

// Pincel simplificado
void dibujarPincel(int cx, int cy, uint32_t color) {
  lcd.fillTriangle(cx - 3, cy + 7, cx + 3, cy + 7, cx, cy - 7, color);
  lcd.fillRect(cx - 1, cy + 7, 3, 4, lcd.color565(160, 100, 50));
}

// Flecha de regreso ←
void dibujarFlecha(int cx, int cy, uint32_t color) {
  lcd.fillTriangle(cx - 7, cy, cx + 1, cy - 6, cx + 1, cy + 6, color);
  lcd.fillRect(cx + 1, cy - 2, 7, 5, color);
}

// ============================================================
// TOUCH
// ============================================================
void touchEndRead() {
  lcd.restoreBus();
  pinMode(XM, OUTPUT);
  digitalWrite(XM, HIGH);
}

bool leerTouch(int &px, int &py) {
  TSPoint p = ts.getPoint();
  touchEndRead();

  if (p.z > 150 && p.z < 1000) {
    px = constrain(map(p.x, TS_MINX, TS_MAXX, 0, 320), 0, 319);
    py = constrain(map(p.y, TS_MAXY, TS_MINY, 0, 240), 0, 239);
    return true;
  }
  return false;
}

// ============================================================
// PANTALLA: MONITOR
// ============================================================
void dibujarMonitorUI() {
  lcd.fillScreen(colFondo);

  // --- Barra superior ---
  lcd.fillRect(0, 0, 320, 30, colBarra);
  lcd.drawFastHLine(0, 30, 320, colBorde);

  // Título
  lcd.setTextSize(1);
  lcd.setTextColor(colEtiqueta, colBarra);
  lcd.setCursor(8, 10);
  lcd.print("Motor GA25-370");

  // Botón engrane: x 256-287, y 1-28
  lcd.fillRoundRect(256, 1, 30, 28, 4, colBorde);
  dibujarEngrane(271, 15, modoOscuro ? TFT_WHITE : lcd.color565(80, 80, 80));

  // Botón pizarra: x 289-319, y 1-28
  lcd.fillRoundRect(289, 1, 30, 28, 4, colBorde);
  dibujarPincel(304, 15, TFT_MAGENTA);

  // --- Etiquetas de datos ---
  lcd.setTextSize(2);
  lcd.setTextColor(colEtiqueta, colFondo);

  lcd.setCursor(5, 38);
  lcd.print("Voltaje (V):");

  lcd.setCursor(5, 92);
  lcd.print("Corriente (mA):");

  lcd.setCursor(5, 146);
  lcd.print("Velocidad (RPM):");

  lcd.setCursor(5, 200);
  lcd.print("Direccion:");

  // Líneas separadoras sutiles
  lcd.drawFastHLine(5, 86, 310, colBorde);
  lcd.drawFastHLine(5, 140, 310, colBorde);
  lcd.drawFastHLine(5, 194, 310, colBorde);
}

void actualizarMonitor() {
  // --- INA219 ---
  float busvoltage = ina219.getBusVoltage_V();
  float current_mA = ina219.getCurrent_mA();
  if (busvoltage < 0) busvoltage = 0.00;
  if (current_mA < 0) current_mA = 0.00;

  // Voltaje
  lcd.setTextSize(3);
  uint32_t colVoltaje;
  if (modoOscuro) {
    colVoltaje = busvoltage > 5.0 ? TFT_RED : TFT_YELLOW;
  } else {
    colVoltaje = busvoltage > 5.0 ? TFT_RED : lcd.color565(0, 128, 0); // Verde oscuro
  }
  lcd.setTextColor(colVoltaje, colFondo);
  lcd.setCursor(15, 58);
  lcd.print(busvoltage, 2);
  lcd.print("     ");

  // Corriente
  uint32_t colCorriente;
  if (modoOscuro) {
    colCorriente = current_mA > 0 ? TFT_RED : TFT_DARKGREY;
  } else {
    colCorriente = current_mA > 0 ? lcd.color565(180, 120, 0) : TFT_DARKGREY; // Naranja/Dorado oscuro
  }
  lcd.setTextColor(colCorriente, colFondo);
  lcd.setCursor(15, 112);
  lcd.print(current_mA, 1);
  lcd.print("     ");

  // --- RPM y Dirección (cada 250ms) ---
  unsigned long ahora = millis();
  unsigned long dt = ahora - ultimoTiempo;

  if (dt >= 250) {
    long pos = encoder.getCount();
    long dp = pos - ultimaPosicion;

    if (dp != 0) {
      float pps = ((float)dp / (float)dt) * 1000.0;
      rpm = abs((pps / PULSOS_POR_VUELTA) * 60.0);
      direccion = (dp > 0) ? "Derecha  " : "Izquierda";
    } else {
      rpm = 0.0;
      direccion = "Detenido ";
    }
    ultimaPosicion = pos;
    ultimoTiempo = ahora;

    // RPM
    lcd.setTextSize(3);
    lcd.setTextColor(colTexto, colFondo);
    lcd.setCursor(15, 166);
    lcd.print(rpm, 1);
    lcd.print("     ");

    // Dirección
    uint32_t colDir;
    if (modoOscuro) {
      if      (direccion == "Derecha  ")  colDir = TFT_RED;
      else if (direccion == "Izquierda") colDir = TFT_CYAN;
      else                                colDir = TFT_DARKGREY;
    } else {
      if      (direccion == "Derecha  ")  colDir = lcd.color565(200, 100, 0); // Naranja oscuro
      else if (direccion == "Izquierda") colDir = lcd.color565(139, 0, 139);  // Magenta oscuro
      else                                colDir = TFT_DARKGREY;
    }

    lcd.setTextSize(3);
    lcd.setTextColor(colDir, colFondo);
    lcd.setCursor(15, 216);
    lcd.print(direccion);
  }
}

// ============================================================
// PANTALLA: PIZARRA
// ============================================================
void dibujarPizarraUI() {
  uint32_t fondo = modoOscuro ? TFT_BLACK : TFT_WHITE;
  lcd.fillScreen(fondo);

  // Paleta de colores (derecha) — colores vivos que contrastan bien en LCD
  lcd.fillRect(270, 0,   50, 38, TFT_RED);
  lcd.fillRect(270, 38,  50, 38, TFT_YELLOW);
  lcd.fillRect(270, 76,  50, 38, TFT_GREEN);
  lcd.fillRect(270, 114, 50, 38, TFT_CYAN);
  lcd.fillRect(270, 152, 50, 38, TFT_ORANGE);

  // Botón de regreso (abajo-derecha)
  lcd.fillRoundRect(270, 200, 50, 38, 4, lcd.color565(40, 40, 55));
  lcd.drawRoundRect(270, 200, 50, 38, 4, TFT_CYAN);
  dibujarFlecha(295, 219, TFT_YELLOW);

  // Línea divisoria
  lcd.drawFastVLine(269, 0, 240, TFT_CYAN);

  colorActual = TFT_CYAN;
}

// ============================================================
// SETUP
// ============================================================
void setup(void) {
  Serial.begin(115200);
  analogReadResolution(10);

  lcd.init();
  lcd.setRotation(1);

  // INA219 por I2C (pines por defecto: SDA=21, SCL=22)
  Wire.begin(21, 22);
  if (!ina219.begin()) {
    Serial.println("Error: INA219 no encontrado");
  }

  // Encoder (pines 34 y 35 — solo entrada, ideales para encoder)
  encoder.attachHalfQuad(34, 35);
  encoder.clearCount();
  ultimoTiempo = millis();

  // Dibujar pantalla inicial
  actualizarTema();
  dibujarMonitorUI();
  redibujar = false;
}

// ============================================================
// LOOP
// ============================================================
void loop(void) {
  int tx, ty;
  bool tocado = leerTouch(tx, ty);

  // ========================
  // PANTALLA MONITOR
  // ========================
  if (pantallaActual == MONITOR) {
    if (redibujar) {
      actualizarTema();
      dibujarMonitorUI();
      redibujar = false;
    }

    actualizarMonitor();

    if (tocado) {
      // Botón engrane (256-287, 1-28) → cambiar modo claro/oscuro
      if (tx >= 250 && tx <= 290 && ty <= 32) {
        modoOscuro = !modoOscuro;
        redibujar = true;
        delay(300);
      }
      // Botón pincel (289-319, 1-28) → ir a pizarra
      else if (tx >= 285 && ty <= 32) {
        pantallaActual = PIZARRA;
        dibujarPizarraUI();
        delay(300);
      }
    }
  }

  // ========================
  // PANTALLA PIZARRA
  // ========================
  else if (pantallaActual == PIZARRA) {
    if (tocado) {
      // Zona de la paleta / botones (x > 270)
      if (tx > 268) {
        if      (ty < 38)  colorActual = TFT_RED;
        else if (ty < 76)  colorActual = TFT_YELLOW;
        else if (ty < 114) colorActual = TFT_GREEN;
        else if (ty < 152) colorActual = TFT_CYAN;
        else if (ty < 190) colorActual = TFT_ORANGE;
        // Botón regreso
        else if (ty >= 198) {
          pantallaActual = MONITOR;
          redibujar = true;
          delay(300);
          return;
        }
        delay(150);
      }
      // Zona de dibujo
      else {
        lcd.fillCircle(tx, ty, grosorPincel, colorActual);
      }
    }
  }
}
