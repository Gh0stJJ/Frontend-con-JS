/*
    JS para la gestión de los datos del usuario
*/

var nick;

function setuserData(nick) {
    sessionStorage.setItem('nick', nick.value);
}

function getuserData() {
    nick = sessionStorage.getItem('nick');
    console.log(nick);
    return nick;
}

function checkuserData() {
    if (nick != null) {
        return true;
    } else {
        //Mensaje de error
        sessionStorage.setItem('error', 'No se ha rellenado el formulario de inicio de sesión. Por favor, rellene el formulario para poder jugar.');
        return false;
    }
}