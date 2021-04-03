  
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
const logic_form = document.querySelector("#logic-form");
let res = document.querySelector('#logic-result')
//escute o evento de submissão do formulário
logic_form.addEventListener("submit", function (e){
  const input = e.currentTarget.logic.value;

  //escreva o código para avaliar a proposição e obter o resultado
  let logicArray = input.split(' '); 

    if(logicArray[0] == 'NOT'){
      if(logicArray[1] == 'F'){
        return 'V';
      } else {
        return 'F';
      } 

    }else if(logicArray[1] == 'AND'){
      if(logicArray[0] != logicArray[2]){
        return 'F';
      } else if(logicArray[0] == logicArray[2]){
        if(logicArray[0] == 'V'){
          return 'V';
        } else if(logicArray[0] == 'F'){
          return 'F';
        }
      }
    } else if(logicArray[1] == 'OR'){
      if(logicArray[0] != logicArray[2]){
         return 'V';
      } else if(logicArray[0] == logicArray[2]){
        if(logicArray[0] == 'V'){
          return 'V';
        } else if(logicArray[0] == 'F'){
          return 'F';
        }
      }
    }
    
  //atribua o resultado ao elemento "logic-result"
  res.innerHTML = input;
})