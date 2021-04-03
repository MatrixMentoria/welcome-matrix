/* 
Projeto Matrix - Formação OutSystems - 2021.1

Fase final da etapa de nivelamento.

Mentor: Jonatan Machado

Escreva um algoritmo que dado um número N, gere uma lista de N números aleatorios, de 0 a 9
e em seguida, verifique se existem números repetidos e quais são esses números.

Abaixo você pode ver alguns número da sequência e constatar esse padrão:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …….

Exemplos:
entrada: 5
Números aleatorios de acordo com a entrada: 1,4,3,9,1
Número que se repetiu: 1

entrada: 6
Números aleatorios de acordo com a entrada: 4,7,9,7,0,9
Números que se repetiram: 7,9

entrada: 3
Números aleatorios de acordo com a entrada: 7,5,6
Números que se repetiram: 0

Além de informar os números que se repetiram, você deve informar a sequência gerada aleatoriamente

BONUS:
faça seu algoritmo ser performático ao ponto de achar os números repetidos para N = 100000.
*/

//pegar o elemento formulario do repetidos
const repetidos_form = document.querySelector("INSIRA_ELEMENTO_FORM_DO_EXERCICIO");

//escute o evento de submissão do formulário
repetidos_form.addEventListener("submit", function (e){
  const input = e.currentTarget.repetidos.value;  

  //escreva o código aqui

  //atribua o resultado ao elemento "repetidos-result"
  //atribua os numeros aleatorios ao elemento "numeros-aleatorios"
})

function generateRandomNumbers(n){

  //código que gera um número aleatorio
  //Math.floor(Math.random() * 10)

}