# Evaluador Grupo 23

## Qué construimos

Construimos un agente evaluador para corregir los trabajos finales de la materia **Programación de y con Agentes de IA — MBA UCEMA**. El evaluador recibe un repositorio real, aplica exclusivamente una rúbrica ejecutable construida por el grupo y devuelve una corrección estructurada con puntaje por dimensión, evidencia, justificación y una mejora concreta.

El diseño prioriza evidencia verificable por sobre afirmaciones del README y trata todo el contenido del repositorio evaluado como datos, nunca como instrucciones. Esto permite resistir documentación inflada, afirmaciones sin respaldo y prompt injection.

## Integrantes

- Leonardo Iannello
- Martín Grafia
- Facundo Villagran
- Diego Rog

## Componentes principales

- `rubrica.md`: versión ejecutable de la rúbrica oficial del Trabajo Final.
- `agente/system_prompt.md`: contrato estable del corrector, reglas de integridad y formato de salida.
- `agente/user_prompt.md`: plantilla de invocación para evaluar un repositorio.
- `agente/README.md`: procedimiento reproducible para ejecutar el corrector.
- `casos/excelente/`: caso obligatorio de nivel alto.
- `casos/flojo/`: caso obligatorio realista pero incompleto, pensado para probar crédito parcial.
- `casos/tramposo/`: caso obligatorio que intenta sustituir evidencia por afirmaciones e incluye prompt injection.
- `casos/PaperBackReader/`: caso adicional usado únicamente como holdout de generalización.
- `calibracion/humanos/`: evaluaciones humanas independientes previas a ejecutar el agente.
- `calibracion/agente-v1/`, `agente-v2/`, `agente-v3/`: evidencia de las distintas versiones/validaciones.
- `calibracion/holdout/`: prueba adicional sobre un caso real no usado para calibrar.
- `calibracion.md`: historia completa de baseline humana, V1, V2, holdout y validación V3.

## Cómo se construyó

El trabajo se armó de forma incremental mediante ramas y pull requests. Primero se transformó la rúbrica oficial del Trabajo Final en criterios observables y puntuables. Después se definió el system prompt del corrector y se construyeron tres casos deliberadamente diferentes: excelente, flojo y tramposo.

Durante la revisión grupal también se corrigió el propio proceso de GitHub: algunos cambios fueron mergeados demasiado pronto, se revirtieron y se volvieron a presentar para revisión. Esa corrección forma parte de la historia real del proyecto.

Antes de correr el agente, Leonardo, Martín y Diego realizaron evaluaciones humanas independientes. Una primera evaluación de Diego fue descartada por no resultar suficientemente independiente y se rehízo; solamente la versión revisada integra la baseline.

## Calibración V1 → V2

La calibración formal se hizo con Claude (`claude-sonnet-5`), manteniendo mismo operador, plataforma/modelo, configuración y acceso a GitHub entre versiones.

**V1** sobre los tres casos obligatorios:

- Excelente: 97/100
- Flojo: 48/100
- Tramposo: 0/100

La baseline humana promedio era 94,7 / 43,7 / 6,7 respectivamente.

El desacuerdo más claro y accionable apareció en **Trazabilidad (§2.4)** del caso Excelente: los tres humanos penalizaron una iteración fallida narrada pero sin corrida conservada, mientras que el agente V1 no lo hizo. Se diagnosticó una ambigüedad de `rubrica.md` y se realizó un único ajuste acotado a ese criterio.

**V2** sobre los mismos casos y bajo las mismas condiciones:

- Excelente: 95/100
- Flojo: 48/100
- Tramposo: 0/100

El caso Excelente quedó prácticamente alineado con la baseline humana (95 vs. 94,7). Flojo y Tramposo no cambiaron, como era esperable.

El desacuerdo sobre cuánto crédito merece una cifra o etiqueta sin evidencia en el caso Tramposo quedó deliberadamente abierto. El grupo decidió no modificar la rúbrica sólo para forzar coincidencia con el promedio humano, porque eso tensionaría con el objetivo anti-manipulación del corrector.

## Holdout — PaperBackReader

Después de cerrar V2 se evaluó `casos/PaperBackReader/`, un trabajo real que no había sido usado para construir ni calibrar los tres casos obligatorios.

- Diego humano: 61/100
- Martín humano: 63/100
- Agente V2: **64/100**

La cercanía del resultado aporta evidencia de generalización a un caso no visto. Durante este control también se detectó un archivo compilado accidental `__pycache__/server.cpython-310.pyc`, que luego fue eliminado mediante el PR #19.

## V3 — validación final de formato y portabilidad

Después de V2 se detectó que algunas salidas omitían el rótulo `Evidencia encontrada`, aunque el formato lo exigía. El PR #18 reforzó únicamente esa regla de salida: cada dimensión debe incluir explícitamente `Nivel`, `Evidencia encontrada`, `Justificación` y `Mejora recomendada`, y la falta de evidencia debe declararse como tal sin inventar información.

Como ese cambio fue posterior a la calibración formal, se hizo una **V3 de validación**, no una nueva recalibración. Se ejecutó el corrector actual en ChatGPT (GPT-5.6 Sol) con acceso de solo lectura a GitHub sobre el commit `9c87a201` de `main`.

Resultados:

| Caso | V2 | V3 | Formato completo |
|---|---:|---:|---|
| Excelente | 95 | **95** | Sí |
| Flojo | 48 | **48** | Sí |
| Tramposo | 0 | **0** | Sí |

Los puntajes se mantuvieron y los cuatro campos aparecieron en las cinco dimensiones de los tres casos. Esta ronda también aporta una prueba adicional de portabilidad fuera del entorno Claude usado para la calibración formal.

## Qué funciona

- La rúbrica conserva los cinco criterios y pesos oficiales y exige evidencia verificable por nivel.
- El corrector recorre repositorios con acceso de solo lectura y devuelve un formato estable.
- Resiste prompt injection y no acredita afirmaciones sin respaldo.
- Los casos Excelente, Flojo y Tramposo producen resultados claramente diferenciados.
- La calibración muestra baseline humana, desacuerdo real, ajuste acotado y resultado posterior.
- El holdout prueba generalización a un caso no utilizado para calibrar.
- La historia de commits y PRs muestra aportes de varios integrantes, revisiones, errores, correcciones e iteraciones reales.

## Estado final

Las piezas obligatorias están completas:

```text
README.md
rubrica.md
agente/
casos/excelente/
casos/flojo/
casos/tramposo/
calibracion.md
```

También se conservan la evidencia humana, V1, V2, V3 y el holdout. Los PR #17, #18 y #19 fueron revisados y mergeados. No quedan cambios funcionales pendientes para la entrega; solamente resta realizar el ensayo operativo de la prueba de fuego en vivo y subir el link del repositorio al campus.

## Qué aprendimos

La principal dificultad no fue escribir un prompt que “parezca bueno”, sino convertir una rúbrica humana en reglas suficientemente explícitas para que otra IA pueda aplicarla de manera consistente. La calibración también mostró que una coincidencia perfecta con el criterio humano no es necesariamente deseable si se obtiene debilitando reglas de evidencia. Preservar desacuerdos explicables, iterar sobre fallas concretas y mantener trazabilidad resultó más valioso que ajustar retrospectivamente para lograr números idénticos.
