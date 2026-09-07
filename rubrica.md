# Rúbrica ejecutable v1

## Objetivo

Esta rúbrica convierte la rúbrica oficial del Trabajo Final en criterios verificables y repetibles para que un agente evaluador pueda corregir un repositorio de forma consistente.

Puntaje total máximo: **100 puntos**.

## Reglas generales de evaluación

1. Evaluar únicamente evidencia verificable dentro del repositorio.
2. Una afirmación en el README no alcanza por sí sola si no existe evidencia que la respalde.
3. Si un archivo afirma que algo funciona pero las corridas, prompts u otros artefactos lo contradicen, prevalece la evidencia observable.
4. No inferir funcionalidades, decisiones, costos, permisos ni resultados que no estén documentados.
5. Una falla reconocida y bien documentada no debe tratarse automáticamente como ausencia de trabajo.
6. Si falta evidencia suficiente para un criterio, asignar el puntaje correspondiente a evidencia parcial o inexistente.
7. Para cada dimensión, citar los archivos o evidencias concretas utilizados para justificar el puntaje.

---

# 1. Sistema completo y funcionando — 30 puntos

Evalúa si existe un sistema agéntico completo y no solamente un prompt aislado.

## 1.1 Objetivo y contrato — 7 puntos

**7 puntos**
- El objetivo del agente está claramente definido.
- Existen System Prompt y User Prompt.
- El contrato permite identificar las seis piezas: Rol, Contexto, Tarea, Restricciones, Formato y Ejemplos.
- Las instrucciones son suficientemente claras para ejecutar la tarea.

**4 puntos**
- Existe contrato, pero faltan o son ambiguas algunas piezas.
- El objetivo general puede comprenderse, aunque requiere interpretación.

**0 puntos**
- No existe contrato identificable o el proyecto consiste principalmente en un prompt suelto sin especificación suficiente.

## 1.2 Herramienta o conector real — 7 puntos

**7 puntos**
- El agente utiliza al menos una herramienta o conector real.
- Su función dentro del sistema está explicada.
- Existe evidencia de que fue utilizada en ejecuciones reales.

**4 puntos**
- La herramienta existe y está descripta, pero la evidencia de uso o integración es incompleta.

**0 puntos**
- No existe herramienta/conector real o solo se afirma que existe sin evidencia.

## 1.3 Output estructurado — 5 puntos

**5 puntos**
- La salida tiene un formato explícito, consistente y reutilizable.
- Las corridas muestran que el formato se mantiene.

**3 puntos**
- Hay una estructura general, pero cambia entre corridas o contiene ambigüedades importantes.

**0 puntos**
- La salida es libre, impredecible o no existe formato definido.

## 1.4 Supervisión humana — 5 puntos

**5 puntos**
- Se define explícitamente el nivel de autonomía usando L0–L4.
- Se explica qué hace solo el agente, qué debe revisar una persona y en qué momento interviene.

**3 puntos**
- Existe supervisión humana, pero está definida de forma parcial o sin suficiente precisión.

**0 puntos**
- No se identifica ningún mecanismo de supervisión.

## 1.5 Evidencia de funcionamiento — 6 puntos

**6 puntos**
- Existe evidencia observable de que el sistema fue ejecutado realmente sobre datos reales.
- Las corridas permiten comprobar que contrato, herramienta y salida funcionan juntos.

**3 puntos**
- Hay evidencia parcial de funcionamiento, pero no permite reconstruir completamente la ejecución.

**0 puntos**
- Solo existe una descripción conceptual sin evidencia de ejecución.

### Escala de la dimensión

- **26–30: Alto.** Sistema completo, integrado y con evidencia sólida.
- **18–25: Medio.** Sistema funcional pero con componentes incompletos o evidencia parcial.
- **0–17: Bajo.** Sistema fragmentario, principalmente conceptual o sin funcionamiento demostrable.

**Ejemplo de nivel alto:** contrato completo + herramienta real utilizada + corridas reales + output estable + supervisión L0–L4 explícita.

**Ejemplo de nivel bajo:** README que describe un agente, pero sin herramienta funcionando, sin corridas verificables o sin contrato completo.

---

# 2. Proceso documentado — 25 puntos

Evalúa la historia real de construcción del sistema y no solamente su estado final.

