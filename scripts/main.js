document.querySelector('#boton-saludar').onclick = function() {saludar()};

function saludar() {
    alert('Hola como estas');
}

document.querySelector('#boton-nuevo').onclick = function() {cambiarMensaje()};

function cambiarMensaje() {
    let mensajePrincipal = document.querySelector('#mensaje-principal');
    mensajePrincipal.textContent = 'Amlo es genial';
}