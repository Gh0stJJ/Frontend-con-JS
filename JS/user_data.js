/*
    JS para la gestión de los datos del usuario
*/

function setuserData(nick) {
    sessionStorage.setItem('nick', nick.value);
}

function getuserData() {
    console.log(sessionStorage.getItem('nick'));
    return sessionStorage.getItem('nick');
}