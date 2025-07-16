// personaje de tv

// variables
let nombre = 'chavo';
let programa = 'chavo del 8';
let edad = 20;

// crerar objeto se crea asi y la variable la paralabra reservada let{}
let persona = {
    nombre : 'chavo',
    programa : 'chavo del 8',
    edad : 20,
}

// imprimir por consola
console.log(persona);
// para imprimir una varibale que uno mismo elige, acceder a la propuedad de un objeto
console.log(persona.programa);
// otra forma de acceder a un objeto llaves [y acompañad 'donde se coloca el vallor llave ']
console.log(persona['nombre']);

// modific la variable se llama al objeto, y acompañda del punto .y el vaor que se quiere mdoificar
persona.edad = 25;

// eliminar un valor
delete persona.programa;

console.log(persona)