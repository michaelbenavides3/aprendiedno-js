// arreglos o arrays se utiliza []

let animales = ['tiara', 'lupe', 'casa'];
console.log(animales);
// como acceder a un elemento [], los elementos siiempre empeiza en 0
console.log(animales[0]);
console.log(animales[2]);

// agregar nuevo elemento llamamos la variable [3] porque el 2 ya lo tiene la casa
animales[3] = 'colombia';
// ojo no hacer, tener cuidado cuando se agrega
animales[8] = 'pez'
console.log(animales);
console.log(animales[5]);
console.log(typeof animales);
// me dvuelve la cantidad de arrays con la palabra reserva length
console.log(animales.length)