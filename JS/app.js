/*
*    JS Para la comprobación de los datos del formulario
*   @autor: Juanja
*   @version: 1.0
*/


//Inicializacion de var, objetos, DOM
var nickInput;
var sizeInput;
var emailInput;
var formEntrada;
var error;



//Funciones de eventos
function comprobarForm(e){
    if(nickInput.value.length == 0){
        console.log('El nick no puede estar vacio');
        nickInput.focus();
        e.preventDefault(); //Evita que se envie el formulario
        error.innerText = 'El nick no puede estar vacio';
        return false;
    }else if(sizeInput.value == '0'){
        console.log('No se ha seleccionado un tamaño de tablero');
        sizeInput.focus();
        e.preventDefault(); //Evita que se envie el formulario
        error.innerText = 'No se ha seleccionado un tamaño de tablero';
        return false;
    }else if(nickInput.value.match(/(?<!\S)[0-9]/)){
        console.log('El nick no puede comenzar con numeros');
        nickInput.focus();
        e.preventDefault(); //Evita que se envie el formulario
        error.innerText = 'El nick no puede comenzar con numeros';
        return false;
    }

    //Guardamos el nick en el sessionStorage
    setuserData(nickInput, sizeInput, emailInput);

    return true;
}



/**
 * Carga de objetos del DOM, comprobaciones y eventos del formulario
 */
function domReady(){
    //Captura de todos los elements necesarios
    nickInput = document.getElementById('nick');
    sizeInput = document.getElementById('size');
    emailInput = document.getElementById('email');
    formEntrada = document.getElementById('formEntrada');
    error = document.getElementById('error');
    //Comprobamos si el hay algun error en el sessionStorage una vez cargado el DOM
    if(sessionStorage.getItem('error')!=null){
        error.innerText = sessionStorage.getItem('error');
        sessionStorage.removeItem('error');
    }
    //Inicio de carga de eventos
    formEntrada.addEventListener('submit', comprobarForm);

}



document.addEventListener('DOMContentLoaded',domReady)



//Geolocalizacion
geolocalationData();

