// Lógica para el challenge de Amigo Secreto

let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    const lista = document.getElementById('listaAmigos');
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (!nombre) {
        mostrarMensaje('Por favor, ingresa un nombre.', 'error');
        return;
    }
    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(nombre)) {
        mostrarMensaje('El nombre solo puede contener letras y espacios.', 'error');
        return;
    }
    if (amigos.includes(nombre)) {
        mostrarMensaje('Este nombre ya fue agregado.', 'error');
        return;
    }

    amigos.push(nombre);
    input.value = '';
    mostrarLista();
}

function mostrarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((amigo, idx) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        li.className = 'name-item';
        lista.appendChild(li);
    });
}

function mostrarMensaje(mensaje, tipo = 'info') {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li class="${tipo}">${mensaje}</li>`;
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    if (amigos.length < 2) {
        mostrarMensaje('Agrega al menos dos amigos para sortear.', 'error');
        return;
    }
    const idx = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[idx];
    mostrarMensaje(`¡El amigo secreto es <strong>${amigoSorteado}</strong>!`, 'success');
}