let signo = prompt('cual es tu signo')

switch (signo) {
  case 'acuario':
    console.log('intentate aislarse del mundo y sentarse en soledad a ')
    break
  case 'piscis':
    console.log('sepa que de ahora en mas, su futuro solo dependera')
    break
  case 'cancer':
  case 'cáncer':
    console.log('soy libre')
    break
  default: 
    document.write('No ingreso su signo sodiacal')
    break
} 