/* 
Projeto Matrix - Formação OutSystems - 2021.1

Fase final da etapa de nivelamento.

Mentor: Jonatan Machado

Escrever um avaliador de proposições
O usuário irá preencher um valor, que será uma proposição simples ou composta, mas com apenas duas proposições 
e um conectivo lógico.
Para representar os conectivos, usaremos a seguinte regra:
Conjunção: AND
Disjunção: OR
Negação: NOT

As proposições serão inseridas já com seu valor lógico calculado, ou seja, V ou F.

Exemplos de proposições:
V AND F
F OR V
NOT V

Seu algoritmo deve informar o resultado no campo "logic-result"

BONUS:
faça seu algoritmo aceitar proposições compostas com mais do que 1 conectivo lógico.
*/

//pegar o elemento formulario do conectivo

const logic_form = document.getElementById('logic-form')
const logic = document.getElementById('logic')
let logic_result = document.getElementById('logic-result')

//escute o evento de submissão do formulário
logic_form.addEventListener('submit', function (e) {
  e.preventDefault()
  let [a, op, b] = logic.value.split(' ')
  if (b === undefined) {
    ;[op, a] = logic.value.split(' ')
  }

  const tipo = {
    V: true,
    v: true,
    F: false,
    f: false,
  }

  const calc = {
    AND: tipo[a] && tipo[b],
    and: tipo[a] && tipo[b],
    OR: tipo[a] || tipo[b],
    or: tipo[a] || tipo[b],
    NOT: !tipo[a],
    not: !tipo[a],
  }

  const tipo2 = {
    true: 'V',
    false: 'F',
  }
  logic_result.innerHTML = tipo2[calc[op]]

  //escreva o código para avaliar a proposição e obter o resultado

  //atribua o resultado ao elemento "logic-result"
})
