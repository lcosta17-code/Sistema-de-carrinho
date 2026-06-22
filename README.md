# Sistema de Carrinho de Compras

Sistema simples de carrinho de compras feito com HTML, CSS e JavaScript puro. O projeto permite visualizar produtos de um catalogo, pesquisar itens, adicionar produtos ao carrinho, remover produtos, limpar o carrinho, aplicar cupom de desconto e calcular o total automaticamente.

## Funcionalidades

- Listagem de produtos disponiveis no catalogo.
- Campo de pesquisa para filtrar produtos pelo nome.
- Botao para adicionar produtos ao carrinho.
- Exibicao dos produtos adicionados no carrinho.
- Botao para remover itens individualmente.
- Botao para limpar todo o carrinho.
- Calculo automatico do valor total.
- Cupom de desconto com codigo `DESCONTO10`.
- Salvamento dos itens no `localStorage` do navegador.
- Layout responsivo para computador e celular.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- LocalStorage

## Estrutura do Projeto

```text
Sistema-de-carrinho/
|-- README.md
|-- WishList.html
|-- WishList.css
`-- WishList.js
```

## Descricao dos Arquivos

### `WishList.html`

Arquivo principal da pagina. Ele contem a estrutura do sistema, incluindo:

- Menu superior.
- Secao de catalogo.
- Campo de pesquisa.
- Lista de produtos.
- Secao do carrinho.
- Area de total da compra.
- Campo para digitar o codigo de desconto.
- Botao para aplicar o desconto.

### `WishList.css`

Arquivo responsavel pela aparencia da pagina. Ele define:

- Layout geral.
- Cores.
- Espacamentos.
- Estilo dos botoes.
- Estilo da lista de produtos.
- Estilo do carrinho.
- Ajustes para telas menores.

### `WishList.js`

Arquivo responsavel pelo funcionamento do carrinho. Ele controla:

- Adicao de produtos.
- Remocao de produtos.
- Limpeza do carrinho.
- Pesquisa de produtos.
- Calculo do total.
- Aplicacao do cupom de desconto.
- Salvamento e leitura dos dados no `localStorage`.

## Como Executar

1. Baixe ou clone este repositorio.

```bash
git clone https://github.com/lcosta17-code/Sistema-de-carrinho.git
```

2. Entre na pasta do projeto.

```bash
cd Sistema-de-carrinho
```

3. Abra o arquivo `WishList.html` no navegador.

Nao e necessario instalar dependencias, pois o projeto usa apenas HTML, CSS e JavaScript puro.

## Como Usar

1. Abra a pagina no navegador.
2. Veja os produtos disponiveis no catalogo.
3. Use o campo de pesquisa para encontrar um produto.
4. Clique em `Adicionar` para colocar um produto no carrinho.
5. Veja o total sendo atualizado automaticamente.
6. Clique em `Remover` para excluir um item do carrinho.
7. Clique em `Limpar` para esvaziar todo o carrinho.
8. Digite `DESCONTO10` no campo de cupom.
9. Clique em `Aplicar` para receber 10% de desconto no total.

## Funcionamento do Carrinho

Quando um produto e adicionado, o JavaScript pega o nome e o preco do item selecionado. Depois, salva esse produto em um array chamado `carrinho`.

Esse array e salvo no `localStorage`, permitindo que os produtos continuem no carrinho mesmo se a pagina for recarregada.

O total e recalculado sempre que um item e adicionado, removido ou quando o carrinho e limpo.

## Funcionamento do Desconto

O sistema possui um cupom de desconto fixo:

```text
DESCONTO10
```

Quando esse codigo e digitado no campo de desconto e o usuario clica no botao de aplicar, o JavaScript reduz 10% do valor total exibido no carrinho.

Se o codigo estiver incorreto, o sistema exibe uma mensagem informando que o codigo de desconto e invalido.

## Exemplo de Produto no HTML

```html
<li class="produto-item">
