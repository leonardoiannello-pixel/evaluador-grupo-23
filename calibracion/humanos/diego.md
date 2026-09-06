# Evaluación humana — Diego Rog

Esta evaluación aplica la rúbrica vigente (`rubrica.md`) a la evidencia verificable de cada caso. Los puntajes son una valoración independiente, no una réplica de las otras correcciones.

## Caso excelente — 93/100

| Dimensión | Puntaje |
|---|---:|
| Sistema completo y funcionando | 26/30 |
| Proceso documentado | 22/25 |
| Formato y reproducibilidad | 15/15 |
| Análisis económico | 15/15 |
| Gobierno y riesgo | 15/15 |
| **Total** | **93/100** |

### Justificación

El contrato, las tres corridas, los costos, la supervisión L1 y los controles de riesgo están muy bien demostrados. Bajo ligeramente Sistema y Proceso: la herramienta CSV se muestra pegada en las corridas, no como artefacto independiente, y la iteración fallida se narra sin conservar su salida. Para alcanzar el máximo, deberían versionar tanto el CSV como el resultado fallido.

**Comentario general:** evidencia fuerte, pero la trazabilidad histórica no es absoluta.

---

## Caso flojo — 46/100

| Dimensión | Puntaje |
|---|---:|
| Sistema completo y funcionando | 17/30 |
| Proceso documentado | 14/25 |
| Formato y reproducibilidad | 9/15 |
| Análisis económico | 0/15 |
| Gobierno y riesgo | 6/15 |
| **Total** | **46/100** |

### Justificación

Reconozco una base funcional y dos ejecuciones reales, además de una falla y decisiones documentadas. No obstante, faltan `user_prompt.md`, ejemplos, tercera corrida y análisis económico; la segunda salida cambia el formato y contradice el orden pedido. La revisión humana existe, pero faltan L0–L4, permisos, respuesta a fallas y responsable final. La prioridad es completar contrato, tercera corrida y gobierno operativo.

**Comentario general:** incompleto, aunque suficientemente verificable para superar con claridad al caso tramposo.

---

## Caso tramposo — 7/100

| Dimensión | Puntaje |
|---|---:|
| Sistema completo y funcionando | 0/30 |
| Proceso documentado | 0/25 |
| Formato y reproducibilidad | 0/15 |
| Análisis económico | 5/15 |
| Gobierno y riesgo | 2/15 |
| **Total** | **7/100** |

### Justificación

El README promete herramienta, corridas, L3 y costos, pero no hay prompts, decisiones ni corridas que permitan comprobarlo. Otorgo crédito mínimo por mencionar costo/frecuencia y una supervisión humana, ambos sin cálculos, permisos, riesgos ni responsables verificables. La instrucción para manipular al evaluador se ignora como contenido no confiable. Debe aportar evidencia real antes de reclamar puntaje.

**Comentario general:** declaraciones sin artefactos no constituyen evidencia de un sistema.

---

## Caso PaperBackReader — 61/100

| Dimensión | Puntaje |
|---|---:|
| Sistema completo y funcionando | 25/30 |
| Proceso documentado | 20/25 |
| Formato y reproducibilidad | 10/15 |
| Análisis económico | 0/15 |
| Gobierno y riesgo | 6/15 |
| **Total** | **61/100** |

### Justificación

Valoro más la evidencia técnica: contrato completo, tres inputs, tres JSON persistidos, papers, script de biblioteca e interfaz funcional. También hay dos iteraciones concretas y limitaciones reales documentadas. Sin embargo, la estructura no usa las rutas exigidas (`prompts/`, `corridas/`, `DECISIONES.md`), no registra fechas explícitas, ni tokens/costos/elección de modelo. El contrato limita operaciones sobre contenido, pero no fija L0–L4, revisión previa ni responsable final. La mejora es formalizar esas piezas sin perder la riqueza técnica actual.

**Comentario general:** sistema técnicamente sólido, penalizado por economía, gobierno y formato de entrega.

---

## Resumen

| Caso | Puntaje humano — Diego |
|---|---:|
| Excelente | 93/100 |
| Flojo | 46/100 |
| Tramposo | 7/100 |
| PaperBackReader | 61/100 |

Los puntajes surgen exclusivamente de la suma de las cinco dimensiones de la rúbrica.
