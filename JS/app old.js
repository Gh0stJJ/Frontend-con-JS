/*
    JS Para la comprobación de los datos del formulario
*/

// Capturar el valor del input del nick
const nickInput = document.getElementById('nick');
console.log(nickInput.nodeType);
nickInput.value= "hola";

// Capturar el valor del select del tamaño
const sizeSelect = document.getElementById('size');
console.log(sizeSelect.nodeType);
console.log(sizeSelect.value);
console.log(sizeSelect.options[sizeSelect.selectedIndex].text);

//Eventos
function test(){
    console.log('hola');
}
