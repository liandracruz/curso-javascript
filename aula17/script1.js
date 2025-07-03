/*
0 - 12 -> Bom dia
12 - 18 -> Boa tarde
18 - 23 -> Boa noite
*/

let hora = 36

if(hora >= 0 && hora <= 12) {
    console.log('Bom dia!')
} else if(hora >= 12 && hora <= 17) {
    console.log('Boa tarde!')
} else if(hora >= 18 && hora <= 23) {
    console.log('Boa noite!')
} else {
    console.log('Olá')
}