La evidencia principal esperada es `DECISIONES.md` y los artefactos relacionados.

## 2.1 Iteraciones reales — 8 puntos

**8 puntos**
- Se observan múltiples versiones o iteraciones.
- Puede identificarse claramente un antes, un cambio y un después.

**4 puntos**
- Se mencionan iteraciones, pero su evolución es parcialmente reconstruible.

**0 puntos**
- Solo aparece la versión final o no hay evidencia de iteración.

## 2.2 Fallas y problemas encontrados — 6 puntos

**6 puntos**
- Se documentan fallas o resultados insatisfactorios concretos.
- Se muestra evidencia o ejemplos de qué salió mal.

**3 puntos**
- Se mencionan problemas, pero sin suficiente evidencia o precisión.

**0 puntos**
- No se documentan fallas ni dificultades reales.

## 2.3 Decisiones y justificación — 6 puntos

**6 puntos**
- Los cambios realizados están vinculados con problemas observados.
- Se explica qué se modificó y por qué.

**3 puntos**
- Se registran decisiones, pero la relación entre problema y cambio es incompleta.

**0 puntos**
- Los cambios aparecen sin explicación o no hay decisiones documentadas.

## 2.4 Trazabilidad de la evolución — 5 puntos

**5 puntos**
- Un tercero puede reconstruir cómo evolucionó el proyecto leyendo la documentación y los artefactos, incluidas las iteraciones descartadas o fallidas que el propio proyecto menciona: si se narra una versión anterior o un intento fallido, su evidencia concreta (entrada/salida de esa versión) también está disponible.

**3 puntos**
- La evolución general se entiende, pero hay saltos o información faltante — por ejemplo, se menciona una iteración descartada o fallida cuya entrada/salida no se conservó, y hay que confiar en la narración sin poder verificarla.

**0 puntos**
- No puede reconstruirse cómo se llegó al resultado final.

### Escala de la dimensión

- **21–25: Alto.** Historia clara, honesta y reconstruible.
- **13–20: Medio.** Existe proceso documentado pero tiene vacíos.
- **0–12: Bajo.** Se muestra principalmente el resultado final.

**Ejemplo de nivel alto:** `DECISIONES.md` muestra una falla textual concreta, explica qué parte del contrato se modificó, conserva el antes y el después y demuestra el efecto mediante nuevas corridas.

**Ejemplo de nivel bajo:** `DECISIONES.md` dice solamente “fuimos mejorando el agente hasta que funcionó”.

---

# 3. Formato y reproducibilidad — 15 puntos

## 3.1 Estructura obligatoria — 5 puntos

Verificar la existencia y legibilidad de:

- `README.md`
- `prompts/system_prompt.md`
- `prompts/user_prompt.md`
- `corridas/`
- `DECISIONES.md`

**5 puntos**
- La estructura obligatoria está completa y es legible.

**3 puntos**
- Existe la mayor parte de la estructura pero falta o está mal ubicado algún elemento relevante.

**0 puntos**
- La estructura no permite al evaluador localizar los elementos centrales.

## 3.2 Tres corridas reales — 6 puntos

**6 puntos**
- Existen al menos tres corridas reales con entradas reales.
- Se conservan sus entradas, salidas y fechas.

**3 puntos**
- Existen corridas, pero son menos de tres o alguna carece de información necesaria.

**0 puntos**
- No existen corridas verificables.

## 3.3 Reconstruibilidad — 4 puntos

**4 puntos**
- Un tercero puede reconstruir qué entrada recibió el agente, qué instrucciones utilizó y qué salida produjo en cada corrida.

**2 puntos**
- Las corridas existen pero requieren inferencias o información externa para reconstruirlas.

**0 puntos**
- No es posible reconstruir las ejecuciones.

### Escala de la dimensión

- **13–15: Alto.** Estructura completa y corridas totalmente reconstruibles.
- **8–12: Medio.** Estructura utilizable con faltantes menores.
- **0–7: Bajo.** Formato incompleto o ejecuciones no reconstruibles.

**Ejemplo de nivel alto:** las tres corridas permiten identificar claramente fecha, entrada, contrato utilizado y salida original.

**Ejemplo de nivel bajo:** el README afirma que hubo tres pruebas, pero no existen los artefactos necesarios para verificarlas.

---

