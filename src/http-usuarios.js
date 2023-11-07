export async function borrarUsuario(idUsuario) {
    try {
        let options = { 
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const urlBorrarUsuario = 'http://localhost:8000/api/usuarios/' + idUsuario;
        const response = await fetch(urlBorrarUsuario, options);
        if (!response.ok) {
            console.log(response);
            throw new Error('No se pudo obtener la información de las categorias');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export async function insertarUsuario(u) { 
    try {
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
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export async function getOneUser() { 
    try {
        const urlUsuario = 'http://localhost:8000/api/usuarios/' + '11A';
        const response = await fetch(urlUsuario);
        if (!response.ok) {
            console.log(response);
            throw new Error('No se pudo obtener la información de las categorias');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export async function getAllUsers() {
    try {
        const urlAllUsers = 'http://localhost:8000/api/usuarios';
        const response = await fetch(urlAllUsers);
        if (!response.ok) {
            console.log(response);
            throw new Error('No se pudo obtener la información de las categorias');
        }
        return await response.json();

    } catch (error) {
        console.error(error);
    }
}

