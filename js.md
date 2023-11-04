# Apuntes Javascript 🤘

nota: 🦖 \ hack: 🤖 \ bookmark: 🚩 \ code: 🧑‍💻 \ key: 👑

# Intro

## Operadores

- 🚩 Igualdad "=="
- 🚩 Mismo valor y tipo "==="
- 🚩 Diferente valor o tipo: !==

## Template strings

🚩 En windows usar: alt+96

- 🧑‍💻 `const nombre="Chris"; console.log(`Hola ${nombre}`);`

## Coerción - casteo

**conversión automática** ( implícita )

- 🧑‍💻 `const number = 10; const string = number; `

**casteo** ( explícita )

- 🧑‍💻

```
 const number = 10;
 const string = "10";
 const castedNumber = Number(string);
```

## Truthy & falsy

Valores verdaderos y falsos: 0, "", NaN, undefined o null.

- Todo valor que no sea falsy es truthy

## Debugging

🚩 Se utiliza para **detener la ejecución** del código en un punto específco.

- 🧑‍💻

```
 let numero = 5;
 debugger;
```

## Más

- **Var** No Usar, da _problemas con el scope_ global.
- **Modo estricto:** reglas y características que proporcionan _mayor seguridad y control_ en el código.
- 🤖 **this:** se refiere al _objeto actual_ en el que se está ejecutando el código. ( depende de su contexto )

---

# 👑 Funciones

## Funcion Declarativa

🦖 Funcion "normal"

- 🧑‍💻

```
 function sumar() {
     return 5 + 3;
 }
 sumar(5,3);
 // con parametros opcionales o inicializados
 function resta( a, b=3 ) {
     return a - b;
 }
 resta(5);
```

## Funcion de Expresión ( anonima )

🦖 Se definen "como una expresión!"

- Puede ser asignada a una variable
- 🤖 Usar para:

1.  Tareas cortas
2.  Para funciones que solo se necesitan en un lugar
3.  Como parámetros de otras funciones.
4.  Como valores de retorno de otras funciones.
5.  Como filtros o validadores.
6.  Para manejar eventos.

- 🧑‍💻

```
 // uso 1
 const imprimirMensaje = () => {
  console.log("Hola, mundo!");
 };
 imprimirMensaje();

 // uso 2
 let sumar= function (a,b){ return a + b }`
```

## IIFE (Immediately Invoked Function Expression)

🦖 Función que se autoejecuta inmediatamente después de ser definida

- Es anónima!
- No se puede reutilizar!
- 🧑‍💻

```
 (function () {
 console.log("Soy una funcion");
 })();
```

## 🚩 Funcion Flecha - Arrow function

🦖 Funciones de una sola línea

- 🧑‍💻 (argumentos) => expresión que se evalúa y se devuelve

```
 const nombre = "Chris";
 const saludar = () => console.log("Hola " + nombre);
 saludar(); // Imprime 'Hola Chris'

```

## Más

- **Funciones declarativas se mueven al principio** del ámbito por lo que se pueden llamar antes de su definición.
- **Funciones de expresión NO se elevan** por lo que solo se pueden llamar después de su definición.
- **Funciones declarativas tienen alcance de función**.
- **Funciones de expresión tienen alcance de variable**.

---

# Scope ( Ambito de aplicacion )

Determina el alcance o **accesibilidad que tiene cada variable**.

1. Function scope
2. Global scope
3. Block scope

## Más

**Block scope:**

- 🦖 Las variables pueden ser accedidas desde el bloque.
- 🦖 El codigo que está dentro de {}.

---

# Hoisting ( Elevación )

Se da cuando las declaraciones de variables y funciones son **desplazadas a la parte superior del scope más cercano**.

- 🧑‍💻

```
 console.log(name); // undefined
 var name = "Bard";

 console.log(greet()); // "Hola, Bard!"
 function greet() {
  return "Hola, Bard!";
 }
```

- 🦖 name y greet() se usan antes de ser declaradas. **Esto produce un error?** _No_, se "hoistea" la declaración.

## Más

- Solo funciona con las declaraciones de variables y funciones.
- 🤖 Tratar de declarar variables arriba.

---

# typeof

- Se utiliza para **retornar el tipo de datos** de un valor.
- 🧑‍💻

```
 const value = 25;

 if (typeof value === "number") {
   // Realizar la operación
 } else {
   // Lanzar un error
 }
