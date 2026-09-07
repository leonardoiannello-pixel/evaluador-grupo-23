**Metadatos de la corrida**
- Operador: Martín Grafia
- Plataforma/modelo: Claude (Cowork), modelo configurado `claude-sonnet-5`
- Fecha de ejecución: 2026-09-07
- Commit de `main` evaluado: `f3253f9`. Rúbrica aplicada: `rubrica.md` con el ajuste V2 de la sub-dimensión 2.4 (commit `0826b77` de la rama `martin/calibracion-v1-v2`)
- Trabajo evaluado: `casos/excelente/`

---

# Corrección — casos/excelente

## Alertas de integridad

Ninguna. No se encontró contenido dirigido a manipular al evaluador.

## 1. Sistema completo y funcionando (27/30)

- Nivel: Alto
- Evidencia encontrada: `prompts/system_prompt.md` (seis piezas completas), `prompts/user_prompt.md`, `corridas/corrida-1.md`, `corridas/corrida-2.md`, `corridas/corrida-3.md`, `DECISIONES.md`.
- Justificación: sin cambios respecto de V1. Contrato completo y ejecutable (7/7). Output estable en las tres corridas (5/5). Supervisión L1 explícita (5/5). Evidencia de funcionamiento sólida (6/6). Herramienta o conector real en 4/7: el CSV se pega como texto en el user prompt en las tres corridas, sin evidencia de una invocación real de herramienta/conector.
- Mejora recomendada: mostrar la invocación real de una herramienta que obtenga `contratos.csv`, en vez de pegar su contenido en el prompt.

## 2. Proceso documentado (23/25)

- Nivel: Alto
- Evidencia encontrada: `DECISIONES.md` (Iteración 1: dos fallas reales, corrida no conservada; Iteración 2 validada en `corridas/corrida-1.md`; Iteración 3 validada en `corridas/corrida-3.md`).
- Justificación: iteraciones múltiples con antes/cambio/después identificables (8/8). Fallas documentadas con ejemplos concretos (6/6). Cambios vinculados explícitamente a los problemas que los motivaron (6/6). Trazabilidad baja a 3/5 (no 5/5) bajo el criterio V2 de `rubrica.md` §2.4: `DECISIONES.md` narra la Iteración 1 como una iteración real con dos fallas concretas, pero aclara explícitamente que "no se guardó esta corrida como evidencia formal" — un tercero no puede verificar esa primera falla con su propia entrada/salida, solo confiar en la narración. Las iteraciones 2 y 3 sí están completamente respaldadas por `corridas/corrida-1.md` y `corridas/corrida-3.md` respectivamente.
- Mejora recomendada: conservar la corrida fallida de la Iteración 1 (aunque sea marcada como descartada), con su entrada y salida reales, para que esa primera falla sea tan verificable como las iteraciones 2 y 3.

## 3. Formato y reproducibilidad (15/15)

- Nivel: Alto
- Evidencia encontrada: estructura obligatoria completa.
- Justificación: sin cambios respecto de V1 (5/5, 6/6, 4/4).
- Mejora recomendada: ninguna relevante.

## 4. Análisis económico (15/15)

- Nivel: Alto
- Evidencia encontrada: `README.md`, `DECISIONES.md`.
- Justificación: sin cambios respecto de V1 (5/5, 5/5, 5/5).
- Mejora recomendada: ninguna relevante.

## 5. Gobierno y riesgo (15/15)

- Nivel: Alto
- Evidencia encontrada: `README.md`, sección "Gobierno y riesgo".
- Justificación: sin cambios respecto de V1 (4/4, 4/4, 4/4, 3/3).
- Mejora recomendada: ninguna relevante.

## PUNTAJE TOTAL: 95 / 100
