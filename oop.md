# Notas sobre OOP

**¿Que es POO?**
Programacion Orientada a Objetos
Es un **Paradigma de programación que se enfoca en el uso de objetos** para representar conceptos del mundo real.

**Elementos:**
  - Clases
  - Propiedades
  - Métodos
  - Objetos

### Pilares:
  - Encapsulamiento
  - Abstracción
  - Herencia
  - Polimorfismo

## POO y JS?

- JS es un lenguaje orientado a objetos basado en prototipos, los objetos tienen una relación de prototipo entre ellos.

## Ejemplo JS:
- 🧑‍💻
    ```
    class Animal {
    constructor(especie) {
    this.especie = especie;
    }
    respirar() {
    console.log("Respirando...");
    }
    }

    class Perro extends Animal {
    ladrar() {
    console.log("Guau!");
    }
    }

    const perro = new Perro("Canino");
    console.log(perro.especie); // Output: "Canino"
    perro.respirar(); // Output: "Respirando..."
    perro.ladrar(); // Output: "Guau!"
    ```

## this

- Objeto actual en el cual se está ejecutando un método o accediendo a una propiedad.

- 🧑‍💻
  ```
  function Animal(especie) {
  // Función constructora
  this.especie = especie;
  }

        Animal.prototype.respirar = function() {
        // En este scope no existe "especie"
        // Pero con "this" estamos accediendo directamente a "Animal"
        // Por lo que esto vendría siendo "Animal.especie"
        console.log(`La especie ${this.especie} está respirando...`);
        }

        const perro = new Animal("Canino");
        perro.respirar(); // Output: "La especie Canino está respirando..."

  class Animal{
  constructor(especie){
  // Con clases la función constructora es más explicita, aquí se asignan
  // los valores recibidos
  // Parecido a las funciones, se recibe como parametro cualquier valor necesario
  // y lo pasamos al scope de la clase con "this.valor = valor"
  this.especie = especie
  }

        respirar(){
            // Directamente podemos crear los métodos dentro de las clases
            // básicamente una función cualquier pero sin la keyword "function"
            console.log(`La especie ${this.especie} está respirando...`)
        }

  }

  const perro = new Animal("Canino");
  perro.respirar(); // Output: "La especie Canino está respirando..."

  ```
  

Ahora, cuando estamos declarando la variable perro usamos la keyword new que se usa para crear una nueva instancia de una función constructora. Cuando se usa new con una función constructora, se crea un nuevo objeto, se establece su prototipo y se ejecuta el código dentro de la función constructora con this apuntando al nuevo objeto. Por ejemplo:

// Aquí estamos creando una copia de la clase Animal o mejor dicho creando una instancia
// Por lo que perro, es una instancia de Animal que tiene como especie el valor de "Canino"
const perro = new Animal("Canino");
// De esta manera podemos acceder a todos los métodos creados en la clase
perro.respirar(); // Output: "La especie Canino está respirando..."
Solo falta conocer un concepto nuevo, extends

class Perro extends Animal {
// Aquí no es necesario el agregar el constructor si no se esperan
// nuevos parametros
ladrar() {
console.log("Guau!");
}
}
Esto se le conoce como una subclase, que se refiere a una clase que hereda de otra clase.

La keyword extends nos ayuda a copiar todo de la clase que extiende a la nueva clase y así evitar ser redundante y tener una buena jerarquía. Por lo que anterior viene siendo igual a lo siguiente

class Perro {
constructor(especie) {
this.especie = especie;
}
respirar() {
console.log("Respirando...");
}
ladrar() {
console.log("Guau!");
}
}
Y la forma que es interpretada por JavaScript es de la siguiente manera

const animal = {
respirar: function() {
console.log("Respirando...");
}
};

const perro = Object.create(animal);

perro.ladrar = function() {
console.log("Guau!");
}

perro.respirar(); // Output: "Respirando..."
perro.ladrar(); // Output: "Guau!"
Object.create() que se usa para crear un nuevo objeto con un prototipo específico. Este método recibe un objeto como primer parámetro y devuelve un nuevo objeto con ese objeto como su prototipo.

## Prototipos

- Un prototipo es un objeto del cual otros objetos heredan propiedades.
- Cada objeto tiene una propiedad especial llamada “prototype”, que apunta a otro objeto del cual hereda propiedades. Si un objeto no tiene una propiedad específica, JavaScript busca en su prototipo, y así sucesivamente hasta encontrar la propiedad o llegar al objeto base Object.prototype.

function Animal() {}
// Es importante que las clases empiecen con máyusculas
Animal.prototype.esVivo = true;
// Y a su prototype le agregamos la propiedad de "esVivo"
Luego, podemos crear un objeto “Perro” que herede de “Animal”:

function Perro() {}
// Esta es la manera de hacer que un objeto "Herede" de otro
Perro.prototype = Object.create(Animals.prototype);
Ahora, cada objeto “Perro” tendrá acceso a la propiedad “esVivo” heredada del prototipo “Animals”:

const perro = new Perro();
console.log(perro.esVivo); // Output: true
También es posible añadir propiedades y métodos específicos a un prototipo:

Perro.prototype.ladrar = function() { console.log("Guau!"); }
const perro = new Perro();
perro.ladrar(); // Output: "Guau!"
Además de crear prototipos y heredar de ellos, es posible editar los prototipos de objetos existentes en JavaScript. Por ejemplo, podemos agregar un método al prototipo de Array para calcular la suma de sus elementos:

Array.prototype.suma = function() { return this.reduce((a, b) => a + b); }
const numeros = [1, 2, 3, 4, 5];
console.log(numeros.suma()); // Output: 15
Otro ejemplo, podemos agregar un método al prototipo de String para convertir una cadena a mayúsculas:

String.prototype.mayusculas = function() { return this.toUpperCase(); }
const nombre = "Juan";
console.log(nombre.mayusculas()); // Output: "JUAN"

## Abstracción

- Definir una interfaz para interactuar con un objeto o clase, sin tener que conocer los detalles internos de cómo se implementa esa funcionalidad.

class Product {
constructor(name, price, description) {
this.name = name;
this.price = price;
this.description = description;
}

show() {
console.log(`Nombre: ${this.name}`);
console.log(`Precio: ${this.price}`);
console.log(`Descripción: ${this.description}`);
}
}
En este ejemplo, la clase Product define una interfaz clara y simplificada para interactuar con un objeto Product. Los usuarios de nuestra aplicación solo necesitan conocer las propiedades name, price y description para poder trabajar con los productos, y no necesitan conocer los detalles internos de cómo se implementa la clase Product.

Podríamos luego crear subclases de la clase Product para representar los diferentes tipos de productos, como Book, Clothes y Electronic. Por ejemplo, podríamos definir la clase Book de la siguiente manera:

// Libro hereda las propiedades y métodos de la clase Producto
class Book extends Product {
constructor(name, price, description, author, editorial) {
// Recuerda que con Super le pasamos los atributos a la clase
// de la cual se hereda
super(name, price, description);
// define nuevas propiedades como autor y editorial
this.author = author;
this.editorial = editorial;
}

show() {
super.show();
// redefine el método mostrar() para mostrar esta información adicional.
console.log(`Autor: ${this.author}`);
console.log(`Editorial: ${this.editorial}`);
}
}
En este ejemplo, la clase Book hereda las propiedades y métodos de la clase Product, pero también define nuevas propiedades como author y editorial y redefine el método show() para mostrar esta información adicional.

