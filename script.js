/**
 * PORTAFOLIO DE ELECTRÓNICA & SISTEMAS EMBEBIDOS - JOSUÉ FARFÁN GONZÁLEZ
 * Base de datos de proyectos, renderizado reactivo, filtros, búsqueda y visor modal técnico.
 */

// Dataset exhaustivo de proyectos con categorización y detalles de ingeniería
const projectsData = [
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
    secondaryMedia: [],
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
      "riscv_core_tsmc28nm_layout.jpg"
    ],
    downloadUrl: "inverter_tsmc28nm_extracted.sp",
    downloadName: "inverter_tsmc28nm_extracted.sp",
    codeFilename: "inverter_tsmc28nm_extracted.sp (Netlist Spectre)",
    codeSnippet: `// ==============================================================================
// Cadence Spectre / SPICE Netlist: Inversor CMOS en Nodo TSMC 28nm
// Diseno Fisico Full-Custom con Reglas DRC/LVS Limpias (Virtuoso Layout Suite)
// Capas: NWELL, DIFF/OD, POLY/PO, NPLUS/PPLUS, CONT/CO, METAL 1, SUB-TAPS
// ==============================================================================

simulator lang=spectre
global 0 vdd!

// Parametros de Proceso y Escalado Nanometrico TSMC 28nm Bulk CMOS
parameters vdd_val=0.9 temp_c=27 sim_time=5n

// ------------------------------------------------------------------------------
// Subcircuito: Inversor CMOS Balanceado (2 Dedos por Transistor)
// Dimensionamiento: PMOS W=340nm / NMOS W=270nm para simetria tpHL = tpLH
// ------------------------------------------------------------------------------
subckt inv_cmos_28nm (in out vdd vss)
    // Transistor PMOS (High-k Metal Gate, nodo bulk en N-Well a VDD)
    // W=0.34 um, L=0.03 um, 2 fingers (nf=2)
    M_P0 (out in vdd vdd) pch_lvt w=0.34u l=0.03u nf=2 \\
        ad=0.024p as=0.024p pd=0.48u ps=0.48u nrd=0.5 nrs=0.5

    // Transistor NMOS (High-k Metal Gate, nodo bulk en P-Sub a VSS)
    // W=0.27 um, L=0.03 um, 2 fingers (nf=2)
    M_N0 (out in vss vss) nch_lvt w=0.27u l=0.03u nf=2 \\
        ad=0.019p as=0.019p pd=0.38u ps=0.38u nrd=0.5 nrs=0.5

    // Capacitancias Parasitas Extraidas por PEX (Layout Post-Routing)
    C_par_in   (in  0) capacitor c=0.42f
    C_par_out  (out 0) capacitor c=0.58f
    R_par_m1   (out net_pad) resistor r=1.85
ends inv_cmos_28nm

// ------------------------------------------------------------------------------
// Fuentes de Estimulo y Polarizacion
// ------------------------------------------------------------------------------
VVDD (vdd! 0) vsource dc=vdd_val type=dc
VIN  (sig_in 0) vsource type=pulse val0=0 val1=vdd_val \\
     period=1n delay=100p rise=25p fall=25p width=500p

// Instancia de Prueba con Carga de Fan-Out 4 (FO4)
X_DUT (sig_in sig_out vdd! 0) inv_cmos_28nm
C_LOAD (sig_out 0) capacitor c=2.5f

// ------------------------------------------------------------------------------
// Analisis de Simulacion: Transitorio & Curva DC VTC
// ------------------------------------------------------------------------------
tran_sim tran stop=sim_time errpreset=conservative
dc_sim   dc   param=vdd_val start=0 stop=0.9 step=0.005

// ------------------------------------------------------------------------------
// Metricas Post-Layout (Extraccion PEX & Verificacion Fisica):
// - VDD Operativa: 0.90 V (Tecnologia TSMC 28nm HPM)
// - Punto de Disparo VTC (VM): ~0.448 V (Centro simetrico)
// - Retardo tpHL: 12.4 ps | Retardo tpLH: 12.8 ps (Skew < 3.2%)
// - Consumo Dinamico: 1.82 uW @ 1.0 GHz
// - Verificacion DRC (Calibre / Pegasus): 0 Errores (Espaciado min: 65nm)
// - Verificacion LVS (Layout vs Schematic): Netlist Matches 100%
// ==============================================================================`,
    tags: ["TSMC 28nm PDK", "Layout Full-Custom", "Inversor CMOS", "Procesador RISC-V", "Cadence Virtuoso", "Reglas DRC / LVS", "Power Mesh & PDN", "Floorplanning ASIC"],
    shortDesc: "Trazado nanométrico full-custom a nivel de máscaras y transistores en TSMC 28nm, análisis del apilamiento de capas (N-Well, Poly, M1-M7) y floorplan físico del procesador RISC-V.",
    whatIs: "Implementación integral de diseño físico microelectrónico sobre el nodo industrial TSMC 28nm (High-k Metal Gate Bulk CMOS) empleando Cadence Virtuoso Layout Suite XL. Comprende dos escalas fundamentales de integración VLSI: en primer lugar, el trazado geométrico full-custom a nivel transistor de una celda inversora balanceada analizando la interacción física de máscaras; y en segundo lugar, el análisis macroscópico del floorplan, colocación de celdas estándar y red de distribución de energía (Power Grid) de un procesador de arquitectura abierta RISC-V.",
    whatIDid: "Trazado geométrico capa por capa del inversor CMOS respetando estrictamente el manual de diseño de TSMC (Design Rule Manual - DRM): dimensionamiento asimétrico de compuertas (PMOS W=340nm vs NMOS W=270nm con L=30nm en dos dedos paralelos nf=2 para equilibrar la menor movilidad de huecos frente a electrones y lograr tiempos de conmutación simétricos tpHL=12.4ps / tpLH=12.8ps); diseño de rieles de alimentación VDD y VSS en Metal 1 con contactos óhmicos directos a pozo N (N-Well Tap) y sustrato P (Sub Tap) a 65nm de espaciado mínimo para garantizar inmunidad total al fenómeno de Latch-up. En la etapa de sistema, análisis del die del núcleo RISC-V: inspección de los anillos perimetrales de potencia (Power Rings en metales superiores M6/M7), mallas verticales para reducción de caídas IR-Drop, síntesis del árbol de reloj (CTS) y anillo de sellado mecánico (Seal Ring) para protección física del chip.",
    highlights: [
      "Diseño a nivel de máscaras físicas: N-Well, Difusión Activa (OD), Poly Gate (PO), Contactos de Tungsteno (CO) y Metal 1 (M1)",
      "Dimensionamiento óptimo Wp/Wn (340nm / 270nm) con dos dedos (nf=2) para simetría de retardo temporal y reducción de capacitancias parásitas de difusión",
      "Estructura integral anti-latchup mediante guard rings y taps de pozo/sustrato cumpliendo reglas de proximidad DRC de 65nm",
      "Verificación física estricta en nodo 28nm: DRC (Design Rule Checking), LVS (Layout Versus Schematic) y extracción parásita PEX limpia",
      "Análisis macro del floorplan del núcleo RISC-V: malla de alimentación (Power Mesh), celdas estándar en hileras continuas y anillo de sellado (Seal Ring)"
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
    id: "opamp-discreto-mosfet-bjt",
    title: "Diseño y Construcción de Amplificador Operacional (Op-Amp) con MOSFETs, NPN y PNP en Modo Inversor",
    category: "vlsi",
    categoryLabel: "Microelectrónica & Circuitos Analógicos",
    tag: "Op-Amp Discreto en Protoboard",
    mediaType: "image",
    mediaUrl: "WhatsApp Image 2026-09-22 at 4.28.00 PM.jpeg",
    secondaryMedia: [
      "WhatsApp Image 2026-09-22 at 4.27.35 PM.jpeg",
      "WhatsApp Image 2026-09-22 at 4.28.51 PM.jpeg"
    ],
    tags: ["Amplificador Inversor (180°)", "Amplificador Operacional", "Transistores MOSFET", "BJT NPN y PNP", "Par Diferencial", "Espejo de Corriente", "Etapa Push-Pull", "Osciloscopio Tektronix TDS 2002C"],
    shortDesc: "Diseño circuital, montaje en protoboard y caracterización dinámica en modo inversor de un amplificador operacional discreto construido con transistores MOSFETs y pares BJT (NPN y PNP).",
    whatIs: "Implementación experimental a nivel de componentes discretos de la arquitectura interna de un Amplificador Operacional (Op-Amp) configurado en topología de amplificador inversor con retroalimentación negativa. El circuito materializa las etapas fundamentales de un circuito integrado analógico: par diferencial de entrada para alto CMRR, carga activa por espejo de corriente, etapa de ganancia de voltaje (VAS) y etapa de salida complementaria push-pull con transistores MOSFET y BJT (NPN y PNP).",
    whatIDid: "Cálculo y ajuste de los puntos de operación DC (Q-point), corrientes de reposo y resistencias de polarización para MOSFETs y transistores bipolares NPN y PNP. Cableado estructurado sobre protoboard reduciendo inductancias parásitas e incorporación de potenciómetro para ajuste y anulación de tensión de offset. Conexión de la red de retroalimentación negativa en modo inversor y caracterización en osciloscopio digital Tektronix TDS 2002C a 114.8 Hz: se evidencia la señal de entrada en el Canal 1 (traza amarilla) y la salida en el Canal 2 (traza cian), mostrando la inversión senoidal exacta de 180° (anti-fase) sin saturación ni distorsión por cruce (crossover).",
    highlights: [
      "Operación en modo amplificador inversor con retroalimentación negativa demostrando respuesta matemática y lineal",
      "Evidencia en osciloscopio Tektronix TDS 2002C a 114.8 Hz: Canal 1 (entrada) vs Canal 2 (salida) con desfase exacto de 180° (anti-fase)",
      "Arquitectura analógica discreta completa: par diferencial de entrada, espejo de corriente, etapa VAS y etapa de salida push-pull",
      "Integración híbrida de MOSFETs con transistores bipolares NPN y PNP para optimizar impedancias de entrada y salida"
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
    title: "Controlador de Potencia AC con SCR y DIAC: Tarjeta en Baquelita y Control de Motor",
    category: "power",
    categoryLabel: "Electrónica de Potencia",
    tag: "Tiristores SCR & DIAC",
    mediaType: "video",
    mediaUrl: "Video de WhatsApp 2025-10-18 a las 21.17.49_cada7f34.mp4",
    posterUrl: "video_thumbs/Video de WhatsApp 2025-10.jpg",
    secondaryMedia: [
      "bandicam_scr_proteus.mp4",
      "Dimer scr proteus.png",
      "Imagen de WhatsApp 2025-09-20 a las 20.43.02_0caadc71.jpg",
      "Imagen de WhatsApp 2025-09-25 a las 19.40.56_6a8cc3ef.png"
    ],
    tags: ["Control de Motor AC", "Tiristor SCR", "DIAC", "Baquelita Perforada", "Proteus 8 Professional", "Osciloscopio Digital", "Control de Fase AC", "Laboratorio BUAP"],
    shortDesc: "Controlador de potencia AC por ángulo de fase con tiristor SCR y DIAC, validado en simulación Proteus, fabricado en placa de baquelita perforada y probado con motor en banco de laboratorio.",
    whatIs: "Sistema electrónico de potencia para corriente alterna (120V AC) basado en el control de ángulo de fase mediante un tiristor SCR disparado por la tensión de ruptura de un DIAC. El circuito permite regular continuamente la tensión y potencia media entregada a motores y cargas eléctricas mediante la variación analógica de un potenciómetro en una red RC.",
    whatIDid: "Diseño circuital y simulación dinámica en Proteus 8 Professional evaluando la conmutación y el recorte de la onda senoidal en el osciloscopio virtual. Fabricación física y soldadura de componentes en placa de baquelita perforada (perfboard). Validación experimental en el laboratorio de la BUAP conectando el controlador a un motor en banco de pruebas, logrando una regulación progresiva y estable de la velocidad de giro comandada por potenciómetro, además de la medición de formas de onda a 120.04 Hz en osciloscopio digital.",
    highlights: [
      "Prueba experimental en video demostrando el control continuo de velocidad de un motor en banco de laboratorio",
      "Disparo de compuerta sincronizado con tiristor SCR y DIAC a través de red desfasadora RC con potenciómetro",
      "Construcción de tarjeta física en baquelita perforada y contraste contra simulación dinámica en Proteus 8"
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
    title: "Diseño, Simulación en HFSS y Fabricación de Antena Microstrip a 1.9 GHz",
    category: "rf",
    categoryLabel: "RF & Microondas",
    tag: "Microondas, HFSS & VNA",
    team: [
      "Josué Farfán González",
      "Cesar Marco Mucio Corte García",
      "Ricardo Baruch Guzmán Lorenzo",
      "José Manuel López Castro"
    ],
    institution: "BUAP - Facultad de Ciencias de la Electrónica",
    mediaType: "image",
    mediaUrl: "analisis.jpg",
    secondaryMedia: [
      "parche_hfss_3d.png",
      "Imagen de WhatsApp 2025-09-20 a las 21.15.06_2bed19f5.jpg",
      "WhatsApp Image 2026-09-22 at 5.40.32 PM.jpeg"
    ],
    codeFilename: "antena_patch_1_9ghz.m",
    codeSnippet: `% ============================================================
% DISEÑO DE ANTENA MICROSTRIP RECTANGULAR A 1.9 GHz
% Autores (Equipo de Coautoria - BUAP):
%   - Josue Farfan Gonzalez
%   - Cesar Marco Mucio Corte Garcia
%   - Ricardo Baruch Guzman Lorenzo
%   - Jose Manuel Lopez Castro
% Institucion: Benemerita Universidad Autonoma de Puebla (BUAP)
% Facultad: Ciencias de la Electronica
% Referencia: C. A. Balanis - Antenna Theory: Analysis and Design
% ============================================================
clear; clc; close all;

% 1. PARAMETROS DE ENTRADA Y SUSTRATO (Rogers RO3003)
f = 1.9e9;          % Frecuencia central de diseño (1.9 GHz - PCS/GSM)
er = 3.0;           % Constante dielectrica del sustrato (Rogers RO3003)
h = 1.52e-3;        % Espesor del sustrato dielectrico (1.52 mm)
c = 3e8;            % Velocidad de la luz en el vacio (m/s)

% 2. PASO 1: CALCULO DEL ANCHO FISICO DEL PARCHE (W)
W = (c / (2 * f)) * sqrt(2 / (er + 1));
fprintf('Ancho del parche (W): %.4f mm\\n', W * 1000);

% 3. PASO 2: CONSTANTE DIELECTRICA EFECTIVA (ereff)
% Considera el efecto de borde y la proporcion campo aire/sustrato
ereff = ((er + 1) / 2) + ((er - 1) / 2) * (1 + 12 * h / W)^(-1/2);
fprintf('Constante dielectrica efectiva (ereff): %.4f\\n', ereff);

% 4. PASO 3: EXTENSION DE LONGITUD POR DISPERSION DE BORDE (deltaL)
num = (ereff + 0.3) * (W / h + 0.264);
den = (ereff - 0.258) * (W / h + 0.8);
deltaL = 0.412 * h * (num / den);
fprintf('Extension de longitud por borde (deltaL): %.4f mm\\n', deltaL * 1000);

% 5. PASO 4: LONGITUD FISICA RESONANTE DEL PARCHE (L)
L = (c / (2 * f * sqrt(ereff))) - 2 * deltaL;
fprintf('Longitud fisica resonante (L): %.4f mm\\n', L * 1000);

% 6. LONGITUD ELECTRICA EFECTIVA (Leff)
Leff = L + 2 * deltaL;
fprintf('Longitud efectiva (Leff): %.4f mm\\n', Leff * 1000);

% 7. IMPEDANCIA CARACTERISTICA DE ENTRADA EN EL BORDE (Z0)
Z0 = (120 * pi / sqrt(ereff)) * (h / W + 1.393 + 0.667 * log(h / W + 1.444));
fprintf('Impedancia de entrada en el borde (Z0): %.2f Ohms\\n', Z0);

% 8. ACOPLAMIENTO DE IMPEDANCIA A 50 OHMS (PUNTO INSET FEED X0)
% Transformador lambda/4 para igualar con conector SMA 50 Ohms
X0 = (L / 2) * acos(sqrt(50 / Z0));
fprintf('Punto optimo de alimentacion desde el borde (X0): %.4f mm\\n', X0 * 1000);

% ============================================================
% RESUMEN VALIDADO EN LABORATORIO (Anritsu Site Master S331D):
% - Frecuencia medida: 1.925 GHz (Desviacion < 0.4% vs Ansys HFSS)
% - Coeficiente S11 medido: -14.93 dB (96.8% de potencia radiada)
% - Ancho de banda util a -10 dB: 50 MHz (1.90 GHz - 1.95 GHz)
% ============================================================`,
    tags: [
      "Antena Patch 1.9 GHz",
      "Ansys HFSS 2024",
      "Rogers RO3003",
      "Anritsu Site Master S331D",
      "Parámetro S11 (-14.93 dB)",
      "Conector SMA Edge-Mount",
      "Grabado Químico FeCl3",
      "MATLAB"
    ],
    shortDesc: "Diseño analítico en MATLAB, modelado electromagnético 3D en Ansys HFSS, microfabricación sobre Rogers 3003 y caracterización de parámetro S11 a 1.9 GHz con analizador vectorial de redes.",
    whatIs: "Proyecto de investigación y desarrollo en ingeniería de microondas realizado en equipo en la Facultad de Ciencias de la Electrónica (BUAP) en coautoría con Cesar Marco Mucio Corte García, Ricardo Baruch Guzmán Lorenzo y José Manuel López Castro. Abarca el ciclo completo de desarrollo de una antena de microcinta (microstrip patch) rectangular sintonizada a 1.9 GHz (banda PCS/GSM y telecomunicaciones móviles), integrando cálculo analítico riguroso según la teoría de Cavidades de Balanis, simulación de dispersión S11 y diagramas de radiación en Ansys HFSS, microfabricación sobre sustrato de alta frecuencia Rogers RO3003 con mascarilla de vinil y ataque químico (FeCl3), y caracterización experimental en banco de RF con analizador vectorial de redes.",
    whatIDid: "Colaboración activa en el equipo en todas las fases del proyecto: diseño del script matemático en MATLAB (W = 55.82 mm, L = 45.12 mm, εreff = 2.8682, ΔL = 0.7493 mm) con ranuras de inserción (inset feed) y acoplador de λ/4 a 50 Ω; modelado 3D de onda completa en Ansys HFSS 2024 R2 obteniendo S11 = -16.48 dB y ganancia directiva de 6.94 dB; transferencia física del diseño DXF a placa Rogers 3003 (εr = 3.0, h = 1.52 mm, cobre de 35 µm) mediante grabado en cloruro férrico y soldadura de conector SMA hembra de borde; y finalmente, medición experimental en laboratorio con el analizador Anritsu Site Master S331D (archivo Touchstone josuef.s1p), registrando una resonancia en 1.925 GHz (desviación de solo 7.7 MHz respecto a HFSS), S11 = -14.93 dB (96.8% de potencia radiada eficaz) y un ancho de banda experimental de 50 MHz.",
    highlights: [
      "Investigación y desarrollo en equipo con coautoría junto a Cesar Marco Mucio Corte García, Ricardo Baruch Guzmán Lorenzo y José Manuel López Castro (BUAP)",
      "Ciclo completo de ingeniería RF: Teoría analítica → Simulación HFSS → Fabricación PCB Rogers 3003 → Medición VNA",
      "Resonancia medida experimentalmente en 1.925 GHz con S11 de -14.93 dB y 50 MHz de ancho de banda a -10 dB",
      "Simulación electromagnética en Ansys HFSS validando 6.94 dB de ganancia directiva frontal a 0° y S11 de -16.48 dB",
      "Proceso de grabado químico controlado con FeCl3 y conector SMA edge-mount de 50 Ω sin degradación de impedancia"
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
    title: "Modelado CAD 3D de Brazo Robótico (3 GDL) & Actuador Lineal Piñón-Cremallera",
    category: "robotics",
    categoryLabel: "Robótica & CAD 3D",
    tag: "Robótica & Diseño Mecánico CAD",
    mediaType: "image",
    mediaUrl: "robot 3gdl.png",
    secondaryMedia: [
      "robot catesiano.png"
    ],
    tags: ["Brazo Robótico 3 GDL", "Mecanismo Cremallera-Piñón", "CAD 3D Paramétrico", "Servomotores", "Arduino", "Cinemática Directa", "Diseño Mecánico CAD"],
    shortDesc: "Modelado CAD 3D paramétrico y análisis cinemático de manipulador robótico de 3 GDL y actuador cartesiano de cremallera y piñón para servomotores.",
    whatIs: "Diseño de sistemas mecánicos y robóticos articulados concebidos en software CAD 3D. Abarca la estructura de un brazo robótico de 3 Grados de Libertad (3 GDL) con base giratoria y eslabones de posicionamiento, así como un mecanismo lineal cartesiano impulsado por cremallera y piñón de precisión accionado por servomotores de alto torque.",
    whatIDid: "Diseño de ensamble paramétrico 3D considerando tolerancias mecánicas, distribución de masas y centros de gravedad para minimizar esfuerzos en los servomotores. Integración de la base de control para placa Arduino y cálculo de la relación de transmisión en el módulo de piñón y cremallera para lograr desplazamiento lineal suave y repetible en los ejes de prueba.",
    highlights: [
      "Modelado paramétrico de brazo robótico articulado de 3 GDL con alojamientos precisos para servomotores",
      "Diseño de mecanismo de piñón y cremallera para traslación lineal con alta rigidez estructural",
      "Integración electromecánica con base para microcontrolador Arduino y cableado guiado"
    ]
  },
  {
    id: "impresion-3d-ender5-plus",
    title: "Calibración Dimensional, Nivelación y Manufactura Aditiva con Creality Ender 5 Plus",
    category: "robotics",
    categoryLabel: "Manufactura Aditiva & CNC",
    tag: "Impresión 3D Gran Formato",
    mediaType: "image",
    mediaUrl: "WhatsApp Image 2026-09-22 at 4.43.52 PM.jpeg",
    secondaryMedia: [
      "WhatsApp Image 2026-09-22 at 4.46.07 PM.jpeg"
    ],
    tags: ["Creality Ender 5 Plus", "Calibración XYZ", "Mesh Bed Leveling", "BLTouch", "Cubo de Calibración 20mm", "Manufactura Aditiva", "Gran Formato 350mm"],
    shortDesc: "Puesta a punto, nivelación de cama y calibración de pasos micrométricos en impresora 3D Creality Ender 5 Plus de gran formato (350x350x400 mm).",
    whatIs: "Proyecto de ingeniería de manufactura aditiva enfocado en el ensamble, puesta a punto y calibración metrológica de la impresora 3D industrial de gran formato Creality Ender 5 Plus (volumen cúbico de 350 x 350 x 400 mm con doble husillo en eje Z). Su objetivo es garantizar tolerancias micrométricas y adhesión perfecta de primera capa en piezas mecánicas de gran escala.",
    whatIDid: "Puesta en marcha y calibración física de la máquina: alineación y sincronización de doble eje Z, calibración de tensión de bandas en pórtico CoreXY / cartesiano, nivelación de cama caliente de vidrio templado mediante sensor BLTouch (mesh leveling multizona) y ajuste de Z-offset. Fabricación y medición con vernier digital de cubo de calibración XYZ de 20 mm para compensación de pasos por milímetro (steps/mm), afinación de retracción y control de flujo de extrusión libre de warping.",
    highlights: [
      "Puesta a punto de impresora de gran formato Creality Ender 5 Plus con volumen de impresión de 350 x 350 x 400 mm",
      "Calibración de malla de nivelación de cama (Mesh Leveling) con sensor BLTouch para primera capa homogénea",
      "Verificación metrológica dimensional con cubo de calibración XYZ de 20 mm asegurando precisión dimensional y repetibilidad"
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
// DATASET DE CERTIFICACIONES Y RECONOCIMIENTOS OFICIALES
// ==========================================================================
const certificatesData = [
  {
    id: "cert-cadence-virtuoso",
    title: "Virtuoso Schematic Editor S1: Creating Design Schematics vIC25.1",
    issuer: "Cadence Design Systems",
    issuerBadge: "Cadence",
    category: "eda",
    categoryLabel: "Semiconductores & EDA",
    date: "23 de Junio de 2026",
    hours: "Certificación Oficial",
    description: "Certificación oficial internacional otorgada por Cadence Training Services en el entorno de diseño Virtuoso Schematic Editor para la creación y verificación de esquemáticos integrados en flujos EDA avanzados.",
    signatories: "Cadence Training Services (Online)",
    fileUrl: "certificados/cadence-virtuoso-schematic-editor-2026.pdf",
    previewUrl: "certificados/thumbs/cadence-virtuoso-schematic-editor-2026.jpg",
    mediaType: "pdf",
    tags: ["Cadence Virtuoso", "Schematic Editor", "IC Design", "EDA", "VLSI"]
  },
  {
    id: "cert-bootcamp-eda-buap",
    title: "Bootcamp EDA, call from industry: Reclutamiento y entrenamiento hacia la industria del diseño electrónico",
    issuer: "BUAP • Facultad de Ciencias de la Electrónica",
    issuerBadge: "BUAP FCE",
    category: "eda",
    categoryLabel: "Semiconductores & EDA",
    date: "15 de Junio al 17 de Julio de 2026",
    hours: "100 Horas Curriculares",
    description: "Formación profesional intensiva de 100 horas acreditada ante la FCE-BUAP, enfocada en la formación de talento técnico para la industria de semiconductores, herramientas EDA y diseño de circuitos integrados.",
    signatories: "Dr. Víctor Rodolfo González Díaz (Lab. de Diseño y Caracterización FCE-BUAP) & M.C. José Francisco Portillo Robledo (Director FCE-BUAP)",
    fileUrl: "certificados/bootcamp-eda-buap-100h-2026.pdf",
    previewUrl: "certificados/thumbs/bootcamp-eda-buap-100h-2026.jpg",
    mediaType: "pdf",
    tags: ["Bootcamp EDA", "Industria Semiconductores", "100 Horas", "FCE-BUAP", "Diseño Electrónico"]
  },
  {
    id: "cert-inaoe-semiconductores",
    title: "2ª Semana de Semiconductores en INAOE",
    issuer: "Instituto Nacional de Astrofísica, Óptica y Electrónica (INAOE)",
    issuerBadge: "INAOE",
    category: "eda",
    categoryLabel: "Semiconductores & EDA",
    date: "6 al 10 de Abril de 2026",
    hours: "Semana Académica Especializada",
    description: "Reconocimiento otorgado por el INAOE por la participación activa en conferencias, talleres y sesiones técnicas sobre fabricación, tecnologías de sala limpia y tendencias en microelectrónica de semiconductores.",
    signatories: "Dr. Luis Hernández Martínez (Coordinador de Electrónica) & Dr. Alfredo Morales Sánchez (Comité Organizador)",
    fileUrl: "certificados/inaoe-semana-semiconductores-2026.pdf",
    previewUrl: "certificados/thumbs/inaoe-semana-semiconductores-2026.jpg",
    mediaType: "pdf",
    tags: ["INAOE", "Semiconductores", "Microelectrónica", "Sala Limpia", "Investigación"]
  },
  {
    id: "cert-electrohack-electromovilidad",
    title: "Segunda Edición Electrohack: Categoría Electromovilidad",
    issuer: "Secretaría de Economía & Agencia de Energía del Estado de Puebla",
    issuerBadge: "Electrohack",
    category: "innovation",
    categoryLabel: "Innovación & Hackathones",
    date: "25 y 26 de Octubre de 2023",
    hours: "Concurso de Innovación Tecnológica",
    description: "Diploma por destacada participación como integrante de equipo en el hackathon estatal de innovación tecnológica y electromovilidad, desarrollando soluciones aplicadas a movilidad sostenible.",
    signatories: "Jorge Ermilo Barrera Novelo (Secretario de Economía) & Gabriela Carvajal Rubilar (Encargada de Despacho Agencia de Energía)",
    fileUrl: "certificados/electrohack-electromovilidad-2023.pdf",
    previewUrl: "certificados/thumbs/electrohack-electromovilidad-2023.jpg",
    mediaType: "pdf",
    tags: ["Electrohack", "Electromovilidad", "Innovación", "Trabajo en Equipo", "Gobierno de Puebla"]
  },
  {
    id: "cert-electrohack-energia",
    title: "Tercera Edición Electrohack: Categoría Energía",
    issuer: "Secretaría de Economía & Agencia de Energía del Estado de Puebla",
    issuerBadge: "Electrohack",
    category: "innovation",
    categoryLabel: "Innovación & Hackathones",
    date: "24 de Octubre de 2024",
    hours: "Concurso Universitario de Innovación",
    description: "Reconocimiento por participación en el Concurso Universitario de Innovación Electrohack 2024, enfocado en el desarrollo de prototipos y tecnologías de eficiencia energética y transición renovable.",
    signatories: "C. Gabriela Carvajal Rubilar (Dirección General Agencia de Energía) & C. Iván de la Fuente Amador (Director de Vinculación Institucional)",
    fileUrl: "certificados/electrohack-energia.pdf",
    previewUrl: "certificados/thumbs/electrohack-energia-2024.jpg",
    mediaType: "pdf",
    tags: ["Electrohack 2024", "Energía", "Prototipado", "Transición Energética", "Innovación Universitaria"]
  },
  {
    id: "cert-intel-embedded",
    title: "Sistemas Embebidos y su uso en plataformas de validación",
    issuer: "Intel México",
    issuerBadge: "Intel",
    category: "tech",
    categoryLabel: "Industria & Sistemas Embebidos",
    date: "21 de Octubre de 2021",
    hours: "Capacitación Técnica Especializada",
    description: "Reconocimiento otorgado por Intel México por asistencia y participación en la sesión técnica sobre arquitecturas de sistemas embebidos aplicados al testing y validación de hardware industrial.",
    signatories: "Intel México",
    fileUrl: "certificados/intel-sistemas-embebidos-2021.jpg",
    previewUrl: "certificados/thumbs/intel-sistemas-embebidos-2021.jpg",
    mediaType: "image",
    tags: ["Intel México", "Sistemas Embebidos", "Validación de Hardware", "Arquitectura", "Testing"]
  },
  {
    id: "cert-intel-iot",
    title: "Intel en el mundo del IoT, Cloud Computing y Big Data",
    issuer: "Intel México",
    issuerBadge: "Intel",
    category: "tech",
    categoryLabel: "Industria & Sistemas Embebidos",
    date: "19 de Agosto de 2021",
    hours: "Capacitación Técnica Especializada",
    description: "Reconocimiento otorgado por Intel México por asistencia técnica especializada sobre ecosistemas de Internet de las Cosas (IoT), procesamiento en la nube y manejo de flujos de datos.",
    signatories: "Intel México",
    fileUrl: "certificados/intel-iot-cloud-bigdata-2021.jpg",
    previewUrl: "certificados/thumbs/intel-iot-cloud-bigdata-2021.jpg",
    mediaType: "image",
    tags: ["Intel México", "IoT", "Cloud Computing", "Big Data", "Conectividad"]
  },
  {
    id: "cert-buap-noche-estrellas",
    title: "Tallerista en Noche de las Estrellas BUAP 2024",
    issuer: "BUAP • Comité Noche de las Estrellas",
    issuerBadge: "Divulgación BUAP",
    category: "outreach",
    categoryLabel: "Divulgación & Comunidad",
    date: "9 de Noviembre de 2024",
    hours: "Divulgación Científica y Tecnológica",
    description: "Reconocimiento otorgado por la sede Puebla BUAP por participación como instructor tallerista, acercando conceptos científicos y tecnológicos de manera didáctica al público general.",
    signatories: "Dr. Gabriel Kantún Montiel (Director FCFM BUAP), Dr. José Eduardo Espinosa Rosales & Comité Organizador",
    fileUrl: "certificados/buap-noche-estrellas-tallerista-2024.pdf",
    previewUrl: "certificados/thumbs/buap-noche-estrellas-tallerista-2024.jpg",
    mediaType: "pdf",
    tags: ["Noche de las Estrellas", "Tallerista", "FCFM BUAP", "Divulgación Científica", "Comunidad"]
  },
  {
    id: "cert-buap-accion-ambiental",
    title: "Acción Ambiental Universitaria",
    issuer: "BUAP • Coordinación General de Desarrollo Sustentable",
    issuerBadge: "BUAP Sustentable",
    category: "outreach",
    categoryLabel: "Divulgación & Comunidad",
    date: "30 de Junio de 2023",
    hours: "4 Horas Acreditadas",
    description: "Constancia de acreditación en gestión y buenas prácticas de sustentabilidad y responsabilidad ambiental universitaria.",
    signatories: "Dr. Manuel Sandoval Delgado & Mtro. Diego Ariel Riva",
    fileUrl: "certificados/buap-accion-ambiental-2023.pdf",
    previewUrl: "certificados/thumbs/buap-accion-ambiental-2023.jpg",
    mediaType: "pdf",
    tags: ["BUAP", "Desarrollo Sustentable", "Responsabilidad Universitaria"]
  }
];

/**
 * --------------------------------------------------------------------------
 * 1. MODELO (PortfolioModel)
 * Gestiona el estado de la aplicación, los proyectos, medios y filtros.
 * --------------------------------------------------------------------------
 */
class PortfolioModel {
  constructor(projects = [], certificates = []) {
    this.projects = projects;
    this.certificates = certificates;
    this.currentCategory = "all";
    this.currentSearchQuery = "";
    this.activeProject = null;
    this.activeMediaIndex = 0;
  }

  getFilteredCertificates(category = "all") {
    if (!category || category === "all") return this.certificates;
    return this.certificates.filter(c => c.category === category);
  }

  getCertificateById(id) {
    return this.certificates.find(c => c.id === id) || null;
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
        let poster = "";
        if (isSecVideo) {
          if (secUrl.includes("Video de WhatsApp 2025-10")) poster = "video_thumbs/Video de WhatsApp 2025-10.jpg";
          else if (secUrl.includes("bandicam")) poster = "video_thumbs/bandicam_thumb.jpg";
          else if (secUrl.includes("VID-20241128")) poster = "video_thumbs/VID-20241128-WA0026.jpg";
          else if (secUrl.includes("WhatsApp Video 2024-10-09")) poster = "video_thumbs/WhatsApp Video 2024-10-09.jpg";
          else if (secUrl.includes("Video de WhatsApp 2025-04")) poster = "video_thumbs/Video de WhatsApp 2025-04.jpg";
          else if (secUrl.includes("Wokwi")) poster = "video_thumbs/New Blank Diagram Project.jpg";
        }
        media.push({
          type: isSecVideo ? "video" : "image",
          url: secUrl,
          poster: poster
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
    this.certificatesGrid = document.getElementById("certificatesGrid");
    this.filterTabs = document.querySelectorAll(".filter-tab:not([data-cert-filter])");
    this.certFilterTabs = document.querySelectorAll("[data-cert-filter]");
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
    this.modalBottomPdfStage = document.getElementById("modalBottomPdfStage");
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

  formatCodeWithLines(codeText) {
    if (!codeText) return "";
    const lines = codeText.split("\n");
    return lines
      .map((line, idx) => {
        const lineNum = idx + 1;
        const safeContent = this.escapeHtml(line) !== "" ? this.escapeHtml(line) : "&nbsp;";
        return `<div class="code-line"><span class="line-num" aria-hidden="true">${lineNum}</span><span class="line-code">${safeContent}</span></div>`;
      })
      .join("");
  }

  renderProjectsGrid(filteredProjects, totalCount, onResetFilters) {
    if (this.resultsCountBar) {
      this.resultsCountBar.textContent = `Mostrando ${filteredProjects.length} de ${totalCount} proyectos`;
    }

    if (!this.projectsGrid) return;

    if (filteredProjects.length === 0) {
      this.projectsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-subtle);">
          <div style="margin-bottom: 1rem; color: var(--text-muted);">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block;">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
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
            <!-- Skeleton con barritas sin nada de carga / fallback si no carga -->
            <div class="card-media-skeleton" id="media-sk-${project.id}" aria-hidden="true">
              <div class="skeleton-shimmer-box shimmer-box">
                <div class="skeleton-placeholder-inner">
                  <svg class="skeleton-circuit-icon" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                    <rect x="2" y="2" width="20" height="20" rx="4"></rect>
                    <path d="M12 2v4M12 18v4M2 12h4M18 12h4"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  <div class="skeleton-bar-line skeleton-mini-bar shimmer-bar"></div>
                  <div class="skeleton-bar-line skeleton-mini-bar-sm shimmer-bar"></div>
                </div>
              </div>
            </div>

            ${project.mediaType === 'video' ? `
              <img src="${project.posterUrl ? this.safeMediaUrl(project.posterUrl) : 'video_thumbs/VID-20241128-WA0026.jpg'}" 
                alt="${project.title}" 
                loading="lazy" 
                onload="this.classList.add('is-loaded'); const sk=document.getElementById('media-sk-${project.id}'); if(sk) sk.style.display='none';" 
                onerror="this.style.display='none'; const sk=document.getElementById('media-sk-${project.id}'); if(sk) sk.classList.add('is-failed');" />
              <div class="media-play-overlay">
                <div class="play-circle">▶</div>
              </div>
            ` : `
              <img src="${this.safeMediaUrl(project.mediaUrl)}" 
                alt="${project.title}" 
                loading="lazy" 
                onload="this.classList.add('is-loaded'); const sk=document.getElementById('media-sk-${project.id}'); if(sk) sk.style.display='none';" 
                onerror="this.style.display='none'; const sk=document.getElementById('media-sk-${project.id}'); if(sk) sk.classList.add('is-failed');" />
            `}

            <div class="media-badge">
              <span>${project.mediaType === 'video' ? 'Video Demostrativo' : (hasMultiple ? `${allMedia.length} Fotos` : 'Evidencia')}</span>
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

    // Verificación inmediata si las imágenes ya estaban cacheadas por el navegador
    this.projectsGrid.querySelectorAll(".card-media img").forEach(img => {
      if (img.complete && img.naturalHeight !== 0) {
        img.classList.add("is-loaded");
        const sk = img.parentElement.querySelector(".card-media-skeleton");
        if (sk) sk.style.display = "none";
      }
    });
  }

  renderCertificatesGrid(certs) {
    if (!this.certificatesGrid) return;

    if (!certs || certs.length === 0) {
      this.certificatesGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-subtle);">
          <p style="color: var(--text-muted); font-size: 0.95rem;">No hay certificados en esta categoría.</p>
        </div>
      `;
      return;
    }

    this.certificatesGrid.innerHTML = certs.map(cert => `
      <article class="cert-card" data-action="open-cert-modal" data-cert-id="${cert.id}" title="Clic para abrir constancia y documento oficial">
        <div class="cert-media">
          <div class="cert-issuer-badge">${cert.issuerBadge}</div>
          ${cert.hours ? `<div class="cert-hours-badge">${cert.hours}</div>` : ''}
          <img src="${cert.previewUrl}" alt="${cert.title}" loading="lazy" />
        </div>
        <div class="cert-content">
          <div class="cert-date">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <span>${cert.date}</span>
          </div>
          <h3 class="cert-title">${cert.title}</h3>
          <p class="cert-desc">${cert.description}</p>
          <div class="cert-signatories">
            <strong>Firmas / Aval:</strong> ${cert.signatories}
          </div>
          <div class="cert-actions">
            <span class="btn-cert-view">
              Ver Documento <span>↗</span>
            </span>
            <span class="cert-type-indicator">${cert.mediaType.toUpperCase()} Oficial</span>
          </div>
        </div>
      </article>
    `).join("");
  }

  renderCertificateModal(cert) {
    if (!this.modalOverlay || !cert) return;

    if (this.modalCategoryBadge) this.modalCategoryBadge.textContent = cert.categoryLabel;
    if (this.modalTagBadge) this.modalTagBadge.textContent = cert.issuerBadge;
    if (this.modalTitle) this.modalTitle.textContent = cert.title;
    if (this.modalWhatIs) this.modalWhatIs.textContent = cert.description;
    if (this.modalWhatIDid) this.modalWhatIDid.textContent = `Acreditación oficial emitida por ${cert.issuer}. Fecha: ${cert.date}. Modalidad: ${cert.hours || 'Participación oficial'}. Acreditado por: ${cert.signatories}.`;

    if (this.modalHighlights) {
      this.modalHighlights.innerHTML = `
        <li><strong>Institución Emisora:</strong> ${cert.issuer}</li>
        <li><strong>Fecha de Emisión:</strong> ${cert.date}</li>
        <li><strong>Acreditación Curricular:</strong> ${cert.hours || 'Constancia Oficial'}</li>
        <li><strong>Firmas & Autoridades:</strong> ${cert.signatories}</li>
      `;
    }

    if (this.modalTagsBox) {
      this.modalTagsBox.innerHTML = cert.tags.map(t => `<span class="tech-tag">${t}</span>`).join("");
    }

    this.modalMediaStage.classList.remove("dual-showcase");

    if (cert.mediaType === "pdf") {
      // 1. Imagen Oficial en Alta Definición en el media stage principal arriba
      this.modalMediaStage.innerHTML = `
        <div class="cert-image-pane">
          <div class="cert-pane-banner">
            <div class="cert-pane-banner-title">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
              <span>Documento Oficial Acreditado (Vista Completa)</span>
            </div>
            <a href="${cert.fileUrl}" target="_blank" rel="noopener noreferrer" class="pane-action-link" title="Abrir archivo original en nueva pestaña">
              Abrir PDF Original ↗
            </a>
          </div>
          <div class="cert-image-viewport">
            <img src="${cert.previewUrl}" alt="${this.escapeHtml(cert.title)}" class="cert-stacked-img" onclick="window.open('${cert.fileUrl}', '_blank')" title="Clic para ver o abrir PDF original" />
          </div>
        </div>
      `;

      // 2. Visor PDF Oficial hasta abajo de la Ficha Técnica
      if (this.modalBottomPdfStage) {
        this.modalBottomPdfStage.style.display = "block";
        this.modalBottomPdfStage.innerHTML = `
          <div class="cert-pdf-pane">
            <div class="pdf-pane-header">
              <div class="pdf-title">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                <span>Visor PDF Interactivo Oficial · Descargar e Imprimir</span>
              </div>
              <div class="pdf-pane-actions">
                <a href="${cert.fileUrl}" target="_blank" rel="noopener noreferrer" class="pdf-action-btn" title="Abrir archivo PDF oficial en pestaña completa">
                  <span>↗</span> Pantalla Completa
                </a>
                <a href="${cert.fileUrl}" download class="pdf-action-btn" title="Descargar documento oficial original">
                  <span>⬇</span> Descargar PDF
                </a>
              </div>
            </div>
            <div class="cert-pdf-frame-wrap">
              <iframe src="${cert.fileUrl}#toolbar=1&navpanes=0&view=FitH" class="cert-full-pdf-frame" title="${this.escapeHtml(cert.title)}"></iframe>
            </div>
          </div>
        `;
      }
    } else {
      this.modalMediaStage.innerHTML = `
        <div class="modal-media-viewport">
          <img src="${cert.fileUrl}" alt="${this.escapeHtml(cert.title)}" onclick="window.open('${cert.fileUrl}', '_blank')" title="Clic para ver en tamaño original completo" />
        </div>
        <a href="${cert.fileUrl}" target="_blank" rel="noopener noreferrer" class="modal-expand-btn" title="Abrir imagen en resolución original">
          <span>Ver imagen completa ↗</span>
        </a>
      `;
      if (this.modalBottomPdfStage) {
        this.modalBottomPdfStage.style.display = "none";
        this.modalBottomPdfStage.innerHTML = "";
      }
    }

    if (this.modalGalleryStrip) {
      this.modalGalleryStrip.style.display = "none";
      this.modalGalleryStrip.innerHTML = "";
    }

    this.modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  renderModal(project, allMedia, initialIndex = 0) {
    if (!this.modalOverlay || !project) return;

    if (this.modalBottomPdfStage) {
      this.modalBottomPdfStage.style.display = "none";
      this.modalBottomPdfStage.innerHTML = "";
    }

    // Metadatos
    if (this.modalCategoryBadge) this.modalCategoryBadge.textContent = project.categoryLabel;
    if (this.modalTagBadge) this.modalTagBadge.textContent = project.tag;
    if (this.modalTitle) this.modalTitle.textContent = project.title;
    if (this.modalWhatIs) this.modalWhatIs.textContent = project.whatIs;
    if (this.modalWhatIDid) this.modalWhatIDid.textContent = project.whatIDid;

    // Puntos destacados
    if (this.modalHighlights) {
      let highlightsHtml = project.highlights.map(h => `<li>${h}</li>`).join('');
      if (project.team && project.team.length > 0) {
        highlightsHtml += `
          <li class="team-credit-item">
            <div style="font-weight: 700; color: var(--accent-cyan); font-family: var(--font-heading); margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">
              Coautoría & Equipo de Proyecto (${project.institution || 'BUAP'}):
            </div>
            <div style="font-size: 0.85rem; line-height: 1.6; color: #f1f5f9;">
              ${project.team.map(member => `<span style="display: inline-block; background: rgba(255,255,255,0.06); padding: 2px 10px; border-radius: 12px; margin: 3px 4px 3px 0; border: 1px solid rgba(255,255,255,0.1);">${member}</span>`).join('')}
            </div>
          </li>
        `;
      }
      this.modalHighlights.innerHTML = highlightsHtml;
    }

    // Badges de tecnologías y botón de descarga condicional
    if (this.modalTagsBox) {
      this.modalTagsBox.innerHTML = project.tags.map(t => `<span class="tech-tag" style="padding: 5px 12px; font-size: 0.8rem;">${t}</span>`).join('');
      // Solo mostrar botón inferior si el proyecto NO tiene visor embebido de código (en el visor embebido ya existe botón en la cabecera)
      if (project.downloadUrl && !project.codeSnippet) {
        this.modalTagsBox.innerHTML += `
          <div style="width: 100%; margin-top: 1.25rem;">
            <a href="${encodeURI(project.downloadUrl)}" download="${project.downloadName || project.downloadUrl}" class="btn-primary" style="padding: 10px 22px; font-size: 0.88rem; display: inline-flex; align-items: center; gap: 8px;">
              <span>Descargar Script: ${project.downloadName || project.downloadUrl}</span>
            </a>
          </div>
        `;
      }
    }

    // RENDERIZADO DEL ESCENARIO MULTIMEDIA
    if (project.pdfUrl) {
      // 1. Vista dual interactiva: Fotografía + PDF embebido lado a lado / apilado
      this.modalMediaStage.classList.add("dual-showcase");
      this.modalMediaStage.innerHTML = `
        <div class="dual-stage-container">
          <div class="dual-photo-pane">
            <div class="modal-media-viewport">
              <div class="modal-media-skeleton" id="dual-sk-pdf" aria-hidden="true">
                <div class="skeleton-placeholder-inner">
                  <div class="skeleton-bar-line skeleton-mini-bar shimmer-bar"></div>
                  <div class="skeleton-bar-line skeleton-mini-bar-sm shimmer-bar"></div>
                </div>
              </div>
              <img src="${this.safeMediaUrl(allMedia[initialIndex].url)}" 
                alt="${project.title}" 
                id="dualModalImg" 
                onload="const sk=document.getElementById('dual-sk-pdf'); if(sk) sk.style.display='none';"
                onerror="this.style.display='none'; const sk=document.getElementById('dual-sk-pdf'); if(sk) sk.classList.add('is-failed');"
                onclick="window.open('${this.safeMediaUrl(allMedia[initialIndex].url)}', '_blank')" 
                title="Clic para ver en tamaño original completo" />
            </div>
            <a href="${this.safeMediaUrl(allMedia[initialIndex].url)}" target="_blank" rel="noopener noreferrer" class="modal-expand-btn" title="Abrir imagen en resolución original completa">
              <span>Ver completa</span>
            </a>
            <div class="dual-pane-footer">
              <span class="dual-pane-tag">Ensamble Físico</span>
              <a href="${this.safeMediaUrl(allMedia[initialIndex].url)}" target="_blank" rel="noopener noreferrer" class="pane-action-link" title="Ver imagen original en alta resolución">Ver completa (100%)</a>
            </div>
          </div>

          <div class="dual-pdf-pane">
            <div class="pdf-pane-header">
              <div class="pdf-title">
                ${project.pdfName || 'Thermal Blueprint.pdf'}
              </div>
              <div class="pdf-pane-actions">
                <button class="code-action-btn layout-toggle-btn" data-action="toggle-dual-layout" title="Alternar entre ver al lado o abajo para ampliar la imagen y documento">
                  <span class="layout-toggle-icon">⬍</span> <span class="layout-toggle-text">Ver Abajo</span>
                </button>
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
      // 2. Vista dual interactiva: Fotografía + Visor de Código embebido profesional con números de línea
      const lineCount = project.codeSnippet.split('\n').length;
      this.modalMediaStage.classList.add("dual-showcase");
      this.modalMediaStage.innerHTML = `
        <div class="dual-stage-container">
          <div class="dual-photo-pane">
            <div class="modal-media-viewport">
              <div class="modal-media-skeleton" id="dual-sk-code" aria-hidden="true">
                <div class="skeleton-placeholder-inner">
                  <div class="skeleton-bar-line skeleton-mini-bar shimmer-bar"></div>
                  <div class="skeleton-bar-line skeleton-mini-bar-sm shimmer-bar"></div>
                </div>
              </div>
              <img src="${this.safeMediaUrl(allMedia[initialIndex].url)}" 
                alt="${project.title}" 
                id="dualModalImg" 
                onload="const sk=document.getElementById('dual-sk-code'); if(sk) sk.style.display='none';"
                onerror="this.style.display='none'; const sk=document.getElementById('dual-sk-code'); if(sk) sk.classList.add('is-failed');"
                onclick="window.open('${this.safeMediaUrl(allMedia[initialIndex].url)}', '_blank')" 
                title="Clic para ver en tamaño original completo" />
            </div>
            <a href="${this.safeMediaUrl(allMedia[initialIndex].url)}" target="_blank" rel="noopener noreferrer" class="modal-expand-btn" title="Abrir imagen en resolución original completa">
              <span>Ver completa</span>
            </a>
            ${allMedia.length > 1 ? `
              <button class="modal-nav-arrow prev" data-action="prev-media" title="Anterior (Flecha Izquierda)" aria-label="Foto anterior">‹</button>
              <button class="modal-nav-arrow next" data-action="next-media" title="Siguiente (Flecha Derecha)" aria-label="Foto siguiente">›</button>
              <div class="modal-slide-counter" id="modalSlideCounter">${initialIndex + 1} / ${allMedia.length} Evidencias</div>
            ` : ''}
            <div class="dual-pane-footer">
              <span class="dual-pane-tag">Evidencias (${allMedia.length})</span>
              <a href="${this.safeMediaUrl(allMedia[initialIndex].url)}" target="_blank" rel="noopener noreferrer" class="pane-action-link" title="Ver imagen original en alta resolución">Ver completa (100%)</a>
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
                  ${project.codeFilename || 'script'}
                </div>
                <span class="code-line-count-badge">${lineCount} líneas</span>
              </div>
              <div class="code-pane-actions">
                <button class="code-action-btn layout-toggle-btn" data-action="toggle-dual-layout" title="Alternar entre ver al lado o abajo para ampliar la imagen">
                  <span class="layout-toggle-icon">⬍</span> <span class="layout-toggle-text">Ver Abajo</span>
                </button>
                <button class="code-action-btn" data-action="copy-code" title="Copiar código al portapapeles">
                  <span>Copiar Código</span>
                </button>
                ${project.downloadUrl ? `
                  <a href="${encodeURI(project.downloadUrl)}" download="${project.downloadName || project.downloadUrl}" class="code-action-btn" title="Descargar archivo">
                    <span>⬇</span> Descargar
                  </a>
                ` : ''}
              </div>
            </div>
            <div class="code-viewer-container">
              <div class="code-editor-gutter">
                ${this.formatCodeWithLines(project.codeSnippet)}
              </div>
            </div>
          </div>
        </div>
      `;
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
          <div class="modal-media-skeleton" id="stage-sk-img" aria-hidden="true">
            <div class="skeleton-placeholder-inner">
              <div class="skeleton-bar-line skeleton-mini-bar shimmer-bar"></div>
              <div class="skeleton-bar-line skeleton-mini-bar-sm shimmer-bar"></div>
            </div>
          </div>
          <img src="${safeUrl}" 
            alt="Detalle del proyecto" 
            onload="const sk=document.getElementById('stage-sk-img'); if(sk) sk.style.display='none';"
            onerror="this.style.display='none'; const sk=document.getElementById('stage-sk-img'); if(sk) sk.classList.add('is-failed');"
            onclick="window.open('${safeUrl}', '_blank')" 
            title="Clic para ver en tamaño original completo" />
        </div>
        <a href="${safeUrl}" target="_blank" rel="noopener noreferrer" class="modal-expand-btn" title="Abrir imagen en resolución original completa">
          <span>Ver completa</span>
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

    if (this.modalBottomPdfStage) {
      this.modalBottomPdfStage.style.display = "none";
      this.modalBottomPdfStage.innerHTML = "";
    }

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

  updateModalMedia(allMedia, currentIndex) {
    if (!allMedia || !allMedia[currentIndex]) return;
    const current = allMedia[currentIndex];
    const safeUrl = this.safeMediaUrl(current.url);

    if (this.modalMediaStage && this.modalMediaStage.classList.contains("dual-showcase")) {
      const dualImg = document.getElementById("dualModalImg");
      if (dualImg) {
        dualImg.src = safeUrl;
        dualImg.setAttribute("onclick", `window.open('${safeUrl}', '_blank')`);
      }
      const expandBtn = this.modalMediaStage.querySelector(".modal-expand-btn");
      if (expandBtn) expandBtn.href = safeUrl;
      const paneActionLink = this.modalMediaStage.querySelector(".pane-action-link");
      if (paneActionLink) paneActionLink.href = safeUrl;
      const counter = this.modalMediaStage.querySelector("#modalSlideCounter");
      if (counter) counter.textContent = `${currentIndex + 1} / ${allMedia.length} Evidencias`;
    } else {
      this.renderModalMediaStage(allMedia, currentIndex);
    }
    this.updateThumbnails(currentIndex);
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
    this.refreshCertificatesGrid();
    this.bindEvents();
  }

  refreshGrid() {
    const filtered = this.model.getFilteredProjects();
    this.view.renderProjectsGrid(filtered, this.model.projects.length);
  }

  refreshCertificatesGrid(category = "all") {
    const certs = this.model.getFilteredCertificates(category);
    this.view.renderCertificatesGrid(certs);
  }

  bindEvents() {
    // 1. Filtrado por categorías de proyectos
    this.view.filterTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const category = tab.getAttribute("data-filter");
        this.model.setCategory(category);
        this.view.updateFilterTabs(category);
        this.refreshGrid();
      });
    });

    // 1.1 Filtrado por categorías de certificados
    if (this.view.certFilterTabs) {
      this.view.certFilterTabs.forEach(tab => {
        tab.addEventListener("click", () => {
          this.view.certFilterTabs.forEach(t => t.classList.remove("active"));
          tab.classList.add("active");
          const category = tab.getAttribute("data-cert-filter");
          this.refreshCertificatesGrid(category);
        });
      });
    }

    // 1.2 Delegación de eventos para abrir modal de certificado
    if (this.view.certificatesGrid) {
      this.view.certificatesGrid.addEventListener("click", (e) => {
        const card = e.target.closest('[data-action="open-cert-modal"]');
        if (card) {
          const certId = card.getAttribute("data-cert-id");
          const cert = this.model.getCertificateById(certId);
          if (cert) {
            this.view.renderCertificateModal(cert);
          }
        }
      });
    }

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
        // Alternar vista dual (lado a lado vs imagen completa ampliada + codigo abajo)
        const toggleLayoutBtn = e.target.closest('[data-action="toggle-dual-layout"]');
        if (toggleLayoutBtn) {
          const dualStage = this.view.modalMediaStage.querySelector('.dual-stage-container');
          if (dualStage) {
            const isStacked = dualStage.classList.toggle('stacked-view');
            const iconEl = toggleLayoutBtn.querySelector('.layout-toggle-icon');
            const textEl = toggleLayoutBtn.querySelector('.layout-toggle-text');
            if (isStacked) {
              if (iconEl) iconEl.textContent = '◫';
              if (textEl) textEl.textContent = 'Ver Lado a Lado';
              toggleLayoutBtn.setAttribute('title', 'Cambiar a vista lado a lado');
            } else {
              if (iconEl) iconEl.textContent = '⬍';
              if (textEl) textEl.textContent = 'Ver Abajo';
              toggleLayoutBtn.setAttribute('title', 'Colocar código abajo y ampliar imagen al 100%');
            }
          }
          return;
        }

        // Copiar código al portapapeles (copia el código limpio sin números de línea)
        const copyBtn = e.target.closest('[data-action="copy-code"]');
        if (copyBtn) {
          const activeProj = this.model.activeProject;
          const copyText = activeProj && activeProj.codeSnippet ? activeProj.codeSnippet : '';
          if (copyText) {
            const handleSuccess = () => {
              const prev = copyBtn.innerHTML;
              copyBtn.innerHTML = '<span>✓</span> ¡Copiado!';
              copyBtn.style.color = '#27c93f';
              copyBtn.style.borderColor = '#27c93f';
              setTimeout(() => {
                copyBtn.innerHTML = prev;
                copyBtn.style.color = '';
                copyBtn.style.borderColor = '';
              }, 2000);
            };

            if (navigator.clipboard && navigator.clipboard.writeText) {
              navigator.clipboard.writeText(copyText).then(handleSuccess).catch(() => {
                this.fallbackCopyText(copyText, handleSuccess);
              });
            } else {
              this.fallbackCopyText(copyText, handleSuccess);
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
    this.view.updateModalMedia(res.mediaList, res.currentIndex);
  }

  switchMedia(index) {
    const res = this.model.setMediaIndex(index);
    if (!res) return;
    this.view.updateModalMedia(res.mediaList, res.currentIndex);
  }

  handleResetFilters() {
    this.model.resetFilters();
    this.view.updateFilterTabs("all");
    this.view.updateSearchInput("");
    this.refreshGrid();
  }

  fallbackCopyText(text, callback) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    ta.style.top = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      if (callback) callback();
    } catch (err) {}
    document.body.removeChild(ta);
  }
}

// ==========================================================================
// INICIALIZACIÓN Y ENLACE GLOBAL
// ==========================================================================

let portfolioModel;
let portfolioView;
let portfolioController;

document.addEventListener("DOMContentLoaded", () => {
  portfolioModel = new PortfolioModel(projectsData, certificatesData);
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
