// ES ISOGRAMA CASO 1

// const esIsograma = (palabra)=> {         //ingresa palabra
//  //  console.log(palabra)                  //imprimimos palabra completa
//    const arrayLetras = [];               //Creamos array vacio
//   //  console.log(arrayLetras)             //Lo vemos vacio por consola
//     for( const letra of palabra){        //Creamos Bucle hasta finalizar la letra
//   //  console.log(letra)                   //Vemos la primera LETRA de la palabra
//     if(arrayLetras.includes(letra))      //Preguntamos si array vacio tiene la letra
//          return false;                   //Si se repite devolvemos falso, "No es Isograma"
//       arrayLetras.push(letra)            //Si no se repite agregamos letra al Array;
//    //   console.log(arrayLetras)           //vamos imprimiendo
//             }
//          return true;                    
// }
// //INGRESAR PALABRA DENTRO DE LA FUNCION PARA ANALISIS
// console.log(esIsograma("Perrosqui"))


// ES ISOGRAMA CASO 2

//Version Corta
// const esIsograma = (palabra) => {
//    const letrasUnicas = new Set(palabra.toLowerCase()); // Paso 1 y 2
//    return letrasUnicas.size === palabra.length; // Paso 3
// };
// console.log(esIsograma("ndeaa"))



// ES ISOGRAMA CASO 3  "ARRAY DE PALABRAS E IDENTIFICA"

// const esIsograma = (palabra) => new Set(palabra.toLowerCase()).size === palabra.length;
// const filtrarIsogramas = (arrayPalabras) => arrayPalabras.filter(esIsograma);
// // Ejemplo de uso:
// const palabras = ["murciélago", "reconocer", "casa", "aBcD", "perro", "programación", "linux", "javascript", "html", "git"];
// console.log(filtrarIsogramas(palabras)); 
// // Resultado: ["murciélago", "aBcD", "linux", "git"]





//https://www.codewars.com/
//https://edabit.com/challenges/javascript
//https://leetcode.com/problemset/?difficulty=EASY&page=1&tags=JavaScript
//https://www.hackerrank.com/domains/tutorials/10-days-of-javascript


