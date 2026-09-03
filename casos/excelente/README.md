# Caso excelente — Agente de Alertas de Vencimiento de Contratos

Caso de prueba construido por el grupo para calibrar el agente corrector. Representa un trabajo final que cumple los seis requisitos del enunciado (`trabajo-final.md`) con evidencia real y verificable en cada punto.

## Descripción

Un sistema chico y acotado para el área de Compras: revisa la planilla de contratos vigentes (`contratos.csv`) una vez por semana y arma, para el responsable de Compras, la lista de contratos que vencen pronto — con un borrador de aviso listo para revisar, nunca enviado automáticamente.

## Objetivo del agente

Que ningún contrato se venza "por sorpresa": dar visibilidad semanal y anticipada de vencimientos, sin sacarle al humano la decisión de a quién y cuándo avisar.

## Arquitectura

- **Contrato completo:** `prompts/system_prompt.md` (Rol, Contexto, Tarea, Restricciones, Formato, Ejemplos) + `prompts/user_prompt.md` (la invocación semanal, con la fecha de hoy y la planilla actual).
- **Herramienta real:** lectura de `contratos.csv`, la planilla real de contratos vigentes (proveedor, contrato_id, fecha_vencimiento, responsable, monto_anual_usd). El agente solo lee — nunca escribe sobre la planilla ni sobre ningún otro sistema.
- **Salida estructurada:** mismo formato en las tres corridas — tabla de "Próximos a vencer", tabla de "Vencidos sin gestionar", borradores de aviso. Ver `corridas/`.
- **Supervisión humana:** nivel **L1** — el agente redacta, un humano (el responsable de Compras) revisa cada borrador antes de que se comunique nada a nadie.

## Corridas realizadas

Tres corridas reales, semanales, con planillas que cambian entre una y otra (contratos que se renuevan, contratos nuevos que aparecen, un contrato que queda sin gestionar):

| Corrida | Fecha | Qué prueba |
|---|---|---|
| [`corridas/corrida-1.md`](corridas/corrida-1.md) | 2026-08-20 | Caso base: identificar próximos a vencer |
| [`corridas/corrida-2.md`](corridas/corrida-2.md) | 2026-08-27 | Un contrato renovado deja de alertar; aparece uno nuevo |
| [`corridas/corrida-3.md`](corridas/corrida-3.md) | 2026-09-03 | Un contrato vencido sin gestionar se separa correctamente |

## Formato de salida

Fijo entre corridas: tabla "Próximos a vencer" (30 días), tabla "Vencidos sin gestionar", y un borrador de aviso por cada fila de la primera tabla. El detalle completo está en `prompts/system_prompt.md`.

## Análisis económico

| Corrida | Entrada (tokens) | Salida (tokens) | Costo estimado |
|---|---|---|---|
| 1 (20/8) | 1.780 | 540 | USD 0,0036 |
| 2 (27/8) | 1.910 | 610 | USD 0,0040 |
| 3 (3/9) | 1.865 | 595 | USD 0,0039 |
| **Promedio** | **1.852** | **582** | **USD 0,0038** |

Supuestos de precio (Claude Haiku): USD 0,80 por millón de tokens de entrada, USD 4,00 por millón de tokens de salida — cálculo: `(tokens_entrada × 0,80/1.000.000) + (tokens_salida × 4,00/1.000.000)`.

**Proyección de uso real:** corre 1 vez por semana → 52 corridas/año → 52 × USD 0,0038 ≈ **USD 0,20 por año**.

**Elección de modelo:** la tarea es lectura estructurada + comparación de fechas + redacción corta, sin razonamiento multi-paso. En la iteración 1 (ver `DECISIONES.md`) se probó con un modelo más grande sin ninguna mejora de precisión una vez que el prompt quedó bien especificado — se bajó a Claude Haiku, el modelo más chico que resuelve la tarea igual de bien.

## Gobierno y riesgo

- **Sistemas y permisos:** acceso de solo lectura a un único archivo (`contratos.csv`). Sin acceso a email, a ningún sistema de envío, ni permiso de escritura sobre la planilla ni sobre ningún otro sistema.
- **Fallas posibles y respuesta:**
  - Fecha mal interpretada (día/mes invertido) → mitigado con formato único `AAAA-MM-DD` y restricción explícita (iteración 2, ver `DECISIONES.md`).
  - Contrato vencido que se pierde o se mezcla con los próximos → mitigado con la sección obligatoria "Vencidos sin gestionar" (iteración 3).
  - Planilla vacía o sin contratos en rango → el agente lo declara explícitamente en vez de inventar contratos.
- **Supervisión y revisión humana:** nivel L1. Ningún aviso sale sin que el responsable de Compras lo revise primero.
- **Responsable final:** el responsable de Compras (en las corridas de prueba, M. Grafia) aprueba y firma cada aviso antes de que se comunique a un proveedor o colega.

## Estructura de este caso

```
README.md              — este archivo
prompts/system_prompt.md
prompts/user_prompt.md
corridas/corrida-1.md
corridas/corrida-2.md
corridas/corrida-3.md
DECISIONES.md
```
