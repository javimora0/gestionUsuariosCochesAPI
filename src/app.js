import { Usuario } from './clases.js'
import * as asyncUsers from "./http-usuarios.js"

var users = [];
var user;

main()

//introducirUsuario();
//borrarUsuario();


async function main() {
    try {
        const data = await asyncUsers.getOneUser();
        meterUsuario(data);

        const data2 = await asyncUsers.getAllUsers()
        meterUsuarios(data2);

        console.log(user)
        console.log(users)
    } catch (error) {
        console.log(error)
    }
}


function meterUsuarios(data) {
    data[1].forEach(usuario => {
        let $u = new Usuario(usuario.dni, usuario.nombre, usuario.tfno, usuario.edad);
        users.push($u);
    });
}

function meterUsuario(data) {
    user = new Usuario(data.persona.dni, data.persona.nombre, data.persona.tfno, data.persona.edad);
}


