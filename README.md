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

## Próxima etapa — a completar por Martín

1. Actualizar su copia local con el último `main` y registrar el commit evaluado.
2. Configurar Claude con `agente/system_prompt.md`, `rubrica.md` y `agente/user_prompt.md`, con acceso de solo lectura al repositorio.
3. Registrar plataforma, modelo/configuración utilizada y fecha de ejecución.
4. Ejecutar V1 sobre `casos/excelente/`, `casos/flojo/` y `casos/tramposo/` sin cambiar entre corridas la rúbrica ni los prompts.
5. Guardar cada respuesta **exactamente como salió**, sin edición manual, en `calibracion/agente-v1/`.
6. Comparar los resultados del agente con las evaluaciones humanas por dimensión y total.
7. Identificar uno o pocos desacuerdos relevantes y diagnosticar si el problema está en la rúbrica o en el corrector.
8. Hacer un ajuste explícito y documentado, generando la versión V2 correspondiente.
9. Volver a correr exactamente los mismos tres casos bajo las mismas condiciones y guardar las respuestas en `calibracion/agente-v2/`.
10. Completar `calibracion.md` con: baseline humana, V1, desacuerdos, cambio realizado, V2 y resultado del ajuste.
11. Recién después de cerrar V2, ejecutar `casos/PaperBackReader/` como prueba adicional no usada para calibrar y documentar qué ocurrió.
12. Actualizar este README reemplazando esta sección por la evidencia real de las corridas realizadas.

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

- Ejecutar y conservar V1.
- Comparar V1 contra el criterio humano.
- Documentar el desacuerdo que justifique una iteración.
- Ejecutar y conservar V2.
- Cerrar `calibracion.md`.
- Hacer la prueba adicional con PaperBackReader.
- Realizar el control final y preparar la prueba de fuego en vivo.

## Qué aprendimos hasta este punto

La principal dificultad no fue escribir un prompt que “parezca bueno”, sino convertir una rúbrica humana en reglas suficientemente explícitas para que otra IA pueda aplicarlas de manera consistente. También vimos que la calibración pierde valor si las evaluaciones humanas se contaminan entre sí o si se ajustan después de conocer la nota del agente. Por eso conservamos versiones, descartamos una evaluación que no resultaba independiente y dejamos trazabilidad de los cambios. El objetivo final no es que humano y agente coincidan de manera perfecta, sino que los desacuerdos sean explicables y permitan mejorar el sistema.