# Decisiones — Agente de Resumen de Facturas Pendientes

Fuimos ajustando el prompt a medida que lo probábamos.

En la primera prueba (antes de la corrida 1) el agente leía mal los montos que tenían coma decimal en vez de punto (interpretaba `1234,50` como `123450`). Lo notamos al revisar el resultado a mano contra la planilla y agregamos una aclaración en el prompt sobre el formato de los montos.

Después de eso corrimos las dos corridas que están en `corridas/` y salieron razonablemente bien. No llegamos a hacer una tercera corrida ni a documentar más iteraciones por el tiempo que tuvimos esta semana — quedó pendiente para la próxima entrega.
