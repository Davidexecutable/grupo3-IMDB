function validar() {
    console.log("validando...")
    const listaErrores = document.getElementById("listaErrores");
    const elementos = document.querySelectorAll('.list-group-item');
    const tituloErrores = document.getElementById("tituloErrores");

    listaErrores.style.display = "none";
    tituloErrores.style.display = "none";

    elementos.forEach((elemento) => {
        elemento.style.display = 'none';
    });

    let hayErrores = false;


    const nombre = document.getElementById('nombre');
    if (nombre.value === "") {
        const listItem = document.getElementById('linombre');
        listItem.style.display = 'block';
        hayErrores = true;
    }
    // Para "apellidos"
    const apellidos = document.getElementById('apellidos');
    if (apellidos.value === "") {
        const listItem1 = document.getElementById('liapellidos');
        listItem1.style.display = 'block';
        hayErrores = true;
    }

    // Para "fecha"
    const fecha = document.getElementById('fechaNacimiento');
    if (fecha.value === "") {
        const listItem2 = document.getElementById('lifecha');
        listItem2.style.display = 'block';
        hayErrores = true;
    }

    // Para "genero"
    const genero = document.getElementById('genero');
    if (genero.value === "Género") {
        const listItem3 = document.getElementById('ligenero');
        listItem3.style.display = 'block';
        hayErrores = true;
    }

    // Para "nacionalidad"
    const nacionalidad = document.getElementById('nacionalidad');
    if (nacionalidad.value === "") {
        const listItem4 = document.getElementById('linacionalidad');
        listItem4.style.display = 'block';
        hayErrores = true;
    }

    // Para "tipoidentificacion"
    const tipoidentificacion = document.getElementById('tipoIdentificacion');
    if (tipoidentificacion.value == "Seleccionar") {
        const listItem5 = document.getElementById('litipoidentificacion');
        listItem5.style.display = 'block';
        hayErrores = true;
    }

    // Para "numeroidentificacion"
    const numeroidentificacion = document.getElementById('numeroIdentificacion');
    if (tipoidentificacion.value == "NIE") {
        const nieRegex = /^[XYZ]?\d{1,8}[A-Z]$/;
        if (!nieRegex.test(numeroidentificacion.value)) {
            const listItem6 = document.getElementById('linumeroidentificacion');
            listItem6.style.display = 'block';
            hayErrores = true;
        }
    }
    if (tipoidentificacion.value == "NIF") {
        const nifRegex = /^[0-9]{8}[A-Z]$/;
        if (!nifRegex.test(numeroidentificacion.value)) {
            const listItem7 = document.getElementById('linumeroidentificacion');
            listItem7.style.display = 'block';
            hayErrores = true;
        }

    }

    // Para "estadocivil"
    const estadocivil = document.getElementById('estadoCivil');
    if (estadocivil.value === "") {
        const listItem8 = document.getElementById('liestadocivil');
        listItem8.style.display = 'block';
        hayErrores = true;
    }

    // Para "movil"
    const movil = document.getElementById('telefonoMovil');
    if (movil.value != /^\+(34|0034|34)?[6-9][0-9]{8}$/) {
        const listItem9 = document.getElementById('limovil');
        listItem9.style.display = 'block';
        hayErrores = true;
    }

    // Para "fijo"
    const fijo = document.getElementById('telefonoFijo');
    if (fijo.value != /^\+?\d{1,3} \d{3,4} \d{6,8}$/) {
        const listItem10 = document.getElementById('lifijo');
        listItem10.style.display = 'block';
        hayErrores = true;
    }

    // Para "correo"
    const correo = document.getElementById('correoElectronico');
    const correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!correoRegex.test(correo.value)) {
        const listItem11 = document.getElementById('licorreo');
        listItem11.style.display = 'block';
        hayErrores = true;
    }

    // Para "linkedIn"
    const linkedIn = document.getElementById('perfilLinkedIn');
    if (linkedIn.value === "") {
        const listItem12 = document.getElementById('lilinkedIn');
        listItem12.style.display = 'block';
        hayErrores = true;
    }

    // Para "twitter"
    const twitter = document.getElementById('perfilTwitter');
    if (twitter.value === "") {
        const listItem13 = document.getElementById('litwitter');
        listItem13.style.display = 'block';
        hayErrores = true;
    }

    // Para "web"
    const web = document.getElementById('webPersonal');
    if (web.value === "") {
        const listItem14 = document.getElementById('liweb');
        listItem14.style.display = 'block';
        hayErrores = true;
    }

    console.log("¿Hay errores?", hayErrores);

    if (hayErrores) {
        listaErrores.style.display = "block";
        tituloErrores.style.display = "block";
        window.scrollTo({ top: 0, behavior: 'smooth' });
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

document.addEventListener("DOMContentLoaded", function () {
    function main() {
        const listaErrores = document.getElementById("listaErrores");
        listaErrores.style.display = "none";


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




