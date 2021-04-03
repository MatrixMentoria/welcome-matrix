
[Repositórios]; Contém todos os arquivos e processos do projeto, como documentação, imagens, e códigos do projeto.

[Issues]; Usado para discutir ideias, mudanças, rastrear Bugs e Futures Request. Pode ser designado para uma pessoa específica. Promove discussões e colaboração para resolução dos problemas em grupo.

[Ppull] Requests; Apresenta as alterações de arquivos e deleções que o responsável pelo projeto deseja realizar na aplicação. Usado para resolução de Issues .

[Merge-Pull-Request];  Fazer a fusão das alterações aprovadas pela equipa.

[Watch]; Apresenta todas as notificações com relação ao repositório. Todas as alterações realizadas nele, como novo Isseu, Pull Resquest or comment são adicionados. Também é notificado quando um Pull Resquest é fechado e fundido.

[Star]; Recurso para encontrar o repositório mais fácil.

[Explore];  Input de pesquisa para encontrar projeto em GitHub
 
[Assigned]; Designação do responsável para a tarefa no repositório.
 
[Branches]; Funcionalidade de fluxo de trabalho para desenvolver e propor novas soluções para o projeto sem comprometer a base principal.
 
[Commit]; Comando para fazer realizar as alterações no branche como, alteração de código, envio de arquivos e etc.

 git init  //Inicia Local Git Repositorio caso exista ou criar novo repositório local em branco.

git add . //Adiciona todos os ficheiros ao Index

git add NomeFicheiro //Adiciona um ficheiro específico ao Index

git status //Verifica o estado da Working Tree - se os ficheiros foram adicionados ao Index       ou não e se estão preparados para o commit

git commit //Commit mudanças no Index

git commit -m ‘comentario’  //No meu caso existe um passo intermédio e com este command adicionando um comentário descrevendo o commit evito esse passo intermédio

git push //Push/Envia todos os commits para o repositório remoto

git push origin HEAD:NomeBranchRemoto //No meu caso como o nome do meu branch local não é igual ao nome do meu branch remoto este é o command que tenho de usar. Só o command git push para mim não funciona.

git push origin HEAD  //Enviar todos os commits para o repositório remoto caso o nome da branch seja igual ao da branch local.

git pull //Puxar o repositório remoto para o local(ou o oposto) caso haja diferenças/mudanças

git clone RepositorioUrl //Fazer clone do repositório com o url do repositorio que obtemos no github

git --version  //saber informação da versão git que estou a usar

touch index.html  //Cria novo ficheiro. Neste caso cria ficheiro index.html

git branch BranchName //Cria um novo branch no repositório em que nos encontramos com o nome especificado.

git switch BranchName //Mudar de o branch onde estamos para o branch especificado no 
command. git checkout tem o mesmo efeito

git --help  //Verificar commands caso precisemos de ajuda

clear //Limpar a tela Git

git branch  //Verificar todas as branches locais do nosso repositório local

git branch -r  //Verifica todas as branches remotas do nosso repositório remoto

git merge -m ‘comentário’ BranchName //Estando no branch principal este command faz o merge com o branch que especificarmos no command . Aqui mais uma vez, adicionando -m mais o comentário do que estamos a fazer, leva-nos a evitar um passo extra.

git rm FileName  //Remove o ficheiro especificado da nossa Working Tree

git mv FileName //Mover ou alterar nome de um ficheiro ou directório caso desejemos

git restore//Reverter tudo que ainda nao foi commit

 