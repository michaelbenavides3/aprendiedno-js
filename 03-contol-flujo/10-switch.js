// creams la variable

// con la palabra comprar, comprobamos con si fuera if, elif
let accion = 'comprar';

// palabra reservada switch
// no coincide la palrba se salta al siguien case
// siempre es recomendable cerrar con el break
switch (accion) {
    case 'listar':
        console.log('accion de listar');
        break;
        // no coincide la palabra vuelve y salta
    case 'guardar':
        console.log('accion de guardar')
        break;
        // como no encontro la palabra imprime aca la accion
    default:
        console.log('accion no reconocida')
}