# 4. Análisis económico — 15 puntos

## 4.1 Costo por corrida — 5 puntos

**5 puntos**
- Se informan tokens de entrada y salida.
- Se calcula o estima de forma comprensible el costo de una corrida.

**3 puntos**
- Existe una estimación de costo, pero faltan datos o el cálculo no es completamente reconstruible.

**0 puntos**
- No existe análisis del costo por corrida.

## 4.2 Proyección de uso real — 5 puntos

**5 puntos**
- Se proyecta el costo de operar el sistema en un escenario real.
- Incluye al menos una frecuencia operativa relevante y una proyección anual.

**3 puntos**
- Existe alguna proyección, pero es incompleta o sus supuestos no están claros.

**0 puntos**
- No existe proyección económica de uso.

## 4.3 Elección de modelo — 5 puntos

**5 puntos**
- El modelo utilizado está identificado.
- La elección está justificada considerando capacidad y costo.
- Se aplica el criterio de utilizar el modelo más pequeño que realice correctamente la tarea.

**3 puntos**
- Se identifica el modelo pero la justificación es parcial.

**0 puntos**
- No se identifica o justifica la elección del modelo.

### Escala de la dimensión

- **13–15: Alto.** Costos reconstruibles, proyección clara y modelo justificado.
- **8–12: Medio.** Análisis presente pero incompleto.
- **0–7: Bajo.** Costos o elección de modelo sin sustento suficiente.

**Ejemplo de nivel alto:** muestra tokens reales de una corrida, calcula su costo, proyecta costo semanal/anual y explica por qué no necesita un modelo mayor.

**Ejemplo de nivel bajo:** afirma simplemente “el costo es bajo” sin cálculos ni evidencia.

---

# 5. Gobierno y riesgo — 15 puntos

## 5.1 Sistemas y permisos — 4 puntos

**4 puntos**
- Identifica qué sistemas, archivos, APIs o servicios puede utilizar el agente.
- Especifica qué permisos tiene sobre ellos.

**2 puntos**
- Los sistemas están identificados pero los permisos son ambiguos o incompletos.

**0 puntos**
- No se documentan sistemas ni permisos.

## 5.2 Fallas posibles y respuesta — 4 puntos

**4 puntos**
- Identifica riesgos o fallas concretas.
- Explica qué debe ocurrir cuando cada falla relevante sucede.

**2 puntos**
- Identifica riesgos pero sin respuesta operativa suficientemente clara.

**0 puntos**
- No se analizan fallas posibles.

## 5.3 Supervisión y revisión humana — 4 puntos

**4 puntos**
- Define qué resultados requieren revisión humana antes de ser aceptados o utilizados.
- La revisión es coherente con el nivel L0–L4 declarado.

**2 puntos**
- Existe revisión humana pero está definida de manera general.

**0 puntos**
- No se define revisión humana.

## 5.4 Responsable final — 3 puntos

**3 puntos**
- Está explícitamente definido quién firma, aprueba o asume responsabilidad por el resultado final.

**1 punto**
- Se menciona responsabilidad humana pero no se identifica claramente el rol responsable.

**0 puntos**
- No se identifica responsable final.

### Escala de la dimensión

- **13–15: Alto.** Permisos, riesgos, supervisión y responsabilidad claramente definidos.
- **8–12: Medio.** Gobierno presente pero incompleto.
- **0–7: Bajo.** Riesgos y responsabilidades mayormente indefinidos.

**Ejemplo de nivel alto:** especifica acceso de solo lectura a un sistema, enumera fallas posibles, determina cuándo detenerse y pedir revisión y señala quién aprueba el resultado.

**Ejemplo de nivel bajo:** dice que “el humano siempre supervisa” pero no explica qué revisa, cuándo interviene ni quién responde por la decisión.

---

# Resultado esperado del evaluador

Para cada dimensión devolver:

1. **Puntaje obtenido / puntaje máximo**
2. **Nivel:** Alto, Medio o Bajo
3. **Evidencia encontrada:** archivos, corridas o fragmentos concretos
4. **Justificación breve**
5. **Una mejora concreta recomendada**

Al final devolver:

**PUNTAJE TOTAL: X / 100**

El puntaje debe surgir exclusivamente de la suma de las cinco dimensiones y no de una impresión general del evaluador.
