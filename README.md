# Malla Académica — Ingeniería en Sistemas de Información (UNViMe)

## Cómo ejecutar
1. Descomprimí el ZIP en una carpeta.
2. Abrí `index.html` con un navegador moderno.
3. No requiere instalación ni conexión a Internet.

## Archivos
- `index.html`: estructura.
- `style.css`: estilos y temas.
- `script.js`: materias, correlatividades e interacciones.

## Datos y advertencias
Los datos de la carrera se transcribieron del documento aportado “Correlativas – Ingeniería en Sistemas de Información (UNViMe)”, basado en la Resolución R. N.º 000051/2018. El propio documento advierte que algunas celdas de requisitos para rendir estaban tapadas y deben confirmarse con el plan oficial.

Las únicas dos relaciones entre materias del ingreso y materias de la carrera incorporadas son:
- Matemática (Ingreso) → Introducción al Análisis Matemático.
- Comprensión de Texto (Ingreso) → Introducción a la Programación.

Vida Universitaria se conserva como materia de ingreso sin relación con materias de la carrera. Las condiciones de ingreso se muestran en una categoría independiente para no confundirlas con “regular para cursar” o “aprobada para rendir”.

Física III e Inglés aparecen en la pestaña **Materias por completar**, con notas para que puedas agregar sus datos y ubicarlas en el año/cuatrimestre correcto. Física III ya está referenciada como requisito de Gestión Ambiental según los datos cargados.

Para las optativas, los requisitos pueden depender de la materia elegida. No se incorporó seguimiento de progreso académico.

## Personalizar datos
Editá el arreglo `subjects` al principio de `script.js`. Cada materia tiene un `id` único. Las correlatividades apuntan a esos IDs y se distinguen por:
- `correlativasIngreso`: requisito proveniente del ingreso.
- `correlativasCursado` con `tipo: "regular"`: regularizada para cursar.
- `correlativasAprobadasCursar` con `tipo: "aprobada"`: aprobada para cursar.
- `correlativasFinal` con `tipo: "final"` o `tipo: "aprobada"`: requisitos para rendir según la categoría indicada.

Si agregás una materia nueva, recordá incluirla en `subjects` con un `id` único y asignarle el año correspondiente en `anio`.
