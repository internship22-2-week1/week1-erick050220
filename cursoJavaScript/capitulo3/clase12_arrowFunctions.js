var sacha = {
    nombre: 'sacha',
      edad: '19',
      apellido: 'eric',
      ingeniero: true,
      cocinero: false,
      cantante: false,
      dj: false,
      guitarrista: false,
      drone: true
  
  }


const mayorDeEdad = 18

// function esMayorDeEdad(persona) {
// 	return persona.edad >= mayorDeEdad
// }

const esMayorDeEdad = ({edad}) => edad >= mayorDeEdad

function imprimirSiEsMayorDeEdad(persona) {
	if (esMayorDeEdad(persona)) {
		console.log(`${persona.nombre} es mayor de edad`)
	} else {
		console.log(`${persona.nombre} es menor de edad`)
	}
}

function permitirAcceso(persona){
    if(!esMayorDeEdad(persona)){
        console.log('Acceso Denegado')
    } else {
        console.log('Puede ingresar')
    }
}

imprimirSiEsMayorDeEdad(sacha)