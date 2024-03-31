let valorTotal = 0;

function pegaProdutoPrecoEscolhido() {
    let descricaoItem = document.getElementById('produto').value; //puxa o item escolhido na lista
    let produto = descricaoItem.split('-')[0].trim();
    let preco = parseFloat(descricaoItem.split('$')[1].trim());

    return [produto, preco]
}

function pegaQuantidadeItens() {
    let quantidade = document.getElementById('quantidade').value;

    return parseInt(quantidade);
}

function adicionar() {
    let itemAdicionado = document.querySelector('.carrinho__produtos__produto');
    itemAdicionado.innerHTML += `<br><span class="texto-azul">${pegaQuantidadeItens()}x</span> ${pegaProdutoPrecoEscolhido()[0]} <span class="texto-azul">R$${pegaProdutoPrecoEscolhido()[1]}</span>`;
    calculcarValorCarrinho();
    mostraValorCarrinho();
    // pegaQuantidadeItens();
}

function limpar() {
    document.getElementById('valor-total').textContent = 'R$0'; //limpa valor 'Total'
    document.getElementById('lista-produtos').textContent = '';  //limpa campo 'Produtos no varrinho'  
}

function calculcarValorCarrinho() {
    valorTotal = valorTotal + (pegaQuantidadeItens() * pegaProdutoPrecoEscolhido()[1])
}

function mostraValorCarrinho() {
    let valorCarrinho = document.getElementById('valor-total');
    valorCarrinho.textContent = `R$${valorTotal}`;
}