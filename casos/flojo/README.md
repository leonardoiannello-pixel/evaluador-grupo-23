# Caso flojo — Agente de Resumen de Facturas Pendientes

Caso de prueba construido por el grupo para calibrar el agente corrector. A diferencia del caso tramposo, acá no hay ninguna afirmación falsa ni intento de manipular al evaluador — es un trabajo real pero incompleto, con huecos genuinos por falta de tiempo.

## Descripción

Un agente que lee la planilla de facturas pendientes de aprobación (`facturas.csv`) y arma una tabla resumen para que el aprobador de Compras las revise más rápido.

## Objetivo del agente

Ahorrarle al aprobador el trabajo de ordenar manualmente las facturas pendientes antes de revisarlas.

## Arquitectura

- **Contrato:** `prompts/system_prompt.md` tiene Rol, Contexto, Tarea, Restricciones y Formato, pero no llegamos a escribir la sección de Ejemplos. Tampoco armamos `prompts/user_prompt.md` — las dos corridas se hicieron pasándole la planilla directamente, sin una plantilla de invocación fija.
- **Herramienta real:** lectura de `facturas.csv`. Se usó de verdad en las dos corridas.
- **Salida:** una tabla de facturas pendientes. No quedó completamente estable entre corridas — la corrida 2 no incluye la columna "Días pendientes" que sí tiene la corrida 1.
- **Supervisión humana:** un responsable de Compras revisa el resumen antes de aprobar cualquier pago. No llegamos a definir esto con el vocabulario L0–L4 del curso ni a especificar qué pasa si el responsable no está de acuerdo con algo del resumen.

## Corridas realizadas

Dos corridas reales (no tres):

| Corrida | Fecha |
|---|---|
| [`corridas/corrida-1.md`](corridas/corrida-1.md) | 2026-08-24 |
| [`corridas/corrida-2.md`](corridas/corrida-2.md) | 2026-08-31 |

## Análisis económico

No lo calculamos con números reales — el costo por corrida nos pareció bajo (son pocas facturas y un prompt corto) pero no medimos tokens ni hicimos ninguna proyección de costo a un año. Queda pendiente.

## Gobierno y riesgo

Un responsable de Compras revisa el resumen antes de aprobar cualquier pago. No definimos en detalle qué permisos tiene el agente sobre la planilla, qué pasa si hay una factura duplicada o un monto que no cierra, ni quién queda como responsable final de la aprobación — el agente solo arma la tabla, la decisión de pago siempre la toma una persona, pero no dejamos por escrito el mecanismo.

## Estructura de este caso

```
README.md                    — este archivo
prompts/system_prompt.md     — sin sección de Ejemplos
corridas/corrida-1.md
corridas/corrida-2.md        — solo dos corridas, no tres
DECISIONES.md                — una iteración documentada, sin mucho más detalle
```

(No existe `prompts/user_prompt.md` — es uno de los huecos que dejamos.)
