# Conceptos base

**Algoritmo:** instrucciones ordenadas para resolver un problema

**Lenguajes de programacion:** reglas para dar instrucciones al PC
 ## Bajo nivel
 - Lenguaje nativo del PC, pogramar componentes
 ## Alto nivel
 - Lenguaje humanamente entendible, programar aplicaciones
 ## Interpretado
 - El codigo se ejecuta por un intérprete en tiempo de ejecución
 ## Compilado
 - El codigo se traduce o compila a codigo maquina

**Variable:** espacio reservado en memoria para guardar info (son cajitas)

**Funcion:** bloque de código para hacer una tarea
 1. Ser llamada o invocada.
 2. Recibir parámetros - argumentos.
 3. Procesar info.
 4. Retornar algo o realizar una acción.
 5. Sirve para organizar, reutilizar, encapsular y separar.
 6. Permite modularidad y abstracción.

**Objetos:** representacion del mundo real.
- Tiene propiedades y funciones:
  1. Propiedades o atributos: 
   - Los datos o (sustantivos)
   - Características o atributos
   - Describen su estado
  2. Funciones o comportamientos: 
   - Los metodos o (verbos)
   - Definen el comportamiento
   - Realizan manipulaciones sobre los datos del objeto

**Clases:** plantilla para crear objetos

**Metodo Constructor:** para inicializar un objeto cuando se crea una instancia de una clase. 

**¿Que es POO?** Programacion Orientada a Objetos
**Paradigma de programación que se enfoca en el uso de objetos** para representar conceptos del mundo real.
## Elementos:
- Clases
- Propiedades
- Métodos
- Objetos
## Pilares:
- Encapsulamiento
- Abstracción
- Herencia
- Polimorfismo

**IDE:** Integrated Development Environment
- **Entorno de Desarrollo Integrado**
- Visual studio: entorno completo
- VS Code: (editor de codigo) entorno simple

**Refactorización:** proceso para reestructurar el código sin cambiar su funcionalidad.

**Garbage collector?** Se encarga de liberar la memoria que ya no se está utilizando.

**Framework:** conjunto de buenas practicas para resolver problemas.

**Dependencias:** componentes externos necesarios para que una app funcione

**DOM:** representación estructurada del documento HTML que permite a programas y scripts acceder para manipular el contenido (estructura, estilo)

**API:**
- Interfaces de Programación de Aplicaciones
- Permiten que diferentes componentes de software se comuniquen entre sí. 

- 🦖 Una API es como una promesa:
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

## JSON (JavaScript Object Notation)
- Admite algunos elementos de diferentes tipos de datos.
    1. Strings (encerradas entre comillas)
    2. Números
    3. 🚩 Objetos: estructuras de pares clave-valor
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
