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

  if (project.pdfUrl) {
    modalTagsBox.innerHTML += `
      <div style="width: 100%; margin-top: 1.25rem;">
        <a href="${encodeURI(project.pdfUrl)}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="padding: 10px 22px; font-size: 0.88rem; display: inline-flex; align-items: center; gap: 8px;">
          <span>📄</span> Ver / Descargar Documento: ${project.pdfName || project.pdfUrl}
        </a>
      </div>
    `;
  }

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
