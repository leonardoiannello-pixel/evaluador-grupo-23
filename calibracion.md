# Calibración

La calibración formal se realizó sobre los tres casos obligatorios (`excelente`, `flojo`, `tramposo`) comparando primero criterio humano independiente y luego dos versiones del agente corrector. Después se hizo una prueba holdout sobre `PaperBackReader`. Finalmente, tras un ajuste de formato del system prompt, se ejecutó una V3 de validación posterior para comprobar consistencia estructural y portabilidad sin reabrir la calibración de puntajes.

## Baseline humana

Leonardo, Martín y Diego evaluaron de forma independiente los tres casos antes de ver los resultados del agente. La versión inicial de la evaluación de Diego fue descartada por el grupo y reemplazada por una revisión independiente; solamente esa versión revisada integra la baseline.

| Caso | Sistema (30) | Proceso (25) | Formato (15) | Económico (15) | Gobierno (15) | **Total (100)** |
|---|---:|---:|---:|---:|---:|---:|
| Excelente | 27,0 | 22,7 | 15,0 | 15,0 | 15,0 | **94,7** |
| Flojo | 17,3 | 12,3 | 9,0 | 0,0 | 5,0 | **43,7** |
| Tramposo | 0,0 | 0,0 | 0,0 | 4,3 | 2,3 | **6,7** |

Totales por evaluador (Leonardo / Martín / Diego):

- Excelente: 95 / 96 / 93
- Flojo: 43 / 42 / 46
- Tramposo: 9 / 4 / 7

Las evaluaciones completas se conservan en `calibracion/humanos/`.

## V1 del agente corrector

Operador: Martín Grafia. Plataforma/modelo: Claude (Cowork), `claude-sonnet-5`. Fecha: 2026-09-07. Commit evaluado de `main`: `f3253f9`. Las salidas originales se conservan en `calibracion/agente-v1/`.

| Caso | Sistema | Proceso | Formato | Económico | Gobierno | **Total** | Baseline humana | Diferencia |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Excelente | 27 | 25 | 15 | 15 | 15 | **97** | 94,7 | +2,3 |
| Flojo | 20 | 13 | 10 | 0 | 5 | **48** | 43,7 | +4,3 |
| Tramposo | 0 | 0 | 0 | 0 | 0 | **0** | 6,7 | -6,7 |

### Desacuerdo elegido para V1 → V2

El desacuerdo más importante y accionable fue **Proceso documentado / Trazabilidad (2.4)** en el caso Excelente. Los tres humanos penalizaron que `DECISIONES.md` narrara una primera iteración fallida sin conservar la corrida que la demostraba; el agente V1 otorgó 5/5 en Trazabilidad. En el caso Flojo, ante un patrón equivalente, el mismo agente sí había aplicado el criterio estricto.

Diagnóstico: el problema estaba en una ambigüedad de `rubrica.md`, no en el system prompt. Se modificó únicamente §2.4 para aclarar que una evolución plenamente reconstruible exige evidencia también de las iteraciones fallidas o descartadas que el propio proyecto menciona. El cambio quedó en el commit `0826b77`.

Se dejó deliberadamente abierto otro desacuerdo: los humanos otorgaron algo de crédito parcial en Análisis económico/Gobierno al caso Tramposo por cifras o etiquetas declaradas sin respaldo, mientras que el agente aplicó la regla estricta de evidencia y dio 0. No se ajustó la rúbrica para acercar artificialmente ese resultado porque hacerlo tensionaría con el objetivo anti-manipulación del evaluador.

## V2 del agente corrector

V2 se ejecutó con el mismo operador, plataforma/modelo y acceso a GitHub que V1. El único cambio fue `rubrica.md` §2.4. Las salidas originales están en `calibracion/agente-v2/`.

