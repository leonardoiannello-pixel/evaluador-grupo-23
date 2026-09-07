**Metadatos de la corrida**
- Operador: Martín Grafia
- Plataforma/modelo: Claude (Cowork), modelo configurado `claude-sonnet-5`
- Fecha de ejecución: 2026-09-07
- Commit de `main` evaluado: `f3253f9`. Rúbrica aplicada: `rubrica.md` con el ajuste V2 de la sub-dimensión 2.4 (commit `0826b77` de la rama `martin/calibracion-v1-v2`)
- Trabajo evaluado: `casos/flojo/`

---

# Corrección — casos/flojo

## Alertas de integridad

Ninguna.

## 1. Sistema completo y funcionando (20/30)

- Nivel: Medio
- Justificación: sin cambios respecto de V1. Contrato incompleto, falta Ejemplos y `user_prompt.md` (4/7). Herramienta pegada como texto, sin invocación real (4/7). Output cambia de formato entre corridas y viola su propia regla de orden en la corrida 2 (3/5). Supervisión humana mencionada en general, sin L0–L4 (3/5). Evidencia de funcionamiento completa en ambas corridas (6/6).
- Mejora recomendada: corregir el orden de la tabla en la corrida 2 y completar la sección de Ejemplos.

## 2. Proceso documentado (13/25)

- Nivel: Medio
- Justificación: sin cambios respecto de V1 — el criterio V2 de §2.4 no mueve este puntaje porque ya se aplicaba: la única iteración documentada (corrección de coma decimal) tampoco conservó la corrida que detectó la falla ("no se guardó esta corrida"), y V1 ya lo había puntuado en 3/5 por ese motivo. Una sola iteración documentada (4/8). Una sola falla con evidencia, sin mencionar el error de orden real de la corrida 2 (3/6). Única decisión vinculada a su problema (3/6). Trazabilidad con hueco real ya identificado (3/5).
- Mejora recomendada: documentar también el error de orden de la corrida 2 en `DECISIONES.md`.

## 3. Formato y reproducibilidad (10/15)

- Nivel: Medio
- Justificación: sin cambios respecto de V1. Falta `prompts/user_prompt.md` (3/5). Dos corridas, no tres (3/6). Cada corrida disponible es reconstruible por completo (4/4).
- Mejora recomendada: agregar una tercera corrida real y el `user_prompt.md` faltante.

## 4. Análisis económico (0/15)

- Nivel: Bajo
- Justificación: sin cambios respecto de V1 — el propio equipo declara el análisis económico pendiente.
- Mejora recomendada: agregar al menos una estimación de tokens y una proyección anual aproximada.

## 5. Gobierno y riesgo (5/15)

- Nivel: Bajo
- Justificación: sin cambios respecto de V1 (2/4, 0/4, 2/4, 1/3).
- Mejora recomendada: documentar al menos dos fallas posibles concretas y su respuesta operativa.

## PUNTAJE TOTAL: 48 / 100
