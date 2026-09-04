# Corrida 2 — 2026-08-31

F-2225 y F-2201 ya fueron aprobadas durante la semana y no están en esta planilla.

## Entrada

```
Facturas pendientes de aprobación al 2026-08-31 (facturas.csv):

factura_id,proveedor,monto_usd,fecha_emision,dias_pendiente
F-2214,Logística Andina SRL,1850,2026-08-18,13
F-2219,Servicios Técnicos BA,980,2026-08-20,11
F-2223,Papelera Central,320,2026-08-22,9
F-2240,Consultora RRHH Plus,2100,2026-08-29,2
```

## Salida

```
| Factura | Proveedor | Monto |
|---|---|---|
| F-2214 | Logística Andina SRL | USD 1.850 |
| F-2240 | Consultora RRHH Plus | USD 2.100 |
| F-2219 | Servicios Técnicos BA | USD 980 |
| F-2223 | Papelera Central | USD 320 |
```
