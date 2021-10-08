npm i -g create-react-app
*modulo do node responsável por criar a versão inicial da aplicação, com bild webpack configurado.

---------------------------------------------------

create-react-app nomeDoProjeto
*para criar o projeto react 

--------------------------------------------------
sugestões que o react deu...

npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd exercicios
  npm start

  ----------------------------------------------------------------

  ** IMPORTANTE ***
  npm init 
  ** rodar para criar o arquivo json
  depois rodar
  npm install --save-dev @babel/core @babel/cli @babel/preset-react
  ** para instalar o babel para compilar e poder usar a versão nova do react e não ter problemas do navegador não reconhecer

--------------------------------------------------------------------

npx babel main.js -o dist.js
** para compilar o arquivo jsx(react) em um código que o navegador entenda, gerando um arquivo de output (-o) chamado dist.js, para não substituir o arquivo atual.

-------------------------------------------------------------------