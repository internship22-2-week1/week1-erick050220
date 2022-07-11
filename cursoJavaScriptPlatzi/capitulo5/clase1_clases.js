function Persona (name, lastName) {
  this.name = name
  this.lastName = lastName

}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.name} ${this.lastName}`)
}

var sacha = new Persona('sacha','perez')
