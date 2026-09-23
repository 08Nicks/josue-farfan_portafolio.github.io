/**
 * PORTAFOLIO DE INGENIERÍA - ING. JOSUÉ FARFÁN GONZÁLEZ
 * Base de datos de proyectos, renderizado reactivo, filtros, búsqueda y visor modal técnico.
 */

// Dataset exhaustivo de proyectos con categorización y detalles de ingeniería
const projectsData = [
  {
    id: "cleanroom-semiconductores-inaoe",
    title: "Procesamiento de Obleas de Silicio en Cuarto Limpio — Semana de Semiconductores INAOE",
    category: "vlsi",
    categoryLabel: "Microelectrónica & Semiconductores",
    tag: "INAOE Cleanroom",
    mediaType: "image",
    mediaUrl: "WhatsApp Image 2026-09-22 at 4.38.59 PM.jpeg",
    secondaryMedia: [],
    tags: ["INAOE", "Semana de Semiconductores", "Cuarto Limpio (Cleanroom)", "Obleas de Silicio", "Fotolitografía", "Microfabricación"],
    shortDesc: "Participación en la Semana de Semiconductores del INAOE, experimentando en sala limpia los procesos de fotolitografía, grabado químico y manejo de obleas de silicio.",
    whatIs: "Estancia académica y formativa en la infraestructura de investigación de microtecnologías del INAOE durante la Semana de Semiconductores. Inmersión en cuartos limpios con control riguroso de partículas en suspensión para el procesamiento y fabricación física de dispositivos semiconductores.",
    whatIDid: "Entrenamiento y operación en cuartos limpios utilizando traje estéril especializado (bunny suit) y protección en áreas con luz amarilla inactínica para fotolitografía. Manipulación de obleas de silicio monocristalino mediante pinzas de precisión, estudio de las técnicas de deposición, recubrimiento de fotoresina, exposición UV y etapas de grabado para la integración de microestructuras sólidas.",
    highlights: [
      "Estancia práctica en las instalaciones de sala limpia del INAOE durante la Semana de Semiconductores",
      "Manipulación física de obleas de silicio monocristalino bajo estándares de control de partículas",
      "Comprensión in-situ de los procesos de fotolitografía, aplicación de fotoresina y caracterización física"
    ]
  },
  {
    id: "cadence-virtuoso-launcher-vlsi",
    title: "Entorno Automatizado para Cadence Virtuoso (TSMC 28nm) & Síntesis Genus",
    category: "vlsi",
    categoryLabel: "Diseño VLSI & Microelectrónica",
    tag: "Automatización EDA & CLI",
    mediaType: "image",
    mediaUrl: "launcher.jpg",
    downloadUrl: "virtuoso_launcher.bat",
    downloadName: "virtuoso_launcher.bat (Script CLI)",
    codeFilename: "virtuoso_launcher.bat",
    codeSnippet: `@echo off
setlocal enabledelayedexpansion

:: Habilitar colores ANSI en Windows generando el caracter ESCAPE
for /f %%a in ('echo prompt $E^| cmd') do set "ESC=%%a"
set "cyan=%ESC%[36m"
set "green=%ESC%[32m"
set "white=%ESC%[97m"
set "yellow=%ESC%[33m"
set "red=%ESC%[31m"
set "reset=%ESC%[0m"

cls
:INICIO
echo.
echo %cyan%==================================================%reset%
echo %white%         CADENCE EDA - WORKSTATION LAUNCHER       %reset%
echo %cyan%==================================================%reset%
echo.
echo %green%Ingresa tus credenciales para conectar al servidor EDA.%reset%
set /p usuario="%yellow%Usuario: %reset%"
if "%usuario%"=="" goto INICIO
set /p contrasena="%yellow%Contrasena: %reset%"

:MENU_ENTORNO
cls
echo.
echo %cyan%==================================================%reset%
echo %white%              SELECCION DE ENTORNO                %reset%
echo %cyan%==================================================%reset%
echo %green%1)%reset% %white%Lanzar Virtuoso (TSMC 28nm)%reset%
echo %green%2)%reset% %white%Usar entorno Verilog/VHDL (RTL_simulation)%reset%
echo %green%3)%reset% %white%Sintesis (Genus - Synthesis)%reset%
echo %green%4)%reset% %white%Solo terminal (Directo en carpeta tsmc28nm)%reset%
echo %cyan%==================================================%reset%
set /p opcion="%yellow%Elige una opcion (1-4): %reset%"

if "%opcion%"=="1" goto OP_VIRTUOSO
if "%opcion%"=="2" goto OP_VHDL
if "%opcion%"=="3" goto OP_SINTESIS
if "%opcion%"=="4" goto OP_TERMINAL
goto MENU_ENTORNO

:OP_VIRTUOSO
call :VERIFICAR_XMING
echo %green%Preparando entorno automatizado para: %white%%usuario%%green%...%reset%
:: Purgar candados .cdslck huerfanos y lanzar Virtuoso con tunel X11
echo pkill -9 -u $USER -x virtuoso > "%TEMP%\\cmd_remote.txt"
echo find /home/$USER/eda/ -name "*.cdslck" -type f -delete >> "%TEMP%\\cmd_remote.txt"
echo cd /home/$USER/tsmc28nm ^&^& source .cds28nm ^&^& virtuoso ^& >> "%TEMP%\\cmd_remote.txt"
start "" "%PUTTY_EXE%" -ssh %usuario%@192.168.1.100 -pw "%contrasena%" -X -m "%TEMP%\\cmd_remote.txt"
goto FIN

:VERIFICAR_XMING
tasklist /fi "imagename eq xming.exe" 2>nul | find /i "xming.exe" >nul
if not errorlevel 1 (
    echo %green%[OK] Servidor grafico Xming activo.%reset%
) else (
    echo %yellow%[INFO] Iniciando servidor grafico Xming en modo multi-pantalla...%reset%
    start "" "C:\\Program Files (x86)\\Xming\\Xming.exe" :0 -clipboard -multiwindow
)
exit /b

:FIN
echo %green%Sesion iniciada exitosamente.%reset%
pause`,
    secondaryMedia: [
      "inversor_cmos_tsmc28nm_layout.jpg",
      "riscv_core_tsmc28nm_layout.jpg"
    ],
    tags: ["Cadence Virtuoso", "TSMC 28nm PDK", "Cadence Genus", "Script Launcher CLI", "Windows Batch", "Xming X11 / SSH", "Automatización EDA"],
    shortDesc: "Script interactivo en Windows Batch para automatizar el lanzamiento de Cadence Virtuoso TSMC 28nm, servidor gráfico X11, purga de sesiones y síntesis Genus.",
    whatIs: "Suite de automatización y entorno de trabajo CLI para herramientas EDA industriales (Cadence Virtuoso y Cadence Genus) con el kit de diseño de proceso (PDK) TSMC a 28 nanómetros. El objetivo del script es optimizar y asegurar el flujo de inicio de sesión hacia el cluster EDA, levantando el servidor gráfico X11 y gestionando bloqueos de diseño.",
    whatIDid: "Programación integral en Windows Batch del script lanzador («SELECCIÓN DE ENTORNO» / virtuoso_launcher.bat) con interfaz interactiva en consola usando colores ANSI y banner ASCII. El script verifica si el servidor gráfico Xming está en ejecución (iniciándolo automáticamente en pantalla múltiple si está inactivo), valida credenciales, purga bloqueos de archivos huérfanos (.cdslck) y sesiones concurrentes de Virtuoso, carga el entorno .cds28nm y lanza la conexión segura por PuTTY con reenvío de túnel X11.",
    highlights: [
      "Automatización completa del arranque de Cadence Virtuoso TSMC 28nm y servidor gráfico X11 (Xming)",
      "Gestión y limpieza remota de candados huérfanos (.cdslck) y procesos congelados vía SSH",
      "Menú interactivo con guías rápidas integradas para simulación RTL (xmverilog/xmvhdl) y síntesis en Genus",
      "Descarga directa del script funcional 'virtuoso_launcher.bat' en el portafolio"
    ]
  },
  {
    id: "vlsi-inversor-riscv-tsmc28nm",
    title: "Diseño Físico de Layout: Inversor CMOS & Procesador RISC-V en TSMC 28nm",
    category: "vlsi",
    categoryLabel: "Diseño VLSI & Microelectrónica",
    tag: "Layout Nanométrico TSMC 28nm",
    mediaType: "image",
    mediaUrl: "inversor_cmos_tsmc28nm_layout.jpg",
    secondaryMedia: [
      "riscv_core_tsmc28nm_layout.jpg",
      "launcher.jpg"
    ],
    tags: ["TSMC 28nm PDK", "Layout Full-Custom", "Inversor CMOS", "Procesador RISC-V", "Cadence Virtuoso", "Reglas DRC / LVS", "Floorplan & Routing"],
    shortDesc: "Trazado geométrico a nivel transistor de una celda inversora CMOS y análisis del floorplan físico del procesador RISC-V en nodo nanométrico TSMC 28nm.",
    whatIs: "Implementación y análisis de diseño físico microelectrónico con herramientas EDA de Cadence. Abarca el diseño físico full-custom a nivel layout de una celda básica inversora CMOS en tecnología avanzada de 28 nanómetros de TSMC, complementado con el estudio y exploración del layout completo del núcleo de procesamiento de arquitectura abierta RISC-V.",
    whatIDid: "Diseño y trazado geométrico del inversor CMOS en Cadence Virtuoso Layout Suite respetando estrictamente las reglas de diseño (DRC) del nodo TSMC 28nm (ancho de canal, distancias de difusión P/N, colocación de compuertas de polisilicio, contactos y metal 1 para rieles de VDD y VSS con sus respectivos taps de sustrato y pozo para inmunidad a latch-up). Asimismo, análisis del floorplan del núcleo de silicio del procesador RISC-V, reconociendo la distribución perimetral del marco de E/S, las líneas principales de alimentación y la matriz densa de interconexiones lógicas.",
    highlights: [
      "Layout geométrico full-custom de inversor CMOS cumpliendo reglas DRC nanométricas de TSMC 28nm",
      "Estructura óptima de alimentación VDD/VSS y contactos de sustrato (well taps)",
      "Estudio del floorplan, distribución de celdas estándar y ruteo físico de procesador RISC-V"
    ]
  },
  {
    id: "esp32-pizarra-interfaz-tft",
    title: "Creación de Interfaces Gráficas Táctiles (GUI) en Pantallas TFT con ESP32",
    category: "embedded",
    categoryLabel: "Sistemas Embebidos & Interfaces",
    tag: "GUI & Pantallas TFT",
    mediaType: "image",
    mediaUrl: "WhatsApp Image 2026-09-22 at 4.43.02 PM.jpeg",
    secondaryMedia: [],
    downloadUrl: "tft_touch_pizarra_esp32_pinout.ino",
    downloadName: "tft_touch_pizarra_esp32_pinout.ino",
    codeFilename: "tft_touch_pizarra_esp32_pinout.ino",
    codeSnippet: `// ==============================================================================
// Plantilla Base: Configuracion de Pines Pantalla TFT ILI9341 con ESP32
// Bus paralelo de 8 bits + Panel Tactil Resistivo (LovyanGFX)
// ==============================================================================

#include <Arduino.h>
#include <LovyanGFX.hpp>
#include "TouchScreen.h"

// 1. PINES DEL TOUCHSCREEN RESISTIVO
#define YP 32   // Pin analogico (Y+)
#define XM 33   // Pin analogico (X-)
#define YM 13   // Pin digital (Y-)
#define XP 14   // Pin digital (X+)

TouchScreen ts = TouchScreen(XP, YP, XM, YM, 300);

#define TS_MINX 160
#define TS_MAXX 940
#define TS_MINY 170
#define TS_MAXY 910

// 2. CONFIGURACION DEL BUS PARALELO DE 8 BITS (LovyanGFX)
class LGFX : public lgfx::LGFX_Device {
  lgfx::Panel_ILI9341 _panel_instance;
  lgfx::Bus_Parallel8 _bus_instance;

public:
  LGFX(void) {
    // Configuracion de lineas de control y bus de datos
    {
      auto cfg = _bus_instance.config();
      cfg.pin_wr = 27;  // Write
      cfg.pin_rd = 26;  // Read
      cfg.pin_rs = 32;  // Register Select (DC)
      
      // Pines de datos (D0 - D7)
      cfg.pin_d0 = 13; cfg.pin_d1 = 14; cfg.pin_d2 = 16; cfg.pin_d3 = 17;
      cfg.pin_d4 = 18; cfg.pin_d5 = 19; cfg.pin_d6 = 23; cfg.pin_d7 = 25;
      
      _bus_instance.config(cfg);
      _panel_instance.setBus(&_bus_instance);
    }

    // Parametros fisicos del panel
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

  void restoreBus() {
    _bus_instance.init();
  }
};

LGFX lcd;

// 3. SETUP Y DEMOSTRACION DE LIENZO TACTIL BASICO
void setup() {
  Serial.begin(115200);
  
  lcd.init();
  lcd.setRotation(1); // Modo horizontal (Landscape)
  lcd.fillScreen(TFT_BLACK);
  
  lcd.setTextColor(TFT_WHITE);
  lcd.setTextSize(2);
  lcd.drawString("Pizarra TFT - ESP32", 20, 20);
  lcd.drawFastHLine(20, 45, 280, TFT_CYAN);
  
  lcd.setTextSize(1);
  lcd.setTextColor(TFT_GREEN);
  lcd.drawString("Toca la pantalla para interactuar...", 20, 60);
}

void loop() {
  TSPoint p = ts.getPoint();
  lcd.restoreBus();

  if (p.z > 200 && p.z < 1000) {
    int x = map(p.x, TS_MINX, TS_MAXX, 0, lcd.width());
    int y = map(p.y, TS_MINY, TS_MAXY, 0, lcd.height());

    if (x >= 0 && x < lcd.width() && y >= 0 && y < lcd.height()) {
      lcd.fillCircle(x, y, 2, TFT_WHITE);
    }
  }
  delay(10);
}`,
    tags: ["ESP32", "Pantalla TFT ILI9341", "LovyanGFX", "TouchScreen Resistivo", "Bus Paralelo 8-bit", "Diseño de Interfaces GUI", "Pizarra Digital"],
    shortDesc: "Desarrollo de interfaces gráficas interactivas y pizarra táctil sobre pantallas TFT a color gobernadas por microcontrolador ESP32 mediante bus paralelo.",
    whatIs: "Proyecto enfocado en la concepción, renderizado y optimización de interfaces gráficas de usuario (GUI) en tiempo real para pantallas TFT color con controlador ILI9341 y panel táctil resistivo. Abarca el manejo de controladores gráficos de alta velocidad y la creación de componentes interactivos como lienzos de dibujo, menús táctiles y paneles de visualización digital.",
    whatIDid: "Mapeo de hardware y configuración del bus paralelo de 8 bits en microcontrolador ESP32 aprovechando el acelerador de la biblioteca LovyanGFX para maximizar la tasa de cuadros por segundo (FPS) sin parpadeo. Implementación de la calibración del panel táctil resistivo con resolución de coordenadas X/Y y desarrollo de una pizarra digital interactiva que responde de manera inmediata al tacto directo.",
    highlights: [
      "Configuración optimizada de bus paralelo de 8 bits en ESP32 para alta velocidad de refresco",
      "Rutina de muestreo y calibración precisa de panel táctil resistivo X/Y",
      "Renderizado de componentes de interfaz gráfica, tipografías escalables y lienzo de pizarra interactiva"
    ]
  },
  {
    id: "control-velocidad-ventilador-mcu",
    title: "Consola Modular de Control de Velocidad y Tacómetro para Ventilador de Alto Rendimiento",
    category: "embedded",
    categoryLabel: "Sistemas Embebidos & Control",
    tag: "Instrumentación & Control",
    mediaType: "image",
    mediaUrl: "control_velocidad_ventilador_mcu.jpg?v=2",
    secondaryMedia: [],
    tags: ["Arduino Mega", "Sensor Efecto Hall", "Ventilador de Servidor", "Control PWM", "Display LCD 16x2", "Teclado Matricial 4x4", "Consola Portátil Modular"],
    shortDesc: "Consola portátil modular gobernada por Arduino Mega para el control de velocidad en lazo cerrado y calibración de ventilador de alto flujo mediante sensor Hall.",
    whatIs: "Instrumento electrónico modular diseñado para el accionamiento, calibración de velocidad y monitoreo en tiempo real de RPM en ventiladores de alta velocidad y alto flujo (servidor / cómputo). Su arquitectura compacta permite operar como una unidad autónoma con interfaz de usuario integrada para ajuste de consigna, perfiles de giro y rutinas de calibración.",
    whatIDid: "Desarrollo del hardware y programación del firmware en microcontrolador Arduino Mega montado en un gabinete portátil con asa. Integración de la etapa de modulación PWM y lectura de los trenes de pulsos provenientes del sensor de efecto Hall interno del ventilador para el cálculo de RPM instantáneas mediante interrupciones de hardware. Programación de un menú interactivo en pantalla LCD 16x2 comandado por teclado matricial 4x4 («Calibrar motor? A:Si B:Omitir») para ejecución de pruebas dinámicas, auto-cero y control de revoluciones.",
    highlights: [
      "Lectura precisa de frecuencia y RPM en tiempo real aprovechando el sensor de efecto Hall integrado",
      "Consola portátil autónoma con interfaz de operación basada en display LCD 16x2 y teclado matricial 4x4",
      "Rutina interactiva de calibración y control de modulación PWM desarrollado en Arduino Mega"
    ]
  },
  {
    id: "motor-trifasico-potencia",
    title: "Controlador de Motor Trifásico por Tiristores (SCR) y Cruce por Cero",
    category: "power",
    categoryLabel: "Electrónica de Potencia",
    tag: "Laboratorio BUAP",
    mediaType: "video",
    mediaUrl: "Video de WhatsApp 2025-10-18 a las 21.17.49_cada7f34.mp4",
    posterUrl: "video_thumbs/Video de WhatsApp 2025-10.jpg",
    secondaryMedia: [
      "motor trifasico.png",
      "WhatsApp Image 2026-09-22 at 4.28.00 PM.jpeg",
      "WhatsApp Image 2026-09-22 at 4.27.35 PM.jpeg",
      "WhatsApp Image 2026-09-22 at 4.28.51 PM.jpeg",
      "WhatsApp Image 2026-09-22 at 5.40.00 PM.jpeg"
    ],
    tags: ["Motor Trifásico Industrial", "Tiristores SCR", "Optoacopladores MOC3021", "Cruce por Cero PC817", "Proteus", "Osciloscopio Tektronix", "Laboratorio BUAP"],
    shortDesc: "Puente rectificador/controlador trifásico de 6 pulsos para motor industrial, con disparo sincronizado por ángulo de fase y aislamiento galvánico.",
    whatIs: "Sistema electrónico de potencia capaz de modular la energía suministrada a un motor de inducción trifásico industrial de 3 fases mediante conmutación controlada por tiristores SCR.",
    whatIDid: "Diseño y simulación del circuito completo en Proteus ISIS a partir de la base desarrollada en el prototipo monofásico de cruce por cero. Montaje físico en banco de pruebas con optoacopladores de pulso MOC3021 para aislamiento entre la lógica de control y las tres fases de alta tensión, junto a optoacoplador PC817 para sincronización de fase. Calibración del ángulo de disparo mediante osciloscopio Tektronix TDS 2002C analizando las señales senoidales y puesta en marcha del motor trifásico industrial con variación suave de velocidad.",
    highlights: [
      "Aislamiento galvánico total entre la etapa lógica y las fases de potencia trifásica",
      "Modulación precisa del ángulo de disparo alfa (0° a 180°)",
      "Validación experimental con motor trifásico industrial en laboratorios de la BUAP"
    ]
  },
  {
    id: "modulo-cruce-cero-mcu",
    title: "Prototipo de Control de Fase y Cruce por Cero con Microcontrolador",
    category: "power",
    categoryLabel: "Electrónica de Potencia",
    tag: "Prueba de Concepto / MCU",
    mediaType: "video",
    mediaUrl: "VID-20241128-WA0026.mp4",
    posterUrl: "video_thumbs/VID-20241128-WA0026.jpg",
    secondaryMedia: [
      "WhatsApp Image 2026-09-22 at 4.35.30 PM.jpeg",
      "WhatsApp Image 2026-09-22 at 4.35.48 PM.jpeg"
    ],
    tags: ["Arduino Mega", "Cruce por Cero", "Optoacoplador", "Corte de Fase", "Potenciómetros Analógicos", "Osciloscopio Digital", "Control de Motores"],
    shortDesc: "Diseño y validación de etapa de sincronización por cruce por cero y corte de fase analógica en microcontrolador como base para control de motores.",
    whatIs: "Sistema de prueba de concepto para la modulación de potencia eléctrica en corriente alterna mediante control digital. Su propósito fue validar el algoritmo de detección de cruce por cero (zero-crossing) y la temporización precisa de los pulsos de disparo para variar la velocidad de motores antes de escalar al sistema trifásico.",
    whatIDid: "Implementación en Arduino Mega de la lectura de dos potenciómetros como referencias analógicas de velocidad y ajuste. Uso de un optoacoplador para censar el cruce por cero de la línea de red y sincronizar interrupciones en el microcontrolador. Programación del corte exacto en la señal análoga de alimentación y verificación experimental de la potencia entregada utilizando un foco incandescente como carga de prueba y osciloscopio para capturar el instante de conmutación.",
    highlights: [
      "Detección precisa del cruce por cero con aislamiento optoelectrónico e interrupciones de hardware",
      "Ajuste dinámico de velocidad mediante referencias analógicas con potenciómetros",
      "Base algorítmica y circuital que sirvió para el diseño del controlador de motor trifásico industrial"
    ]
  },
  {
    id: "dimmer-scr-diac-baquelita",
    title: "Placa Controladora de Potencia con SCR y DIAC en Baquelita Perforada",
    category: "power",
    categoryLabel: "Electrónica de Potencia",
    tag: "Potencia & Simulación BUAP",
    mediaType: "video",
    mediaUrl: "bandicam_scr_proteus.mp4",
    posterUrl: "video_thumbs/bandicam_thumb.jpg",
    secondaryMedia: [
      "Dimer scr proteus.png",
      "Imagen de WhatsApp 2025-09-20 a las 20.43.02_0caadc71.jpg",
      "Imagen de WhatsApp 2025-09-25 a las 19.40.56_6a8cc3ef.png"
    ],
    tags: ["Tiristor SCR", "DIAC", "Baquelita Perforada", "Proteus 8 Professional", "Osciloscopio Digital", "Control de Fase AC", "Bandicam Demo"],
    shortDesc: "Diseño, simulación en Proteus y construcción física en baquelita perforada de una tarjeta de control de fase AC con SCR y DIAC.",
    whatIs: "Circuito de modulación de potencia eléctrica para corriente alterna (120V AC) basado en la conmutación controlada por ángulo de fase, utilizando un tiristor SCR disparado mediante la ruptura simétrica de un DIAC.",
    whatIDid: "Modelado y simulación interactiva en Proteus 8 Professional verificando la respuesta de la señal senoidal recortada en el osciloscopio virtual ante variaciones del potenciómetro. Posteriormente, ensamble físico y soldadura de los componentes (red RC, potenciómetro, resistencias de precisión, DIAC y tiristor SCR) en baquelita perforada (perfboard). Validación experimental en el laboratorio de la BUAP comprobando la forma de onda a 120.04 Hz en osciloscopio digital GW Instek.",
    highlights: [
      "Simulación dinámica capturada en video demostrativo de Proteus 8 con osciloscopio virtual",
      "Ensamble artesanal y soldadura en placa de baquelita perforada con potenciómetro integrado",
      "Contraste y coincidencia perfecta entre la forma de onda simulada y la medida a 120 Hz en osciloscopio real"
    ]
  },
  {
    id: "fpga-spartan3e-servo",
    title: "Controlador PWM para Servomotor Futaba y Display LCD en FPGA Spartan-3E",
    category: "fpga",
    categoryLabel: "FPGAs & Lógica Digital",
    tag: "Lógica Digital Pura en VHDL",
    mediaType: "video",
    mediaUrl: "WhatsApp Video 2024-10-09 at 11.10.15 PM.mp4",
    posterUrl: "video_thumbs/WhatsApp Video 2024-10-09.jpg",
    secondaryMedia: ["WhatsApp Image 2024-10-09 at 11.09.43 PM.png"],
    tags: ["Xilinx Spartan-3E", "VHDL", "Generador PWM Hardware", "Display LCD 16x2", "Servomotor Futaba 3000", "Control por Potenciómetro", "Máquinas de Estado FSM"],
    shortDesc: "Control de ángulo para servomotor Futaba 3000 y display LCD 16x2 implementado 100% en hardware digital con FPGA Spartan-3E gobernado por potenciómetro rotativo.",
    whatIs: "Sistema de control angular y visualización en tiempo real implementado íntegramente en arquitectura lógica digital reconfigurable (FPGA Xilinx Spartan-3E). Toda la lógica de control, el muestreo de la consigna mediante la perilla/potenciómetro de la tarjeta, la generación del tren de pulsos PWM a 50 Hz y el driver de la pantalla LCD 16x2 fueron sintetizados en hardware a nivel compuertas, prescindiendo por completo de microcontroladores.",
    whatIDid: "Diseño y síntesis de módulos en VHDL para la tarjeta Digilent Spartan-3E. Se implementó la lógica digital para interpretar el ajuste angular proveniente del potenciómetro/perilla rotativa de la tarjeta y transferirlo simultáneamente a dos bloques: por un lado, un modulador PWM a 50 Hz con ancho de pulso de precisión de microsegundos libre de fluctuaciones para orientar con exactitud el servomotor Futaba 3000; y por otro lado, una máquina de estados finitos (FSM) que controla la inicialización y refresco del display alfanumérico LCD 16x2 integrado en la tarjeta, reflejando el ángulo actual («ANGULO: 000°» y «POS 5»).",
    highlights: [
      "Arquitectura 100% digital concurrente sintetizada en VHDL para FPGA Spartan-3E",
      "Control angular suave y sin jitter para servomotor industrial Futaba 3000 accionado por potenciómetro",
      "Driver para pantalla LCD 16x2 HD44780 gobernado por máquina de estados finitos (FSM)"
    ]
  },
  {
    id: "fpga-spartan6-ultrasonico",
    title: "Telemetría Ultrasónica y Procesamiento Digital en FPGA Spartan-6 (Nexys 3)",
    category: "fpga",
    categoryLabel: "FPGAs & Lógica Digital",
    tag: "Lógica Digital & VHDL",
    mediaType: "image",
    mediaUrl: "WhatsApp Image 2026-09-22 at 4.26.35 PM.jpeg",
    secondaryMedia: [],
    tags: ["Xilinx Spartan-6", "Digilent Nexys 3", "VHDL", "Sensor HC-SR04", "Arduino Mega", "Displays 7 Segmentos", "Puertos PMOD"],
    shortDesc: "Integración híbrida entre Arduino Mega y FPGA Spartan-6 para adquisición ultrasónica HC-SR04, procesamiento concurrente y visualización en tiempo real.",
    whatIs: "Sistema embebido híbrido de instrumentación y procesamiento digital. Combina un microcontrolador Arduino Mega para la gestión y transmisión de señales del sensor ultrasónico HC-SR04 con la velocidad de procesamiento concurrente de una FPGA Xilinx Spartan-6 (Digilent Nexys 3), la cual recibe los datos, calcula la distancia y comanda la visualización en hardware.",
    whatIDid: "Implementación del enlace de comunicación y temporización entre el Arduino Mega y la tarjeta Digilent Nexys 3 conectada a través de sus puertos PMOD. El Arduino se encargaba de comandar los trenes de pulso y la lectura del sensor HC-SR04 para transferir la información hacia la FPGA. En la Spartan-6, se diseñó la lógica digital en VHDL para la captura de las señales, la conversión a unidades métricas y la multiplexación de los displays de 7 segmentos para desplegar instantáneamente la distancia medida.",
    highlights: [
      "Arquitectura cooperativa MCU-FPGA comunicando Arduino Mega y Xilinx Spartan-6 mediante pines PMOD",
      "Procesamiento y decodificación de datos de distancia en hardware digital VHDL sin sobrecarga computacional",
      "Control y multiplexado dinámico de visualizadores para despliegue numérico en tiempo real"
    ]
  },
  {
    id: "rf-antena-microstrip-espectro",
    title: "Diseño de Antena Microstrip Patch y Caracterización Espectral a 2.45 GHz",
    category: "rf",
    categoryLabel: "RF & Microondas",
    tag: "Microondas & RF",
    mediaType: "image",
    mediaUrl: "Imagen de WhatsApp 2025-09-20 a las 21.15.06_2bed19f5.jpg",
    secondaryMedia: ["WhatsApp Image 2026-09-22 at 5.40.32 PM.jpeg"],
    tags: ["Antena Patch 2.4 GHz", "Conector SMA", "Analizador de Espectro", "Línea Microstrip", "Banda ISM", "Impedancia 50Ω"],
    shortDesc: "Fabricación de antena plana de cobre sobre sustrato dieléctrico sintonizada a 2.4 GHz y medición de pico de resonancia en analizador de RF a 2.450 GHz.",
    whatIs: "Diseño electromagnético, dimensionamiento y validación experimental de una antena de parche microstrip resonante para aplicaciones inalámbricas en la banda libre industrial, científica y médica (ISM 2.4 GHz).",
    whatIDid: "Cálculo geométrico del parche radiante y la ranura de acoplamiento para matching de impedancia a 50 ohmios. Fabricación física con conector hembra SMA dorado de montaje en borde. Evaluación en analizador de espectro de alta frecuencia constatando la frecuencia central exacta a 2.450 000 000 GHz con nivel de señal y pureza espectral óptimos para WiFi/Bluetooth.",
    highlights: [
      "Resonancia exacta validada en 2.450 GHz en pantalla de analizador de espectro",
      "Adaptación de impedancia directa por línea microstrip plana",
      "Proceso completo desde cálculo electromagnético hasta prueba en banco de RF"
    ]
  },
  {
    id: "ai-vision-detection",
    title: "Pipeline de Visión por Computadora & Detección de Patrones con IA",
    category: "ai",
    categoryLabel: "IA & Visión Artificial",
    tag: "Computer Vision & Deep Learning",
    mediaType: "image",
    mediaUrl: "analiis imagen ia.jpg",
    secondaryMedia: [],
    downloadUrl: "base_apnr.py",
    downloadName: "base_apnr.py",
    codeFilename: "base_apnr.py",
    codeSnippet: `import cv2
from fast_alpr import ALPR

# ============================================================
# CONFIGURACION DEL PIPELINE DE VISION ARTIFICIAL
# ============================================================
CAMARA_INDEX = 0  # Ajustar indice segun camara conectada

print("Cargando modelos neuronales (YOLOv9 + OCR)...", flush=True)
alpr = ALPR(
    detector_model="yolo-v9-t-384-license-plate-end2end",
    ocr_model="cct-xs-v2-global-model",
)

# Inicializacion de captura de video con backend DirectShow
cap = None
for idx in [0, 1, 2]:
    print(f"Probando conexion con camara {idx}...", flush=True)
    cap_test = cv2.VideoCapture(idx, cv2.CAP_DSHOW)
    if cap_test.isOpened():
        cap = cap_test
        print(f"Camara {idx} abierta exitosamente.", flush=True)
        break
    cap_test.release()

if cap is None or not cap.isOpened():
    raise SystemExit("Error: No se pudo abrir ninguna camara conectada.")

cap.set(cv2.CAP_PROP_BUFFERSIZE, 1)
print("Pipeline activo. Presiona 'q' para salir de la visualizacion.", flush=True)

try:
    while True:
        ok, frame = cap.read()
        if not ok:
            continue

        # Inferencia en tiempo real sobre frame capturado
        results = alpr.predict(frame)
        for r in results:
            x1, y1, x2, y2 = r.detection.box
            # Dibujar caja delimitadora (Bounding Box)
            cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 242, 254), 2)
            cv2.putText(frame, f"{r.ocr.text} ({r.ocr.confidence:.2f})", 
                        (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 242, 254), 2)

        cv2.imshow("Inferencia en Tiempo Real - FastALPR", frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
finally:
    cap.release()
    cv2.destroyAllWindows()`,
    tags: ["Python", "OpenCV", "Deep Learning", "FastAPI", "Inferencia en Tiempo Real", "Detección de Objetos"],
    shortDesc: "Sistema de visión artificial en tiempo real desarrollado en Python para detección multiobjeto y extracción de características sobre video en vivo.",
    whatIs: "Arquitectura de procesamiento digital de imágenes y visión computacional que procesa flujos de video en vivo provenientes de cámara, aplicando modelos de redes neuronales convolucionales para detección espacial, delimitación por bounding boxes y reconocimiento óptico de caracteres.",
    whatIDid: "Desarrollo del pipeline de inferencia en Python utilizando OpenCV con aceleración DSHOW y modelos neuronales optimizados para ejecución fluida en ventana interactiva. Implementación de una arquitectura modular conectada a endpoints en FastAPI para ingesta de video, extracción de coordenadas espaciales, análisis probabilístico de confianza y despliegue gráfico en tiempo real.",
    highlights: [
      "Inferencia multiobjeto de alta velocidad y bajo retraso directamente sobre video en vivo",
      "Filtrado morfológico y normalización de imagen ante variaciones drásticas de luz y reflejos",
      "Integración de modelos neuronales con arquitectura de servicios backend en FastAPI"
    ]
  },
  {
    id: "optica-difraccion-laser-grafito",
    title: "Difracción y Dispersión de Haz Láser por Mina de Grafito en Cuarto Oscuro",
    category: "vlsi",
    categoryLabel: "Física Óptica & Láser",
    tag: "Óptica Ondulatoria",
    mediaType: "image",
    mediaUrl: "WhatsApp Image 2026-09-22 at 4.32.30 PM.jpeg",
    secondaryMedia: [],
    tags: ["Difracción de Fraunhofer", "Haz Láser Rojo", "Mina de Grafito", "Cuarto Oscuro", "Óptica Ondulatoria", "Dispersión de Luz"],
    shortDesc: "Demostración experimental del fenómeno de difracción y dispersión transversal de un haz láser al incidir sobre una mina cilíndrica de grafito en cuarto oscuro.",
    whatIs: "Experimento de óptica física y ondulatoria que ilustra el principio de difracción electromagnética. Al hacer incidir un haz de luz láser monocromática sobre un obstáculo cilíndrico opaco y estrecho (una mina de lápiz de grafito), la luz se dispersa perpendicularmente formando un patrón lineal de difracción característico en un entorno de cuarto oscuro.",
    whatIDid: "Montaje y alineación geométrica del emisor láser hacia la mina de grafito en una cámara oscura para eliminar cualquier ruido lumínico parásito. Calibración del ángulo de incidencia para maximizar la dispersión transversal del haz coherente y registro fotográfico de alta resolución del patrón de difracción proyectado a lo largo de la superficie de prueba.",
    highlights: [
      "Comprobación experimental del fenómeno de difracción luminosa en medio confinado",
      "Montaje en cuarto oscuro para máxima nitidez del haz y franjas de dispersión",
      "Demostración de óptica electromagnética utilizando una mina de grafito como elemento difractor"
    ]
  },
  {
    id: "iot-esp32-mesh-ap",
    title: "Arquitectura IoT Distribuida Maestro-Esclavo con ESP32 (SoftAP & REST)",
    category: "embedded",
    categoryLabel: "Sistemas Embebidos & IoT",
    tag: "Redes Inalámbricas & IoT",
    mediaType: "image",
    mediaUrl: "WhatsApp Image 2026-09-22 at 4.43.02 PM.jpeg",
    secondaryMedia: [],
    downloadUrl: "maeto_copy_20260922172351/maeto_copy_20260922172351.ino",
    downloadName: "esp32_softap_server.ino",
    codeFilename: "esp32_softap_server.ino",
    codeSnippet: `#include "WiFi.h"
#include "ESPAsyncWebServer.h"

// 1. CONFIGURACION DE RED LOCAL AUTONOMA (SoftAP)
const char* ssid = "ESP32-Access-Point";
const char* password = "ClaveSegura123";

const int buttonPin = 4;
AsyncWebServer server(80);

String readButtonState() {
  int buttonState = digitalRead(buttonPin);
  return (buttonState == HIGH) ? "PRESIONADO" : "NO PRESIONADO";
}

void setup() {
  Serial.begin(115200);
  pinMode(buttonPin, INPUT);

  // Iniciar punto de acceso autonomo
  Serial.print("Iniciando SoftAP...");
  WiFi.softAP(ssid, password);

  IPAddress IP = WiFi.softAPIP();
  Serial.print("IP del Servidor ESP32: ");
  Serial.println(IP);

  // 2. ENDPOINTS REST PARA NODOS CLIENTES
  server.on("/button", HTTP_GET, [](AsyncWebServerRequest *request) {
    String message = readButtonState();
    request->send(200, "text/plain", message);
  });

  server.begin();
  Serial.println("Servidor HTTP asincrono listo.");
}

void loop() {
  // Manejo de eventos asincrono en background
}`,
    tags: ["ESP32 SoftAP", "ESPAsyncWebServer", "HTTPClient REST", "C++", "Red Autónoma", "Firmware"],
    shortDesc: "Red inalámbrica punto a punto ad-hoc entre microcontroladores ESP32 sin requerir router externo, comunicando estados de sensores y actuadores.",
    whatIs: "Arquitectura de comunicación inalámbrica local y descentralizada donde un nodo ESP32 actúa como Access Point autónomo y servidor HTTP asíncrono, mientras nodos esclavos se asocian como clientes para intercambiar telemetría y comandos de acción en milisegundos.",
    whatIDid: "Programación en C++ con ESP-IDF / Arduino core. El nodo maestro levanta un SoftAP con credenciales seguras y expone un endpoint REST no bloqueante (`/button`). El nodo esclavo realiza polling HTTP inteligente con manejo de reintentos y control de actuadores lumínicos/relevadores según el estado reportado.",
    highlights: [
      "Operación 100% autónoma sin depender de routers ni infraestructura de internet",
      "Servidor asíncrono no bloqueante capaz de atender múltiples clientes concurrentes",
      "Mecanismo de reconexión automática instantánea ante cortes de señal"
    ]
  },
  {
    id: "incubadora-biogas-termica",
    title: "Incubadora para Producción de Biogás con Control Térmico y Sensor de Gas",
    category: "embedded",
    categoryLabel: "Sistemas Embebidos & Control",
    tag: "Servicio Social / Bioprocesos",
    mediaType: "image",
    mediaUrl: "WhatsApp Image 2026-09-22 at 4.33.22 PM.jpeg",
    secondaryMedia: [
      "Control de invernadero por temepratura.png",
      "Imagen de WhatsApp 2025-06-15 a las 21.50.13_9232f2a1.jpg"
    ],
    tags: ["Servicio Social", "Incubadora Biogás", "Arduino", "Sensor DS18B20", "Sensor MQ Gas", "Relevadores 127V", "Proteus", "Control en Lazo Cerrado"],
    shortDesc: "Sistema de control térmico en lazo cerrado y monitoreo de gas desarrollado durante el servicio social para una incubadora de muestras generadoras de biogás.",
    whatIs: "Cámara de incubación automatizada desarrollada para optimizar la digestión anaerobia y producción de biogás. Su objetivo es mantener las muestras biológicas en el rango térmico exacto para maximizar la actividad bacteriana, integrando además monitoreo de gases mediante sensores en conducto.",
    whatIDid: "Desarrollo y programación del firmware en microcontrolador Arduino y simulación del circuito en Proteus. El sensor digital de temperatura DS18B20 se introdujo directamente dentro de las muestras para registrar la temperatura interna con máxima precisión. Con base en esta lectura, el sistema conmutaba mediante relevadores entre un foco incandescente de 127V (para calefacción) y un ventilador (para enfriamiento forzado). Adicionalmente, se integró un sensor de la serie MQ adaptado a la línea de tubería para registrar los gases emanados.",
    highlights: [
      "Medición de temperatura directa e in-situ dentro de las muestras biológicas con sensor digital DS18B20",
      "Control térmico automatizado en lazo cerrado con doble etapa: foco calefactor y ventilador disipador",
      "Monitoreo de gases en línea acoplando sensor de la serie MQ en ducto de latón sellado"
    ]
  },
  {
    id: "parrilla-electrica-thermal-blueprint",
    title: "Parrilla Eléctrica Resistiva & Manual Técnico 'Thermal Blueprint'",
    category: "power",
    categoryLabel: "Electrónica de Potencia & Térmica",
    tag: "Diseño Térmico & Educación",
    mediaType: "image",
    mediaUrl: "WhatsApp Image 2026-09-22 at 4.38.24 PM.jpeg",
    pdfUrl: "Thermal_Blueprint.pdf",
    pdfName: "Thermal_Blueprint.pdf (Manual del Curso)",
    secondaryMedia: [],
    tags: ["Parrilla Eléctrica", "Resistencia Nicrom", "Ladrillo Refractario", "Thermal Blueprint (PDF)", "Efecto Joule", "Cálculo de Potencia", "Ingeniería Práctica"],
    shortDesc: "Diseño y construcción de parrilla eléctrica de alta temperatura con resistencia en ladrillo refractario, complementada con el manual técnico educativo 'Thermal Blueprint'.",
    whatIs: "Proyecto integral de ingeniería térmica y contenido educativo. Consiste en la construcción de una parrilla eléctrica de alto rendimiento térmico con resistencia resistiva encauzada en ladrillo refractario, articulada con el manual técnico 'Thermal Blueprint' que fusiona la formulación teórica de calor con el montaje práctico en taller.",
    whatIDid: "Mecanizado y ranurado manual del canal serpentino en ladrillo refractario para alojar y mantener aislada la resistencia calefactora de ferretería bajo régimen incandescente continuo. Cálculo de impedancia, disipación por efecto Joule y dimensionamiento de conexiones eléctricas seguras. Redacción y diagramación del manual didáctico 'Thermal Blueprint.pdf' estructurado para enseñar a estudiantes y entusiastas la ingeniería detrás de la construcción de parrillas eléctricas.",
    highlights: [
      "Canalización precisa de resistencia al rojo vivo en matriz de ladrillo refractario para alta inercia térmica",
      "Cálculo de potencia eléctrica, corriente nominal y aislamiento térmico por efecto Joule",
      "Publicación del manual técnico 'Thermal Blueprint.pdf' que acompaña el proyecto como curso práctico"
    ]
  },
  {
    id: "trng-generador-ruido-rosa",
    title: "Generador de Números Aleatorios Verdaderos por Ruido Físico (TRNG)",
    category: "embedded",
    categoryLabel: "Sistemas Embebidos & IoT",
    tag: "Criptografía & Hardware",
    mediaType: "image",
    mediaUrl: "WhatsApp Image 2026-09-22 at 4.24.37 PM.jpeg",
    secondaryMedia: [
      "genertador de numeros alatoios por rsuido.png",
      "WhatsApp Image 2026-09-22 at 4.24.56 PM.jpeg"
    ],
    tags: ["TRNG", "ADC0804 (8 Bits)", "Reloj Astable NE555", "Micrófono Electret", "Preamplificador Analógico", "Arduino", "Exportación a Excel", "Ruido Rosa (HMF2550)", "Proteus"],
    shortDesc: "Diseño e implementación de un generador TRNG por entropía física capturando ruido analógico con micrófono electret, reloj astable 555 y ADC0804, leído por Arduino y exportado a Excel.",
    whatIs: "Sistema generador de números aleatorios por hardware (TRNG - True Random Number Generator) que extrae entropía de fluctuaciones físicas reales del entorno capturadas por un micrófono electret preamplificado (y contrastado con ruido rosa). Al convertir este ruido analógico continuo en palabras binarias de 8 bits mediante un convertidor analógico a digital ADC0804, se obtienen secuencias verdaderamente impredecibles para criptografía o simulación estocástica.",
    whatIDid: "Diseño esquemático y simulación en Proteus incorporando el convertidor ADC0804 junto a un temporizador NE555 en configuración astable encargado de proporcionar la señal de reloj externa para el muestreo del ADC (un circuito integrado sumamente delicado en su sincronía de reloj, referencias de voltaje y polarización analógica). En la etapa física en protoboard, se acondicionó la señal de un micrófono electret con un amplificador para alimentar la entrada analógica del ADC con ruido acústico ambiental, y se validó en laboratorio inyectando 10 Vpp de ruido rosa mediante un generador arbitrario Rohde & Schwarz / HAMEG HMF2550. Un microcontrolador Arduino se encargó de leer el bus paralelo de salida de 8 bits del ADC y transmitir el flujo de bytes hacia la PC para guardarlos automáticamente en Excel para su posterior análisis estadístico.",
    highlights: [
      "Generación de reloj de muestreo externo estable con temporizador NE555 en modo astable",
      "Digitalización precisa de 8 bits en paralelo dominando la calibración y temporización del ADC0804",
      "Captura de ruido con micrófono electret preamplificado, validación con generador HMF2550 y guardado en Excel vía Arduino"
    ]
  },
  {
    id: "plc-automatizacion-industrial",
    title: "Banco de Pruebas de Automatización Industrial con PLC y Control SCADA",
    category: "power",
    categoryLabel: "Electrónica de Potencia",
    tag: "Automatización Industrial",
    mediaType: "video",
    mediaUrl: "Video de WhatsApp 2025-04-06 a las 13.32.15_955fcc91.mp4",
    posterUrl: "video_thumbs/Video de WhatsApp 2025-04.jpg",
    tags: ["PLC Industrial", "Lógica de Relevación", "Contactores", "SCADA / HMI", "Variador de Frecuencia", "Seguridad Eléctrica"],
    shortDesc: "Estación de control electromecánico para maniobra y protección de motores trifásicos, secuenciamiento lógico y supervisión en pantalla.",
    whatIs: "Módulo industrial para el diseño, cableado y programación de tableros de control con controladores lógicos programables (PLC), botoneras de mando, lámparas de señalización y protecciones térmicas de potencia.",
    whatIDid: "Configuración y cableado de líneas de control y fuerza en banco didáctico-industrial. Programación de diagramas de escalera (Ladder Logic) para rutinas de arranque estrella-triángulo, inversión de giro y frenado dinámico, sincronizado con monitor de supervisión y monitoreo de alarmas en tiempo real.",
    highlights: [
      "Diseño conforme a normas de seguridad eléctrica industrial y paros de emergencia",
      "Integración de interfaz HMI con diagnóstico de fallas y estado de contactores",
      "Experiencia práctica en maniobra de potencia y cableado de tableros industriales"
    ]
  },
  {
    id: "robotica-3d-cad",
    title: "Modelado Cinemático CAD 3D & Manufactura Aditiva de Gran Formato",
    category: "robotics",
    categoryLabel: "Robótica & CAD 3D",
    tag: "Robótica & Manufactura",
    mediaType: "image",
    mediaUrl: "robot 3gdl.png",
    secondaryMedia: [
      "robot catesiano.png",
      "WhatsApp Image 2026-09-22 at 4.43.52 PM.jpeg",
      "WhatsApp Image 2026-09-22 at 4.46.07 PM.jpeg"
    ],
    tags: ["Brazo Robótico 3 GDL", "Mecanismo Cremallera-Piñón", "CAD 3D", "Creality Ender", "Servomotores", "Calibración XYZ"],
    shortDesc: "Diseño mecánico de robots manipuladores y ejes cartesianos impresos en 3D en máquinas Creality de gran formato.",
    whatIs: "Desarrollo de sistemas mecánicos y robóticos desde la concepción en modelado 3D paramétrico, simulación cinemática, hasta la fabricación aditiva y calibración dimensional.",
    whatIDid: "Modelado en CAD 3D de un brazo articulado de 3 Grados de Libertad (3 GDL) con soporte para servomotores y base de control Arduino, así como un actuador lineal de cremallera y piñón para eje cartesiano Z/X de alta rigidez. Puesta a punto y operación de impresora 3D Creality Ender de gran volumen de impresión y control de tolerancias micrométricas mediante cubos de calibración XYZ.",
    highlights: [
      "Optimización estructural para máxima rigidez mecánica con mínimo peso",
      "Compatibilidad de montaje con servomotores de alto torque estándar",
      "Control fino de parámetros de impresión aditiva (altura de capa, retracción, temperatura)"
    ]
  },
  {
    id: "domotica-pir-sensor",
    title: "Automatización Residencial por Detección de Movimiento Infrarrojo (PIR)",
    category: "embedded",
    categoryLabel: "Sistemas Embebidos & IoT",
    tag: "Domótica & Sensores",
    mediaType: "video",
    mediaUrl: "New Blank Diagram Project - Wokwi Simulator - Google Chrome 2026-04-19 22-46-35 (online-video-cutter.com).mp4",
    posterUrl: "video_thumbs/New Blank Diagram Project.jpg",
    secondaryMedia: ["WhatsApp Image 2026-09-22 at 4.39.24 PM.jpeg"],
    tags: ["Sensor PIR HC-SR501", "Wokwi Simulator", "Módulo Relé 5V", "Inversor Lógico", "127V Iluminación"],
    shortDesc: "Conmutador inteligente de iluminación activado por presencia, validado en simulador Wokwi y prototipado físico autónomo.",
    whatIs: "Sistema de encendido y apagado automático de luminarias residenciales mediante detección piroeléctrica infrarroja de movimiento corporal.",
    whatIDid: "Simulación esquemática en el entorno online Wokwi evaluando la respuesta del sensor PIR y la conmutación de compuertas lógicas hacia el relé de aislamiento. Construcción de módulo autónomo conectado a foco de 127V de corriente alterna para ahorro energético en pasillos e interiores.",
    highlights: [
      "Simulación virtual interactiva previa al ensamblaje físico",
      "Módulo compacto con conector directo a clavija de red eléctrica",
      "Temporización ajustable de permanencia de encendido y umbral de luz"
    ]
  }
];

