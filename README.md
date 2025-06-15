# Conversor de Moedas 💸

Este projeto foi desenvolvido durante meus estudos na formação Full-Stack da Rocketseat, onde estou aproveitando seis dias gratuitos de acesso. O HTML e o CSS já estavam prontos no repositório original, mas toda a lógica em JavaScript foi implementada por mim a partir das aulas. Achei que seria mais complicado, mas a didática do professor facilitou demais! 

## 🌟 O que ele faz?

Você insere um valor em Reais e escolhe uma moeda estrangeira:  
- 💵 Dólar Americano (USD)  
- 💶 Euro (EUR)  
- 💷 Libra Esterlina (GBP)  

O resultado aparece convertido de forma simples e automática, com visual limpo e escuro.

<img src = "/img/preview.jpg">

## 🧠 linguagem usada:
- JavaScript 

### 💡 Lógica e recursos interessantes:
- Substituição de qualquer caractere que não seja número no input (`/\D+/g`)
- Função de formatação para Real usando `.toLocaleString("pt-BR")`
- Condições usando `switch` para identificar a moeda selecionada
- Validação para não converter valores inválidos
- Uso de `try/catch` para prevenir erros inesperados
- Exibição dinâmica do resultado no `<footer>`


## 🌐 Acesse o projeto online:
[🔗 elliedevzone.github.io/conversor-de-moedas](https://elliedevzone.github.io/conversor-de-moedas) 

Figma: https://www.figma.com/community/file/1360315742205904074

💜 Projeto feito com foco no aprendizado e evolução.  
Mais um passo rumo ao front-end profissional que quero ser!
