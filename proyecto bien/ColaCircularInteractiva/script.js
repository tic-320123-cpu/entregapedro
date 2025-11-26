const MAX_SIZE = 5;
let queue = new Array(MAX_SIZE);
let front = -1;
let rear = -1;

const queueDiv = document.getElementById("queue");
const logDiv = document.getElementById("log");

function updateQueue() {
  queueDiv.innerHTML = "";
  for (let i = 0; i < MAX_SIZE; i++) {
    const node = document.createElement("div");
    node.className = "node";
    if (i === front && front !== -1) node.classList.add("front");
    if (i === rear && rear !== -1) node.classList.add("rear");
    node.textContent = queue[i] !== undefined ? queue[i] : "";
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

  // Caso 1: cola llena (overflow)
  if ((front === 0 && rear === MAX_SIZE - 1) || (rear + 1) % MAX_SIZE === front) {
    log("❌ Error: Desbordamiento. La cola circular está llena.");
    return;
  }

  // Caso 2: primer elemento
  if (front === -1) front = 0;

  // Mover rear circularmente
  rear = (rear + 1) % MAX_SIZE;
  queue[rear] = valor;

  log(`✅ Encolado: ${valor}`);
  updateQueue();
}

function dequeue() {
  // Caso: cola vacía
  if (front === -1) {
    log("❌ Error: Subdesbordamiento. La cola circular está vacía.");
    return;
  }

  const eliminado = queue[front];
  queue[front] = undefined;

  // Si solo quedaba un elemento
  if (front === rear) {
    front = -1;
    rear = -1;
  } else {
    front = (front + 1) % MAX_SIZE;
  }

  log(`🗑️ Desencolado: ${eliminado}`);
  updateQueue();
}

function reset() {
  queue = new Array(MAX_SIZE);
  front = -1;
  rear = -1;
  queueDiv.innerHTML = "";
  logDiv.innerHTML = "";
  log("🔄 Cola circular reiniciada.");
}

document.getElementById("enqueue").addEventListener("click", enqueue);
document.getElementById("dequeue").addEventListener("click", dequeue);
document.getElementById("reset").addEventListener("click", reset);

updateQueue();
