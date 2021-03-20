# **Lista com os principais comandos Git:**

## Git help – Ajuda.
```git help <qualquer_comando_git>```

## Git init - Cria novo repositório.
```git init```

## Git Clone - É um comando para baixar o código-fonte existente de um repositório remoto.
```git clone <https://nome-do-link>```

## Git Branch - Vários desenvolvedores podem trabalhar em paralelo no mesmo projeto simultaneamente.
### - Criando uma nova branch:
```git branch <nome-do-branch>```

### - Para ver a branch:
```git branch or git branch --list```

### - Deletando uma branch:
```git branch -d <nome-da-branch>```

## Git checkout - Para alternar de um branch para outro.
```git checkout <nome-da-branch>```

## Git status - O comando status do Git fornece todas as informações necessárias sobre o branch atual.
```git status```

## Git add - Adicionar um diretório em específico.
### - Para adicionar um arquivo:
```git add <arquivo>```

### - Para adicionar tudo de uma vez:
```git add .```

## Git commit - Comitar um arquivo.
```git commit -m "mensagem explicando a mudança no código"```

## Git log - Exibir histórico
```git log```

## Git config – Editar configuração local e global.
```git config --global user.name "nome"```

## Git bare – Repositório puro, só contém as alterações dos arquivos e não contém uma cópia.
```git init --bare```

## Git remote - Exibir os repositórios remotos.
```git remote```

 ### - Vincular repositório local com um repositório remoto
```git remote add origin git@github.com:EliasMoraes/GoMatrix```

### - Exibir informações dos repositórios remotos
```git remote show origin```

## Git push - Enviar arquivos/diretórios para o repositório remoto.
```git push <remote> <nome-do-branch>```
	
### - No entanto, se seu branch for criado recentemente, você também precisará fazer upload do branch com o seguinte comando:
```git push -u origin <nome-do-branch>```

## Git pull - é usado para obter atualizações do repositório remoto.
```git pull <remote>```

## Git merge - Quando você conclui o desenvolvimento em sua branch e tudo funciona bem, a etapa final é mesclar as branches.
```git merge <nome-da-branch>```
