# Projeto TypeScript

Este projeto foi desenvolvido utilizando TypeScript para garantir tipagem estática e maior confiabilidade no desenvolvimento de aplicações JavaScript modernas.

## Requisitos

- Node.js instalado ([Download Node.js](https://nodejs.org/))
- Gerenciador de pacotes npm ou yarn

## Configuração do Ambiente

### 1. Inicializar o Node.js (se necessário)
Se o ambiente Node.js ainda não estiver configurado no projeto, inicialize com:
```sh
npm init -y
```
Ou, se preferir utilizar yarn:
```sh
yarn init -y
```

### 2. Instalar o TypeScript
Para instalar o TypeScript globalmente, execute:
```sh
npm install -g typescript
```
Caso queira instalar localmente no projeto:
```sh
npm install --save-dev typescript
```

### 3. Configurar o TypeScript
Gere o arquivo de configuração `tsconfig.json` com:
```sh
tsconfig.json --init
```
Edite o arquivo conforme necessário para configurar as opções do compilador.

### 4. Instalar Dependências
Para dependências de desenvolvimento:
```sh
npm install --save-dev <nome-da-biblioteca>
```

### 5. Compilar o Projeto
Para compilar os arquivos TypeScript para JavaScript:
```sh
npx tsc
```

### 6. Executar o Projeto
Se estiver utilizando Node.js:
```sh
node dist/index.js
```

Caso esteja usando `ts-node` para executar diretamente:
```sh
ts-node src/index.ts
```

## Estrutura do Projeto
```
📁 projeto
 ┣ 📁 src
 ┃ ┣ 📜 index.ts  # Arquivo principal
 ┃ ┗ 📜 outrosArquivos.ts
 ┣ 📁 dist  # Arquivos compilados
 ┣ 📜 package.json  # Configuração do npm
 ┣ 📜 tsconfig.json  # Configuração do TypeScript
 ┗ 📜 README.md  # Documentação do projeto
```

## Scripts Úteis
No arquivo `package.json`, adicione scripts para facilitar o desenvolvimento:
```json
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js",
  "dev": "ts-node src/index.ts"
}
```
Para rodar os scripts:
```sh
npm run build
npm run start
npm run dev
```