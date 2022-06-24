function calculadora(string1) {
	let temp=0
	let sum = 0

if(string1.length <=20){
	console.log('cantidad de caracteres aceptada')
	for (let i=0; i<string1.length; i++){
		let caracter = string1[i];
		if (!isNaN(String(caracter) * 1))
		temp += caracter;
		else {
			sum += parseInt(temp);
			temp = "0";
	}
}
}else{
	console.log('sobrepaso el limite de caracteres')
}
return sum + parseInt(temp);
}

let string1 = '4+5+9+8+2/7+9*9/6-4(4*6)*9'

console.log(calculadora(string1))
