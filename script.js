/* Malla Académica — UNViMe */
"use strict";

const subjects = [
  { id:"ing-matematica", nombre:"Matemática", alias:["Ingreso Matemático","Matematica de ingreso"], anio:"Ingreso", periodo:"Ingreso", codigo:"", correlativasCursado:[], correlativasFinal:[] },
  { id:"ing-vida-universitaria", nombre:"Vida Universitaria", alias:["Vida universitaria de ingreso"], anio:"Ingreso", periodo:"Ingreso", codigo:"", correlativasCursado:[], correlativasFinal:[] },
  { id:"ing-comprension-texto", nombre:"Comprensión de Texto", alias:["Comprension de texto","Comprensión de texto de ingreso"], anio:"Ingreso", periodo:"Ingreso", codigo:"", correlativasCursado:[], correlativasFinal:[] },

  // PRIMER AÑO
  { id:"mat-discreta", codigo:"35-01", nombre:"Matemática Discreta", anio:"Primer año", periodo:"1er cuatrimestre", correlativasCursado:[], correlativasFinal:[] },
  { id:"intro-analisis", codigo:"35-02", nombre:"Introducción al Análisis Matemático", alias:["Análisis Matemático","Introduccion al Analisis Matematico"], anio:"Primer año", periodo:"1er cuatrimestre", correlativasCursado:[], correlativasIngreso:[{id:"ing-matematica",tipo:"ingreso"}], correlativasFinal:[] },
  { id:"intro-programacion", codigo:"35-03", nombre:"Introducción a la Programación", anio:"Primer año", periodo:"1er cuatrimestre", correlativasCursado:[], correlativasIngreso:[{id:"ing-comprension-texto",tipo:"ingreso"}], correlativasFinal:[] },
  { id:"quimica", codigo:"35-04", nombre:"Química", anio:"Primer año", periodo:"1er cuatrimestre", correlativasCursado:[], correlativasFinal:[] },

  { id:"algebra-lineal", codigo:"35-05", nombre:"Álgebra Lineal y Geometría Analítica", anio:"Primer año", periodo:"2do cuatrimestre", correlativasCursado:[{id:"mat-discreta",tipo:"regular"}], correlativasFinal:[{id:"mat-discreta",tipo:"final"}] },
  { id:"calculo-i", codigo:"35-06", nombre:"Cálculo I", anio:"Primer año", periodo:"2do cuatrimestre", correlativasCursado:[{id:"intro-analisis",tipo:"regular"}], correlativasFinal:[{id:"intro-analisis",tipo:"final"}] },
  { id:"algoritmos-i", codigo:"35-07", nombre:"Algoritmos y Estructuras de Datos I", anio:"Primer año", periodo:"2do cuatrimestre", correlativasCursado:[{id:"intro-programacion",tipo:"regular"}], correlativasFinal:[{id:"intro-programacion",tipo:"final"}] },
  { id:"arquitectura", codigo:"35-08", nombre:"Arquitectura de Computadoras", anio:"Primer año", periodo:"2do cuatrimestre", correlativasCursado:[{id:"intro-programacion",tipo:"regular"}], correlativasFinal:[{id:"intro-programacion",tipo:"final"}] },

  // SEGUNDO AÑO
  { id:"calculo-ii", codigo:"35-09", nombre:"Cálculo II", anio:"Segundo año", periodo:"1er cuatrimestre", correlativasCursado:[{id:"algebra-lineal",tipo:"regular"},{id:"calculo-i",tipo:"regular"}], correlativasFinal:[{id:"algebra-lineal",tipo:"final"},{id:"calculo-i",tipo:"final"}] },
  { id:"fisica-i", codigo:"35-10", nombre:"Física I", anio:"Segundo año", periodo:"1er cuatrimestre", correlativasCursado:[{id:"intro-analisis",tipo:"regular"}], correlativasFinal:[{id:"intro-analisis",tipo:"final"}] },
  { id:"algoritmos-ii", codigo:"35-11", nombre:"Algoritmos y Estructuras de Datos II", anio:"Segundo año", periodo:"1er cuatrimestre", correlativasCursado:[{id:"algoritmos-i",tipo:"regular"}], correlativasFinal:[{id:"algoritmos-i",tipo:"final"}] },
  { id:"sistemas-info-i", codigo:"35-12", nombre:"Sistemas de Información I", anio:"Segundo año", periodo:"1er cuatrimestre", correlativasCursado:[{id:"intro-programacion",tipo:"regular"}], correlativasFinal:[{id:"intro-programacion",tipo:"final"}] },
  { id:"sistemas-representacion", codigo:"35-60", nombre:"Sistemas de Representación", anio:"Segundo año", periodo:"1er cuatrimestre", correlativasCursado:[{id:"intro-programacion",tipo:"regular"}], correlativasFinal:[{id:"intro-programacion",tipo:"final"}] },

  { id:"fisica-ii", codigo:"35-13", nombre:"Física II", anio:"Segundo año", periodo:"2do cuatrimestre", correlativasCursado:[{id:"fisica-i",tipo:"regular"}], correlativasFinal:[{id:"intro-analisis",tipo:"aprobada"},{id:"fisica-i",tipo:"final"}] },
  { id:"paradigmas", codigo:"35-14", nombre:"Paradigmas de Programación", anio:"Segundo año", periodo:"2do cuatrimestre", correlativasCursado:[{id:"algoritmos-ii",tipo:"regular"}], correlativasFinal:[{id:"algoritmos-i",tipo:"aprobada"},{id:"algoritmos-ii",tipo:"final"}] },
  { id:"sistemas-info-ii", codigo:"35-15", nombre:"Sistemas de Información II", anio:"Segundo año", periodo:"2do cuatrimestre", correlativasCursado:[{id:"sistemas-info-i",tipo:"regular"}], correlativasFinal:[{id:"intro-programacion",tipo:"aprobada"},{id:"sistemas-info-i",tipo:"final"}] },
  { id:"probabilidad", codigo:"35-16", nombre:"Probabilidad y Estadística", anio:"Segundo año", periodo:"2do cuatrimestre", correlativasCursado:[{id:"calculo-ii",tipo:"regular"}], correlativasFinal:[{id:"algebra-lineal",tipo:"aprobada"},{id:"calculo-i",tipo:"aprobada"},{id:"calculo-ii",tipo:"final"}] },
  { id:"bases-datos", codigo:"35-17", nombre:"Bases de Datos", anio:"Segundo año", periodo:"2do cuatrimestre", correlativasCursado:[{id:"algoritmos-ii",tipo:"regular"}], correlativasFinal:[{id:"algoritmos-i",tipo:"aprobada"},{id:"algoritmos-ii",tipo:"final"}] },

  // TERCER AÑO
  { id:"ing-software-i", codigo:"35-18", nombre:"Ingeniería de Software I", anio:"Tercer año", periodo:"1er cuatrimestre", correlativasCursado:[{id:"sistemas-info-ii",tipo:"regular"},{id:"bases-datos",tipo:"regular"}], correlativasFinal:[{id:"algoritmos-ii",tipo:"aprobada"},{id:"sistemas-info-ii",tipo:"final"},{id:"bases-datos",tipo:"final"}] },
  { id:"sistemas-operativos", codigo:"35-19", nombre:"Sistemas Operativos", anio:"Tercer año", periodo:"1er cuatrimestre", correlativasCursado:[{id:"algoritmos-ii",tipo:"regular"}], correlativasFinal:[{id:"algoritmos-i",tipo:"aprobada"},{id:"arquitectura",tipo:"aprobada"},{id:"algoritmos-ii",tipo:"final"}] },
  { id:"redes", codigo:"35-20", nombre:"Redes", anio:"Tercer año", periodo:"1er cuatrimestre", correlativasCursado:[{id:"paradigmas",tipo:"regular"}], correlativasFinal:[{id:"algoritmos-ii",tipo:"aprobada"},{id:"paradigmas",tipo:"final"}] },

  { id:"organizacion-empresarial", codigo:"35-23", nombre:"Organización Empresarial", anio:"Tercer año", periodo:"2do cuatrimestre", correlativasCursado:[{id:"sistemas-info-ii",tipo:"regular"},{id:"probabilidad",tipo:"regular"}], correlativasFinal:[{id:"calculo-ii",tipo:"aprobada"},{id:"sistemas-info-i",tipo:"aprobada"},{id:"sistemas-info-ii",tipo:"final"},{id:"probabilidad",tipo:"final"}] },
  { id:"analisis-algoritmos", codigo:"35-24", nombre:"Análisis y Diseño de Algoritmos", anio:"Tercer año", periodo:"2do cuatrimestre", correlativasCursado:[{id:"paradigmas",tipo:"regular"},{id:"probabilidad",tipo:"regular"}], correlativasFinal:[{id:"calculo-ii",tipo:"aprobada"},{id:"algoritmos-ii",tipo:"aprobada"},{id:"paradigmas",tipo:"final"},{id:"probabilidad",tipo:"final"}] },
  { id:"ing-software-ii", codigo:"35-25", nombre:"Ingeniería de Software II", anio:"Tercer año", periodo:"2do cuatrimestre", correlativasCursado:[{id:"ing-software-i",tipo:"regular"}], correlativasFinal:[{id:"sistemas-info-ii",tipo:"aprobada"},{id:"bases-datos",tipo:"aprobada"},{id:"ing-software-i",tipo:"final"}] },
  { id:"programacion-web", codigo:"35-26", nombre:"Programación Web", anio:"Tercer año", periodo:"2do cuatrimestre", correlativasCursado:[{id:"ing-software-i",tipo:"regular"},{id:"redes",tipo:"regular"}], correlativasFinal:[{id:"paradigmas",tipo:"aprobada"},{id:"bases-datos",tipo:"aprobada"},{id:"ing-software-i",tipo:"final"},{id:"redes",tipo:"final"}] },
  { id:"etica", codigo:"35-27", nombre:"Ética y Habilitación Profesional", anio:"Tercer año", periodo:"2do cuatrimestre", correlativasCursado:[{id:"ing-software-i",tipo:"regular"}], correlativasFinal:[{id:"calculo-ii",tipo:"aprobada"},{id:"ing-software-i",tipo:"final"}] },

  // CUARTO AÑO
  { id:"reingenieria", codigo:"35-28", nombre:"Reingeniería de Sistemas", anio:"Cuarto año", periodo:"1er cuatrimestre", correlativasCursado:[{id:"ing-software-ii",tipo:"regular"}], correlativasFinal:[{id:"ing-software-i",tipo:"aprobada"},{id:"ing-software-ii",tipo:"final"}] },
  { id:"gestion-ambiental", codigo:"35-29", nombre:"Gestión Ambiental", anio:"Cuarto año", periodo:"1er cuatrimestre", correlativasCursado:[{id:"etica",tipo:"regular"}], correlativasFinal:[{id:"sistemas-info-ii",tipo:"aprobada"},{id:"fisica-iii",tipo:"aprobada"},{id:"etica",tipo:"final"}] },
  { id:"investigacion-operativa", codigo:"35-30", nombre:"Investigación Operativa", anio:"Cuarto año", periodo:"1er cuatrimestre", correlativasCursado:[{id:"analisis-algoritmos",tipo:"regular"}], correlativasFinal:[{id:"paradigmas",tipo:"aprobada"},{id:"probabilidad",tipo:"aprobada"},{id:"analisis-algoritmos",tipo:"final"}] },
  { id:"teoria-computacion", codigo:"35-31", nombre:"Teoría de la Computación", anio:"Cuarto año", periodo:"1er cuatrimestre", correlativasCursado:[{id:"analisis-algoritmos",tipo:"regular"}], correlativasFinal:[{id:"paradigmas",tipo:"aprobada"},{id:"probabilidad",tipo:"aprobada"},{id:"analisis-algoritmos",tipo:"final"}] },
  { id:"metodos-numericos", codigo:"35-32", nombre:"Métodos Numéricos", anio:"Cuarto año", periodo:"1er cuatrimestre", correlativasCursado:[{id:"paradigmas",tipo:"regular"}], correlativasFinal:[{id:"calculo-ii",tipo:"aprobada"},{id:"algoritmos-ii",tipo:"aprobada"},{id:"paradigmas",tipo:"final"}] },

  { id:"inteligencia-artificial", codigo:"35-33", nombre:"Inteligencia Artificial", anio:"Cuarto año", periodo:"2do cuatrimestre", correlativasCursado:[{id:"teoria-computacion",tipo:"regular"}], correlativasFinal:[{id:"analisis-algoritmos",tipo:"aprobada"},{id:"teoria-computacion",tipo:"final"}] },
  { id:"compiladores", codigo:"35-34", nombre:"Compiladores", anio:"Cuarto año", periodo:"2do cuatrimestre", correlativasCursado:[{id:"teoria-computacion",tipo:"regular"}], correlativasFinal:[{id:"sistemas-operativos",tipo:"aprobada"},{id:"analisis-algoritmos",tipo:"aprobada"},{id:"teoria-computacion",tipo:"final"}] },
  { id:"modelos-simulacion", codigo:"35-35", nombre:"Modelos y Simulación", anio:"Cuarto año", periodo:"2do cuatrimestre", correlativasCursado:[{id:"analisis-algoritmos",tipo:"regular"}], correlativasFinal:[{id:"probabilidad",tipo:"aprobada"},{id:"ing-software-ii",tipo:"aprobada"},{id:"analisis-algoritmos",tipo:"final"}] },

  // QUINTO AÑO
  { id:"elementos-economia", codigo:"35-36", nombre:"Elementos de Economía", anio:"Quinto año", periodo:"1er cuatrimestre", correlativasCursado:[{id:"organizacion-empresarial",tipo:"regular"}], correlativasFinal:[{id:"sistemas-info-ii",tipo:"aprobada"},{id:"probabilidad",tipo:"aprobada"},{id:"organizacion-empresarial",tipo:"final"}] },
  { id:"sistemas-distribuidos", codigo:"35-37", nombre:"Sistemas Distribuidos y Paralelos", anio:"Quinto año", periodo:"1er cuatrimestre", correlativasCursado:[{id:"ing-software-ii",tipo:"regular"}], correlativasFinal:[{id:"redes",tipo:"aprobada"},{id:"ing-software-ii",tipo:"final"}] },

  { id:"auditoria", codigo:"35-38", nombre:"Auditoría y Peritaje de Sistemas", anio:"Quinto año", periodo:"2do cuatrimestre", correlativasCursado:[{id:"reingenieria",tipo:"regular"}], correlativasFinal:[{id:"ing-software-ii",tipo:"aprobada"},{id:"reingenieria",tipo:"final"}] },
  { id:"bases-datos-avanzadas", codigo:"35-39", nombre:"Base de Datos Avanzadas", alias:["Bases de Datos Avanzadas"], anio:"Quinto año", periodo:"2do cuatrimestre", correlativasCursado:[{id:"sistemas-distribuidos",tipo:"regular"}], correlativasFinal:[{id:"bases-datos",tipo:"aprobada"},{id:"sistemas-distribuidos",tipo:"final"}] },
  { id:"optativa-1", codigo:"35-40", nombre:"Optativa 1", anio:"Quinto año", periodo:"2do cuatrimestre", correlativasCursado:[], correlativasFinal:[], notas:["El documento indica que los requisitos dependen de la optativa elegida."] },
  { id:"optativa-2", codigo:"35-41", nombre:"Optativa 2", anio:"Quinto año", periodo:"2do cuatrimestre", correlativasCursado:[], correlativasFinal:[], notas:["El documento indica que los requisitos dependen de la optativa elegida."] },
  { id:"bioinformatica", codigo:"35-42", nombre:"Bioinformática", anio:"Quinto año", periodo:"2do cuatrimestre", correlativasCursado:[{id:"modelos-simulacion",tipo:"regular"},{id:"sistemas-distribuidos",tipo:"regular"}], correlativasFinal:[{id:"teoria-computacion",tipo:"aprobada"},{id:"modelos-simulacion",tipo:"final"},{id:"sistemas-distribuidos",tipo:"final"}] },

  // Materias finales y práctica
  { id:"practica-profesional", codigo:"35-43", nombre:"Práctica Profesional Supervisada", anio:"Quinto año", periodo:"2do cuatrimestre", correlativasCursado:[{id:"__nota80",tipo:"nota"}], correlativasFinal:[{id:"__nota80",tipo:"nota"}], notas:["Según el documento, para comenzar la Práctica Profesional Supervisada debe estar aprobado el 80 % de las asignaturas del plan. La condición aparece como Nota 1."] },
  { id:"proyecto-final", codigo:"35-44", nombre:"Proyecto Final", anio:"Quinto año", periodo:"2do cuatrimestre", correlativasCursado:[{id:"__nota80",tipo:"nota"}], correlativasFinal:[{id:"__nota100",tipo:"nota"}], notas:["Según el documento, para comenzar el Proyecto Final debe estar aprobado el 80 % de las asignaturas; para rendirlo, deben estar aprobadas todas las materias del plan."] },

  // OPTATIVAS listadas en el documento
  { id:"opt-teoria-informacion", codigo:"35-45", nombre:"Teoría de la Información", anio:"Materias optativas", periodo:"Optativa", correlativasCursado:[], correlativasFinal:[{id:"sistemas-info-ii",tipo:"aprobada"},{id:"probabilidad",tipo:"aprobada"}] },
  { id:"opt-computacion-grafica", codigo:"35-46", nombre:"Computación Gráfica", anio:"Materias optativas", periodo:"Optativa", correlativasCursado:[{id:"metodos-numericos",tipo:"regular"}], correlativasFinal:[{id:"analisis-algoritmos",tipo:"aprobada"},{id:"metodos-numericos",tipo:"final"}] },
  { id:"opt-semantica", codigo:"35-47", nombre:"Semántica de los Lenguajes de Programación", anio:"Materias optativas", periodo:"Optativa", correlativasCursado:[], correlativasFinal:[{id:"teoria-computacion",tipo:"aprobada"}] },
  { id:"opt-analisis-estatico", codigo:"35-48", nombre:"Análisis Estático de Programas", anio:"Materias optativas", periodo:"Optativa", correlativasCursado:[{id:"compiladores",tipo:"regular"}], correlativasFinal:[{id:"teoria-computacion",tipo:"aprobada"},{id:"compiladores",tipo:"final"}] },
  { id:"opt-verificacion-validacion", codigo:"35-49", nombre:"Verificación y Validación de Software", anio:"Materias optativas", periodo:"Optativa", correlativasCursado:[{id:"sistemas-distribuidos",tipo:"regular"}], correlativasFinal:[{id:"analisis-algoritmos",tipo:"aprobada"},{id:"sistemas-distribuidos",tipo:"final"}] },
  { id:"opt-comunicacion", codigo:"35-50", nombre:"Comunicación Oral y Escrita", anio:"Materias optativas", periodo:"Optativa", correlativasCursado:[], correlativasFinal:[] },
  { id:"opt-senales", codigo:"35-51", nombre:"Análisis y Procesamiento de Señales", anio:"Materias optativas", periodo:"Optativa", correlativasCursado:[], correlativasFinal:[{id:"calculo-ii",tipo:"aprobada"}] },
  { id:"opt-metodologia", codigo:"35-52", nombre:"Metodología de la Investigación", anio:"Materias optativas", periodo:"Optativa", correlativasCursado:[], correlativasFinal:[] },
  { id:"opt-electronica", codigo:"35-53", nombre:"Electrónica Digital", anio:"Materias optativas", periodo:"Optativa", correlativasCursado:[], correlativasFinal:[{id:"arquitectura",tipo:"aprobada"}] },
  { id:"opt-sistemas-control", codigo:"35-54", nombre:"Sistemas de Control", anio:"Materias optativas", periodo:"Optativa", correlativasCursado:[{id:"modelos-simulacion",tipo:"regular"}], correlativasFinal:[{id:"analisis-algoritmos",tipo:"aprobada"},{id:"modelos-simulacion",tipo:"final"}] },
  { id:"opt-gestion-calidad", codigo:"35-55", nombre:"Gestión de Calidad", anio:"Materias optativas", periodo:"Optativa", correlativasCursado:[], correlativasFinal:[{id:"reingenieria",tipo:"aprobada"}] },
  { id:"opt-financiamiento", codigo:"35-56", nombre:"Financiamiento de Proyectos en Internet", anio:"Materias optativas", periodo:"Optativa", correlativasCursado:[], correlativasFinal:[{id:"reingenieria",tipo:"aprobada"}] },
  { id:"opt-costos", codigo:"35-57", nombre:"Sistemas de Costos y Presupuestos", anio:"Materias optativas", periodo:"Optativa", correlativasCursado:[], correlativasFinal:[{id:"organizacion-empresarial",tipo:"aprobada"}] },
  { id:"opt-sig", codigo:"35-58", nombre:"Sistemas de Información Geográfica", anio:"Materias optativas", periodo:"Optativa", correlativasCursado:[], correlativasFinal:[{id:"analisis-algoritmos",tipo:"aprobada"},{id:"gestion-ambiental",tipo:"aprobada"}] },
  { id:"opt-gestion-procesos", codigo:"35-59", nombre:"Gestión de Procesos", anio:"Materias optativas", periodo:"Optativa", correlativasCursado:[], correlativasFinal:[{id:"organizacion-empresarial",tipo:"aprobada"},{id:"ing-software-ii",tipo:"aprobada"}] },

  { id:"fisica-iii", codigo:"35-21", nombre:"Física III", anio:"Tercer año", periodo:"1er cuatrimestre", correlativasCursado:[{id:"fisica-ii",tipo:"regular"}], correlativasFinal:[{id:"quimica",tipo:"aprobada"},{id:"fisica-i",tipo:"aprobada"}, {id:"fisica-ii",tipo:"final"}] },
  { id:"ingles", codigo:"35-22", nombre:"Inglés", anio:"Tercer año", periodo:"1er cuatrimestre", correlativasCursado:[], correlativasFinal:[] }
];


