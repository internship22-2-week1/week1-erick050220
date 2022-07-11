function Persona (name, lastName, height) {
  this.name = name
  this.lastName = lastName
  this.height = height

}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.name} ${this.lastName}`)
}

Persona.prototype.soyAlto = function () {
  return this.height > 1.8
}

var sacha = new Persona('sacha','perez', 1.9)
var erick = new Persona('eroc','perez', 1.75)
var lopez = new Persona('pedro','perez', 1.6)

sacha.soyAlto()
