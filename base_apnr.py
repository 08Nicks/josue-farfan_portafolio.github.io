import cv2
from fast_alpr import ALPR

# ============================================================
# CONFIGURACION
# ============================================================
CAMARA_INDEX = 0  # prueba 1 si no detecta tu camara
# ============================================================

print("Cargando modelos (la primera vez puede tardar un poco)...", flush=True)
alpr = ALPR(
    detector_model="yolo-v9-t-384-license-plate-end2end",
    ocr_model="cct-xs-v2-global-model",
)

cap = None
for idx in [0, 1, 2]:
    print(f"Intentando abrir cámara con índice {idx}...", flush=True)
    cap_test = cv2.VideoCapture(idx, cv2.CAP_DSHOW)
    if cap_test.isOpened():
        cap = cap_test
        print(f"¡Cámara {idx} abierta exitosamente!", flush=True)
        break
    cap_test.release()

if cap is None or not cap.isOpened():
    print("Error: No se pudo abrir ninguna cámara (probados índices 0, 1, 2). Revisa las conexiones.", flush=True)
    raise SystemExit

cap.set(cv2.CAP_PROP_BUFFERSIZE, 1)

print("Listo. Presiona 'q' para salir.", flush=True)

import traceback

try:
    while True:
        ok, frame = cap.read()
        if not ok:
            print("Error al leer frame de la cámara. La cámara podría estar ocupada o desconectada.", flush=True)
            break

        resultados = alpr.predict(frame)

        for placa in resultados:
            x1, y1, x2, y2 = (
                placa.detection.bounding_box.x1,
                placa.detection.bounding_box.y1,
                placa.detection.bounding_box.x2,
                placa.detection.bounding_box.y2,
            )

            texto = placa.ocr.text if placa.ocr else "?"
            conf = placa.ocr.confidence if placa.ocr else None

            # Dibuja el rectangulo de la placa
            cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 255, 0), 2)

            # Dibuja SOLO el texto de la placa (sin el pais/region)
            cv2.putText(
                frame,
                texto,
                (x1, y1 - 10),
                cv2.FONT_HERSHEY_SIMPLEX,
                0.8,
                (0, 255, 0),
                2,
            )

            # Consola
            if isinstance(conf, (list, tuple)):
                conf_promedio = sum(conf) / len(conf) if conf else 0
                print(f"Placa detectada: {texto} (confianza OCR promedio: {conf_promedio:.2f})", flush=True)
            elif conf is not None:
                print(f"Placa detectada: {texto} (confianza OCR: {conf:.2f})", flush=True)
            else:
                print(f"Placa detectada: {texto}", flush=True)

        cv2.imshow("Reconocimiento de Placas - FastALPR (q para salir)", frame)

        if cv2.waitKey(1) & 0xFF == ord("q"):
            break

except Exception as e:
    print("Ocurrió un error inesperado:", flush=True)
    traceback.print_exc()

cap.release()
cv2.destroyAllWindows()