```

---

# Estructuras de control

- **if** Seleccion _unica_
- **switch** Selección _multiple_
- 🚩 **Operador ternario**
  Evaluar una _condición y devolver un valor_ en función del resultado

  - 🧑‍💻 condicion ? valor_si_verdadero : valor_si_falso;
    `const result2 = number > 10 ? "Mayor que 10" : "Menor o igual que 10";`

---

# Iterar

- **for** _Conocemos la cantidad de repeticiones_
- **for..in** para iterar sobre las _propiedades_ enumerables de un objeto 🦖
- **for..of** para iterar sobre los _elementos_ de una colección iterable 🦖
- **forEach()** función de callback que se utiliza para iterar sobre una colección de elementos y ejecutar una función para cada elemento de la colección.
- **While** _No conocemos la cantidad_ de repeticiones

---

# 👑 Objetos
## ¿Que es un objeto?
En Javascript "Un objeto es una **colección de propiedades**".
**¿Que son propiedades?**
Las propiedades **definen las características** del objeto.

🤖 Son un conjunto de clave y valor.

**Notas:**

- _Usar const_ para declarlos.
- En Javascript _TODO es un objeto_ excepto por los primitivos y las funciones.

**Crear objetos**

1. 🚩 Usar object literal.
2. Usar new Object().
3. Usar un constructor.
4. Usar Object.create().
🧑‍💻 
 ```
  const auto = {marca: "BMW", modelo: "X6"}; //1
 ```
**Acceder a los objetos**

1. Notacion de corchetes: `objectName["propertyName"];`
2. 🚩 Notacion de punto: `objectName.propertyName;`

**Object.values()** convertir un objeto a arreglo.
**JSON.stringify()** convertir un objeto a string.
**🤖 Object.assign()** para copiar de un objeto a otro.
🧑‍💻
 ```
  const objeto1 = {a: 1, b: 2};
  const objeto2 = {c: 3, d: 4};
  const nuevoObjeto = Object.assign({}, objeto1, objeto2);
  console.log(nuevoObjeto); // Output: {a: 1, b: 2, c: 3, d: 4}
 ```

**Object.freeze()** para impedir que sea modificado
**Object.getOwnProperties** retorna un array con todas las propiedades de un objeto que son de su propiedad (no heredadas 🦖)
**Iterar un objeto**

1. 🚩 Bucle for..in
2. Bucle for..of
3. Object.keys() retorna un _array con las claves_.
4. Object.values() retorna un _array con los valores_. (incluye valores heredados de los prototipos)
5. Object.entries() retorna un _array con las parejas clave-valor_ enumerables del objeto.

**hasOwnProperty()** retorna un booleano indicando si un objeto tiene una propiedad específica que es de su propiedad (no heredada)
🧑‍💻

```
 const objeto1 = {a: 1, b: 2};
 const objeto2 = Object.create(objeto1);
 objeto2.c = 3;
 console.log(objeto2.hasOwnProperty("c")); // Output: true
 console.log(objeto2.hasOwnProperty("a")); // Output: false
```
## Set & get()
Para validar los valores asignados a una propiedad. Por ejemplo, podemos usar un get para validar que un valor sea un número válido antes de asignarlo a una propiedad.
Para convertir los valores antes de asignarlos a una propiedad. Por ejemplo, podemos usar un set para convertir un valor de cadena a un número antes de asignarlo a una propiedad.
Para guardar el estado de una propiedad en una variable privada.

---

# 👑 Array

- Es un tipo de objeto
- Declarar usando const
  🧑‍💻

```
 let myInts = new Array();
 myInts = [5,0,6];

 let myStrings = ["blue", "white", "red"];

 let store = [
  { product: "Bike", price: 1500 },
  { product: "TV", price: 1800 }
 ]
```

**indexOf()**
Encontrar la _posición de un valor_, sino retornara -1.
myInts.indexOf(6);

**forEach()**
Ejecutar una función para cada uno de los elementos.
**No retorna ningún valor.**
🧑‍💻

```
 myInts.forEach(( element ) =>  {
 console.log(element);
 });
```

## Métodos mutables ( modifican el array )

Cambian su estado actual

**push()** agregar

```
 myInts.push(7);
 console.log(myInts);// [ 5, 0, 6, 7 ]
```

**unshift()** agregar

```
 myInts.unshift(0);
 console.log(myInts);// [0, 5, 0, 6]
```

**pop()** eliminar

```
 myInts.pop();
 console.log(myInts);// [ 5,0 ]
