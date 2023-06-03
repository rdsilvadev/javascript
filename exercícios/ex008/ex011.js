var idade = 112
if (idade < 16) {
    console.log('Não vota')
} else { // ou elseif
    if (idade < 18) {
        console.log('Voto opcional') // não é preciso citar que é entre 16 outra vez porque a condição já foi colocada
    }
    else { // poderia ser elseif se tivesse outra opção lógica
        console.log('Voto obrigatório')
    }
}