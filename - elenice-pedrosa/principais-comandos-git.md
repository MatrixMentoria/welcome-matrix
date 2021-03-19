Seguem alguns comandos importantes utilizados: 

1-Adicionar um diretório em específico

	git add meu_diretorio
  
2-Comitar um arquivo

	git commit meu_arquivo.txt
  
3- Comitar informando mensagem

	git rm meu_arquivo.txt
  
4-Remover arquivo

	git rm meu_arquivo.txt
  
5-Atualizar os arquivos no branch atual

	git pull
  
6-Resolver merge entre os branches

	git merge bug-123
  
7-Apagando um branch

	git branch -d bug-123
  
8-Listar branches

	git branch

9-Listar branches que já foram fundidos (merged) com o master

	git branch --merged
  
10-Listar branches que não foram fundidos (merged) com o master

	git branch --no-merged
	
Atualização de comandos by Jonatan Machado	
Link [Google Drive](https://docs.google.com/document/d/1PPaDeL7wzb-jLWAceqKiSQCwBzD9ILY4A6Bs3dIxLuI/edit?usp=sharing)
## Git Alias

git config --global alias.st status

git config --global alias.lg 'log --all --graph --decorate --oneline --abbrev-commit'

git config --global alias.ac '!git add -A && git commit'

git config --global alias.ci commit

git config --global alias.co checkout

git config --global alias.br branch

git config --global alias.fixup 'commit --all --amend --no-edit'
