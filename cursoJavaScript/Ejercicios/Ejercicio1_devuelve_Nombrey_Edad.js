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

function imprimirNombreyEdad(persona){
    var {nombre} = persona
    var {edad} = persona
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años` )
}

imprimirNombreyEdad(sacha)
imprimirNombreyEdad(dario)
