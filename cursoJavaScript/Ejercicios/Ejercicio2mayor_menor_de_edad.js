var sacha = {
    nombre: 'sacha',
      edad: '22',
      apellido: 'eric',
      ingeniero: true,
      cocinero: false,
      cantante: false,
      dj: false,
      guitarrista: false,
      drone: true
  
  }
function imprimirSiEsMayorDeEdad(persona) {
	if (persona.edad >= 18) {
		console.log(`${persona.nombre} es mayor de edad`)
	} else {
		console.log(`${persona.nombre} es menor de edad`)
	}
}
imprimirSiEsMayorDeEdad(sacha)