```

**shift()** eliminar

```
 myInts.shift();
 console.log(myInts);// [ 0,6 ]
```

### Más

- **splice()** agrega o elimina elementos del array.
- **sort()** ordena los elementos del array.
- **reverse()** invierte el orden de los elementos del array.
- **fill()** rellena todos los elementos del array con un valor específico.
- **copyWithin()** copia una parte del array y la pega en otra parte del mismo array.

## Métodos inmutables ( Crean un nuevo array )

**filter()**
Nuevo array con todos los elementos que pasan una condición
🧑‍💻

```
 let workingFilter = articulos.filter(function (articulo) {
 return articulo.costo <= 500
 })
 console.log(workingFilter)
```

**map()**
Nuevo array a partir de un array existente, aplicando una función a cada elemento del array original.
🧑‍💻

```
 let workingMap = articulos.map(function (articulo) {
 return articulo.nombre
 })
 console.log(workingMap)
```

**find()**
Encontrar el primer elemento que cumpla con la condición. Sino retornará undefined.
🧑‍💻

```
 var workingFind = articulos.find(function (articulo) {
 return (articulo.nombre = "Laptop")
 })
 console.log(workingFind)
```

**some()**
Retornar un valor lógico verdadero si existe al menos un elemento que cumpla la condición.
🧑‍💻

```
 let workingSome = articulos.some(function (articulo) {
 return articulo.costo <= 700
 })
 console.log(workingSome)
```

### Más metodos

- **concat()** une dos o más arrays en uno nuevo.
- **slice()** devuelve una copia de una parte del array original.
- **every()** devuelve true si todos los elementos pasan la condición en una función.
- **findIndex()** devuelve el índice del primer elemento que pasa la condición especificada en una función.
- **reduce()** aplica una función acumuladora a cada elemento del array, y devuelve un único valor.
- **reduceRight()** aplica una función acumuladora a cada elemento del array en orden inverso, y devuelve un único valor.

## Array.from()

_Crear un nuevo array_ a partir de un _objeto iterable_.
🧑‍💻

```
 let myArray = Array.from('hello');
 console.log(myArray); // ["h", "e", "l", "l", "o"]
```

## Array(n).fill()

Llena todos los elementos de un array con un valor específico
🧑‍💻 `let myArray = new Array(5).fill(0); // [0, 0, 0, 0, 0]`

## Array.isArray()

Determinar si un objeto es un array o no.
🧑‍💻 `console.log(Array.isArray(myArray)); // true`

## Spread operator

Expandir un iterable en sus elementos individuales.
🧑‍💻

```
 const originalArray = [1, 2, 3, 4];
 const copiedArray = [...originalArray];
```

## Arrays Bidimensionales ( arrays de arrays )

🧑‍💻

```
 const matrix = [];
 matrix[0] = [1, 2, 3];
 matrix[1] = [4, 5, 6];
 matrix[2] = [7, 8, 9];
 console.log(matrix);
```

## Array.protoype.includes()

Función para determinar si un elemento existe en un array.
Sin tener que recorrer todo el array.

🧑‍💻

```
 const numbers = [1, 2, 3, 4, 5];
 const result = numbers.includes(3);
 console.log(result); // true
```

/_El método también puede buscar objetos y otros tipos de datos. Sin embargo, se realiza utilizando la comparación de igualdad estricta "==="
Sólo se considerarán iguales dos objetos si se refieren a la misma ubicación en memoria._/

## Array.protoype.join()

Convertir todos los elementos de un array en un solo string.
🧑‍💻

```
 const fruits = ["apple", "banana", "cherry"];
 const fruitsString = fruits.join(", ");
 console.log(fruitsString); // "apple, banana, cherry"
```

## Array.prototype.flat()

Combinar varios arreglos en un solo arreglo (sin niveles adicionales de anidamiento).
Puede aceptar un argumento opcional, que indica la profundidad de anidamiento máxima hasta la cual se deben aplanar los arreglos.
🧑‍💻

```
 const multiDimensionalArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
 const flatArray = multiDimensionalArray.flat();
 //const flatArray = multiDimensionalArray.flat(1); en este caso indica el valor opcional
 console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## Array.prototype.flatMap()

Combina Array.prototype.map() y Array.prototype.flat().
Para transformar cada elemento del arreglo, luego aplana el resultado hasta obtener un único arreglo con los elementos resultantes.

🧑‍💻

```
 const numbers = [1, 2, 3, 4];

 const result = numbers.flatMap(x => [x, x * 2]);

 console.log(result); // Output: [1, 2, 2, 4, 3, 6, 4, 8]
