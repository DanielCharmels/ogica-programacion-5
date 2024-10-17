var prompt = require("prompt-sync")();
// Paso 1: Generar un número secreto aleatorio entre 1 y 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Para depuración puedes usar esta línea para ver el número secreto en la consola

// Paso 2: Crear un array para almacenar los intentos del usuario
let intentos = [];

// Paso 3: Bucle para solicitar al usuario que adivine el número
let adivinado = false;

while (!adivinado) {
    // Paso 4: Solicitar al usuario que ingrese un número
    let entradaUsuario = prompt("Adivina el número secreto (entre 1 y 100):");

    // Paso 5: Convertir la entrada a número
    let numeroIngresado = Number(entradaUsuario);

    // Paso 6: Validar si la entrada es un número
    if (isNaN(numeroIngresado)) {
        console.log("Por favor, ingresa un número válido.");
    } else {
        // Guardar el número ingresado en la lista de intentos
        intentos.push(numeroIngresado);

        // Paso 7: Verificar si el número es correcto
        if (numeroIngresado === numeroSecreto) {
            console.log("¡Felicidades, adivinaste el número secreto!");
            console.log("Tus intentos fueron: " + intentos.join(", "));
            adivinado = true;  // Romper el bucle si acierta
        } else {
            console.log("Ups, el número secreto es incorrecto. Vuelve a intentarlo.");
        }
    }
}
