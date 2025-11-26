let pila = [];
let maxNodos = 5;
let iterador = -1; // -1 = pila vacía

function cambiarMaxNodos() {
    const nuevoMax = parseInt(document.getElementById("maxNodos").value);

    if (nuevoMax >= 1) {
        maxNodos = nuevoMax;
        mostrarPila();
    }
}

function pushValor() {
    if (pila.length >= maxNodos) {
        alert("ERROR: Overflow - La pila está llena.");
        return;
    }

    const valor = document.getElementById("valorPush").value.trim();
    if (valor === "") {
        alert("Debes ingresar un valor.");
        return;
    }

    pila.push(valor);
    iterador = pila.length - 1; // Iterador al tope

    document.getElementById("valorPush").value = "";
    mostrarPila();
}

function popValor() {
    if (pila.length === 0) {
        alert("ERROR: Underflow - La pila está vacía.");
        return;
    }

    pila.pop();

    if (pila.length === 0) iterador = -1;
    else iterador = pila.length - 1; // nuevo tope

    mostrarPila();
}

function moverIteradorArriba() {
    if (pila.length === 0) return;

    if (iterador < pila.length - 1)
        iterador++;

    mostrarPila();
}

function moverIteradorAbajo() {
    if (pila.length === 0) return;

    if (iterador > 0)
        iterador--;

    mostrarPila();
}

function mostrarPila() {
    const contenedor = document.getElementById("contenedorPila");
    contenedor.innerHTML = "";

    // Se dibuja de abajo hacia arriba gracias a column-reverse en CSS
    for (let i = 0; i < pila.length; i++) {
        let div = document.createElement("div");
        div.className = "nodo";

        if (i === iterador) div.classList.add("iterador");

        div.textContent = pila[i];
        contenedor.appendChild(div);
    }

    document.getElementById("textoIterador").textContent =
        "Iterador: " + (iterador >= 0 ? pila[iterador] : "null");
}

mostrarPila();