```

Puede ser útil para eliminar elementos null o undefined de un arreglo 🤖
🧑‍💻

```
 const values = [1, 2, 3, null, 4, undefined, 5];

 const result = values.flatMap(x => x);

 console.log(result);
 // Output: [1, 2, 3, 4, 5]
```

---

# Seleccionar elementos HTML

- Obtener datos desde el HTML:
- 🧑‍💻 `const input1 = document.querySelector("#id");`

# Modificar elementos HTML

- Modificar el DOM
- 🧑‍💻 `h1.innerHTML = 'Practicando JS';`

- Modificar atributos
- 🧑‍💻 `h1.setAttribute('class', 'mySecondClass')`

- Agregar una clase
- 🧑‍💻 `h1.classList.add(mySecondClass);`

---

# Eventos

- Son el resultado de que algo que ocurre en el HTML
- Se usan para interactuar con el usuario, responder a cambios o validar acciones
  addEventListener( nombre_del_evento, funcion )

🧑‍💻

```
 const boton = document.querySelector("button");

 boton.addEventListener("click", () => {
   console.log("El botón fue clicado!");
 });
```

**usar on** si el evento está "conectado" a un elemento. 🤖

**Event Handlers**

- "Manejadores de Eventos" son funciones que se ejecutan cuando ocurre un evento.
- Se utilizan para responder al usuario y para el comportamiento de la página.

---

# Maps

- Objeto que almacena pares de clave-valor

## Ejemplo: almacenar datos de configuración

🧑‍💻 JSON

```
 {
   "apiKey": "1234567890",
   "baseUrl": "https://example.com"
 }
```

- Podemos usar un Map para almacenar la configuración de la app

🧑‍💻

```
 const config = new Map();

 config.set("apiKey", "1234567890");
 config.set("baseUrl", "https://example.com");

 const apiKey = config.get("apiKey");
 const baseUrl = config.get("baseUrl");
```

- Este código creará un Map con dos elementos:

1. La clave apiKey con el valor "1234567890".
2. La clave baseUrl con el valor "https://example.com".

---

# Closures

- Es la combinación entre una función y el ámbito en el que esta fue declarada.
- Permite a las funciones recordar el estado de su entorno de ejecución.
- Se crea cuando una función es declarada dentro de otra función.
- Se usa para crear funciones genéricas y reutilizables.
  🧑‍💻

```
 function counter() {
 let count = 0;
 return function increment() {
     count++;
     return count;
 }
 }
 const myCounter = counter();
 console.log(myCounter()); // Output: 1
 console.log(myCounter()); // Output: 2
 console.log(myCounter()); // Output: 3

```

## Ámbito léxico

- Se refiere al alcance de una variable siguiendo la cadena de scopes.

## Higher-Order Functions

- 🤖 Es una función que toma una o más funciones como argumentos y/o devuelve una función como resultado.
- Permiten abstraer conceptos comunes en las operaciones de las funciones y permiten la reutilización de código.
- 🧑‍💻
  ```
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = numbers.map(function(number) {
  return number * 2;
  });
  console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
  console.log(numbers) // Output: [1, 2, 3, 4, 5]
  ```

---

# 🤘 Asincronismo

- 🤖 Las operaciones no bloquean el hilo de ejecución principal.
- 🦖 Varias operaciones pueden ocurrir al mismo tiempo.

## Promesas

Permiten que una función asíncrona devuelva un valor que **estará disponible en el futuro**,

- de manera exitosa (resolve)
- con un error (reject).

**simple**
🧑‍💻

```
 const promise = new Promise((resolve, reject) => {
 setTimeout(() => {
 resolve(42);
 }, 2000);
 });
```

**then**
🧑‍💻

```
 const promise = new Promise((resolve, reject) => {
 setTimeout(() => {
 resolve({ number: 42, text: "hello" });
 }, 2000);
 });
 promise
 .then((result) => {
 const doubledNumber = result.number \* 2;
 return doubledNumber.toString();
 })
 .then((result) => {
 console.log(`The result is ${result}`);
 })
 .catch((error) => {
 console.error(error);
 });
