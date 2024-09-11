function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let numeroAleatorio = [];
    let numero;
    if(de > ate || quantidade > (ate - de + 1)){
        alert('Valores inválidos, por favor digite novamente');
        reiniciar();
    }
    else{
        for(i = 0; i < quantidade; i++){
            //numeroAleatorio[i] = gerarNumeroAleatorio(de, ate);
            numero = gerarNumeroAleatorio(de, ate);
            while(numeroAleatorio.includes(numero)){numero = gerarNumeroAleatorio(de, ate);}
            numeroAleatorio.push(numero);
        }

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numeroAleatorio}</label>`;
        /* for(i = 1; i <= quantidade; i++){
            alert(`O ${i}º número sorteado foi ${numeroAleatorio[i-1]}`);    
        }
        */
        alterarStatusBotao();
    }
}

function gerarNumeroAleatorio(min, max) {
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min);
    return numeroAleatorio;
}


function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}


function reiniciarBotao() {
    let botao = document.getElementById('btn-reiniciar');
    botao.classList.contains('container__botao')
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = ' <label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    reiniciarBotao();
}

sortear();
reiniciar();