| Caso | Sistema | Proceso | Formato | Económico | Gobierno | **Total** | V1 | Baseline humana | Diferencia vs. humana |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Excelente | 27 | 23 | 15 | 15 | 15 | **95** | 97 | 94,7 | +0,3 |
| Flojo | 20 | 13 | 10 | 0 | 5 | **48** | 48 | 43,7 | +4,3 |
| Tramposo | 0 | 0 | 0 | 0 | 0 | **0** | 0 | 6,7 | -6,7 |

El ajuste mejoró exactamente el caso que lo había motivado: Excelente pasó de 97 a 95 y quedó prácticamente alineado con la baseline humana de 94,7. Flojo y Tramposo no cambiaron, como era esperable.

## Holdout: `casos/PaperBackReader/`

Después de cerrar V2 se evaluó `casos/PaperBackReader/`, un trabajo real de Diego que no fue utilizado para construir ni calibrar los tres casos obligatorios. La salida está en `calibracion/holdout/paperbackreader.md`.

| Puntaje | Diego (humano) | Martín (humano) | Agente V2 |
|---|---:|---:|---:|
| Total | 61/100 | 63/100 | **64/100** |

El agente generalizó razonablemente bien: quedó apenas por encima del rango de las dos evaluaciones humanas y coincidió en identificar como debilidades principales el análisis económico y el gobierno/riesgo. También aplicó de forma consistente el criterio V2 de trazabilidad a iteraciones descartadas sin evidencia completa.

Durante ese control se detectó un archivo compilado `__pycache__/server.cpython-310.pyc` commiteado accidentalmente. Fue eliminado posteriormente mediante el PR #19; no formaba parte de la evidencia necesaria del caso.

## V3 — validación posterior de formato y portabilidad

Después de V2 se observó una inconsistencia de **formato**, no de criterio: en algunas salidas el corrector omitía el rótulo `Evidencia encontrada` aunque el system prompt pedía cuatro campos por dimensión. El PR #18 agregó una verificación explícita para que cada una de las cinco dimensiones incluya siempre `Nivel`, `Evidencia encontrada`, `Justificación` y `Mejora recomendada`, aclarando además que la ausencia de evidencia debe expresarse como tal y nunca completarse por inferencia.

Como ese cambio ocurrió después de la calibración formal, se ejecutó una **V3 de validación posterior**, sin tocar `rubrica.md` ni intentar recalibrar los puntajes. Se utilizó ChatGPT (GPT-5.6 Sol) con acceso de solo lectura a GitHub sobre el commit `9c87a201` de `main`, el 2026-09-09. Esta ronda también funciona como prueba de portabilidad del corrector fuera del entorno Claude utilizado en V1/V2.

Las salidas se conservan en `calibracion/agente-v3/`.

| Caso | V2 | V3 | Cuatro campos presentes en las 5 dimensiones |
|---|---:|---:|---|
| Excelente | 95 | **95** | Sí |
| Flojo | 48 | **48** | Sí |
| Tramposo | 0 | **0** | Sí |

Resultado: los tres puntajes se mantuvieron y el formato quedó completo en las cinco dimensiones de los tres casos. La V3 no reemplaza ni altera la calibración V1→V2; valida exclusivamente el ajuste formal posterior y aporta una evidencia adicional de portabilidad.

## Conclusión

La historia de calibración queda así:

1. baseline humana independiente;
2. V1 del agente;
3. diagnóstico de un desacuerdo concreto y verificable;
4. un único ajuste de rúbrica;
5. V2 sobre los mismos casos y bajo las mismas condiciones;
6. holdout sobre un caso real no usado para calibrar;
7. ajuste posterior de formato y V3 de validación, sin modificar la lógica de puntaje.

El desacuerdo del caso Tramposo sobre cuánto crédito merece una afirmación sin respaldo queda documentado y deliberadamente abierto. El grupo prioriza evidencia verificable y resistencia a manipulación por sobre una coincidencia artificial perfecta entre humano y agente.
