# Notas de Javascript

- 🤘 keys { 🧑‍💻:"code", 🦖:"nota", 🤖:"hack", 🚩:"bookmark" }

# 1- base

**Que es JS?** leguaje para programar aplicaciones web.
- 🦖 Da dinamismo a la web.

**Caracteristicas:**
- Dinámico.
- Interpretado.
- Orientado a objetos.
- Débilmente tipado.

## Operadores
- +; -; *; /; %; ++; **;
- <; >; !=;
- concatenar: "Hola" + " mundo"
- asignación "="
- igualdad "=="
- 🚩 mismo valor y tipo "==="
- disyunción: AND &&
- unión: OR ||
- negación: NOT !
- diferente valor o tipo: !==

## Tipos de datos
- 🤖 **"Var" da problemas** 
    - 🦖 razón? el scope global.

- number
- string
- boolean
- null
- undefined
- array []
- objeto {}
- bigint
- symbol

## 🚩 Plantillas literales - template strings!
- 🦖 en windows usar: alt+96   
- 🧑‍💻 console.log(`Hola ${nombre}`);

## Coerción - casteo
- 🦖 **convertir un valor de un tipo de dato a otro tipo**.

 en el código. 
- conversión automática o implícita
- 🧑‍💻 
 ```
 const number = 10;
 const string = number; // La variable `string` ahora contiene la cadena "10"
 ```
  
### casteo: 
- conversión explícita ( usando funciones )
- 🧑‍💻 
 ```
 const number = 10;
 const string = "10";
 
 const castedNumber = Number(string); // La variable `castedNumber` ahora contiene el número 10
 ```

## Truthy & falsy
- Valores verdaderos y falsos 
  - 0, "", NaN, undefined o null.
- Todo valor que no sea falsy es truthy incluyendo las estructuras vacías de array y objetos:   
  - Boolean([]), Boolean({}) // true.

## bloque try-catch
- 🦖 Bloque de código que captura un error en caso de que ocurra
- 🧑‍💻
 ```
 try { //Código a probar
 } catch (error) { //Código en caso de error
 console.log(error);   }
 ```

### throw new Error
- Crea un nuevo objeto de error con un mensaje.
- 🧑‍💻
```
 try {
     const num = 100;
     if (num > 50) {
         throw new Error("El número es mayor a 50");
     }
 } catch (error) {
     console.error(error.message);
 }
 ```

## 🤖 Debugging
- Encontrar y corregir errores.
- Se utiliza para **detener la ejecución** del código en un punto específco.
- 🧑‍💻
 ```
 let numero = 5;
 debugger;
 ```

## 🤖 Modo estricto
- Conjunto de **reglas y características** que proporcionan **mayor seguridad y control** en el código.

## Recordar:
- En .js usar camelCase
  1. let, const, function: **miNombreEs**
  2. class: **MiClaseEs**

---

# 2- funciones

## 🚩 Funcion Declarativa
- 🦖 Funcion "normal"
- 🦖 Se procesan en el **hoisting**
- 🧑‍💻
 ```
 function sumar(a, b) {
     return a + b;
 }
 sumar(a, b);
 ```

## 🚩 Funcion de Expresion
- 🦖 Se definen "como una expresión!"
- 🤖 Puede ser asignada a una variable
- 🧑‍💻
 `let sumar= function (a,b){ return a + b }`

## 🚩 IIFE (Immediately Invoked Function Expression)
- 🤖 Función que se **autoejecuta inmediatamente después de ser definida**.
- 🦖 Es anónima!
- 🤖 No se puede reutilizar!
- 🧑‍💻
  ```
  (function () {
  console.log("Soy una funcion");
  })();
  ```

## 🚩 Funcion Flecha - Arrow function
- 🦖 Funciones de **una sola línea**.
- 🧑‍💻
  ```
  const saludar = () => console.log("Hola");
  saludar();
  ```

## 🤖 Conceptos
- Las **funciones declarativas se mueven al principio** del ámbito por lo que se pueden llamar antes de su definición.
- Las **funciones de expresión NO se elevan** por lo que solo se pueden llamar después de su definición.
- Las **funciones declarativas tienen alcance de función**.
- Las **funciones de expresión tienen alcance de variable**.

## Hoisting - Elevación
- Se da cuando las declaraciones de variables y funciones son **desplazadas a la parte superior del scope más cercano**.
- 🦖 Solo funciona con las declaraciones.

---
