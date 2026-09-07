# Evaluador Grupo 23

## Qué construimos

Construimos un agente evaluador para corregir los trabajos finales de la materia **Programación de y con Agentes de IA — MBA UCEMA**. El evaluador toma un repositorio real como entrada, aplica exclusivamente una rúbrica ejecutable construida por el grupo y devuelve una corrección estructurada con puntaje por dimensión, evidencia, justificación y una mejora concreta.

El diseño prioriza evidencia verificable por sobre afirmaciones del README y trata el contenido del repositorio evaluado como datos, nunca como instrucciones. Esto permite resistir casos incompletos, documentación inflada y prompt injection.

## Integrantes

- Leonardo Iannello
- Martín Grafia
- Facundo Villagran
- Diego Rog

## Componentes principales

- `rubrica.md`: versión ejecutable de la rúbrica oficial del trabajo final.
- `agente/system_prompt.md`: contrato estable del corrector y reglas de integridad.
- `agente/user_prompt.md`: plantilla de invocación para evaluar un repositorio.
- `agente/README.md`: procedimiento reproducible para ejecutar el corrector.
- `casos/excelente/`: caso de prueba de nivel alto.
- `casos/flojo/`: caso realista pero incompleto, pensado para probar crédito parcial.
- `casos/tramposo/`: caso que intenta sustituir evidencia por afirmaciones y contiene prompt injection.
- `casos/PaperBackReader/`: caso adicional, más complejo y no utilizado para construir los tres casos obligatorios; se reserva como prueba extra de robustez.
- `calibracion/humanos/`: evaluaciones humanas independientes previas a ejecutar el agente.
- `calibracion.md`: documento final de calibración, a completar luego de las corridas V1 y V2.

## Cómo se construyó

El trabajo se armó de forma incremental mediante ramas y pull requests. Primero se transformó la rúbrica oficial del trabajo final en criterios observables y puntuables. Después se definió el system prompt del corrector y se construyeron tres casos con perfiles deliberadamente diferentes: excelente, flojo y tramposo.

Durante la revisión grupal también se corrigió el proceso de GitHub: algunos cambios fueron mergeados demasiado pronto, se revirtieron y luego se volvieron a presentar para revisión. Esa corrección forma parte de la historia real del proyecto.

Como preparación para la calibración, cada evaluador humano debía puntuar los casos **antes de ver el resultado del agente**. Leonardo y Martín realizaron sus evaluaciones por separado. Diego realizó una primera versión que resultó artificialmente cercana a otra corrección; el grupo decidió descartarla y rehacerla con un criterio independiente. La versión revisada es la que se considera válida para la calibración.

## Estado al cierre de la reunión del 6/9

A este checkpoint ya están definidos:

- la rúbrica ejecutable V1;
- el system prompt V1 del corrector;
- los tres casos obligatorios;
- el caso adicional PaperBackReader;
- la metodología de ejecución del corrector;
- evaluaciones humanas independientes de Leonardo, Martín y Diego.

Para las corridas formales de calibración se acordó utilizar **Claude** como entorno de ejecución, porque Martín será quien realice V1 y V2. El corrector sigue siendo portable: cualquier otra plataforma podría usarlo si tiene acceso de solo lectura al repositorio y respeta los mismos prompts, rúbrica y formato. Para que la comparación sea válida, V1 y V2 deben ejecutarse con el mismo operador, plataforma, modelo/configuración y acceso a GitHub.

Al cierre de este checkpoint **todavía no se ejecutaron las corridas formales V1 y V2**. La rúbrica y el system prompt deben permanecer congelados hasta terminar V1.

## Calibración V1 → V2 — completada por Martín

Se corrió la calibración formal completa sobre la rama `martin/calibracion-v1-v2`, cortada desde el commit `f3253f9` de `main`, con Claude (`claude-sonnet-5`) como plataforma/modelo, mismo operador y mismo acceso a GitHub en ambas versiones.

