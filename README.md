# Sistema de Carrinho de Compras

Sistema simples de carrinho de compras feito com HTML, CSS e JavaScript puro. O projeto permite visualizar produtos de um catalogo, pesquisar itens, adicionar produtos ao carrinho, remover produtos, limpar o carrinho e calcular o total automaticamente.

## Funcionalidades

- Listagem de produtos disponiveis no catalogo.
- Campo de pesquisa para filtrar produtos pelo nome.
- Botao para adicionar produtos ao carrinho.
- Exibicao dos produtos adicionados no carrinho.
- Botao para remover itens individualmente.
- Botao para limpar todo o carrinho.
- Calculo automatico do valor total.
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
├── README.md
├── WishList.html
├── WishList.css
└── WishList.js
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

## Funcionamento do Carrinho

Quando um produto e adicionado, o JavaScript pega o nome e o preco do item selecionado. Depois, salva esse produto em um array chamado `carrinho`.

Esse array e salvo no `localStorage`, permitindo que os produtos continuem no carrinho mesmo se a pagina for recarregada.

O total e recalculado sempre que um item e adicionado, removido ou quando o carrinho e limpo.

## Exemplo de Produto no HTML

```html
<li class="produto-item">
    <span class="produto-nome">Smartphone 5G 256GB</span>
    <span class="produto-preco">R$ 2.499,00</span>
    <button class="btn-adicionar" type="button">Adicionar</button>
</li>
```

## Possiveis Melhorias Futuras

- Adicionar quantidade para cada produto.
- Criar botao de finalizar compra.
- Permitir cadastro de novos produtos.
- Mostrar imagem dos produtos.
- Separar os produtos em categorias.
- Adicionar mensagem de confirmacao ao adicionar ou remover itens.

## Autor

Projeto desenvolvido por Lael Costa.
