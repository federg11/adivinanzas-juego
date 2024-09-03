// generamos un numero al azar
let numeroAzar = Math.floor(Math.random() * 100) + 1;

let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let intento = document.getElementById('intento');

let intentos = 0;

function comprobarNumero() {
    intentos ++;
    intento.textContent = intentos;

    let numeroIngresado = parseInt(numeroEntrada.value);

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = "Por favor, ingresá un numero entre 1 y 100";
        mensaje.style.color = 'red';
        return;
    }

    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = 'Felicidades, ganaste!!!'
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
    }else if(numeroIngresado < numeroAzar){
        mensaje.textContent = 'El número es mayor. Intente de nuevo'
        mensaje.style.color = 'red';
    }else {
        mensaje.textContent = 'El numero es menor. Intente de nuevo'
        mensaje.style.color = 'red'
    }
 }
