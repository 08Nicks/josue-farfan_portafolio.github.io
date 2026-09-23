/**
 * ==============================================================================
 * INTERNATIONALIZATION (i18n) ENGINE - JOSUÉ FARFÁN GONZÁLEZ PORTFOLIO
 * Automatic Regional Language Detection (ES/EN) + Persistent Toggle Switch
 * Full Spanish and English dictionaries for UI, 20 Projects, and 9 Certificates.
 * ==============================================================================
 */

(function () {
  "use strict";

  const STORAGE_KEY = "portfolio_language";

  // Translation Dictionaries
  const UI_STRINGS = {
  "es": {
    "brand_sub": "Electrónica & Sistemas Embebidos · BUAP / INAOE",
    "nav_inicio": "Inicio",
    "nav_proyectos": "Proyectos",
    "nav_areas": "Áreas",
    "nav_certificaciones": "Reconocimientos",
    "nav_trayectoria": "Trayectoria",
    "nav_instrumentacion": "Instrumentación",
    "nav_contacto": "Contacto",
    "hero_badge": "Estudiante de Electrónica (BUAP) • Estancia en INAOE",
    "hero_motto": "Forging the Digital Reality",
    "hero_title": "Construyendo, probando y haciendo que los <span class=\"gradient-text\">circuitos cobren vida</span>.",
    "hero_desc": "¡Hola! Soy <strong>Josué Farfán González</strong>. Estoy cursando el último semestre de <strong>Electrónica en la BUAP</strong> y tuve la gran oportunidad de hacer una <strong>estancia de investigación en el INAOE</strong>. Me apasiona entender cómo funcionan las cosas desde adentro: desde diseñar chips y lógica digital en FPGAs, hasta armar circuitos en protoboard, programar microcontroladores y ajustar señales en el osciloscopio. Este sitio es mi bitácora de proyectos, experimentos y aprendizaje constante.",
    "hero_btn_explore": "Explorar Proyectos",
    "hero_btn_contact": "Platiquemos / Contacto",
    "hero_stat_projects": "Proyectos Documentados",
    "hero_stat_areas": "Áreas de Interés",
    "hero_stat_tests": "Pruebas Reales en Laboratorio",
    "hero_chip_1": "◈ TSMC 28nm • Cadence",
    "hero_chip_2": "◈ FPGA Spartan & ESP32",
    "hero_overlay_role": "Estancia en Sala Limpia & Laboratorio",
    "projects_tag": "Mi Trabajo",
    "projects_title": "Galería de Proyectos & Prácticas",
    "projects_sub": "Cada tarjeta resume una experiencia real: esquemáticos, circuitos montados en protoboard, oscilogramas y videos de funcionamiento. Haz clic en cualquiera para abrir su ficha técnica.",
    "search_placeholder": "Buscar por palabra clave: ESP32, FPGA, SCR, Cadence, Proteus, Antena...",
    "filter_all": "Todos",
    "filter_vlsi": "Microelectrónica & VLSI",
    "filter_embedded": "Sistemas Embebidos & IoT",
    "filter_power": "Electrónica de Potencia",
    "filter_fpga": "FPGAs & Lógica Digital",
    "filter_ai": "IA & Visión Artificial",
    "filter_rf": "RF & Telecom",
    "filter_robotics": "Robótica & CAD 3D",
    "results_showing": "Mostrando {0} de {1} proyectos",
    "no_projects_title": "No se encontraron proyectos",
    "no_projects_sub": "Intenta con otra palabra clave como \"ESP32\", \"FPGA\", \"Tiristor\", \"Cadence\" o \"Antena\".",
    "btn_reset_filters": "Restablecer filtros",
    "card_view_details": "Ver Ficha Técnica",
    "card_media_video": "Video Demostrativo",
    "card_media_photos": "{0} Fotos",
    "card_media_evidence": "Evidencia",
    "card_evidences_count": "{0} evidencias",
    "card_file_count": "1 archivo",
    "areas_tag": "Lo Que Me Apasiona",
    "areas_title": "Áreas de Interés & Práctica Técnica",
    "areas_sub": "Los campos de la electrónica donde más disfruto aprender, experimentar y poner a prueba circuitos reales en el laboratorio.",
    "area_1_title": "Microelectrónica & Diseño VLSI",
    "area_1_desc": "Flujo completo en herramientas de grado industrial EDA para nodos nanométricos (TSMC 28nm) y experiencia de sala limpia.",
    "area_2_title": "Electrónica de Potencia & Motores",
    "area_2_desc": "Control de máquinas eléctricas rotativas y modulación de energía en corriente alterna y directa de alta potencia.",
    "area_3_title": "FPGAs & Lógica Reconfigurable",
    "area_3_desc": "Diseño de arquitecturas paralelas en silicio sin latencia de CPU para procesamiento de señales y temporización digital.",
    "area_4_title": "Sistemas Embebidos & IoT",
    "area_4_desc": "Desarrollo de firmware en C/C++ bare-metal y RTOS para telemetría distribuida, pantallas táctiles y sensores industriales.",
    "area_5_title": "RF & Telecomunicaciones",
    "area_5_desc": "Diseño electromagnético, acoplamiento de impedancias y caracterización instrumental en frecuencias de microondas.",
    "area_6_title": "IA, Visión & Robótica",
    "area_6_desc": "Procesamiento de imágenes por computadora, modelos de deep learning para OCR y cinemática de mecanismos impresos en 3D.",
    "certs_tag": "Acreditaciones & Logros",
    "certs_title": "Certificaciones & Reconocimientos",
    "certs_sub": "Evidencias oficiales de cursos intensivos en EDA, certificaciones de industria, participación en hackathones de innovación y divulgación científica.",
    "cert_filter_all": "Todos",
    "cert_filter_eda": "Semiconductores & EDA",
    "cert_filter_innovation": "Innovación & Hackathones",
    "cert_filter_tech": "Industria & Embebidos",
    "cert_filter_outreach": "Divulgación & BUAP",
    "cert_btn_view": "Ver Documento",
    "cert_official_suffix": "Oficial",
    "cert_signatories_prefix": "Firmas / Aval:",
    "about_tag": "Conóceme Más",
    "about_caption": "Josué Farfán González • Estancia en Sala Limpia & Obleas de Silicio",
    "about_lead": "Curiosidad por entender cómo funciona el mundo, gusto por ensuciarme las manos con hardware y muchas horas disfrutando el laboratorio.",
    "about_p1": "Siempre he creído que la mejor manera de aprender electrónica no es quedándose solo en la teoría, sino atreviéndose a armar el circuito, medirlo y entender por qué no funcionó a la primera hasta que quede perfecto. Estoy en mi último semestre de la <strong>Licenciatura en Electrónica en la BUAP</strong> y viví una etapa clave durante mi <strong>estancia de investigación en el INAOE</strong>, donde aprendí de cerca la rigurosidad científica, el trabajo en salas limpias y el manejo de instrumentación avanzada.",
    "about_p2": "No pretendo presentarme como un experto que se las sabe todas; me considero un estudiante apasionado, disciplinado y con muchas ganas de seguir aprendiendo de personas con más experiencia. Cada proyecto en esta página representa desvelos, dudas resueltas, notas de laboratorio y la satisfacción genuina de ver un diseño funcionar en la vida real.",
    "timeline_1_title": "Estancia de Investigación • INAOE",
    "timeline_1_desc": "Una experiencia formativa invaluable en el INAOE, colaborando con investigadores en instrumentación, pruebas de laboratorio y primeros acercamientos a entornos de cuarto limpio.",
    "timeline_2_title": "Último Semestre de Electrónica • BUAP",
    "timeline_2_desc": "Facultad de Ciencias de la Electrónica. Fortaleciendo bases en circuitos analógicos, diseño digital en FPGAs, electrónica de potencia y programación de sistemas embebidos.",
    "timeline_3_title": "Laboratorio & Sala Limpia",
    "timeline_3_desc": "Práctica formativa conociendo el proceso de fotolitografía en obleas de silicio y exploración introductoria del flujo de diseño VLSI con Cadence.",
    "timeline_4_title": "Comunidad Estudiantil • IEEE Sección Puebla",
    "timeline_4_desc": "<strong>Miembro Estudiantil IEEE (Sección Puebla)</strong>. Me motiva conectar con la comunidad tecnológica, asistir a conferencias y aprender constantemente de los avances en el área.",
    "pcb_layer_tag": "CONCEPT ART // IDENTIDAD VISUAL",
    "pcb_rev_tag": "BANNER DE LINKEDIN",
    "pcb_btn_hw": "Banner Estilo PCB",
    "pcb_btn_art": "Arte Dragón & Fuego",
    "pcb_hint_hw": "Arte Conceptual con IA • Estética de circuito impreso, trazas de cobre y dragón medieval",
    "pcb_hint_art": "Concept Art con IA • Dragón nórdico/celta exhalando fuego entre glifos prehispánicos",
    "pcb_spec_nature_label": "Naturaleza del Diseño",
    "pcb_spec_nature_val": "Identidad Visual & Concept Art personal (No es un proyecto técnico)",
    "pcb_spec_creation_label": "Creación & Técnica",
    "pcb_spec_creation_val": "Composición digital y generación asistida por Inteligencia Artificial",
    "pcb_spec_culture_label": "Inspiración Cultural",
    "pcb_spec_culture_val": "Simbología Celta, Dragón Nórdico y Glifos Prehispánicos fusionados con Hardware",
    "pcb_spec_use_label": "Uso & Lema Personal",
    "inst_tag": "Herramientas & Laboratorio",
    "inst_title": "Ecosistema Tecnológico e Instrumentación",
    "inst_sub": "Instrumentos de medición y suites de software con los que desarrollo, pruebo y valido sistemas físicos.",
    "inst_lab_title": "Instrumentación de Laboratorio",
    "inst_eda_title": "Software & Suites EDA",
    "inst_hw_title": "Hardware, MCUs & FPGAs",
    "inst_lang_title": "Lenguajes & Protocolos",
    "contact_tag": "¿Platicamos?",
    "contact_title": "Iniciemos una Conversación",
    "contact_sub": "Siempre estoy entusiasmado por aprender de personas con experiencia, colaborar en proyectos de hardware o intercambiar ideas sobre sistemas embebidos, FPGAs y circuitos. ¡Escríbeme con total confianza!",
    "contact_email_btn": "Enviar Correo: josumiisc@gmail.com",
    "contact_linkedin_btn": "LinkedIn: in/josue-farfan",
    "contact_youtube_btn": "YouTube: @josuefarfan9152",
    "footer_motto": "Forging the Digital Reality",
    "footer_copy": "© 2026 <strong>Josué Farfán González</strong>. Portafolio de Electrónica & Sistemas Embebidos (BUAP / INAOE).",
    "footer_top": "Volver Arriba ↑",
    "modal_what_is_title": "¿Qué es este sistema?",
    "modal_what_i_did_title": "¿Qué se hizo & Reto superado?",
    "modal_highlights_title": "Puntos Clave de Ingeniería",
    "modal_tools_title": "Tecnologías, Protocolos & Herramientas:",
    "modal_copy_code": "Copiar Código",
    "modal_copied": "¡Copiado!",
    "modal_download": "Descargar",
    "modal_view_below": "Ver Abajo",
    "modal_view_side": "Ver Lado a Lado",
    "modal_lines_count": "{0} líneas",
    "modal_evidences_counter": "{0} / {1} Evidencias",
    "modal_view_full": "Ver completa",
    "modal_view_full_100": "Ver completa (100%)",
    "modal_view_full_image": "Ver imagen completa ↗",
    "modal_open_original_pdf": "Abrir PDF Original ↗",
    "modal_doc_accredited_title": "Documento Oficial Acreditado (Vista Completa)",
    "modal_pdf_viewer_title": "Visor PDF Interactivo Oficial · Descargar e Imprimir",
    "modal_fullscreen": "Pantalla Completa",
    "modal_download_pdf": "Descargar PDF",
    "modal_team_label": "Coautoría & Equipo de Proyecto ({0}):",
    "modal_cert_emitter_label": "Institución Emisora:",
    "modal_cert_date_label": "Fecha de Emisión:",
    "modal_cert_accreditation_label": "Acreditación Curricular:",
    "modal_cert_signatories_label": "Firmas & Autoridades:",
    "modal_cert_summary_text": "Acreditación oficial emitida por {0}. Fecha: {1}. Modalidad: {2}. Acreditado por: {3}."
  },
  "en": {
    "brand_sub": "Electronics & Embedded Systems · BUAP / INAOE",
    "nav_inicio": "Home",
    "nav_proyectos": "Projects",
    "nav_areas": "Areas",
    "nav_certificaciones": "Certifications",
    "nav_trayectoria": "Journey",
    "nav_instrumentacion": "Instrumentation",
    "nav_contacto": "Contact",
    "hero_badge": "Electronics Engineering Senior (BUAP) • Research at INAOE",
    "hero_motto": "Forging the Digital Reality",
    "hero_title": "Designing, testing, and bringing <span class=\"gradient-text\">circuits to life</span>.",
    "hero_desc": "Hello! I am <strong>Josué Farfán González</strong>. I am in my senior year of <strong>Electronics Engineering at BUAP</strong> and had the opportunity to conduct a <strong>research internship at INAOE</strong>. I am driven to understand technology from first principles: from designing silicon chips and FPGA digital architectures to assembling breadboard circuits, programming microcontrollers, and tuning signals on bench oscilloscopes. This site is my project logbook, technical laboratory, and continuous learning journey.",
    "hero_btn_explore": "Explore Projects",
    "hero_btn_contact": "Let's Connect / Contact",
    "hero_stat_projects": "Documented Projects",
    "hero_stat_areas": "Core Competencies",
    "hero_stat_tests": "Hands-on Bench Validation",
    "hero_chip_1": "◈ TSMC 28nm • Cadence",
    "hero_chip_2": "◈ Spartan FPGA & ESP32",
    "hero_overlay_role": "Cleanroom Research & Hardware Lab",
    "projects_tag": "Technical Portfolio",
    "projects_title": "Projects & Experimental Logbook",
    "projects_sub": "Every card documents hands-on hardware engineering: schematics, breadboard prototypes, oscilloscope waveforms, and live operating demos. Click on any card to view its technical datasheet.",
    "search_placeholder": "Search by keyword: ESP32, FPGA, SCR, Cadence, Proteus, Antenna...",
    "filter_all": "All",
    "filter_vlsi": "Microelectronics & VLSI",
    "filter_embedded": "Embedded Systems & IoT",
    "filter_power": "Power Electronics",
    "filter_fpga": "FPGAs & Digital Logic",
    "filter_ai": "AI & Computer Vision",
    "filter_rf": "RF & Telecom",
    "filter_robotics": "Robotics & 3D CAD",
    "results_showing": "Showing {0} of {1} projects",
    "no_projects_title": "No projects found",
    "no_projects_sub": "Try searching another keyword such as \"ESP32\", \"FPGA\", \"Thyristor\", \"Cadence\", or \"Antenna\".",
    "btn_reset_filters": "Reset filters",
    "card_view_details": "View Technical Sheet",
    "card_media_video": "Demo Video",
    "card_media_photos": "{0} Photos",
    "card_media_evidence": "Evidence",
    "card_evidences_count": "{0} media items",
    "card_file_count": "1 file",
    "areas_tag": "Core Engineering Domains",
    "areas_title": "Specialties & Technical Focus",
    "areas_sub": "The hardware engineering disciplines where I design, experiment, prototype, and rigorously test real physical circuits.",
    "area_1_title": "Microelectronics & VLSI Design",
    "area_1_desc": "Full-flow industrial EDA toolchains for nanometer nodes (TSMC 28nm) coupled with hands-on semiconductor cleanroom experience.",
    "area_2_title": "Power Electronics & Motor Control",
    "area_2_desc": "Rotary electric machine drives, high-power AC/DC phase modulation, thyristor rectifiers, and industrial PLC sequencing.",
    "area_3_title": "FPGAs & Reconfigurable Logic",
    "area_3_desc": "Zero-latency parallel digital architectures synthesized directly into silicon for signal processing and real-time timing.",
    "area_4_title": "Embedded Systems & IoT",
    "area_4_desc": "Bare-metal C/C++ and RTOS firmware engineering for distributed telemetry, touchscreen graphics, and industrial sensor buses.",
    "area_5_title": "RF & Microwave Engineering",
    "area_5_desc": "Electromagnetic modeling, transmission line impedance matching, microstrip design, and RF spectrum analyzer characterization.",
    "area_6_title": "AI, Vision & Robotics",
    "area_6_desc": "High-speed computer vision pipelines, deep learning neural networks, laser profilometry, and 3D CAD parametric mechanism design.",
    "certs_tag": "Credentials & Endorsements",
    "certs_title": "Official Certifications & Credentials",
    "certs_sub": "Official accredited credentials spanning intensive EDA courses, industry certifications, hackathon innovation competitions, and science outreach.",
    "cert_filter_all": "All",
    "cert_filter_eda": "Semiconductors & EDA",
    "cert_filter_innovation": "Innovation & Hackathons",
    "cert_filter_tech": "Embedded & Industry",
    "cert_filter_outreach": "Outreach & BUAP",
    "cert_btn_view": "View Document",
    "cert_official_suffix": "Official",
    "cert_signatories_prefix": "Signatories / Endorsed by:",
    "about_tag": "About Me",
    "about_caption": "Josué Farfán González • Cleanroom Research & Silicon Wafers",
    "about_lead": "Driven by curiosity to uncover how physical technology works, a passion for hands-on hardware prototyping, and countless hours in the lab.",
    "about_p1": "I have always believed that the true way to master electronics is not merely staying inside theoretical textbooks, but having the initiative to build circuits, take measurements, and troubleshoot why they didn't work on the first try until they run reliably. I am in the final semester of my <strong>B.S. in Electronics Sciences at BUAP</strong> and experienced a pivotal chapter during my <strong>research stay at INAOE</strong>, where I experienced first-hand scientific rigor, cleanroom microfabrication, and advanced bench instrumentation.",
    "about_p2": "I do not claim to know everything; I consider myself a passionate, disciplined engineer eager to learn from experienced mentors. Every project in this portfolio represents late nights, solved technical challenges, laboratory notebooks, and the genuine thrill of bringing physical hardware designs to life.",
    "timeline_1_title": "Research Stay • INAOE",
    "timeline_1_desc": "An invaluable research experience at INAOE, collaborating with researchers on laboratory instrumentation, characterization, and cleanroom environments.",
    "timeline_2_title": "Senior Year in Electronics • BUAP",
    "timeline_2_desc": "Faculty of Electronics Sciences. Strengthening core foundations in analog integrated circuits, FPGA digital design, power electronics, and embedded firmware.",
    "timeline_3_title": "Hardware Lab & Cleanroom",
    "timeline_3_desc": "Hands-on training in silicon wafer photolithography processes and foundational VLSI design methodology using Cadence Virtuoso.",
    "timeline_4_title": "Student Community • IEEE Puebla Section",
    "timeline_4_desc": "<strong>IEEE Student Member (Puebla Section)</strong>. Passionate about connecting with the global engineering community, attending technical conferences, and staying updated with emerging hardware advancements.",
    "pcb_layer_tag": "CONCEPT ART // VISUAL IDENTITY",
    "pcb_rev_tag": "LINKEDIN BANNER",
    "pcb_btn_hw": "PCB Style Banner",
    "pcb_btn_art": "Dragon & Fire Art",
    "pcb_hint_hw": "AI Concept Art • Printed circuit board aesthetics, routed copper traces, and medieval dragon",
    "pcb_hint_art": "AI Concept Art • Nordic/Celtic dragon breathing fire among Pre-Hispanic geometric glyphs",
    "pcb_spec_nature_label": "Design Nature",
    "pcb_spec_nature_val": "Visual Identity & Personal Concept Art (Not an engineering project)",
    "pcb_spec_creation_label": "Creation & Technique",
    "pcb_spec_creation_val": "Digital layout composition and Artificial Intelligence assisted generation",
    "pcb_spec_culture_label": "Cultural Inspiration",
    "pcb_spec_culture_val": "Celtic knots, Nordic dragon, and Pre-Hispanic glyphs merged with hardware traces",
    "pcb_spec_use_label": "Purpose & Personal Motto",
    "inst_tag": "Tools & Testing Lab",
    "inst_title": "Technological Ecosystem & Instrumentation",
    "inst_sub": "Bench instruments and software suites I utilize to design, simulate, prototype, and rigorously validate physical systems.",
    "inst_lab_title": "Laboratory Bench Instrumentation",
    "inst_eda_title": "Software & EDA Design Suites",
    "inst_hw_title": "Hardware, MCUs & FPGAs",
    "inst_lang_title": "Languages & Protocols",
    "contact_tag": "Get in Touch",
    "contact_title": "Let's Start a Conversation",
    "contact_sub": "I am always eager to learn from experienced mentors, collaborate on hardware ventures, or exchange ideas about embedded systems, FPGAs, and circuit design. Feel free to reach out!",
    "contact_email_btn": "Send Email: josumiisc@gmail.com",
    "contact_linkedin_btn": "LinkedIn: in/josue-farfan",
    "contact_youtube_btn": "YouTube: @josuefarfan9152",
    "footer_motto": "Forging the Digital Reality",
    "footer_copy": "© 2026 <strong>Josué Farfán González</strong>. Electronics & Embedded Systems Portfolio (BUAP / INAOE).",
    "footer_top": "Back to Top ↑",
    "modal_what_is_title": "What is this system?",
    "modal_what_i_did_title": "What was achieved & Challenge overcome",
    "modal_highlights_title": "Key Engineering Highlights",
    "modal_tools_title": "Technologies, Protocols & Tools:",
    "modal_copy_code": "Copy Code",
    "modal_copied": "Copied!",
    "modal_download": "Download",
    "modal_view_below": "View Below",
    "modal_view_side": "View Side by Side",
    "modal_lines_count": "{0} lines",
    "modal_evidences_counter": "{0} / {1} Evidences",
    "modal_view_full": "View full",
    "modal_view_full_100": "View full (100%)",
    "modal_view_full_image": "View full image ↗",
    "modal_open_original_pdf": "Open Original PDF ↗",
    "modal_doc_accredited_title": "Official Accredited Document (Full View)",
    "modal_pdf_viewer_title": "Official Interactive PDF Viewer · Download & Print",
    "modal_fullscreen": "Full Screen",
    "modal_download_pdf": "Download PDF",
    "modal_team_label": "Co-authorship & Project Team ({0}):",
    "modal_cert_emitter_label": "Issuing Institution:",
    "modal_cert_date_label": "Date of Issuance:",
    "modal_cert_accreditation_label": "Curricular Accreditation:",
    "modal_cert_signatories_label": "Signatories & Authorities:",
    "modal_cert_summary_text": "Official credential issued by {0}. Date: {1}. Format: {2}. Endorsed by: {3}."
  }
};
  const PROJECTS_ES = {
  "cadence-virtuoso-launcher-vlsi": {
    "title": "Entorno Automatizado para Cadence Virtuoso (TSMC 28nm) & Síntesis Genus",
    "categoryLabel": "Diseño VLSI & Microelectrónica",
    "tag": "Automatización EDA & CLI",
    "shortDesc": "Script interactivo en Windows Batch para automatizar el lanzamiento de Cadence Virtuoso TSMC 28nm, servidor gráfico X11, purga de sesiones y síntesis Genus.",
    "whatIs": "Suite de automatización y entorno de trabajo CLI para herramientas EDA industriales (Cadence Virtuoso y Cadence Genus) con el kit de diseño de proceso (PDK) TSMC a 28 nanómetros. El objetivo del script es optimizar y asegurar el flujo de inicio de sesión hacia el cluster EDA, levantando el servidor gráfico X11 y gestionando bloqueos de diseño.",
    "whatIDid": "Programación integral en Windows Batch del script lanzador («SELECCIÓN DE ENTORNO» / virtuoso_launcher.bat) con interfaz interactiva en consola usando colores ANSI y banner ASCII. El script verifica si el servidor gráfico Xming está en ejecución (iniciándolo automáticamente en pantalla múltiple si está inactivo), valida credenciales, purga bloqueos de archivos huérfanos (.cdslck) y sesiones concurrentes de Virtuoso, carga el entorno .cds28nm y lanza la conexión segura por PuTTY con reenvío de túnel X11.",
    "highlights": [
      "Automatización completa del arranque de Cadence Virtuoso TSMC 28nm y servidor gráfico X11 (Xming)",
      "Gestión y limpieza remota de candados huérfanos (.cdslck) y procesos congelados vía SSH",
      "Menú interactivo con guías rápidas integradas para simulación RTL (xmverilog/xmvhdl) y síntesis en Genus",
      "Descarga directa del script funcional 'virtuoso_launcher.bat' en el portafolio"
    ],
    "tags": [
      "Cadence Virtuoso",
      "TSMC 28nm PDK",
      "Cadence Genus",
      "Script Launcher CLI",
      "Windows Batch",
      "Xming X11 / SSH",
      "Automatización EDA"
    ]
  },
  "vlsi-inversor-riscv-tsmc28nm": {
    "title": "Diseño Físico de Layout: Inversor CMOS & Procesador RISC-V en TSMC 28nm",
    "categoryLabel": "Diseño VLSI & Microelectrónica",
    "tag": "Layout Nanométrico TSMC 28nm",
    "shortDesc": "Trazado nanométrico full-custom a nivel de máscaras y transistores en TSMC 28nm, análisis del apilamiento de capas (N-Well, Poly, M1-M7) y floorplan físico del procesador RISC-V.",
    "whatIs": "Implementación integral de diseño físico microelectrónico sobre el nodo industrial TSMC 28nm (High-k Metal Gate Bulk CMOS) empleando Cadence Virtuoso Layout Suite XL. Comprende dos escalas fundamentales de integración VLSI: en primer lugar, el trazado geométrico full-custom a nivel transistor de una celda inversora balanceada analizando la interacción física de máscaras; y en segundo lugar, el análisis macroscópico del floorplan, colocación de celdas estándar y red de distribución de energía (Power Grid) de un procesador de arquitectura abierta RISC-V.",
    "whatIDid": "Trazado geométrico capa por capa del inversor CMOS respetando estrictamente el manual de diseño de TSMC (Design Rule Manual - DRM): dimensionamiento asimétrico de compuertas (PMOS W=340nm vs NMOS W=270nm con L=30nm en dos dedos paralelos nf=2 para equilibrar la menor movilidad de huecos frente a electrones y lograr tiempos de conmutación simétricos tpHL=12.4ps / tpLH=12.8ps); diseño de rieles de alimentación VDD y VSS en Metal 1 con contactos óhmicos directos a pozo N (N-Well Tap) y sustrato P (Sub Tap) a 65nm de espaciado mínimo para garantizar inmunidad total al fenómeno de Latch-up. En la etapa de sistema, análisis del die del núcleo RISC-V: inspección de los anillos perimetrales de potencia (Power Rings en metales superiores M6/M7), mallas verticales para reducción de caídas IR-Drop, síntesis del árbol de reloj (CTS) y anillo de sellado mecánico (Seal Ring) para protección física del chip.",
    "highlights": [
      "Diseño a nivel de máscaras físicas: N-Well, Difusión Activa (OD), Poly Gate (PO), Contactos de Tungsteno (CO) y Metal 1 (M1)",
      "Dimensionamiento óptimo Wp/Wn (340nm / 270nm) con dos dedos (nf=2) para simetría de retardo temporal y reducción de capacitancias parásitas de difusión",
      "Estructura integral anti-latchup mediante guard rings y taps de pozo/sustrato cumpliendo reglas de proximidad DRC de 65nm",
      "Verificación física estricta en nodo 28nm: DRC (Design Rule Checking), LVS (Layout Versus Schematic) y extracción parásita PEX limpia",
      "Análisis macro del floorplan del núcleo RISC-V: malla de alimentación (Power Mesh), celdas estándar en hileras continuas y anillo de sellado (Seal Ring)"
    ],
    "tags": [
      "TSMC 28nm PDK",
      "Layout Full-Custom",
      "Inversor CMOS",
      "Procesador RISC-V",
      "Cadence Virtuoso",
      "Reglas DRC / LVS",
      "Power Mesh & PDN",
      "Floorplanning ASIC"
    ]
  },
  "esp32-pizarra-interfaz-tft": {
    "title": "Creación de Interfaces Gráficas Táctiles (GUI) en Pantallas TFT con ESP32",
    "categoryLabel": "Sistemas Embebidos & Interfaces",
    "tag": "GUI & Pantallas TFT",
    "shortDesc": "Desarrollo de interfaces gráficas interactivas y pizarra táctil sobre pantallas TFT a color gobernadas por microcontrolador ESP32 mediante bus paralelo.",
    "whatIs": "Proyecto enfocado en la concepción, renderizado y optimización de interfaces gráficas de usuario (GUI) en tiempo real para pantallas TFT color con controlador ILI9341 y panel táctil resistivo. Abarca el manejo de controladores gráficos de alta velocidad y la creación de componentes interactivos como lienzos de dibujo, menús táctiles y paneles de visualización digital.",
    "whatIDid": "Mapeo de hardware y configuración del bus paralelo de 8 bits en microcontrolador ESP32 aprovechando el acelerador de la biblioteca LovyanGFX para maximizar la tasa de cuadros por segundo (FPS) sin parpadeo. Implementación de la calibración del panel táctil resistivo con resolución de coordenadas X/Y y desarrollo de una pizarra digital interactiva que responde de manera inmediata al tacto directo.",
    "highlights": [
      "Configuración optimizada de bus paralelo de 8 bits en ESP32 para alta velocidad de refresco",
      "Rutina de muestreo y calibración precisa de panel táctil resistivo X/Y",
      "Renderizado de componentes de interfaz gráfica, tipografías escalables y lienzo de pizarra interactiva"
    ],
    "tags": [
      "ESP32",
      "Pantalla TFT ILI9341",
      "LovyanGFX",
      "TouchScreen Resistivo",
      "Bus Paralelo 8-bit",
      "Diseño de Interfaces GUI",
      "Pizarra Digital"
    ]
  },
  "control-velocidad-ventilador-mcu": {
    "title": "Consola Modular de Control de Velocidad y Tacómetro para Ventilador de Alto Rendimiento",
    "categoryLabel": "Sistemas Embebidos & Control",
    "tag": "Instrumentación & Control",
    "shortDesc": "Consola portátil modular gobernada por Arduino Mega para el control de velocidad en lazo cerrado y calibración de ventilador de alto flujo mediante sensor Hall.",
    "whatIs": "Instrumento electrónico modular diseñado para el accionamiento, calibración de velocidad y monitoreo en tiempo real de RPM en ventiladores de alta velocidad y alto flujo (servidor / cómputo). Su arquitectura compacta permite operar como una unidad autónoma con interfaz de usuario integrada para ajuste de consigna, perfiles de giro y rutinas de calibración.",
    "whatIDid": "Desarrollo del hardware y programación del firmware en microcontrolador Arduino Mega montado en un gabinete portátil con asa. Integración de la etapa de modulación PWM y lectura de los trenes de pulsos provenientes del sensor de efecto Hall interno del ventilador para el cálculo de RPM instantáneas mediante interrupciones de hardware. Programación de un menú interactivo en pantalla LCD 16x2 comandado por teclado matricial 4x4 («Calibrar motor? A:Si B:Omitir») para ejecución de pruebas dinámicas, auto-cero y control de revoluciones.",
    "highlights": [
      "Lectura precisa de frecuencia y RPM en tiempo real aprovechando el sensor de efecto Hall integrado",
      "Consola portátil autónoma con interfaz de operación basada en display LCD 16x2 y teclado matricial 4x4",
      "Rutina interactiva de calibración y control de modulación PWM desarrollado en Arduino Mega"
    ],
    "tags": [
      "Arduino Mega",
      "Sensor Efecto Hall",
      "Ventilador de Servidor",
      "Control PWM",
      "Display LCD 16x2",
      "Teclado Matricial 4x4",
      "Consola Portátil Modular"
    ]
  },
  "opamp-discreto-mosfet-bjt": {
    "title": "Diseño y Construcción de Amplificador Operacional (Op-Amp) con MOSFETs, NPN y PNP en Modo Inversor",
    "categoryLabel": "Microelectrónica & Circuitos Analógicos",
    "tag": "Op-Amp Discreto en Protoboard",
    "shortDesc": "Diseño circuital, montaje en protoboard y caracterización dinámica en modo inversor de un amplificador operacional discreto construido con transistores MOSFETs y pares BJT (NPN y PNP).",
    "whatIs": "Implementación experimental a nivel de componentes discretos de la arquitectura interna de un Amplificador Operacional (Op-Amp) configurado en topología de amplificador inversor con retroalimentación negativa. El circuito materializa las etapas fundamentales de un circuito integrado analógico: par diferencial de entrada para alto CMRR, carga activa por espejo de corriente, etapa de ganancia de voltaje (VAS) y etapa de salida complementaria push-pull con transistores MOSFET y BJT (NPN y PNP).",
    "whatIDid": "Cálculo y ajuste de los puntos de operación DC (Q-point), corrientes de reposo y resistencias de polarización para MOSFETs y transistores bipolares NPN y PNP. Cableado estructurado sobre protoboard reduciendo inductancias parásitas e incorporación de potenciómetro para ajuste y anulación de tensión de offset. Conexión de la red de retroalimentación negativa en modo inversor y caracterización en osciloscopio digital Tektronix TDS 2002C a 114.8 Hz: se evidencia la señal de entrada en el Canal 1 (traza amarilla) y la salida en el Canal 2 (traza cian), mostrando la inversión senoidal exacta de 180° (anti-fase) sin saturación ni distorsión por cruce (crossover).",
    "highlights": [
      "Operación en modo amplificador inversor con retroalimentación negativa demostrando respuesta matemática y lineal",
      "Evidencia en osciloscopio Tektronix TDS 2002C a 114.8 Hz: Canal 1 (entrada) vs Canal 2 (salida) con desfase exacto de 180° (anti-fase)",
      "Arquitectura analógica discreta completa: par diferencial de entrada, espejo de corriente, etapa VAS y etapa de salida push-pull",
      "Integración híbrida de MOSFETs con transistores bipolares NPN y PNP para optimizar impedancias de entrada y salida"
    ],
    "tags": [
      "Amplificador Inversor (180°)",
      "Amplificador Operacional",
      "Transistores MOSFET",
      "BJT NPN y PNP",
      "Par Diferencial",
      "Espejo de Corriente",
      "Etapa Push-Pull",
      "Osciloscopio Tektronix TDS 2002C"
    ]
  },
  "modulo-cruce-cero-mcu": {
    "title": "Prototipo de Control de Fase y Cruce por Cero con Microcontrolador",
    "categoryLabel": "Electrónica de Potencia",
    "tag": "Prueba de Concepto / MCU",
    "shortDesc": "Diseño y validación de etapa de sincronización por cruce por cero y corte de fase analógica en microcontrolador como base para control de motores.",
    "whatIs": "Sistema de prueba de concepto para la modulación de potencia eléctrica en corriente alterna mediante control digital. Su propósito fue validar el algoritmo de detección de cruce por cero (zero-crossing) y la temporización precisa de los pulsos de disparo para variar la velocidad de motores antes de escalar al sistema trifásico.",
    "whatIDid": "Implementación en Arduino Mega de la lectura de dos potenciómetros como referencias analógicas de velocidad y ajuste. Uso de un optoacoplador para censar el cruce por cero de la línea de red y sincronizar interrupciones en el microcontrolador. Programación del corte exacto en la señal análoga de alimentación y verificación experimental de la potencia entregada utilizando un foco incandescente como carga de prueba y osciloscopio para capturar el instante de conmutación.",
    "highlights": [
      "Detección precisa del cruce por cero con aislamiento optoelectrónico e interrupciones de hardware",
      "Ajuste dinámico de velocidad mediante referencias analógicas con potenciómetros",
      "Base algorítmica y circuital que sirvió para el diseño del controlador de motor trifásico industrial"
    ],
    "tags": [
      "Arduino Mega",
      "Cruce por Cero",
      "Optoacoplador",
      "Corte de Fase",
      "Potenciómetros Analógicos",
      "Osciloscopio Digital",
      "Control de Motores"
    ]
  },
  "dimmer-scr-diac-baquelita": {
    "title": "Controlador de Potencia AC con SCR y DIAC: Tarjeta en Baquelita y Control de Motor",
    "categoryLabel": "Electrónica de Potencia",
    "tag": "Tiristores SCR & DIAC",
    "shortDesc": "Controlador de potencia AC por ángulo de fase con tiristor SCR y DIAC, validado en simulación Proteus, fabricado en placa de baquelita perforada y probado con motor en banco de laboratorio.",
    "whatIs": "Sistema electrónico de potencia para corriente alterna (120V AC) basado en el control de ángulo de fase mediante un tiristor SCR disparado por la tensión de ruptura de un DIAC. El circuito permite regular continuamente la tensión y potencia media entregada a motores y cargas eléctricas mediante la variación analógica de un potenciómetro en una red RC.",
    "whatIDid": "Diseño circuital y simulación dinámica en Proteus 8 Professional evaluando la conmutación y el recorte de la onda senoidal en el osciloscopio virtual. Fabricación física y soldadura de componentes en placa de baquelita perforada (perfboard). Validación experimental en el laboratorio de la BUAP conectando el controlador a un motor en banco de pruebas, logrando una regulación progresiva y estable de la velocidad de giro comandada por potenciómetro, además de la medición de formas de onda a 120.04 Hz en osciloscopio digital.",
    "highlights": [
      "Prueba experimental en video demostrando el control continuo de velocidad de un motor en banco de laboratorio",
      "Disparo de compuerta sincronizado con tiristor SCR y DIAC a través de red desfasadora RC con potenciómetro",
      "Construcción de tarjeta física en baquelita perforada y contraste contra simulación dinámica en Proteus 8"
    ],
    "tags": [
      "Control de Motor AC",
      "Tiristor SCR",
      "DIAC",
      "Baquelita Perforada",
      "Proteus 8 Professional",
      "Osciloscopio Digital",
      "Control de Fase AC",
      "Laboratorio BUAP"
    ]
  },
  "fpga-spartan3e-servo": {
    "title": "Controlador PWM para Servomotor Futaba y Display LCD en FPGA Spartan-3E",
    "categoryLabel": "FPGAs & Lógica Digital",
    "tag": "Lógica Digital Pura en VHDL",
    "shortDesc": "Control de ángulo para servomotor Futaba 3000 y display LCD 16x2 implementado 100% en hardware digital con FPGA Spartan-3E gobernado por potenciómetro rotativo.",
    "whatIs": "Sistema de control angular y visualización en tiempo real implementado íntegramente en arquitectura lógica digital reconfigurable (FPGA Xilinx Spartan-3E). Toda la lógica de control, el muestreo de la consigna mediante la perilla/potenciómetro de la tarjeta, la generación del tren de pulsos PWM a 50 Hz y el driver de la pantalla LCD 16x2 fueron sintetizados en hardware a nivel compuertas, prescindiendo por completo de microcontroladores.",
    "whatIDid": "Diseño y síntesis de módulos en VHDL para la tarjeta Digilent Spartan-3E. Se implementó la lógica digital para interpretar el ajuste angular proveniente del potenciómetro/perilla rotativa de la tarjeta y transferirlo simultáneamente a dos bloques: por un lado, un modulador PWM a 50 Hz con ancho de pulso de precisión de microsegundos libre de fluctuaciones para orientar con exactitud el servomotor Futaba 3000; y por otro lado, una máquina de estados finitos (FSM) que controla la inicialización y refresco del display alfanumérico LCD 16x2 integrado en la tarjeta, reflejando el ángulo actual («ANGULO: 000°» y «POS 5»).",
    "highlights": [
      "Arquitectura 100% digital concurrente sintetizada en VHDL para FPGA Spartan-3E",
      "Control angular suave y sin jitter para servomotor industrial Futaba 3000 accionado por potenciómetro",
      "Driver para pantalla LCD 16x2 HD44780 gobernado por máquina de estados finitos (FSM)"
    ],
    "tags": [
      "Xilinx Spartan-3E",
      "VHDL",
      "Generador PWM Hardware",
      "Display LCD 16x2",
      "Servomotor Futaba 3000",
      "Control por Potenciómetro",
      "Máquinas de Estado FSM"
    ]
  },
  "fpga-spartan6-ultrasonico": {
    "title": "Telemetría Ultrasónica y Procesamiento Digital en FPGA Spartan-6 (Nexys 3)",
    "categoryLabel": "FPGAs & Lógica Digital",
    "tag": "Lógica Digital & VHDL",
    "shortDesc": "Integración híbrida entre Arduino Mega y FPGA Spartan-6 para adquisición ultrasónica HC-SR04, procesamiento concurrente y visualización en tiempo real.",
    "whatIs": "Sistema embebido híbrido de instrumentación y procesamiento digital. Combina un microcontrolador Arduino Mega para la gestión y transmisión de señales del sensor ultrasónico HC-SR04 con la velocidad de procesamiento concurrente de una FPGA Xilinx Spartan-6 (Digilent Nexys 3), la cual recibe los datos, calcula la distancia y comanda la visualización en hardware.",
    "whatIDid": "Implementación del enlace de comunicación y temporización entre el Arduino Mega y la tarjeta Digilent Nexys 3 conectada a través de sus puertos PMOD. El Arduino se encargaba de comandar los trenes de pulso y la lectura del sensor HC-SR04 para transferir la información hacia la FPGA. En la Spartan-6, se diseñó la lógica digital en VHDL para la captura de las señales, la conversión a unidades métricas y la multiplexación de los displays de 7 segmentos para desplegar instantáneamente la distancia medida.",
    "highlights": [
      "Arquitectura cooperativa MCU-FPGA comunicando Arduino Mega y Xilinx Spartan-6 mediante pines PMOD",
      "Procesamiento y decodificación de datos de distancia en hardware digital VHDL sin sobrecarga computacional",
      "Control y multiplexado dinámico de visualizadores para despliegue numérico en tiempo real"
    ],
    "tags": [
      "Xilinx Spartan-6",
      "Digilent Nexys 3",
      "VHDL",
      "Sensor HC-SR04",
      "Arduino Mega",
      "Displays 7 Segmentos",
      "Puertos PMOD"
    ]
  },
  "rf-antena-microstrip-espectro": {
    "title": "Diseño, Simulación en HFSS y Fabricación de Antena Microstrip a 1.9 GHz",
    "categoryLabel": "RF & Microondas",
    "tag": "Microondas, HFSS & VNA",
    "shortDesc": "Diseño analítico en MATLAB, modelado electromagnético 3D en Ansys HFSS, microfabricación sobre Rogers 3003 y caracterización de parámetro S11 a 1.9 GHz con analizador vectorial de redes.",
    "whatIs": "Proyecto de investigación y desarrollo en ingeniería de microondas realizado en equipo en la Facultad de Ciencias de la Electrónica (BUAP) en coautoría con Cesar Marco Mucio Corte García, Ricardo Baruch Guzmán Lorenzo y José Manuel López Castro. Abarca el ciclo completo de desarrollo de una antena de microcinta (microstrip patch) rectangular sintonizada a 1.9 GHz (banda PCS/GSM y telecomunicaciones móviles), integrando cálculo analítico riguroso según la teoría de Cavidades de Balanis, simulación de dispersión S11 y diagramas de radiación en Ansys HFSS, microfabricación sobre sustrato de alta frecuencia Rogers RO3003 con mascarilla de vinil y ataque químico (FeCl3), y caracterización experimental en banco de RF con analizador vectorial de redes.",
    "whatIDid": "Colaboración activa en el equipo en todas las fases del proyecto: diseño del script matemático en MATLAB (W = 55.82 mm, L = 45.12 mm, εreff = 2.8682, ΔL = 0.7493 mm) con ranuras de inserción (inset feed) y acoplador de λ/4 a 50 Ω; modelado 3D de onda completa en Ansys HFSS 2024 R2 obteniendo S11 = -16.48 dB y ganancia directiva de 6.94 dB; transferencia física del diseño DXF a placa Rogers 3003 (εr = 3.0, h = 1.52 mm, cobre de 35 µm) mediante grabado en cloruro férrico y soldadura de conector SMA hembra de borde; y finalmente, medición experimental en laboratorio con el analizador Anritsu Site Master S331D (archivo Touchstone josuef.s1p), registrando una resonancia en 1.925 GHz (desviación de solo 7.7 MHz respecto a HFSS), S11 = -14.93 dB (96.8% de potencia radiada eficaz) y un ancho de banda experimental de 50 MHz.",
    "highlights": [
      "Investigación y desarrollo en equipo con coautoría junto a Cesar Marco Mucio Corte García, Ricardo Baruch Guzmán Lorenzo y José Manuel López Castro (BUAP)",
      "Ciclo completo de ingeniería RF: Teoría analítica → Simulación HFSS → Fabricación PCB Rogers 3003 → Medición VNA",
      "Resonancia medida experimentalmente en 1.925 GHz con S11 de -14.93 dB y 50 MHz de ancho de banda a -10 dB",
      "Simulación electromagnética en Ansys HFSS validando 6.94 dB de ganancia directiva frontal a 0° y S11 de -16.48 dB",
      "Proceso de grabado químico controlado con FeCl3 y conector SMA edge-mount de 50 Ω sin degradación de impedancia"
    ],
    "tags": [
      "Antena Patch 1.9 GHz",
      "Ansys HFSS 2024",
      "Rogers RO3003",
      "Anritsu Site Master S331D",
      "Parámetro S11 (-14.93 dB)",
      "Conector SMA Edge-Mount",
      "Grabado Químico FeCl3",
      "MATLAB"
    ]
  },
  "ai-vision-detection": {
    "title": "Pipeline de Visión por Computadora & Detección de Patrones con IA",
    "categoryLabel": "IA & Visión Artificial",
    "tag": "Computer Vision & Deep Learning",
    "shortDesc": "Sistema de visión artificial en tiempo real desarrollado en Python para detección multiobjeto y extracción de características sobre video en vivo.",
    "whatIs": "Arquitectura de procesamiento digital de imágenes y visión computacional que procesa flujos de video en vivo provenientes de cámara, aplicando modelos de redes neuronales convolucionales para detección espacial, delimitación por bounding boxes y reconocimiento óptico de caracteres.",
    "whatIDid": "Desarrollo del pipeline de inferencia en Python utilizando OpenCV con aceleración DSHOW y modelos neuronales optimizados para ejecución fluida en ventana interactiva. Implementación de una arquitectura modular conectada a endpoints en FastAPI para ingesta de video, extracción de coordenadas espaciales, análisis probabilístico de confianza y despliegue gráfico en tiempo real.",
    "highlights": [
      "Inferencia multiobjeto de alta velocidad y bajo retraso directamente sobre video en vivo",
      "Filtrado morfológico y normalización de imagen ante variaciones drásticas de luz y reflejos",
      "Integración de modelos neuronales con arquitectura de servicios backend en FastAPI"
    ],
    "tags": [
      "Python",
      "OpenCV",
      "Deep Learning",
      "FastAPI",
      "Inferencia en Tiempo Real",
      "Detección de Objetos"
    ]
  },
  "optica-difraccion-laser-grafito": {
    "title": "Difracción y Dispersión de Haz Láser por Mina de Grafito en Cuarto Oscuro",
    "categoryLabel": "Física Óptica & Láser",
    "tag": "Óptica Ondulatoria",
    "shortDesc": "Demostración experimental del fenómeno de difracción y dispersión transversal de un haz láser al incidir sobre una mina cilíndrica de grafito en cuarto oscuro.",
    "whatIs": "Experimento de óptica física y ondulatoria que ilustra el principio de difracción electromagnética. Al hacer incidir un haz de luz láser monocromática sobre un obstáculo cilíndrico opaco y estrecho (una mina de lápiz de grafito), la luz se dispersa perpendicularmente formando un patrón lineal de difracción característico en un entorno de cuarto oscuro.",
    "whatIDid": "Montaje y alineación geométrica del emisor láser hacia la mina de grafito en una cámara oscura para eliminar cualquier ruido lumínico parásito. Calibración del ángulo de incidencia para maximizar la dispersión transversal del haz coherente y registro fotográfico de alta resolución del patrón de difracción proyectado a lo largo de la superficie de prueba.",
    "highlights": [
      "Comprobación experimental del fenómeno de difracción luminosa en medio confinado",
      "Montaje en cuarto oscuro para máxima nitidez del haz y franjas de dispersión",
      "Demostración de óptica electromagnética utilizando una mina de grafito como elemento difractor"
    ],
    "tags": [
      "Difracción de Fraunhofer",
      "Haz Láser Rojo",
      "Mina de Grafito",
      "Cuarto Oscuro",
      "Óptica Ondulatoria",
      "Dispersión de Luz"
    ]
  },
  "iot-esp32-mesh-ap": {
    "title": "Arquitectura IoT Distribuida Maestro-Esclavo con ESP32 (SoftAP & REST)",
    "categoryLabel": "Sistemas Embebidos & IoT",
    "tag": "Redes Inalámbricas & IoT",
    "shortDesc": "Red inalámbrica punto a punto ad-hoc entre microcontroladores ESP32 sin requerir router externo, comunicando estados de sensores y actuadores.",
    "whatIs": "Arquitectura de comunicación inalámbrica local y descentralizada donde un nodo ESP32 actúa como Access Point autónomo y servidor HTTP asíncrono, mientras nodos esclavos se asocian como clientes para intercambiar telemetría y comandos de acción en milisegundos.",
    "whatIDid": "Programación en C++ con ESP-IDF / Arduino core. El nodo maestro levanta un SoftAP con credenciales seguras y expone un endpoint REST no bloqueante (`/button`). El nodo esclavo realiza polling HTTP inteligente con manejo de reintentos y control de actuadores lumínicos/relevadores según el estado reportado.",
    "highlights": [
      "Operación 100% autónoma sin depender de routers ni infraestructura de internet",
      "Servidor asíncrono no bloqueante capaz de atender múltiples clientes concurrentes",
      "Mecanismo de reconexión automática instantánea ante cortes de señal"
    ],
    "tags": [
      "ESP32 SoftAP",
      "ESPAsyncWebServer",
      "HTTPClient REST",
      "C++",
      "Red Autónoma",
      "Firmware"
    ]
  },
  "incubadora-biogas-termica": {
    "title": "Incubadora para Producción de Biogás con Control Térmico y Sensor de Gas",
    "categoryLabel": "Sistemas Embebidos & Control",
    "tag": "Servicio Social / Bioprocesos",
    "shortDesc": "Sistema de control térmico en lazo cerrado y monitoreo de gas desarrollado durante el servicio social para una incubadora de muestras generadoras de biogás.",
    "whatIs": "Cámara de incubación automatizada desarrollada para optimizar la digestión anaerobia y producción de biogás. Su objetivo es mantener las muestras biológicas en el rango térmico exacto para maximizar la actividad bacteriana, integrando además monitoreo de gases mediante sensores en conducto.",
    "whatIDid": "Desarrollo y programación del firmware en microcontrolador Arduino y simulación del circuito en Proteus. El sensor digital de temperatura DS18B20 se introdujo directamente dentro de las muestras para registrar la temperatura interna con máxima precisión. Con base en esta lectura, el sistema conmutaba mediante relevadores entre un foco incandescente de 127V (para calefacción) y un ventilador (para enfriamiento forzado). Adicionalmente, se integró un sensor de la serie MQ adaptado a la línea de tubería para registrar los gases emanados.",
    "highlights": [
      "Medición de temperatura directa e in-situ dentro de las muestras biológicas con sensor digital DS18B20",
      "Control térmico automatizado en lazo cerrado con doble etapa: foco calefactor y ventilador disipador",
      "Monitoreo de gases en línea acoplando sensor de la serie MQ en ducto de latón sellado"
    ],
    "tags": [
      "Servicio Social",
      "Incubadora Biogás",
      "Arduino",
      "Sensor DS18B20",
      "Sensor MQ Gas",
      "Relevadores 127V",
      "Proteus",
      "Control en Lazo Cerrado"
    ]
  },
  "parrilla-electrica-thermal-blueprint": {
    "title": "Parrilla Eléctrica Resistiva & Manual Técnico 'Thermal Blueprint'",
    "categoryLabel": "Electrónica de Potencia & Térmica",
    "tag": "Diseño Térmico & Educación",
    "shortDesc": "Diseño y construcción de parrilla eléctrica de alta temperatura con resistencia en ladrillo refractario, complementada con el manual técnico educativo 'Thermal Blueprint'.",
    "whatIs": "Proyecto integral de ingeniería térmica y contenido educativo. Consiste en la construcción de una parrilla eléctrica de alto rendimiento térmico con resistencia resistiva encauzada en ladrillo refractario, articulada con el manual técnico 'Thermal Blueprint' que fusiona la formulación teórica de calor con el montaje práctico en taller.",
    "whatIDid": "Mecanizado y ranurado manual del canal serpentino en ladrillo refractario para alojar y mantener aislada la resistencia calefactora de ferretería bajo régimen incandescente continuo. Cálculo de impedancia, disipación por efecto Joule y dimensionamiento de conexiones eléctricas seguras. Redacción y diagramación del manual didáctico 'Thermal Blueprint.pdf' estructurado para enseñar a estudiantes y entusiastas la ingeniería detrás de la construcción de parrillas eléctricas.",
    "highlights": [
      "Canalización precisa de resistencia al rojo vivo en matriz de ladrillo refractario para alta inercia térmica",
      "Cálculo de potencia eléctrica, corriente nominal y aislamiento térmico por efecto Joule",
      "Publicación del manual técnico 'Thermal Blueprint.pdf' que acompaña el proyecto como curso práctico"
    ],
    "tags": [
      "Parrilla Eléctrica",
      "Resistencia Nicrom",
      "Ladrillo Refractario",
      "Thermal Blueprint (PDF)",
      "Efecto Joule",
      "Cálculo de Potencia",
      "Ingeniería Práctica"
    ]
  },
  "trng-generador-ruido-rosa": {
    "title": "Generador de Números Aleatorios Verdaderos por Ruido Físico (TRNG)",
    "categoryLabel": "Sistemas Embebidos & IoT",
    "tag": "Criptografía & Hardware",
    "shortDesc": "Diseño e implementación de un generador TRNG por entropía física capturando ruido analógico con micrófono electret, reloj astable 555 y ADC0804, leído por Arduino y exportado a Excel.",
    "whatIs": "Sistema generador de números aleatorios por hardware (TRNG - True Random Number Generator) que extrae entropía de fluctuaciones físicas reales del entorno capturadas por un micrófono electret preamplificado (y contrastado con ruido rosa). Al convertir este ruido analógico continuo en palabras binarias de 8 bits mediante un convertidor analógico a digital ADC0804, se obtienen secuencias verdaderamente impredecibles para criptografía o simulación estocástica.",
    "whatIDid": "Diseño esquemático y simulación en Proteus incorporando el convertidor ADC0804 junto a un temporizador NE555 en configuración astable encargado de proporcionar la señal de reloj externa para el muestreo del ADC (un circuito integrado sumamente delicado en su sincronía de reloj, referencias de voltaje y polarización analógica). En la etapa física en protoboard, se acondicionó la señal de un micrófono electret con un amplificador para alimentar la entrada analógica del ADC con ruido acústico ambiental, y se validó en laboratorio inyectando 10 Vpp de ruido rosa mediante un generador arbitrario Rohde & Schwarz / HAMEG HMF2550. Un microcontrolador Arduino se encargó de leer el bus paralelo de salida de 8 bits del ADC y transmitir el flujo de bytes hacia la PC para guardarlos automáticamente en Excel para su posterior análisis estadístico.",
    "highlights": [
      "Generación de reloj de muestreo externo estable con temporizador NE555 en modo astable",
      "Digitalización precisa de 8 bits en paralelo dominando la calibración y temporización del ADC0804",
      "Captura de ruido con micrófono electret preamplificado, validación con generador HMF2550 y guardado en Excel vía Arduino"
    ],
    "tags": [
      "TRNG",
      "ADC0804 (8 Bits)",
      "Reloj Astable NE555",
      "Micrófono Electret",
      "Preamplificador Analógico",
      "Arduino",
      "Exportación a Excel",
      "Ruido Rosa (HMF2550)",
      "Proteus"
    ]
  },
  "plc-automatizacion-industrial": {
    "title": "Banco de Pruebas de Automatización Industrial con PLC y Control SCADA",
    "categoryLabel": "Electrónica de Potencia",
    "tag": "Automatización Industrial",
    "shortDesc": "Estación de control electromecánico para maniobra y protección de motores trifásicos, secuenciamiento lógico y supervisión en pantalla.",
    "whatIs": "Módulo industrial para el diseño, cableado y programación de tableros de control con controladores lógicos programables (PLC), botoneras de mando, lámparas de señalización y protecciones térmicas de potencia.",
    "whatIDid": "Configuración y cableado de líneas de control y fuerza en banco didáctico-industrial. Programación de diagramas de escalera (Ladder Logic) para rutinas de arranque estrella-triángulo, inversión de giro y frenado dinámico, sincronizado con monitor de supervisión y monitoreo de alarmas en tiempo real.",
    "highlights": [
      "Diseño conforme a normas de seguridad eléctrica industrial y paros de emergencia",
      "Integración de interfaz HMI con diagnóstico de fallas y estado de contactores",
      "Experiencia práctica en maniobra de potencia y cableado de tableros industriales"
    ],
    "tags": [
      "PLC Industrial",
      "Lógica de Relevación",
      "Contactores",
      "SCADA / HMI",
      "Variador de Frecuencia",
      "Seguridad Eléctrica"
    ]
  },
  "robotica-3d-cad": {
    "title": "Modelado CAD 3D de Brazo Robótico (3 GDL) & Actuador Lineal Piñón-Cremallera",
    "categoryLabel": "Robótica & CAD 3D",
    "tag": "Robótica & Diseño Mecánico CAD",
    "shortDesc": "Modelado CAD 3D paramétrico y análisis cinemático de manipulador robótico de 3 GDL y actuador cartesiano de cremallera y piñón para servomotores.",
    "whatIs": "Diseño de sistemas mecánicos y robóticos articulados concebidos en software CAD 3D. Abarca la estructura de un brazo robótico de 3 Grados de Libertad (3 GDL) con base giratoria y eslabones de posicionamiento, así como un mecanismo lineal cartesiano impulsado por cremallera y piñón de precisión accionado por servomotores de alto torque.",
    "whatIDid": "Diseño de ensamble paramétrico 3D considerando tolerancias mecánicas, distribución de masas y centros de gravedad para minimizar esfuerzos en los servomotores. Integración de la base de control para placa Arduino y cálculo de la relación de transmisión en el módulo de piñón y cremallera para lograr desplazamiento lineal suave y repetible en los ejes de prueba.",
    "highlights": [
      "Modelado paramétrico de brazo robótico articulado de 3 GDL con alojamientos precisos para servomotores",
      "Diseño de mecanismo de piñón y cremallera para traslación lineal con alta rigidez estructural",
      "Integración electromecánica con base para microcontrolador Arduino y cableado guiado"
    ],
    "tags": [
      "Brazo Robótico 3 GDL",
      "Mecanismo Cremallera-Piñón",
      "CAD 3D Paramétrico",
      "Servomotores",
      "Arduino",
      "Cinemática Directa",
      "Diseño Mecánico CAD"
    ]
  },
  "impresion-3d-ender5-plus": {
    "title": "Calibración Dimensional, Nivelación y Manufactura Aditiva con Creality Ender 5 Plus",
    "categoryLabel": "Manufactura Aditiva & CNC",
    "tag": "Impresión 3D Gran Formato",
    "shortDesc": "Puesta a punto, nivelación de cama y calibración de pasos micrométricos en impresora 3D Creality Ender 5 Plus de gran formato (350x350x400 mm).",
    "whatIs": "Proyecto de ingeniería de manufactura aditiva enfocado en el ensamble, puesta a punto y calibración metrológica de la impresora 3D industrial de gran formato Creality Ender 5 Plus (volumen cúbico de 350 x 350 x 400 mm con doble husillo en eje Z). Su objetivo es garantizar tolerancias micrométricas y adhesión perfecta de primera capa en piezas mecánicas de gran escala.",
    "whatIDid": "Puesta en marcha y calibración física de la máquina: alineación y sincronización de doble eje Z, calibración de tensión de bandas en pórtico CoreXY / cartesiano, nivelación de cama caliente de vidrio templado mediante sensor BLTouch (mesh leveling multizona) y ajuste de Z-offset. Fabricación y medición con vernier digital de cubo de calibración XYZ de 20 mm para compensación de pasos por milímetro (steps/mm), afinación de retracción y control de flujo de extrusión libre de warping.",
    "highlights": [
      "Puesta a punto de impresora de gran formato Creality Ender 5 Plus con volumen de impresión de 350 x 350 x 400 mm",
      "Calibración de malla de nivelación de cama (Mesh Leveling) con sensor BLTouch para primera capa homogénea",
      "Verificación metrológica dimensional con cubo de calibración XYZ de 20 mm asegurando precisión dimensional y repetibilidad"
    ],
    "tags": [
      "Creality Ender 5 Plus",
      "Calibración XYZ",
      "Mesh Bed Leveling",
      "BLTouch",
      "Cubo de Calibración 20mm",
      "Manufactura Aditiva",
      "Gran Formato 350mm"
    ]
  },
  "domotica-pir-sensor": {
    "title": "Automatización Residencial por Detección de Movimiento Infrarrojo (PIR)",
    "categoryLabel": "Sistemas Embebidos & IoT",
    "tag": "Domótica & Sensores",
    "shortDesc": "Conmutador inteligente de iluminación activado por presencia, validado en simulador Wokwi y prototipado físico autónomo.",
    "whatIs": "Sistema de encendido y apagado automático de luminarias residenciales mediante detección piroeléctrica infrarroja de movimiento corporal.",
    "whatIDid": "Simulación esquemática en el entorno online Wokwi evaluando la respuesta del sensor PIR y la conmutación de compuertas lógicas hacia el relé de aislamiento. Construcción de módulo autónomo conectado a foco de 127V de corriente alterna para ahorro energético en pasillos e interiores.",
    "highlights": [
      "Simulación virtual interactiva previa al ensamblaje físico",
      "Módulo compacto con conector directo a clavija de red eléctrica",
      "Temporización ajustable de permanencia de encendido y umbral de luz"
    ],
    "tags": [
      "Sensor PIR HC-SR501",
      "Wokwi Simulator",
      "Módulo Relé 5V",
      "Inversor Lógico",
      "127V Iluminación"
    ]
  }
};
  const PROJECTS_EN = {
  "cadence-virtuoso-launcher-vlsi": {
    "title": "Automated Environment for Cadence Virtuoso (TSMC 28nm) & Genus Synthesis",
    "categoryLabel": "VLSI Design & Microelectronics",
    "tag": "EDA & CLI Automation",
    "shortDesc": "Interactive Windows Batch script automating Cadence Virtuoso TSMC 28nm launch, X11 graphics server, session purging, and Genus synthesis.",
    "whatIs": "Automation suite and CLI workstation environment for industrial EDA tools (Cadence Virtuoso and Cadence Genus) utilizing the TSMC 28nm Process Design Kit (PDK). The script streamlines and secures remote login into the EDA compute cluster, launching the X11 graphics server and managing design lock files.",
    "whatIDid": "Comprehensive Windows Batch programming of the launcher script ('ENVIRONMENT SELECTION' / virtuoso_launcher.bat) featuring an interactive console UI with ANSI color codes and ASCII branding. The script verifies active Xming instances (auto-launching in multi-window mode if inactive), validates credentials, purges orphaned lock files (.cdslck) and frozen Virtuoso sessions, sources the .cds28nm environment, and initiates a secure PuTTY connection with X11 tunneling.",
    "highlights": [
      "End-to-end launch automation for Cadence Virtuoso TSMC 28nm and Xming X11 display server",
      "Remote cleanup of orphaned design locks (.cdslck) and frozen processes via SSH",
      "Interactive menu with built-in quick guides for RTL simulation (xmverilog/xmvhdl) and Genus synthesis",
      "Direct functional download of 'virtuoso_launcher.bat' within the portfolio"
    ],
    "tags": [
      "Cadence Virtuoso",
      "TSMC 28nm PDK",
      "Cadence Genus",
      "Script Launcher CLI",
      "Windows Batch",
      "Xming X11 / SSH",
      "EDA Automation"
    ]
  },
  "vlsi-inversor-riscv-tsmc28nm": {
    "title": "Physical Layout Design: CMOS Inverter & RISC-V Processor in TSMC 28nm",
    "categoryLabel": "VLSI Design & Microelectronics",
    "tag": "TSMC 28nm Nanometer Layout",
    "shortDesc": "Physical full-custom layout design, DRC/LVS physical verification, and post-layout extraction of a CMOS inverter and a 32-bit RISC-V core.",
    "whatIs": "Integrated circuit physical implementation at the 28-nanometer bulk CMOS node (TSMC 28nm PDK) using Cadence Virtuoso Layout Suite XL. Covers the full IC design flow: from transistor-level schematic capture and transient SPICE simulation to nanometer silicon layout, design rule checking (DRC), and layout-versus-schematic (LVS) verification.",
    "whatIDid": "Full-custom physical layout of a symmetric CMOS inverter with dual-finger transistors (PMOS W=340nm, NMOS W=270nm, L=30nm) achieving matched propagation delays (tpHL = tpLH). Guard rings, bulk taps, diffusion spacing, and metal 1 power rails were laid out complying with strict nanometer DRC rules. Additionally, visualized and analyzed the floorplanning and standard-cell placement of a complete 32-bit RISC-V microprocessor core.",
    "highlights": [
      "Full-custom nanometer CMOS layout adhering to TSMC 28nm design rules",
      "Zero DRC / LVS clean physical verification in Cadence Virtuoso Layout Suite",
      "Parasitic extraction (PEX) with Spectre netlist modeling femtofarad-scale capacitances",
      "Floorplanning and metal routing analysis for a 32-bit RISC-V microprocessor core"
    ],
    "tags": [
      "TSMC 28nm Node",
      "Physical Layout",
      "Cadence Virtuoso XL",
      "CMOS Inverter",
      "RISC-V 32-bit",
      "DRC / LVS Verification",
      "Spectre SPICE"
    ]
  },
  "esp32-pizarra-interfaz-tft": {
    "title": "Interactive Touchscreen GUI (TFT ILI9341 + XPT2046) on ESP32",
    "categoryLabel": "Embedded Systems & IoT",
    "tag": "Embedded GUI & Touch",
    "shortDesc": "Interactive drawing board, stylus calibration, and real-time touch interface running bare-metal on ESP32 with an ILI9341 SPI display.",
    "whatIs": "Real-time graphical user interface (GUI) and digital whiteboard system implemented on an ESP32 micro-controller interfaced with a 2.8-inch TFT display (ILI9341 driver, 320x240 resolution) and resistive touch controller (XPT2046) over dual SPI buses.",
    "whatIDid": "Engineered firmware utilizing optimized display drivers (LovyanGFX) to achieve high frame rates without flickering. Implemented affine matrix touch calibration algorithms to map resistive touch coordinates to physical display pixels, UI widgets (color picker, brush size selector, clear screen canvas), and hardware pinout routing optimizing SPI bus clock speeds up to 40 MHz.",
    "highlights": [
      "Hardware SPI bus optimization operating at 40 MHz with DMA double-buffering",
      "Precise 3-point calibration algorithm for XPT2046 resistive touch controller",
      "Responsive, zero-latency drawing canvas with dynamic brush palette",
      "Complete wiring blueprint and verified firmware ready for deployment"
    ],
    "tags": [
      "ESP32",
      "ILI9341 Display",
      "XPT2046 Touch",
      "LovyanGFX",
      "Embedded C++",
      "Hardware SPI 40MHz",
      "Touch GUI"
    ]
  },
  "control-velocidad-ventilador-mcu": {
    "title": "Modular Fan Speed Controller & Optical MCU Tachometer",
    "categoryLabel": "Embedded Systems & IoT",
    "tag": "PWM & Closed-Loop Telemetry",
    "shortDesc": "Hardware console for closed-loop fan speed control with PWM modulation, optocoupled Hall/infrared sensing, and RPM telemetry.",
    "whatIs": "Bench hardware control console for DC brushless fans and cooling systems, featuring variable PWM duty-cycle modulation, hardware zero-loss driver stages, optical tachometer RPM measurement via hardware interrupts, and real-time status reporting on an alphanumeric display.",
    "whatIDid": "Designed and assembled a modular hardware test bench. Programmed high-frequency PWM timers to eliminate audible motor hum, configured external hardware interrupts with noise debouncing for tachometer pulse counting, calibrated RPM conversion math, and integrated power MOSFET driver stages with flyback diode protection.",
    "highlights": [
      "High-frequency PWM driver eliminating audible motor coil acoustic noise",
      "Precision optical RPM measurement using MCU external interrupt service routines (ISR)",
      "Real-time RPM and duty cycle display on LCD with responsive potentiometer knob",
      "Flyback diode and thermal protection protecting MCU GPIO pins"
    ],
    "tags": [
      "Microcontrollers",
      "Hardware PWM",
      "Optical Tachometer",
      "Brushless DC Fan",
      "Hardware Interrupts",
      "Optocoupling",
      "Bench Testing"
    ]
  },
  "opamp-discreto-mosfet-bjt": {
    "title": "Discrete Operational Amplifier Design & Testing (MOSFET & BJT Stages)",
    "categoryLabel": "Power & Discrete Electronics",
    "tag": "Discrete Analog Design",
    "shortDesc": "Design, transistor-level biasing, breadboard assembly, and oscilloscope characterization of a multi-stage discrete operational amplifier.",
    "whatIs": "Discrete transistor operational amplifier built entirely from individual MOSFET and BJT transistors on a breadboard. Demonstrates foundational analog IC topology: differential input pair, active current mirror load, high-gain voltage amplifier stage (VAS), and push-pull output driver.",
    "whatIDid": "Calculated DC biasing operating points, designed constant current sources for the differential pair, balanced differential transconductance, tuned frequency compensation to prevent high-frequency oscillations, and validated open-loop/closed-loop gain, slew rate, CMRR, and clipping behavior under an oscilloscope.",
    "highlights": [
      "Discrete differential input stage with active current mirror for high CMRR",
      "Push-pull class AB output stage delivering low output impedance",
      "Comprehensive frequency compensation ensuring stability under negative feedback",
      "Experimental characterization: slew rate, bandwidth, and open-loop gain verified on bench oscilloscope"
    ],
    "tags": [
      "Discrete Op-Amp",
      "MOSFET / BJT",
      "Differential Pair",
      "Current Mirror",
      "Analog Electronics",
      "Oscilloscope Characterization"
    ]
  },
  "modulo-cruce-cero-mcu": {
    "title": "Zero-Crossing Detection & Phase Angle Control Prototype for MCUs",
    "categoryLabel": "Power & Discrete Electronics",
    "tag": "AC Mains & MCU Interfacing",
    "shortDesc": "Optically isolated zero-crossing detector and phase-angle firing circuit for safe microcontroller mains AC power control.",
    "whatIs": "Galvanically isolated interface circuit designed to synchronize digital microcontrollers with 120V/220V AC mains waveforms. Enables precision phase-angle triggering for AC loads, heating elements, and industrial dimming while ensuring 100% optical safety isolation between high-voltage mains and low-voltage MCU logic.",
    "whatIDid": "Constructed full-wave bridge rectifier and bidirectional optocoupler (PC817 / 4N25 / H11AA1) zero-crossing detector circuit. Wrote microsecond timer interrupt routines on microcontroller to detect zero crossings and generate precisely timed gate trigger pulses via opto-triacs (MOC3021) into power triacs/thyristors.",
    "highlights": [
      "Complete optical isolation (5000 Vrms) separating 127VAC mains from 3.3V/5V MCU circuitry",
      "Ultra-clean zero-crossing pulse edge triggering hardware input interrupts",
      "Precision microsecond phase-angle delay timer for full 0-100% AC power modulation",
      "Verified oscilloscope waveforms capturing AC sinusoid and synchronized pulse train"
    ],
    "tags": [
      "Zero-Crossing Detector",
      "Galvanic Isolation",
      "MOC3021 / PC817",
      "AC Phase Control",
      "Thyristor / TRIAC",
      "Microcontroller Interfacing"
    ]
  },
  "dimmer-scr-diac-baquelita": {
    "title": "AC Power Controller with SCR & DIAC: Bakelite PCB Board & Enclosure",
    "categoryLabel": "Power & Discrete Electronics",
    "tag": "Power Electronics & PCB Fabrication",
    "shortDesc": "Analog phase-angle AC dimmer built on copper-clad phenolic bakelite board with manual chemical etching, SCR T106, and DIAC trigger.",
    "whatIs": "Robust analog AC phase controller implementing DIAC/SCR triggering on a custom single-sided copper-clad bakelite PCB. Provides smooth continuous power regulation for resistive and inductive AC loads without requiring digital microprocessors.",
    "whatIDid": "Designed single-layer circuit layout with generous trace widths for high current. Hand-transferred artwork, performed chemical etching with ferric chloride, hand-drilled through-holes, populated components (T106 SCR, DB3 DIAC, RC phase-shift network, snubber circuit), and enclosed the system with a heavy-duty potentiometer and safety fuse.",
    "highlights": [
      "Single-sided bakelite PCB handcrafted via chemical toner-transfer etching",
      "Reliable RC-DIAC relaxation trigger network for smooth 180-degree phase conduction",
      "Built-in RC snubber protecting thyristor from inductive voltage spikes (dV/dt)",
      "Tested under continuous AC load with oscilloscope waveform verification"
    ],
    "tags": [
      "SCR T106",
      "DIAC DB3",
      "Bakelite PCB",
      "Chemical Etching",
      "AC Dimmer",
      "Power Electronics",
      "Bench Testing"
    ]
  },
  "fpga-spartan3e-servo": {
    "title": "FPGA PWM Servo Controller & LCD Interface on Xilinx Spartan-3E",
    "categoryLabel": "Digital Systems & FPGAs",
    "tag": "VHDL & Spartan-3E Architecture",
    "shortDesc": "Hardware PWM generator and character LCD controller written in pure VHDL running on Xilinx Spartan-3E FPGA with Futaba servo.",
    "whatIs": "Pure hardware digital controller implemented on a Xilinx Spartan-3E FPGA development board. Features synthesized VHDL clock dividers, a pulse-width modulator (50 Hz frame, 1.0ms - 2.0ms duty cycle) for Futaba servo position control, and a state machine driving an HD44780 16x2 character LCD.",
    "whatIDid": "Wrote modular, synthesizable VHDL architecture. Built synchronous finite state machines (FSM) for 4-bit LCD initialization and command sequencing, designed microsecond-accurate counter-based PWM generators, assigned board pin constraints (UCF file), and demonstrated jitter-free servo motion synchronized with real-time LCD angle feedback.",
    "highlights": [
      "100% hardware-synthesized VHDL architecture with zero software CPU overhead",
      "High-resolution PWM timing generator yielding sub-degree angular positioning",
      "Robust 4-bit mode HD44780 LCD controller state machine with custom text strings",
      "Synthesized and verified on Xilinx ISE Foundation with clean timing reports"
    ],
    "tags": [
      "Xilinx Spartan-3E",
      "VHDL",
      "Hardware PWM",
      "Futaba Servo",
      "HD44780 LCD",
      "Finite State Machine (FSM)",
      "Xilinx ISE"
    ]
  },
  "fpga-spartan6-ultrasonico": {
    "title": "Ultrasonic Telemetry & Digital Processing on Spartan-6 Nexys 3",
    "categoryLabel": "Digital Systems & FPGAs",
    "tag": "Real-Time Telemetry in VHDL",
    "shortDesc": "Real-time time-of-flight acoustic measurement system in VHDL on Xilinx Spartan-6 FPGA with 7-segment display.",
    "whatIs": "High-speed digital distance measurement and obstacle detection system implemented on a Xilinx Spartan-6 (Nexys 3) FPGA board interfacing an HC-SR04 ultrasonic transducer module.",
    "whatIDid": "Implemented 10us trigger pulse generation in VHDL, echo pulse-width measurement using high-speed 50 MHz clock counters, binary-to-BCD conversion algorithms (Double Dabble), and time-multiplexed 7-segment display drivers refreshing without ghosting or latency.",
    "highlights": [
      "Sub-millimeter echo time-of-flight resolution utilizing 50 MHz FPGA system clock",
      "Pipelined Binary-to-BCD (Double Dabble) VHDL implementation for multi-digit display",
      "Flicker-free 4-digit 7-segment multiplexing controller running concurrently in hardware",
      "Instantaneous acoustic distance feedback with LED threshold warning indicators"
    ],
    "tags": [
      "Xilinx Spartan-6",
      "Nexys 3 Board",
      "VHDL",
      "Ultrasonic HC-SR04",
      "7-Segment Display",
      "Double Dabble BCD",
      "Time-of-Flight"
    ]
  },
  "rf-antena-microstrip-espectro": {
    "title": "Design, HFSS Simulation & Fabrication of 2.45 GHz Microstrip Patch Antenna",
    "categoryLabel": "RF & Microwaves",
    "tag": "Electromagnetic Simulation & RF",
    "shortDesc": "Electromagnetic modeling in Ansys HFSS, FR-4 substrate fabrication, and RF spectrum analyzer characterization at 2.45 GHz.",
    "whatIs": "Planar microstrip patch antenna designed for the 2.45 GHz Industrial, Scientific, and Medical (ISM) band (Wi-Fi, Bluetooth). Combines theoretical transmission line equations, 3D electromagnetic finite-element modeling (FEM) in Ansys HFSS, physical prototyping on FR-4 dielectric substrate, and RF bench validation.",
    "whatIDid": "Calculated patch dimensions (width W, length L, inset feed depth) based on FR-4 dielectric constant (eps_r = 4.4) and substrate height (h = 1.6mm). Simulated return loss (S11 parameter), VSWR, radiation pattern, and input impedance in HFSS. Fabricated prototype with SMA edge launcher connector and measured center resonance frequency and bandwidth on an RF spectrum analyzer.",
    "highlights": [
      "Theoretical RF transmission line calculations matched to 50-ohm microstrip feedline",
      "Full-wave 3D electromagnetic FEM simulation in Ansys HFSS optimizing S11 < -15 dB",
      "Accurate physical chemical fabrication on standard double-sided FR-4 PCB",
      "Spectral characterization and resonance frequency verification on bench RF analyzer"
    ],
    "tags": [
      "Ansys HFSS",
      "2.45 GHz ISM Band",
      "Microstrip Patch Antenna",
      "S11 Return Loss",
      "FR-4 Substrate",
      "RF Spectrum Analyzer",
      "Microwaves"
    ]
  },
  "ai-vision-detection": {
    "title": "Computer Vision Pipeline & Multi-Object Neural Detection",
    "categoryLabel": "AI & Computer Vision",
    "tag": "Deep Learning & Image Processing",
    "shortDesc": "Real-time visual inference pipeline with OpenCV and YOLO neural networks for object recognition and tracking.",
    "whatIs": "High-performance computer vision software pipeline integrating OpenCV image filtering, perspective correction, contour analysis, and deep neural network object detection for industrial parts inspection and automated tracking.",
    "whatIDid": "Implemented real-time video capture and frame processing in Python. Configured color-space thresholding (HSV), morphology filters, edge detection (Canny), and integrated pre-trained convolutional neural network (CNN) inference models with bounding-box tracking and confidence metric overlays.",
    "highlights": [
      "Optimized OpenCV frame-by-frame processing pipeline running at high frame rates",
      "Dynamic HSV color segmentation and contour-based centroid tracking",
      "Neural network inference integrating confidence threshold filtering",
      "Modular Python architecture easily bridgeable to embedded vision hardware"
    ],
    "tags": [
      "Python 3",
      "OpenCV",
      "Object Detection",
      "Image Processing",
      "Convolutional Neural Networks",
      "Edge Tracking",
      "Visual Telemetry"
    ]
  },
  "optica-difraccion-laser-grafito": {
    "title": "Laser Beam Diffraction & Dispersion via Graphite Rod (Wave Optics)",
    "categoryLabel": "Optics & Applied Physics",
    "tag": "Experimental Physics & Optics",
    "shortDesc": "Wave optics experiment measuring pencil lead graphite rod diameter through red laser diffraction patterns.",
    "whatIs": "Experimental physical optics setup applying Babinet's principle and Fraunhofer diffraction theory to accurately measure the microscopic diameter of a thin cylindrical obstacle (pencil graphite lead) using a monochromatic laser diode beam.",
    "whatIDid": "Engineered optical bench alignment with red laser source (lambda = 650nm) and graphite cylinder. Projected diffraction minima/maxima onto an observation screen at calibrated distance, measured fringe spacing, computed obstacle diameter using wave optics diffraction equations, and calculated experimental percentage error.",
    "highlights": [
      "Rigorous laboratory wave optics setup validating Babinet's optical principle",
      "Micrometric obstacle diameter calculation via Fraunhofer diffraction mathematics",
      "High precision measurement yielding under 5% experimental deviation",
      "Comprehensive optical log documenting fringe intensity profiles"
    ],
    "tags": [
      "Physical Optics",
      "Fraunhofer Diffraction",
      "Babinet's Principle",
      "650nm Diode Laser",
      "Experimental Physics",
      "Precision Metrology"
    ]
  },
  "iot-esp32-mesh-ap": {
    "title": "Distributed Master-Slave IoT Architecture with ESP32 SoftAP & Web Dashboard",
    "categoryLabel": "Embedded Systems & IoT",
    "tag": "Local IoT Mesh & SoftAP",
    "shortDesc": "Decentralized wireless sensor network: slave nodes stream sensor telemetry to an ESP32 SoftAP master hosting an embedded HTTP web server.",
    "whatIs": "Autonomous distributed IoT sensor network operating independently of existing internet infrastructure. An ESP32 master node generates a secure Wi-Fi SoftAP access point, hosts an embedded asynchronous HTTP web server, and aggregates telemetry sent by slave microcontroller nodes.",
    "whatIDid": "Architected master-slave network protocol. Programmed master node using ESPAsyncWebServer and LittleFS/SPIFFS to serve interactive HTML5/JavaScript dashboard. Engineered slave node telemetry transmitters broadcasting formatted JSON payloads over HTTP POST/UDP, with automatic reconnection and packet error checking.",
    "highlights": [
      "Autonomous off-grid Wi-Fi SoftAP network requiring no external routers or cloud",
      "Embedded asynchronous web server rendering responsive live sensor gauges",
      "Robust multi-node protocol with automatic reconnect and packet recovery",
      "Complete firmware packages for both master aggregator and remote slave nodes"
    ],
    "tags": [
      "ESP32",
      "SoftAP Mode",
      "ESPAsyncWebServer",
      "IoT Master-Slave",
      "Distributed Telemetry",
      "JSON over HTTP",
      "LittleFS"
    ]
  },
  "incubadora-biogas-termica": {
    "title": "Biogas Production Incubator with Closed-Loop Thermal Control",
    "categoryLabel": "Embedded Systems & IoT",
    "tag": "Closed-Loop Thermal Control",
    "shortDesc": "Closed-loop temperature regulation system for anaerobic biogas digestion using waterproof DS18B20 sensor and solid-state relay.",
    "whatIs": "Automated anaerobic digestion incubator designed to maintain optimal mesophilic temperature ranges (35°C - 38°C) for microbial biogas generation. Integrates precision digital temperature sensing, microcontroller control logic with hysteresis, and power heating elements.",
    "whatIDid": "Built insulated chamber enclosure. Integrated waterproof 1-Wire DS18B20 digital temperature probe, programmed microcontroller control firmware with anti-chattering hysteresis band, drove high-current AC heating blankets via solid-state relays (SSR), and logged continuous temperature curves.",
    "highlights": [
      "Tight temperature regulation within +/- 0.5°C optimal mesophilic range",
      "Galvanically isolated solid-state relay (SSR) AC heating driver",
      "Digital 1-Wire sensor interface with CRC checksum verification",
      "Field-tested under continuous multi-day biological digestion cycles"
    ],
    "tags": [
      "DS18B20 1-Wire",
      "Solid State Relay (SSR)",
      "Closed-Loop Control",
      "Hysteresis Algorithm",
      "Biogas Incubator",
      "Thermal Instrumentation"
    ]
  },
  "parrilla-electrica-thermal-blueprint": {
    "title": "Resistive Electric Cooktop & 'Thermal Blueprint' Technical Manual",
    "categoryLabel": "Power & Discrete Electronics",
    "tag": "Thermal Engineering & Blueprint",
    "shortDesc": "Electrical redesign and thermal characterization of a resistive cooktop, documented in the 52-page 'Thermal Blueprint' manual.",
    "whatIs": "Comprehensive electrothermal analysis, rewiring, and safety redesign of a high-power nichrome coil resistive cooking appliance, culminating in a detailed 52-page engineering publication titled 'Thermal Blueprint'.",
    "whatIDid": "Analyzed heat dissipation, electrical resistance, and Joule heating thermodynamics. Redesigned internal wiring with fiberglass high-temperature insulation, replaced bimetallic thermostats with reliable mechanical switches, created full CAD schematics, and authored the 52-page illustrated technical manual covering assembly, physics formulas, and troubleshooting.",
    "highlights": [
      "High-temperature electrical redesign utilizing rated fiberglass cabling and ceramic wire nuts",
      "Comprehensive electrothermal calculations modeling Joule heating efficiency",
      "52-page illustrated 'Thermal Blueprint' engineering manual included as interactive PDF",
      "Dual-pane modal viewer integrating high-res hardware photos and full PDF documentation"
    ],
    "tags": [
      "Thermal Engineering",
      "Joule Heating",
      "Electrical Safety",
      "High-Temperature Wiring",
      "52-page Technical Manual",
      "PDF Documentation"
    ]
  },
  "trng-generador-ruido-rosa": {
    "title": "True Random Number Generator (TRNG) via Avalanche Diode Noise",
    "categoryLabel": "Power & Discrete Electronics",
    "tag": "Physical Entropy & Cryptography",
    "shortDesc": "Hardware TRNG harvesting non-deterministic quantum avalanche noise from reverse-biased PN junction with multi-stage amplification.",
    "whatIs": "True Random Number Generator (TRNG) that harvests genuinely non-deterministic physical entropy from the quantum avalanche breakdown of a reverse-biased BJT emitter-base junction. Amplifies microscopic thermal/pink noise into digital voltage swings for cryptographic seed generation.",
    "whatIDid": "Designed high-gain AC-coupled analog preamplifier using discrete bipolar transistors and low-noise op-amps to boost microvolt avalanche noise to TTL levels. Implemented Schmitt trigger comparator stage for clean digital transitions, sampled output via microcontroller ADC/GPIO, and evaluated bitstream randomness.",
    "highlights": [
      "Pure physical quantum entropy source independent of pseudo-random PRNG math",
      "Multi-stage high-gain, low-noise analog amplifier with DC blocking capacitors",
      "High-speed comparator generating uniform digital square-wave pulse trains",
      "Validated noise spectrum and entropy distribution suitable for cryptographic keys"
    ],
    "tags": [
      "Hardware TRNG",
      "Avalanche Breakdown Noise",
      "Quantum Entropy",
      "Discrete Preamplifier",
      "Cryptography",
      "Analog Conditioning"
    ]
  },
  "plc-automatizacion-industrial": {
    "title": "Industrial Automation Testbed with Delta DVP PLC & 3-Phase Motors",
    "categoryLabel": "Industrial Automation & Power",
    "tag": "PLC & Industrial Automation",
    "shortDesc": "Industrial automation panel: Delta PLC programming in Ladder logic, relay logic, safety interlocks, and 3-phase motor starters.",
    "whatIs": "Industrial automation training bench integrating a programmable logic controller (Delta DVP Series PLC), 24VDC control relays, industrial pushbuttons/pilot lamps, magnetic contactors, thermal overload relays, and a three-phase induction motor.",
    "whatIDid": "Wrote Ladder Diagram (LD) routines in WPLSoft implementing start/stop motor sequencing, reversing contactor interlocks, fault detection routines, and emergency stop latching. Wired industrial control panel respecting safety standards, wire ferrules, and DIN rail mounting.",
    "highlights": [
      "Industrial Ladder logic programming with software and hardware interlocking",
      "Three-phase induction motor forward/reverse starter with thermal overload relay",
      "Standardized 24VDC industrial control wiring with wire ferrule terminations",
      "Rigorous safety circuits implementing emergency stop latching and indicator lights"
    ],
    "tags": [
      "Delta DVP PLC",
      "Ladder Diagram (LD)",
      "3-Phase Induction Motor",
      "Magnetic Contactors",
      "Industrial Safety",
      "Relay Control"
    ]
  },
  "robotica-3d-cad": {
    "title": "3D CAD Modeling of 3-DOF Robotic Arm & Cartesian Actuators",
    "categoryLabel": "Robotics & 3D CAD",
    "tag": "CAD Modeling & Kinematics",
    "shortDesc": "Parametric 3D CAD design of a 3-degree-of-freedom articulated robotic arm, mechanical joints, servo mounts, and end-effector.",
    "whatIs": "Parametric 3D CAD engineering project encompassing the structural modeling, joint kinematics, servo motor mount design, and end-effector gripper mechanics for a 3-DOF articulated robotic arm and a multi-axis Cartesian gantry.",
    "whatIDid": "Modeled all structural components, link lengths, bearing housings, and servo horns in 3D CAD software (AutoCAD / Fusion / SolidWorks). Evaluated mass distribution, center of gravity, actuator torque requirements, and exported slice-ready STL files with engineered tolerances for additive manufacturing.",
    "highlights": [
      "Parametric 3D assembly modeling with precise interference and collision checking",
      "Optimized joint geometry accommodating standard micro-servos and bearing races",
      "Kinematic reach simulation and structural strength ribbing for 3D printing",
      "Complete exploded views and mechanical manufacturing drawings"
    ],
    "tags": [
      "Parametric 3D CAD",
      "3-DOF Robotic Arm",
      "Kinematic Analysis",
      "Mechanical Modeling",
      "Additive Manufacturing Design",
      "AutoCAD"
    ]
  },
  "impresion-3d-ender5-plus": {
    "title": "Dimensional Calibration, Bed Leveling & 3D Manufacturing on Ender-5 Plus",
    "categoryLabel": "Robotics & 3D CAD",
    "tag": "Additive Manufacturing & Calibration",
    "shortDesc": "Mechanical calibration, BLTouch bed mesh leveling, extrusion multiplier tuning, and custom enclosure printing on Creality Ender-5 Plus.",
    "whatIs": "Comprehensive mechanical commissioning, calibration, and additive manufacturing optimization on a large-format Creality Ender-5 Plus 3D printer (350x350x400mm build volume) for fabricating precision electronics enclosures and mechanical linkages.",
    "whatIDid": "Calibrated axis stepper motor steps-per-mm, tuned hotend and heated bed PID temperature loops, performed manual 16-point bed leveling and BLTouch auto-bed-leveling Z-offset tuning, calibrated filament extrusion multipliers and linear advance, and printed custom PLA/PETG functional electronics enclosures.",
    "highlights": [
      "High precision dimensional calibration achieving +/- 0.1mm mechanical tolerance",
      "Optimized slicing profiles in Ultimaker Cura for rigid functional structural parts",
      "Fine-tuned PID temperature loops preventing warping and layer adhesion defects",
      "Fabrication of custom enclosures and chassis for portfolio electronics projects"
    ],
    "tags": [
      "Creality Ender-5 Plus",
      "3D Printing & Slicing",
      "BLTouch Mesh Leveling",
      "PID Thermal Tuning",
      "Enclosure Prototyping",
      "Additive Manufacturing"
    ]
  },
  "domotica-pir-sensor": {
    "title": "Residential Automation via PIR Motion Detection & Timed Lighting Relay",
    "categoryLabel": "Embedded Systems & IoT",
    "tag": "Home Automation & Sensors",
    "shortDesc": "Automated residential occupancy detection system with HC-SR501 PIR sensor, ambient light LDR threshold, and optoisolated relay.",
    "whatIs": "Energy-saving home automation circuit that senses human presence using a passive infrared (PIR) motion sensor, evaluates ambient daylight via a photoresistor (LDR), and activates a high-power AC lighting relay for an adjustable timer duration.",
    "whatIDid": "Interfaced HC-SR501 PIR pyroelectric sensor module with microcontroller and discrete comparator logic. Designed dual-condition trigger (motion detected AND dark environment), added RC timing filter to prevent rapid cycling, and integrated optocoupled 10A relay driver with back-EMF flyback protection.",
    "highlights": [
      "Dual-sensing intelligent trigger combining PIR thermal motion and LDR ambient light",
      "Optically isolated relay stage switching 120VAC incandescent/LED lighting loads",
      "Configurable retriggering mode and adjustable on-delay dwell time",
      "Low standby power consumption ideal for commercial and residential automation"
    ],
    "tags": [
      "HC-SR501 PIR",
      "Home Automation",
      "Optoisolated Relay",
      "Light Sensor (LDR)",
      "Presence Detection",
      "Energy Efficiency"
    ]
  }
};
  const CERTS_ES = {
  "cert-cadence-virtuoso": {
    "title": "Virtuoso Schematic Editor S1: Creating Design Schematics vIC25.1",
    "issuer": "Cadence Design Systems",
    "issuerBadge": "Cadence",
    "categoryLabel": "Semiconductores & EDA",
    "date": "23 de Junio de 2026",
    "hours": "Certificación Oficial",
    "description": "Certificación oficial internacional otorgada por Cadence Training Services en el entorno de diseño Virtuoso Schematic Editor para la creación y verificación de esquemáticos integrados en flujos EDA avanzados.",
    "signatories": "Cadence Training Services (Online)",
    "tags": [
      "Cadence Virtuoso",
      "Schematic Editor",
      "IC Design",
      "EDA",
      "VLSI"
    ]
  },
  "cert-bootcamp-eda-buap": {
    "title": "Bootcamp EDA, call from industry: Reclutamiento y entrenamiento hacia la industria del diseño electrónico",
    "issuer": "BUAP • Facultad de Ciencias de la Electrónica",
    "issuerBadge": "BUAP FCE",
    "categoryLabel": "Semiconductores & EDA",
    "date": "15 de Junio al 17 de Julio de 2026",
    "hours": "100 Horas Curriculares",
    "description": "Formación profesional intensiva de 100 horas acreditada ante la FCE-BUAP, enfocada en la formación de talento técnico para la industria de semiconductores, herramientas EDA y diseño de circuitos integrados.",
    "signatories": "Dr. Víctor Rodolfo González Díaz (Lab. de Diseño y Caracterización FCE-BUAP) & M.C. José Francisco Portillo Robledo (Director FCE-BUAP)",
    "tags": [
      "Bootcamp EDA",
      "Industria Semiconductores",
      "100 Horas",
      "FCE-BUAP",
      "Diseño Electrónico"
    ]
  },
  "cert-inaoe-semiconductores": {
    "title": "2ª Semana de Semiconductores en INAOE",
    "issuer": "Instituto Nacional de Astrofísica, Óptica y Electrónica (INAOE)",
    "issuerBadge": "INAOE",
    "categoryLabel": "Semiconductores & EDA",
    "date": "6 al 10 de Abril de 2026",
    "hours": "Semana Académica Especializada",
    "description": "Reconocimiento otorgado por el INAOE por la participación activa en conferencias, talleres y sesiones técnicas sobre fabricación, tecnologías de sala limpia y tendencias en microelectrónica de semiconductores.",
    "signatories": "Dr. Luis Hernández Martínez (Coordinador de Electrónica) & Dr. Alfredo Morales Sánchez (Comité Organizador)",
    "tags": [
      "INAOE",
      "Semiconductores",
      "Microelectrónica",
      "Sala Limpia",
      "Investigación"
    ]
  },
  "cert-electrohack-electromovilidad": {
    "title": "Segunda Edición Electrohack: Categoría Electromovilidad",
    "issuer": "Secretaría de Economía & Agencia de Energía del Estado de Puebla",
    "issuerBadge": "Electrohack",
    "categoryLabel": "Innovación & Hackathones",
    "date": "25 y 26 de Octubre de 2023",
    "hours": "Concurso de Innovación Tecnológica",
    "description": "Diploma por destacada participación como integrante de equipo en el hackathon estatal de innovación tecnológica y electromovilidad, desarrollando soluciones aplicadas a movilidad sostenible.",
    "signatories": "Jorge Ermilo Barrera Novelo (Secretario de Economía) & Gabriela Carvajal Rubilar (Encargada de Despacho Agencia de Energía)",
    "tags": [
      "Electrohack",
      "Electromovilidad",
      "Innovación",
      "Trabajo en Equipo",
      "Gobierno de Puebla"
    ]
  },
  "cert-electrohack-energia": {
    "title": "Tercera Edición Electrohack: Categoría Energía",
    "issuer": "Secretaría de Economía & Agencia de Energía del Estado de Puebla",
    "issuerBadge": "Electrohack",
    "categoryLabel": "Innovación & Hackathones",
    "date": "24 de Octubre de 2024",
    "hours": "Concurso Universitario de Innovación",
    "description": "Reconocimiento por participación en el Concurso Universitario de Innovación Electrohack 2024, enfocado en el desarrollo de prototipos y tecnologías de eficiencia energética y transición renovable.",
    "signatories": "C. Gabriela Carvajal Rubilar (Dirección General Agencia de Energía) & C. Iván de la Fuente Amador (Director de Vinculación Institucional)",
    "tags": [
      "Electrohack 2024",
      "Energía",
      "Prototipado",
      "Transición Energética",
      "Innovación Universitaria"
    ]
  },
  "cert-intel-embedded": {
    "title": "Sistemas Embebidos y su uso en plataformas de validación",
    "issuer": "Intel México",
    "issuerBadge": "Intel",
    "categoryLabel": "Industria & Sistemas Embebidos",
    "date": "21 de Octubre de 2021",
    "hours": "Capacitación Técnica Especializada",
    "description": "Reconocimiento otorgado por Intel México por asistencia y participación en la sesión técnica sobre arquitecturas de sistemas embebidos aplicados al testing y validación de hardware industrial.",
    "signatories": "Intel México",
    "tags": [
      "Intel México",
      "Sistemas Embebidos",
      "Validación de Hardware",
      "Arquitectura",
      "Testing"
    ]
  },
  "cert-intel-iot": {
    "title": "Intel en el mundo del IoT, Cloud Computing y Big Data",
    "issuer": "Intel México",
    "issuerBadge": "Intel",
    "categoryLabel": "Industria & Sistemas Embebidos",
    "date": "19 de Agosto de 2021",
    "hours": "Capacitación Técnica Especializada",
    "description": "Reconocimiento otorgado por Intel México por asistencia técnica especializada sobre ecosistemas de Internet de las Cosas (IoT), procesamiento en la nube y manejo de flujos de datos.",
    "signatories": "Intel México",
    "tags": [
      "Intel México",
      "IoT",
      "Cloud Computing",
      "Big Data",
      "Conectividad"
    ]
  },
  "cert-buap-noche-estrellas": {
    "title": "Tallerista en Noche de las Estrellas BUAP 2024",
    "issuer": "BUAP • Comité Noche de las Estrellas",
    "issuerBadge": "Divulgación BUAP",
    "categoryLabel": "Divulgación & Comunidad",
    "date": "9 de Noviembre de 2024",
    "hours": "Divulgación Científica y Tecnológica",
    "description": "Reconocimiento otorgado por la sede Puebla BUAP por participación como instructor tallerista, acercando conceptos científicos y tecnológicos de manera didáctica al público general.",
    "signatories": "Dr. Gabriel Kantún Montiel (Director FCFM BUAP), Dr. José Eduardo Espinosa Rosales & Comité Organizador",
    "tags": [
      "Noche de las Estrellas",
      "Tallerista",
      "FCFM BUAP",
      "Divulgación Científica",
      "Comunidad"
    ]
  },
  "cert-buap-accion-ambiental": {
    "title": "Acción Ambiental Universitaria",
    "issuer": "BUAP • Coordinación General de Desarrollo Sustentable",
    "issuerBadge": "BUAP Sustentable",
    "categoryLabel": "Divulgación & Comunidad",
    "date": "30 de Junio de 2023",
    "hours": "4 Horas Acreditadas",
    "description": "Constancia de acreditación en gestión y buenas prácticas de sustentabilidad y responsabilidad ambiental universitaria.",
    "signatories": "Dr. Manuel Sandoval Delgado & Mtro. Diego Ariel Riva",
    "tags": [
      "BUAP",
      "Desarrollo Sustentable",
      "Responsabilidad Universitaria"
    ]
  }
};
  const CERTS_EN = {
  "cert-cadence-virtuoso": {
    "title": "Virtuoso Schematic Editor S1: Creating Design Schematics vIC25.1",
    "issuer": "Cadence Design Systems",
    "issuerBadge": "Cadence",
    "categoryLabel": "Semiconductors & EDA",
    "date": "June 23, 2026",
    "hours": "Official Certification",
    "description": "Official international credential awarded by Cadence Training Services in the Virtuoso Schematic Editor design environment for creating and verifying integrated schematics within advanced EDA flows.",
    "signatories": "Cadence Training Services (Online)",
    "tags": [
      "Cadence Virtuoso",
      "Schematic Editor",
      "IC Design",
      "EDA",
      "VLSI"
    ]
  },
  "cert-bootcamp-eda-buap": {
    "title": "EDA Bootcamp, Call from Industry: Recruitment & Training for the Electronic Design Industry",
    "issuer": "BUAP • Faculty of Electronics Sciences",
    "issuerBadge": "BUAP FCE",
    "categoryLabel": "Semiconductors & EDA",
    "date": "June 15 to July 17, 2026",
    "hours": "100 Curricular Hours",
    "description": "Intensive 100-hour professional training accredited by FCE-BUAP, focused on preparing specialized engineering talent for the semiconductor industry, EDA workflows, and IC design.",
    "signatories": "Dr. Víctor Rodolfo González Díaz (Lab. of Design & Characterization FCE-BUAP) & M.C. José Francisco Portillo Robledo (Dean FCE-BUAP)",
    "tags": [
      "EDA Bootcamp",
      "Semiconductor Industry",
      "100 Hours",
      "FCE-BUAP",
      "Electronic Design"
    ]
  },
  "cert-inaoe-semiconductores": {
    "title": "2nd Semiconductor Week at INAOE",
    "issuer": "National Institute of Astrophysics, Optics and Electronics (INAOE)",
    "issuerBadge": "INAOE",
    "categoryLabel": "Semiconductors & EDA",
    "date": "April 6 to 10, 2026",
    "hours": "Specialized Academic Week",
    "description": "Awarded by INAOE for active participation in technical lectures, cleanroom fabrication workshops, and symposiums on microelectronics and semiconductor manufacturing trends.",
    "signatories": "Dr. Luis Hernández Martínez (Electronics Department Head) & Dr. Alfredo Morales Sánchez (Organizing Committee)",
    "tags": [
      "INAOE",
      "Semiconductors",
      "Microelectronics",
      "Cleanroom",
      "Research"
    ]
  },
  "cert-electrohack-electromovilidad": {
    "title": "Electrohack 2nd Edition: Electromobility Category",
    "issuer": "Ministry of Economy & Puebla State Energy Agency",
    "issuerBadge": "Electrohack",
    "categoryLabel": "Innovation & Hackathons",
    "date": "October 25 & 26, 2023",
    "hours": "Technological Innovation Contest",
    "description": "Diploma for outstanding team participation in the state technological innovation and electromobility hackathon, developing engineering solutions for sustainable mobility.",
    "signatories": "Jorge Ermilo Barrera Novelo (Minister of Economy) & Gabriela Carvajal Rubilar (Acting Director Energy Agency)",
    "tags": [
      "Electrohack",
      "Electromobility",
      "Innovation",
      "Teamwork",
      "Puebla Government"
    ]
  },
  "cert-electrohack-energia": {
    "title": "Electrohack 3rd Edition: Energy Category",
    "issuer": "Ministry of Economy & Puebla State Energy Agency",
    "issuerBadge": "Electrohack",
    "categoryLabel": "Innovation & Hackathons",
    "date": "October 24, 2024",
    "hours": "University Innovation Contest",
    "description": "Certificate of participation in the Electrohack 2024 University Innovation Contest, focused on developing prototypes and technologies for energy efficiency and renewable transition.",
    "signatories": "C. Gabriela Carvajal Rubilar (General Director Energy Agency) & C. Iván de la Fuente Amador (Director of Institutional Engagement)",
    "tags": [
      "Electrohack 2024",
      "Energy",
      "Prototyping",
      "Energy Transition",
      "University Innovation"
    ]
  },
  "cert-intel-embedded": {
    "title": "Embedded Systems and their use in Validation Platforms",
    "issuer": "Intel Mexico",
    "issuerBadge": "Intel",
    "categoryLabel": "Industry & Embedded Systems",
    "date": "October 21, 2021",
    "hours": "Specialized Technical Training",
    "description": "Credential awarded by Intel Mexico for technical training on embedded system architectures applied to industrial hardware testing and validation.",
    "signatories": "Intel Mexico",
    "tags": [
      "Intel Mexico",
      "Embedded Systems",
      "Hardware Validation",
      "Architecture",
      "Testing"
    ]
  },
  "cert-intel-iot": {
    "title": "Intel in the World of IoT, Cloud Computing and Big Data",
    "issuer": "Intel Mexico",
    "issuerBadge": "Intel",
    "categoryLabel": "Industry & Embedded Systems",
    "date": "August 19, 2021",
    "hours": "Specialized Technical Training",
    "description": "Credential awarded by Intel Mexico for technical training on Internet of Things (IoT) ecosystems, cloud processing, and data flow architectures.",
    "signatories": "Intel Mexico",
    "tags": [
      "Intel Mexico",
      "IoT",
      "Cloud Computing",
      "Big Data",
      "Connectivity"
    ]
  },
  "cert-buap-noche-estrellas": {
    "title": "Science Workshop Instructor at BUAP Night of the Stars 2024",
    "issuer": "BUAP • Night of the Stars Committee",
    "issuerBadge": "BUAP Outreach",
    "categoryLabel": "Community & Outreach",
    "date": "November 9, 2024",
    "hours": "Scientific & Technological Outreach",
    "description": "Awarded by BUAP Puebla for serving as a hands-on workshop instructor, bringing scientific and electronic engineering concepts directly to the public.",
    "signatories": "Dr. Gabriel Kantún Montiel (Dean FCFM BUAP), Dr. José Eduardo Espinosa Rosales & Organizing Committee",
    "tags": [
      "Night of the Stars",
      "Workshop Instructor",
      "FCFM BUAP",
      "Science Outreach",
      "Community"
    ]
  },
  "cert-buap-accion-ambiental": {
    "title": "University Environmental Action Accreditation",
    "issuer": "BUAP • General Coordination of Sustainable Development",
    "issuerBadge": "Sustainable BUAP",
    "categoryLabel": "Community & Outreach",
    "date": "June 30, 2023",
    "hours": "4 Accredited Hours",
    "description": "Certificate of accreditation in university environmental sustainability and responsible resource management practices.",
    "signatories": "Dr. Manuel Sandoval Delgado & Mtro. Diego Ariel Riva",
    "tags": [
      "BUAP",
      "Sustainable Development",
      "University Responsibility"
    ]
  }
};

  class I18nManager {
    constructor() {
      this.currentLang = this.detectInitialLanguage();
    }

    /**
     * Regional Language Auto-Detection:
     * 1. Checks user preference previously saved in localStorage
     * 2. Checks browser's navigator.languages / navigator.language
     * 3. Defaults to 'es' if language starts with 'es', otherwise 'en'
     */
    detectInitialLanguage() {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === "es" || stored === "en") {
          return stored;
        }
      } catch (e) {
        console.warn("i18n: localStorage not accessible", e);
      }

      const browserLangs = navigator.languages || [navigator.language || navigator.userLanguage || "es"];
      for (const lang of browserLangs) {
        if (!lang) continue;
        const normalized = lang.toLowerCase();
        if (normalized.startsWith("es")) return "es";
        if (normalized.startsWith("en")) return "en";
      }

      // Default fallback
      return "es";
    }

    init() {
      this.setLanguage(this.currentLang, false);
      this.bindToggleEvents();
    }

    setLanguage(lang, persist = true) {
      if (lang !== "es" && lang !== "en") {
        lang = "es";
      }

      this.currentLang = lang;
      document.documentElement.lang = lang;

      if (persist) {
        try {
          localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) {
          console.warn("i18n: Could not save language preference", e);
        }
      }

      this.updateToggleUI();
      this.applyStaticTranslations();

      // Dispatch event so PortfolioController can re-render dynamic elements
      document.dispatchEvent(new CustomEvent("i18n:languageChange", {
        detail: { language: this.currentLang }
      }));
    }

    getLanguage() {
      return this.currentLang;
    }

    t(key, ...args) {
      const dict = UI_STRINGS[this.currentLang] || UI_STRINGS["es"];
      let text = dict[key] || UI_STRINGS["es"][key] || key;
      if (args && args.length > 0) {
        args.forEach((val, idx) => {
          text = text.replace(new RegExp(`\\{${idx}\\}`, "g"), val);
        });
      }
      return text;
    }

    getProject(id) {
      const dict = this.currentLang === "en" ? PROJECTS_EN : PROJECTS_ES;
      return dict[id] || PROJECTS_ES[id] || null;
    }

    getCert(id) {
      const dict = this.currentLang === "en" ? CERTS_EN : CERTS_ES;
      return dict[id] || CERTS_ES[id] || null;
    }

    updateToggleUI() {
      const toggleBtn = document.getElementById("langToggleBtn");
      if (!toggleBtn) return;

      const esSpan = toggleBtn.querySelector(".lang-es");
      const enSpan = toggleBtn.querySelector(".lang-en");

      if (esSpan && enSpan) {
        if (this.currentLang === "es") {
          esSpan.classList.add("active");
          enSpan.classList.remove("active");
          toggleBtn.setAttribute("title", "Idioma: Español (clic para cambiar a Inglés / Switch to English)");
          toggleBtn.setAttribute("aria-label", "Idioma actual: Español. Clic para cambiar a Inglés.");
        } else {
          enSpan.classList.add("active");
          esSpan.classList.remove("active");
          toggleBtn.setAttribute("title", "Language: English (click to switch to Spanish / Cambiar a Español)");
          toggleBtn.setAttribute("aria-label", "Current language: English. Click to switch to Spanish.");
        }
      }
    }

    applyStaticTranslations() {
      // Elements with data-i18n attribute
      const elements = document.querySelectorAll("[data-i18n]");
      elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        const translation = this.t(key);
        if (translation) {
          // If translation contains HTML tags (e.g. <strong>, <span class="...">)
          if (translation.includes("<") && translation.includes(">")) {
            el.innerHTML = translation;
          } else {
            el.textContent = translation;
          }
        }
      });

      // Special handling for search input placeholder
      const searchInput = document.getElementById("searchInput");
      if (searchInput) {
        searchInput.placeholder = this.t("search_placeholder");
      }

      // Title tag update
      if (this.currentLang === "en") {
        document.title = "Josué Farfán González | Electronics & Embedded Systems Hardware Portfolio";
      } else {
        document.title = "Josué Farfán González | Portafolio de Proyectos en Electrónica & Sistemas Embebidos";
      }
    }

    bindToggleEvents() {
      const toggleBtn = document.getElementById("langToggleBtn");
      if (!toggleBtn) return;

      toggleBtn.addEventListener("click", () => {
        const nextLang = this.currentLang === "es" ? "en" : "es";
        this.setLanguage(nextLang, true);
      });
    }
  }

  // Expose globally
  window.i18n = new I18nManager();

  // Run automatically when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => window.i18n.init());
  } else {
    window.i18n.init();
  }
})();
