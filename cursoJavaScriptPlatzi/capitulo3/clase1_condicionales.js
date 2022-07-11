var sacha = {
  nombre: 'sacha',
	edad: '13',
	apellido: 'eric',
	ingeniero: true,
	cocinero: false,
	cantante: false,
	dj: false,
	guitarrista: false,
	drone: true

}

// function imprimirProfesiones (persona) {
// console.log(`${persona.nombre} es:`)

// if (persona.ingeniero){
// 	console.log('Ingeniero')
// } else {
// 	console.log('No es Ingeniero')
// }
// if (persona.cocinero) {
// 	console.log('Cocinero')
// }
// if (persona.drone) {
// 	console.log('Piloto de drone')
// }
// }

const mayorDeEdad = 18

function esMayorDeEdad(persona) {
	return persona.edad >= mayorDeEdad
}

function imprimirSiEsMayorDeEdad(persona) {
	if (esMayorDeEdad(persona)) {
		console.log(`${persona.nombre} es mayor de edad`)
	} else {
		console.log(`${persona.nombre} es menor de edad`)
	}
}

imprimirSiEsMayorDeEdad(sacha)




