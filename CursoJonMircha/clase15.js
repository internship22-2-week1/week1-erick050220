// for (let i=0; i < 10; i++) {
//   console.log('for ' + i)
// }

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (i = 0; i < numeros.length; i ++ ) {
//   console.log(numeros[i])  
// }

const erick = {
  nombre: "Erick",
  apellido: "Lopez",
  edad: 22
}

for (const propiedad in erick){
  console.log(`Key: ${propiedad}, Value: ${erick[propiedad]}`)
}


