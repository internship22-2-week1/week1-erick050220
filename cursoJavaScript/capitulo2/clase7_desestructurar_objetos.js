var sacha = {
    nombre:'Sasha',
    apellido: 'Lifszyc',
    edad: 28

}

var dario = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad: 27
}

function imprimirNombreEnMayusculas(persona) {
    // var nombre =  persona.nombre
    var {nombre} = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)
// imprimirNombreEnMayusculas({nombre:'pepito'})
// imprimirNombreEnMayusculas({apellido: 'Gomez'})