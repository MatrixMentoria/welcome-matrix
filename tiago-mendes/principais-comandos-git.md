```
git clone                             --->> clona o projeto do github para diretório no computador local.
git init                              --->> marca o diretório atual para que o git tome conta. Inicia o git nesse diretório.
git add <name_of_the_file>            --->> adiciona o arquivo para a área de stage do git. deixa pronto para dar commit.
git add .                             --->> adiciona todos as alterações para a área de stage. deixa pronto para dar commit.
git commit -m “explanation about it”  --->> salva as alterações que foram adicionadas na área de stage com o (git add acima). O -m é para fazer comentário sobre esse commit.
git push origin master                --->> depois de salvar as alterações no diretório local (commit), esse comando faz subir essas alterações para o repositório remoto na branch master.
git push origin <name of the repo>    --->> depois de salvar as alterações no diretório local (commit), esse comando faz subir essas alterações para o repositório remoto na branch escolhida.
git pull                              --->> puxa as alterações do repositório remoto para o local, e faz o merge (uni as modificações no repositório local).
git fetch                             --->> puxa as alterações do repositório remoto para o local, mas não faz o merge.
git remote -v                         --->> verifica quais os repositórios remotos estão configurados.
git remote add origin <address>       --->> adiciona um repositório remoto para subir as modificações locais.
```