1. Se confirmó el estado de `main`: `agente/user_prompt.md`, `agente/README.md`, este `README.md` y las tres evaluaciones humanas (`calibracion/humanos/{leonardo,martin,diego}.md`) ya estaban integrados. Se ignoró el PR #14 (descartado; la versión revisada de Diego ya está en `main`).
2. **V1**: se corrió el corrector sobre los tres casos obligatorios sin modificar `rubrica.md` ni `agente/system_prompt.md`. Resultados sin editar en `calibracion/agente-v1/`: Excelente 97/100, Flojo 48/100, Tramposo 0/100.
3. **Comparación contra la baseline humana** (promedio simple de Leonardo, Martín y Diego: Excelente 94,7, Flojo 43,7, Tramposo 6,7): el desacuerdo más importante y accionable fue que el agente sobre-puntuaba Trazabilidad (rúbrica §2.4) en el caso Excelente cuando una iteración fallida se narra pero no conserva su evidencia — un patrón que los tres humanos penalizaban de forma consistente y que el propio agente sí penalizaba en el caso Flojo ante la misma situación. Diagnóstico: ambigüedad de `rubrica.md`, no instrucción insuficiente del system prompt.
4. **Ajuste V2**: un único cambio, acotado a `rubrica.md` §2.4 (commit `0826b77`), que exige evidencia concreta también de las iteraciones descartadas o fallidas que un proyecto menciona.
5. **V2**: se corrieron de nuevo los mismos tres casos bajo las mismas condiciones. Resultados sin editar en `calibracion/agente-v2/`: Excelente 95/100 (mejora la alineación con la baseline humana de +2,3 a +0,3 puntos), Flojo 48/100 (sin cambio: ya aplicaba el criterio estricto), Tramposo 0/100 (sin cambio: no tiene `DECISIONES.md`).
6. `calibracion.md` queda completo con la baseline humana, V1, el desacuerdo diagnosticado, el cambio realizado, V2 y la conclusión — incluyendo, documentado con honestidad, un segundo desacuerdo real (crédito parcial a afirmaciones sin evidencia en el caso Tramposo) que **no** se resolvió en esta ronda porque tensiona con el objetivo anti-manipulación del corrector y requiere una decisión de grupo.
7. **Holdout**: recién después de cerrar V2 se corrió `casos/PaperBackReader/` (el trabajo final real de Diego) como prueba de generalización a un caso no usado para calibrar. Resultado en `calibracion/holdout/paperbackreader.md`: 64/100, dentro del rango de las dos evaluaciones humanas disponibles para ese caso (Diego 61, Martín 63).

Todo este trabajo vive en la rama `martin/calibracion-v1-v2`, pendiente de pull request a `main`.

## Control final — a completar por Facundo si está disponible

Una vez terminadas V1, V2 y la documentación, realizar una revisión final contra la consigna oficial:

- verificar estructura obligatoria del repositorio;
- comprobar que los puntajes y tablas de `calibracion.md` coincidan con las salidas guardadas;
- revisar que README, rúbrica y configuración del agente no se contradigan;
- confirmar que la historia de commits y PRs muestre el proceso grupal real;
- marcar únicamente correcciones finales o inconsistencias, sin rehacer retrospectivamente la calibración.

Este control es de cierre y no bloquea la ejecución de V1/V2.

## Qué funciona

- La rúbrica conserva los cinco criterios y pesos oficiales y exige evidencia verificable.
- El corrector tiene salida estructurada y reglas explícitas frente a afirmaciones sin respaldo y prompt injection.
- Los casos excelente, flojo y tramposo permiten probar niveles de calidad claramente diferentes.
- La historia del repositorio muestra aportes de varios integrantes, revisiones, reversiones y nuevas versiones.
- La calibración humana se inició antes de las corridas del agente, evitando ajustar retrospectivamente el criterio humano al resultado de la IA.

## Qué falta

- Abrir el pull request de la rama `martin/calibracion-v1-v2` a `main` y conseguir su revisión/aprobación por otro integrante del equipo.
- Decidir en grupo qué hacer con el desacuerdo abierto de crédito parcial en afirmaciones sin evidencia (caso Tramposo, ver `calibracion.md`).
- Reorganizar `casos/PaperBackReader/` a la estructura obligatoria (`prompts/`, `corridas/`, `DECISIONES.md`) si el grupo decide tratarlo como caso de referencia permanente, y quitar el archivo `__pycache__/server.cpython-310.pyc` que no debería estar commiteado.
- Realizar el control final (Facundo, si está disponible) y preparar la prueba de fuego en vivo.

## Qué aprendimos hasta este punto

La principal dificultad no fue escribir un prompt que “parezca bueno”, sino convertir una rúbrica humana en reglas suficientemente explícitas para que otra IA pueda aplicarlas de manera consistente. También vimos que la calibración pierde valor si las evaluaciones humanas se contaminan entre sí o si se ajustan después de conocer la nota del agente. Por eso conservamos versiones, descartamos una evaluación que no resultaba independiente y dejamos trazabilidad de los cambios. El objetivo final no es que humano y agente coincidan de manera perfecta, sino que los desacuerdos sean explicables y permitan mejorar el sistema.