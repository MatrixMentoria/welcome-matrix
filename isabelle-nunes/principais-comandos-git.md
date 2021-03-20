
git init = utilizado para iniciar um novo repositório

git remote add origin = utilizado para conectar o repositório local e o repositório remoto

git clone = utilizado para fazer o download do repositório remoto

git pull = as alterações realizadas no repositório remoto são puxadas para o repositório local 

git push = envia as informações do repositório local para o repositório remoto

git add = seleciona os arquivos e pastas a serem monitorados pelo git

git commit = utilizado para publicar as alterações no histórico do repositório remoto

git reset --hard HEAD^ = descarta o ultimo commit, apagando as alterações do commit e da staging area

git diff HEAD = verifica a diferença entre arquivos com o ultimo commit

git diff HEAD~5 = verifica a diferença entre arquivos com os ultimos 5 commits

git show = mostra todos os arquivos do commit

git rm = deleta arquivos ou pastas

git remote -v = mostra para onde estão sendo enviadas as alterações e os downloads

git branch = cria um novo branch

git checkout = ativa o branch criado

git checkout <branch_name> = troca de branch

git branch -b <branch_name> = cria um branch e troca para ele em seguida

git branch -r = lista os branches remotos

git status = fornece informações necessárias sobre o branch atual

git branch -d <branch_name> = exclui um branch localmente

git push origin :release_branch_1.0 = exclui o branch remoto, depois de excluí-lo localmente

git merge = mescla as alterações com o branch master

git status = utilizado para verificar qual branch está ativo no momento

git add = utilizado para adicionar arquivos na staging area

git add *.txt = adiciona todos os arquivos .txt dentro do diretório

git add '*.txt' = adiciona todos os arquivos .txt dentro do repositório

git help = lista todos os comandos
