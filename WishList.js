const moedaBrasil = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function converterPreco(textoPreco) {
    return Number(
        textoPreco
            .replace('R$', '')
            .replace(/\./g, '')
            .replace(',', '.')
            .trim()
    );
}

function adicionarProduto(nome, preco) {
    carrinho.push({ nome, preco });
    salvarCarrinho();
    exibirCarrinho();
}

function removerProduto(indice) {
    carrinho.splice(indice, 1);
    salvarCarrinho();
    exibirCarrinho();
}

function limparCarrinho() {
    carrinho = [];
    salvarCarrinho();
    exibirCarrinho();
}

function exibirCarrinho() {
    const listaCarrinho = document.getElementById('lista-carrinho');
    const mensagemCarrinho = document.getElementById('mensagem-carrinho');
    const totalValor = document.getElementById('total-valor');

    listaCarrinho.innerHTML = '';

    let total = 0;

    carrinho.forEach((produto, indice) => {
        const item = document.createElement('li');
        item.className = 'item-carrinho';

        const nome = document.createElement('span');
        nome.className = 'item-nome';
        nome.textContent = produto.nome;

        const preco = document.createElement('span');
        preco.className = 'item-preco';
        preco.textContent = moedaBrasil.format(produto.preco);

        const botaoRemover = document.createElement('button');
        botaoRemover.className = 'btn-remover';
        botaoRemover.type = 'button';
        botaoRemover.textContent = 'Remover';
        botaoRemover.addEventListener('click', () => removerProduto(indice));

        item.append(nome, preco, botaoRemover);
        listaCarrinho.appendChild(item);

        total += produto.preco;
    });

    totalValor.textContent = moedaBrasil.format(total);
    mensagemCarrinho.classList.toggle('visivel', carrinho.length === 0);
}

function pesquisarProdutos() {
    const termo = document.getElementById('nome-item').value.toLowerCase().trim();
    const produtos = document.querySelectorAll('.produto-item');
    const mensagemCatalogo = document.getElementById('mensagem-catalogo');
    let encontrados = 0;

    produtos.forEach((produto) => {
        const nome = produto.querySelector('.produto-nome').textContent.toLowerCase();
        const combina = nome.includes(termo);

        produto.classList.toggle('escondido', !combina);

        if (combina) {
            encontrados += 1;
        }
    });

    mensagemCatalogo.classList.toggle('visivel', encontrados === 0);
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn-adicionar').forEach((button) => {
        button.addEventListener('click', () => {
            const produtoItem = button.closest('.produto-item');
            const nome = produtoItem.querySelector('.produto-nome').textContent;
            const preco = converterPreco(produtoItem.querySelector('.produto-preco').textContent);

            adicionarProduto(nome, preco);
        });
    });

    document.getElementById('nome-item').addEventListener('input', pesquisarProdutos);
    document.getElementById('btn-limpar').addEventListener('click', limparCarrinho);

    exibirCarrinho();
    pesquisarProdutos();
});
