// Ejercicio práctico — 🛒 Lista de Súper (Parte 1) (Entrega Parcial)

// 1. Instanciar un arreglo vacío guardado en listaDeSuper
let listaDeSuper = [];

// 2. Agregar productos por su índice
listaDeSuper[0] = "sal";
listaDeSuper[1] = "leche";
listaDeSuper[2] = "pan";

// 3. Acceder al primer elemento
console.log(listaDeSuper[0]);

// 4. Crear la variable ultimoElemento con el índice final
let ultimoElemento = listaDeSuper.length - 1;

// 5. Acceder al último elemento usando la variable ultimoElemento e imprimelo por consola
console.log(listaDeSuper[ultimoElemento]);


// Ejercicio práctico — 🛒 Lista de Súper (Parte 2) (Entrega Parcial)

// 1. Agregar dos productos al final de la lista
listaDeSuper.push("huevos", "café");

// 2. Agregar dos productos al principio de la lista
listaDeSuper.unshift("frutas", "verduras");

// 3. Largo actual del arreglo
console.log(listaDeSuper.length);

// 4. Remover el último producto y guardarlo en noHabia
let noHabia = listaDeSuper.pop();

// 5. Remover el primer producto y guardarlo en comprado
let comprado = listaDeSuper.shift();

// 6. Largo final del arreglo
console.log(listaDeSuper.length);