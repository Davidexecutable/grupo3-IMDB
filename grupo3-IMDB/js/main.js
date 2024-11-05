function validar() {
    const nombre = document.getElementById('nombre');
    if (nombre.value === "") {
        const listItem = document.getElementById('linombre');
        listItem.style.display = 'block';
        const uld = document.getElementById('listaErrores');
        uld.style.display = 'block';
    }
    // Para "apellidos"
    const apellidos = document.getElementById('apellidos');
    if (apellidos.value === "") {
        const listItem = document.getElementById('liapellidos');
        listItem.style.display = 'block';
        const uld = document.getElementById('listaErrores');
        uld.style.display = 'block';
    }

    // Para "fecha"
    const fecha = document.getElementById('fechanacimiento');
    if (fecha.value === "") {
        const listItem = document.getElementById('lifecha');
        listItem.style.display = 'block';
        const uld = document.getElementById('listaErrores');
        uld.style.display = 'block';
    }

    // Para "genero"
    const genero = document.getElementById('genero');
    if (genero.value != "Género") {
        const listItem = document.getElementById('ligenero');
        listItem.style.display = 'block';
        const uld = document.getElementById('listaErrores');
        uld.style.display = 'block';
    }

    // Para "nacionalidad"
    const nacionalidad = document.getElementById('nacionalidad');
    if (nacionalidad.value === "") {
        const listItem = document.getElementById('linacionalidad');
        listItem.style.display = 'block';
        const uld = document.getElementById('listaErrores');
        uld.style.display = 'block';
    }

    // Para "tipoidentificacion"
    const tipoidentificacion = document.getElementById('tipoIdentificacion');
    if (tipoidentificacion.value != "Seleccionar") {
        const listItem = document.getElementById('litipoidentificacion');
        listItem.style.display = 'block';
        const uld = document.getElementById('listaErrores');
        uld.style.display = 'block';
    }

    // Para "numeroidentificacion"
    const numeroidentificacion = document.getElementById('numeroIdentificacion');
    if(tipoidentificacion.value=="NIE"){
        if (numeroidentificacion.value != /^[XYZ]?\\d{1,8}[A-Z]$/) {
            const listItem = document.getElementById('linumeroidentificacion');
            listItem.style.display = 'block';
            const uld = document.getElementById('listaErrores');
            uld.style.display = 'block';
        }
    }
        if(tipoidentificacion.value=="NIF"){
            if (numeroidentificacion.value != !/^[0-9]{8}[A-Z]$/) {
                const listItem = document.getElementById('linumeroidentificacion');
                listItem.style.display = 'block';
                const uld = document.getElementById('listaErrores');
                uld.style.display = 'block';
            }
    
    }
    
    // Para "estadocivil"
    const estadocivil = document.getElementById('estadocivil');
    if (estadocivil.value === "") {
        const listItem = document.getElementById('liestadocivil');
        listItem.style.display = 'block';
        const uld = document.getElementById('listaErrores');
        uld.style.display = 'block';
    }

    // Para "movil"
    const movil = document.getElementById('movil');
    if (movil.value != /^\+(34|0034|34)?[6-9][0-9]{8}$/) {
        const listItem = document.getElementById('limovil');
        listItem.style.display = 'block';
        const uld = document.getElementById('listaErrores');
        uld.style.display = 'block';
    }

    // Para "fijo"
    const fijo = document.getElementById('fijo');
    if (fijo.value != /^\+?\d{1,3} \d{3,4} \d{6,8}$/) {
        const listItem = document.getElementById('lifijo');
        listItem.style.display = 'block';
        const uld = document.getElementById('listaErrores');
        uld.style.display = 'block';
    }

    // Para "correo"
    const correo = document.getElementById('correo');
    if (correo.value != /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) {
        const listItem = document.getElementById('licorreo');
        listItem.style.display = 'block';
        const uld = document.getElementById('listaErrores');
        uld.style.display = 'block';
    }

    // Para "linkedIn"
    const linkedIn = document.getElementById('linkedIn');
    if (linkedIn.value === "") {
        const listItem = document.getElementById('lilinkedIn');
        listItem.style.display = 'block';
        const uld = document.getElementById('listaErrores');
        uld.style.display = 'block';
    }

    // Para "twitter"
    const twitter = document.getElementById('twitter');
    if (twitter.value === "") {
        const listItem = document.getElementById('litwitter');
        listItem.style.display = 'block';
        const uld = document.getElementById('listaErrores');
        uld.style.display = 'block';
    }

    // Para "web"
    const web = document.getElementById('web');
    if (web.value === "") {
        const listItem = document.getElementById('liweb');
        listItem.style.display = 'block';
        const uld = document.getElementById('listaErrores');
        uld.style.display = 'block';
    }

}
function main() {
    
}