## que es Encapsulamiento?

- Los datos y métodos de un objeto deben estar protegidos y no deben ser accesibles directamente desde fuera del objeto.

Por ejemplo, supongamos que estamos creando una aplicación de un banco en la que se necesita almacenar información sobre las cuentas de los clientes, como su número de cuenta, saldo y nombre. Podríamos definir una clase Account como una abstracción de la información de una cuenta, con propiedades como numeroCuenta, saldo y nombre.

class Account {
constructor(accountNumber, balance, name) {
this.\_accountNumber = accountNumber;
this.\_balance = balance;
this.\_name = name;
}

    deposit(amount) {
    	this._balance += amount;
    }

    withdraw(quantity) {
    	if (quantity <= this._balance) {
    		this._balance -= quantity;
    	} else {
    		console.log("Saldo insuficiente");
    	}
    }

    getBalance() {
    	return this._balance;
    }

}
En este ejemplo, las propiedades _accountNumber, \_balance y \_name se definen dentro del constructor con el prefijo _. Este prefijo se utiliza comúnmente para indicar que estas propiedades son privadas y no deben ser accesibles directamente desde fuera de la clase.

La clase Account también define métodos públicos como deposit(), withdraw() y getBalance() que permiten interactuar con los datos privados de la cuenta. Estos métodos se pueden llamar desde fuera de la clase, pero el usuario no puede acceder directamente a las propiedades privadas de la cuenta.

Por ejemplo, podríamos crear una nueva cuenta y depositar algo de dinero en ella:

const myAccount = new Account("123456789", 1000, "Juan");
miAccount.deposit(500);
console.log(myAccount.getBalance()); // Output: 1500
En este ejemplo, el usuario no puede acceder directamente al saldo de la cuenta utilizando la propiedad \_balance, sino que debe llamar al método obtenerSaldo(). Esto asegura que los datos de la cuenta estén protegidos y que el usuario solo pueda interactuar con ellos a través de la interfaz pública de la clase.

Getters y setters
Podemos mejorar aún más el encapsulamiento de la clase Cuenta utilizando **getters** y setters. Los getters y setters son métodos especiales que permiten acceder y modificar las propiedades privadas de un objeto de forma controlada.

En este caso, podemos definir getters y setters para las propiedades \_balance y \_name de la clase Account. Los getters permiten acceder a las propiedades privadas, mientras que los setters permiten modificarlas. Al utilizar getters y setters, podemos validar los valores de las propiedades antes de asignarlos, lo que nos da un mayor control sobre el estado interno del objeto.

class Account{
constructor(accountNumber, balance, name) {
this.\_accountNumber = accountNumber;
this.\_balance = balance;
this.\_name = name;
}

    deposit(amount) {
    	this._balance += amount;
    }

    withdraw(quantity) {
    	if (quantity <= this._balance) {
    		this._balance -= quantity;
    	} else {
    		console.log("Saldo insuficiente");
    	}
    }

    get balance() {
    	return this._balance;
    }

    set balance(newBalance) {
    	if (newBalance < 0) {
    		console.log("El saldo no puede ser negativo");
    	} else {
    		this._balance = newBalance;
    	}
    }

    get name() {
    	return this._name;
    }

    set name(newName) {
    	if (newName === "") {
    		console.log("El nombre no puede estar vacío");
    	} else {
    		this._name = newName;
    	}
    }

}
En este ejemplo, hemos agregado getters y setters para las propiedades \_balance y \_name utilizando la sintaxis de las propiedades computadas de la clase. Los getters tienen el mismo nombre que las propiedades privadas, mientras que los setters tienen el mismo nombre pero con el prefijo set.

Ahora podemos crear una nueva cuenta y acceder y modificar su saldo y nombre utilizando los getters y setters:

const myAccount = new Account("123456789", 1000, "Juan");
myAccount.balance = 1500;
console.log(myAccount.balance); // Output: 1500
myAccount.name = "Pedro";
console.log(myAccount.name); // Output: Pedro
En este ejemplo, al modificar el saldo de la cuenta utilizando el setter, primero validamos que el nuevo saldo no sea negativo antes de asignarlo a la propiedad \_balance. De esta forma, nos aseguramos de que el saldo de la cuenta nunca sea negativo.

También validamos que el nuevo nombre no esté vacío antes de asignarlo a la propiedad \_nombre utilizando el setter correspondiente. De esta forma, nos aseguramos de que la cuenta siempre tenga un nombre válido.

## Herencia

La herencia en JavaScript es un concepto fundamental de la programación orientada a objetos que nos permite crear nuevas clases a partir de clases existentes, heredando todas sus propiedades y métodos. Esto nos permite reutilizar el código existente y crear jerarquías de clases que comparten comportamiento común.

Aquí hay un ejemplo simple de una clase Animal que define una propiedad especie y un método hacerSonido():

class Animal {
constructor(especie) {
this.especie = especie;
}
hacerSonido() {
console.log('Este animal hace un sonido');
}
}
Ahora podemos crear una clase derivada Perro que hereda de la clase Animal y añade una propiedad raza y un método ladrar():

class Perro extends Animal {
constructor(especie, raza) {
super(especie);
this.raza = raza;
}
ladrar() {
console.log('El perro está ladrando');
}
}
En este ejemplo, la clase Perro hereda de la clase Animal mediante la palabra clave extends. El constructor de Perro llama al constructor de Animal utilizando la palabra clave super() para inicializar la propiedad especie. Además, Perro añade una propiedad raza y un método ladrar().

Ahora podemos crear un objeto de la clase Perro y llamar a sus métodos y propiedades:

const miPerro = new Perro('Canino', 'Labrador');
console.log(miPerro.especie); // Canino
miPerro.hacerSonido(); // Este animal hace un sonido
miPerro.ladrar(); // El perro está ladrando
Como podemos ver, miPerro hereda la propiedad especie y el método hacerSonido() de la clase Animal, y también tiene su propia propiedad raza y método ladrar().

## La herencia nos permite reutilizar el código existente y crear jerarquías de clases que comparten comportamiento común. También nos permite crear clases más específicas a partir de clases más generales, lo que nos permite crear código más modular y escalable.

## Polimorfismo

El polimorfismo es un concepto fundamental en la programación orientada a objetos, y JavaScript es un lenguaje que soporta este concepto a través de las clases. En términos simples, el polimorfismo permite que una sola interfaz pueda ser implementada por múltiples clases, permitiendo que diferentes objetos respondan de diferentes maneras a la misma llamada.

En JavaScript, el polimorfismo se logra a través de la herencia de clases y la sobrescritura de métodos. Por ejemplo, si tenemos una clase Animal con un método hablar(), podemos crear subclases como Perro y Gato, y sobrescribir el método hablar() para que cada subclase tenga su propia implementación. De esta manera, podemos llamar al método hablar() en un objeto de tipo Animal y obtener diferentes resultados dependiendo de la subclase.

// La clase Animal que define un método hablar():
class Animal {
hablar() {
console.log('Sonidos de animal');
}
}

