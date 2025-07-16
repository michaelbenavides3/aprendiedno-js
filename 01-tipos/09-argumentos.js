// argumentos mas flexibles
/**
 * 
 * parametros
 */
function suma(a, b){
    console.log(arguments);//imprimir los argumentos
    return a + b;
}

/**
 * argumentos
 */
// agregar nuevo argumento
let resultado = suma(5, 6, 1, 2, 3);
console.log(resultado);
// imprimir el tipo del valor suma
console.log(typeof suma);