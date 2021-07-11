//Variables
const btnEnviar = document.querySelector("#enviar")

//Listener que escucha cuando carga la pagina
evenListeners();
function evenListeners(){
    document.addEventListener("DOMContentLoaded", iniciarApp);
}

//Funciones
//Funcion que contiene todo lo que se tiene que hacer una vez que cargue el documento por primera vez
function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add("cursor-not-allowed", "opacity-50")//clsaes de tailwind
}

