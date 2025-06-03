const nome = 'Liandra Luiza'
const sobrenome = 'da Cruz'
const idade = 23
const peso = 68
const altura = 1.69

let imc = peso / (altura * altura)
console.log(imc)
let anoNascimento = 2025 - 23
console.log(anoNascimento)

console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento} e tem ${idade} pesa ${peso} kg e tem ${altura} de altura. Portanto seu IMC é ${imc}.`)