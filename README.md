# Portafolio Web - Josué Farfán González

Sitio web estático y portafolio de proyectos de hardware, microelectrónica (TSMC 28nm, Cleanroom), FPGAs Spartan, sistemas embebidos IoT (ESP32), electrónica de potencia, radiofrecuencia (2.45 GHz) y visión artificial.

Diseñado con **HTML5 semántico, CSS3 moderno (Dark Theme Cyber-Engineering con Glassmorphism) y JavaScript reactivo**, optimizado para ejecutarse directamente en **GitHub Pages** sin necesidad de Node.js ni compilación previa.

---

## 🚀 Cómo publicar en GitHub Pages (Guía Rápida)

Sigue estos sencillos pasos en tu terminal (PowerShell o CMD) dentro de esta carpeta para subir tu portafolio y activarlo en tu repositorio de GitHub:

### 1. Inicializar Git y vincular tu repositorio remoto

Abre la terminal en la carpeta `Portafolio` y ejecuta:

```bash
git init
git add .
git commit -m "feat: Lanzamiento de portafolio web con catálogo completo de proyectos"
git branch -M main
git remote add origin https://github.com/08Nicks/josue-farfan_portafolio.github.io.git
git push -u origin main
```

*(Si ya tenías el repositorio creado con un archivo README o licencia en GitHub y te da error al hacer push, puedes ejecutar `git push -u origin main --force`)*.

---

### 2. Activar GitHub Pages en tu cuenta

1. Ve a tu repositorio en GitHub: [https://github.com/08Nicks/josue-farfan_portafolio.github.io](https://github.com/08Nicks/josue-farfan_portafolio.github.io)
2. Haz clic en la pestaña **Settings** (Configuración) en la parte superior.
3. En el menú lateral izquierdo, haz clic en **Pages**.
4. En la sección **Build and deployment**:
   - **Source**: Selecciona `Deploy from a branch`.
   - **Branch**: Selecciona `main` y la carpeta `/ (root)`.
   - Haz clic en **Save** (Guardar).
5. Espera de 1 a 2 minutos. En la parte superior de esa misma pantalla aparecerá el link verde:
   👉 **`https://08nicks.github.io/josue-farfan_portafolio.github.io/`**

¡Listo! Con esa liga cualquier persona, reclutador o colega podrá ver todo tu portafolio en vivo desde cualquier celular o computadora.

---

## 📂 Estructura del Proyecto

```text
Portafolio/
├── index.html                 # Página principal semántica y responsiva
├── styles.css                 # Sistema de diseño, tema oscuro, animaciones y glassmorphism
├── script.js                  # Base de datos de proyectos, filtros, búsqueda en vivo y visor modal
├── README.md                  # Documentación y guía de despliegue
├── video_thumbs/              # Miniaturas optimizadas para los videos del portafolio
│   ├── VID-20241128-WA0026.jpg
│   ├── Video de WhatsApp 2025-04.jpg
│   ├── Video de WhatsApp 2025-10.jpg
│   ├── WhatsApp Video 2024-10-09.jpg
│   └── New Blank Diagram Project.jpg
├── [Fotos y videos originales] # Evidencia gráfica y multimedia de los proyectos
└── [Carpetas de firmware]     # Códigos fuente (pizarra_esp32_touch_fix, maeto, estlavo)
```

---

## 🛠️ Personalización de Contacto

Para cambiar tu correo o número de WhatsApp, abre `index.html` y modifica la sección `<section id="contacto">`:

- **WhatsApp:** Reemplaza `https://wa.me/5212220000000` con tu número de teléfono (con código de país `52` para México).
- **Correo Electrónico:** Reemplaza `mailto:josue.farfan@example.com` con tu correo real.
