# CODEX: Mi aprendizaje + construcción de agente

> Registro cronológico reconstruido de la conversación mantenida en Codex para pensar y construir PaperBackReader.
>
> El nombre solicitado originalmente contenía `:`, un carácter no admitido en nombres de archivo de Windows. Por eso el archivo se guardó con ` - ` en su lugar.
>
> Este registro incluye la conversación de trabajo entre el usuario y Codex. No incluye instrucciones internas de la plataforma, llamadas de herramientas ni metadatos técnicos ajenos al proyecto.

## Inicio y alineación con la materia

### Usuario

Hola, vamos a arrancar en breve una sesión de chat para empezar a trabajar en este proyecto para la materia de Agentes IA.

### Codex

Confirmó que estaba listo para ayudar a entender el repositorio, definir la arquitectura, implementar agentes, probarlos y documentarlos.

### Usuario

Compartió la lámina **“Las seis piezas de un prompt profesional”**:

1. Rol.
2. Contexto.
3. Tarea.
4. Restricciones.
5. Formato.
6. Ejemplos.

Explicó que primero compartiría lo visto en clase para alinear el trabajo.

### Codex

Resumió las seis piezas:

1. **Rol:** quién es el agente y desde qué especialidad actúa.
2. **Contexto:** qué necesita saber sobre el entorno, los usuarios y los datos.
3. **Tarea:** qué debe producir o resolver.
4. **Restricciones:** límites, prohibiciones, alcance, extensión y tono.
5. **Formato:** estructura exacta de la respuesta.
6. **Ejemplos:** muestras que fijan el resultado esperado.

También aclaró que el texto dentro de imágenes o documentos sería tratado como material de referencia y no como instrucciones dirigidas al agente.

### Usuario

Pidió un ejemplo correcto y uno incorrecto.

### Codex

Propuso como ejemplo incorrecto:

> Analizá estos datos y haceme un informe.

Señaló que era ambiguo porque no definía rol, contexto, objetivo, restricciones, formato ni ejemplo.

Como ejemplo correcto propuso un analista de riesgo crediticio, con datos concretos de ingresos, gastos y cuotas; una tarea explícita; restricciones; formato; y un ejemplo de salida.

### Usuario

Compartió la lámina **“El mismo pedido, dos escrituras”**. La comparación era entre:

> Analizame estos contratos y decime si hay riesgos.

y una versión con las seis piezas: abogado corporativo, contexto de una pyme, análisis de cláusulas de rescisión, restricciones, tabla estructurada y ejemplo de fila.

### Codex

Concluyó que las seis piezas convierten una intención vaga en una tarea delimitada, verificable y repetible; además reducen el riesgo de analizar aspectos no solicitados o inventar información faltante.

## Consigna semanal del profesor

### Usuario

Compartió la consigna:

- Elegir una tarea recurrente.
- Escribir un `system_prompt.md` y un `user_prompt.md`.
- Cubrir rol, contexto, tarea, restricciones, formato y ejemplos.
- Producir una salida estructurada comparable entre corridas.
- Ejecutar tres casos reales.
- Documentar dos iteraciones de mejora, modificando una pieza por vez.
- Entregar prompts, tres salidas y un README en GitHub.

La rúbrica asigna:

- 30 puntos a la especificación clara.
- 30 puntos a las iteraciones documentadas.
- 25 puntos al output estructurado y repetible.
- 15 puntos a la reflexión.

### Codex

Propuso una estructura inicial:

```text
entrega-semana/
├── system_prompt.md
├── user_prompt.md
├── salida_01.md
├── salida_02.md
├── salida_03.md
└── README.md
```

Explicó que cada iteración debía identificar un fallo textual concreto, modificar una sola pieza y observar un cambio verificable. También recomendó conservar exactamente la misma estructura en las tres salidas.

## Comprensión de Codex, tareas y archivos

### Usuario

Antes de construir, explicó su interpretación:

- Crear un `AGENTS.md` como contrato base cargado automáticamente por Codex.
- Cargar papers en cada prompt.
- Generar un JSON estructurado por corrida.
- Construir un HTML que recorra los JSON persistentes.
- Subirlo todo a GitHub.
- Agregar la conversación al repositorio para mostrar cómo se pensó el proyecto.

