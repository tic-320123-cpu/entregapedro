let lista = [];
let maxNodos = 5;
let iterador = -1;

/* ======= ACTUALIZAR VISTA ======= */
function mostrarLista() {
    const cont = document.getElementById("contenedorLista");
    cont.innerHTML = "";

    lista.forEach((valor, index) => {
        const div = document.createElement("div");
        div.className = "nodo";

        if (index === iterador) div.classList.add("iterador");

        div.textContent = valor;
        cont.appendChild(div);
    });

    document.getElementById("iterActual").textContent =
        "Iterador: " + (iterador >= 0 ? lista[iterador] : "null");
}

/* ======= MENSAJES ======= */
function mensaje(texto, isError = false) {
    let msg = document.getElementById("mensaje");
    msg.style.color = isError ? "red" : "#00ff95";
    msg.textContent = texto;
    setTimeout(() => msg.textContent = "", 3000);
}

/* ======= CAMBIAR LÍMITE ======= */
function cambiarMaximo() {
    const nuevoMax = parseInt(document.getElementById("maxNodos").value);
    if (nuevoMax < lista.length) {
        mensaje("Error: el nuevo tamaño es menor que los nodos existentes", true);
        return;
    }
    maxNodos = nuevoMax;
    mensaje("Máximo actualizado");
}

/* ======= INSERCIONES ======= */
function insertarInicio() {
    let val = document.getElementById("valorNodo").value;
    if (!val) return mensaje("Debes escribir un valor", true);

    if (lista.length >= maxNodos) {
        return mensaje("ERROR: OVERFLOW (lista llena)", true);
    }

    lista.unshift(val);
    iterador = 0;
    mostrarLista();
    mensaje("Insertado al inicio");
}

function insertarFinal() {
    let val = document.getElementById("valorNodo").value;
    if (!val) return mensaje("Debes escribir un valor", true);

    if (lista.length >= maxNodos) {
        return mensaje("ERROR: OVERFLOW (lista llena)", true);
    }

    lista.push(val);
    if (iterador === -1) iterador = 0;
    mostrarLista();
    mensaje("Insertado al final");
}

/* ======= ELIMINACIONES ======= */
function eliminarInicio() {
    if (lista.length === 0)
        return mensaje("ERROR: UNDERFLOW (lista vacía)", true);

    lista.shift();
    if (lista.length === 0) iterador = -1;
    else iterador = 0;
    mostrarLista();
    mensaje("Eliminado inicio");
}

function eliminarFinal() {
    if (lista.length === 0)
        return mensaje("ERROR: UNDERFLOW (lista vacía)", true);

    lista.pop();
    iterador = lista.length - 1;
    mostrarLista();
    mensaje("Eliminado final");
}

/* ======= ITERADORES ======= */
function moverSiguiente() {
    if (lista.length === 0)
        return mensaje("Iterador no disponible", true);

    if (iterador < lista.length - 1) iterador++;
    mostrarLista();
}

function moverAnterior() {
    if (lista.length === 0)
        return mensaje("Iterador no disponible", true);

    if (iterador > 0) iterador--;
    mostrarLista();
}

/* ======= REINICIAR ======= */
function vaciarLista() {
    lista = [];
    iterador = -1;
    mostrarLista();
    mensaje("Lista reiniciada");
}

mostrarLista();
