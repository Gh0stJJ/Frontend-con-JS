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

//localStorage
function userHistory(){
    //Consultamos el localStorage para ver si ya existe un historial de usuario
    let recordLS = localStorage.getItem('userRecord');
    let record;
    if(recordLS!=null){
        record = JSON.parse(recordLS);
    }else{
        //Creamos la lista si no existe
        record = [];
    }
    nick = getuserData();
    //Objeto con el historial del usuario
    let UserRecord={
        user: nick,
        date: Date.now()
    }

    
    //Guardamos el historial en el localStorage
    record.push(UserRecord);

    localStorage.setItem('userRecord', JSON.stringify(record));
}