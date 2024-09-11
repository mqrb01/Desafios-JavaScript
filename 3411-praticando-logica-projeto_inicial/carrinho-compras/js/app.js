let totalPreco = 0;
limpar();
function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = parseFloat(produto.split('R$')[1]);
    let quantidade = parseInt(document.getElementById('quantidade').value); 
    if(quantidade <= 0 || nomeProduto == 'Selecione o produto'){
        alert('Valor inválido');
        limpar();
        document.getElementById('quantidade').value = '';
        document.getElementById('produto').value = 'Selecione o produto';
    }else{
        let preco = parseFloat(quantidade * valorProduto);
        let carrinho = document.getElementById('lista-produtos');
        carrinho.innerHTML +=`<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;
        totalPreco = totalPreco + preco;
        let total = document.getElementById('valor-total');
        total.textContent = `R$${totalPreco.toFixed(2)}`;
        document.getElementById('quantidade').value = '';
        document.getElementById('produto').value = 'Selecione o produto';    
    }
}

function limpar() {
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = '';
    let total = document.getElementById('valor-total');
    total.innerHTML = 'R$ 0';
}