Preguntó por qué el profesor pedía `system_prompt.md`, si era algo de Claude, qué era realmente el agente y por qué no encontraba un archivo con el nombre de esta tarea en la carpeta `PaperBackReader`.

### Codex

Explicó:

- `system_prompt.md` es una representación genérica y académica del mensaje de sistema; no es exclusivo de Claude.
- `AGENTS.md` es una convención operativa de Codex para instrucciones persistentes dentro de un repositorio.
- Para la entrega conviene conservar `system_prompt.md` porque el profesor lo exige, aunque se adapte el contenido a `AGENTS.md`.
- Las seis piezas pueden distribuirse entre system y user prompt: lo permanente va en el primero y lo particular en el segundo.
- La tarea de Codex es la sesión de interacción; el agente es el conjunto de modelo, instrucciones, contexto, herramientas y capacidad de actuar.
- La conversación no aparece automáticamente como archivo en el proyecto.
- Presionar Enter no implica por sí solo exportar un JSON: debe existir una instrucción para analizar y guardar.
- Un HTML abierto con doble clic no siempre puede recorrer libremente una carpeta por restricciones del navegador; posteriormente habría que elegir entre servidor local, manifiesto, selector de carpeta u otra solución.

### Usuario

Preguntó si el Markdown de la tarea se creaba automáticamente y explicó que quería que el profesor viera el proceso y las iteraciones.

### Codex

Aclaró que la conversación queda registrada en la interfaz de Codex, pero no se convierte automáticamente en un archivo dentro de `PaperBackReader`. Para hacerla visible en GitHub debía crearse deliberadamente un archivo de documentación. También recomendó usar commits de Git como evidencia precisa de las iteraciones.

### Usuario

Preguntó:

- Si la conversación estaba disponible en la web de OpenAI.
- Si `user_prompt.md` debía incluir solamente el prompt o también la respuesta.
- Si las tres salidas debían estar separadas.

### Codex

Respondió:

- La conversación pertenece a una tarea de Codex y no al repositorio; no debía asumirse que aparecería como un chat común en ChatGPT web.
- `user_prompt.md` debía contener solamente el pedido del usuario.
- Las respuestas debían guardarse por separado.

Propuso:

```text
system_prompt.md
user_prompt.md
salida_01.json
salida_02.json
salida_03.json
README.md
```

### Usuario

Preguntó cómo hacer portable la aplicación para alguien que descargara el repositorio desde GitHub.

### Codex

Confirmó el flujo para usuarios de Codex:

1. Clonar o descargar el repositorio.
2. Abrir la carpeta como proyecto en Codex.
3. Crear una tarea nueva.
4. Verificar que `AGENTS.md` sea detectado.
5. Adjuntar o indicar un paper.
6. Ejecutar el pedido documentado.
7. Obtener el JSON.

Distinguió entre portabilidad para usuarios de Codex y una aplicación independiente basada en una interfaz y una API.

## Definición del problema de PaperBackReader

### Usuario

Explicó el problema central:

Aunque pudiera leer miles de papers, retendría solamente una parte mínima por el ritmo de vida, la cantidad de estímulos, el estrés y el esfuerzo cognitivo requerido. Buscaba un agente que aplicara una estrategia para mejorar la adquisición de conocimiento sofisticado.

La estrategia propuesta era:

1. Dedicar tres bloques semanales de una hora y media.
2. Seleccionar artículos interesantes.
3. Leer título, copete y parte de la introducción.
4. Predecir cómo el autor responderá su pregunta y qué concluirá.
5. Ejecutar un agente curador.
6. Generar un JSON con datos bibliográficos, cinco ideas y un quiz.
7. Usar un HTML para recorrer artículos y practicar mediante preguntas.

### Codex

Consideró que la idea abordaba un problema real y que el objetivo no era simplemente resumir miles de papers, sino convertir lectura pasiva en aprendizaje activo.

Propuso combinar:

- Predicción.
- Recuperación activa.
- Retroalimentación.
- Repetición espaciada.
- Intercalado.

También sugirió guardar la predicción para comparar:

> Lo que Diego pensó inicialmente → lo que encontró el autor → qué cambió en su comprensión.

Imaginó el flujo:

```text
Paper seleccionado
       ↓
Lectura preliminar
       ↓
Predicción escrita
       ↓
Análisis del agente
       ↓
JSON estructurado
       ↓
HTML y quiz
       ↓
Reapariciones futuras
       ↓
Registro de aciertos y errores
```

