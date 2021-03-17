 pwd: Mostra qual caminho estou no momento. 

 git add: Monitorar todos os arquivos do repositório atual

git add nome-do-arquivo.extensao: Escolher qual arquivo vai ser monitorado 

git rm --cached -r . 
Não monitorar mais os arquivos no repositório. 
r - remover as pastas com tudo o que estiver dentro 
e o ponto direciona a ação que deve ser feita dentro da pasta ou diretório atual. 

git commit -m " mensagem sucinta a ser passada."
-m : adicionar um comentário sobre o commit que está sendo feito.
(o commit serve para salvar as alterações feitas)

git restore: desfazer todas as modificações feitas de todos os arquivos no repositório atual. 

git restore caminho/ate/arquivo.extensao
desfazer as alterações de  um arquivo específico 

git log: Para ver todas as alterações realizadas em um repositório.
Retorna o hash, o autor, data e mensagem descritiva 

mkdir origem-teste: criação do diretório e “origem-teste” é o nome do diretório

cd origem-teste: entra no diretório 

git init: inicia o git 

git status: verificação do que está acontecendo no repositório

git remote add: adiciona um repositório remoto e por padrão o Git chama de origin

git push -u origin master: Com o endereço adicionado, enviar o repositório git local para o servidor. O origin indica o servidor remoto e o master a branch. 

git branch: lista as branches 

git branch nome: criou uma nova de linha de trabalho chamada nome 

git branch -d nome: excluir a branch que se chama nome 
