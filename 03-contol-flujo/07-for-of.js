// for of- loops. 

let animales = ['chanchito feliz', 'gato', 'perro', 'abeja'];

// con el for creamos la variable donde alamacena la lista
// que viene de of animales, es como ingresar dentro de la lista
for (let animal of animales){
    console.log(animal);
}

// otra forma utilizando el while

// iniciamos la variaable i en 0
let i = 2;
// con la vairable creada recorremos la lista para obtener los elementos con .length

while ( i < animales.length){
    // imprimimos y [i] el valor de la posicion inical, 
    // si se cambia la variable imprimero desde el numero colocado, aclarando que empieza en 0
    console.log(animales[i]);
    // seria el contador, para cuando recorra todo los elementos se cierre
    i++
}
