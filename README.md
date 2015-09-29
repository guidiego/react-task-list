# React Task List [![Build Status](https://travis-ci.org/guidiego/react-task-list.svg?branch=master)](https://travis-ci.org/guidiego/react-task-list)
Listagem de tarefas com React + Flux

# Instalando
Antes de começar, certifique que o **ruby** esta instalado, e que seu **node** esta na versão **0.12** ou maior.

```sh
gem install sass
git clone https://github.com/guidiego/react-task-list.git
npm install #Talvez precise de sudo (caso falte permissão)
npm start #Executa o gulp serve
```
# Tasks do Gulp

####gulp serve
Constrói o dist da aplicação. Em seguida, inicia o servidor com livereload e chama os *"watchers"* responsáveis por compilar a aplicação em REACT+FLUX, além de precompilar o SASS.

####gulp build
Cria o dist a aplicação

####gulp watch
Inicia os *"watchers"*

####gulp sass
Pre-compila CSS

####gulp react
Compila a aplicação do React

####gulp copy
Task auxiliar para copiar o index.html

# React Application
Os métodos Store/Action/Utils/Components estão em maioria comentados, *'single comments'* foram utilizados em caso de complexidade durante a execução do método

O código esta usando ES6 (Babel) e Alt (Flux Framework)

# SASS
Por varios problemas com o *gulp-compass*, optei pelo *sass* + *auto-prefixer*

# Testes e CI
Os testes estão sendo feitos através do comando **npm test**, utilizando **JEST**, por falta de conhecimento/contato, os teste foram bem superficiais, apenas para testar a ferramenta mesmo :)

A integração/build foi feito através do travis-ci, implementação de JS-HINT, code validators, entre outros sempre são bem vindas na task do travis (aqui não existente devido a unica condição de build ser nossos testes)
