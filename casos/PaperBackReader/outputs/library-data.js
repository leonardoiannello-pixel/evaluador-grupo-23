// Archivo generado automáticamente. No editar manualmente.
window.PAPERBACK_LIBRARY = [
  {
    "schema_version": "1.0",
    "paper": {
      "id": "Customer Satisfaction at the Push of a Button _ The New Yorker",
      "file_name": "Customer Satisfaction at the Push of a Button _ The New Yorker.pdf",
      "title": "Customer Satisfaction at the Push of a Button",
      "authors": [
        "David Owen"
      ],
      "year": 2018
    },
    "user_prediction": {
      "text": "**La simplicidad puede ganarle a la precisión.** HappyOrNot prácticamente hace una sola pregunta con cuatro botones. Es una medición muy rudimentaria, pero justamente por eso consigue muchísimo volumen\n\n**El verdadero producto no es la carita: es el dato + momento + lugar.** Cada respuesta es anónima pero tiene timestamp. Eso permite detectar cosas del tipo: “todos los días a las 10:00 cae la satisfacción”. \n\n**Medir en tiempo real permite actuar, no solamente hacer reportes.** En el estadio de los 49ers pasaron de saber el martes qué había ocurrido el domingo a conocerlo **el mismo domingo, cada 15 minutos y por punto de venta**. Después llegaron incluso al monitoreo segundo a segundo. ",
      "comparison": {
        "matches": [
          "El artículo respalda que la extrema simplicidad del dispositivo reduce la fricción y permite reunir miles de respuestas, compensando en volumen parte de la escasa profundidad de cada respuesta.",
          "El artículo confirma que las respuestas son anónimas y llevan marca temporal; combinadas con la ubicación de cada terminal, permitieron detectar una caída diaria de satisfacción a las 10:00 en una tienda.",
          "El caso de los 49ers coincide con la predicción: el análisis pasó de estar disponible el martes posterior al partido a estarlo el domingo en intervalos de quince minutos y por puesto de venta, y luego segundo a segundo mediante una aplicación.",
          "El texto muestra que la medición rápida puede activar intervenciones operativas, como enviar a un empleado a investigar un aumento de respuestas negativas en una ubicación concreta."
        ],
        "differences": [
          "El artículo no demuestra que la simplicidad sea más precisa que métodos más ricos; sostiene que la facilidad de uso produce mucho volumen y presenta ese volumen como una forma de obtener una señal útil pese al ruido.",
          "Además del momento y el lugar, el valor descrito depende de vincular la señal con investigación y acción humana: cámaras, reasignación o capacitación de personal, cambios de dotación y mensajería operativa."
        ],
        "unresolved": [
          "El artículo no ofrece una validación estadística que permita saber cuánto volumen basta para compensar sesgos de selección, respuestas falsas o la falta de contexto cualitativo.",
          "Los casos narrados no permiten aislar con seguridad el efecto causal de HappyOrNot frente a otros cambios organizacionales simultáneos."
        ]
      }
    },
    "analysis": {
      "central_question": "¿Cómo puede un sistema de retroalimentación extremadamente simple, anónimo y de alto volumen convertir impresiones de clientes en información operativa útil, y cuáles son los límites de medir la satisfacción de ese modo?",
      "method": "Artículo periodístico basado en entrevistas con fundadores, empleados y clientes de HappyOrNot, observación directa del sistema en el estadio de los San Francisco 49ers y relatos de casos de uso en comercios, aeropuertos y otras organizaciones. No presenta un estudio experimental formal ni un análisis estadístico independiente.",
      "key_ideas": [
        {
          "id": 1,
          "idea": "La baja fricción intercambia profundidad por participación: una pregunta y cuatro botones producen respuestas rudimentarias, pero en un volumen que las encuestas más exigentes rara vez alcanzan.",
          "evidence": "Un solo terminal puede registrar miles de impresiones diarias sin interrumpir el paso del cliente. En el primer partido de los 49ers con HappyOrNot se reunieron veinte mil respuestas, aproximadamente tantas como todas las encuestas devueltas durante el año anterior.",
          "source_location": "Páginas 2-3 y 7"
        },
        {
          "id": 2,
          "idea": "La marca temporal y la ubicación convierten una valoración anónima en una señal diagnóstica capaz de revelar patrones que los totales agregados ocultan.",
          "evidence": "Una tienda observó que la satisfacción caía todos los días a las 10:00; la revisión de video vinculó el patrón con el inicio del turno de una empleada. En el estadio, cada terminal se representaba en un mapa y los cambios podían recorrerse por hora y por zona.",
          "source_location": "Páginas 3 y 8"
        },
        {
          "id": 3,
          "idea": "La retroalimentación en tiempo real puede integrarse a la operación para investigar y corregir problemas mientras la experiencia todavía está ocurriendo.",
          "evidence": "Los 49ers pasaron de conocer el martes el desempeño del domingo a verlo el mismo domingo cada quince minutos y por puesto de venta; más tarde pudieron monitorearlo segundo a segundo. Una aplicación permitía enviar personal ante picos negativos y comunicar faltantes o problemas de limpieza con mensajes y fotos.",
          "source_location": "Páginas 7-8"
        },
        {
          "id": 4,
          "idea": "Una medida de satisfacción separada de los indicadores comerciales puede cuestionar diagnósticos previos y orientar cambios de recursos.",
          "evidence": "Un minorista de sofás suponía que sus empleados diurnos explicaban las bajas ventas, pero los clientes estaban más satisfechos en esas horas. La menor satisfacción aparecía cuando las ventas eran altas; al reforzar la dotación por la tarde y noche, mejoraron las ganancias.",
          "source_location": "Página 3"
        },
        {
          "id": 5,
          "idea": "El gran volumen no elimina los problemas de medición: las respuestas pueden reflejar factores ajenos al servicio, incluir pulsaciones falsas o inducir conductas dirigidas a mejorar la métrica en vez de la experiencia.",
          "evidence": "El artículo menciona factores exógenos que afectan valoraciones, observa una pulsación negativa de alguien que no compró y cita un caso ajeno a HappyOrNot en el que una institución mejoró su calificación rechazando a los pacientes más enfermos. Los responsables confían en retrasos entre pulsaciones y en la relación señal-ruido, pero no presentan una validación independiente.",
          "source_location": "Páginas 2, 7 y 9"
        }
      ],
      "main_conclusion": "El artículo sostiene que HappyOrNot vuelve accionable la satisfacción al hacer la respuesta casi instantánea y asociarla con tiempo y lugar: la escala y velocidad permiten localizar problemas, revisar supuestos e intervenir durante la operación. A la vez, advierte que una métrica simple no equivale a una medición completa u objetiva de la felicidad y puede contener ruido, sesgos o incentivos perversos.",
      "limitations": [
        "Es un reportaje periodístico y no una evaluación científica controlada; gran parte de la evidencia proviene de la empresa y de clientes seleccionados.",
        "Las respuestas anónimas no permiten verificar quién respondió, por qué lo hizo ni si representa al conjunto de clientes.",
        "Una valoración de cuatro opciones aporta muy poco contexto cualitativo y puede verse afectada por factores ajenos al servicio evaluado.",
        "El volumen puede amortiguar respuestas espurias, pero el artículo no cuantifica el sesgo, la tasa de participación ni la precisión de la señal.",
        "Medir un indicador puede generar manipulación o conductas orientadas a optimizar la puntuación en lugar del resultado sustantivo.",
        "Los resultados narrados son casos observacionales; no permiten atribuir causalmente todas las mejoras al sistema de medición."
      ],
      "agent_uncertainties": [
        "El documento es un artículo de revista y no un paper académico; por eso el campo method describe el enfoque periodístico y no un diseño de investigación formal.",
        "La afirmación de que la satisfacción general de seguridad en Heathrow aumentó más de la mitad se atribuye en el texto a un ejecutivo de HappyOrNot y no se acompaña de datos independientes ni detalles del cálculo.",
        "El artículo no informa tasas de respuesta, intervalos de confianza ni criterios estadísticos para distinguir señal de ruido."
      ]
    },
    "quiz": [
      {
        "id": 1,
        "question": "¿Cuál es el principal intercambio que hace posible el alto volumen de respuestas de HappyOrNot?",
        "options": [
          {
            "id": "A",
            "text": "Reduce la profundidad de cada respuesta para minimizar el esfuerzo de participar."
          },
          {
            "id": "B",
            "text": "Solicita datos personales para poder corregir el sesgo de selección."
          },
          {
            "id": "C",
            "text": "Reemplaza las opiniones espontáneas por entrevistas con muestras pequeñas."
          },
          {
            "id": "D",
            "text": "Ofrece premios para asegurar que cada cliente responda varias preguntas."
          }
        ],
        "correct_option_id": "A",
        "explanation": "La opción A es correcta porque una única pregunta con cuatro botones puede responderse sin detenerse. Esa baja fricción sacrifica detalle individual, pero genera una cantidad de observaciones que puede revelar patrones operativos.",
        "related_idea_id": 1,
        "difficulty": "medium"
      },
      {
        "id": 2,
        "question": "¿Qué característica permitió investigar la caída diaria de satisfacción a las 10:00 en una tienda?",
        "options": [
          {
            "id": "A",
            "text": "La identificación nominal de cada cliente insatisfecho."
          },
          {
            "id": "B",
            "text": "La combinación de marca temporal y ubicación del terminal."
          },
          {
            "id": "C",
            "text": "La inclusión de comentarios escritos junto a cada voto."
          },
          {
            "id": "D",
            "text": "La comparación anual con reseñas publicadas en línea."
          }
        ],
        "correct_option_id": "B",
        "explanation": "La opción B es correcta: aunque el voto era anónimo, su momento y ubicación permitieron detectar un patrón repetido y contrastarlo con video. Conceptualmente, esos metadatos convierten una reacción mínima en una pista diagnóstica.",
        "related_idea_id": 2,
        "difficulty": "medium"
      },
      {
        "id": 3,
        "question": "¿Qué cambio distingue el uso operativo de HappyOrNot por los 49ers de una encuesta postpartido tradicional?",
        "options": [
          {
            "id": "A",
            "text": "Permitió conocer la identidad de cada aficionado durante el partido."
          },
          {
            "id": "B",
            "text": "Eliminó la necesidad de que empleados investigaran los problemas detectados."
          },
          {
            "id": "C",
            "text": "Permitió observar variaciones por momento y puesto, y responder durante el evento."
          },
          {
            "id": "D",
            "text": "Convirtió automáticamente cada respuesta negativa en una solución específica."
          }
        ],
        "correct_option_id": "C",
        "explanation": "La opción C es correcta porque la información pasó a estar disponible el mismo domingo, primero cada quince minutos y después segundo a segundo, desagregada por ubicación. Esto importa porque acorta el ciclo entre señal, investigación y acción.",
        "related_idea_id": 3,
        "difficulty": "medium"
      },
      {
        "id": 4,
        "question": "¿Qué aprendizaje produjo el caso del minorista sueco de sofás?",
        "options": [
          {
            "id": "A",
            "text": "Las bajas ventas diurnas demostraban que el personal de la mañana atendía peor."
          },
          {
            "id": "B",
            "text": "Las ventas y la satisfacción siempre se movían en la misma dirección."
          },
          {
            "id": "C",
            "text": "Los clientes estaban menos satisfechos cuando había menos actividad comercial."
          },
          {
            "id": "D",
            "text": "Las horas de mayores ventas podían rendir aún más si se reforzaba la atención."
          }
        ],
        "correct_option_id": "D",
        "explanation": "La opción D es correcta: la satisfacción era más baja durante las horas de ventas altas, lo que llevó a reforzar la dotación en esos períodos y mejoró las ganancias. El caso muestra cómo una métrica distinta puede cuestionar una interpretación basada sólo en ingresos.",
        "related_idea_id": 4,
        "difficulty": "hard"
      },
      {
        "id": 5,
        "question": "¿Cuál es la inferencia más prudente sobre la afirmación de que el alto volumen asegura una buena relación señal-ruido?",
        "options": [
          {
            "id": "A",
            "text": "El volumen vuelve imposible que factores externos alteren las valoraciones."
          },
          {
            "id": "B",
            "text": "El volumen puede amortiguar votos espurios, pero no demuestra ausencia de sesgos."
          },
          {
            "id": "C",
            "text": "El volumen permite interpretar causalmente cualquier cambio de satisfacción."
          },
          {
            "id": "D",
            "text": "El volumen garantiza que quienes responden representan a todos los clientes."
          }
        ],
        "correct_option_id": "B",
        "explanation": "La opción B es correcta. Muchas observaciones pueden reducir el peso relativo de una pulsación falsa, pero no corrigen automáticamente selección, factores exógenos o manipulación de la métrica. Esta distinción evita confundir cantidad de datos con validez.",
        "related_idea_id": 5,
        "difficulty": "hard"
      }
    ],
    "_source_file": "Customer Satisfaction at the Push of a Button _ The New Yorker.json"
  },
  {
    "schema_version": "1.0",
    "paper": {
      "id": "dt930_0",
      "file_name": "dt930_0.pdf",
      "title": "Un Modelo Simple de Equilibrio General y Análisis de Series Históricas de Argentina 1970-2025",
      "authors": [
        "Carlos Alfredo Rodríguez"
      ],
      "year": 2026
    },
    "user_prediction": {
      "text": "1. **Nominal no significa real.** En Argentina, dinero, precios, salarios y tipo de cambio nominal crecieron cantidades astronómicas en 55 años, mientras las variables reales tuvieron variaciones muchísimo menores.\n2. **El salario nominal puede multiplicarse sin aumentar el poder adquisitivo.** Según la serie construida por el autor, el salario real normalizado vale 1 tanto en 1970 como en 2000 y 2025, reflejando una extraordinaria debilidad del crecimiento del ingreso laboral real.\n3. **No se pueden fijar arbitrariamente varias variables nominales.** Cuando el gobierno intenta controlar simultáneamente precios, salarios, dinero o tipo de cambio en niveles incompatibles con el equilibrio real, aparecen escasez, racionamiento y mercados paralelos. ",
      "comparison": {
        "matches": [
          "La predicción distingue correctamente las enormes variaciones acumuladas de las variables nominales del rango mucho más acotado de las variables reales; este es el resultado central que el paper destaca en las Tablas 1 y 2 y en sus conclusiones.",
          "La predicción reproduce fielmente el resultado de la serie salarial: el salario real normalizado es 1,00 en 1970, 2000 y 2025, lo que el autor interpreta como extraordinaria debilidad del crecimiento del ingreso laboral real, no como ausencia literal de crecimiento de toda la economía.",
          "La predicción coincide con el argumento teórico según el cual fijar simultáneamente dos o más variables nominales en valores incompatibles con el equilibrio real genera excesos de oferta o demanda, racionamiento y mercados paralelos."
        ],
        "differences": [
          "La predicción usa el término «escasez», mientras que el paper formula el resultado con mayor precisión como «excesos de oferta o demanda», además de racionamiento y mercados paralelos.",
          "El paper añade una explicación formal ausente de la predicción: tres condiciones de equilibrio homogéneas de grado cero determinan tres variables reales, pero dejan indeterminadas las cuatro variables nominales hasta elegir un numerario."
        ],
        "unresolved": [
          "Las series históricas ilustran la separación entre magnitudes nominales y reales, pero el documento no presenta una prueba econométrica que identifique causalmente el efecto de controles nominales específicos sobre escasez, racionamiento o mercados paralelos.",
          "La falta de las bases originales de las series de 1970-2000 impide verificar de manera independiente la exactitud de todos los valores históricos usados en la comparación."
        ]
      }
    },
    "analysis": {
      "central_question": "¿Cómo muestra un modelo walrasiano simple de economía abierta la necesidad de elegir un numerario y la diferencia entre variables nominales y reales, y cómo ilustra esa diferencia la experiencia argentina de 1970-2025?",
      "method": "El autor presenta un modelo simple de equilibrio general walrasiano para una economía abierta, con tres condiciones de equilibrio —mercado de dinero, balance de pagos y mercado de trabajo— y cuatro variables nominales —M, E, P y W—. Por homogeneidad de grado cero, el sistema determina M/P, E·P*/P y W/P, pero requiere fijar exógenamente un numerario. Luego construye y enlaza artesanalmente series representativas normalizadas a 1970=1: para 1970-2000 utiliza series docentes cuyas bases originales ya no están disponibles; desde 2000 las enlaza con series disponibles de RIPTE, M1 y dólar paralelo, junto con precios mayoristas argentinos y precios al consumidor de Estados Unidos. Compara niveles nominales y cocientes reales mediante dos tablas y gráficos descriptivos, sin análisis econométrico.",
      "key_ideas": [
        {
          "id": 1,
          "idea": "El equilibrio real no fija por sí solo los niveles nominales: hace falta elegir un numerario.",
          "evidence": "El modelo tiene cuatro variables nominales (M, E, P y W) y tres condiciones de equilibrio homogéneas de grado cero. Estas determinan únicamente tres relaciones reales —M/P, E·P*/P y W/P—, de modo que una variable nominal debe determinarse exógenamente.",
          "source_location": "Páginas internas 2-3 (páginas 4-5 del PDF), sección «Modelo Simple de Equilibrio General»; recapitulación en «Conclusiones», páginas internas 10-11."
        },
        {
          "id": 2,
          "idea": "Las magnitudes nominales argentinas crecieron en muchos órdenes de magnitud, mientras las variables reales se mantuvieron en un rango incomparablemente menor.",
          "evidence": "Con todas las series normalizadas a 1970=1, la Tabla 1 muestra que en 2025 las variables nominales alcanzan aproximadamente entre 159 billones y 1.116 billones de veces su nivel inicial. La Tabla 2 muestra, en cambio, que las variables reales observadas durante el período van desde un mínimo de 0,16 hasta un máximo de 10,11.",
          "source_location": "Páginas internas 5-9 (páginas 7-11 del PDF), Tablas 1 y 2 y Gráficos 1 y 2; «Conclusiones», página interna 10."
        },
        {
          "id": 3,
          "idea": "El aumento del salario nominal no implica por sí mismo una mejora del salario real.",
          "evidence": "Aunque el salario nominal normalizado pasa de 1 en 1970 a 159.273.814.229.247 en 2025, el salario real W/IPM registra 1,00 en 1970, 2000 y 2025. El autor interpreta este resultado como una extraordinaria debilidad del crecimiento del ingreso laboral real, no como ausencia literal de crecimiento de la economía.",
          "source_location": "Páginas internas 6-8 (páginas 8-10 del PDF), comentario sobre salario real y Tablas 1 y 2; «Conclusiones», páginas internas 10-11."
        },
        {
          "id": 4,
          "idea": "Fijar simultáneamente variables nominales no garantiza los valores reales buscados y puede producir desequilibrios observables.",
          "evidence": "El paper sostiene que, cuando los gobiernos fijan dos o más variables nominales en niveles incompatibles con las condiciones de equilibrio real, aparecen excesos de oferta o demanda, racionamiento y mercados paralelos. También advierte contra equiparar aumentos nominales de dinero o salarios y devaluaciones con aumentos de sus contrapartes reales.",
          "source_location": "Páginas internas 3-4 (páginas 5-6 del PDF), discusión posterior al modelo."
        },
        {
          "id": 5,
          "idea": "Los resultados históricos son ilustrativos y aproximados, no una base estadística apta para inferencia econométrica.",
          "evidence": "Las series de 1970-2000 fueron construidas con fines docentes y sus bases originales ya no están disponibles; la identificación de fuentes antiguas es tentativa. La extensión posterior se enlazó artesanalmente con series disponibles, y el autor indica expresamente que los datos no deben tomarse como base para usos econométricos.",
          "source_location": "Páginas internas 4-7 (páginas 6-9 del PDF), descripción de construcción de series y nota de la Tabla 1."
        }
      ],
      "main_conclusion": "La experiencia argentina de 1970-2025 ofrece un caso extremo de una propiedad básica del modelo: las variables nominales pueden cambiar en muchos órdenes de magnitud, pero las variables reales relevantes dependen de relaciones entre magnitudes y no de sus niveles absolutos. El crecimiento nominal acumulado refleja la historia inflacionaria y la inestabilidad monetaria e institucional, mientras que la serie construida muestra una marcada debilidad del salario medio real a lo largo de los 55 años.",
      "limitations": [
        "Las series fueron construidas y enlazadas artesanalmente y deben interpretarse como aproximaciones históricas, no como una base para usos econométricos.",
        "Las bases originales de las series 1970-2000 ya no están disponibles y la identificación de algunas fuentes antiguas —ACDE e IMF International Financial Statistics— es tentativa.",
        "La ausencia de series oficiales completas y los controles sobre salarios, precios y mercado cambiario dificultan la medición; por ello se emplean proxies como el dólar paralelo, el IPM, M1 y una serie salarial basada en ACDE/RIPTE.",
        "Las variables están normalizadas a 1970=1 y se muestran años seleccionados, no una secuencia anual completa en todo el período; esto limita la lectura de trayectorias intermedias.",
        "El análisis es descriptivo y teórico: no estima relaciones causales ni cuantifica estadísticamente la incertidumbre de las series."
      ],
      "agent_uncertainties": [
        "El documento no detalla procedimientos reproducibles de empalme, fórmulas completas de construcción ni las bases originales para 1970-2000, por lo que no es posible auditar independientemente todos los valores.",
        "La frase de las conclusiones que ubica las variables nominales entre aproximadamente 150 y 1.100 billones de veces se interpretó conforme a los niveles normalizados de la Tabla 1; el propio autor advierte que es fácil equivocarse al expresar porcentajes con tantos ceros.",
        "La atribución de cambios reales a capital, tecnología, inflación, restricciones financieras u otros factores se presenta como interpretación económica del autor y no como resultado causal probado en el documento."
      ]
    },
    "quiz": [
      {
        "id": 1,
        "question": "¿Por qué el modelo requiere elegir un numerario?",
        "options": [
          {
            "id": "A",
            "text": "Porque las cuatro variables nominales deben igualarse entre sí para que exista equilibrio."
          },
          {
            "id": "B",
            "text": "Porque tres ecuaciones homogéneas determinan relaciones reales, pero no los cuatro niveles nominales."
          },
          {
            "id": "C",
            "text": "Porque el nivel internacional de precios debe estimarse dentro del mercado de trabajo."
          },
          {
            "id": "D",
            "text": "Porque cada mercado necesita una moneda distinta para expresar sus cantidades."
          }
        ],
        "correct_option_id": "B",
        "explanation": "La opción B es correcta: las tres condiciones son homogéneas de grado cero y determinan M/P, E·P*/P y W/P, pero dejan un grado de indeterminación entre M, E, P y W. Elegir un numerario fija la escala nominal sin alterar el equilibrio real; esta distinción es la base formal del paper.",
        "related_idea_id": 1,
        "difficulty": "medium"
      },
      {
        "id": 2,
        "question": "¿Qué comparación resume mejor el resultado histórico central del paper?",
        "options": [
          {
            "id": "A",
            "text": "Las variables nominales y reales aumentaron casi en la misma proporción durante todo el período."
          },
          {
            "id": "B",
            "text": "Las variables reales crecieron en billones de veces y las nominales permanecieron cerca de uno."
          },
          {
            "id": "C",
            "text": "Las variables nominales crecieron en muchos órdenes de magnitud y las reales variaron en un rango mucho menor."
          },
          {
            "id": "D",
            "text": "Solo el tipo de cambio nominal aumentó sustancialmente; dinero, precios y salarios quedaron estables."
          }
        ],
        "correct_option_id": "C",
        "explanation": "La opción C es correcta: los niveles nominales normalizados alcanzan cientos de billones de veces el valor de 1970, mientras los cocientes reales observados van aproximadamente de 0,16 a 10,11. La diferencia muestra por qué un nivel nominal aislado no informa directamente sobre una magnitud real.",
        "related_idea_id": 2,
        "difficulty": "easy"
      },
      {
        "id": 3,
        "question": "¿Cuál es la interpretación más fiel del salario real igual a 1,00 en 1970, 2000 y 2025?",
        "options": [
          {
            "id": "A",
            "text": "Demuestra que ninguna dimensión de la economía argentina creció durante esos 55 años."
          },
          {
            "id": "B",
            "text": "Indica que el salario nominal permaneció sin cambios entre los tres años."
          },
          {
            "id": "C",
            "text": "Prueba que todos los trabajadores tuvieron exactamente el mismo poder adquisitivo."
          },
          {
            "id": "D",
            "text": "Refleja, según la serie usada, una extraordinaria debilidad del crecimiento del ingreso laboral real."
          }
        ],
        "correct_option_id": "D",
        "explanation": "La opción D es correcta y conserva el matiz del autor: la igualdad del índice en esos años caracteriza la debilidad del salario medio real según una serie aproximada, pero no demuestra ausencia literal de crecimiento de toda la economía ni igualdad entre trabajadores.",
        "related_idea_id": 3,
        "difficulty": "medium"
      },
      {
        "id": 4,
        "question": "Según el marco del paper, ¿qué puede ocurrir si se fijan simultáneamente variables nominales en niveles incompatibles con el equilibrio real?",
        "options": [
          {
            "id": "A",
            "text": "Excesos de oferta o demanda, racionamiento y mercados paralelos."
          },
          {
            "id": "B",
            "text": "Convergencia automática de todas las variables reales hacia sus valores iniciales."
          },
          {
            "id": "C",
            "text": "Eliminación permanente de la inflación sin efectos sobre otros mercados."
          },
          {
            "id": "D",
            "text": "Determinación simultánea de cuatro variables nominales mediante solo tres ecuaciones."
          }
        ],
        "correct_option_id": "A",
        "explanation": "La opción A es correcta: controles nominales mutuamente incompatibles con las relaciones de equilibrio generan desequilibrios que se manifiestan como excesos, racionamiento o mercados paralelos. Conceptualmente, fijar precios nominales no permite fijar de manera independiente todos los precios relativos.",
        "related_idea_id": 4,
        "difficulty": "medium"
      },
      {
        "id": 5,
        "question": "¿Para cuál de los siguientes usos son más apropiadas las series presentadas?",
        "options": [
          {
            "id": "A",
            "text": "Estimar con precisión econométrica el efecto causal de cada control de precios."
          },
          {
            "id": "B",
            "text": "Auditar los valores originales de 1970-2000 mediante bases plenamente reproducibles."
          },
          {
            "id": "C",
            "text": "Ilustrar históricamente la diferencia de escala entre variables nominales y reales."
          },
          {
            "id": "D",
            "text": "Medir sin error la distribución del ingreso laboral entre todos los trabajadores."
          }
        ],
        "correct_option_id": "C",
        "explanation": "La opción C es correcta: el propio autor presenta las series como aproximaciones históricas con finalidad ilustrativa. La construcción artesanal, los empalmes y la pérdida de bases originales impiden tratarlas como una base econométrica reproducible, una limitación esencial para interpretar sus resultados.",
        "related_idea_id": 5,
        "difficulty": "hard"
      }
    ],
    "_source_file": "dt930_0.json"
  },
  {
    "schema_version": "1.0",
    "paper": {
      "id": "Preparing the world for the next generation of flying machines - Futurum",
      "file_name": "Preparing the world for the next generation of flying machines - Futurum.pdf",
      "title": "Preparing the world for the next generation of flying machines",
      "authors": [],
      "year": 2026
    },
    "user_prediction": {
      "text": "1. **La tecnología del vehículo ya no es el único gran problema.** Para que drones, taxis voladores y aeronaves eléctricas funcionen masivamente hacen falta infraestructura, regulación, conocimiento operativo y aceptación social.\n2. **La movilidad aérea avanzada debe pensarse como un sistema completo.** Aeronaves, vertipuertos, energía, pasajeros y control del tráfico aéreo tienen que diseñarse como un ecosistema sociotécnico interconectado.\n3. **Los gemelos digitales permiten experimentar antes de construir.** Se pueden simular aeronaves, vertipuertos o incluso una ciudad completa y probar picos de demanda, mal clima o aterrizajes de emergencia sin asumir el riesgo real.",
      "comparison": {
        "matches": [
          "La predicción coincide con el artículo en que desarrollar las aeronaves no basta: también se requieren infraestructura y redes, conocimiento operativo y aceptación social.",
          "Coincide en caracterizar la movilidad aérea avanzada como un ecosistema de sistemas sociales y técnicos interconectados que incluye vertipuertos, energía y gestión del tráfico aéreo.",
          "Coincide en que los gemelos digitales pueden representar aeronaves, vertipuertos o una red urbana completa y ensayar de forma segura interrupciones meteorológicas, aterrizajes de emergencia y picos de demanda."
        ],
        "differences": [
          "La predicción menciona explícitamente la regulación; el artículo habla de medidas de política pública y de una nueva gestión del tráfico de baja altitud, pero no desarrolla un marco regulatorio concreto.",
          "El artículo agrega como condiciones relevantes la viabilidad económica, la percepción de equidad y el riesgo de que la movilidad aérea avanzada sea vista como disruptiva o elitista."
        ],
        "unresolved": [
          "El artículo no demuestra todavía que el sistema pueda operar masivamente, ni cuantifica seguridad, costos, demanda, emisiones o aceptación social.",
          "No permite determinar qué diseños regulatorios, de vertipuertos o de gestión del tráfico resultarán eficaces en operación real."
        ]
      }
    },
    "analysis": {
      "central_question": "¿Qué sistemas técnicos, operativos y sociales deben desarrollarse para integrar de forma segura y aceptable la movilidad aérea avanzada en el mundo actual, y cómo pueden las simulaciones con gemelos digitales apoyar ese proceso?",
      "method": "Artículo de divulgación basado principalmente en explicaciones y declaraciones del profesor Jean-Marc Frayret sobre el programa del SDG Institute of Advanced Air Mobility. Describe un enfoque de ingeniería industrial y dos trabajos de modelado en curso: una simulación del flujo de pasajeros en vertipuertos y un modelo 3D del espacio aéreo de Montréal. No presenta un diseño de estudio empírico, muestra, protocolo de validación ni resultados cuantitativos.",
      "key_ideas": [
        {
          "id": 1,
          "idea": "La adopción de la movilidad aérea avanzada depende de un ecosistema sociotécnico, no solamente del desarrollo de nuevas aeronaves.",
          "evidence": "El artículo sostiene que, además de vehículos y propulsión, hacen falta infraestructura y redes, conocimiento operativo y aceptación social; presenta el éxito de la AAM como dependiente de sistemas sociales y técnicos interconectados.",
          "source_location": "Secciones introductorias y 'Preparing for take-off'."
        },
        {
          "id": 2,
          "idea": "Los vertipuertos y la gestión automatizada del tráfico de baja altitud son componentes críticos de la infraestructura operativa.",
          "evidence": "El equipo estudia ubicaciones, necesidades energéticas y operación cotidiana de vertipuertos; el artículo también plantea sistemas digitales automatizados para coordinar aeronaves pilotadas y autónomas, debido a que los errores podrían ser catastróficos.",
          "source_location": "Sección 'Preparing for take-off'."
        },
        {
          "id": 3,
          "idea": "Los gemelos digitales permiten probar y optimizar escenarios complejos antes de desplegar sistemas reales.",
          "evidence": "Se describe que pueden representar una aeronave, un vertipuerto o la red de movilidad completa de una ciudad, conectarse con datos operativos vivos y ensayar de forma segura mal clima, aterrizajes de emergencia y picos de demanda.",
          "source_location": "Sección 'Digital twins'."
        },
        {
          "id": 4,
          "idea": "La legitimidad social y la viabilidad económica deben incorporarse al diseño, no tratarse como consecuencias posteriores.",
          "evidence": "El artículo pide integrar estacionalidad, diversidad demográfica, aceptación y factibilidad financiera, y afirma que la ciudadanía debe percibir la AAM como beneficiosa, equitativa, segura y no elitista ni disruptiva.",
          "source_location": "Sección 'Digital twins', párrafos sobre realidades sociales y confianza pública."
        }
      ],
      "main_conclusion": "La movilidad aérea avanzada solo podrá pasar de la promesa tecnológica a la operación cotidiana si se diseñan conjuntamente aeronaves, vertipuertos, energía, gestión del espacio aéreo y condiciones sociales; las simulaciones y los gemelos digitales son herramientas para explorar esas interdependencias antes del despliegue real.",
      "limitations": [
        "Es una nota de divulgación y perfil de investigación, no un artículo académico con método y resultados revisables en detalle.",
        "El propio texto indica que la investigación está en etapas tempranas; los modelos descritos están en funcionamiento o construcción, pero no se informan resultados de validación.",
        "No se presentan datos cuantitativos sobre seguridad, capacidad, costos, emisiones, demanda, experiencia de pasajeros o aceptación social.",
        "La mayor parte de las afirmaciones sobre beneficios y posibilidades proviene de declaraciones del director de investigación del instituto, por lo que deben leerse como objetivos o potenciales, no como efectos demostrados.",
        "El texto se centra en Canadá y Montréal; no establece hasta qué punto sus planteos se generalizan a otros contextos geográficos, climáticos o regulatorios."
      ],
      "agent_uncertainties": [
        "El documento no identifica una autoría personal de la nota; por eso paper.authors se deja como un array vacío.",
        "El PDF es una exportación de una página web en una sola página PDF muy extensa; las ubicaciones se expresan mediante encabezados de sección y no mediante números de página.",
        "No se puede determinar a partir del documento cómo se validarán los gemelos digitales ni qué datos operativos en vivo utilizarán."
      ]
    },
    "quiz": [
      {
        "id": 1,
        "question": "Según el artículo, ¿cuál es el principal error de tratar la movilidad aérea avanzada solo como un problema de diseño de aeronaves?",
        "options": [
          {
            "id": "A",
            "text": "Impide elegir entre propulsión eléctrica e híbrida para cada trayecto."
          },
          {
            "id": "B",
            "text": "Omite la infraestructura, la operación y las condiciones sociales necesarias para integrarlas."
          },
          {
            "id": "C",
            "text": "Obliga a concentrar todos los vuelos en las grandes ciudades canadienses."
          },
          {
            "id": "D",
            "text": "Supone que todas las aeronaves deberán estar tripuladas por pilotos humanos."
          }
        ],
        "correct_option_id": "B",
        "explanation": "La opción B es correcta porque el argumento central presenta la AAM como un ecosistema de sistemas técnicos y sociales. Esta perspectiva importa porque una aeronave funcional no garantiza por sí sola infraestructura, coordinación operativa, seguridad ni aceptación pública.",
        "related_idea_id": 1,
        "difficulty": "easy"
      },
      {
        "id": 2,
        "question": "¿Qué combinación refleja mejor los dos desafíos operativos destacados en la sección sobre preparación para el despegue?",
        "options": [
          {
            "id": "A",
            "text": "Diseñar vertipuertos y coordinar digitalmente el tráfico de baja altitud."
          },
          {
            "id": "B",
            "text": "Aumentar aeropuertos internacionales y sustituir todos los vuelos regionales."
          },
          {
            "id": "C",
            "text": "Unificar el clima canadiense y eliminar la diversidad entre regiones."
          },
          {
            "id": "D",
            "text": "Limitar los drones al transporte de pasajeros y excluir el movimiento de carga."
          }
        ],
        "correct_option_id": "A",
        "explanation": "La opción A es correcta: el artículo vincula la operación de vertipuertos con una nueva gestión automatizada para aeronaves pilotadas y autónomas. Ambos componentes son conceptualmente importantes porque conectan la infraestructura terrestre con el uso seguro y escalable del espacio aéreo.",
        "related_idea_id": 2,
        "difficulty": "medium"
      },
      {
        "id": 3,
        "question": "¿Qué rasgo diferencia en el artículo a un gemelo digital de una simulación tradicional estática?",
        "options": [
          {
            "id": "A",
            "text": "Solo representa objetos que ya fueron construidos y certificados."
          },
          {
            "id": "B",
            "text": "Funciona sin supuestos, escenarios ni modelos de comportamiento."
          },
          {
            "id": "C",
            "text": "Se conecta con datos operativos vivos y puede evolucionar con el sistema."
          },
          {
            "id": "D",
            "text": "Reemplaza la necesidad de tomar decisiones en el sistema real."
          }
        ],
        "correct_option_id": "C",
        "explanation": "La opción C es correcta porque el texto resalta la conexión con datos operativos vivos como característica distintiva. Esto permite que el modelo cambie con el sistema y apoye decisiones de diseño y operación, aunque el artículo no demuestra todavía su validación.",
        "related_idea_id": 3,
        "difficulty": "medium"
      },
      {
        "id": 4,
        "question": "Si un sistema de taxis aéreos fuera técnicamente seguro pero percibido como elitista y económicamente inviable, ¿qué conclusión sería más consistente con el artículo?",
        "options": [
          {
            "id": "A",
            "text": "El sistema estaría listo porque la seguridad técnica es el único criterio de adopción."
          },
          {
            "id": "B",
            "text": "La percepción social dejaría de importar una vez construidos los vertipuertos."
          },
          {
            "id": "C",
            "text": "La automatización del tráfico compensaría por sí sola ambos problemas."
          },
          {
            "id": "D",
            "text": "El diseño seguiría incompleto porque también requiere legitimidad social y viabilidad económica."
          }
        ],
        "correct_option_id": "D",
        "explanation": "La opción D es correcta porque el artículo incorpora factibilidad financiera, equidad percibida y aceptación al diseño del sistema. La importancia conceptual es que el desempeño técnico no basta para asegurar una adopción social sostenible.",
        "related_idea_id": 4,
        "difficulty": "hard"
      }
    ],
    "_source_file": "Preparing the world for the next generation of flying machines - Futurum.json"
  }
];
