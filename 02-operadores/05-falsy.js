// shrot-circuit corto circuito

// [] || {} con or nos devueve el primero que haya evaluado el true;
// resultado []
// [] && {} con AND nos devuelve el ultimo que haya evaluado el true;
// resultado {}

//valors que evalua el false y de vuelve
// false, 0, 'strin vacios' '', null, undefinde, NaN;

// nombre esta vacio
let nombre = 'Michael B';
// a la variable username le va dar el nombre de la variable
// o si no compara || y le da anonimo
let username = nombre || 'anonimo';
// imprimir por consola
console.log(username);

// comparado && tiene que evaluar que la primera sea true

function fn1(){
    console.log('soy funcion 1');
    return true;
}

function fn2(){
console.log('soy funcion 2');
return false;
}

let x = fn1() && fn2() 