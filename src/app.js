import { Usuario } from './clases.js'
import * as asyncUsers from "./http-usuarios.js"

const tabla = document.getElementById('tablaUsuarios')
const insertarUsuario = document.getElementById('insertarUsuario');


var users = [];
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

async function insertUsuario(u) {
    try {
        const data = await asyncUsers.insertarUsuario(u)
        ponerMensaje(data)
    }catch (error) {
        console.log(error);
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



insertarUsuario.addEventListener('click', function() {
    let dni = document.getElementById('dniUsuario').value;
    let nombre = document.getElementById('nombreUsuario').value;
    let tfno = document.getElementById('tfnoUsuario').value;
    let edad = document.getElementById('edadUsuario').value;
    let u = new Usuario(dni,nombre, tfno, edad);
    insertUsuario(u)

});

function ponerMensaje(data) {
    let mensaje = document.getElementById('mensaje');
    if (data.mensaje == 'Registro insertado correctamente') {
        mensaje.textContent = 'Usuario insertado correctamente'
        vaciarTabla()
        users.splice(0, users.length);
        main();
    }else {
        mensaje.textContent = 'Error al insertar usuario'
    }
}
function vaciarTabla() { 
    for (let i = tabla.rows.length - 1; i > 0; i--) {
        tabla.deleteRow(i);
    }
}