```

**setInterval y setTimeout**

- Los temporizadores para programar tareas para que se ejecuten en el futuro.
- son funciones asincrónicas!

### setTimeout

- Permite programar una tarea para que se ejecute después de un cierto período (milisegundos)
- 🧑‍💻

  ```
  setTimeout(() => {
  console.log('Han pasado 5 segundos');
  }, 5000);
  ```

- setTimeout() retorna un identificador único (un número) que puede ser utilizado para cancelar el temporizador antes de que se ejecute. Con la función clearTimeout() y pasarle el identificador como argumento.

- 🧑‍💻

  ```
  let id = setTimeout(() => {
  console.log('Han pasado 5 segundos');
  }, 5000);

  // Cancelar el temporizador
  clearTimeout(id);
  ```

### setInterval

- Para programar una tarea para que se repita en un intervalo de tiempo determinado.

- 🧑‍💻
  ```
  setInterval(() => {
  console.log('Han pasado 2 segundos');
  }, 2000);
  ```

## Callback

- Son funciones que se pasan como argumentos a otra función y se llaman en algún momento después de que se complete la operación asíncrona.
- 🧑‍💻

  ```
  function getUserData(userId, callback) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.log(error))
    }

    function displayUserData(data) {
    console.log(data.name);
    }

    getUserData(1, displayUserData);
  ```

### Antipatron Callback Hell

- 🧑‍💻

  ```
  operation1(function(result1) {
  operation2(result1, function(result2) {
      operation3(result2, function(result3) {
      operation4(result3, function(result4) {
          // ...continuar con más operaciones
      });
      });
  });
  });
  ```

- Solucion: utilizar Promesas o Async/Await, que proporcionan una forma más estructurada y fácil de leer para manejar código asíncrono.

- 🧑‍💻

  ```
  operation1()
  .then(result1 => {
      return operation2(result1);
  })
  .then(result2 => {
      return operation3(result2);
  })
  .then(result3 => {
      return operation4(result3);
  })
  .then(result4 => {
      // ...continuar con más operaciones
  })
  .catch(error => {
      // Manejar errores
  });
  ```

- En este ejemplo, cada operación devuelve una Promesa que se encadena usando el método then(). Esto hace que el código sea más legible y fácil de seguir en comparación con la versión anterior.

## Async/await

- En lugar de usar callbacks anidados, async/await permite que el código parezca más secuencial y fácil de leer.

- 🧑‍💻

  ```
  async function getUserData(userId) {
  try {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const data = await response.json();
  return data;
  } catch (error) {
  console.log(error);
  }
  }

  async function displayUserData(userId) {
  const data = await getUserData(userId);
  console.log(data.name);
  }

  displayUserData(1);
  ```

- En este ejemplo, se define una función getUserData que hace la misma llamada a la API que en el ejemplo anterior, pero esta vez usa await para esperar la respuesta y el try/catch para manejar los errores. La función displayUserData también utiliza await para esperar que se resuelva la promesa retornada por getUserData y luego muestra el nombre del usuario en la consola.

---

# Regular Expressions ( regex )

- Es una secuencia de caracteres para buscar y remplazar.
- **search()** Busca una cadena para un valor especificado y devuelve la posición de la coincidencia.
- **replace()** Reemplaza un valor con otro valor en una cadena.

---

# JSON ( JavaScript Object Notation )

- Formato para **almacenar y transportar datos** desde el server.
- "key":value
  🧑‍💻 `'{"name":"Chris", "age":30}'`
- **JSON.stringify()** Convierte un _objeto JS a un JSON_.
- **JSON.parse()** Convierte un _JSON a un JS object o array_

## Trabajar con "Dates"

🧑‍💻

```
 // usando callback para leer dates
 const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
 const obj = JSON.parse(text, function (key, value) {
   if (key == "birth") {
     return new Date(value);
   } else {
     return value;
   }
 });

 document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;
```

---

# Coding

- **CamelCase:**
  Usar:

1.  let, const, function: **miNombre**
2.  class: **MiClase**

- **Usar const** para arrays y objects
- **Misunderstanding Floats** usar "\* 10" y luego "/ 10"
- **Performance**
  1- Usar la menor cantidad posible de variables globales.
  2- ( Si no es necesario ) no crear variables.
  3- Almacenar valores en constantes para no recorrer el metodo varias veces
  🧑‍💻

```
let l = arr.length;
for (let i = 0; i < l; i++) {
```

---

# Display

- 🚩 **innerHTML** modificar elementos HTML existentes
- **document.write()** agregar nuevo contenido

---

# Pendiente 🤘 🐲

- Ampliar()
- "Error Object"
- metodos de array y string
- number properties
- repasar operadores
