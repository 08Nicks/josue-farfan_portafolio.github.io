#include <WiFi.h>
#include <HTTPClient.h>

// Configuración de la red WiFi
const char* ssid = "ESP32-Access-Point";
const char* password = "123456789";

// Dirección del servidor para consultar el estado del botón
const char* serverNameButton = "http://192.168.4.1/button";

// Pin del LED
const int ledPin = 21;

// Variables para intervalos
unsigned long previousMillis = 0;
const long interval = 500;

void setup() {
  Serial.begin(115200);

  // Configurar el pin del LED como salida
  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, LOW);

  // Conexión a la red WiFi
  WiFi.begin(ssid, password);
  Serial.println("Conectando a WiFi...");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.print("Conectado a WiFi con IP: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  unsigned long currentMillis = millis();

  if (currentMillis - previousMillis >= interval) {
    // Verificar conexión WiFi
    if (WiFi.status() == WL_CONNECTED) {
      String buttonState = httpGETRequest(serverNameButton);
      Serial.println("Estado del botón: " + buttonState);

      // Actualizar el estado del LED
      if (buttonState == "PRESIONADO") {
        digitalWrite(ledPin, HIGH); // Encender LED
      } else {
        digitalWrite(ledPin, LOW); // Apagar LED
      }

      previousMillis = currentMillis; // Actualizar tiempo
    } else {
      Serial.println("WiFi desconectado.");
    }
  }
}

// Función para realizar la solicitud HTTP GET
String httpGETRequest(const char* serverName) {
  WiFiClient client;
  HTTPClient http;

  http.begin(client, serverName);

  int httpResponseCode = http.GET();
  String payload = "--";

  if (httpResponseCode > 0) {
    payload = http.getString();
  } else {
    Serial.print("Error en la solicitud HTTP: ");
    Serial.println(httpResponseCode);
  }

  http.end();
  return payload;
}