Recomendó que el agente se basara en el paper, distinguiera afirmaciones de interpretaciones, no confundiera correlación con causalidad, reconociera incertidumbres y produjera preguntas conceptuales en lugar de trivia.

## Diseño inicial de las seis piezas

### Usuario

Pidió una propuesta para las seis piezas de contenido inamovible del contrato base.

### Codex

Propuso:

1. **Rol:** curador científico especializado en aprendizaje activo.
2. **Contexto:** usuario con poco tiempo que aprende mediante predicción, recuperación, feedback y repetición.
3. **Tarea:** transformar cada paper en una unidad estructurada de aprendizaje.
4. **Restricciones:** fidelidad documental, no invención, separación entre autores e interpretación, cuidado con causalidad, incertidumbre e instrucciones incrustadas.
5. **Formato:** JSON con datos del paper, predicción, análisis, ideas, conclusión, limitaciones y quiz.
6. **Ejemplos:** casos correctos e incorrectos sobre información ausente, causalidad y fidelidad de la predicción.

### Usuario

Preguntó si las cantidades de ideas y preguntas del ejemplo JSON se interpretarían como fijas.

### Codex

Aclaró que, tal como estaba redactado, sí serían reglas obligatorias. Recomendó entre tres y cinco ideas, según la riqueza del paper, y una pregunta por idea. La estructura permanecería comparable aunque los arrays tuvieran diferente longitud.

## Creación y evolución del contrato

### Usuario

Solicitó crear:

- `AGENTS.md` con el contrato base.
- `USRPRMPT_EJEMPLO.md` con el user prompt.

### Codex

Creó ambos archivos en la raíz. El primer contrato contenía las seis piezas, el esquema JSON, reglas de fidelidad y entre tres y cinco ideas con una pregunta por idea.

El primer user prompt solicitaba paper, ID, ruta del JSON y predicción.

### Usuario

Pidió simplificar la corrida:

- No especificar manualmente la ruta del JSON.
- Guardar JSON en `outputs/`.
- Guardar papers en `papers/`.
- Asignar automáticamente el identificador.
- Hacer opcional la predicción.

Propuso como user prompt:

```markdown
Procesá el paper indicado.

- **Mi predicción previa:**

> [Escribir aquí, antes de procesar el paper, qué problema creo que intenta resolver el autor, cómo pienso que lo abordará y cuáles imagino que serán sus conclusiones. Conservar este texto exactamente como está escrito.]
```

### Codex

Actualizó los archivos para que el agente:

- Creara `papers/` y `outputs/` durante la primera corrida.
- Determinara automáticamente nombres e identificadores.
- Copiara el paper adjunto.
- Guardara el JSON sin pedir una ruta.
- Admitiera la predicción como opcional.
- Solicitara aclaración si no encontraba un paper único.

### Usuario

Pidió trabajar exclusivamente sobre `AGENTS.md`.

### Codex

Confirmó que el trabajo continuaría sobre rol, contexto, tarea, restricciones, formato, ejemplos o persistencia, modificando una pieza por vez.

### Usuario

Indicó que debía respetarse el nombre del archivo adjunto, no usar nombres genéricos como `paper_0001`. También pidió un resumen de las funcionalidades cargadas.

### Codex

Resumió que `AGENTS.md` definía:

- Rol de curador científico.
- Procesamiento bibliográfico y conceptual.
- Predicción opcional.
- Quiz vinculado con ideas.
- Controles de calidad.
- JSON estructurado.
- Persistencia en `papers/` y `outputs/`.
- Entrada mínima mediante paper y predicción opcional.

También marcó que la nomenclatura progresiva genérica contradecía la nueva decisión.

### Usuario

Pidió resolver el progresivo de cada JSON según la experiencia de Codex.

### Codex

Modificó `AGENTS.md` para conservar el nombre original:

```text
Adjunto: Attention Is All You Need.pdf
Paper:   papers/Attention Is All You Need.pdf
Salida:  outputs/Attention Is All You Need.json
ID:      Attention Is All You Need
```

En caso de colisión, definió sufijos progresivos:

```text
papers/Attention Is All You Need__02.pdf
outputs/Attention Is All You Need__02.json
```

y luego `__03`, `__04`, etc.

