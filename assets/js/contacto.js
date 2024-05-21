let nombre =document.getElementById('nombreregi');
let apellido =document.getElementById('apellidoregi');
let email = document.getElementById('emailregi');
let msg = document.getElementById('textarearegi');
let error = document.getElementById('errores');
error.style.color ='red';

function enviarFormulario() {

    let mensajeDeError = [];

    if(nombre.value === null || nombre.value === '') {
        mensajeDeError.push('Ingresa tu nombre');
    }
    if(apellido.value === null || apellido.value === '') {
        mensajeDeError.push('Ingresa tu apellido');
    }
    if(email.value === null || email.value === '') {
        mensajeDeError.push('Ingresa tu email');
    }
    if(msg.value === null || msg.value === '') {
        mensajeDeError.push('Escribe tu mensaje');
    }
    error.innerHTML = mensajeDeError.join(', ');

    return false;
}

