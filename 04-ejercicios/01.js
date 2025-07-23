// vamos a comprobar si a es mayor que b, a vale 10 b 5

function cualEsMayor(a, b) {
    // con la funcion if, comprobamos
    if ( a > b){
        // return a
        return a;
    }
    // de lo contrario b seria mayor que a 
    else { 
        return b;
    }

    // operador ternario
    return (a > b) ? a : b;
}
// dentro de una variable llamanada mayor
// valores para a y b, le pasamos el nombre de la funcion para comare
let mayor = cualEsMayor(10, 5);
// imprimor el numero 
console.log(mayor);