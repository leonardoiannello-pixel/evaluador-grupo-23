# Cómo ejecutar el agente corrector

Este archivo documenta el procedimiento de ejecución del evaluador del Grupo 23. El objetivo es que las corridas sean reproducibles y comparables entre sí.

## Entorno de ejecución

El corrector es **portable entre plataformas** siempre que el entorno utilizado pueda leer de forma completa el repositorio de GitHub y aplicar sin cambios `agente/system_prompt.md`, `rubrica.md` y `agente/user_prompt.md`.

La **calibración formal V1 y V2** se realizó en Claude, manteniendo el mismo operador, plataforma/modelo, configuración y acceso a GitHub para poder atribuir cualquier diferencia al ajuste documentado y no al entorno. Después se realizó una **V3 de validación de formato y portabilidad** en ChatGPT, sin reabrir la calibración de puntajes.

El acceso al repositorio evaluado debe ser de **solo lectura**. El corrector no necesita crear, editar, borrar ni ejecutar archivos del trabajo que evalúa.

## Insumos del corrector

1. `agente/system_prompt.md`: identidad, reglas de integridad, restricciones y formato de salida.
2. `rubrica.md`: única rúbrica permitida para asignar puntajes.
3. `agente/user_prompt.md`: plantilla de invocación para cada trabajo.
4. URL del repositorio, carpeta o trabajo a evaluar.

Cuando sea posible, también se registra branch/tag/commit para reconstruir exactamente la corrida.

## Capacidad requerida de GitHub

La herramienta debe permitir:

- recorrer la estructura completa del repositorio o carpeta evaluada;
- abrir y leer archivos de texto;
- revisar `README.md`, prompts, corridas, `DECISIONES.md` y demás evidencia relevante;
- comprobar si los artefactos que el trabajo afirma tener existen realmente.

No se requiere permiso de escritura ni ejecución de código.

## Procedimiento de una corrida

1. Usar `agente/system_prompt.md` como contrato estable.
2. Cargar `rubrica.md` sin modificarla durante la corrida.
3. Completar `agente/user_prompt.md` con la URL y, si corresponde, branch/tag/commit.
4. Dar acceso de solo lectura a GitHub.
5. Recorrer todos los archivos relevantes antes de puntuar.
6. Ejecutar una única evaluación.
7. Guardar la respuesta textual completa tal como salió.

## Reglas de calibración y versiones

- Los tres casos obligatorios de una misma versión se evalúan sin modificar rúbrica ni prompts entre corridas.
- V1 y V2 se ejecutaron con el mismo entorno, modelo/configuración y operador.
- Todo cambio posterior se documenta como una nueva versión o validación y se explica qué problema motivó el ajuste.
- Las salidas históricas no se reescriben retrospectivamente.
- V3 no constituye una nueva calibración de criterio: valida un ajuste exclusivamente formal del system prompt y la portabilidad a otra plataforma.

Estructura de evidencia:

```text
calibracion/
├── humanos/
├── agente-v1/
│   ├── excelente.md
│   ├── flojo.md
│   └── tramposo.md
├── agente-v2/
│   ├── excelente.md
│   ├── flojo.md
│   └── tramposo.md
├── agente-v3/
│   ├── excelente.md
│   ├── flojo.md
│   └── tramposo.md
└── holdout/
    └── paperbackreader.md
```

## Salida esperada

La respuesta debe respetar exactamente `agente/system_prompt.md`: alertas de integridad y, para cada una de las cinco dimensiones, `Nivel`, `Evidencia encontrada`, `Justificación` y `Mejora recomendada`, más el puntaje total sobre 100.

Si no existe evidencia verificable para una dimensión, el corrector debe declararlo explícitamente; nunca debe inventar ni inferir artefactos ausentes.
