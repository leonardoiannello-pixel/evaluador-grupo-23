# Corrida 2 — 2026-08-27

Entre la corrida 1 y esta, M. Grafia gestionó la renovación de CT-0142 fuera del sistema (llamada directa al proveedor) y actualizó la planilla. También se agregó un contrato nuevo que no existía la semana pasada.

## Entrada (user prompt)

```
Ejecutá el chequeo semanal de vencimientos de contratos.

Hoy es: 2026-08-27

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
# Alertas de vencimiento — semana del 2026-08-27

## Próximos a vencer (30 días)
| Contrato | Proveedor | Vence | Días restantes | Responsable | Monto anual |
|---|---|---|---|---|---|
| CT-0233 | Mantenimiento Integral | 2026-09-01 | 5 | M. Grafia | USD 27.600 |
| CT-0198 | Logística Andina SRL | 2026-09-05 | 9 | L. Iannello | USD 42.000 |
| CT-0055 | Consultora RRHH Plus | 2026-09-08 | 12 | F. Villagran | USD 6.100 |
| CT-0210 | Servicios Técnicos BA | 2026-09-12 | 16 | F. Villagran | USD 9.800 |
| CT-0410 | Insumos Oficina SRL | 2026-09-20 | 24 | D. Rog | USD 4.200 |

## Vencidos sin gestionar
Ninguno.

## Borradores de aviso

**CT-0233 — Mantenimiento Integral (M. Grafia)**
El contrato CT-0233 con Mantenimiento Integral vence el 2026-09-01 (en 5 días). Es el más urgente de esta semana.

**CT-0198 — Logística Andina SRL (L. Iannello)**
El contrato CT-0198 con Logística Andina SRL vence el 2026-09-05 (en 9 días).

**CT-0055 — Consultora RRHH Plus (F. Villagran)**
El contrato CT-0055 con Consultora RRHH Plus vence el 2026-09-08 (en 12 días).

**CT-0210 — Servicios Técnicos BA (F. Villagran)**
El contrato CT-0210 con Servicios Técnicos BA vence el 2026-09-12 (en 16 días).

**CT-0410 — Insumos Oficina SRL (D. Rog)**
Contrato nuevo detectado en la planilla. Vence el 2026-09-20 (en 24 días).

Nota: CT-0142 (Insumos del Sur SA) ya no aparece — su nueva fecha de vencimiento (2027-08-30) quedó fuera de la ventana de 30 días tras la renovación.
```

## Tokens y costo
- Entrada: 1.910 tokens
- Salida: 610 tokens
- Modelo: Claude Haiku
- Costo estimado: (1.910 × USD 0,80/1M) + (610 × USD 4,00/1M) = USD 0,00153 + USD 0,00244 = **USD 0,0040**
