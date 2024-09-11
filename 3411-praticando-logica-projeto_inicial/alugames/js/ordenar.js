function ordenar(n1, n2, n3) {
    let ordem = [n1, n2, n3].sort((x, y) => x - y);
    console.log(`A ordem dos números é: ${ordem.join(', ')}`)
    
}


// A função Sort é responsável por organizar arrays, porém ela os vê como Strings e precisa de uma função de comparação
ordenar(7, 4, 5);