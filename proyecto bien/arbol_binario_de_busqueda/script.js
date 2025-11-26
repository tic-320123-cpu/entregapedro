// =====================
//    NODO DEL BST
// =====================
class Nodo {
    constructor(valor, x, y) {
        this.valor = valor;
        this.left = null;
        this.right = null;
        this.x = x;
        this.y = y;
    }
}

let root = null;
let nodeCount = 0;
let maxNodes = 10;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const iteradorTexto = document.getElementById("iterador");

// =================================================
// =============== INSERTAR NODO =====================
// =================================================
function insertar() {
    let valor = parseInt(document.getElementById("valor").value);
    maxNodes = parseInt(document.getElementById("maxNodos").value);

    if (isNaN(valor)) return;

    if (nodeCount >= maxNodes) {
        alert("Overflow: Se alcanzó el máximo de nodos");
        return;
    }

    root = insertarBST(root, valor, canvas.width / 2, 50, 200);
    nodeCount++;

    dibujarArbol();
}

// Inserción recursiva con cálculo automático de posiciones
function insertarBST(node, valor, x, y, offset) {
    if (!node) return new Nodo(valor, x, y);

    if (valor < node.valor)
        node.left = insertarBST(node.left, valor, x - offset, y + 70, offset / 2);
    else
        node.right = insertarBST(node.right, valor, x + offset, y + 70, offset / 2);

    return node;
}

// =================================================
// =============== ELIMINAR NODO =====================
// =================================================
function eliminarNodo() {
    let valor = parseInt(document.getElementById("valor").value);
    if (isNaN(valor)) return;

    if (!root) {
        alert("Underflow: el árbol está vacío");
        return;
    }

    root = deleteBST(root, valor);
    nodeCount--;

    dibujarArbol();
}

function deleteBST(node, valor) {
    if (!node) return null;

    if (valor < node.valor) {
        node.left = deleteBST(node.left, valor);
        return node;
    }
    else if (valor > node.valor) {
        node.right = deleteBST(node.right, valor);
        return node;
    }
    else {
        // 1. Nodo hoja
        if (!node.left && !node.right) return null;

        // 2. Un solo hijo
        if (!node.left) return node.right;
        if (!node.right) return node.left;

        // 3. Dos hijos
        let sucesor = encontrarMin(node.right);
        node.valor = sucesor.valor;
        node.right = deleteBST(node.right, sucesor.valor);
        return node;
    }
}

function encontrarMin(n) {
    while (n.left) n = n.left;
    return n;
}

// =================================================
// =============== RECORRIDOS ======================
// =================================================
function recorrido(tipo) {
    let lista = [];

    if (tipo === "pre") preorden(root, lista);
    if (tipo === "in") inorden(root, lista);
    if (tipo === "post") postorden(root, lista);

    iterador(lista);
}

function preorden(n, lista) {
    if (!n) return;
    lista.push(n.valor);
    preorden(n.left, lista);
    preorden(n.right, lista);
}

function inorden(n, lista) {
    if (!n) return;
    inorden(n.left, lista);
    lista.push(n.valor);
    inorden(n.right, lista);
}

function postorden(n, lista) {
    if (!n) return;
    postorden(n.left, lista);
    postorden(n.right, lista);
    lista.push(n.valor);
}

// =================================================
// =============== ITERADOR ========================
// =================================================
async function iterador(lista) {
    for (let v of lista) {
        iteradorTexto.textContent = v;
        await new Promise(r => setTimeout(r, 600));
    }
    iteradorTexto.textContent = "Finalizado";
}

// =================================================
// =============== DIBUJAR ÁRBOL ====================
// =================================================
function dibujarArbol() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (root) dibujarNodo(root);
}

function dibujarNodo(nodo) {
    if (!nodo) return;

    // Líneas antes de nodos
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;

    if (nodo.left) {
        ctx.beginPath();
        ctx.moveTo(nodo.x, nodo.y);
        ctx.lineTo(nodo.left.x, nodo.left.y);
        ctx.stroke();
    }

    if (nodo.right) {
        ctx.beginPath();
        ctx.moveTo(nodo.x, nodo.y);
        ctx.lineTo(nodo.right.x, nodo.right.y);
        ctx.stroke();
    }

    // Dibujo del nodo
    ctx.fillStyle = "#0ff";
    ctx.beginPath();
    ctx.arc(nodo.x, nodo.y, 25, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.font = "16px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(nodo.valor, nodo.x, nodo.y);

    // Recursivo
    dibujarNodo(nodo.left);
    dibujarNodo(nodo.right);
}
