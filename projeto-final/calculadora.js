/* 
Projeto Matrix - Formação OutSystems - 2021.1

Fase final da etapa de nivelamento.

Mentor: Jonatan Machado

Escrever uma calculadora de expressões.
O usuário irá preencher um valor, que será uma expressão simples, com apenas 2 números, com uma operação básica.
Exemplos de expressões:
2 + 2
2 * 6
5 - 9

Seu algoritmo deve informar o resultado no campo "expression-result"

BONUS:
faça seu algoritmo aceitar expressões com mais do que 1 operação.
*/

//pegar o elemento formulario da calculadora
const expression_form = document.querySelector("INSIRA_ELEMENTO_FORM_DO_EXERCICIO");

//escute o evento de submissão do formulário
expression_form.addEventListener("submit", function (e){
  const input = e.currentTarget.expression.value;

  //escreva o código para avaliar a expressão e obter o resultado (não pode utilizar a função eval())

  //atribua o resultado ao elemento "expression-result"
})