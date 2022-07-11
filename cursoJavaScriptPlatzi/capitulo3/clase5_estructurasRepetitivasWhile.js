var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28,
    peso: 75
}


const Incremento_Peso = 0.3
const Dias_Del_ano = 365

const aumentarDePeso = persona => persona.peso += Incremento_Peso
const adelgazar = persona => persona.peso -= Incremento_Peso
const comerMucho = () => Math.random() <0.3
const realizaDeporte = () => Math.random() < 0.4

const meta = sacha.peso -3
var dias = 0
while (sacha.peso > meta){
  if(comerMucho()){
    aumentarDePeso(sacha)
  }
  if (realizaDeporte()){
    adelgazar(sacha)
  }
  dias += 1
}

console.log(`pasaron ${dias} dias hasta que ${sacha.nombre} adelgazo 3KG`)