**Metadatos de la corrida**
- Operador: Martín Grafia
- Plataforma/modelo: Claude (Cowork), modelo configurado `claude-sonnet-5`
- Fecha de ejecución: 2026-09-07
- Commit de `main` evaluado: `f3253f9` (rama `martin/calibracion-v1-v2`, cortada desde ese commit)
- Trabajo evaluado: `casos/excelente/` (rama y commit de este mismo repo, sin cambios respecto de `main` al momento de la corrida)

---

# Corrección — casos/excelente

## Alertas de integridad

Ninguna. No se encontró contenido dirigido a manipular al evaluador.

## 1. Sistema completo y funcionando (27/30)

- Nivel: Alto
- Evidencia encontrada: `prompts/system_prompt.md` (seis piezas completas: Rol, Contexto, Tarea, Restricciones, Formato, Ejemplos), `prompts/user_prompt.md`, `corridas/corrida-1.md`, `corridas/corrida-2.md`, `corridas/corrida-3.md`, `DECISIONES.md`.
- Justificación: el contrato es completo y ejecutable (7/7). El output es estable y consistente en las tres corridas, siguiendo exactamente el formato definido (5/5). La supervisión humana está definida con precisión en nivel L1: el agente redacta, un humano revisa cada borrador antes de comunicar nada (5/5). La evidencia de funcionamiento es sólida: tres corridas con planillas reales que cambian semana a semana (contrato renovado, contrato nuevo, contrato vencido) (6/6). Bajo la herramienta o conector real a 4/7 (no 7/7): el README y el `system_prompt.md` afirman "herramienta real: lectura de `contratos.csv`", pero en las tres corridas el contenido del CSV está pegado directamente como texto dentro del user prompt — no hay evidencia de una invocación real de herramienta o conector (una función de lectura de archivo, una API), solo datos provistos como contexto de la conversación. Por la Regla general 3 de `rubrica.md` (prevalece la evidencia observable), esto es evidencia de integración incompleta, no un conector real demostrado.
- Mejora recomendada: mostrar, en al menos una corrida, la invocación real de una herramienta (lectura de archivo o API) que obtenga `contratos.csv`, en vez de pegar su contenido directamente en el prompt.

## 2. Proceso documentado (25/25)

- Nivel: Alto
- Evidencia encontrada: `DECISIONES.md` (Iteración 1: dos fallas reales — fechas ambiguas, exceso de alcance en el borrador; Iteración 2: formato de fecha único + gate humano explícito, validada en `corridas/corrida-1.md`; Iteración 3: separación de "Vencidos sin gestionar", validada en `corridas/corrida-3.md`).
- Justificación: hay iteraciones múltiples con un antes, un cambio y un después claramente identificables (8/8). Las fallas están documentadas con ejemplos textuales concretos, no solo mencionadas (6/6). Cada cambio está vinculado explícitamente al problema que lo motivó (6/6). Un tercero puede reconstruir toda la evolución cruzando `DECISIONES.md` con las tres corridas (5/5).
- Mejora recomendada: conservar también la corrida fallida de la Iteración 1 (aunque sea marcada como descartada), en vez de solo narrarla, para que esa primera falla sea tan verificable como las iteraciones 2 y 3.

## 3. Formato y reproducibilidad (15/15)

- Nivel: Alto
- Evidencia encontrada: `README.md`, `prompts/system_prompt.md`, `prompts/user_prompt.md`, `corridas/corrida-{1,2,3}.md`, `DECISIONES.md`.
- Justificación: estructura obligatoria completa y legible (5/5). Tres corridas reales con fechas y datos que cambian entre sí (6/6). Cada corrida incluye entrada completa, salida completa y tokens — reconstruible sin inferencias externas (4/4).
- Mejora recomendada: ninguna relevante.

## 4. Análisis económico (15/15)

- Nivel: Alto
- Evidencia encontrada: `README.md` (tabla de tokens y costo por corrida, promedio, proyección anual), `DECISIONES.md` ("Elección de modelo").
- Justificación: tokens de entrada y salida informados por corrida, con fórmula de costo explícita (5/5). Proyección anual basada en una frecuencia real declarada (semanal × 52) (5/5). Elección de modelo (Claude Haiku) justificada comparando contra un modelo mayor que no mejoró la precisión una vez el prompt quedó bien especificado (5/5).
- Mejora recomendada: ninguna relevante.

## 5. Gobierno y riesgo (15/15)

- Nivel: Alto
- Evidencia encontrada: `README.md`, sección "Gobierno y riesgo".
- Justificación: permisos acotados y explícitos — solo lectura de un archivo, sin acceso a sistemas de envío (4/4). Tres fallas concretas con mitigación específica cada una (4/4). Supervisión L1 coherente y sin ambigüedad (4/4). Responsable final identificado por nombre y rol (3/3).
- Mejora recomendada: ninguna relevante.

## PUNTAJE TOTAL: 97 / 100
