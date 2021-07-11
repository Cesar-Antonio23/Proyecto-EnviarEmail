//Variables
const btnEnviar = document.querySelector("#enviar")

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
        console.log("si hay algo");
    }
    else{
        e.target.classList.add("border", "border-red-500") //clases de tailwind
    }
}