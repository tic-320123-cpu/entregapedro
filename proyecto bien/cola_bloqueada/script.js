const MAX_SIZE = 5;
let queue = new Array(MAX_SIZE).fill(null);
let front = 0;
let rear = -1;
let count = 0;

const queueDiv = document.getElementById("queue");
const logDiv = document.getElementById("log");

function updateQueue() {
  queueDiv.innerHTML = "";
  for (let i = 0; i < MAX_SIZE; i++) {
    const node = document.createElement("div");
    node.className = "node";
    if (queue[i] !== null) node.classList.add("used");
    if (i === front && queue[i] !== null) node.classList.add("front");
    if (i === rear && queue[i] !== null) node.classList.add("rear");
    node.textContent = queue[i] !== null ? queue[i] : "";
    queueDiv.appendChild(node);
  }
}

function log(message) {
  const p = document.createElement("p");
  p.textContent = message;
  logDiv.appendChild(p);
  logDiv.scrollTop = logDiv.scrollHeight;
}

function enqueue() {
  const valor = document.getElementById("valor").value;
  if (valor === "") return log("⚠️ Ingresa un valor antes de encolar.");

  if (rear >= MAX_SIZE - 1) {
    log("❌ Error: Desbordamiento. La cola está llena (no hay más espacio físico).");
    return;
  }

  rear++;
  queue[rear] = valor;
  count++;
  log(`✅ Encolado: ${valor}`);
  updateQueue();
}

function dequeue() {
  if (count === 0) {
    log("❌ Error: Subdesbordamiento. La cola está vacía.");
    return;
  }

  const eliminado = queue[front];
  queue[front] = "—"; // marca espacio como ocupado pero no reutilizable
  front++;
  count--;
  log(`🗑️ Desencolado: ${eliminado} (espacio ocupado)`);
  updateQueue();
}

function reset() {
  queue = new Array(MAX_SIZE).fill(null);
  front = 0;
  rear = -1;
  count = 0;
  queueDiv.innerHTML = "";
  logDiv.innerHTML = "";
  log("🔄 Cola reiniciada.");
  updateQueue();
}

document.getElementById("enqueue").addEventListener("click", enqueue);
document.getElementById("dequeue").addEventListener("click", dequeue);
document.getElementById("reset").addEventListener("click", reset);

updateQueue();
