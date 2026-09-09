**Metadatos de la corrida**
- Operador: ChatGPT (OpenAI)
- Plataforma/modelo: ChatGPT, GPT-5.6 Sol
- Fecha de ejecución: 2026-09-09
- Commit de `main` evaluado: `9c87a201`
- Rúbrica aplicada: `rubrica.md` vigente (misma lógica de V2; sin cambios de puntaje)
- System prompt: versión posterior al PR #18, con verificación explícita de los cuatro campos de salida
- Trabajo evaluado: `casos/flojo/`
- Alcance: validación posterior de **formato y portabilidad**. No reemplaza la calibración formal V1→V2 hecha en Claude.

---

# Corrección — casos/flojo

## Alertas de integridad

Ninguna.

## 1. Sistema completo y funcionando (20/30)
- Nivel: Medio
- Evidencia encontrada: `casos/flojo/README.md`, `casos/flojo/prompts/system_prompt.md`, `casos/flojo/corridas/corrida-1.md`, `casos/flojo/corridas/corrida-2.md`.
- Justificación: contrato incompleto, porque falta la pieza Ejemplos y no existe `prompts/user_prompt.md` (4/7). La lectura de `facturas.csv` está descripta y usada como insumo, pero sin evidencia de una invocación real de herramienta/conector (4/7). El output cambia entre corridas (3/5). Hay supervisión humana general, pero sin L0–L4 (3/5). Las dos corridas existentes muestran funcionamiento (6/6).
- Mejora recomendada: completar Ejemplos y agregar `prompts/user_prompt.md`, además de estabilizar el formato de salida.

## 2. Proceso documentado (13/25)
- Nivel: Medio
- Evidencia encontrada: `casos/flojo/DECISIONES.md`, `casos/flojo/corridas/corrida-1.md`, `casos/flojo/corridas/corrida-2.md`.
- Justificación: existe una iteración documentada (4/8), una falla concreta con evidencia parcial (3/6), una decisión vinculada al problema (3/6) y trazabilidad incompleta (3/5) porque la corrida que detectó la falla inicial no fue conservada.
- Mejora recomendada: documentar también el error de orden/formato observable en la segunda corrida y conservar la evidencia de la prueba que originó cada cambio.

## 3. Formato y reproducibilidad (10/15)
- Nivel: Medio
- Evidencia encontrada: `casos/flojo/README.md`, `casos/flojo/prompts/system_prompt.md`, `casos/flojo/corridas/corrida-1.md`, `casos/flojo/corridas/corrida-2.md`; no existe `casos/flojo/prompts/user_prompt.md`.
- Justificación: la estructura está mayormente presente pero falta el user prompt (3/5). Hay dos corridas, no tres (3/6). Las corridas disponibles son reconstruibles (4/4).
- Mejora recomendada: agregar una tercera corrida real y el `prompts/user_prompt.md` faltante.

## 4. Análisis económico (0/15)
- Nivel: Bajo
- Evidencia encontrada: `casos/flojo/README.md` declara explícitamente que no se midieron tokens ni se hizo proyección anual; no hay artefactos adicionales que respalden un análisis económico.
- Justificación: no hay costo por corrida reconstruible, proyección de uso ni elección de modelo justificada.
- Mejora recomendada: medir tokens de una corrida, estimar su costo y proyectarlo a una frecuencia anual realista.

## 5. Gobierno y riesgo (5/15)
- Nivel: Bajo
- Evidencia encontrada: `casos/flojo/README.md`, sección "Gobierno y riesgo".
- Justificación: se menciona revisión humana y un responsable de Compras, pero los permisos son ambiguos (2/4), no se definen fallas y respuestas concretas (0/4), la supervisión es general y sin L0–L4 (2/4), y el responsable final no queda claramente formalizado (1/3).
- Mejora recomendada: documentar sistemas/permisos, al menos dos fallas concretas con su respuesta operativa, nivel L0–L4 y rol responsable final.

## PUNTAJE TOTAL: 48 / 100
