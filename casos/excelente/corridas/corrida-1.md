# Corrida 1 — 2026-08-20

## Entrada (user prompt)

```
Ejecutá el chequeo semanal de vencimientos de contratos.

Hoy es: 2026-08-20

Planilla de contratos vigentes (contratos.csv), tal como está hoy:

proveedor,contrato_id,fecha_vencimiento,responsable,monto_anual_usd
Insumos del Sur SA,CT-0142,2026-08-30,M. Grafia,18500
Logística Andina SRL,CT-0198,2026-09-05,L. Iannello,42000
Servicios Técnicos BA,CT-0210,2026-09-12,F. Villagran,9800
Papelera Central,CT-0087,2026-10-15,D. Rog,3200
Mantenimiento Integral,CT-0233,2026-09-01,M. Grafia,27600
Distribuidora Norte,CT-0301,2026-11-20,L. Iannello,15400
Consultora RRHH Plus,CT-0055,2026-09-08,F. Villagran,6100
```

## Salida

```
# Alertas de vencimiento — semana del 2026-08-20

## Próximos a vencer (30 días)
| Contrato | Proveedor | Vence | Días restantes | Responsable | Monto anual |
|---|---|---|---|---|---|
| CT-0142 | Insumos del Sur SA | 2026-08-30 | 10 | M. Grafia | USD 18.500 |
| CT-0233 | Mantenimiento Integral | 2026-09-01 | 12 | M. Grafia | USD 27.600 |
| CT-0198 | Logística Andina SRL | 2026-09-05 | 16 | L. Iannello | USD 42.000 |
| CT-0055 | Consultora RRHH Plus | 2026-09-08 | 19 | F. Villagran | USD 6.100 |
| CT-0210 | Servicios Técnicos BA | 2026-09-12 | 23 | F. Villagran | USD 9.800 |

## Vencidos sin gestionar
Ninguno.

## Borradores de aviso

**CT-0142 — Insumos del Sur SA (M. Grafia)**
El contrato CT-0142 con Insumos del Sur SA vence el 2026-08-30 (en 10 días). Convendría definir si se renueva o se abre a otro proveedor antes de esa fecha.

**CT-0233 — Mantenimiento Integral (M. Grafia)**
El contrato CT-0233 con Mantenimiento Integral vence el 2026-09-01 (en 12 días). Monto anual USD 27.600 — es el de mayor impacto de esta semana, priorizarlo.

**CT-0198 — Logística Andina SRL (L. Iannello)**
El contrato CT-0198 con Logística Andina SRL vence el 2026-09-05 (en 16 días).

**CT-0055 — Consultora RRHH Plus (F. Villagran)**
El contrato CT-0055 con Consultora RRHH Plus vence el 2026-09-08 (en 19 días).

**CT-0210 — Servicios Técnicos BA (F. Villagran)**
El contrato CT-0210 con Servicios Técnicos BA vence el 2026-09-12 (en 23 días).
```

## Tokens y costo
- Entrada: 1.780 tokens
- Salida: 540 tokens
- Modelo: Claude Haiku
- Costo estimado: (1.780 × USD 0,80/1M) + (540 × USD 4,00/1M) = USD 0,00142 + USD 0,00216 = **USD 0,0036**
