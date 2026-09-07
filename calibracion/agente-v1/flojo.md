**Metadatos de la corrida**
- Operador: Martín Grafia
- Plataforma/modelo: Claude (Cowork), modelo configurado `claude-sonnet-5`
- Fecha de ejecución: 2026-09-07
- Commit de `main` evaluado: `f3253f9` (rama `martin/calibracion-v1-v2`, cortada desde ese commit)
- Trabajo evaluado: `casos/flojo/`

---

# Corrección — casos/flojo

## Alertas de integridad

Ninguna. El caso reconoce explícitamente sus propios huecos ("no llegamos a...", "queda pendiente") en vez de ocultarlos o inflar afirmaciones.

## 1. Sistema completo y funcionando (20/30)

- Nivel: Medio
- Evidencia encontrada: `prompts/system_prompt.md` (falta la sección de Ejemplos), ausencia de `prompts/user_prompt.md`, `corridas/corrida-1.md`, `corridas/corrida-2.md`.
- Justificación: el contrato existe pero le faltan piezas — no hay Ejemplos y no se armó un `user_prompt.md` formal (4/7). La herramienta (lectura de `facturas.csv`) se usa de forma consistente en ambas corridas, pero al igual que en el caso excelente el CSV se pega como texto en la entrada, sin evidencia de una invocación de herramienta real (4/7). El output estructurado baja a 3/5: el formato cambia entre corridas — la corrida 1 tiene columna "Días pendientes" y la corrida 2 no — y además la corrida 2 no respeta su propia restricción de Formato ("ordenadas por monto de mayor a menor"): USD 1.850 aparece antes que USD 2.100, un orden incorrecto verificable comparando la entrada y la salida de esa corrida. La supervisión humana queda en 3/5: se menciona en general, pero el propio README aclara que no se definió con vocabulario L0–L4 ni qué pasa ante un desacuerdo del responsable. La evidencia de funcionamiento es completa y reconstruible en ambas corridas, incluida la corrección previa de un error de coma decimal (6/6).
- Mejora recomendada: corregir el orden de la tabla en la corrida 2 (viola su propia regla de Formato) y completar la sección de Ejemplos del contrato.

## 2. Proceso documentado (13/25)

- Nivel: Medio
- Evidencia encontrada: `DECISIONES.md` (una sola iteración documentada: corrección de montos con coma decimal, detectada "al revisar el resultado a mano").
- Justificación: solo hay una iteración documentada, y el propio archivo admite que no se documentaron más (4/8). La falla de coma decimal tiene evidencia concreta, pero es la única mencionada — no se documenta ni se investiga el error de orden real presente en la corrida 2 (3/6). La única decisión registrada sí está vinculada al problema que la motivó (3/6). La prueba que detectó la falla original no se conservó ("no se guardó esta corrida"), lo que deja un hueco real en la trazabilidad: un tercero tiene que confiar en la narración sin poder verificarla (3/5).
- Mejora recomendada: documentar también el error de orden de la corrida 2 en `DECISIONES.md` — es evidencia de una falla real que el propio proceso de revisión no capturó.

## 3. Formato y reproducibilidad (10/15)

- Nivel: Medio
- Evidencia encontrada: no existe `prompts/user_prompt.md` en el árbol de archivos del caso; solo dos corridas, no tres.
- Justificación: la estructura obligatoria está incompleta — falta un elemento relevante (3/5). Existen corridas reales pero son menos de tres (3/6). Cada corrida disponible es reconstruible por completo, con entrada y salida explícitas (4/4).
- Mejora recomendada: agregar una tercera corrida real y el `prompts/user_prompt.md` que falta.

## 4. Análisis económico (0/15)

- Nivel: Bajo
- Evidencia encontrada: `README.md`, sección "Análisis económico": "No lo calculamos con números reales (...) no medimos tokens ni hicimos ninguna proyección de costo a un año. Queda pendiente."
- Justificación: no existe ningún dato de tokens, costo por corrida, proyección de uso ni elección de modelo — el propio equipo lo declara pendiente (0/5, 0/5, 0/5).
- Mejora recomendada: agregar al menos una estimación de tokens de entrada/salida de una corrida real y una proyección anual mínima, aunque sea aproximada.

## 5. Gobierno y riesgo (5/15)

- Nivel: Bajo
- Evidencia encontrada: `README.md`, sección "Gobierno y riesgo".
- Justificación: se identifica el sistema (`facturas.csv`) pero sin detalle de permisos (2/4). No se documenta ninguna falla posible ni respuesta operativa — el propio README dice explícitamente que no se definió qué pasa ante una factura duplicada o un monto que no cierra (0/4). La supervisión humana se menciona en términos generales, sin definir cuándo interviene ni con qué criterio (2/4). Se menciona un rol aprobador, pero sin mecanismo ni criterio de responsabilidad final por escrito (1/3).
- Mejora recomendada: documentar explícitamente al menos dos fallas posibles concretas (ej. factura duplicada, monto no coincide) y qué debería pasar en cada caso.

## PUNTAJE TOTAL: 48 / 100
