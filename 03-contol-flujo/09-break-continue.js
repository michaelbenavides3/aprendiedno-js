// este se puede utilizar en el for, for of, for in, do while, while

// inciamos una variable i que vale 0
let i = 0
// creamos el ciclo while
while (i < 6){
    //i se auto suma hasta 6
    i++;
    // comprobamos si i === se usan 3= para iguales decir exactamente tiene que ser 2
    if ( i === 2){
        continue;
    }
    
    if (i === 4){
        break;
    }
    console.log(i);
}