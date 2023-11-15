// juego.js
document.addEventListener("DOMContentLoaded", function () {
    var numeroCorrecto = Math.floor(Math.random() * 10) + 1; // Generar un número aleatorio del 1 al 10
    var intentos = 3;

    function jugarJuego() {
        var mensaje;
        var respuestaUsuario = prompt("Ingresa un número del 1 al 10:");

        if (respuestaUsuario !== null) {
            var numeroIngresado = parseInt(respuestaUsuario);

            if (!isNaN(numeroIngresado) && numeroIngresado >= 1 && numeroIngresado <= 10) {
                if (numeroIngresado === numeroCorrecto) {
                    alert("¡Muy bien! ¡Podés entrar a la página!");
                } else {
                    intentos--;

                    if (intentos > 0) {
                        // Proporcionar una pista al usuario
                        var pista = numeroCorrecto > numeroIngresado ? "mayor" : "menor";
                        alert("Incorrecto. El número correcto es " + pista + " que " + numeroIngresado + ". Te quedan " + intentos + " intentos.");
                        jugarJuego(); // Jugar de nuevo
                    } else {
                        mensaje = "Lo siento. El número correcto era " + numeroCorrecto + ". Podés ingresar de todas maneras.";
                        alert(mensaje);
                        console.log(mensaje);
                    }
                }
            } else {
                alert("Por favor, ingresa un número válido del 1 al 10.");
                jugarJuego(); // Jugar de nuevo
            }
        }
    }

    jugarJuego(); // Iniciar el juego al cargar la página
});
