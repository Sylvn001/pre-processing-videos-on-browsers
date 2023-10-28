# JSExpertHub Reimaging Video Upload - Semana JS Expert 8.0

## Preview

<img width=100% src="./demo.gif">

## Pre-reqs

- Este projeto foi criado usando Node.js v18.17.0
- O ideal é que você use o projeto em ambiente Unix (Linux). Se você estiver no Windows, é recomendado que use o [Windows Subsystem Linux](https://www.omgubuntu.co.uk/how-to-install-wsl2-on-windows-10) pois nas aulas são mostrados comandos Linux que possam não existir no Windows.

## Running

- Execute `npm ci` na pasta que contém o arquivo `package.json` para restaurar os pacotes
- Execute `npm start` e em seguida vá para o seu navegador em [http://localhost:3000](http://localhost:3000) para visualizar a página acima

### FAQ

- browser-sync está lançando erros no Windows e nunca inicializa:
  - Solução: Trocar o browser-sync pelo http-server.
    1. instale o **http-server** com `npm i -D http-server`
    2. no package.json apague todo o comando do `browser-sync` e substitua por `npx http-server .`
    3. agora o projeto vai estar executando na :8080 então vá no navegador e tente acessar o http://localhost:8080/
       A unica coisa, é que o projeto não vai reiniciar quando voce alterar algum código, vai precisar dar um F5 na página toda vez que alterar algo

# Credits

Projeto de estudo feito na semana de JS.Expert 08 do Erick Wendel.
