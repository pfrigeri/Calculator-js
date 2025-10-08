# 🧮 Calculadora com JavaScript

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

Uma calculadora funcional construída com JavaScript puro, HTML e CSS, capaz de realizar operações aritméticas básicas com uma interface interativa.

Este projeto é o desafio final do módulo "Foundations" do [The Odin Project](https://www.theodinproject.com/), projetado para consolidar todo o conhecimento de lógica de programação e manipulação do DOM.

**[➡️ Link para a versão ao vivo (em breve)](https://pfrigeri.github.io/Calculator-js/)**

---

## ✨ Funcionalidades Atuais

* **Operações Aritméticas Básicas:** Suporte para soma, subtração, multiplicação e divisão.
* **Display Interativo:** A tela é populada dinamicamente com os números e operadores clicados pelo usuário.
* **Encadeamento de Operações:** Permite realizar cálculos sequenciais (ex: `10 + 5 - 3`).
* **Botão 'Clear':** Funcionalidade para resetar completamente o estado da calculadora.

## 🚧 Próximos Passos (To-Do)

* [ ] Implementar suporte para teclado.
* [ ] Adicionar funcionalidade de 'Backspace' para corrigir o último dígito.
* [ ] Melhorar o tratamento de números decimais.

## 🧠 Aprendizados Principais

Este projeto foi um exercício profundo em **gerenciamento de estado** e lógica de programação. Os principais desafios e aprendizados foram:

* **Gerenciamento de Estado:** Controlar as variáveis `number1`, `operator` e `displayValue` para lidar com o fluxo de um cálculo em múltiplos passos foi o maior desafio. A lógica precisou ser cuidadosamente estruturada para saber quando capturar o primeiro número, o operador e o segundo número.
* **Lógica de Eventos:** Estruturar os `event listeners` para diferenciar cliques em números, operadores e o botão de igual, direcionando cada ação para a função correta.
* **Manipulação do DOM:** Utilizar `.textContent` para atualizar a tela da calculadora de forma reativa, refletindo o estado atual da operação.
* **Refatoração:** A necessidade de reorganizar o código várias vezes para que a lógica se tornasse mais clara e menos propensa a bugs, especialmente ao implementar o encadeamento de operações.

## 🛠️ Tecnologias Utilizadas

* HTML5
* CSS3 (Flexbox para o layout)
* JavaScript (Vanilla JS)