// Perro que hereda de la clase Animal y sobrescribe el método hablar()
// con una implementación específica
class Perro extends Animal {
hablar() {
console.log('Guau guau!');
}
}

// Gato que hereda de la clase Animal y sobrescribe el método hablar()
// con otra implementación:
class Gato extends Animal {
hablar() {
console.log('Miau miau!');
}
}

// Ahora podemos crear objetos de las tres clases
// y llamar al método hablar(), que proporcionará
// una salida diferente para cada uno de ellos:

const animal = new Animal();
const perro = new Perro();
const gato = new Gato();

animal.hablar(); // Sonidos de animal
perro.hablar(); // Guau guau!
gato.hablar(); // Miau miau!

El polimorfismo en JavaScript es útil porque nos permite escribir código más modular y genérico, ya que podemos diseñar nuestras clases para que implementen una interfaz común, pero con comportamientos diferentes. Esto nos permite reutilizar código y aumentar la flexibilidad de nuestro programa.

Además, el polimorfismo también es una técnica importante para la abstracción de datos, ya que nos permite ocultar detalles de implementación detrás de una interfaz común. Por ejemplo, si tenemos una clase Figura que tiene un método calcularArea(), podemos crear subclases como Rectángulo y Círculo que implementen el método de manera diferente, pero que todavía se comporten como una Figura. Esto nos permite abstraer la complejidad de la implementación y trabajar con objetos de manera más abstracta y genérica.

## Patrones de diseño

Los patrones de diseño son soluciones probadas y aprobadas a problemas recurrentes en la programación. Son una colección de buenas prácticas y soluciones a problemas comunes en la programación. Estos patrones se pueden aplicar a diferentes lenguajes de programación y plataformas.

Los patrones de diseño se dividen en tres categorías: creacionales, estructurales y de comportamiento.

Patrones creacionales
Los patrones de diseño creacionales son patrones de diseño que abordan el problema de cómo crear objetos y estructuras complejas en una forma organizada y escalable. Estos patrones proporcionan soluciones estándar a problemas comunes que surgen al crear objetos y estructuras, y se pueden reutilizar en diferentes situaciones. Los patrones de diseño creacionales incluyen patrones como Factory Method, Abstract Factory, Builder, Prototype, Singleton, etc. Estos patrones proporcionan una manera de encapsular la lógica de creación para hacerla más flexible, escalable y fácil de mantener.

Patrones estructurales
Los patrones estructurales son patrones de diseño que se enfocan en cómo se combinan los objetos y las clases para formar estructuras más grandes y más complejas. Estos patrones describen cómo puede organizarse un sistema para que sea más fácil de mantener y escalar. Los patrones estructurales incluyen patrones como el Bridge, Composite, Decorator, Facade, Proxy y otros. Estos patrones ayudan a resolver problemas relacionados con la organización de un sistema, como la separación de responsabilidades, la composición de objetos y la reutilización de código.

Patrones de comportamiento
Los patrones de diseño de comportamiento son patrones que describen la forma en que los objetos interactúan y se relacionan entre sí. Estos patrones se enfocan en la comunicación entre objetos y su colaboración para resolver tareas complejas. Los patrones de comportamiento incluyen patrones como el Chain of Responsibility, Observer, State, Strategy, Template Method, Visitor y demás. Estos patrones se utilizan para modelar la interacción entre objetos y para resolver problemas comunes en la programación orientada a objetos.

¿Cuando utilizar patrones de diseño?
Utilizar patrones de diseño depende de la situación y de la complejidad del problema que se esté tratando de resolver. Es importante tener en cuenta que los patrones de diseño no son soluciones mágicas y que no se deben aplicar sin antes comprender y analizar el problema a resolver. En algunos casos, el uso de patrones de diseño puede complicar la solución y hacer que el código sea más difícil de mantener y entender.

Los patrones de diseño se pueden implementar a través de clases, funciones, objetos literales, y otras estructuras de programación. La implementación específica depende del lenguaje de programación y de la plataforma utilizada. Es importante destacar que, aunque la implementación puede variar, la solución y la estructura básica del patrón se mantienen constantes.

## Singleton

Singleton es un patrón de diseño que se utiliza para asegurarse de que una clase tenga solo una única instancia durante toda la ejecución de un programa. Esto significa que, independientemente de cuántas veces se llame a la clase, solo se creará una única instancia y todas las llamadas posteriores se refieren a la misma instancia.

En JavaScript, el patrón Singleton se puede implementar de varias maneras, pero la más común es crear un objeto literal con una función que retorne la única instancia de la clase. Por ejemplo:

