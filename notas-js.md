# Notas de Javascript

- 🤘 descripción { 🧑‍💻:"code", 🦖:"nota", 🤖:"hack", 🚩:"bookmark" }

# 1-Base

## Que es JS?

- Leguaje para programar aplicaciones web.
- 🦖 Da dinamismo a la web.

## Caracteristicas:
  - Dinámico.
  - Interpretado.
  - Orientado a objetos.
  - Débilmente tipado.

## 🧑‍💻 1-hello-world

## Operadores

- simples: +; -; *; /; "%";
- concatenar "+": "Hola, " + "mundo"
- asignación "="
- igualdad "=="
- 🚩 mismo tipo "==="
- asignación +=, \*=, -=, /=
- Desigualdad por valor (!=)
  - "3" != 3 // false
- Menor: 3 < 5, Mayor: 3 > 5
- disyunción: AND &&
- unión: OR ||
- negación: NOT !

## Tipos de datos

- 🤖 **"Var" da problemas** con el scope global, 🦖 no usar por esa razón!

- number
- string
- boolean
- null
- undefined
- array []
- objeto {}
- bigint
- symbol

### 🦖 Symbol

- Tipo de dato único para crear identificadores únicos.

- 🧑‍💻

```
    const simbolo = Symbol();
    let mascota = {
    nombre: "pascal",
    edad: 1,
    [simbolo]: "Identificador único"
    };
```

## typeof

- Para **identificar el tipo de dato** de un valor.
- 🧑‍💻 console.log(`typeof 007`);

## 🚩 Plantillas literales - template strings!
- 🦖 en Windows usar: alt+96   
- 🧑‍💻 console.log(`Hola ${nombre}`);

## Coerción - casteo

🚩 Ver conversión implícita y explícita?

- 🦖 Consiste en **transformar de un tipo de dato a otro**.
- 🧑‍💻 
  ```
  4 + "7" // 47
  4 * "7" // 28
  2 + true // 3
  ```

### Explícita

- Uso de **funciones para transformar** el tipo de dato:
  - Number()
  - String()
  - Boolean().
- 🧑‍💻 
  ```
  Number("47") // 47
  String(51) // "51"
  Boolean(1) // true
  ```

## 🤖 Modo estricto

- Es un conjunto de **reglas y características** que proporcionan **mayor seguridad y control** en el código.

## Truthy & falsy

- Son valores verdaderos y falsos cuando se realiza una coerción a booleano: 
  - 0, "", NaN, undefined o null.
- Todo valor que no sea falsy es truthy incluyendo las estructuras vacías de array y objetos:   
  - Boolean([]), Boolean({}) // true.

## bloque try-catch

- 🦖 Ejecuta código que podría generar un error, para capturarlo en caso de que ocurra.

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

- Proceso de encontrar y corregir errores en el código.

### debugger

- Se utiliza para **detener la ejecución** del código en un punto específco.

- 🧑‍💻
  ```
  let numero = 5;
  debugger;
  ```

---

