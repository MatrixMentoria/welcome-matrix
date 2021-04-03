/* 
Projeto Matrix - Formação OutSystems - 2021.1

Fase final da etapa de nivelamento.

Mentor: Jonatan Machado

Na sequência de Fibonacci, o próximo número é sempre a soma dos 2 números anteriores.

Abaixo você pode ver alguns número da sequência e constatar esse padrão:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …….

Escrever um algoritmo que, dado um número N, diga o Enésimo valor dentro da sequência de fibonacci
O usuário irá preencher um valor, que será um único número e seu algoritmo deve informar o resultado
no campo "fibo-result"

Exemplos de proposições:
entrada: 9
saída: 34

(*) Não considere o 0 (zero) como um elemento na contagem, apenas utilize-o para montar seu algoritmo.

BONUS:
faça seu algoritmo ser performático ao ponto de conseguir calcular o fibonacci de 512.
*/

//pegar o elemento formulario do fibonacci
const fibo_form = document.querySelector("INSIRA_ELEMENTO_FORM_DO_EXERCICIO");

//escute o evento de submissão do formulário
fibo_form.addEventListener("submit", function (e){
  const input = e.currentTarget.fibo.value;

  //escreva o código para avaliar a proposição e obter o resultado

  //atribua o resultado ao elemento "fibo-result"
})