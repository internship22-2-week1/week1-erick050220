var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28,
    peso: 75
}

console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso} KG` )

const Incremento_Peso = 0.2
const Dias_Del_ano = 365

const aumentarDePeso = persona => persona.peso += Incremento_Peso
const adelgazar = persona => persona.peso -= Incremento_Peso

for (var i = 1; i <= 365; i++){
    var random = Math.random()

    if (random < 0.25){
        aumentarDePeso (sacha)
    } else if (random <0.5){
        adelgazar(sacha)
    }
}

console.log(`Al final del año ${sacha.nombre} pesa ${sacha.peso.toFixed(2)} KG`)