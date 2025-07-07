const form = document.querySelector('#form')

form.addEventListener('submit', function(event) {
    event.preventDefault()
    console.log('Evento prevenido')
    setResultado('Olá Mundo!')
})

function criaP(className) {
    const p = document.createElement('p')
    p.classList.add(className)
    return 
}

function setResultado(msg) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = '';
    resultado.appendChild(p)
}