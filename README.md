# React Task List
Listagem de tarefas com React + Flux

# Instalando
```sh
git clone https://github.com/guidiego/react-task-list.git
npm install #Talvez precise de sudo (caso falte permissão)
npm start #Execulta o gulp serve
```
# Tasks do Gulp

####gulp serve
Constroi o dist da aplicação, em seguida, inicia o servidor com livereload e chama o *"watcher"* responsaveis por copilar a aplicação em REACT+FLUX, como precopilar o SASS.

####gulp build
Cria o dist a aplicação

####gulp watch
Inicia os *"watchers"*

####gulp sass
Precopila CSS

####gulp react
Copila a aplicação do React

####gulp copy
Task auxiliar para copiar o index.html

# React Application
Os métodos Store/Action/Utils/Components estão em maioria comentados, *'single comments'* foram utilizados em caso de complexidade durante a execução do método

O código esta usando ES6 (Babel) e Alt (Flux Framework)

# SASS
Por varios problemas com o *gulp-compass*, optei pelo *sass* + *auto-prefixer*

# Testes e CI
Em teste...
