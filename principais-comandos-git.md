git commit –amend
Comando usado para anexar alterações que estão em outra fase, como arquivos que foram deixados para trás.
É uma maneira de modificar a confirmação mais recente, mudando a última confirmação apenas, sem que haja uma alteração da mensagem. 

git checkout
Comando usado quando você sabe que todas as alterações locais podem ser ignoradas, deletando todas de uma vez só.

git stash -p
Comando usado para utilizar a patch para seleção de unidades de cada arquivo rastreado, para que ele fique escondido.

git branch --contains <commit>
Comando usado para você conseguir encontrar ramificações de confirmações, usado essencialmente quando se trata de uma confirmação específica.
  
git push origin :old-name / git push origin new-name
Comando usado para você abrir, de uma vez só, todos os arquivos que estão em conflito. Assim, todos eles serão abertos, pois estão precisando de ajuda para solucionar estes conflitos.

git diff –staged
Comando usado para mostrar alterações que foram adicionadas no índice, mas mostrando em etapas.

git log --pretty=oneline --graph --decorate –all
Comando usado para você dar um print de tudo de uma vez, uma maneira para ficar mais fácil de visualizar o que você precisa e encontrar galhos nos seus códigos, caso seja necessário.

git log -S"config.menu_items"
Comando usado quando quer usar uma palavra-chave para encontrar uma parte específica do código. O log pode ser pesquisado por código, assim você terá uma série de confirmações que alteraram alguma linha de código ou a parte sequencial da sua pesquisa.

