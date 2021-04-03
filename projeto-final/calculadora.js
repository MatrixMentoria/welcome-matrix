//pegar o elemento formulario da calculadora
const expression_form = document.querySelector("#expression-form");

//escute o evento de submissão do formulário
expression_form.addEventListener("submit", function (e) {
  e.preventDefault();
  const input = e.currentTarget.expression.value;
  let newInput = String(input).split('');


  let previousValue = '';
  let nextValue = '';
  let operator = '';
  let hasOperator = false;

  for (let index = 0; index < newInput.length; index++) {
    const element = newInput[index];

    if (element === '+' || element === '-' || element === '/' || element === '*') {
      hasOperator = true;
      operator = element;
    }

    if (!hasOperator) {
      previousValue += element;
    } else {
      nextValue += element;
    }



  }

  console.log(previousValue);
  console.log(nextValue);
  console.log(operator);

  let result = calc(Number(previousValue), operator, Number(nextValue));

  document.querySelector('#expression-result').textContent = result;

  //escreva o código para avaliar a expressão e obter o resultado (não pode utilizar a função eval())

  //atribua o resultado ao elemento "expression-result"
});

function calc(valor1, operador, valor2) {
  function somar() {
    return valor1 + valor2
  }

  function subtrair() {
    return valor1 - valor2
  }

  function multiplicar() {
    return valor1 * valor2
  }

  function dividir() {
    return valor1 / valor2
  }
  var funcoes = {
    '+': somar,
    '-': subtrair,
    '*': multiplicar,
    '/': dividir
  };
  return funcoes[operador]()
}

function oper(array, op) {
  let operacoes = {
    43: (a, b) => (a + b),
    45: (a, b) => (a - b),
    47: (a, b) => (a / b),
    42: (a, b) => (a * b),
  }

  return 
array.map
(oper[op])
}