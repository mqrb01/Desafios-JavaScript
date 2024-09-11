function palindromo(palavra) {
    let reverso = palavra.split('').reverse().join('');
    //A função Split separa as letras da palavra em um array com todas as letras 
    //A função reverse inverte a direção desse array
    //Por fim a função join junta novamente as letras da palavra
    if(palavra == reverso){
        console.log(`A palavra ${palavra} é um palindromo`);
    }else{
        console.log(`A palavra ${palavra} não é um palindromo`);
    }
}

palindromo('arara');