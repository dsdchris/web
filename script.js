// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Array de degradados
    var gradients = [
        "linear-gradient(to bottom right, #ff9966, #ff5e62)",
        "linear-gradient(to bottom right, #a18cd1, #fbc2eb)",
        "linear-gradient(to bottom right, #fccb90, #d57eeb)",
        // Agrega más degradados según sea necesario
    ];

    // Selecciona un degradado aleatorio
    var randomIndex = Math.floor(Math.random() * gradients.length);
    var randomGradient = gradients[randomIndex];

    // Establece el degradado aleatorio como fondo
    document.body.style.backgroundImage = randomGradient;
});
