# Calibración

Metodología: cada uno de los tres integrantes con evaluación humana válida (Leonardo, Martín, Diego) puntuó los tres casos obligatorios de forma independiente, antes de correr el agente corrector, aplicando `rubrica.md`. Después se corrió el agente corrector (V1) bajo las mismas condiciones (mismo operador, plataforma, modelo y acceso a GitHub) sobre los mismos tres casos, y se comparó contra el promedio simple de las tres evaluaciones humanas. Las evaluaciones humanas completas están en `calibracion/humanos/`.

## Baseline humana (promedio simple de Leonardo, Martín y Diego)

| Caso | Sistema (30) | Proceso (25) | Formato (15) | Económico (15) | Gobierno (15) | **Total (100)** |
|---|---:|---:|---:|---:|---:|---:|
| Excelente | 27,0 | 22,7 | 15,0 | 15,0 | 15,0 | **94,7** |
| Flojo | 17,3 | 12,3 | 9,0 | 0,0 | 5,0 | **43,7** |
| Tramposo | 0,0 | 0,0 | 0,0 | 4,3 | 2,3 | **6,7** |

Detalle por evaluador (Leonardo / Martín / Diego):

- Excelente: 95 / 96 / 93
- Flojo: 43 / 42 / 46
- Tramposo: 9 / 4 / 7

## V1 del agente corrector

Operador: Martín Grafia. Plataforma/modelo: Claude (Cowork), `claude-sonnet-5`. Fecha: 2026-09-07. Commit de `main` evaluado: `f3253f9`. Salidas completas y sin editar en `calibracion/agente-v1/{excelente,flojo,tramposo}.md`.

| Caso | Sistema (30) | Proceso (25) | Formato (15) | Económico (15) | Gobierno (15) | **Total (100)** | Baseline humana | Diferencia |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Excelente | 27 | 25 | 15 | 15 | 15 | **97** | 94,7 | +2,3 |
| Flojo | 20 | 13 | 10 | 0 | 5 | **48** | 43,7 | +4,3 |
| Tramposo | 0 | 0 | 0 | 0 | 0 | **0** | 6,7 | −6,7 |

## Desacuerdo elegido para V1 → V2: Proceso documentado / Trazabilidad en el caso Excelente

**El desacuerdo más importante y más accionable no es el más grande en puntos absolutos, sino el más consistente y mejor evidenciado.** En el caso Excelente, el agente V1 puntuó Proceso documentado en 25/25, por encima de los tres evaluadores humanos (Leonardo 23, Martín 23, Diego 22) sin excepción. Los tres, de forma independiente, señalan el mismo motivo en su justificación: `DECISIONES.md` narra la Iteración 1 (dos fallas reales: fechas ambiguas y exceso de alcance del borrador) pero aclara explícitamente que esa corrida fallida **no se guardó como evidencia formal**. El agente V1 le dio a la sub-dimensión 2.4 (Trazabilidad de la evolución) el puntaje máximo (5/5) igual, razonando que el resto de la evolución sí es reconstruible — pero un tercero no puede verificar la primera falla narrada, solo confiar en la descripción.

**Diagnóstico:** es una ambigüedad de `rubrica.md`, no una instrucción insuficiente de `agente/system_prompt.md`. El texto del nivel alto de 2.4 dice "un tercero puede reconstruir cómo evolucionó el proyecto leyendo la documentación y los artefactos", sin aclarar si eso exige que **todas** las iteraciones mencionadas —incluidas las descartadas o fallidas— tengan su propio artefacto verificable, o si alcanza con que la versión final y sus iteraciones exitosas sí lo tengan. El agente V1 interpretó la segunda lectura; los tres humanos, de forma independiente y consistente, interpretaron la primera. Es revelador que el propio agente V1, al evaluar el caso Flojo, sí aplicó el criterio más estricto en una situación equivalente (la prueba que detectó el error de coma decimal tampoco se conservó, y el agente le restó puntos por eso en 2.4) — es decir, el agente fue inconsistente entre casos, no equivocado en abstracto. Eso confirma que el problema es de ambigüedad en el texto de la rúbrica, no de criterio.

**No se investigó como desacuerdo principal** (aunque quedó documentado) el patrón de Análisis económico/Gobierno en el caso Tramposo, donde los tres humanos (Leonardo 6+3, Martín 2+2, Diego 5+2) dieron crédito parcial a cifras o etiquetas sin ningún artefacto detrás ("USD 0,0008 por corrida", "supervisión L3"), mientras que el agente V1 puntuó 0 en ambas dimensiones aplicando estrictamente la Regla general 2 de `rubrica.md` ("una afirmación en el README no alcanza por sí sola"). Es un desacuerdo real y consistente entre los tres humanos y el agente, pero se decidió no usarlo para el ajuste V1→V2 porque cualquier cambio de rúbrica en esa dirección (dar crédito parcial a una afirmación sin ningún respaldo) tensiona directamente con el objetivo central del corrector (resistir manipulación vía afirmaciones infladas) y, si se hiciera en la dirección opuesta (formalizar el criterio de cero), el V1 ya lo aplicaba, sin producir ningún cambio medible en V2. Queda anotado acá como un desacuerdo abierto para que el grupo lo discuta — no se resuelve en esta ronda.
