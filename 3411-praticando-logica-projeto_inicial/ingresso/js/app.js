function comprar() {
    let tipoCadeira = document.getElementById('tipo-ingresso').value;
    let quantidadeIngresso = parseInt(document.getElementById('qtd').value);
    if(quantidadeIngresso <= 0 || isNaN(quantidadeIngresso)){
        alert('Quantidade informada inválida');
    }    
    else{comprarTipo(tipoCadeira, quantidadeIngresso);}
}

function comprarTipo(tipoCadeira, qtd) {
    let quantidadePeloTipo;
    if(tipoCadeira == 'inferior'){
        quantidadePeloTipo = parseInt(document.getElementById('qtd-inferior').textContent);
        if(qtd > quantidadePeloTipo){alert('Quantidade insufisciente')}
        else{
            quantidadePeloTipo = quantidadePeloTipo - qtd;
            document.getElementById('qtd-inferior').textContent = quantidadePeloTipo; 
            alert('Compra realizada com sucesso!'); 
            document.getElementById('qtd').value = "";
        }
    }else if(tipoCadeira == 'superior'){
        quantidadePeloTipo = parseInt(document.getElementById('qtd-superior').textContent);
        if(qtd > quantidadePeloTipo){alert('Quantidade insufisciente')}
        else{
            quantidadePeloTipo = quantidadePeloTipo - qtd;
            document.getElementById('qtd-superior').textContent = quantidadePeloTipo; 
            alert('Compra realizada com sucesso!'); 
            document.getElementById('qtd').value = "";
        }
    }else if(tipoCadeira == 'pista'){
        quantidadePeloTipo = parseInt(document.getElementById('qtd-pista').textContent);
        if(qtd > quantidadePeloTipo){alert('Quantidade insufisciente')}
        else{
            quantidadePeloTipo = quantidadePeloTipo - qtd;
            document.getElementById('qtd-pista').textContent = quantidadePeloTipo;
            alert('Compra realizada com sucesso!'); 
            document.getElementById('qtd').value = "";
        }
    }
}
