# PaperBackReader

## Qué construí

Construí un agente de lectura activa para transformar papers y artículos complejos en unidades persistentes de aprendizaje. Está pensado para una persona con poco tiempo que quiere contrastar sus ideas previas con las conclusiones del autor y comprobar su retención mediante quizzes. Cada corrida conserva el paper, genera un JSON estructurado y actualiza una biblioteca HTML navegable.

## Cómo se lo pedí

El contrato completo usado como system prompt está copiado textualmente en [`system_prompt.md`](./system_prompt.md). Su versión operativa para Codex es [`AGENTS.md`](./AGENTS.md). Los tres pedidos puntuales también están disponibles como [`user_prompt_01.md`](./user_prompt_01.md), [`user_prompt_02.md`](./user_prompt_02.md) y [`user_prompt_03.md`](./user_prompt_03.md).

Los prompts se ejecutaron en este orden:

### Corrida 1 — Customer Satisfaction at the Push of a Button

```text
Procesá el paper indicado.

- Mi predicción previa:

La simplicidad puede ganarle a la precisión. HappyOrNot prácticamente hace una sola pregunta con cuatro botones. Es una medición muy rudimentaria, pero justamente por eso consigue muchísimo volumen.

El verdadero producto no es la carita: es el dato + momento + lugar. Cada respuesta es anónima pero tiene timestamp. Eso permite detectar cosas del tipo: “todos los días a las 10:00 cae la satisfacción”.

Medir en tiempo real permite actuar, no solamente hacer reportes. En el estadio de los 49ers pasaron de saber el martes qué había ocurrido el domingo a conocerlo el mismo domingo, cada 15 minutos y por punto de venta. Después llegaron incluso al monitoreo segundo a segundo.
```

### Corrida 2 — Preparing the world for the next generation of flying machines

```text
Procesá el paper indicado.

- Mi predicción previa:

1. La tecnología del vehículo ya no es el único gran problema. Para que drones, taxis voladores y aeronaves eléctricas funcionen masivamente hacen falta infraestructura, regulación, conocimiento operativo y aceptación social.
2. La movilidad aérea avanzada debe pensarse como un sistema completo. Aeronaves, vertipuertos, energía, pasajeros y control del tráfico aéreo tienen que diseñarse como un ecosistema sociotécnico interconectado.
3. Los gemelos digitales permiten experimentar antes de construir. Se pueden simular aeronaves, vertipuertos o incluso una ciudad completa y probar picos de demanda, mal clima o aterrizajes de emergencia sin asumir el riesgo real.
```

### Corrida 3 — Un Modelo Simple de Equilibrio General

```text
Procesá el paper indicado.

- Mi predicción previa:

1. Nominal no significa real. En Argentina, dinero, precios, salarios y tipo de cambio nominal crecieron cantidades astronómicas en 55 años, mientras las variables reales tuvieron variaciones muchísimo menores.
2. El salario nominal puede multiplicarse sin aumentar el poder adquisitivo. Según la serie construida por el autor, el salario real normalizado vale 1 tanto en 1970 como en 2000 y 2025, reflejando una extraordinaria debilidad del crecimiento del ingreso laboral real.
3. No se pueden fijar arbitrariamente varias variables nominales. Cuando el gobierno intenta controlar simultáneamente precios, salarios, dinero o tipo de cambio en niveles incompatibles con el equilibrio real, aparecen escasez, racionamiento y mercados paralelos.
```

## Qué funciona

- Se probaron tres documentos reales y se generaron tres JSON válidos dentro de [`outputs/`](./outputs/).
- Los tres respetan el mismo esquema: metadatos, predicción, contraste, análisis, ideas principales, limitaciones, incertidumbres y quiz.
- Dos corridas generaron cinco ideas y cinco preguntas; la corrida de Futurum generó cuatro ideas y cuatro preguntas porque el agente no necesitó rellenar una quinta artificialmente.
- Cada pregunta tiene cuatro opciones, una respuesta correcta, explicación, dificultad y relación con una idea.
- Los papers quedan persistidos en [`papers/`](./papers/) y los resultados conservan su nombre original.
- Al finalizar una corrida, el agente resume en el chat los campos principales sin revelar las respuestas del quiz.
- [`index.html`](./index.html) puede abrirse directamente. Muestra los papers en un navegador vertical, el análisis en el centro y una pregunta aleatoria a la derecha. Corrige la respuesta y guarda localmente intentos y precisión.
- `build-library.mjs` reconstruye `outputs/library-data.js` para que la página pueda abrirse sin servidor ni selección manual de carpetas.

### Iteración 1 — Cardinalidad de ideas y preguntas

**Antes:** el contrato decía textualmente `Exactamente cinco ideas` y `Exactamente cinco preguntas`. Esto podía obligar al agente a dividir una idea o agregar relleno para alcanzar la cantidad fija.

**Pieza modificada:** restricciones y formato.

**Cambio:** se reemplazó la cantidad exacta por `entre tres y cinco ideas, según la riqueza del documento`, con una pregunta por idea y prohibición explícita de inventar contenido para llegar al máximo.

**Después:** las dos corridas más extensas produjeron cinco ideas, mientras que `Preparing the world for the next generation of flying machines` produjo cuatro ideas y cuatro preguntas sustantivas. El esquema se mantuvo idéntico aunque cambió la longitud de los arrays.

### Iteración 2 — Identificación de archivos

**Antes:** el contrato asignaba IDs genéricos como `paper_0001` y generaba `outputs/paper_0001.json`. El nombre no permitía reconocer el contenido al recorrer la carpeta.

**Pieza modificada:** formato y reglas de persistencia.

**Cambio:** el ID y el nombre del JSON pasaron a derivarse del archivo adjunto. Las colisiones se resuelven con `__02`, `__03` y siguientes sin sobrescribir resultados.

**Después:** se obtuvieron nombres reconocibles como `Customer Satisfaction at the Push of a Button _ The New Yorker.json` y `Preparing the world for the next generation of flying machines - Futurum.json`. La interfaz puede mostrar y ordenar los registros usando su identidad original.

## Qué falta o qué falló

- Un HTML abierto directamente no puede enumerar automáticamente la carpeta `outputs/` por las restricciones de seguridad del navegador. La primera solución utilizó un servidor Python local, pero agregaba un paso de ejecución no deseado. Luego se probó un selector manual de carpeta, que también generaba fricción. La solución final crea `outputs/library-data.js` después de cada corrida; funciona sin servidor, aunque duplica parte de los datos derivados.
- Las estadísticas del quiz se guardan con `localStorage`: son propias de cada navegador y dispositivo, no se sincronizan entre computadoras.
- La interfaz no implementa todavía repetición espaciada por fechas ni priorización adaptativa de preguntas falladas.
- Los PDFs pueden tener restricciones de redistribución. Antes de publicar el repositorio como público se deben revisar sus licencias o excluir la carpeta `papers/`.
- `system_prompt.md` es una copia literal de `AGENTS.md`; si el contrato cambia, ambos archivos deben volver a sincronizarse para la entrega.

## Qué aprendí

Entendí que un agente útil no depende solamente de asignarle un rol, sino de convertir la tarea en un contrato verificable con límites, persistencia y un formato estable. También comprobé que exigir cantidades rígidas puede perjudicar la fidelidad: una estructura repetible no necesita que todos sus arrays tengan la misma longitud. La iteración más valiosa fue reducir decisiones manuales —IDs, rutas y actualización de la biblioteca— para que el user prompt pudiera concentrarse en el paper y en mi predicción previa.