// Separación explícita de las tres columnas del PDF. Estas asignaciones prevalecen
// sobre los datos iniciales para evitar mezclar "aprobada para cursar" con "aprobada para rendir".
const relations = {
  "algebra-lineal": { regular:[], approved:[], final:[["mat-discreta","final"]] },
  "calculo-i": { regular:[["intro-analisis","regular"]], approved:[], final:[["intro-analisis","final"]] },
  "algoritmos-i": { regular:[["intro-programacion","regular"]], approved:[], final:[["intro-programacion","final"]] },
  "arquitectura": { regular:[["intro-programacion","regular"]], approved:[], final:[["intro-programacion","final"]] },
  "calculo-ii": { regular:[["algebra-lineal","regular"],["calculo-i","regular"]], approved:[["mat-discreta","aprobada"]], final:[["algebra-lineal","final"],["calculo-i","final"]] },
  "fisica-i": { regular:[["intro-analisis","regular"]], approved:[], final:[["intro-analisis","final"]] },
  "algoritmos-ii": { regular:[["algoritmos-i","regular"]], approved:[["intro-programacion","aprobada"]], final:[["algoritmos-i","final"]] },
  "sistemas-info-i": { regular:[["intro-programacion","regular"]], approved:[], final:[["intro-programacion","final"]] },
  "sistemas-representacion": { regular:[["intro-programacion","regular"]], approved:[], final:[["intro-programacion","final"]] },
  "fisica-ii": { regular:[["fisica-i","regular"]], approved:[["intro-analisis","aprobada"]], final:[["fisica-i","final"]] },
  "paradigmas": { regular:[["algoritmos-ii","regular"]], approved:[["algoritmos-i","aprobada"]], final:[["algoritmos-ii","final"]] },
  "sistemas-info-ii": { regular:[["sistemas-info-i","regular"]], approved:[["intro-programacion","aprobada"]], final:[["sistemas-info-i","final"]] },
  "probabilidad": { regular:[["calculo-ii","regular"]], approved:[["algebra-lineal","aprobada"],["calculo-i","aprobada"]], final:[["calculo-ii","final"]] },
  "bases-datos": { regular:[["algoritmos-ii","regular"]], approved:[["algoritmos-i","aprobada"]], final:[["algoritmos-ii","final"]] },
  "ing-software-i": { regular:[["sistemas-info-ii","regular"],["bases-datos","regular"]], approved:[["algoritmos-ii","aprobada"]], final:[["sistemas-info-ii","final"],["bases-datos","final"]] },
  "sistemas-operativos": { regular:[["algoritmos-ii","regular"]], approved:[["algoritmos-i","aprobada"],["arquitectura","aprobada"]], final:[["arquitectura","final"],["algoritmos-ii","final"]] },
  "redes": { regular:[["paradigmas","regular"]], approved:[["algoritmos-ii","aprobada"]], final:[["paradigmas","final"]] },
  "fisica-iii": {regular: [["fisica-ii", "regular"]], approved: [["fisica-i", "aprobada"],["quimica", "aprobada"]], final:[["fisica-ii","final"]]},
  "ingles": {regular: [], approved: [], final: [] },
  "organizacion-empresarial": { regular:[["sistemas-info-ii","regular"],["probabilidad","regular"]], approved:[["calculo-ii","aprobada"],["sistemas-info-i","aprobada"]], final:[["sistemas-info-ii","final"],["probabilidad","final"]] },
  "analisis-algoritmos": { regular:[["paradigmas","regular"],["probabilidad","regular"]], approved:[["calculo-ii","aprobada"],["algoritmos-ii","aprobada"]], final:[["paradigmas","final"],["probabilidad","final"]] },
  "ing-software-ii": { regular:[["ing-software-i","regular"]], approved:[["sistemas-info-ii","aprobada"],["bases-datos","aprobada"]], final:[["ing-software-i","final"]] },
  "programacion-web": { regular:[["ing-software-i","regular"],["redes","regular"]], approved:[["paradigmas","aprobada"],["bases-datos","aprobada"]], final:[["ing-software-i","final"],["redes","final"]] },
  "etica": { regular:[["ing-software-i","regular"]], approved:[["calculo-ii","aprobada"]], final:[["ing-software-i","final"]] },
  "reingenieria": { regular:[["ing-software-ii","regular"]], approved:[["ing-software-i","aprobada"]], final:[["ing-software-ii","final"]] },
  "gestion-ambiental": { regular:[["etica","regular"]], approved:[["sistemas-info-ii","aprobada"],["fisica-iii","aprobada"]], final:[["etica","final"]] },
  "investigacion-operativa": { regular:[["analisis-algoritmos","regular"]], approved:[["paradigmas","aprobada"],["probabilidad","aprobada"]], final:[["analisis-algoritmos","final"]] },
  "teoria-computacion": { regular:[["analisis-algoritmos","regular"]], approved:[["paradigmas","aprobada"],["probabilidad","aprobada"]], final:[["analisis-algoritmos","final"]] },
  "metodos-numericos": { regular:[["paradigmas","regular"]], approved:[["calculo-ii","aprobada"],["algoritmos-ii","aprobada"]], final:[["paradigmas","final"]] },
  "inteligencia-artificial": { regular:[["teoria-computacion","regular"]], approved:[["analisis-algoritmos","aprobada"]], final:[["teoria-computacion","final"]] },
  "compiladores": { regular:[["teoria-computacion","regular"]], approved:[["sistemas-operativos","aprobada"],["analisis-algoritmos","aprobada"]], final:[["teoria-computacion","final"]] },
  "modelos-simulacion": { regular:[["analisis-algoritmos","regular"]], approved:[["probabilidad","aprobada"],["ing-software-ii","aprobada"]], final:[["analisis-algoritmos","final"]] },
  "elementos-economia": { regular:[["organizacion-empresarial","regular"]], approved:[["sistemas-info-ii","aprobada"],["probabilidad","aprobada"]], final:[["organizacion-empresarial","final"]] },
  "sistemas-distribuidos": { regular:[["ing-software-ii","regular"]], approved:[["redes","aprobada"]], final:[["ing-software-ii","final"]] },
  "auditoria": { regular:[["reingenieria","regular"]], approved:[["ing-software-ii","aprobada"]], final:[["reingenieria","final"]] },
  "bases-datos-avanzadas": { regular:[["sistemas-distribuidos","regular"]], approved:[["bases-datos","aprobada"]], final:[["sistemas-distribuidos","final"]] },
  "bioinformatica": { regular:[["modelos-simulacion","regular"],["sistemas-distribuidos","regular"]], approved:[["teoria-computacion","aprobada"]], final:[["modelos-simulacion","final"],["sistemas-distribuidos","final"]] },
  "opt-teoria-informacion": { regular:[], approved:[["sistemas-info-ii","aprobada"],["probabilidad","aprobada"]], final:[] },
  "opt-computacion-grafica": { regular:[["metodos-numericos","regular"]], approved:[["analisis-algoritmos","aprobada"]], final:[["metodos-numericos","final"]] },
  "opt-semantica": { regular:[], approved:[["teoria-computacion","aprobada"]], final:[] },
  "opt-analisis-estatico": { regular:[["compiladores","regular"]], approved:[["teoria-computacion","aprobada"]], final:[["compiladores","final"]] },
  "opt-verificacion-validacion": { regular:[["sistemas-distribuidos","regular"]], approved:[["analisis-algoritmos","aprobada"]], final:[["sistemas-distribuidos","final"]] },
  "opt-comunicacion": { regular:[], approved:[], final:[] },
  "opt-senales": { regular:[], approved:[["calculo-ii","aprobada"]], final:[] },
  "opt-metodologia": { regular:[], approved:[], final:[] },
  "opt-electronica": { regular:[], approved:[["arquitectura","aprobada"]], final:[] },
  "opt-sistemas-control": { regular:[["modelos-simulacion","regular"]], approved:[["analisis-algoritmos","aprobada"]], final:[["modelos-simulacion","final"]] },
  "opt-gestion-calidad": { regular:[], approved:[["reingenieria","aprobada"]], final:[] },
  "opt-financiamiento": { regular:[], approved:[["reingenieria","aprobada"]], final:[] },
  "opt-costos": { regular:[], approved:[["organizacion-empresarial","aprobada"]], final:[] },
  "opt-sig": { regular:[], approved:[["analisis-algoritmos","aprobada"],["gestion-ambiental","aprobada"]], final:[] },
  "opt-gestion-procesos": { regular:[], approved:[["organizacion-empresarial","aprobada"],["ing-software-ii","aprobada"]], final:[] }
};
for (const [id, r] of Object.entries(relations)) {
  const subject = subjects.find(s => s.id === id);
  if (!subject) continue;
  subject.correlativasCursado = r.regular.map(([rid,tipo]) => ({id:rid,tipo}));
  subject.correlativasAprobadasCursar = r.approved.map(([rid,tipo]) => ({id:rid,tipo}));
  subject.correlativasFinal = r.final.map(([rid,tipo]) => ({id:rid,tipo}));
}

