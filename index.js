function encriptar() {
    // Obtener el texto ingresado y los elementos donde se mostrarán los mensajes
    let texto = document.getElementById("texto").value.trim(); // Eliminar espacios adicionales
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");

    // Verificar si el texto no está vacío
    if (texto.length !== 0) {
        // Encriptar el texto
        let textoCifrado = texto
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/a/gi, "ai")
            .replace(/o/gi, "ober")
            .replace(/u/gi, "ufat");

        // Mostrar el texto encriptado
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = textoCifrado;
    } else {
        // Mostrar mensaje de alerta si el texto está vacío
        alert("Por favor, ingresa algún texto para encriptar.");
        tituloMensaje.textContent = "";
        parrafo.textContent = "";
    }
}

function desencriptar() {
    // Obtener el texto ingresado y los elementos donde se mostrarán los mensajes
    let texto = document.getElementById("texto").value.trim(); // Eliminar espacios adicionales
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");

    // Verificar si el texto no está vacío
    if (texto.length !== 0) {
        // Desencriptar el texto
        let textoDesencriptado = texto
            .replace(/enter/gi, "e")
            .replace(/imes/gi, "i")
            .replace(/ai/gi, "a")
            .replace(/ober/gi, "o")
            .replace(/ufat/gi, "u");

        // Mostrar el texto desencriptado
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = textoDesencriptado;
    } else {
        // Mostrar mensaje de alerta si el texto está vacío
        alert("Por favor, ingresa algún texto para desencriptar.");
        tituloMensaje.textContent = "";
        parrafo.textContent = "";
    }
}


