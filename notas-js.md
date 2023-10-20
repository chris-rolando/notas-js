# Notas de Javascript

- 🤘 keys { 🧑‍💻:"code", 🦖:"nota", 🤖:"hack", 🚩:"bookmark" }

# 1- base

## Que es JS?

- Leguaje para programar aplicaciones web.
- 🦖 Da dinamismo a la web.

## Caracteristicas:
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

## Display
- innerHTML: modificar el contenido existente
- document.write(): escribe en el flujo ( 🦖 agregar contenido )

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

