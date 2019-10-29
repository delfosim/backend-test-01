# Instruções

1. Clonar o projeto backend-test-01
2. Entrar no diretorio: cd backend-test-01/teste-1/api
3. criar o arquivo .env na raiz do projeto (igual ao arquivo .env.example)
4. Executar o comando para a instalação das dependências: sudo npm install
5. Executar o comando para a criação do banco de dados e tabelas: adonis migration:run
6. Executar o comando para incluir os registros nas tabelas criadas: adonis seed --files=DatabaseSeeder.js
7. Iniciar o servidor: adonis serve --dev


## Importante

Instalar o adonis de forma global

```bash
sudo npm i -g @adonisjs/cli
```

### Necessário

```js
Node.js >= 8.0.0
npm >= 3.0.0
Foi utilizado o sistema operacional Ubuntu 18
Banco de dados SQLITE3
```
