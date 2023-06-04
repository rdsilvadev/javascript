var agora = new Date() // ou var hora = new Date().getHours()
var hora = new Date().getHours() // nunca esquecer os () nas funções
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}