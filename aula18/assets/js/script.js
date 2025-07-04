const form = document.querySelector('#form')

form.addEventListener('submit', function(event) {
    event.preventDefault()
    setResultado('Olá Mundo!')
})

function setResultado(msg) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = '';
    con
}