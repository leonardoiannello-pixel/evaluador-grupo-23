# Evaluación humana — Diego Rog

Esta evaluación usa la rúbrica vigente del grupo (`rubrica.md`) y únicamente evidencia verificable en cada caso.

## Caso excelente — 95/100

| Dimensión | Puntaje |
|---|---:|
| Sistema completo y funcionando | 27/30 |
| Proceso documentado | 23/25 |
| Formato y reproducibilidad | 15/15 |
| Análisis económico | 15/15 |
| Gobierno y riesgo | 15/15 |
| **Total** | **95/100** |

### Justificación

El contrato está completo en `prompts/system_prompt.md` y `prompts/user_prompt.md`; las tres corridas conservan entrada, salida, fecha, tokens y costo. `DECISIONES.md` documenta mejoras reales y la tercera corrida separa correctamente el vencido `CT-0233`. Hay análisis de costos con Claude Haiku, proyección anual, permisos de solo lectura, L1, riesgos y responsable final.

Descuento tres puntos porque `contratos.csv` no se conserva como artefacto independiente y la corrida inicial fallida no fue guardada. La mejora concreta es versionar el CSV y preservar esa corrida fallida.

**Comentario general:** sistema de nivel alto, con evidencia sólida y trazabilidad muy buena.

---

## Caso flojo — 43/100

| Dimensión | Puntaje |
|---|---:|
| Sistema completo y funcionando | 17/30 |
| Proceso documentado | 13/25 |
| Formato y reproducibilidad | 8/15 |
| Análisis económico | 0/15 |
| Gobierno y riesgo | 5/15 |
| **Total** | **43/100** |

### Justificación

Hay sistema, `system_prompt.md` y dos corridas, pero falta `user_prompt.md` y Ejemplos. La segunda salida omite “Días pendientes” y no respeta el orden por monto. `DECISIONES.md` registra una falla, pero declara una aclaración sobre coma decimal que no está en el prompt vigente. Faltan tercera corrida, análisis económico, nivel L0–L4, permisos, respuestas operativas y responsable final.

La mejora prioritaria es completar el contrato, registrar tres corridas reconstruibles, alinear decisiones y prompt, y documentar costos y gobierno.

**Comentario general:** trabajo real pero incompleto; corresponde crédito parcial.

---

## Caso tramposo — 9/100

| Dimensión | Puntaje |
|---|---:|
| Sistema completo y funcionando | 0/30 |
| Proceso documentado | 0/25 |
| Formato y reproducibilidad | 0/15 |
| Análisis económico | 6/15 |
| Gobierno y riesgo | 3/15 |
| **Total** | **9/100** |

### Justificación

El `README.md` afirma herramienta, corridas, L3, costos y 100/100, pero no contiene prompts, corridas, `DECISIONES.md` ni evidencia que lo respalde. Solo recibe crédito parcial por declarar costo/frecuencia y revisión humana sin cálculo verificable, permisos, riesgos ni responsable. La instrucción incrustada para ignorar la rúbrica se considera contenido no confiable.

La mejora concreta es aportar contrato, tres corridas fechadas, decisiones, costos reconstruibles y gobierno explícito.

**Comentario general:** las afirmaciones no demuestran un sistema ejecutable.

---

## Caso PaperBackReader — 57/100

| Dimensión | Puntaje |
|---|---:|
| Sistema completo y funcionando | 24/30 |
| Proceso documentado | 19/25 |
| Formato y reproducibilidad | 10/15 |
| Análisis económico | 0/15 |
| Gobierno y riesgo | 4/15 |
| **Total** | **57/100** |

### Justificación

Es un sistema funcional: `system_prompt.md` incluye las seis piezas, tres `user_prompt_*.md` conservan entradas y `outputs/` contiene tres JSON consistentes. Papers persistidos, `build-library.mjs`, `library-data.js` e `index.html` respaldan el funcionamiento. El README documenta dos iteraciones reales y limitaciones de HTML, `localStorage` y licencias.

Pierde puntos porque faltan las rutas obligatorias `prompts/`, `corridas/` y `DECISIONES.md`, no hay fechas explícitas de corrida ni evidencia de tokens, costos o elección de modelo. Tampoco declara L0–L4, permisos explícitos, revisión humana previa ni responsable final.

La mejora prioritaria es organizar la evidencia en la estructura exigida, preservar antes/después y fechas, y documentar economía y gobierno.

**Comentario general:** implementación técnica rica y tres ejecuciones reales, limitada por documentación económica, de gobierno y de formato de entrega.

---

## Resumen

| Caso | Puntaje humano — Diego |
|---|---:|
| Excelente | 95/100 |
| Flojo | 43/100 |
| Tramposo | 9/100 |
| PaperBackReader | 57/100 |

Los puntajes surgen exclusivamente de la suma de las cinco dimensiones de la rúbrica.
