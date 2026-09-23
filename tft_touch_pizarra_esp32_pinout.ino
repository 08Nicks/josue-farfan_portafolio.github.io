/*
 * ==============================================================================
 * Plantilla Base: Configuración de Pines y Pantalla TFT ILI9341 con ESP32
 * ==============================================================================
 * Descripción:
 * Código genérico de inicialización para pantallas TFT (controlador ILI9341)
 * con panel táctil resistivo mediante bus paralelo de 8 bits en ESP32
 * usando la biblioteca LovyanGFX.
 * 
 * Contiene el mapeo de pines de hardware y la estructura básica para 
 * inicialización y prueba de pantalla táctil / lienzo digital.
 * ==============================================================================
 */

#include <Arduino.h>
#include <LovyanGFX.hpp>
#include "TouchScreen.h"

// ==============================================================================
// 1. DEFINICIÓN DE PINES DEL PANEL TÁCTIL (TouchScreen Resistivo)
// ==============================================================================
#define YP 32   // Pin analógico (Y+)
#define XM 33   // Pin analógico (X-)
#define YM 13   // Pin digital (Y-)
#define XP 14   // Pin digital (X+)

TouchScreen ts = TouchScreen(XP, YP, XM, YM, 300);

// Calibración típica de coordenadas táctiles
#define TS_MINX 160
#define TS_MAXX 940
#define TS_MINY 170
#define TS_MAXY 910

// ==============================================================================
// 2. CONFIGURACIÓN DEL BUS PARALELO DE 8 BITS (LovyanGFX)
// ==============================================================================
class LGFX : public lgfx::LGFX_Device {
  lgfx::Panel_ILI9341 _panel_instance;
  lgfx::Bus_Parallel8 _bus_instance;

public:
  LGFX(void) {
    // Configuración del bus paralelo de datos y control
    {
      auto cfg = _bus_instance.config();
      // Pines de control del bus
      cfg.pin_wr = 27;  // Write
      cfg.pin_rd = 26;  // Read
      cfg.pin_rs = 32;  // Register Select (DC)
      
      // Pines de datos paralelos (D0 - D7)
      cfg.pin_d0 = 13;
      cfg.pin_d1 = 14;
      cfg.pin_d2 = 16;
      cfg.pin_d3 = 17;
      cfg.pin_d4 = 18;
      cfg.pin_d5 = 19;
      cfg.pin_d6 = 23;
      cfg.pin_d7 = 25;
      
      _bus_instance.config(cfg);
      _panel_instance.setBus(&_bus_instance);
    }

    // Configuración física del panel ILI9341
    {
      auto cfg = _panel_instance.config();
      cfg.pin_cs   = 33; // Chip Select
      cfg.pin_rst  = 4;  // Reset
      cfg.panel_width  = 240;
      cfg.panel_height = 320;
      cfg.invert = false;
      cfg.rgb_order = false;
      _panel_instance.config(cfg);
    }

    setPanel(&_panel_instance);
  }

  // Restauración del estado del bus tras lecturas analógicas del touch
  void restoreBus() {
    _bus_instance.init();
  }
};

LGFX lcd;

// ==============================================================================
// 3. SETUP Y DEMOSTRACIÓN DE LIENZO TÁCTIL BÁSICO
// ==============================================================================
void setup() {
  Serial.begin(115200);
  
  // Inicialización de la pantalla
  lcd.init();
  lcd.setRotation(1); // Orientación horizontal (Landscape)
  lcd.fillScreen(TFT_BLACK);
  
  // Encabezado de interfaz
  lcd.setTextColor(TFT_WHITE);
  lcd.setTextSize(2);
  lcd.drawString("Pizarra TFT - ESP32", 20, 20);
  lcd.drawFastHLine(20, 45, 280, TFT_CYAN);
  
  lcd.setTextSize(1);
  lcd.setTextColor(TFT_GREEN);
  lcd.drawString("Toca la pantalla para interactuar...", 20, 60);
}

void loop() {
  // Lectura del punto de contacto
  TSPoint p = ts.getPoint();
  
  // Restaurar el bus de pantalla después de la lectura
  lcd.restoreBus();

  // Si se detecta presión válida en el panel táctil
  if (p.z > 200 && p.z < 1000) {
    // Mapeo de coordenadas al tamaño de la pantalla
    int x = map(p.x, TS_MINX, TS_MAXX, 0, lcd.width());
    int y = map(p.y, TS_MINY, TS_MAXY, 0, lcd.height());

    // Dibujar trazo en el lienzo
    if (x >= 0 && x < lcd.width() && y >= 0 && y < lcd.height()) {
      lcd.fillCircle(x, y, 2, TFT_WHITE);
    }
  }
  
  delay(10);
}
