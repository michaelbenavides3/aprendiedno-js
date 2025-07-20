let i = 0;

while (i < 10 ){
    // console.log(i)
    if ( i % 2 == 0){
        console.log('numero par', i);
    }
    i++;
}

// console.log('fuera del while')
// el do while, evalua la condicion al final, en cambio el while evalua la condicion al principio

do {
    if ( i % 2 == 0){
        console.log('numero par', i);
    }
    i++;
} while (i <10); 