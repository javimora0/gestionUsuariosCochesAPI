import { Usuario } from './clases.js'

var users = [];
var user;
//obtenerUsuarios();
//obtenerUnUsuario();
// introducirUsuario();
borrarUsuario();

async function borrarUsuario() {
    try {
        let options = { 
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            }
        }
        let idUsuario = 'prueba';
        const urlBorrarUsuario = 'http://localhost:8000/api/usuarios/' + idUsuario;
        const response = await fetch(urlBorrarUsuario, options);
        if (!response.ok) {
            console.log(response);
            throw new Error('No se pudo obtener la información de las categorias');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }

}

async function introducirUsuario() { 
    try {
        let u = new Usuario("343254345","pepe", "24", 43);
        let options = {
            method: "POST",
            body: JSON.stringify(u),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const urlInsertarUsuario = 'http://localhost:8000/api/usuarios';
        const response = await fetch(urlInsertarUsuario, options);
        if (!response.ok) {
            console.log(response);
            throw new Error('No se pudo obtener la información de las categorias');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

async function obtenerUnUsuario() { 
    try {
        const urlUsuario = 'http://localhost:8000/api/usuarios/' + '11A';
        const response = await fetch(urlUsuario);
        if (!response.ok) {
            console.log(response);
            throw new Error('No se pudo obtener la información de las categorias');
        }
        const data = await response.json();
        meterUsuario(data);
    } catch (error) {
        console.error(error);
    }
}


async function obtenerUsuarios() {
    try {
        const urlAllUsers = 'http://localhost:8000/api/usuarios';
        const response = await fetch(urlAllUsers);
        if (!response.ok) {
            console.log(response);
            throw new Error('No se pudo obtener la información de las categorias');
        }
        const data = await response.json();
        meterUsuarios(data);
    } catch (error) {
        console.error(error);
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