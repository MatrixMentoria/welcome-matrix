# ▷ Lista com os principais comandos Git 

### •	git init
```sh
> Inicia o repositório. 
```
### •	git status
```sh
> Permite ver as alterações feitas no código, como se há algum arquivo para
ser adicionado ou commitado.
```
### •	git add
```sh
> Adiciona arquivos e modificações para serem monitorados pelo Git.
```
### •	git add .
```sh
> Todos os arquivos da pasta atual começam a ser monitorados.
```
### •	git rm
```sh
> Remove um arquivo para que deixe de ser monitorado.
```
### •	git commit -m  “comentário”
```sh
> Commita o código para que sejam salvos com uma mensagem.
```
### •	git config --local user.name “nome”
```sh
> Configura o nome referente ao autor no repositório local.
```
### •	git config --local user.email “email”
```sh
> Configura o e-mail referente ao autor no repositório local.
```
### •	git log
```sh
> Verifica o histórico no repositório.
```
### •	git log --oneline
```sh
> Versão simplificada de git log, tendo a informação de cada commit em uma
linha.
```
### •	git log --p
```sh
> Permite ver as alterações commitadas, o formato em que elas são exibidas conta
com a versão anterior em vermelho, e a versão modificada logo abaixo, em verde.
```
### •	git init --bare
```sh
> Inicia um repositório puro, que contém apenas as alterações dos arquivos, 
e não uma cópia física de cada um dos arquivos.
```
### •	git remote add
```sh
> Adiciona repositório remoto.
```
### •	git clone
```sh
> Clona o repositório.
```
### •	git branch
```sh
> Cria uma nova ramificação.
```
### •	git checkout
```sh
> Navega nas branches.
```
### •	git checkout -b
```sh
> Cria um branch e já passa para ele.
```
### •	git merge
```sh
> Gera um merge commit ao unir uma branch ao main.
```
### •	git rebase
```sh
> Aplica os commits de outra branch na branch atual.
```
### •	git revert
```sh
> Cria um novo commit desfazendo um outro commit específico.
```
### •	git stash
```sh
> Salva as alterações de forma temporária.
```
### •	git stash apply
```sh
> Aplica alteração temporária.
```
### •	git stash drop
```sh
> Remove alteração temporária.
```
### •	git stash pop
```sh
> Realiza git stash apply e git stash drop ao mesmo tempo.
```
### •	git diff
```sh
> Permite ver as modificações de alterações e comites diferentes.
```
### •	git tag -a -m
```sh
> Cria uma tag com um texto, que pode ser utilizada para indicar uma realize 
(versão que pode ser baixada).
```
### •	git pull
```sh
> Usado para obter atualizações que estão repositório remoto.
```
### •	git push
```sh
> Envia arquivos/diretórios para o repositório remoto.
```
