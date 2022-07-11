let student = {
  name:'Erick',
  age: '22 years old',
  job: 'Software engineer',
  height: '1.73'
}

let student1 = {
  name:'Juan',
  age: '22 years old',
  job: 'Software engineer',
  height: '1.77'
}

let student2 = {
  name:'Pedro',
  age: '22 years old',
  job: 'Software engineer',
  height: '1.53'
}

let student3 = {
  name:'Pablo',
  age: '22 years old',
  job: 'Software engineer',
  height: '1.65'
}

let students = [student, student1, student2, student3]

for (let i = 0; i<students.length; i++){
  let persona = students[i]
  console.log(`${persona.name} trabaja como ${persona.job} y mide ${persona.height} `)
}