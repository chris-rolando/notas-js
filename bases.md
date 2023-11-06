# Apuntes 🤘

# Conceptos importantes
**Algoritmo:** instrucciones ordenadas para resolver un problema.

**Lenguajes de programación:** reglas para dar instrucciones al PC:
  *Bajo nivel*
  - Lenguaje nativo del PC, es decir pogramar componentes.
  *Alto nivel*
  - Lenguaje entendible, es decir programar aplicaciones.
  *Interpretado*
  - El codigo se ejecuta por un intérprete en tiempo de ejecución.
  *Compilado*
  - El codigo se traduce o compila a codigo maquina.

**Variable:** espacio reservado en memoria para guardar info.

**Función:** bloque de código para hacer una tarea.
Una función puede:
 1. Ser llamada o invocada.
 2. Recibir parámetros - argumentos.
 3. Procesar info.
 4. Retornar algo o realizar una acción.
 5. Sirve para organizar, reutilizar, encapsular y separar.
 6. Permite modularidad y abstracción.

**Objetos:** es una representación del mundo real. 
Es una estructura de datos formada por clave:valor
- Tiene propiedades y funciones:
 1. Propiedades o atributos: describen su estado.
  - Los datos o (sustantivos)
  - Características o atributos
 2. Funciones o comportamientos: realizan manipulaciones.
  - Los metodos o (verbos)
  - Definen el comportamiento
  
**Clases:** es una "plantilla" para crear objetos

**Eventos** acción o suceso que pasa en la app

**IDE:**
 Integrated Development Environment o _Entorno de Desarrollo Integrado_
 1. Visual studio es un entorno completo
 2. VS Code es un entorno simple (editor de codigo).

**Refactorización:** proceso para reestructurar el código sin cambiar su funcionalidad.

**Garbage collector** Se encarga de liberar la memoria que ya no se está utilizando.

**Framework** conjunto de buenas practicas para resolver problemas.

**Dependencias** componentes externos necesarios para que una app funcione

**DOM** representación estructurada del documento HTML que permite a programas y scripts acceder para manipular el contenido (estructura, estilo)

**Coerción - casteo** convertir un valor de un tipo de dato a otro tipo.

# POO
 Programacion Orientada a Objetos, es un paradigma de programación que se **enfoca en el uso de objetos** para representar conceptos del mundo real.
 
 ## Elementos de la POO:
  - Clases
  - Propiedades
  - Métodos
  - Objetos
 
  **Metodo Constructor:** subrutina para inicializar un objeto cuando se crea una instancia de una clase. 
  **¿Metodo vs función?** En Javascript, un método es una función que está asociada a un objeto. - Cada objeto tiene sus propios métodos, que se pueden usar para interactuar con el objeto.
 
 ## Pilares:
  - Encapsulamiento
  - Abstracción
  - Herencia
  - Polimorfismo
 
  1. **Encapsular:** consiste en ocultar los detalles internos, proporcionando una interfaz simplificada.
  2. **Abstracción:** enfocarse en el comportamiento, sin preocuparse por su implementación interna.
  3. **Herencia:** una clase ( hijo ) herede las propiedades y métodos de otra clase ( padre ).
  4. **Polimorfismo:** dos objetos de diferentes clases tengan el mismo comportamiento.

# API:
 Interfaces de Programación de Aplicaciones, Permiten que diferentes componentes de software se comuniquen entre sí. 

 - Una API es como una promesa:
 - Si el código interno de la biblioteca cambia, esperas que la función siga aceptando los mismos parámetros y devolviendo los mismos resultados. 
 - Eso proporciona una interfaz estable para escribir tu código. 

**Aplicación y servicios web:** App que interactúa a través de HTTP. 

## Solicitud HTTP
1. El navegador (cliente) envía una solicitud HTTP (request) al servidor web. 
2. El servidor pasa el request a la app encargada de decidir qué información mostrarte. 
    La aplicación genera el contenido web.
## Servicios web 
- Las aplicaciones web que tienen una API también se conocen como servicios web. 
1. En lugar de navegar a una página web para escribir y hacer clic, puedes usar tu programa para enviar un mensaje conocido como una llamada API al servicio web.
2. La parte del programa que escucha en la red para las llamadas API se llama punto final de la API (end point).
- Interactúas usando un protocolo especificado.


**Serialización de Datos:**
- La serialización de datos es el proceso de tomar una estructura de datos en memoria, como un objeto, y convertirlo en algo que se pueda almacenar en disco o transmitir a través de una red. 

## Formatos de Serialización de Datos
1. JSON
2. YAML (Yet Another Markup Language, Lenguaje de Marcado Adicional)

# JSON (JavaScript Object Notation)
- Admite algunos elementos de diferentes tipos de datos.
    1. Strings (encerradas entre comillas)
    2. Números
    3. Objetos: estructuras de pares clave-valor
    4. Arreglos: equivalentes a las listas de Python

- dump() y load() 

**Metodos HTTP GET - POST**
## GET
- Recupera o obtiene el recurso especificado en la URL. 
- Parametros:
1. https://ejemplo.com/ruta/a/api/fotos_de_gatos?busqueda=gato+gris&max_resultados=15
2. El signo de interrogación separa el recurso de la URL de los parámetros del recurso. Estos parámetros son uno o más pares clave-valor, formateados como una cadena de consulta
3. El parámetro de búsqueda está configurado como "gato+gris" y el parámetro max_resultados está configurado como 15.

## POST
- Envía datos a un servicio web. 

# ¿Que es JS?
 Es un leguaje para _programar aplicaciones web_.
 Da dinamismo a la web. 🦖

 **Caracteristicas:**
 - Dinámico.
 - Interpretado.
 - Orientado a objetos.
 - Débilmente tipado.

 **Cargar script** 
 - 🦖 Cargar el script al final.  
 - 🧑‍💻 `<script src="script.js"></script>`

 **Var** No Usar, da _problemas con el scope_ global.

 **Primitive value** Valor que no tiene propiedades o métodos.
 
 **Modo estricto:** reglas y características que proporcionan _mayor seguridad y control_ en el código.