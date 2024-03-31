let valorTotal = 0; //armazena o valor total do carrinho.

//função acionada pela função "adicionar(). Puxa todas as descrições do produto selecionado"
function pegaProdutoPrecoEscolhido() {
    let descricaoItem = document.getElementById('produto').value; //puxa o item escolhido na lista
    let produto = descricaoItem.split('-')[0].trim();
    let preco = parseFloat(descricaoItem.split('$')[1].trim());

    return [produto, preco]
}

// função que identifica a quantia de itens recebida no input da página
function pegaQuantidadeItens() {
    let quantidade = document.getElementById('quantidade').value;

    return parseInt(quantidade);
}

//funcao de acao do botao "adicionar"
function adicionar() {
    let itemAdicionado = document.querySelector('.carrinho__produtos__produto');
    //insere a TAG no carrinho com a descricao e quantidade dos produtos escolhidos
    itemAdicionado.innerHTML += `<br><span class="texto-azul">${pegaQuantidadeItens()}x</span> ${pegaProdutoPrecoEscolhido()[0]} <span class="texto-azul">R$${pegaProdutoPrecoEscolhido()[1]}</span>`;
    calculcarValorCarrinho();
    mostraValorCarrinho();
    // pegaQuantidadeItens();
}

//função de ação do botão limpar
function limpar() {
    //zera valor total do carrinho
    valorTotal = 0;
    mostraValorCarrinho();

    //subsitui itens do carrinho por string vazia
    let itemAdicionado = document.querySelector('.carrinho__produtos__produto');
    itemAdicionado.innerHTML = '';
}

//função responsável por calcular o valor total do carrinho
function calculcarValorCarrinho() {
    valorTotal = valorTotal + (pegaQuantidadeItens() * pegaProdutoPrecoEscolhido()[1]) //soma a variavel "valorTotal" com os valores da função "pegaProdutoPrecoEscolhido()"
}

//função que atualiza o valor total do carrinho na página
function mostraValorCarrinho() {
    let valorCarrinho = document.getElementById('valor-total'); //identifica o caminho da classe que mostra o valor do carrinho
    valorCarrinho.textContent = `R$${valorTotal}`;
}

limpar();