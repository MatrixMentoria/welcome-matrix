# Lista de exercícios Aula 3 - Conectivos Lógicos 

## 1 - Diga quais frases abaixo são proposições:

><p>a) Manaus é a capital do estado da Bahia</p>
><p>b) Qual é o horário do show?</p>
><p>c) Que dia lindo!</p>


**Resposta: Apenas letra a (Manaus é a capital do estado da Bahia)**


## 2 - Dado as seguintes proposições, traduza para a linguagem corrente:
# P = Está frio 
# Q = Está chovendo 
<br />

> a) ￢ P <br />
**Não está frio.**

> b) P ∧ Q<br />
**Está frio e está chovendo.**

> c) P ∨ Q<br />
**Está frio ou está chovendo.**

> d) Q ⟷ P<br />
**Está chovendo se somente se está frio.**

> e) P ⟶ ￢Q<br />
**Se está frio então não está chovendo.**

> f) ￢P ∧ ￢Q<br />
**Não está frio e não está chovendo.**

> g) P ∨ ￢Q<br />
**Está frio ou não está chovendo.**

> h) P ∧ ￢Q ⟶ P<br />
**Se está frio e não está chovendo, então está frio.**

## 3 - Dado as seguintes proposições, traduza para a linguagem simbólica: 
### P = Carlos fala francês
### Q = Carlos fala inglês
### R = Carlos fala alemão 

> a) Carlos fala francês ou inglês, mas não fala alemão <br />
**(P ∨ Q) ∧ ￢ R**

> b) Carlos fala francês e inglês, ou não fala francês e alemão <br />
**(P ∧ Q) ∨ ￢(P ∧ R)**

> c) É falso que Carlos fala francês mas não que fala alemão <br />
**￢(P ∧ ￢R)**

> d) É falso que Carlos fala inglês ou alemão mas não que fala francês <br />
**￢(Q ∨ R) ∧  P**

## 4 - Construa a tabela verdade
a) ￢P ∧ ￢Q 
| P 	| Q 	| ￢P 	| ￢Q 	| ￢P ∧ ￢Q 	|
|:---:	|:---:	|:-----:	|:-----:	|:-----------:	|
| V 	| V 	| F   	| F   	| F         	|
| V 	| F 	| F   	| V   	| F         	|
| F 	| V 	| V   	| F   	| F         	|
| F 	| F 	| V   	| V   	| V         	|
<br />
b) ￢(P ∨ Q)

| P 	| Q 	| P ∨ Q 	| ￢(P ∨ Q) 	|
|:---:	|:---:	|:------:	|:-----------:	|
| V 	| V 	| V    	| F         	|
| V 	| F 	| V    	| F         	|
| F 	| V 	| V    	| F         	|
| F 	| F 	| F    	| V         	|      
<br />
c) ￢P ∧ ￢Q     
<br /> OBS.: (Expressão igual a “letra a)”)

| P 	| Q 	| ￢P 	| ￢Q 	| ￢P ∧ ￢Q 	|
|:---:	|:---:	|:-----:	|:-----:	|:-----------:	|
| V 	| V 	| F   	| F   	| F         	|
| V 	| F 	| F   	| V   	| F         	|
| F 	| V 	| V   	| F   	| F         	|
| F 	| F 	| V   	| V   	| V         	|
<br />
d) (P ∧ Q) ∨ ￢(P ∧ R)

| P 	| Q 	| R 	| P ∧ Q 	| P ∧ R 	| ￢ (P ∧ R) 	| (P ∧ Q) V ￢(P ∧ R) 	|
|:---:	|:---:	|:---:	|:-------:	|:-------:	|:------------:	|:----------------------:	|
| V 	| V 	| V 	| V     	| V     	| F          	| V                    	|
| V 	| V 	| F 	| V     	| F     	| V          	| V                    	|
| V 	| F 	| V 	| F     	| V     	| F          	| F                    	|
| V 	| F 	| F 	| F     	| F     	| V          	| V                    	|
| F 	| V 	| V 	| F     	| F     	| V          	| V                    	|
| F 	| V 	| F 	| F     	| F     	| V          	| V                    	|
| F 	| F 	| V 	| F     	| F     	| V          	| V                    	|
| F 	| F 	| F 	| F     	| F     	| V          	| V                    	|