const sectionOrder = ["Ingreso","Primer año","Segundo año","Tercer año","Cuarto año","Quinto año","Materias optativas"];
const subjectById = new Map(subjects.map(s => [s.id, s]));
const state = { section: "Ingreso", openIds: new Set() };

const el = id => document.getElementById(id);
const normalize = value => String(value ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("es").trim();
const safe = value => String(value ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
const sectionLabel = section => section === "Materias optativas" ? "Optativas" : section;
const periodOrder = value => value === "1er cuatrimestre" ? 1 : value === "2do cuatrimestre" ? 2 : value === "Ingreso" ? 0 : 3;

function getDependents(id) {
  return subjects.filter(s => [...(s.correlativasIngreso || []), ...(s.correlativasCursado || []), ...(s.correlativasAprobadasCursar || []), ...(s.correlativasFinal || [])].some(r => r.id === id));
}
function uniqueDependents(id) {
  const seen = new Set();
  return getDependents(id).filter(s => { if (seen.has(s.id)) return false; seen.add(s.id); return true; });
}
function renderTabs() {
  el("year-tabs").innerHTML = sectionOrder.map(section => {
    const count = subjects.filter(s => s.anio === section).length;
    return `<button class="year-tab" type="button" role="tab" aria-selected="${state.section === section}" data-section="${safe(section)}">${safe(sectionLabel(section))}<span class="tab-count"> · ${count}</span></button>`;
  }).join("");
  el("year-tabs").querySelectorAll("button").forEach(btn => btn.addEventListener("click", () => {
    state.section = btn.dataset.section;
    el("search-results").hidden = true;
    renderTabs(); renderSubjects();
    el("section-title").scrollIntoView({behavior:"smooth",block:"nearest"});
  }));
}
function getRequirementInfo(req) {
  const target = subjectById.get(req.id);
  if (req.tipo === "nota") return { subject: null, label: req.id === "__nota80" ? "Aprobar el 80 % de las asignaturas del plan" : "Aprobar todas las asignaturas del plan", tag: "Nota del plan", cls: "pending" };
  if (!target) return { subject: null, label: "Requisito por verificar", tag: "Pendiente", cls: "pending" };
  const map = {
    regular: ["Regularizada para cursar","regular"],
    aprobada: ["Aprobada para cursar","approved"],
    final: ["Aprobada para rendir","final"],
    pendiente: ["Condición por confirmar","pending"],
    ingreso: ["Requisito de ingreso","ingreso"]
  };
  const [tag, cls] = map[req.tipo] || ["Condición por confirmar","pending"];
  return { subject: target, label: target.nombre, tag: req.condicion || tag, cls };
}
function requirementList(items, emptyText) {
  if (!items || items.length === 0) return `<p class="empty-requirement">${safe(emptyText)}</p>`;
  return `<ul class="requirement-list">${items.map(req => {
    const info = getRequirementInfo(req);
    const subjectHtml = info.subject
      ? `<button class="subject-link" type="button" data-open-subject="${safe(info.subject.id)}">${safe(info.label)}</button>`
      : `<span>${safe(info.label)}</span>`;
    return `<li class="requirement-item">${subjectHtml}<span class="condition-tag ${info.cls}">${safe(info.tag)}</span></li>`;
  }).join("")}</ul>`;
}
function cardHTML(s, index) {
  const isOpen = state.openIds.has(s.id);
  const deps = uniqueDependents(s.id);
  const notes = s.notas || [];
  const hasPending = [...(s.correlativasIngreso || []), ...(s.correlativasCursado || []), ...(s.correlativasAprobadasCursar || []), ...(s.correlativasFinal || [])].some(r => r.tipo === "pendiente");
  return `<article class="subject-card ${isOpen ? "is-open" : ""}" id="card-${safe(s.id)}">
    <div class="subject-card-head">
      <button class="subject-card-toggle" type="button" aria-expanded="${isOpen}" aria-controls="details-${safe(s.id)}" data-toggle-card="${safe(s.id)}">
        <span class="subject-number">${String(index + 1).padStart(2,"0")}</span>
        <span class="subject-title-wrap"><span class="subject-name">${safe(s.nombre)}</span><span class="subject-meta">${safe(s.periodo || s.anio)}${s.codigo ? " · Código " + safe(s.codigo) : ""}</span></span>
        <span class="chevron" aria-hidden="true">⌄</span>
      </button>
    </div>
    <div class="subject-details" id="details-${safe(s.id)}" ${isOpen ? "" : "hidden"}>
      <div class="detail-columns">
        <section class="requirement-group ingreso"><div class="requirement-heading">Requisitos del ingreso</div>${requirementList(s.correlativasIngreso || [], "Sin requisitos de ingreso registrados.")}</section>
        <section class="requirement-group cursado"><div class="requirement-heading">Regulares para cursar</div>${requirementList(s.correlativasCursado, "Sin correlativas registradas para esta condición.")}</section>
        <section class="requirement-group"><div class="requirement-heading">Aprobadas para cursar</div>${requirementList(s.correlativasAprobadasCursar || [], "Sin correlativas registradas para esta condición.")}</section>
        <section class="requirement-group final"><div class="requirement-heading">Aprobadas para rendir</div>${requirementList(s.correlativasFinal, "Sin correlativas registradas para rendir.")}</section>
        <section class="requirement-group full"><div class="requirement-heading">Materias que la tienen como correlativa</div>${deps.length ? `<ul class="requirement-list">${deps.map(d => `<li class="requirement-item"><button class="subject-link" type="button" data-open-subject="${safe(d.id)}">${safe(d.nombre)}</button><span class="condition-tag">${safe(d.anio)}</span></li>`).join("")}</ul>` : `<p class="empty-requirement">No hay materias dependientes registradas.</p>`}</section>
      </div>
      ${notes.map(note => `<p class="detail-note">${safe(note)}</p>`).join("")}
    </div>
  </article>`;
}
function renderSubjects() {
  const list = subjects.filter(s => s.anio === state.section).sort((a,b) => periodOrder(a.periodo)-periodOrder(b.periodo) || a.nombre.localeCompare(b.nombre, "es"));
  el("section-eyebrow").textContent = state.section === "Ingreso" ? "MATERIAS DE INGRESO" : state.section.toUpperCase();
  el("section-title").textContent = sectionLabel(state.section);
  el("subject-count").textContent = `${list.length} ${list.length === 1 ? "materia" : "materias"}`;
  const notes = state.section === "Ingreso"
    ? ""
    : "";
  el("data-notice").hidden = !notes;
  el("data-notice").textContent = notes;
  el("subject-list").innerHTML = list.length ? list.map(cardHTML).join("") : `<div class="empty-state">No hay materias cargadas en esta sección.</div>`;
  el("subject-list").querySelectorAll("[data-toggle-card]").forEach(btn => btn.addEventListener("click", () => {
    const id = btn.dataset.toggleCard;
    if (state.openIds.has(id)) state.openIds.delete(id); else state.openIds.add(id);
    renderSubjects();
  }));
  el("subject-list").querySelectorAll("[data-open-subject]").forEach(btn => btn.addEventListener("click", () => openSubject(btn.dataset.openSubject)));
}
function openSubject(id) {
  const subject = subjectById.get(id);
  if (!subject) return;
  state.section = subject.anio;
  state.openIds.add(id);
  el("search-results").hidden = true;
  renderTabs(); renderSubjects();
  requestAnimationFrame(() => {
    const card = el(`card-${id}`);
    if (card) card.scrollIntoView({behavior:"smooth",block:"center"});
  });
}
function searchSubjects(query) {
  const q = normalize(query);
  if (!q) return [];
  // Si la consulta son solo números/guiones (ej. "35-07", "3507", "7"), se busca por código.
  const digits = q.replace(/\D/g, "");
  const isCodeQuery = digits.length > 0 && /^[\d\s\-–—./]+$/.test(q);
  if (isCodeQuery) {
    return subjects.filter(s => {
      if (!s.codigo) return false;
      const code = s.codigo.replace(/\D/g, "");          // "35-07" -> "3507"
      return digits.length <= 2
        ? code.slice(2) === digits.padStart(2, "0")      // "7" o "07" -> 35-07
        : code.startsWith(digits);                       // "3507", "350", "35-1"...
    }).sort((a,b) => a.codigo.localeCompare(b.codigo));
  }
  return subjects.filter(s => normalize([s.nombre, ...(s.alias || []), s.codigo || ""].join(" ")).includes(q))
    .sort((a,b) => sectionOrder.indexOf(a.anio)-sectionOrder.indexOf(b.anio) || a.nombre.localeCompare(b.nombre, "es"));
}
function renderSearch() {
  const query = el("global-search").value;
  el("clear-search").hidden = !query;
  if (!query.trim()) { el("search-results").hidden = true; el("search-results").innerHTML = ""; return; }
  const matches = searchSubjects(query);
  const groups = sectionOrder.map(section => ({section, items:matches.filter(s => s.anio === section)})).filter(g => g.items.length);
  el("search-results").hidden = false;
  el("search-results").innerHTML = matches.length ? groups.map(g => `<div class="search-group-title">${safe(sectionLabel(g.section))}</div>${g.items.map(s => `<button type="button" class="search-result" data-search-open="${safe(s.id)}"><span class="result-icon">↗</span><span><span class="result-name">${safe(s.nombre)}</span><span class="result-meta">${s.codigo ? "Cód. " + safe(s.codigo) + " · " : ""}${safe(s.anio)} · ${safe(s.periodo || "")}</span></span></button>`).join("")}`).join("") : `<div class="empty-state">No se encontraron materias para “${safe(query)}”.</div>`;
  el("search-results").querySelectorAll("[data-search-open]").forEach(btn => btn.addEventListener("click", () => {
    openSubject(btn.dataset.searchOpen);
    el("global-search").value = "";
    renderSearch();
  }));
}
function initTheme() {
  const stored = localStorage.getItem("malla-theme");
  const preferred = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  applyTheme(stored || preferred);
}
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const isDark = theme === "dark";
  el("theme-icon").textContent = isDark ? "☼" : "☾";
  el("theme-label").textContent = isDark ? "Tema claro" : "Tema oscuro";
  el("theme-toggle").setAttribute("aria-label", isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro");
  localStorage.setItem("malla-theme", theme);
}
el("theme-toggle").addEventListener("click", () => applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
el("global-search").addEventListener("input", renderSearch);
el("clear-search").addEventListener("click", () => { el("global-search").value = ""; renderSearch(); el("global-search").focus(); });
document.addEventListener("keydown", event => {
  if (event.key === "Escape") el("search-results").hidden = true;
});

// Validación básica para detectar errores de IDs o relaciones rotas al ampliar los datos.
(function validateData() {
  const ids = new Set();
  for (const s of subjects) {
    if (ids.has(s.id)) console.error("ID duplicado en la malla:", s.id);
    ids.add(s.id);
  }
  for (const s of subjects) {
    for (const r of [...(s.correlativasIngreso || []), ...(s.correlativasCursado || []), ...(s.correlativasAprobadasCursar || []), ...(s.correlativasFinal || [])]) {
      if (!r.id.startsWith("__") && !subjectById.has(r.id)) console.warn("Correlativa sin materia registrada:", s.nombre, r.id);
    }
  }
})();

initTheme();
renderTabs();
renderSubjects();