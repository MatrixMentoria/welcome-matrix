const repetidos_form = document.querySelector("repetidos-form");
let array = [];
let duplicados = [];
var x = document.getElementById("calcula");
//escute o evento de submissão do formulário
x.addEventListener("click", function (e){
  const input = document.getElementById("repetidos").value;
  let resultado = generateRandomNumbers(input);
  document.getElementById("numeros-aleatorios").innerHTML = resultado;
  document.getElementById("repetidos-result").innerHTML = repetidos(resultado);
  //escreva o código aqui

  //atribua o resultado ao elemento "repetidos-result"
  //atribua os numeros aleatorios ao elemento "numeros-aleatorios"
})

function generateRandomNumbers(n){
  let array = [];
  //código que gera um número aleatorio
  //array de entrada
  for(let i = 0; i < n; i++){
  	array[i] = Math.floor(Math.random() * 10);
  }
  //organizando o array de entrada
  array = array.sort();
  return array;
  //console.log(array);
}

function repetidos(array){
  let duplicados = [];
	for(let i = 0; i < array.length; i++){
  		if(!duplicados.includes(array[i])){
  			if(array[i+1] === array[i]){
  				duplicados.push(array[i]);
  			}
  		}
  	}
  	if(duplicados.length === 0){
  		duplicados.push("-");
  	}
  	return duplicados;
   
}

//console.log(generateRandomNumbers(5));