const Singleton = (function() {
let instance;

function createInstance() {
const object = new Object({name: 'Singleton'});
return object;
}

return {
getInstance: function() {
if (!instance) {
instance = createInstance();
}
return instance;
}
};
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // True

En este ejemplo, la función anónima se autoejecuta y retorna un objeto con un método getInstance(). Cada vez que se llama a getInstance(), se verifica si ya existe una instancia previa y, de ser así, se devuelve la misma instancia. De lo contrario, se crea una nueva instancia y se retorna.

Otro ejemplo de código es crear una clase y hacer uso de Object.freeze() para evitar la modificación de la instancia:

class Singleton {
constructor() {
if (!Singleton.instance) {
this.name = 'Singleton';
Singleton.instance = Object.freeze(this);
}
return Singleton.instance;
}
}

const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2); // True
En este caso, se crea una clase Singleton con un constructor que verifica si ya existe una instancia y, de ser así, retorna la misma instancia. De lo contrario, se crea una nueva instancia y se almacena como la única instancia permitida en el programa.

Singleton es útil en situaciones en las que se necesita una única instancia de una clase que se comparta entre diferentes partes del programa. Por ejemplo, en una aplicación de mensajería, podríamos utilizar Singleton para asegurarnos de que solo exista una única instancia de la clase que maneja la conexión con el servidor. De esta manera, podemos evitar la creación de múltiples conexiones al servidor, lo que podría resultar en un rendimiento ineficiente y posibles errores.

Otro ejemplo de aplicación de Singleton podría ser en un sistema de autenticación, donde se quiere asegurar que solo exista una única instancia de la clase que maneja la información del usuario autenticado. De esta manera, podemos mantener una única fuente de verdad para la información del usuario autenticado y evitar posibles errores que pueden surgir de tener múltiples instancias de la misma clase.

Es importante tener en cuenta que Singleton puede ser una solución útil en ciertos casos, pero también puede ser un anti-patrón si se usa en exceso o en situaciones donde no es necesario. Es importante evaluar cuidadosamente si Singleton es la solución adecuada para un problema específico antes de implementarlo.

Factory pattern
El patrón Factory es una técnica que permite crear objetos sin tener que especificar la clase exacta de dicho objeto. En su lugar, la fábrica (o factory) se encarga de determinar la clase correcta en tiempo de ejecución y crear una instancia de dicha clase.

En JavaScript, el patrón Factory se puede implementar de varias maneras, pero una de las más comunes es crear una función que retorne un objeto con las propiedades y métodos necesarios. Por ejemplo:

function createPerson(name, age) {
return {
name: name,
age: age,
sayHello: function() {
console.log(`Hello, my name is ${this.name}`);
}
};
}

const person1 = createPerson('John', 30);
const person2 = createPerson('Jane', 25);

console.log(person1.name); // 'John'
console.log(person2.age); // 25
person1.sayHello(); // 'Hello, my name is John'

En este ejemplo, la función createPerson() toma dos argumentos (nombre y edad) y retorna un objeto con las propiedades name, age y el método sayHello(). Cada vez que se llama a la función createPerson(), se crea un nuevo objeto con las propiedades y métodos especificados.

Otro ejemplo de código es crear una clase Factory:

class PersonFactory {
createPerson(name, age) {
return {
name: name,
age: age,
sayHello: function() {
console.log(`Hello, my name is ${this.name}`);
}
};
}
}

const factory = new PersonFactory();
const person1 = factory.createPerson('John', 30);
const person2 = factory.createPerson('Jane', 25);

console.log(person1.name); // 'John'
console.log(person2.age); // 25
person1.sayHello(); // 'Hello, my name is John'
En este caso, se crea una clase PersonFactory con un método createPerson() que toma dos argumentos y retorna un objeto con las propiedades y métodos especificados. Cada vez que se llama a createPerson(), se crea un nuevo objeto con las propiedades y métodos especificados.

El patrón Factory es útil en situaciones en las que se necesita crear objetos con diferentes propiedades y métodos sin tener que especificar la clase exacta de dicho objeto. Por ejemplo, en una aplicación de comercio electrónico, podríamos utilizar Factory para crear objetos Producto con diferentes atributos como nombre, precio, descripción y categoría, y utilizar la fábrica para crear objetos Producto específicos para cada producto en nuestro catálogo de productos.

Además, el patrón Factory también es útil cuando se desea ocultar la implementación detrás de la creación de objetos. Por ejemplo, si estamos trabajando con una biblioteca de terceros y queremos crear objetos de una clase determinada, podemos utilizar una fábrica para crear objetos en lugar de tener que conocer la implementación detrás de la creación de objetos en la biblioteca de terceros.

## Adapter pattern

El patrón Adapter permite que dos objetos con interfaces incompatibles trabajen juntos. Este patrón se aplica cuando queremos utilizar una clase existente en un sistema, pero su interfaz no cumple con las necesidades de nuestro código.

En JavaScript, podemos implementar el patrón Adapter creando un objeto intermedio que actúe como intermediario entre la clase existente y nuestro código. Este objeto adapter tendrá una interfaz que cumpla con las necesidades de nuestro código y que se comunique con la clase existente mediante la adaptación de sus métodos y propiedades.

Ejemplo de aplicación en JavaScript:

Supongamos que tenemos una clase “Auto” con un método “encender” que recibe un parámetro “llave”. Sin embargo, necesitamos que este método se ejecute sin recibir un parámetro. Para ello, podemos crear un adapter que se encargue de llamar al método “encender” con el parámetro adecuado.

class Auto {
encender(llave) {
console.log('El auto ha sido encendido con la llave:', llave);
}
}

class AutoAdapter {
constructor(auto) {
this.auto = auto;
}

    encender() {
    	this.auto.encender('predeterminada');
    }

}

const miAuto = new Auto();
const adapter = new AutoAdapter(miAuto);

adapter.encender(); // El auto ha sido encendido con la llave: predeterminada
En este ejemplo, creamos una clase “AutoAdapter” que recibe un objeto “auto” y que tiene un método “encender” que llama al método “encender” del objeto “auto” pasándole un parámetro predeterminado. De esta manera, podemos utilizar la clase “AutoAdapter” en nuestro código sin tener que preocuparnos por la recibir un parámetro en el método “encender”.

Otro ejemplo de aplicación del patrón Adapter en JavaScript es cuando deseamos integrar diferentes bibliotecas o componentes en nuestra aplicación. Por ejemplo, podemos tener un componente que utiliza un formato de fecha diferente al que esperamos en nuestra aplicación. Podemos crear una clase adaptadora que proporcione una interfaz compatible con lo que esperamos:

class FechaAdaptador {
constructor(fecha) {
this.fecha = fecha;
}
obtenerFechaFormateada() {
return this.fecha.toLocaleDateString();
}
}

const fecha = new Date();
const fechaAdaptada = new FechaAdaptador(fecha);
console.log(fechaAdaptada.obtenerFechaFormateada());
// Formatea la fecha al formato deseado
De esta manera, podemos integrar componentes externos en nuestra aplicación sin tener que cambiar su comportamiento original. Además, esto también permite mantener la flexibilidad y reutilización de código, ya que podemos reutilizar la clase adaptadora en diferentes partes de nuestra aplicación.

Podemos usar el patrón Adapter en JavaScript cuando queremos utilizar una biblioteca externa en nuestro código, pero su interfaz no cumple con las necesidades de nuestro código. En este caso, podemos crear un adapter que se encargue de realizar la adaptación necesaria para que podamos utilizar la biblioteca de manera efectiva.

En resumen, el patrón Adapter permite adaptar la interfaz de un objeto a otra interfaz que es esperada por el cliente. Esto se logra creando una clase adaptadora que proporcione una interfaz compatible con la que espera el cliente. Este patrón es útil cuando deseamos integrar componentes externos o diferentes bibliotecas en nuestra aplicación de manera eficiente y flexible.

Decorator pattern
El Patrón Decorador en JavaScript permite añadir responsabilidades a un objeto dinámicamente en tiempo de ejecución. Este patrón permite que la funcionalidad se agregue o modifique sin tener que modificar el código subyacente. Esto se logra creando objetos que envuelven al objeto original y proporcionan la nueva funcionalidad.

La aplicación del Patrón Decorador en JavaScript se puede lograr a través de la creación de clases decoradoras. Las clases decoradoras deben tener una estructura similar a la clase que desean decorar y deben invocar a la clase original para proporcionar la funcionalidad adicional.

Ejemplo de aplicación del Patrón Decorador en JavaScript:

// Clase base
class Bebida {
precio() {
return 0;
}
}

// Clase Decoradora
class AgregadoLeche extends Bebida {
constructor(bebida) {
super();
this.bebida = bebida;
}

    precio() {
    	return this.bebida.precio() + 0.5;
    }

}

// Clase Decoradora
class AgregadoChocolate extends Bebida {
constructor(bebida) {
super();
this.bebida = bebida;
}

    precio() {
    	return this.bebida.precio() + 1;
    }

}

// Uso
const bebida = new Bebida();
console.log(bebida.precio()); // 0

const bebidaConLeche = new AgregadoLeche(bebida);
console.log(bebidaConLeche.precio()); // 0.5

const bebidaConLecheYChocolate = new AgregadoChocolate(bebidaConLeche);
console.log(bebidaConLecheYChocolate.precio()); // 1.5

En este ejemplo, creamos una clase base llamada “Bebida” con un método precio que devuelve 0. Luego creamos dos clases decoradoras llamadas “AgregadoLeche” y “AgregadoChocolate” que envuelven a la clase base “Bebida” y proporcionan una nueva funcionalidad. Finalmente, creamos objetos a partir de estas clases y vemos el resultado de invocar el método precio.

El Patrón Decorador es útil en situaciones en las que queremos añadir o modificar la funcionalidad de un objeto de manera dinámica y sin tener que modificar su código subyacente. Por ejemplo, podemos usar este patrón en sistemas de personalización de productos en los que los usuarios pueden seleccionar diferentes opciones o características adicionales para un producto. En este caso, cada opción o característica adicional sería un decorador que se aplicaría al objeto producto original para proporcionar la nueva funcionalidad.

Otro ejemplo de aplicación del Patrón Decorador puede ser en la creación de componentes de interface de usuario en los que se desea agregar diferentes estilos o funcionalidades adicionales a un componente base. En este caso, cada estilo o funcionalidad adicional sería un decorador que se aplicaría al componente base para proporcionar la nueva funcionalidad.

## Builder pattern

El patrón Builder permite construir objetos complejos a partir de objetos más simples, como si fuera un “paso a paso”. Este patrón es muy útil en situaciones donde los objetos a construir tienen muchos atributos o propiedades que deben ser configurados antes de su creación.

Lo interesante está en que consiste en separar la complejidad durante la construcción de un objeto de su representación de manera que con el mismo constructor puedas crear diferentes representaciones.

En JavaScript, podemos aplicar el patrón Builder mediante la creación de una clase constructora que se encarga de construir objetos complejos a partir de una serie de objetos más simples.

Ejemplo de aplicación:

class ProductBuilder {
constructor() {
this.name = '';
this.price = 0;
this.description = '';
}

    setName(name) {
    	this.name = name;
    	return this;
    }

    setPrice(price) {
    	this.price = price;
    	return this;
    }

    setDescription(description) {
    	this.description = description;
    	return this;
    }

    build() {
    	return {
    	name: this.name,
    	price: this.price,
    	description: this.description
    	};
    }

}

const product = new ProductBuilder()
.setName('Laptop')
.setPrice(1000)
.setDescription('Con esta laptop puedes nunca paras de aprender')
.build();

console.log(product);
// {
// name: 'Laptop',
// price: 1000,
// description: 'Con esta laptop puedes nunca paras de aprender'
// }
En este ejemplo, creamos una clase ProductBuilder que tiene métodos para establecer los atributos de un producto, como el nombre, el precio y la descripción. Luego, utilizamos el método build() para construir el objeto final y retornarlo.

De esta manera es mucho más clara la creación de una instancia de la clase. Si lo comparamos con la manera tradicional, tendríamos algo como lo siguiente

class ProductBuilder {
constructor(name, price, description) {
this.name = name;
this.price = price;
this.description = description;
}
}

const product = new ProductBuilder("Laptop", 1000, "Con esta laptop puedes nunca paras de aprender")

console.log(product);
// {
// name: 'Laptop',
// price: 1000,
// description: 'Con esta laptop puedes nunca paras de aprender'
// }
Aunque es mucho menos código y obtenemos el mismo resultado, el mantener este código en un futuro se volverá más complicado debido a que muy poco descriptivo el tener un método constructor al cual le estamos agregando datos arbitrarios.

Otro ejemplo de aplicación del patrón Builder en JavaScript es en la construcción de formularios dinámicos. Por ejemplo, podemos tener una clase FormBuilder que nos permita construir formularios complejos a partir de objetos más simples, como inputs, botones, etc.

class FormBuilder {
constructor() {
this.elements = [];
}

    addInput(type, name, value) {
    	this.elements.push({
    		type: 'input',
    		name: name,
    		value: value
    	});
    	return this;
    }

    addButton(text) {
    	this.elements.push({
    		type: 'button',
    		text: text
    	});
    	return this;
    }

    build() {
    	let form = '

';
this.elements.forEach(element => {
if (element.type === 'input') {
form += `
${element.type}" name="${element.name}" value="${element.value}">`;
} else if (element.type === 'button') {
form += `${element.text}`;
}
});
form += ''
;
return form;
}
}

const form = new FormBuilder()
.addInput('text', 'username', '')
.addInput('password', 'password', '')
.addButton('Submit')
.build();

console.log(form);

/\*

    Submit

\*/
En este ejemplo, creamos una clase FormBuilder que tiene métodos para agregar diferentes elementos a un formulario, como inputs y botones. Luego, utilizamos el método build() para construir el formulario y retornarlo como una cadena de texto con el código HTML correspondiente. Cabe aclarar que este código puede ser mejorado agregando las labels y haciendolo mucho más accesible.

Prototype Pattern
El patrón Prototype es un patrón de diseño que se utiliza para crear objetos a partir de un modelo o prototipo previamente definido. Este patrón es útil cuando queremos crear muchos objetos similares, ya que podemos clonar el prototipo en lugar de crear objetos desde cero cada vez.

En JavaScript, podemos aplicar el patrón Prototype utilizando la propiedad “prototype” de las funciones constructoras. La propiedad prototype permite agregar propiedades y métodos a una función constructora, y estos serán compartidos por todos los objetos creados a partir de ella.

Ejemplo de aplicación del patrón Prototype en JavaScript:

function Animal(name, species) {
this.name = name;
this.species = species;
}

Animal.prototype.makeSound = function () {
console.log('El animal hace un sonido');
};

const dog = new Animal('Fido', 'Perro');
console.log(dog.name); // Fido
console.log(dog.species); // Perro
dog.makeSound(); // El animal hace un sonido
En este ejemplo, creamos una función constructora Animal que tiene dos propiedades: name y species. Luego, agregamos un método makeSound a la propiedad prototype de la función constructora Animal. De esta manera, todos los objetos creados a partir de la función constructora tendrán acceso a este método.

Otro ejemplo de aplicación del patrón Prototype en JavaScript es en la creación de objetos basados en plantillas. Por ejemplo, podemos tener una plantilla de objeto “Persona” con propiedades como nombre, edad y ocupación, y luego clonar esta plantilla para crear objetos de personas individuales.

function Persona(nombre, edad, ocupacion) {
this.nombre = nombre;
this.edad = edad;
this.ocupacion = ocupacion;
}

const plantillaPersona = new Persona('', 0, '');

const persona1 = Object.create(plantillaPersona);
persona1.nombre = 'Juan';
persona1.edad = 30;
persona1.ocupacion = 'Desarrollador';

const persona2 = Object.create(plantillaPersona);
persona2.nombre = 'María';
persona2.edad = 25;
persona2.ocupacion = 'Doctora';

console.log(persona1.nombre); // Juan
console.log(persona2.nombre); // María
En conclusión, el patrón Prototype es una técnica muy útil en JavaScript para crear objetos similares de manera eficiente y organizada. Al utilizar la propiedad prototype de las funciones constructoras, podemos ahorrar tiempo y líneas de código al clonar objetos en lugar de crearlos desde cero cada vez. Además, el patrón Prototype también es útil en la creación de objetos basados en plantillas, donde podemos clonar una plantilla de objeto y luego personalizar las propiedades individuales de cada objeto creado.

## Facade pattern

El Patrón Facade (o fachada en español) en JavaScript es un patrón de diseño que proporciona una interfaz simplificada para un sistema complejo. Este patrón oculta la complejidad del sistema subyacente detrás de una interfaz sencilla y fácil de usar. La idea detrás del patrón Fachada es crear un objeto que actúe como intermediario entre el cliente y el sistema subyacente, simplificando el acceso y la interacción con este último.

Esto se de lo más común cuando usas librerías o frameworks externos, por ejemplo en web algunos frameworks como React, nos dan todas las herramientas para crear aplicaciones web de manera super rápida y sencilla, utilizando abstracciones como lo son sus react hooks para trabajar con temas complejos como la reactividad. Sin irnos tan lejos, las librerías de componentes como MUI, la cual nos da una serie de componentes a los cuales solo le tenemos que pasar algunos argumentos para que nos devuelva elementos HTML estilizados.

Aplicar el Patrón Fachada en JavaScript es muy sencillo. Basta con crear un objeto que actúe como intermediario entre el cliente y el sistema subyacente. Este objeto debe proporcionar una interfaz simplificada para el sistema subyacente y ocultar su complejidad.

Ejemplo de aplicación del Patrón Fachada en JavaScript:

// Sistema subyacente
class SistemaComplejo {
metodo1() {
console.log("Imagina que aquí hay mucho código complejo");
}

    metodo2() {
    	console.log("Imagina que aquí hay mucho código complejo, pero en otro método");
    }

}

// Fachada
class FacadeSystem{
constructor() {
this.sistemaComplejo = new SistemaComplejo();
}

    metodoFacil() {
    	this.sistemaComplejo.metodo1();
    	this.sistemaComplejo.metodo2();
    }

}

// Uso
const fachada = new FacadeSystem();
fachada.metodoFacil();
// Salida:
// Imagina que aquí hay mucho código complejo
// Imagina que aquí hay mucho código complejo, pero en otro método
En este ejemplo, creamos un sistema subyacente complejo llamado “SistemaComplejo” que tiene dos métodos. Luego creamos una clase “FachadaSistema” que actúa como intermediario entre el cliente y el sistema subyacente. Finalmente, creamos un objeto de la clase “FachadaSistema” y vemos el resultado de invocar su método fácil.

Proxy pattern
El Patrón Proxy en JavaScript es un patrón de diseño que proporciona un middleware (o intermediario) para otro objeto para controlar el acceso a él. El objeto proxy actúa como un intermediario entre el cliente y el objeto real, interceptando y controlando las operaciones realizadas sobre el objeto real.

Si nos vamos al lado del backend, estos middlewares son de lo más común con ExpressJS (por ejemplo). Express es un framework para desarrollar API de NodeJS, y una de las características que tiene es el uso de Middlewares. Los middlewares no son más que piezas de código que podemos hacer que se ejecuten antes, en el medio o después de que cualquier solicitud llegue a nuestros puntos finales

El Patrón Proxy se puede implementar de varias maneras en JavaScript, una de ellas es utilizando funciones proxy, que permiten interceptar y controlar el acceso a un objeto. Las funciones proxy reciben un objeto y un manejador como argumentos, y actúan como un intermediario para el objeto, delegando las operaciones a él.

Ejemplo con proxys:

// Objeto original
const objetoReal = {
nombre: 'Objeto Real',
descripcion: 'Este es el objeto real'
};

// Función proxy
const proxy = new Proxy(objetoReal, {

    get(target, prop) {
    	console.log(`Accediendo a la propiedad "${prop}"`);
    	return target[prop];
    },

    set(target, prop, value) {
    	console.log(`Estableciendo valor ${value}" en la propiedad "${prop}"`);
    	target[prop] = value;
    	return true;
    }

});
// Uso

console.log(proxy.nombre);
// Accediendo a la propiedad "nombre" / "Objeto Real"

proxy.descripcion = 'Nueva descripción';
// Estableciendo valor "Nueva descripción" en la propiedad "descripcion"

console.log(proxy.descripcion);
// Accediendo a la propiedad "descripcion" / "Nueva descripción"
En este ejemplo, creamos un objeto real con dos propiedades, “nombre” y “descripcion”. Luego creamos una función proxy que actúa como intermediario para el objeto real, interceptando y controlando las operaciones de lectura y escritura realizadas sobre él. Finalmente, hacemos uso del objeto proxy y vemos cómo se muestran los mensajes de acceso a las propiedades y la actualización de sus valores.

Otra manera de hacer uso del patrón Proxy es usando clases. Por ejemplo, cuando queremos controlar el acceso a una clase o objeto en base a una condición. Suponiendo que tenemos una clase Product que representa un producto en una tienda virtual con los siguientes atributos: name, price y available.

class Product {
constructor(name, price, available) {
this.name = name;
this.price = price;
this.available = available;
}
}
Si queremos controlar el acceso a los productos en base a si el usuario está registrado o no, podemos utilizar un proxy. Para ello, crearemos una clase ProductProxy que actúe como intermediario entre los clientes y los productos.

class ProductProxy {
constructor(product, user) {
this.product = product;
this.user = user;
}

getName() {
return this.product.name;
}

getPrice() {
return this.product.price;
}

isAvailable() {
return this.product.available;
}

buy() {
if (this.user.isRegistered) {
this.product.buy();
} else {
console.log("Error: el usuario no está registrado");
}
}
}
La clase ProductProxy tiene un atributo product que es la instancia del objeto original, un atributo user que representa al usuario y los métodos getName, getPrice, isAvailable y buy. El método buy se encarga de controlar el acceso a los productos en base a si el usuario está registrado o no.

Otro ejemplo de uso del patrón Proxy en Javascript es cuando queremos crear una versión simplificada de un objeto complejo. Por ejemplo, supongamos que tenemos un objeto complejo como el siguiente:

const complexObject = {
prop1: "value1",
prop2: "value2",
prop3: {
nestedProp1: "nestedValue1",
nestedProp2: "nestedValue2",
nestedProp3: {
deeplyNestedProp1: "deeplyNestedValue1",
deeplyNestedProp2: "deeplyNestedValue2"
}
},
prop4: "value4",
prop5: "value5"
};
Si queremos simplificar el acceso a los valores dentro de este objeto complejo, podemos crear un proxy que permita acceder directamente a los valores que necesitamos. Por ejemplo:

const simpleObjectProxy = new Proxy(complexObject, {
get(target, prop) {
if (prop in target) {
return target[prop];
}
return null;
}
});

console.log(simpleObjectProxy.prop1);
// "value1"
console.log(simpleObjectProxy.prop3.nestedProp3.deeplyNestedProp1);
// "deeplyNestedValue1"
// De esa manera nos saltamos el acceder a prop3

## Chain of responsability pattern 🔗

El patrón Chain of Responsibility en JavaScript es un patrón de diseño que permite la distribución de responsabilidades entre múltiples objetos. Este patrón permite que varios objetos puedan manejar una solicitud sin tener que conocer a quién se está enviando la solicitud ni cuál es el objeto que la manejará finalmente.

La aplicación del patrón Chain of Responsibility en JavaScript se logra a través de la creación de una cadena de objetos que se comunican entre sí. Cada objeto de la cadena debe tener una referencia al siguiente objeto en la cadena y debe tener la capacidad de manejar la solicitud si lo desea. Si un objeto no puede manejar la solicitud, la pasa al siguiente objeto en la cadena.

Ejemplo de aplicación del patrón Chain of Responsibility en JavaScript:

// Clase base para las solicitudes
class Solicitud {
constructor(tipo, cantidad) {
this.tipo = tipo;
this.cantidad = cantidad;
this.siguiente = null;
}
}

// Clase manejadora de solicitudes de descuentos
class DescuentoHandler {
constructor() {
this.siguiente = null;
}

    solicitar(solicitud) {
    	if (solicitud.tipo === "descuento") {
    		console.log(`Se aplicó un descuento del 10% por un total de ${solicitud.cantidad * 0.1}`);
    	} else if (this.siguiente !== null) {
    		this.siguiente.solicitar(solicitud);
    	}
    }

}

// Clase manejadora de solicitudes de envío gratis
class EnvioGratisHandler {
constructor() {
this.siguiente = null;
}

    solicitar(solicitud) {
    	if (solicitud.cantidad >= 500) {
    		console.log("Se aplicó envío gratis");
    	} else if (this.siguiente !== null) {
    		this.siguiente.solicitar(solicitud);
    	}
    }

}

// Uso
const descuentoHandler = new DescuentoHandler();
const envioGratisHandler = new EnvioGratisHandler();
descuentoHandler.siguiente = envioGratisHandler;

const solicitud = new Solicitud("descuento", 100);
descuentoHandler.solicitar(solicitud);
// Se aplicó un descuento del 10% por un total de 10

const solicitud2 = new Solicitud("compra normal", 700);
descuentoHandler.solicitar(solicitud2);
// Se aplicó envío gratis

Código corregido por @Energy 💚

En este ejemplo, creamos dos clases manejadoras de solicitudes, DescuentoHandler y EnvioGratisHandler, que se encargan de manejar solicitudes específicas. Luego, establecemos una relación de cadena entre ellos, estableciendo que DescuentoHandler es el primer objeto en la cadena y EnvioGratisHandler es el siguiente.

Cuando se hace una solicitud, se inicia en DescuentoHandler, que verifica si puede manejar la solicitud. Si no puede, pasa la solicitud al siguiente objeto en la cadena, EnvioGratisHandler, que verifica si puede manejarla. Si uno de los objetos en la cadena puede manejar la solicitud, se ejecuta su lógica correspondiente y se detiene la cadena. De lo contrario, la solicitud se pierde y no se ejecuta ninguna acción.

Este patrón es útil en situaciones donde una sola clase no debería ser responsable de manejar todas las solicitudes, y en lugar de eso, se deben dividir entre varios objetos. Además, permite que la lógica de manejo de solicitudes sea fácilmente modificable y escalable, ya que se pueden agregar o eliminar objetos de la cadena sin afectar el comportamiento de los objetos existentes.

Observer pattern 👀
El patrón Observer en JavaScript es un patrón de diseño que permite que un objeto mantenga una lista de sus dependientes y notifique a ellos automáticamente cualquier cambio. Este patrón es útil cuando necesitamos que varios objetos reciban notificaciones de cambios en un objeto determinado.

La aplicación del patrón Observer en JavaScript se logra a través de la creación de un objeto que mantiene una lista de sus dependientes y provee una forma de registrarlos y notificarlos de los cambios. Cada objeto dependiente debe tener una función que se ejecute cada vez que se produzca un cambio en el objeto principal.

Ejemplo de aplicación del patrón Observer en JavaScript:

// Clase Observador
class Observador {
constructor(nombre) {
this.nombre = nombre;
}
notificar(cambio) {
console.log(`${this.nombre} ha sido notificado del cambio: ${cambio}`);
}
}

// Clase Observable
class Observable {
constructor() {
this.observadores = [];
}

    registrarObservador(observador) {
    	this.observadores.push(observador);
    }
    notificarCambio(cambio) {
    	this.observadores.forEach(observador => {
    		observador.notificar(cambio);
    	});
    }

}
// Uso
const observable = new Observable();
const observador1 = new Observador("Observador 1");
const observador2 = new Observador("Observador 2");

observable.registrarObservador(observador1);
observable.registrarObservador(observador2);

observable.notificarCambio("Cambio en el objeto principal");
// Observador 1 ha sido notificado del cambio: Cambio en el objeto principal
// Observador 2 ha sido notificado del cambio: Cambio en el objeto principal
En este ejemplo, creamos una clase Observador y una clase Observable. La clase Observable mantiene una lista de sus dependientes (observadores) y provee una forma de registrarlos y notificarlos de los cambios. Cada vez que se produce un cambio en el objeto principal, se notifica a todos los observadores registrados.

## Estructuras de datos en JavaScript

Para empezar, ¿qué es una estructura de datos? En pocas palabras, es una forma de organizar y almacenar datos de una manera eficiente y fácil de acceder y modificar. Existen muchos tipos diferentes de estructuras de datos, como matrices, listas enlazadas, árboles y mapas, entre otros.

En JavaScript, podemos trabajar con varias estructuras de datos nativas, como objetos y arrays. Los objetos son una colección no ordenada de pares clave-valor, mientras que los arrays son una secuencia ordenada de elementos. Ambas estructuras son útiles en diferentes situaciones y pueden ser combinadas para crear soluciones más complejas.

Las estructuras de datos son esenciales porque nos permiten organizar y manejar grandes cantidades de información de una manera eficiente. Por ejemplo, si estamos construyendo una aplicación de compras en línea, podemos utilizar una matriz para almacenar los productos disponibles y un objeto para almacenar la información del usuario.

Las estructuras de datos en JavaScript incluyen:

Arrays: Una secuencia ordenada de elementos. Ejemplo: Una lista de compras.
Objetos: Una colección de pares clave-valor. Ejemplo: Un perfil de usuario con nombre, edad y dirección.
Maps: Una colección de pares clave-valor con acceso constante, básicamente objetos pero con esteroides.
Ejemplo: Una lista de precios de productos en una tienda en línea.
Sets: Una colección de valores únicos, como arrays pero sin valores repetidos.
Ejemplo: Una lista de usuarios únicos en un sitio web.
linked lists: Una secuencia ordenada de elementos enlazados mediante punteros.
Ejemplo: Una lista de tareas pendientes en una aplicación de gestión de proyectos.
Stacks: Una colección de elementos donde el último elemento agregado es el primero en ser retirado.
Ejemplo: La navegación hacia atrás y hacia adelante en un navegador web.
Queues: Una colección de elementos donde el primer elemento agregado es el primero en ser retirado.
Ejemplo: La gestión de tareas en un sistema operativo.
Binary trees: Una estructura de datos donde cada nodo puede tener hasta dos hijos.
Ejemplo: La representación de un árbol genealógico.
Grafos: Una estructura de datos donde los nodos pueden tener cualquier número de conexiones.
Ejemplo: La representación de un mapa de ciudad con calles y avenidas.
Estas estructuras de datos pueden ser implementadas en diferentes situaciones dependiendo de la necesidad, por ejemplo, en aplicaciones web, sistemas de información, bases de datos, entre otros.

En resumen, las estructuras de datos son una herramienta esencial en la programación y nos permiten organizar y manipular datos de una manera eficiente y efectiva.

## ¿Qué es una hash table?

Las hash tables son estructuras de datos que permiten almacenar pares clave-valor y acceder a ellos de manera eficiente. La idea detrás de las hash tables es usar una función matemática llamada “función hash” para asignar a cada clave un índice en un arreglo.

El funcionamiento de las hash tables se basa en dos componentes: la función hash y los buckets. La función hash es una función matemática que recibe una clave y la convierte en un índice en el arreglo. Los buckets son celdas en el arreglo donde se almacenan los valores. Cada bucket está asociado a una clave y contiene un valor.

La función hash es importante porque debe asegurarse de que la misma clave siempre produzca el mismo índice, de lo contrario, se perderá la capacidad de acceder a un valor rápidamente. Además, la función hash debe ser lo suficientemente eficiente para procesar un gran número de claves.

Las operaciones más comunes en una Hash Table son la inserción, búsqueda y eliminación de elementos.

Complejidad algorítmica
Si medimos la complejidad de los métodos de la hash table con Big o notation, podremos notar que es de lo más eficiente. Debido a que siempre se mantiene constante.

Algoritmo Big o notation
Inserción O(1)
Búsqueda O(1)
Eliminación O(1)
Hay distintas formas de crear e implementar una hash table en JavaScript, por lo que a continuación te enseñaré una manera para crear una con todos sus métodos.

class HashTable {
constructor(size) {
// Dentro del constructor se inicializa un array con un tamaño arbitrario
// Para asignarlo como el tamaño total de buckets en nuestra hashTable
this.buckets = new Array(size);
this.numBuckets = this.buckets.length;
}

hash(key) {
// Esta función toma una "key" (puede ser una cadena, número, etc.)
// Para poder calcular el índice del bucket donde el valor será almacenado
let total = 0;
// En este caso el algoritmo para crear un hash es muy sencillo

    	// Para calcular el hash, se suman los valores ASCII de cada caracter de la key
    	// y se toma el resto de la división de esta suma entre el total de buckets.
    for (let i = 0; i < key.length; i++) {

      total += key.charCodeAt(i);
    }
    return total % this.numBuckets;

}

insert(key, value) {
// Este método toma una key y un value, y los almacena en la hash table
// Primero se calcula el índice usando la función hash
let index = this.hash(key);
// si ese bucket no existe, se inicializa como un array vacío.
if (!this.buckets[index]){
this.buckets[index] = [];
}

    	// Luego se agrega un arreglo con la key y el value al bucket
    this.buckets[index].push([key, value]);

}

get(key) {
// Esta función toma una key y retorna el valor almacenado en la hash table
// Primero se calcula el índice usando la función hash
let index = this.hash(key);

    	// si ese bucket no existe, se retorna null.
    if (!this.buckets[index]){
    		return null
    	}

    	// Si el bucket existe, se recorre el array en busca de un arreglo
    	// que tenga la key especificada
    for (let i = 0; i < this.buckets[index].length; i++) {

    		// Si se encuentra ese bucket, se retorna su value correspondiente.
      if (this.buckets[index][i][0] === key) {
        return this.buckets[index][i][1];
      }
    }

    	//Si no se encuentra la key, se retorna null.
    return null;

}

retrieveAll() {
// Esta función retorna un array con todos los valores almacenados
// Se recorren todos los buckets y, si existen, se agrega cada value a un array
let allValues = [];
for (let i = 0; i < this.numBuckets; i++) {
if (this.buckets[i]) {
for (let j = 0; j < this.buckets[i].length; j++) {
allValues.push(this.buckets[i][j][1]);
}
}
}
// Para finalmente retornarlo.
return allValues;
}
}
Los ejemplos de uso de las hash tables son muy variados. Por ejemplo, se pueden usar para implementar cachés, para hacer búsquedas en grandes cantidades de datos, para implementar diccionarios y mucho más.

## Set en JavaScript

Los sets en JavaScript son objetos similares a los arrays que permiten almacenar valores únicos. Estos valores pueden ser cualquier tipo de datos, incluyendo números, cadenas, objetos o incluso otros sets. Una de las principales diferencias entre los sets y los arrays es que los sets no permiten duplicados, mientras que los arrays sí.

Crear un Set no es nada complejo, con la siguiente linea puedes crear uno:

let set = new Set();
También es posible crear un set a partir de un arrays existente:

let array = [1, 2, 3, 4, 5];
let set = new Set(array);
Los métodos más utilizados de los sets son los siguientes:

add(value): este método agrega un valor único al set. Si intentamos agregar un valor que ya existe en el set, no ocurrirá nada.
delete(value): este método elimina un valor específico del set.
has(value): este método verifica si un valor determinado existe en el set. Devuelve true si existe y false en caso contrario.
clear(): este método vacía completamente el set.
size: este atributo devuelve la cantidad de elementos que existen en el set.
Ejemplos de uso de set 👇:

let set = new Set();

// Agregar elementos al set
set.add(1);
set.add(2);
set.add(3);

// Si llamamos a nuestro set directamente, este nos devolerá todo su contenido
console.log(set) // Output [1,2,3]

// Verificar si un elemento existe en el set
console.log(set.has(2)); // Output: true

// Eliminar un elemento del set
set.delete(2);

// Verificar si un elemento existe en el set después de ser eliminado
console.log(set.has(2)); // Output: false

// Vaciar el set
set.clear();

// Verificar el tamaño del set después de ser vaciado
console.log(set.size); // Output: 0
Es importante destacar que los sets son una estructura de datos útil para almacenar valores únicos y para realizar operaciones simples de agregar, eliminar y verificar si existe un valor determinado. Sin embargo, si se necesita iterar sobre los elementos de un set, es necesario convertirlo previamente a un arreglo o usar un bucle.

## Maps en JavaScript

Los Maps (no confundir con el método map de los arrays) en JavaScript son estructuras de datos que permiten almacenar pares clave-valor y acceder a ellos de manera eficiente. A diferencia de los objetos regulares, las claves en un Map pueden ser de cualquier tipo de dato, incluyendo objetos, funciones y valores primitivos. Los Maps son especialmente útiles cuando se necesitan realizar búsquedas rápidas de valores asociados a una clave determinada.

Para crear un Map, se puede utilizar la siguiente sintaxis:

let map = new Map();
También es posible crear un Map a partir de un arreglo de pares clave-valor:

let array = [["key1", "value1"], ["key2", "value2"]];
let map = new Map(array);
Los métodos más utilizados de los Maps son los siguientes:

set(key, value): este método agrega un par clave-valor al Map.
get(key): este método devuelve el valor asociado a una clave determinada. Si la clave no existe, devuelve undefined.
has(key): este método verifica si una clave determinada existe en el Map. Devuelve true si la clave existe y false en caso contrario.
delete(key): este método elimina una clave y su valor asociado del Map.
clear(): este método vacía completamente el Map.
size: este atributo devuelve la cantidad de pares clave-valor que existen en el Map.
Ejemplos de uso de Map 👇:

let map = new Map();

// Agregar pares clave-valor al Map
map.set("key1", "value1");
map.set("key2", "value2");
map.set(3, "value3");

// Obtener el valor asociado a una clave
console.log(map.get("key1")); // Output: "value1"

// Verificar si una clave existe en el Map
console.log(map.has("key2")); // Output: true

// Eliminar una clave del Map
map.delete("key2");

// Verificar si una clave existe en el Map después de ser eliminada
console.log(map.has("key2")); // Output: false

// Vaciar el Map
map.clear();

// Verificar el tamaño del Map después de ser vaciado
console.log(map.size); // Output: 0

En resumen, los Maps en JavaScript son estructuras de datos útiles para almacenar pares clave-valor y para realizar operaciones eficientes de búsqueda, adición y eliminación de valores asociados a una clave determinada.