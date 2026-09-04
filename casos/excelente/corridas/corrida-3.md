# Corrida 3 — 2026-09-03

Nadie gestionó CT-0233 (Mantenimiento Integral) a tiempo: venció el 2026-09-01 sin renovación. Esta corrida es la que valida que el agente lo separa correctamente en "Vencidos sin gestionar" en vez de perderlo (ver DECISIONES.md, iteración 3).

## Entrada (user prompt)

```
Ejecutá el chequeo semanal de vencimientos de contratos.

Hoy es: 2026-09-03

Planilla de contratos vigentes (contratos.csv), tal como está hoy:

proveedor,contrato_id,fecha_vencimiento,responsable,monto_anual_usd
Insumos del Sur SA,CT-0142,2027-08-30,M. Grafia,18500
Logística Andina SRL,CT-0198,2026-09-05,L. Iannello,42000
Servicios Técnicos BA,CT-0210,2026-09-12,F. Villagran,9800
Papelera Central,CT-0087,2026-10-15,D. Rog,3200
Mantenimiento Integral,CT-0233,2026-09-01,M. Grafia,27600
Distribuidora Norte,CT-0301,2026-11-20,L. Iannello,15400
Consultora RRHH Plus,CT-0055,2026-09-08,F. Villagran,6100
Insumos Oficina SRL,CT-0410,2026-09-20,D. Rog,4200
```

## Salida

```
# Alertas de vencimiento — semana del 2026-09-03

## Próximos a vencer (30 días)
| Contrato | Proveedor | Vence | Días restantes | Responsable | Monto anual |
|---|---|---|---|---|---|
| CT-0198 | Logística Andina SRL | 2026-09-05 | 2 | L. Iannello | USD 42.000 |
| CT-0055 | Consultora RRHH Plus | 2026-09-08 | 5 | F. Villagran | USD 6.100 |
| CT-0210 | Servicios Técnicos BA | 2026-09-12 | 9 | F. Villagran | USD 9.800 |
| CT-0410 | Insumos Oficina SRL | 2026-09-20 | 17 | D. Rog | USD 4.200 |

## Vencidos sin gestionar
| Contrato | Proveedor | Venció | Días de atraso | Responsable |
|---|---|---|---|---|
| CT-0233 | Mantenimiento Integral | 2026-09-01 | 2 | M. Grafia |

## Borradores de aviso

**CT-0198 — Logística Andina SRL (L. Iannello)**
El contrato CT-0198 con Logística Andina SRL vence el 2026-09-05 (en 2 días). Urgente.

**CT-0055 — Consultora RRHH Plus (F. Villagran)**
El contrato CT-0055 con Consultora RRHH Plus vence el 2026-09-08 (en 5 días).

**CT-0210 — Servicios Técnicos BA (F. Villagran)**
El contrato CT-0210 con Servicios Técnicos BA vence el 2026-09-12 (en 9 días).

**CT-0410 — Insumos Oficina SRL (D. Rog)**
El contrato CT-0410 con Insumos Oficina SRL vence el 2026-09-20 (en 17 días).

Nota aparte: CT-0233 (Mantenimiento Integral, responsable M. Grafia) venció el 2026-09-01 y no fue renovado — aparece en "Vencidos sin gestionar", no en la tabla de próximos a vencer.
```

## Tokens y costo
- Entrada: 1.865 tokens
- Salida: 595 tokens
- Modelo: Claude Haiku
- Costo estimado: (1.865 × USD 0,80/1M) + (595 × USD 4,00/1M) = USD 0,00149 + USD 0,00238 = **USD 0,0039**
