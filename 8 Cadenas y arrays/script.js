var frutas = ["manzana", "pera", "naranja", "mora", "mango", "fresa", "sandia", "banana", "piña", "coco"];

function verificarFruta() {
    var frutaIngresada = document.getElementById("frutaInput").value.toLowerCase(); // Convertir a minúsculas
    var resultado = document.getElementById("resultado");
    
    if (frutas.includes(frutaIngresada)) {
        resultado.textContent = frutaIngresada + " está en la lista de frutas.";
    } else {
        resultado.textContent = frutaIngresada + " no está en la lista de frutas.";
    }
}