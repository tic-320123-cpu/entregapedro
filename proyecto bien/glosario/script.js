const glosarioData = {

    "A": {
        "Algoritmo": "Conjunto de pasos lógicos y ordenados que permiten resolver un problema.",
        "Apuntador (*)": "Variable que almacena la dirección de memoria de otro dato.",
        "Arreglo (Array)": "Estructura que almacena elementos del mismo tipo en posiciones contiguas."
    },

    "B": {
        "Bloques de construcción dinámicos": "Componentes creados durante la ejecución, como nodos.",
        "Bloques de construcción estáticos": "Elementos de tamaño fijo, como los arreglos.",
        "Búsqueda": "Proceso de localizar un elemento dentro de una estructura."
    },

    "C": {
        "Cola (Queue)": "Estructura FIFO donde el primero en entrar es el primero en salir.",
        "Constructor": "Función que inicializa un objeto al ser creado.",
        "Corchetes { }": "Símbolos que agrupan instrucciones o bloques de código."
    },

    "D": {
        "Declaración": "Define una variable indicando tipo y nombre.",
        "Desbordamiento (Overflow)": "Error al almacenar más datos de los permitidos.",
        "Double": "Tipo numérico decimal de doble precisión."
    },

    "E": {
        "Estructura de datos": "Forma organizada de almacenar y manipular información.",
        "Estructura dinámica": "Puede cambiar de tamaño durante la ejecución.",
        "Estructura estática": "Tamaño fijo, como los arreglos."
    },

    "F": {
        "Float": "Tipo numérico decimal de precisión simple."
    },

    "I": {
        "Índice": "Posición de un elemento dentro de un arreglo.",
        "Int": "Tipo de dato entero.",
        "Iterador": "Elemento que permite recorrer una estructura secuencialmente."
    },

    "L": {
        "Lista": "Estructura dinámica que almacena elementos de forma secuencial.",
        "Long": "Entero largo.",
        "Long double": "Número decimal de gran precisión.",
        "Long int": "Entero largo para valores grandes."
    },

    "M": {
        "Matriz": "Arreglo bidimensional (filas y columnas)."
    },

    "N": {
        "Nodo": "Unidad básica con datos y enlaces hacia otros nodos."
    },

    "P": {
        "Palabra reservada": "Palabra del lenguaje que no puede usarse como variable.",
        "Pila (Stack)": "Estructura LIFO donde el último en entrar es el primero en salir.",
        "Recursividad": "Función que se llama a sí misma directa o indirectamente."
    },

    "S": {
        "Semántica": "Significado de una instrucción.",
        "Short": "Entero corto.",
        "Sintaxis": "Reglas de escritura del lenguaje.",
        "Subíndice": "Posición en estructuras multidimensionales.",
        "Subdesbordamiento (Underflow)": "Error al extraer de una estructura vacía."
    },

    "T": {
        "Tamaño [ ]": "Cantidad de elementos en un arreglo.",
        "Tipo abstracto de dato (TDA)": "Modelo matemático que define operaciones.",
        "Tipo de dato": "Clasifica los valores que puede almacenar una variable.",
        "Tipos de datos primitivos": "char, short, int, long, float, double...",
        "Transformación de datos": "Modificar datos a otro formato."
    },

    "U": {
        "Unidades temáticas": "Bloques de contenido relacionados."
    }
};


// === GENERAR GLOSARIO ===
const contenedor = document.getElementById("glosario");

Object.keys(glosarioData).forEach(letra => {

    // --- Crear sección de letra ---
    let letraTitulo = document.createElement("div");
    letraTitulo.className = "seccion-letra";
    letraTitulo.textContent = letra;

    contenedor.appendChild(letraTitulo);

    // --- Agregar términos ---
    let palabras = glosarioData[letra];

    Object.keys(palabras).forEach(palabra => {

        let item = document.createElement("div");
        item.className = "item";

        let titulo = document.createElement("div");
        titulo.className = "titulo";
        titulo.textContent = palabra;

        let definicion = document.createElement("div");
        definicion.className = "definicion";
        definicion.textContent = palabras[palabra];

        item.addEventListener("click", () => {
            definicion.style.display =
                definicion.style.display === "block" ? "none" : "block";
        });

        item.appendChild(titulo);
        item.appendChild(definicion);
        contenedor.appendChild(item);
    });

});
