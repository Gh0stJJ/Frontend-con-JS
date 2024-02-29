/*
    JS Para la comprobación de los datos del formulario
*/


//Inicializacion de var, objetos, DOM
const nickInput = document.getElementById('nick');
const sizeInput = document.getElementById('size');
const formEntrada = document.getElementById('formEntrada');
const error = document.getElementById('error');



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
    }
    return true;
}

//Inicio de carga de eventos
formEntrada.addEventListener('submit', comprobarForm);


