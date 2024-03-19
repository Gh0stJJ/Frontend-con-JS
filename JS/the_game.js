/*
    JS para la gestión del juego
*/

function setUserData(){
    // Set the user data
    document.getElementById('nick').value = nick;
    document.getElementById('avatarImg').src = avatarImg;


}

//Crear grid del juego

function createGrid(){
    //Alteramos la hoja de estilos
    document.getElementById('juego').style.gridTemplateColumns = 'repeat('+size+', 1fr)';
    document.getElementById('juego').style.gridTemplateRows = 'repeat('+size+', 1fr)';
    console.log('Grid creado');
    console.log('Tamaño del tablero: '+size);
}

//Pintar el panel de juego

function paintGamePanel(){
    //Diccionario de colores
    let colors = {'1':'rojo', '2':'verde', '3':'azul', '4':'amarillo', '5':'naranja', '6':'morado'};

    //Pintar el panel de juego
    let items = '';

    for (let i = 0; i < size*size; i++) {
        let randColor = Math.floor(Math.random() * 6) + 1;
        items += '<div class="containerItem"><div class="item '+colors[randColor]+'"></div></div>';
        document.getElementById('juego').innerHTML = items;
    }
}


//Funciones del juego
/**
 * Iniciar el marcado de los items
 * @param {*} e 
 */
function marcarItem(e){
    let hijo = e.target;
    let containerItem = e.target.parentElement
    //Añadimos la clase marcado al item padre
    console.log(hijo.classList);
    containerItem.classList.add(hijo.classList[1]);
}

function gameEvents(){
    //Eventos del juego
    const items = document.getElementsByClassName('item');

    for (let item of items) {
        item.addEventListener('mousedown', marcarItem);

    }
}





// Get the user data
getuserData();
//Guardamos el historial de usuario en el localStorage
userHistory();
//Comprobamos si el usuario ya ha introducido su nombre
//Usaremos Windows location para redirigir al usuario a la página de inicio si no ha introducido su nombre
if(!checkuserData()){
    location = "index.html";
}

// Set the user data
setUserData();

//Crear grid del juego
createGrid();

//Pintar el panel de juego  
paintGamePanel();

//Eventos del juego
gameEvents();