// ==========================================================================
// ARQUITECTURA MVC (MODELO - VISTA - CONTROLADOR)
// ==========================================================================

/**
 * --------------------------------------------------------------------------
 * 1. MODELO (PortfolioModel)
 * Gestiona el estado de la aplicación, los proyectos, medios y filtros.
 * --------------------------------------------------------------------------
 */
class PortfolioModel {
  constructor(projects = []) {
    this.projects = projects;
    this.currentCategory = "all";
    this.currentSearchQuery = "";
    this.activeProject = null;
    this.activeMediaIndex = 0;
  }

  setCategory(category) {
    this.currentCategory = category || "all";
  }

  setSearchQuery(query) {
    this.currentSearchQuery = (query || "").trim();
  }

  getFilteredProjects() {
    return this.projects.filter(project => {
      const matchesCategory = this.currentCategory === "all" || project.category === this.currentCategory;
      const query = this.currentSearchQuery.toLowerCase();

      if (!query) return matchesCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.shortDesc.toLowerCase().includes(query) ||
        project.whatIs.toLowerCase().includes(query) ||
        project.whatIDid.toLowerCase().includes(query) ||
        (project.tags && project.tags.some(tag => tag.toLowerCase().includes(query))) ||
        (project.tag && project.tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }

  getProjectById(id) {
    return this.projects.find(p => p.id === id) || null;
  }

  getAllMedia(project) {
    if (!project) return [];
    const media = [
      {
        type: project.mediaType,
        url: project.mediaUrl,
        poster: project.posterUrl || ""
      }
    ];

    if (project.secondaryMedia && project.secondaryMedia.length > 0) {
      project.secondaryMedia.forEach(secUrl => {
        const isSecVideo = secUrl.toLowerCase().endsWith(".mp4");
        media.push({
          type: isSecVideo ? "video" : "image",
          url: secUrl,
          poster: ""
        });
      });
    }

    return media;
  }

  setActiveProject(projectId, initialIndex = 0) {
    const project = this.getProjectById(projectId);
    if (!project) return null;

    this.activeProject = project;
    const mediaList = this.getAllMedia(project);
    this.activeMediaIndex = (initialIndex >= 0 && initialIndex < mediaList.length) ? initialIndex : 0;

    return {
      project: this.activeProject,
      mediaList,
      currentIndex: this.activeMediaIndex
    };
  }

  clearActiveProject() {
    this.activeProject = null;
    this.activeMediaIndex = 0;
  }

  stepMedia(direction) {
    if (!this.activeProject) return null;
    const mediaList = this.getAllMedia(this.activeProject);
    if (mediaList.length <= 1) {
      return { mediaList, currentIndex: this.activeMediaIndex };
    }

    this.activeMediaIndex = (this.activeMediaIndex + direction + mediaList.length) % mediaList.length;
    return {
      mediaList,
      currentIndex: this.activeMediaIndex
    };
  }

  setMediaIndex(index) {
    if (!this.activeProject) return null;
    const mediaList = this.getAllMedia(this.activeProject);
    if (index >= 0 && index < mediaList.length) {
      this.activeMediaIndex = index;
    }
    return {
      mediaList,
      currentIndex: this.activeMediaIndex
    };
  }

  resetFilters() {
    this.currentCategory = "all";
    this.currentSearchQuery = "";
  }
}

/**
 * --------------------------------------------------------------------------
 * 2. VISTA (PortfolioView)
 * Administra el DOM, la representación gráfica, el modal y las animaciones.
 * --------------------------------------------------------------------------
 */
class PortfolioView {
  constructor() {
    // Referencias principales del DOM
    this.projectsGrid = document.getElementById("projectsGrid");
    this.filterTabs = document.querySelectorAll(".filter-tab");
    this.searchInput = document.getElementById("searchInput");
    this.searchClearBtn = document.getElementById("searchClear");
    this.resultsCountBar = document.getElementById("resultsCount");
    this.mobileToggle = document.getElementById("mobileToggle");
    this.navMenu = document.getElementById("navMenu");

    // Referencias del Modal
    this.modalOverlay = document.getElementById("projectModal");
    this.modalCloseBtn = document.getElementById("modalCloseBtn");
    this.modalCategoryBadge = document.getElementById("modalCategoryBadge");
    this.modalTagBadge = document.getElementById("modalTagBadge");
    this.modalMediaStage = document.getElementById("modalMediaStage");
    this.modalGalleryStrip = document.getElementById("modalGalleryStrip");
    this.modalTitle = document.getElementById("modalTitle");
    this.modalWhatIs = document.getElementById("modalWhatIs");
    this.modalWhatIDid = document.getElementById("modalWhatIDid");
    this.modalHighlights = document.getElementById("modalHighlights");
    this.modalTagsBox = document.getElementById("modalTagsBox");
  }

  escapeHtml(text) {
    if (!text) return "";
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  safeMediaUrl(url) {
    if (!url) return "";
    return encodeURI(url);
  }

  renderProjectsGrid(filteredProjects, totalCount, onResetFilters) {
    if (this.resultsCountBar) {
      this.resultsCountBar.textContent = `Mostrando ${filteredProjects.length} de ${totalCount} proyectos de ingeniería`;
    }

    if (!this.projectsGrid) return;

    if (filteredProjects.length === 0) {
      this.projectsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-subtle);">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">🔍</div>
          <h3 style="font-family: var(--font-heading); font-size: 1.3rem; margin-bottom: 0.5rem; color: var(--text-white);">No se encontraron proyectos</h3>
          <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1.5rem;">Intenta con otra palabra clave como "ESP32", "FPGA", "Tiristor", "Cadence" o "Antena".</p>
          <button class="btn-primary" data-action="reset-filters" style="padding: 8px 20px; font-size: 0.85rem; cursor: pointer;">Restablecer filtros</button>
        </div>
      `;
      return;
    }

    this.projectsGrid.innerHTML = filteredProjects.map(project => {
      const allMedia = [
        { type: project.mediaType, url: project.mediaUrl },
        ...(project.secondaryMedia || []).map(url => ({ type: url.endsWith('.mp4') ? 'video' : 'image', url }))
      ];
      const hasMultiple = allMedia.length > 1;

      return `
        <article class="project-card" data-id="${project.id}">
          <div class="card-media" id="card-media-${project.id}" data-action="open-modal" data-id="${project.id}" title="Clic para abrir ficha técnica y evidencias">
            ${project.mediaType === 'video' ? `
              <img src="${project.posterUrl ? this.safeMediaUrl(project.posterUrl) : 'video_thumbs/VID-20241128-WA0026.jpg'}" alt="${project.title}" loading="lazy" />
              <div class="media-play-overlay">
                <div class="play-circle">▶</div>
              </div>
            ` : `
              <img src="${this.safeMediaUrl(project.mediaUrl)}" alt="${project.title}" loading="lazy" />
            `}

            <div class="media-badge">
              <span>${project.mediaType === 'video' ? '🎥 Video Demostrativo' : (hasMultiple ? `📷 ${allMedia.length} Fotos` : '📷 Evidencia')}</span>
            </div>
            <div class="tag-badge">${project.tag}</div>
          </div>

          <div class="card-content">
            <h3 class="card-title">${project.title}</h3>
            <p class="card-desc">${project.shortDesc}</p>
            
            <div class="card-tech-list">
              ${project.tags.slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join('')}
              ${project.tags.length > 4 ? `<span class="tech-tag">+${project.tags.length - 4}</span>` : ''}
            </div>

            <div class="card-actions">
              <button class="btn-details" data-action="open-modal" data-id="${project.id}">
                Ver Ficha Técnica <span>→</span>
              </button>
              <div class="evidence-badge">
                <span>●</span> ${hasMultiple ? `${allMedia.length} evidencias` : '1 archivo'}
              </div>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  renderModal(project, allMedia, initialIndex = 0) {
    if (!this.modalOverlay || !project) return;

    // Metadatos
    if (this.modalCategoryBadge) this.modalCategoryBadge.textContent = project.categoryLabel;
    if (this.modalTagBadge) this.modalTagBadge.textContent = project.tag;
    if (this.modalTitle) this.modalTitle.textContent = project.title;
    if (this.modalWhatIs) this.modalWhatIs.textContent = project.whatIs;
    if (this.modalWhatIDid) this.modalWhatIDid.textContent = project.whatIDid;

    // Puntos destacados
    if (this.modalHighlights) {
      this.modalHighlights.innerHTML = project.highlights.map(h => `<li>${h}</li>`).join('');
    }

    // Badges de tecnologías y botón de descarga condicional
    if (this.modalTagsBox) {
      this.modalTagsBox.innerHTML = project.tags.map(t => `<span class="tech-tag" style="padding: 5px 12px; font-size: 0.8rem;">${t}</span>`).join('');
      // Solo mostrar botón inferior si el proyecto NO tiene visor embebido de código (en el visor embebido ya existe botón en la cabecera)
      if (project.downloadUrl && !project.codeSnippet) {
        this.modalTagsBox.innerHTML += `
          <div style="width: 100%; margin-top: 1.25rem;">
            <a href="${encodeURI(project.downloadUrl)}" download="${project.downloadName || project.downloadUrl}" class="btn-primary" style="padding: 10px 22px; font-size: 0.88rem; display: inline-flex; align-items: center; gap: 8px;">
              <span>⚡</span> Descargar Script: ${project.downloadName || project.downloadUrl}
            </a>
          </div>
        `;
      }
    }

    // RENDERIZADO DEL ESCENARIO MULTIMEDIA
    if (project.pdfUrl) {
      // 1. Vista dual interactiva: Fotografía + PDF embebido lado a lado
      this.modalMediaStage.classList.add("dual-showcase");
      this.modalMediaStage.innerHTML = `
        <div class="dual-stage-container">
          <div class="dual-photo-pane">
            <div class="modal-media-viewport">
              <img src="${this.safeMediaUrl(allMedia[initialIndex].url)}" alt="${project.title}" id="dualModalImg" onclick="window.open('${this.safeMediaUrl(allMedia[initialIndex].url)}', '_blank')" title="Clic para ver en tamaño original completo" />
            </div>
            <div style="font-size: 0.82rem; font-family: var(--font-mono); color: var(--accent-cyan); text-align: center; padding: 4px 8px; display: flex; align-items: center; justify-content: center; gap: 8px;">
              <span>📸 Ensamble Físico</span>
              <a href="${this.safeMediaUrl(allMedia[initialIndex].url)}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-cyan); text-decoration: none; font-size: 0.75rem; border: 1px solid rgba(0,242,254,0.3); padding: 2px 8px; border-radius: 12px;" title="Ver imagen original en alta resolución">🔍 Ver completa</a>
            </div>
          </div>

          <div class="dual-pdf-pane">
            <div class="pdf-pane-header">
              <div class="pdf-title">
                <span>📄</span> ${project.pdfName || 'Thermal Blueprint.pdf'}
              </div>
              <div class="pdf-pane-actions">
                <a href="${this.safeMediaUrl(project.pdfUrl)}" target="_blank" rel="noopener noreferrer" class="pdf-action-btn" title="Abrir en pestaña nueva">
                  <span>↗</span> Pantalla Completa
                </a>
                <a href="${this.safeMediaUrl(project.pdfUrl)}" download class="pdf-action-btn" title="Descargar documento">
                  <span>⬇</span> Descargar
                </a>
              </div>
            </div>
            <iframe src="${this.safeMediaUrl(project.pdfUrl)}#toolbar=0&navpanes=0&view=FitH" class="embedded-pdf-frame" title="Manual del Curso Thermal Blueprint"></iframe>
          </div>
        </div>
      `;
      if (this.modalGalleryStrip) this.modalGalleryStrip.style.display = "none";
    } else if (project.codeSnippet) {
      // 2. Vista dual interactiva: Fotografía + Visor de Código embebido lado a lado (apilado en móvil)
      this.modalMediaStage.classList.add("dual-showcase");
      this.modalMediaStage.innerHTML = `
        <div class="dual-stage-container">
          <div class="dual-photo-pane">
            <div class="modal-media-viewport">
              <img src="${this.safeMediaUrl(allMedia[initialIndex].url)}" alt="${project.title}" id="dualModalImg" onclick="window.open('${this.safeMediaUrl(allMedia[initialIndex].url)}', '_blank')" title="Clic para ver en tamaño original completo" />
            </div>
            <div style="font-size: 0.82rem; font-family: var(--font-mono); color: var(--accent-cyan); text-align: center; padding: 4px 8px; display: flex; align-items: center; justify-content: center; gap: 8px;">
              <span>📸 Evidencia de Hardware</span>
              <a href="${this.safeMediaUrl(allMedia[initialIndex].url)}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-cyan); text-decoration: none; font-size: 0.75rem; border: 1px solid rgba(0,242,254,0.3); padding: 2px 8px; border-radius: 12px;" title="Ver imagen original en alta resolución">🔍 Ver completa</a>
            </div>
          </div>

          <div class="dual-code-pane">
            <div class="code-pane-header">
              <div class="code-header-left">
                <div class="code-window-dots">
                  <span class="dot-red"></span>
                  <span class="dot-yellow"></span>
                  <span class="dot-green"></span>
                </div>
                <div class="code-pane-title">
                  <span>💻</span> ${project.codeFilename || 'script'}
                </div>
              </div>
              <div class="code-pane-actions">
                <button class="code-action-btn" data-action="copy-code" title="Copiar código al portapapeles">
                  <span>📋</span> Copiar Código
                </button>
                ${project.downloadUrl ? `
                  <a href="${encodeURI(project.downloadUrl)}" download="${project.downloadName || project.downloadUrl}" class="code-action-btn" title="Descargar archivo">
                    <span>⬇</span> Descargar
                  </a>
                ` : ''}
              </div>
            </div>
            <div class="code-viewer-container">
              <pre><code>${this.escapeHtml(project.codeSnippet)}</code></pre>
            </div>
          </div>
        </div>
      `;
      if (this.modalGalleryStrip) this.modalGalleryStrip.style.display = "none";
    } else {
      // 3. Escenario fotográfico/video estándar
      this.modalMediaStage.classList.remove("dual-showcase");
      this.renderModalMediaStage(allMedia, initialIndex);

      if (this.modalGalleryStrip) {
        if (allMedia.length > 1) {
          this.modalGalleryStrip.style.display = "flex";
          this.modalGalleryStrip.innerHTML = allMedia.map((m, idx) => {
            const thumbSrc = m.type === "video" ? (m.poster ? this.safeMediaUrl(m.poster) : this.safeMediaUrl(m.url)) : this.safeMediaUrl(m.url);
            return `
              <div class="strip-thumb ${idx === initialIndex ? 'active' : ''}" data-action="switch-thumb" data-index="${idx}">
                <img src="${thumbSrc}" alt="Vista ${idx + 1}" />
              </div>
            `;
          }).join('');
        } else {
          this.modalGalleryStrip.style.display = "none";
          this.modalGalleryStrip.innerHTML = "";
        }
      }
    }

    this.modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  renderModalMediaStage(allMedia, index) {
    if (!this.modalMediaStage || !allMedia || !allMedia[index]) return;

    // Pausar cualquier video activo previamente
    const prevVideo = this.modalMediaStage.querySelector("video");
    if (prevVideo) {
      prevVideo.pause();
    }

    const current = allMedia[index];
    const safeUrl = this.safeMediaUrl(current.url);
    const total = allMedia.length;

    const navControlsHtml = total > 1 ? `
      <button class="modal-nav-arrow prev" data-action="prev-media" title="Anterior (Flecha Izquierda)" aria-label="Foto anterior">‹</button>
      <button class="modal-nav-arrow next" data-action="next-media" title="Siguiente (Flecha Derecha)" aria-label="Foto siguiente">›</button>
      <div class="modal-slide-counter" id="modalSlideCounter">${index + 1} / ${total} Evidencias</div>
    ` : '';

    if (current.type === "video") {
      this.modalMediaStage.innerHTML = `
        <div class="modal-media-viewport" style="background: #000; width: 100%; display: flex; align-items: center; justify-content: center; position: relative;">
          <video id="activeModalVideo" 
                 src="${safeUrl}" 
                 controls 
                 playsinline 
                 preload="auto" 
                 poster="${current.poster ? this.safeMediaUrl(current.poster) : ''}" 
                 style="width: 100%; max-height: 480px; outline: none; background: #000; border-radius: var(--radius-md); display: block;">
            <source src="${safeUrl}" type="video/mp4">
            Tu navegador no soporta reproducción de video HTML5.
          </video>
        </div>
        ${navControlsHtml}
      `;
      const v = document.getElementById("activeModalVideo");
      if (v) {
        v.load();
        const p = v.play();
        if (p !== undefined) {
          p.catch(() => {
            v.muted = true;
            v.play().catch(() => {});
          });
        }
      }
    } else {
      this.modalMediaStage.innerHTML = `
        <div class="modal-media-viewport">
          <img src="${safeUrl}" alt="Detalle del proyecto" onclick="window.open('${safeUrl}', '_blank')" title="Clic para ver en tamaño original completo" />
        </div>
        <a href="${safeUrl}" target="_blank" rel="noopener noreferrer" class="modal-expand-btn" title="Abrir imagen en resolución original completa">
          <span>🔍</span> Ver completa
        </a>
        ${navControlsHtml}
      `;
    }
  }

  updateThumbnails(activeIndex) {
    if (!this.modalGalleryStrip) return;
    const thumbs = this.modalGalleryStrip.querySelectorAll(".strip-thumb");
    thumbs.forEach((thumb, idx) => {
      thumb.classList.toggle("active", idx === activeIndex);
    });
  }

  closeModal() {
    if (this.modalOverlay) {
      this.modalOverlay.classList.remove("open");
    }
    document.body.style.overflow = "auto";

    // Pausar y liberar memoria del reproductor de video
    if (this.modalMediaStage) {
      const videoElem = this.modalMediaStage.querySelector("video");
      if (videoElem) {
        videoElem.pause();
        videoElem.removeAttribute("src");
        videoElem.load();
      }
    }
  }

  updateFilterTabs(activeCategory) {
    this.filterTabs.forEach(tab => {
      const matches = tab.getAttribute("data-filter") === activeCategory;
      tab.classList.toggle("active", matches);
    });
  }

  updateSearchInput(query) {
    if (this.searchInput) this.searchInput.value = query;
    if (this.searchClearBtn) {
      this.searchClearBtn.style.display = query ? "block" : "none";
    }
  }
}

/**
 * --------------------------------------------------------------------------
 * 3. CONTROLADOR (PortfolioController)
 * Enlaza las interacciones del usuario entre el Modelo y la Vista.
 * --------------------------------------------------------------------------
 */
class PortfolioController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.refreshGrid();
    this.bindEvents();
  }

  refreshGrid() {
    const filtered = this.model.getFilteredProjects();
    this.view.renderProjectsGrid(filtered, this.model.projects.length);
  }

  bindEvents() {
    // 1. Filtrado por categorías (Pills / Botones)
    this.view.filterTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const category = tab.getAttribute("data-filter");
        this.model.setCategory(category);
        this.view.updateFilterTabs(category);
        this.refreshGrid();
      });
    });

    // 2. Búsqueda en tiempo real
    if (this.view.searchInput) {
      this.view.searchInput.addEventListener("input", (e) => {
        this.model.setSearchQuery(e.target.value);
        this.view.updateSearchInput(e.target.value);
        this.refreshGrid();
      });
    }

    // 3. Botón para limpiar campo de búsqueda
    if (this.view.searchClearBtn) {
      this.view.searchClearBtn.addEventListener("click", () => {
        this.model.setSearchQuery("");
        this.view.updateSearchInput("");
        this.refreshGrid();
      });
    }

    // 4. Delegación de eventos en la cuadrícula de proyectos (abrir modal / restablecer filtros)
    if (this.view.projectsGrid) {
      this.view.projectsGrid.addEventListener("click", (e) => {
        const resetBtn = e.target.closest('[data-action="reset-filters"]');
        if (resetBtn) {
          this.handleResetFilters();
          return;
        }

        const openBtn = e.target.closest('[data-action="open-modal"]');
        if (openBtn) {
          const projectId = openBtn.getAttribute("data-id");
          if (projectId) {
            this.openModal(projectId);
          }
        }
      });
    }

    // 5. Botón cerrar modal
    if (this.view.modalCloseBtn) {
      this.view.modalCloseBtn.addEventListener("click", () => this.closeModal());
    }

    // 6. Cierre al hacer clic en el backdrop oscuro
    if (this.view.modalOverlay) {
      this.view.modalOverlay.addEventListener("click", (e) => {
        if (e.target === this.view.modalOverlay) {
          this.closeModal();
        }
      });
    }

    // 7. Delegación de eventos en el escenario del modal (copiar código / flechas prev/next)
    if (this.view.modalMediaStage) {
      this.view.modalMediaStage.addEventListener("click", (e) => {
        // Copiar código al portapapeles
        const copyBtn = e.target.closest('[data-action="copy-code"]');
        if (copyBtn) {
          const codeEl = this.view.modalMediaStage.querySelector('.code-viewer-container code');
          if (codeEl) {
            const copyText = codeEl.innerText;
            if (navigator.clipboard && navigator.clipboard.writeText) {
              navigator.clipboard.writeText(copyText).then(() => {
                const prev = copyBtn.innerHTML;
                copyBtn.innerHTML = '<span>✓</span> ¡Copiado!';
                copyBtn.style.color = '#27c93f';
                copyBtn.style.borderColor = '#27c93f';
                setTimeout(() => {
                  copyBtn.innerHTML = prev;
                  copyBtn.style.color = '';
                  copyBtn.style.borderColor = '';
                }, 2000);
              }).catch(() => {});
            } else {
              const ta = document.createElement('textarea');
              ta.value = copyText;
              document.body.appendChild(ta);
              ta.select();
              document.execCommand('copy');
              document.body.removeChild(ta);
              const prev = copyBtn.innerHTML;
              copyBtn.innerHTML = '<span>✓</span> ¡Copiado!';
              setTimeout(() => { copyBtn.innerHTML = prev; }, 2000);
            }
          }
          return;
        }

        const prevBtn = e.target.closest('[data-action="prev-media"]');
        if (prevBtn) {
          this.navigateMedia(-1);
          return;
        }

        const nextBtn = e.target.closest('[data-action="next-media"]');
        if (nextBtn) {
          this.navigateMedia(1);
          return;
        }
      });
    }

    // 8. Delegación de eventos en la tira de miniaturas
    if (this.view.modalGalleryStrip) {
      this.view.modalGalleryStrip.addEventListener("click", (e) => {
        const thumb = e.target.closest('[data-action="switch-thumb"]');
        if (thumb) {
          const idx = parseInt(thumb.getAttribute("data-index"), 10);
          if (!isNaN(idx)) {
            this.switchMedia(idx);
          }
        }
      });
    }

    // 9. Teclado: ESC para cerrar, Flechas para navegar evidencias
    document.addEventListener("keydown", (e) => {
      if (!this.view.modalOverlay || !this.view.modalOverlay.classList.contains("open")) return;
      if (e.key === "Escape") {
        this.closeModal();
      } else if (e.key === "ArrowLeft") {
        this.navigateMedia(-1);
      } else if (e.key === "ArrowRight") {
        this.navigateMedia(1);
      }
    });

    // 10. Gestos táctiles (Swipe) en el escenario del modal
    if (this.view.modalMediaStage) {
      let touchStartX = 0;
      let touchEndX = 0;

      this.view.modalMediaStage.addEventListener('touchstart', (e) => {
        if (e.target.tagName === 'VIDEO' || e.target.closest('video')) return;
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      this.view.modalMediaStage.addEventListener('touchend', (e) => {
        if (e.target.tagName === 'VIDEO' || e.target.closest('video')) return;
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchEndX - touchStartX;
        if (Math.abs(diff) > 40) {
          this.navigateMedia(diff < 0 ? 1 : -1);
        }
      }, { passive: true });
    }

    // 11. Menú móvil (Hamburguesa)
    if (this.view.mobileToggle && this.view.navMenu) {
      this.view.mobileToggle.addEventListener("click", () => {
        this.view.navMenu.classList.toggle("open");
      });

      this.view.navMenu.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
          this.view.navMenu.classList.remove("open");
        });
      });
    }
  }

  openModal(projectId, initialIndex = 0) {
    const modalData = this.model.setActiveProject(projectId, initialIndex);
    if (!modalData) return;
    this.view.renderModal(modalData.project, modalData.mediaList, modalData.currentIndex);
  }

  closeModal() {
    this.view.closeModal();
    this.model.clearActiveProject();
  }

  navigateMedia(direction) {
    const res = this.model.stepMedia(direction);
    if (!res) return;
    this.view.renderModalMediaStage(res.mediaList, res.currentIndex);
    this.view.updateThumbnails(res.currentIndex);
  }

  switchMedia(index) {
    const res = this.model.setMediaIndex(index);
    if (!res) return;
    this.view.renderModalMediaStage(res.mediaList, res.currentIndex);
    this.view.updateThumbnails(res.currentIndex);
  }

  handleResetFilters() {
    this.model.resetFilters();
    this.view.updateFilterTabs("all");
    this.view.updateSearchInput("");
    this.refreshGrid();
  }
}

// ==========================================================================
// INICIALIZACIÓN Y ENLACE GLOBAL
// ==========================================================================

let portfolioModel;
let portfolioView;
let portfolioController;

document.addEventListener("DOMContentLoaded", () => {
  portfolioModel = new PortfolioModel(projectsData);
  portfolioView = new PortfolioView();
  portfolioController = new PortfolioController(portfolioModel, portfolioView);
  portfolioController.init();

  // Exponer instancia para depuración o hooks externos
  window.PortfolioApp = {
    model: portfolioModel,
    view: portfolioView,
    controller: portfolioController
  };

  // Compatibilidad hacia atrás para cualquier invocación tradicional
  window.openProjectModal = (id, idx) => portfolioController.openModal(id, idx);
  window.closeProjectModal = () => portfolioController.closeModal();
  window.navigateModalMedia = (dir) => portfolioController.navigateMedia(dir);
  window.switchModalMedia = (idx) => portfolioController.switchMedia(idx);
  window.resetFilters = () => portfolioController.handleResetFilters();
});
