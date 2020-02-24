const name = 'Daniel'
const peso = 150;
const altura = 1.86;
const imc = (peso / (altura * altura))

if(imc >= 30) {
    console.log(`${name} você está acima do peso.`)
}else {
    console.log(`${name} você não está acima do peso.`)
}