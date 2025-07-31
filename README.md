# 🧪 Projeto Playwright - Testes Automatizados (Yahoo + UOL)

Este repositório contém dois testes automatizados desenvolvidos com [Playwright](https://playwright.dev/) para validação de conteúdo em sites públicos.

---

## ✅ Testes Implementados

### 1. 🔍 Busca no Yahoo

- Acessa o site de busca do Yahoo
- Realiza uma pesquisa por: `Pacto Soluções`
- Verifica se há resultados retornados

### 2. 📜 Termos de Uso da UOL

- Acessa **diretamente** a página de Termos da UOL:  
  `https://noticias.uol.com.br/regras/termos-de-uso/`
- Valida se a página contém o trecho:

  > "tais como a possibilidade de atualização desse documento a qualquer momento"

---

## 📂 Estrutura do Projeto

```
playwright-uol-yahoo-test/
│
├── tests/
│   ├── uol-termos.spec.js       # Teste de validação dos termos da UOL
│   └── yahoo-busca.spec.js      # Teste de busca por "Pacto Soluções"
│
├── package.json                 # Dependências do projeto
├── playwright.config.js         # Configurações do Playwright
└── README.md                    # Este arquivo
```

---

## ▶️ Como Executar

### 1. Instalar dependências

```bash
npm install
```

### 2. Executar os testes

```bash
npx playwright test
```

Os testes rodam em paralelo nos navegadores Chromium, Firefox e WebKit.

---

## 🧪 Detalhes Técnicos

- Utiliza `Playwright Test Runner`
- Cada teste está em um arquivo separado
- Testes com timeout configurado e controle de contexto do navegador
- Não utiliza prints automáticos para evitar erros de dimensão
- Timeout global ajustado para maior tolerância em conexões lentas

---

## 🧑‍💻 Autor

Projeto desenvolvido como parte de um **teste técnico para a Pacto Soluções**.

---

## 🛠️ Tecnologias

- Node.js
- Playwright
- JavaScript
