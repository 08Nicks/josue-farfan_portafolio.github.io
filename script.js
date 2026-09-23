/**
 * PORTAFOLIO DE INGENIERÍA - ING. JOSUÉ FARFÁN GONZÁLEZ
 * Base de datos de proyectos, renderizado reactivo, filtros, búsqueda y visor modal técnico.
 */

// Dataset exhaustivo de proyectos con categorización y detalles de ingeniería
const projectsData = [
  {
    id: "cleanroom-semiconductores",
    title: "Fabricación de Microelectrónica en Cuarto Limpio & Nodos Nanométricos",
    category: "vlsi",
    categoryLabel: "Microelectrónica & VLSI",
    tag: "INAOE / Cleanroom",
    mediaType: "image",
    mediaUrl: "WhatsApp Image 2026-09-22 at 4.38.59 PM.jpeg",
    secondaryMedia: ["launcher.jpg"],
    tags: ["Cleanroom Clase 100/1000", "Obleas de Silicio", "Fotolitografía", "Cadence Virtuoso", "TSMC 28nm", "Genus Synthesis"],
    shortDesc: "Experiencia práctica en sala limpia para procesamiento de semiconductores y diseño de circuitos integrados en nodo TSMC de 28nm.",
    whatIs: "Desarrollo y manufactura de dispositivos semiconductores a escala micro y nanométrica. Involucra tanto el flujo digital/analógico en software de grado industrial (Cadence Virtuoso, Genus) como la manipulación física de obleas de silicio en cuartos limpios bajo estrictos estándares de control de partículas.",
    whatIDid: "Manipulación de obleas de silicio bajo atmósfera controlada y luz amarilla de fotolitografía para procesos de grabado y deposición. En diseño EDA, configuración de entornos automatizados para Cadence Virtuoso con tecnología TSMC 28nm, simulación RTL de bloques Verilog/VHDL y síntesis lógica con Genus a través de entorno X11 remoto.",
    highlights: [
      "Manipulación segura de obleas de silicio monocristalino con equipo de protección estéril (bunny suit)",
      "Comprensión práctica de pasos de fotolitografía, ataque químico y caracterización física",
      "Automatización de flujo RTL-to-GDSII y simulación en nodo nanométrico de 28nm"
    ]
  },
  {
    id: "esp32-pizarra-telemetria",
    title: "Estación de Telemetría Táctil y Control de Motor DC con ESP32",
    category: "embedded",
    categoryLabel: "Sistemas Embebidos & IoT",
    tag: "Proyecto INAOE",
    mediaType: "image",
    mediaUrl: "WhatsApp Image 2026-09-22 at 4.43.02 PM.jpeg",
    secondaryMedia: [],
    tags: ["ESP32", "LovyanGFX", "TFT ILI9341", "INA219", "ESP32Encoder", "Motor GA25-370", "C++"],
    shortDesc: "Sistema embebido en tiempo real con pantalla táctil TFT ILI9341, monitoreo de tensión, corriente y velocidad angular con encoder en cuadratura.",
    whatIs: "Consola de control y monitoreo interactivo para actuadores electromecánicos. Integra adquisición de datos analógicos de alta precisión, lectura de encoder óptico/magnético y renderizado gráfico fluido en una pantalla táctil gráfica color.",
    whatIDid: "Desarrollo del firmware en C++ utilizando la biblioteca gráfica LovyanGFX optimizada para bus paralelo de 8 bits en ESP32. Implementación de controladores para el sensor INA219 (I2C) para cálculo de voltaje (V), corriente (mA) y potencia en tiempo real. Gestión de interrupciones para encoder rotativo calculando RPM instantáneas y sentido de giro, desplegados dinámicamente en la pantalla.",
    highlights: [
      "Frecuencia de refresco gráfico optimizada por bus paralelo de 8 bits",
      "Monitoreo bidireccional y simultáneo de variables eléctricas (V, I) y cinemáticas (RPM, Dirección)",
      "Calibración táctil resistiva personalizada y control de potencia para motor GA25-370"
    ]
  },
  {
    id: "inaoe-tacometro-calibracion",
    title: "Banco Portátil de Calibración y Tacómetro Digital Industrial",
    category: "embedded",
    categoryLabel: "Sistemas Embebidos & IoT",
    tag: "INAOE - Investigación",
    mediaType: "image",
    mediaUrl: "WhatsApp Image 2026-09-22 at 4.40.52 PM.jpeg",
    secondaryMedia: [],
    tags: ["INAOE", "Arduino / MCU", "LCD 16x2 I2C", "Teclado Matricial 4x4", "Sensor Óptico", "Metrología"],
    shortDesc: "Instrumento portátil desarrollado en INAOE para calibración y caracterización dinámica de motores y ventiladores con interfaz de usuario guiada.",
    whatIs: "Sistema de medición e instrumentación electrónica desarrollado en conjunto con el Dr. Alfredo Benítez Lara en el INAOE. Diseñado para pruebas metrológicas de velocidad de giro en ventiladores de disipación y motores industriales.",
    whatIDid: "Diseño e integración de un gabinete portátil con pantalla LCD retroiluminada y teclado matricial de 16 teclas. Programación de menú interactivo («Calibrar motor? A:Si B:Omitir») para rutinas de auto-cero, muestreo de pulsos ópticos por tacómetro infrarrojo y cálculo estequiométrico de RPM con mínimo margen de error.",
    highlights: [
      "Interfaz HMI autónoma que no requiere computadora externa para operar en campo",
      "Filtro digital contra rebotes ópticos y compensación de ruido electromagnético",
      "Desarrollado y acreditado bajo el sello de investigación de INAOE"
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
      "WhatsApp Image 2026-09-22 at 4.28.51 PM.jpeg"
    ],
    tags: ["Motor Trifásico", "Tiristores T106", "Optoacopladores MOC3021", "Cruce por Cero PC817", "Proteus", "Osciloscopio Tektronix"],
    shortDesc: "Puente rectificador/controlador trifásico de 6 pulsos para motor industrial, con disparo sincronizado por ángulo de fase y aislamiento galvánico.",
    whatIs: "Sistema electrónico de potencia capaz de modular la energía suministrada a un motor de inducción trifásico industrial de 3 fases mediante conmutación controlada por tiristores SCR.",
    whatIDid: "Diseño y simulación del circuito completo en Proteus ISIS. Montaje físico en banco de pruebas con optoacopladores de pulso MOC3021 para aislamiento entre la lógica de control y las tres fases de alta tensión, junto a optoacoplador PC817 para detección de cruce por cero. Calibración del ángulo de disparo mediante osciloscopio Tektronix TDS 2002C analizando las señales senoidales y puesta en marcha del motor con variación suave de velocidad.",
    highlights: [
      "Aislamiento galvánico total entre la etapa lógica y las fases de potencia trifásica",
      "Modulación precisa del ángulo de disparo alfa (0° a 180°)",
      "Validación experimental con motor trifásico industrial en laboratorios de la BUAP"
    ]
  },
  {
    id: "dimmer-scr-potencia",
    title: "Dimmer de Potencia AC por Control de Fase con SCR y Análisis Espectral",
    category: "power",
    categoryLabel: "Electrónica de Potencia",
    tag: "Potencia & Simulación",
    mediaType: "video",
    mediaUrl: "VID-20241128-WA0026.mp4",
    posterUrl: "video_thumbs/VID-20241128-WA0026.jpg",
    secondaryMedia: [
      "Dimer scr proteus.png",
      "WhatsApp Image 2026-09-22 at 4.35.48 PM.jpeg",
      "WhatsApp Image 2026-09-22 at 4.35.30 PM.jpeg",
      "Imagen de WhatsApp 2025-09-25 a las 19.40.56_6a8cc3ef.png",
      "Imagen de WhatsApp 2025-09-20 a las 20.43.02_0caadc71.jpg"
    ],
    tags: ["SCR Tiristor", "Red RC Fase", "120V AC", "Osciloscopio GW Instek", "Proteus", "Perfboard"],
    shortDesc: "Atenuador de fase AC para cargas resistivas e incandescentes, analizando la conmutación y armónicos a 120 Hz en osciloscopio digital.",
    whatIs: "Atenuador electrónico de potencia (Dimmer) basado en tiristor SCR y red de desfasamiento RC para regular la potencia eficaz entregada a cargas conectadas a la red eléctrica doméstica/industrial de 120V AC.",
    whatIDid: "Cálculo analítico del ángulo de retardo y simulación en Proteus con diodo rectificador y lámpara incandescente. Ensamble en placa perforada y protoboard con potenciómetro de ajuste fino. Medición en osciloscopio digital GW Instek GDS-1054B verificando la forma de onda recortada a 120.04 Hz y monitoreo de voltajes pico a pico de hasta 19.8V en el disparo de compuerta.",
    highlights: [
      "Regulación continua y suave de 0 a 100% de luminosidad/potencia en bombilla de 120V",
      "Validación experimental con coincidencia exacta respecto al modelo simulado en Proteus",
      "Registro de oscilogramas reales con parámetros de frecuencia (120 Hz) y pendientes dV/dt"
    ]
  },
  {
    id: "fpga-spartan3e-servo",
    title: "Controlador PWM de Servomotor y Display LCD en FPGA Spartan-3E",
    category: "fpga",
    categoryLabel: "FPGAs & Lógica Digital",
    tag: "Hardware Digital VHDL",
    mediaType: "video",
    mediaUrl: "WhatsApp Video 2024-10-09 at 11.10.15 PM.mp4",
    posterUrl: "video_thumbs/WhatsApp Video 2024-10-09.jpg",
    secondaryMedia: ["WhatsApp Image 2024-10-09 at 11.09.43 PM.png"],
    tags: ["Xilinx Spartan-3E", "VHDL", "PWM Hardware", "LCD Alfanumérico", "Futaba Servo", "Digilent Board"],
    shortDesc: "Implementación en arquitectura digital pura (VHDL) de un generador PWM a 50 Hz con driver para pantalla LCD indicando el ángulo angular en tiempo real.",
    whatIs: "Módulo en FPGA (Field Programmable Gate Array) que genera señales de control de modulación por ancho de pulso con precisión de microsegundos para posicionar un servomotor, controlando simultáneamente una pantalla LCD alfanumérica.",
    whatIDid: "Descripción en VHDL de divisores de frecuencia a partir del oscilador maestro de 50 MHz, máquinas de estados finitos (FSM) para el protocolo de inicialización de la pantalla LCD HD44780 en modo de 4 bits, y bloque generador PWM libre de jitter. Visualización dinámica del ángulo actual («ANGULO: 000°» a «POS 5») comandado por pulsadores y potenciómetro digital.",
    highlights: [
      "Cero latencia de software gracias a la ejecución 100% concurrente en hardware digital",
      "Driver para pantalla HD44780 implementado directamente a nivel compuertas lógicas",
      "Respuesta inmediata y estabilidad milimétrica en el servomotor Futaba"
    ]
  },
  {
    id: "fpga-spartan6-ultrasonico",
    title: "Sistema de Telemetría Ultrasónica en FPGA Spartan-6 (Nexys 3) con Arduino",
    category: "fpga",
    categoryLabel: "FPGAs & Lógica Digital",
    tag: "Procesamiento Digital",
    mediaType: "image",
    mediaUrl: "WhatsApp Image 2026-09-22 at 4.26.35 PM.jpeg",
    secondaryMedia: [],
    tags: ["Spartan-6 Nexys 3", "HC-SR04", "Display 7 Segmentos", "Arduino Mega", "VHDL/Verilog", "Temporización Digital"],
    shortDesc: "Contador digital de tiempo de vuelo ultrasónico sintetizado en FPGA Spartan-6 con multiplexado a 7 segmentos y puente de comunicación con Arduino.",
    whatIs: "Sistema de medición de distancia de alta resolución utilizando pulsos ultrasónicos de 40 kHz medidos por hardware dedicado en FPGA y desplegados en display de 7 segmentos de 4 dígitos.",
    whatIDid: "Implementación en hardware reconfigurable de un contador síncrono que mide con resolución de microsegundos el ancho del pulso de eco del sensor HC-SR04. Decodificador BCD a 7 segmentos multiplexado en tiempo para la tarjeta Nexys 3 y línea de sincronización con microcontrolador Arduino Mega para procesamiento y telemetría complementaria.",
    highlights: [
      "Medición de tiempo de vuelo ultraprecisa sin sobrecarga de CPU",
      "Control multiplexado de displays de 7 segmentos a alta tasa de refresco",
      "Comunicación síncrona entre plataforma FPGA y microcontrolador"
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
    id: "ai-fastalpr-vision",
    title: "Sistema Inteligente de Reconocimiento de Placas Vehiculares (FastALPR)",
    category: "ai",
    categoryLabel: "IA & Visión Artificial",
    tag: "Computer Vision & Deep Learning",
    mediaType: "image",
    mediaUrl: "analiis imagen ia.jpg",
    secondaryMedia: ["WhatsApp Image 2026-09-22 at 4.32.30 PM.jpeg"],
    tags: ["Python", "FastALPR / YOLO", "OpenCV", "FastAPI", "OCR Neuronal", "Cámara en Tiempo Real"],
    shortDesc: "Pipeline completo de visión artificial para detección y lectura automática de placas automotrices (ANPR/ALPR) con backend en FastAPI.",
    whatIs: "Sistema de lectura automatizada de matrículas vehiculares (Automatic Number Plate Recognition) capaz de operar en transmisiones de video en vivo, localizando la placa vehicular y realizando transcripción OCR simultánea.",
    whatIDid: "Desarrollo del software en Python integrando OpenCV con aceleración DSHOW y modelos de deep learning para detección de región de interés (ROI) y red OCR para caracteres de placas vehiculares. Creación de una API REST con FastAPI para ingesta de video y respuesta estructurada en JSON con coordenadas del bounding box, texto reconocido («A00-AAA», «JCZ-263-A») y confianza estadística.",
    highlights: [
      "Detección multiobjeto simultánea de múltiples placas en el mismo cuadro",
      "Filtrado morfológico y binarización adaptativa para placas con reflejos y sombras",
      "Alta tasa de acierto y confianza OCR en condiciones de iluminación variables"
    ]
  },
  {
    id: "iot-esp32-mesh-ap",
    title: "Arquitectura IoT Distribuida Maestro-Esclavo con ESP32 (SoftAP & REST)",
    category: "embedded",
    categoryLabel: "Sistemas Embebidos & IoT",
    tag: "Redes Inalámbricas & IoT",
    mediaType: "image",
    mediaUrl: "WhatsApp Image 2026-09-22 at 4.24.56 PM.jpeg",
    secondaryMedia: [],
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
    id: "invernadero-climatizacion-mq",
    title: "Control Térmico de Invernadero en Lazo Cerrado y Monitoreo de Gases MQ",
    category: "power",
    categoryLabel: "Electrónica de Potencia",
    tag: "Agrotecnología & Automatización",
    mediaType: "image",
    mediaUrl: "WhatsApp Image 2026-09-22 at 4.33.22 PM.jpeg",
    secondaryMedia: [
      "Control de invernadero por temepratura.png",
      "Imagen de WhatsApp 2025-06-15 a las 21.50.13_9232f2a1.jpg",
      "WhatsApp Image 2026-09-22 at 4.38.24 PM.jpeg"
    ],
    tags: ["Arduino", "DS18B20 1-Wire", "Sensor MQ", "Relés 127V", "Proteus", "Ladrillo Refractario Nicrom"],
    shortDesc: "Cámara bioclimática con control termostático digital de calefacción e inyección de aire, complementada con celda sensora de gases en tubería.",
    whatIs: "Sistema de acondicionamiento climático automatizado para cultivo protegido que mantiene la temperatura dentro de una banda de histéresis óptima y monitorea concentraciones de gases en conductos cerrados.",
    whatIDid: "Diseño del circuito de control con sensor de precisión digital DS18B20 (protocolo 1-Wire) y conmutación de potencia para lámpara/resistor y extractor de aire. Adaptación de un sensor de gas de la serie MQ dentro de un compartimento sellado impreso en 3D conectado a la tubería de gas/aire. Pruebas de alta temperatura con elemento calefactor de nicrom al rojo vivo en matriz refractaria.",
    highlights: [
      "Control proporcional / histerético para preservación de temperatura óptima",
      "Cámara sensora de gas fabricada a medida con manufactura aditiva y sellado hermético",
      "Gabinete de instrumentación electrónico aislado de la cámara húmeda"
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
    tags: ["ADC0804", "NE555 Astable", "Generador HMF2550", "Ruido Rosa (Pink Noise)", "Proteus", "Bargraph LED"],
    shortDesc: "Diseño y caracterización de un circuito conversor analógico a digital para captura de entropía física y generación de bytes aleatorios no deterministas.",
    whatIs: "Generador de números aleatorios por hardware (True Random Number Generator). A diferencia de los generadores pseudo-aleatorios por software, este diseño toma como semilla fluctuaciones físicas reales (ruido térmico/rosa) para obtener valores completamente impredecibles para criptografía.",
    whatIDid: "Diseño en Proteus de una etapa de muestreo con temporizador 555 como oscilador de reloj astable y convertidor analógico a digital rápido ADC0804 de 8 bits con salida a barra de LEDs. En laboratorio, inyección y calibración de ruido rosa con amplitud de 10 Vpp utilizando un generador de funciones arbitrarias Rohde & Schwarz / HAMEG HMF2550 acoplado a Arduino.",
    highlights: [
      "Generación de entropía física real imposible de predecir algorítmicamente",
      "Monitoreo visual simultáneo en barra gráfica de 10 LEDs",
      "Validación metrológica con fuente de ruido rosa calibrada en banco de pruebas"
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

// Estado global de filtrado y búsqueda
let currentCategory = "all";
let currentSearchQuery = "";
let currentModalProject = null;
let currentModalMediaIndex = 0;

// Elementos del DOM
const projectsGrid = document.getElementById("projectsGrid");
const filterTabs = document.querySelectorAll(".filter-tab");
const searchInput = document.getElementById("searchInput");
const searchClearBtn = document.getElementById("searchClear");
const resultsCountBar = document.getElementById("resultsCount");
const mobileToggle = document.getElementById("mobileToggle");
const navMenu = document.getElementById("navMenu");

// Modal Elements
const modalOverlay = document.getElementById("projectModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalCategoryBadge = document.getElementById("modalCategoryBadge");
const modalTagBadge = document.getElementById("modalTagBadge");
const modalMediaStage = document.getElementById("modalMediaStage");
const modalGalleryStrip = document.getElementById("modalGalleryStrip");
const modalTitle = document.getElementById("modalTitle");
const modalWhatIs = document.getElementById("modalWhatIs");
const modalWhatIDid = document.getElementById("modalWhatIDid");
const modalHighlights = document.getElementById("modalHighlights");
const modalTagsBox = document.getElementById("modalTagsBox");

/**
 * Función auxiliar para codificar rutas de archivos de forma segura para la web y GitHub Pages
 */
function safeMediaUrl(url) {
  if (!url) return "";
  // Si ya contiene protocolo o barra inicial, procesar adecuadamente
  return encodeURI(url);
}

/**
 * Renderizado de las tarjetas de proyectos
 */
function renderProjects() {
  const filtered = projectsData.filter(project => {
    const matchesCategory = currentCategory === "all" || project.category === currentCategory;
    const query = currentSearchQuery.toLowerCase().trim();
    
    if (!query) return matchesCategory;

    const matchesSearch = 
      project.title.toLowerCase().includes(query) ||
      project.shortDesc.toLowerCase().includes(query) ||
      project.whatIs.toLowerCase().includes(query) ||
      project.whatIDid.toLowerCase().includes(query) ||
      project.tags.some(tag => tag.toLowerCase().includes(query)) ||
      project.tag.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  // Actualizar contador
  if (resultsCountBar) {
    resultsCountBar.textContent = `Mostrando ${filtered.length} de ${projectsData.length} proyectos de ingeniería`;
  }

  // Si no hay resultados
  if (filtered.length === 0) {
    projectsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-subtle);">
        <div style="font-size: 2.5rem; margin-bottom: 1rem;">🔍</div>
        <h3 style="font-family: var(--font-heading); font-size: 1.3rem; margin-bottom: 0.5rem; color: var(--text-white);">No se encontraron proyectos</h3>
        <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1.5rem;">Intenta con otra palabra clave como "ESP32", "FPGA", "Tiristor", "Cadence" o "Antena".</p>
        <button onclick="resetFilters()" class="btn-primary" style="padding: 8px 20px; font-size: 0.85rem;">Restablecer filtros</button>
      </div>
    `;
    return;
  }

  // Generar tarjetas
  projectsGrid.innerHTML = filtered.map(project => {
    const isVideo = project.mediaType === "video";
    const mediaSrc = safeMediaUrl(project.mediaUrl);
    const posterSrc = project.posterUrl ? safeMediaUrl(project.posterUrl) : "";

    return `
      <article class="project-card" data-id="${project.id}">
        <div class="card-media" onclick="openProjectModal('${project.id}')">
          ${isVideo ? `
            <img src="${posterSrc || 'video_thumbs/VID-20241128-WA0026.jpg'}" alt="${project.title}" loading="lazy" />
            <div class="media-play-overlay">
              <div class="play-circle">▶</div>
            </div>
          ` : `
            <img src="${mediaSrc}" alt="${project.title}" loading="lazy" />
          `}
          <div class="media-badge">
            <span>${isVideo ? '🎥 Video Demostrativo' : '📷 Evidencia'}</span>
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
            <button class="btn-details" onclick="openProjectModal('${project.id}')">
              Ver Ficha Técnica <span>→</span>
            </button>
            <div class="evidence-badge">
              <span>●</span> ${project.secondaryMedia && project.secondaryMedia.length > 0 ? `${project.secondaryMedia.length + 1} archivos` : '1 archivo'}
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

/**
 * Apertura del modal interactivo con detalles técnicos completos
 */
function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  currentModalProject = project;
  currentModalMediaIndex = 0;

  // Actualizar metadatos
  modalCategoryBadge.textContent = project.categoryLabel;
  modalTagBadge.textContent = project.tag;
  modalTitle.textContent = project.title;
  modalWhatIs.textContent = project.whatIs;
  modalWhatIDid.textContent = project.whatIDid;

  // Lista de puntos destacados
  modalHighlights.innerHTML = project.highlights.map(h => `<li>${h}</li>`).join('');

  // Badges de tecnologías
  modalTagsBox.innerHTML = project.tags.map(t => `<span class="tech-tag" style="padding: 5px 12px; font-size: 0.8rem;">${t}</span>`).join('');

  // Preparar lista de medios (principal + secundarios)
  const allMedia = [
    { type: project.mediaType, url: project.mediaUrl, poster: project.posterUrl }
  ];

  if (project.secondaryMedia && project.secondaryMedia.length > 0) {
    project.secondaryMedia.forEach(secUrl => {
      const isSecVideo = secUrl.toLowerCase().endsWith(".mp4");
      allMedia.push({
        type: isSecVideo ? "video" : "image",
        url: secUrl,
        poster: ""
      });
    });
  }

  // Renderizar etapa de medios
  renderModalMedia(allMedia, 0);

  // Renderizar tira de miniaturas si hay más de 1 medio
  if (allMedia.length > 1) {
    modalGalleryStrip.style.display = "flex";
    modalGalleryStrip.innerHTML = allMedia.map((m, idx) => {
      const thumbSrc = m.type === "video" ? (m.poster || safeMediaUrl(m.url)) : safeMediaUrl(m.url);
      return `
        <div class="strip-thumb ${idx === 0 ? 'active' : ''}" onclick="switchModalMedia(${idx})">
          <img src="${thumbSrc}" alt="Vista ${idx + 1}" />
        </div>
      `;
    }).join('');
  } else {
    modalGalleryStrip.style.display = "none";
    modalGalleryStrip.innerHTML = "";
  }

  // Mostrar modal
  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

/**
 * Renderiza el medio activo dentro del modal
 */
function renderModalMedia(allMedia, index) {
  const current = allMedia[index];
  const safeUrl = safeMediaUrl(current.url);

  if (current.type === "video") {
    modalMediaStage.innerHTML = `
      <video controls autoplay playsinline style="width: 100%; max-height: 480px; outline: none; background: #000;" poster="${current.poster ? safeMediaUrl(current.poster) : ''}">
        <source src="${safeUrl}" type="video/mp4">
        Tu navegador no soporta reproducción de video HTML5.
      </video>
    `;
  } else {
    modalMediaStage.innerHTML = `
      <img src="${safeUrl}" alt="Detalle del proyecto" style="max-width: 100%; max-height: 480px; object-fit: contain;" />
    `;
  }
}

/**
 * Cambia el medio activo al hacer clic en una miniatura del modal
 */
function switchModalMedia(index) {
  if (!currentModalProject) return;
  const allMedia = [
    { type: currentModalProject.mediaType, url: currentModalProject.mediaUrl, poster: currentModalProject.posterUrl }
  ];
  if (currentModalProject.secondaryMedia) {
    currentModalProject.secondaryMedia.forEach(secUrl => {
      allMedia.push({
        type: secUrl.toLowerCase().endsWith(".mp4") ? "video" : "image",
        url: secUrl,
        poster: ""
      });
    });
  }

  renderModalMedia(allMedia, index);

  // Actualizar clase activa en miniaturas
  const thumbs = modalGalleryStrip.querySelectorAll(".strip-thumb");
  thumbs.forEach((thumb, idx) => {
    if (idx === index) thumb.classList.add("active");
    else thumb.classList.remove("active");
  });
}

/**
 * Cierre del modal
 */
function closeProjectModal() {
  modalOverlay.classList.remove("open");
  document.body.style.overflow = "auto";
  // Pausar cualquier video que estuviera reproduciéndose
  const videoElem = modalMediaStage.querySelector("video");
  if (videoElem) {
    videoElem.pause();
    videoElem.src = "";
  }
}

/**
 * Restablece los filtros de búsqueda
 */
function resetFilters() {
  currentCategory = "all";
  currentSearchQuery = "";
  if (searchInput) searchInput.value = "";
  if (searchClearBtn) searchClearBtn.style.display = "none";
  
  filterTabs.forEach(tab => {
    if (tab.getAttribute("data-filter") === "all") tab.classList.add("active");
    else tab.classList.remove("active");
  });

  renderProjects();
}

/**
 * Inicialización de oyentes de eventos
 */
function initEventListeners() {
  // Filtros de categoría
  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentCategory = tab.getAttribute("data-filter");
      renderProjects();
    });
  });

  // Búsqueda en tiempo real
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.style.display = currentSearchQuery ? "block" : "none";
      }
      renderProjects();
    });
  }

  // Botón para limpiar búsqueda
  if (searchClearBtn) {
    searchClearBtn.addEventListener("click", () => {
      searchInput.value = "";
      currentSearchQuery = "";
      searchClearBtn.style.display = "none";
      renderProjects();
    });
  }

  // Cierre de modal por botón
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeProjectModal);
  }

  // Cierre de modal al hacer clic en el fondo oscuro
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        closeProjectModal();
      }
    });
  }

  // Cierre de modal con tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("open")) {
      closeProjectModal();
    }
  });

  // Menú móvil
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });

    navMenu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
      });
    });
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initEventListeners();
});
