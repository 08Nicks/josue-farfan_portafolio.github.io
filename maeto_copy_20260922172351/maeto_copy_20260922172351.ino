#include "WiFi.h"
#include "ESPAsyncWebServer.h"

// Configuración de la red WiFi
const char* ssid = "ESP32-Access-Point";
const char* password = "123456789";

// Pin del botón
const int buttonPin = 4;

// Crear objeto del servidor web en el puerto 80
AsyncWebServer server(80);

// Variable para almacenar el estado previo del botón
String lastState = "";

// Función para leer el estado del botón
String readButtonState() {
  int buttonState = digitalRead(buttonPin);
  // Retornar "PRESIONADO" solo si se detecta HIGH (3.3 V)
  if (buttonState == HIGH) {
    return "PRESIONADO";
  } else {
    return "NO PRESIONADO";
  }
}

void setup() {
  // Inicialización del puerto serial para depuración
  Serial.begin(115200);
  Serial.println();

  // Configurar el pin del botón como entrada
  pinMode(buttonPin, INPUT);

  // Configurar el ESP como punto de acceso
  Serial.print("Setting AP (Access Point)…");
  WiFi.softAP(ssid, password);

  IPAddress IP = WiFi.softAPIP();
  Serial.print("AP IP address: ");
  Serial.println(IP);

  // Definir la ruta del endpoint para obtener el estado del botón
  server.on("/button", HTTP_GET, [](AsyncWebServerRequest *request) {
    String message = readButtonState();
    request->send(200, "text/plain", message);
  });

  // Iniciar el servidor
  server.begin();
}

void loop() {
  
}
