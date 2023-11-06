import { Usuario } from './clases.js'
import * as asyncUsers from "./http-usuarios.js"

const tabla = document.getElementById('tablaUsuarios')
const insertarUsuario = document.getElementById('insertarUsuario');

var users = [];
var user;

main()

async function main() {
    try {
        const data = await asyncUsers.getAllUsers()
        users = meterUsuarios(data);
        generarTabla(users);

    } catch (error) {
        console.log(error)
    }
}

function meterUsuarios(data) {
    data[1].forEach(usuario => {
        let $u = new Usuario(usuario.dni, usuario.nombre, usuario.tfno, usuario.edad);
        users.push($u);
    });
    return users;
}

function meterUsuario(data) {
    user = new Usuario(data.persona.dni, data.persona.nombre, data.persona.tfno, data.persona.edad);
}

function generarTabla(usuarios) {
    let datos = [];
    usuarios.forEach(function(usuario) {
        datos.push(usuario);
    });

    datos.forEach(function(dato) {
        let fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${dato.dni}</td>
            <td>${dato.nombre}</td>
            <td>${dato.tfno}</td>
            <td>${dato.edad}</td>
        `
        tabla.appendChild(fila);
    });
}

async function insertUsuario(u) {
    try {
        const data = await asyncUsers.insertarUsuario(u)
    }catch (error) {
        console.log(error);
    }
}

insertarUsuario.addEventListener('click', function() {
    let dni = document.getElementById('dniUsuario').value;
    let nombre = document.getElementById('nombreUsuario').value;
    let tfno = document.getElementById('tfnoUsuario').value;
    let edad = document.getElementById('edadUsuario').value;
    let mensaje = document.getElementById('mensaje');
    let u = new Usuario(dni,nombre, tfno, edad);
    insertUsuario(u)
});