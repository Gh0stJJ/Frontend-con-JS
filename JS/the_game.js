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
    //Pintar el panel de juego
    let items = '';

    for (let i = 0; i < size*size; i++) {
        items += '<div class="containerItem"><div class="item"></div></div>';
        document.getElementById('juego').innerHTML = items;
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
