**Metadatos de la corrida**
- Operador: ChatGPT (OpenAI)
- Plataforma/modelo: ChatGPT, GPT-5.6 Sol
- Fecha de ejecución: 2026-09-09
- Commit de `main` evaluado: `9c87a201`
- Rúbrica aplicada: `rubrica.md` vigente (misma lógica de V2; sin cambios de puntaje)
- System prompt: versión posterior al PR #18, con verificación explícita de los cuatro campos de salida
- Trabajo evaluado: `casos/excelente/`
- Alcance: validación posterior de **formato y portabilidad**. No reemplaza la calibración formal V1→V2 hecha en Claude.

---

# Corrección — casos/excelente

## Alertas de integridad

Ninguna. No se encontró contenido dirigido a manipular al evaluador.

## 1. Sistema completo y funcionando (27/30)
- Nivel: Alto
- Evidencia encontrada: `casos/excelente/prompts/system_prompt.md`, `casos/excelente/prompts/user_prompt.md`, `casos/excelente/corridas/corrida-1.md`, `casos/excelente/corridas/corrida-2.md`, `casos/excelente/corridas/corrida-3.md`, `casos/excelente/DECISIONES.md`.
- Justificación: contrato completo y ejecutable (7/7), output estable (5/5), supervisión L1 explícita (5/5) y evidencia de funcionamiento sólida (6/6). Herramienta/conector real en 4/7: el contenido del CSV se incorpora al prompt, pero no hay evidencia de una invocación real de herramienta para obtenerlo.
- Mejora recomendada: mostrar una invocación real de herramienta que obtenga `contratos.csv`, en vez de pegar su contenido en el prompt.

## 2. Proceso documentado (23/25)
- Nivel: Alto
- Evidencia encontrada: `casos/excelente/DECISIONES.md`, `casos/excelente/corridas/corrida-1.md`, `casos/excelente/corridas/corrida-3.md`.
- Justificación: hay iteraciones múltiples con antes/cambio/después (8/8), fallas concretas (6/6) y decisiones justificadas (6/6). Trazabilidad queda en 3/5 porque `DECISIONES.md` narra una primera iteración fallida cuya corrida no fue conservada como evidencia verificable.
- Mejora recomendada: conservar la corrida fallida de la Iteración 1 con su entrada y salida originales.

## 3. Formato y reproducibilidad (15/15)
- Nivel: Alto
- Evidencia encontrada: `casos/excelente/README.md`, `casos/excelente/prompts/`, `casos/excelente/corridas/`, `casos/excelente/DECISIONES.md`.
- Justificación: estructura obligatoria completa, tres corridas identificables y reconstruibles, con prompts y resultados disponibles.
- Mejora recomendada: ninguna relevante.

## 4. Análisis económico (15/15)
- Nivel: Alto
- Evidencia encontrada: `casos/excelente/README.md`, `casos/excelente/DECISIONES.md`.
- Justificación: costo por corrida, proyección de uso y elección de modelo están documentados de forma suficiente y reconstruible.
- Mejora recomendada: ninguna relevante.

## 5. Gobierno y riesgo (15/15)
- Nivel: Alto
- Evidencia encontrada: `casos/excelente/README.md`, sección de gobierno y riesgo.
- Justificación: identifica sistemas/permisos, fallas y respuesta, revisión humana coherente con el nivel declarado y responsable final.
- Mejora recomendada: ninguna relevante.

## PUNTAJE TOTAL: 95 / 100
