Principais comandos Git



git init

Para iniciar o git em um projeto, usamos git init e um repositório local será criado. O repositório é um lugar onde estão sendo gravadas as alterações do projeto.


git add

Quando criamos, modificamos ou excluímos um arquivo e queremos criar um ponto na história de produção, usamos git add.

O comando git add não altera o repositório e as alterações só serão salvas quando usarmos o git commit. 


git commit

Este comando é como definir um ponto de verificação no processo de desenvolvimento, para o qual podemos voltar mais tarde, se necessário. Junto com o commit podemos enviar uma mensagem explicando as mudanças no código.


git log

Para visualizar o histórico dos commits do projeto, usamos git log.


git status

Para exibir o estado do desenvolvimento no git e todas as informações do branch atual, usamos o git status.

A página index.html sofreu algumas alterações para exemplificar este comando. Para atualizar essas mudanças, usamos o git add e o git commit novamente para enviar o arquivo atualizado para o repositório.

Para verificar essas mudanças, usamos o git log.


git show

Para visualizar apenas o último ponto na história do projeto, usamos o git show.
git branch

Branches (“ramos”) são utilizados para desenvolver funcionalidades isoladas umas das outras. O branch master é o branch “padrão” quando você cria um repositório. Usando vários branches, vários desenvolvedores podem trabalhar em paralelo no mesmo projeto simultaneamente. Trabalhar em uma branch não irá afetar o repositório central ou outros branches. Para criar uma branch em um projeto, usamos git branch.

Para acessar esta branch, usamos o git checkout. Desta forma nós saímos da branch padrão, que é a master, e entramos na branch alternativa. Repare que o VS Code traz uma indicação de qual branch está sendo utilizado no momento, no canto inferior esquerdo da imagem abaixo.

Também podemos verificar qual branch está sendo utilizada através do git status.

Para verificar todos os branches existentes, usamos o mesmo comando git branch.

Após a criação de novas funcionalidades no branch feature/carousel, usamos o git add e o git commit para subir as atualizações.


git merge

Depois de finalizar o trabalho você pode combinar seu branch isolado com outros branches através de um merge. Para isso, usamos o git merge.

Se usarmos um git log, podemos perceber que as duas branches existentes estão unidas.

Com o conteúdo da branch alternativa presente na branch principal, agora podemos deletá-la. Para isso usamos git branch -D.


git remote

Para conectar um repositório local a um repositório remoto, devemos usar git remote add origin <URL DO REPOSITÓRIO>.


git push

Para enviar as alterações para o repositório remoto, devemos usar git push origin master. Após subir as atualizações para o repositório remoto, podemos verificar o nosso perfil do GitHub e encontrar os arquivos lá.


git clone

Para clonar um projeto já iniciado para a sua máquina, usamos o git clone. 

Após clonar o repositório jogo-memoria do meu perfil no github para exemplificar este comando, uma nova pasta é adicionada ao projeto atual com todos os arquivos e códigos do repositório que foi clonado.


git pull

Para atualizar seu repositório local com a mais nova versão, execute o git pull na sua pasta de trabalho para obter as alterações remotas e fazer o merge.