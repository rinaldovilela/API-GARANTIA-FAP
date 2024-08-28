my-node-backend/
│
├── config/
│   ├── default.json
│   └── production.json
│
├── controllers/
│   └── userController.ts
│
├── database/
│   ├── migrations/
│   ├── seeds/
│   └── index.ts
│
├── middleware/
│   ├── authMiddleware.ts
│   └── errorHandler.ts
│
├── models/
│   └── userModel.ts
│
├── routes/
│   └── userRoutes.ts
│
├── services/
│   └── userService.ts
│
├── utils/
│   ├── logger.ts
│   └── validation.ts
│
├── views/
│   └── userView.ts
│
├── interfaces/
│   ├── userInterface.ts
│   └── ... (outros arquivos de interface, se necessário)
│
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
├── README.md
└── src/
    ├── index.ts
    └── ... (outros arquivos TypeScript, se necessário)



-------------------------------------------------------------------------------------------------------------------



GIT IGNORE : 


Descrição dos Itens Ignorados
node_modules/: Diretório onde o npm instala as dependências do projeto. Não deve ser versionado, pois pode ser regenerado a partir do package.json.
dist/ e build/: Diretórios onde os arquivos transpilados do TypeScript são gerados. Eles não devem ser versionados, pois são artefatos de build.
*.log: Arquivos de log que podem ser gerados durante a execução do aplicativo.
.vscode/ e .idea/: Configurações específicas de IDEs, como VSCode e IntelliJ, que não são relevantes para o versionamento.
.env: Arquivo de variáveis de ambiente que pode conter informações sensíveis.
coverage/ e *.lcov: Diretórios e arquivos gerados por ferramentas de cobertura de código.
.DS_Store e Thumbs.db: Arquivos de sistema gerados por macOS e Windows, respectivamente.
*.tgz, *.gz, *.zip: Arquivos de build compactados que não precisam ser versionados.
*.tmp, *.bak, *.swp, *.swo: Arquivos temporários e de backup que não devem ser versionados.
*.pid e *.seed: Arquivos gerados por ferramentas de CI/CD e scripts.
*.tsbuildinfo: Arquivo gerado pelo TypeScript para armazenar informações sobre o estado do build.


-------------------------------------------------------------------------------------------------------------------



TECNOLOGIAS E BIBLIOTECAS UTILIZADAS : 

Linguagem : Typescript

instalado  : .ENV

instalado : express / node.js


-------------------------------------------------------------------------------------------------------------------

DOCUMENTAÇÕES GUIA : 

API WHATSAPP : https://blog.mocsolucoes.com.br/desenvolvimento-web/nodejs/envio-recebimento-mensagens-whatsapp-nodejs-typescript-api-facebook/#google_vignette


-------------------------------------------------------------------------------------------------------------------

EXTENSÕES : 

ESLINT

ICONS (Vs Code)