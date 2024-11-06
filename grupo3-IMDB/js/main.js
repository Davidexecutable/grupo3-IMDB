function validar() {
    console.log("validar")
    const nombre = document.getElementById('nombre');
    if (nombre.value === "") {
        const listItem = document.getElementById('linombre');
        listItem.style.display = 'block';
        const uld = document.getElementById('listaErrores');
        uld.style.display = 'block';
        console.log("error y listamostrados")
    }
    // Para "apellidos"
    const apellidos = document.getElementById('apellidos');
    if (apellidos.value === "") {
        const listItem1 = document.getElementById('liapellidos');
        listItem1.style.display = 'block';
        const uld = document.getElementById('listaErrores');
        uld.style.display = 'block';
    }

    // Para "fecha"
    const fecha = document.getElementById('fechanacimiento');
    if (fecha.value === "") {
        const listItem2 = document.getElementById('lifecha');
        listItem2.style.display = 'block';
        const uld = document.getElementById('listaErrores');
        uld.style.display = 'block';
    }

    // Para "genero"
    const genero = document.getElementById('genero');
    if (genero.value != "Género") {
        const listItem3 = document.getElementById('ligenero');
        listItem3.style.display = 'block';
        const uld = document.getElementById('listaErrores');
        uld.style.display = 'block';
    }

    // Para "nacionalidad"
    const nacionalidad = document.getElementById('nacionalidad');
    if (nacionalidad.value === "") {
        const listItem4 = document.getElementById('linacionalidad');
        listItem4.style.display = 'block';
        const uld = document.getElementById('listaErrores');
        uld.style.display = 'block';
    }

    // Para "tipoidentificacion"
    const tipoidentificacion = document.getElementById('tipoIdentificacion');
    if (tipoidentificacion.value != "Seleccionar") {
        const listItem5 = document.getElementById('litipoidentificacion');
        listItem5.style.display = 'block';
        const uld = document.getElementById('listaErrores');
        uld.style.display = 'block';
    }

    // Para "numeroidentificacion"
    const numeroidentificacion = document.getElementById('numeroIdentificacion');
    if (tipoidentificacion.value == "NIE") {
        if (numeroidentificacion.value != /^[XYZ]?\\d{1,8}[A-Z]$/) {
            const listItem6 = document.getElementById('linumeroidentificacion');
            listItem6.style.display = 'block';
            const uld = document.getElementById('listaErrores');
            uld.style.display = 'block';
        }
    }
    if (tipoidentificacion.value == "NIF") {
        if (numeroidentificacion.value != !/^[0-9]{8}[A-Z]$/) {
            const listItem7 = document.getElementById('linumeroidentificacion');
            listItem7.style.display = 'block';
            const uld = document.getElementById('listaErrores');
            uld.style.display = 'block';
        }

    }

    // Para "estadocivil"
    const estadocivil = document.getElementById('estadocivil');
    if (estadocivil.value === "") {
        const listItem8 = document.getElementById('liestadocivil');
        listItem8.style.display = 'block';
        const uld = document.getElementById('listaErrores');
        uld.style.display = 'block';
    }

    // Para "movil"
    const movil = document.getElementById('movil');
    if (movil.value != /^\+(34|0034|34)?[6-9][0-9]{8}$/) {
        const listItem9 = document.getElementById('limovil');
        listItem9.style.display = 'block';
        const uld = document.getElementById('listaErrores');
        uld.style.display = 'block';
    }

    // Para "fijo"
    const fijo = document.getElementById('fijo');
    if (fijo.value != /^\+?\d{1,3} \d{3,4} \d{6,8}$/) {
        const listItem10 = document.getElementById('lifijo');
        listItem10.style.display = 'block';
        const uld = document.getElementById('listaErrores');
        uld.style.display = 'block';
    }

    // Para "correo"
    const correo = document.getElementById('correo');
    if (correo.value != /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) {
        const listItem11 = document.getElementById('licorreo');
        listItem11.style.display = 'block';
        const uld = document.getElementById('listaErrores');
        uld.style.display = 'block';
    }

    // Para "linkedIn"
    const linkedIn = document.getElementById('linkedIn');
    if (linkedIn.value === "") {
        const listItem12 = document.getElementById('lilinkedIn');
        listItem12.style.display = 'block';
        const uld = document.getElementById('listaErrores');
        uld.style.display = 'block';
    }

    // Para "twitter"
    const twitter = document.getElementById('twitter');
    if (twitter.value === "") {
        const listItem13 = document.getElementById('litwitter');
        listItem13.style.display = 'block';
        const uld = document.getElementById('listaErrores');
        uld.style.display = 'block';
    }

    // Para "web"
    const web = document.getElementById('web');
    if (web.value === "") {
        const listItem14 = document.getElementById('liweb');
        listItem14.style.display = 'block';
        const uld = document.getElementById('listaErrores');
        uld.style.display = 'block';
    }

}

function toggleSelection(card, filaId) {
    if (filaId === 'filaSeleccionUnica') {
        const cards = document.querySelectorAll(`#${filaId} .card`);
        cards.forEach(function (cardInRow) {
            
        });
    } 
    else if (filaId === 'filaSeleccionMultiple') {
        
    }
}

document.addEventListener("DOMContentLoaded", function() {
    function main() {
        // Intenta obtener el elemento 'listaErrores' y ocúltalo si existe
        const listaErrores = document.getElementById('listaErrores');
        if (listaErrores) {
            listaErrores.style.display = 'none';
            console.log("Elemento 'listaErrores' ocultado");
        } else {
            console.warn("No se encontró el elemento con id 'listaErrores'");
        }

        // Selecciona y oculta todos los elementos con la clase 'lierror'
        const elementos = document.querySelectorAll('.lierror');
        if (elementos.length > 0) {
            elementos.forEach((elemento) => {
                elemento.style.display = 'none';
            });
            console.log(`Ocultados ${elementos.length} elementos con clase 'lierror'`);
        } else {
            console.warn("No se encontraron elementos con la clase 'lierror'");
        }

        // Configura el evento click en el botón
        const boton = document.getElementById('boton');
        if (boton) {
            boton.addEventListener('click', validar);
            console.log("Evento 'click' añadido al botón");
        } else {
            console.warn("No se encontró el elemento con id 'boton'");
        }
    }

    main();
});