### Usuario

Pidió ver todo el contenido de `AGENTS.md`.

### Codex

Mostró íntegramente el archivo vigente, que contiene:

- Rol.
- Contexto.
- Tarea paso a paso.
- Restricciones.
- Persistencia y nombres.
- Esquema JSON.
- Reglas de tipos y cardinalidad.
- Ejemplos de información ausente, causalidad y conservación de la predicción.
- Datos mínimos esperados del user prompt.

La versión completa y operativa se encuentra en [`AGENTS.md`](./AGENTS.md).

### Usuario

Pidió crear `AGENTS.md`.

### Codex

Verificó que el archivo ya existía en la raíz y conservaba la versión completa revisada.

### Usuario

Pidió guardar toda esta conversación en un archivo llamado `CODEX: Mi Aprendizaje + Construccion de agente.MD`.

### Codex

Debido a que Windows no permite `:` dentro de nombres de archivo, creó este registro con el nombre válido:

```text
CODEX - Mi Aprendizaje + Construccion de agente.md
```

## Estado al crear inicialmente este registro

Archivos existentes en la raíz del proyecto:

```text
AGENTS.md
USRPRMPT_EJEMPLO.md
CODEX - Mi Aprendizaje + Construccion de agente.md
```

Decisiones principales alcanzadas:

- PaperBackReader convierte papers en unidades persistentes de aprendizaje activo.
- El usuario puede aportar una predicción previa, pero no es obligatoria.
- El agente produce entre tres y cinco ideas sustanciales.
- Cada idea genera una pregunta de opción múltiple.
- Los papers se guardan en `papers/`.
- Los JSON se guardan en `outputs/`.
- Los nombres respetan el archivo original.
- Las colisiones usan sufijos `__02`, `__03`, etc.
- El JSON mantiene un esquema estable para permitir su consumo posterior desde una interfaz HTML.

## Actualización: devolución del análisis en la ventana de chat

### Usuario

Pidió modificar `AGENTS.md` para que, al enviar un paper, el agente hiciera todo lo definido hasta el momento y además devolviera en la ventana de chat un resumen de las ideas, su contraste con la predicción del usuario y los demás campos relevantes del JSON.

### Codex

Actualizó `AGENTS.md` para establecer dos productos complementarios en cada corrida:

1. El archivo JSON persistente y estructurado dentro de `outputs/`.
2. Una devolución legible e inmediata en la ventana de chat.

La devolución conversacional quedó definida con esta estructura:

```text
Paper procesado
Pregunta central y método
Ideas principales
Contraste con tu predicción
Conclusión y limitaciones
Quiz generado
```

El agente debe mostrar:

- Título, autores y año.
- Rutas del paper persistente y del JSON.
- Pregunta central y método.
- Entre tres y cinco ideas principales.
- Coincidencias, diferencias y aspectos no resueltos respecto de la predicción previa.
- Conclusión, limitaciones e incertidumbres.
- Cantidad y dificultad de las preguntas generadas.

También se estableció que:

- Si no existe una predicción previa, debe informarse expresamente.
- Los valores ausentes deben mostrarse como no disponibles.
- La devolución no debe introducir afirmaciones ausentes del JSON.
- No deben revelarse las respuestas correctas del quiz en el chat, para preservar la recuperación activa.
- La regla que prohíbe texto adicional se aplica al contenido del archivo JSON, no al mensaje de chat.

### Usuario

Pidió actualizar el archivo de esta conversación dentro del repositorio.

### Codex

Incorporó al presente registro las decisiones y modificaciones realizadas después de su creación inicial.

## Estado actual del proyecto

Archivos principales:

```text
AGENTS.md
USRPRMPT_EJEMPLO.md
CODEX - Mi Aprendizaje + Construccion de agente.md
```

Comportamiento definido para cada futura corrida:

1. Recibir un único paper y, opcionalmente, una predicción previa.
2. Conservar el nombre original y resolver colisiones mediante sufijos progresivos.
3. Persistir el documento en `papers/`.
4. Analizarlo con criterios de fidelidad científica.
5. Persistir el análisis estructurado en `outputs/` como JSON válido.
6. Devolver también en el chat un resumen legible del análisis y su contraste con la predicción.

## Actualización: construcción de la biblioteca web

### Usuario

