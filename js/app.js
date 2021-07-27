//Variables
const btnEnviar = document.querySelector("#enviar")
const formulario = document.querySelector("#enviar-mail");

//Variables para campos
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");

//Listener que escucha cuando carga la pagina
evenListeners();
function evenListeners(){
    //Cuando la app arranca
    document.addEventListener("DOMContentLoaded", iniciarApp);
    // Campos del formulario
    email.addEventListener("blur", validarFormulario);
    asunto.addEventListener("blur", validarFormulario);
    mensaje.addEventListener("blur", validarFormulario);
}

//Funciones
//Funcion que contiene todo lo que se tiene que hacer una vez que cargue el documento por primera vez
function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add("cursor-not-allowed", "opacity-50")//clsaes de tailwind
}

function validarFormulario(e){
    if(e.target.value.length > 0){
        e.target.classList.remove("border", "border-red-500");
        e.target.classList.add("border", "border-green-500");
    }
    else{
        e.target.classList.add("border", "border-red-500"); //clases de tailwind

        mostrarError("Todos los campos son obligatorios");
    }
    if(e.target.type === "email"){
        const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(er.test(e.target.value)){
            mostrarError("Email valido");
        }else{
            e.target.classList.add("border", "border-red-500") //clases de tailwind

            mostrarError("Email no valido");
        }
    }
}

//Muestra un error de "Todos los campos son obligatorios"
function mostrarError(mensaje){
    const mensajeError = document.createElement("p");
    mensajeError.textContent = mensaje;
    mensajeError.classList.add("border", "border-red-500", "background-red-100", "text-red-500",
     "p-3", "mt-5", "text-center", "error");

     const errores = document.querySelectorAll(".error");
     if(errores.length === 0){
        formulario.appendChild(mensajeError);
     }

}