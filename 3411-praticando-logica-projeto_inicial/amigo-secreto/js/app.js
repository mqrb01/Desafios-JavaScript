let listaAmigos = [];
function adicionar() {
    let amigo = document.getElementById('nome-amigo').value;
    let amigosIncluidos = document.getElementById('lista-amigos');
    if(amigo == ''){alert('Nome vazio'); return;}
    if(listaAmigos.includes(amigo)){
        alert('Nome já adicionado!');
        return;
    }
    listaAmigos.push(amigo);
    if(amigosIncluidos.textContent == ''){
        amigosIncluidos.textContent = amigo;
    }
    else{
        amigosIncluidos.textContent = amigosIncluidos.textContent + ', ' + amigo;
    }
    document.getElementById('nome-amigo').value = '';
}


function sortear() {
    if(listaAmigos.length <= 1){alert('Número de participantes insuficiente');return;}
        embaralha(listaAmigos);
        let listaSorteio = document.getElementById('lista-sorteio');
        for(i = 0; i < listaAmigos.length; i++){
            if(i+1 >= listaAmigos.length){
                listaSorteio.innerHTML = listaSorteio.innerHTML + listaAmigos[i] + '-->' + listaAmigos[0] + '<br>';
            }
            else{
                listaSorteio.innerHTML = listaSorteio.innerHTML + listaAmigos[i] + '-->' + listaAmigos[i+1] + '<br>';
            }
    }
    document.querySelector('.button.secondary').disabled = true;
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    listaAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    //Também funcionan com o textContent
}

