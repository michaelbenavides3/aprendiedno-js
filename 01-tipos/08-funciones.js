// paralabra reservada para una funcion
// saluda seria una variable dentro de la funcion
function saludar() {
    console.log('hola mundo')
}

// para llamar una funcion solo basta con escribir el nombre de la funcion
saludar();

// funciones con numero
function multi(){
    // return nos guarda el valor para dspues devolverlo
    return 3 * 3;
}

// creamos la variable para almacenar el valor
// crea la variable y se llama a la funcion
let resultado = multi();
// imprimos por consola
console.log(resultado); //seria 9
// otra forma de mostrar el resultdo
console.log(multi())