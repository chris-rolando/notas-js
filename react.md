# REACT

# 🤘 1 Base

## Que es React?
- Es una libreria / biblioteca de JS **para crear UI**.

## Como funciona?
- Crea un **DOM virtual** en memoria.
- **Utiliza** la sintaxis de **componentes** para construir la UI.

## Que es un componente?
- Es un **Bloque de codigo reutilizable** 
- Puede tener o no un estado.

    ### Que es un Estado?
    - Indica como se encuentra la info del componente en un punto determinado del tiempo.
    - 🦖 Son propiedades y valores de un componente.

- 🦖 Se definen con UpperCamelCase.
- 🦖 Cada componente cumple una tarea especifica.

### Functional component:
- Es una **funcion de JS que retorana un elemento JSX**.

### Class component:
- Es una clase de JS.
- 🦖 No recomendado.

## Que son los Hooks?
- Son una caracteristica que permite que los **functional component tengan accesso al estado**.

## Que son las Props?
- 🦖 Propierties.
- Son **argumentos que pueden recibir los componentes**.
- Se envian de padre a hijo! En una sola dirreción
    
## EventListener - eventHandler:
- Funcion de JS que es ejecutada cuando ocurre un evento especifico.

## ReactDOM:
- Proporciona la funcionalidad para renderizar los componentes en el DOM.

## Exportar componentes:

### Por defecto:
- 🦖 No recomendado.
- export default Componente; // En el archivo Componente.js
- import Componente from './Componente'; // En padre.js

### Por nombre:
- 🦖 Recomendado.
- export function Componente1 ... // En el archivo Componentes.js
- import { Componente1, Componente2 } from './Componentes'; // En padre.js

# 🤘 2 Hands on