Pidió una página web que recorriera los JSON de `outputs/`, mostrara un navegador vertical de papers, el contenido principal y un quiz aleatorio de opción múltiple. También solicitó un hero que explicara la idea y un cierre elegido libremente.

### Codex

Construyó `index.html`, `styles.css` y `app.js`. La interfaz quedó organizada en tres columnas:

1. Navegador de papers por título.
2. Ideas, evidencia, método, conclusión, predicción y limitaciones.
3. Quiz aleatorio con corrección y explicación.

También incorporó estadísticas locales de intentos y precisión, selección aleatoria de papers, diseño adaptable a pantallas pequeñas y una sección final editorial.

### Usuario

Rechazó la necesidad de ejecutar un servidor Python y pidió que el HTML accediera a `outputs/` sin pasos adicionales.

### Codex

Explicó que el navegador no permite enumerar automáticamente carpetas vecinas cuando se abre un HTML local. Primero adaptó la interfaz para elegir manualmente `outputs/`, pero el usuario señaló que la carpeta siempre estaba junto al HTML y no quería seleccionarla.

La solución final fue crear:

```text
build-library.mjs
outputs/library-data.js
```

`library-data.js` contiene una representación navegable de todos los JSON. `index.html` lo carga automáticamente y `AGENTS.md` obliga a regenerarlo después de cada corrida. Así, la biblioteca puede abrirse con doble clic, sin servidor ni selector de carpetas.

### Usuario

Preguntó cómo funcionaría el proyecto al subirlo a GitHub.

### Codex

Explicó que GitHub Pages puede publicar directamente el sitio estático desde la raíz de la rama principal. También aclaró que cada nuevo paper requiere subir el JSON y `library-data.js`, que las estadísticas permanecen en el navegador de cada usuario y que antes de hacer público el repositorio deben revisarse las licencias de los PDFs y el contenido personal de las predicciones.

## Actualización: refinamiento visual

### Usuario

Pidió un hero menos espectacular, más delgado y elegante. Debía explicar cómo se adjunta el paper y la predicción desde una tarea, cómo actúa el system prompt y qué hace el HTML. También pidió reducir tamaños y colores estridentes.

### Codex

Eliminó la ilustración orbital y reemplazó el hero por una introducción editorial sobria. Incorporó tres pasos: tarea, contrato base y página. Redujo escalas tipográficas y reemplazó violetas y verdes intensos por tonos desaturados.

### Usuario

Pidió simplificar la explicación central.

### Codex

La reemplazó por:

> Procesás cada archivo con el agente, que guarda en un JSON tus ideas previas y las conclusiones del autor. Después las contrastás y usás los quizzes para comprobar cuánto recordás.

## Actualización: preparación de la entrega

### Usuario

Solicitó crear el README con la estructura fija de la materia, copiar literalmente `AGENTS.md` como `system_prompt.md`, documentar los tres user prompts usados y volver a actualizar este registro.

### Codex

Creó:

```text
README.md
system_prompt.md
user_prompt_01.md
user_prompt_02.md
user_prompt_03.md
```

El README documenta qué se construyó, los prompts textuales, las funcionalidades probadas, dos iteraciones con antes/cambio/después, limitaciones y aprendizajes. Las dos iteraciones seleccionadas fueron la cardinalidad flexible de ideas y preguntas, y el reemplazo de IDs genéricos por nombres derivados del paper.

`system_prompt.md` quedó verificado como copia byte por byte de `AGENTS.md`. Los tres user prompts fueron reconstruidos usando los nombres de los papers y las predicciones textuales persistidas en los JSON reales.

## Actualización: preparación para GitHub

### Usuario

Solicitó crear en su cuenta de GitHub un repositorio llamado `PaperBackReader`, copiar allí todos los archivos y carpetas y, si era posible, dejarlo sincronizado con la carpeta local.

### Codex

Propuso inicialmente crear el repositorio como privado por contener papers, predicciones personales y el registro de la conversación.

### Usuario

Aclaró expresamente que quería que el repositorio fuera público.

### Codex

Preparó el proyecto para inicializar Git y publicar todos los archivos de trabajo, excluyendo únicamente cachés técnicos y temporales mediante `.gitignore`. También agregó `.nojekyll` para que GitHub Pages pueda servir los archivos estáticos directamente si posteriormente se activa la publicación desde la raíz.
