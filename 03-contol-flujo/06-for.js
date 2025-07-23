// con for tambien podemos crear loops. pero adiferencia del while lo contiene todo en una sola misma linea

// cereamo la variable con let, palabra reservada

let i = 2;

// con el ciclo while, comprabaremos si la variable es menos que el numero que estanos dando

// i es menor que 2
while (i < 2) {
    //creamos la condicion para que si i es divisible por 2 alamacene pares
    // la operacion va dentro de los parenteisis, quiere decir que si es divisible por 2 y el resultad es 0 es par
    if ( i % 2 == 0) {
        // ahora imprimos por pantalla
        console.log('numero par', i);
    }
    // el contador de i para que el bucle no se vuelta infiintio
    i++;
}

// ahora con el ciclo for
// se compone asi por 3 expresiones for (inicializacion(seria la variable ejemplo let i = 0);comparacion(i < 2);exprecion(que queremos hacer con i (i++))) {}

for (let i = 2; i < 10; i++){
    if (i % 2 == 0){
        console.log('numeros par', i)
    }
}

