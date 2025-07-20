// imprimis hasta 10. utilizando numero pares con while

//creamos variables i que empieza en 0

let i = 0;

// ceramos el while para recorrer el ciclo
// detro de lo s () va la condcion {} va el bloque de codigo
// i recorreo de 0 hasta 9. porque 10 no es menor que 10
// ahora necesito comprobar numero pares con if
while (i < 10){
    if (i % 2 == 0){
        console.log('numero par', i);
    }
    // auemnta i en 1
    i++;
}

// cuando se cumpla el while, se cierra, mostrar mensaje de cierre

console.log('fuera del while')