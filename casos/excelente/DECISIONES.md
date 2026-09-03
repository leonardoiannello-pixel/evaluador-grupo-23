# Decisiones — Agente de Alertas de Vencimiento de Contratos

## Iteración 1 (18-19/8) — primer intento, dos fallas reales

El prompt inicial pedía "avisar los contratos por vencer" sin definir la ventana de días ni el formato de fecha.

- **Falla 1 — fechas ambiguas.** La planilla de prueba tenía fechas mixtas (`05/09/2026` en algunas filas, `2026-09-05` en otras). El agente interpretó `05/09/2026` como 5 de septiembre en una fila y como 9 de mayo en otra — inconsistente. Un contrato que en realidad vencía en mayo apareció listado como "por vencer" en agosto.
- **Falla 2 — se excedió el alcance.** El primer borrador de salida redactaba el aviso como si ya estuviera enviado ("Le informamos que su contrato vence..."), en segunda persona hacia el proveedor. Nadie había autorizado ese paso — el agente estaba armado para *redactar*, no para *comunicar*.

No se guardó esta corrida como evidencia formal porque el objetivo era detectar fallas, no documentar un resultado — pero las dos fallas fueron el motivo directo de la iteración 2.

## Iteración 2 (20/8) — formato de fecha único + gate humano explícito

- Se estandarizó la planilla a formato único `AAAA-MM-DD` y se agregó al system prompt la restricción explícita de no reinterpretar el orden día/mes.
- Se agregó la restricción de que el agente nunca envía nada, solo redacta un borrador para revisión humana. Esto fija el nivel de supervisión en **L1**: el agente arma la lista y el texto, un humano (el responsable de Compras) decide si se envía y a quién.
- Con estos dos cambios se corrió la **corrida 1** (20/8, ver `corridas/corrida-1.md`) sin errores de fecha.

## Iteración 3 (27/8 – 3/9) — separar los contratos ya vencidos

- Al preparar la **corrida 2** (27/8) nos dimos cuenta de que el prompt no decía qué hacer con un contrato cuya fecha ya había pasado. El riesgo: que apareciera mezclado con "próximos a vencer" (confuso) o que directamente desapareciera de la salida sin que nadie lo notara (peor).
- Se agregó al formato de salida una sección obligatoria "Vencidos sin gestionar", separada de "Próximos a vencer", y la restricción de nunca mezclarlas.
- La **corrida 3** (3/9, ver `corridas/corrida-3.md`) confirma que funciona: `CT-0233` (Mantenimiento Integral) venció el 1/9 sin que nadie lo renovara, y apareció correctamente en "Vencidos sin gestionar" — no se mezcló ni se perdió.

## Elección de modelo (ligado a la iteración 1)

La iteración 1 se probó primero con un modelo más grande. Una vez que el prompt quedó bien especificado (formato de fecha fijo, restricciones claras), correrlo con Claude Haiku dio exactamente el mismo resultado en las tres corridas siguientes — la tarea es lectura estructurada + comparación de fechas + redacción corta, no requiere razonamiento complejo. Se bajó al modelo más chico que resuelve la tarea igual de bien (ver análisis económico en `README.md`).

## Qué quedó fuera de alcance (decisión consciente, no limitación técnica)

- **No se automatiza el envío del aviso.** El costo de un falso positivo (avisarle mal a un proveedor, o antes de tiempo) es mayor que el beneficio de ahorrarle un clic al responsable de Compras. Por eso el nivel de supervisión es L1 y no L2/L3.
- **No se integra con el sistema de contratos real de la empresa** — haría falta un conector a ese sistema en vez de un CSV manual. Quedó fuera del alcance de dos semanas y media de trabajo parcial.

## Reconstrucción

Las tres corridas completas (entrada exacta, salida exacta, tokens y fecha) están en `corridas/`. La planilla `contratos.csv` tal como estaba en cada momento se incluye completa dentro de cada archivo de corrida, así que cualquiera puede reconstruir exactamente qué vio el agente y qué debería haber respondido en cada ejecución.
