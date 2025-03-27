//------------------------------------ AT ! EN QUE POSICION BUSCAR

// El at()método de Arrayinstancias toma un valor
//  entero y devuelve el elemento en ese índice,
//   permitiendo enteros positivos y negativos. 
//   Los enteros negativos se cuentan hacia atrás
//    desde el último elemento del array.

// const array1 = [5, 12, 8, 130, 44];
// let index = 3;
// console.log(`An index of ${index} returns ${array1.at(index)}`);

//------------------------------------ FROM SEPARATE MATRIZ


// El método estático crea una nueva instancia Array.from()
// copiada superficialmente a partir de un objeto iterable 
// o similar a una matriz

// console.log(Array.from("foo"));
// // Expected output: Array ["f", "o", "o"]

// console.log(Array.from([1, 2, 3], (x) => x + x));
// // Expected output: Array [2, 4, 6]


//------------------------------------ CONTACT

// El concat()método de Arrayinstancias se utiliza para fusionar dos o 
// más matrices. Este método no modifica las matrices existentes, 
// sino que devuelve una nueva.

// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];
// const array3 = array1.concat(array2);

// console.log(array3);
// // Expected output: Array ["a", "b", "c", "d", "e", "f"]

//------------------------------------ COPY WITH IN


// The copyWithin() method of Array instances shallow copies part of this
//  array to another location in the same array and returns this array
//   without modifying its length.

// // Copy to index 0 the element at index 3
// console.log(array1.copyWithin(0, 3, 4));
// // Expected output: Array ["d", "b", "c", "d", "e"]

// // Copy to index 1 all elements from index 3 to the end
// console.log(array1.copyWithin(1, 3));
// // Expected output: Array ["d", "d", "e", "d", "e"]


//------------------------------------ EVERY

// El every()método de Arrayinstancias comprueba si todos los elementos
//  del array superan la prueba implementada por la función proporcionada.
//   Devuelve un valor booleano.

//   const isBelowThreshold = (currentValue) => currentValue < 40;

//   const array1 = [1,30,22,21,11,12,4,3,12,66]
//   console.log(array1.every(isBelowThreshold))
// Expected output: false




// NEXT()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill