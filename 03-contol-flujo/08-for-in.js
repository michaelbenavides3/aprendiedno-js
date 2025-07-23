// con for in, podemos iterar las propiedad de un objeto

let usuario = {
    id:1,
    nombre:'lupe',
    edad:5,
};

// creamos el for, la operacion seria, creamos una variable donde se guardara el resultado
// accedemos al diccionario usuarios
for (let propiedad in usuario){
    // con solamente propiedad accedemos a la propiedad pero no a su valor
    // user[propiedad] accdemos al valor,
    console.log(propiedad, usuario[propiedad]);
}