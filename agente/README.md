# Cómo ejecutar el agente corrector

Este archivo documenta el procedimiento de ejecución del evaluador del Grupo 23. El objetivo es que las corridas sean reproducibles y comparables entre sí.

## Entorno de ejecución

Para las corridas de calibración se utiliza **ChatGPT con acceso de lectura a GitHub**.

El acceso al repositorio evaluado debe ser de **solo lectura**. El corrector no necesita crear, editar, borrar ni ejecutar archivos del trabajo que está evaluando.

## Insumos del corrector

El evaluador usa cuatro insumos:

1. `agente/system_prompt.md`: identidad, reglas de integridad, restricciones y formato de salida estable.
2. `rubrica.md`: única rúbrica permitida para asignar puntajes.
3. `agente/user_prompt.md`: plantilla de invocación para cada trabajo.
4. La URL del repositorio, carpeta o trabajo que se va a evaluar.

Cuando sea posible, también se registra la rama, tag o commit evaluado para poder reconstruir exactamente la corrida.

## Capacidad requerida de GitHub

La herramienta de GitHub debe permitir al corrector:

- recorrer la estructura completa del repositorio o carpeta evaluada;
- abrir y leer archivos de texto;
- revisar `README.md`, prompts, corridas, `DECISIONES.md` y demás evidencia relevante;
- comprobar si los artefactos que el trabajo afirma tener existen realmente.

No se requiere permiso de escritura ni ejecución de código.

## Procedimiento de una corrida

1. Usar `agente/system_prompt.md` como contrato estable del corrector.
2. Cargar o poner a disposición `rubrica.md` sin modificarla durante la corrida.
3. Completar `agente/user_prompt.md` con la URL del trabajo a evaluar y, si corresponde, su branch/tag/commit.
4. Dar al corrector acceso de solo lectura a GitHub.
5. Pedirle que recorra todos los archivos relevantes antes de puntuar.
6. Ejecutar una única evaluación.
7. Guardar la respuesta textual completa **tal como salió**, sin corregirla ni reescribirla manualmente.

## Reglas para la calibración

Para poder comparar V1 y V2 de manera válida:

- los tres casos obligatorios se evalúan con el mismo entorno y la misma configuración;
- durante las tres corridas de una misma versión no se modifica `rubrica.md`, `agente/system_prompt.md` ni `agente/user_prompt.md`;
- cualquier cambio posterior debe quedar documentado como una nueva versión y explicar qué desacuerdo de calibración motivó el ajuste;
- las salidas de V1 y V2 se conservan por separado.

Estructura prevista:

```text
calibracion/
├── humanos/
├── agente-v1/
│   ├── excelente.md
│   ├── flojo.md
│   └── tramposo.md
└── agente-v2/
    ├── excelente.md
    ├── flojo.md
    └── tramposo.md
```

## Salida esperada

La respuesta debe respetar exactamente el formato definido en `agente/system_prompt.md`: alertas de integridad, puntaje por cada una de las cinco dimensiones, nivel, evidencia, justificación, una mejora concreta y puntaje total sobre 100.

## Alcance

Este procedimiento configura y documenta el corrector; no modifica la rúbrica ni el system prompt. Esos archivos se mantienen congelados durante la primera ronda de calibración para que la comparación entre criterio humano y agente sea válida.