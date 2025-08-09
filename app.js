// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo () {
    let nombres = document.getElementById('amigo').value;

    if (nombres === "") {
        alert ("Por favor ingrese un nombre");
    } else {
        amigos.push(nombres);
        actualizarLista();
        limpiarCaja();
        
    }
}

function actualizarLista () {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        listaHTML.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function limpiarCaja (){
    document.querySelector('#amigo').value = "";
}

function sortearAmigo () {
    if (amigos.length === 0) {
        alert ("No hay nombres para sortear");
        return;
    } else {
        let indice = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indice];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `Tu amigo secreto es: ${amigoSorteado}!`;
    }
}
    