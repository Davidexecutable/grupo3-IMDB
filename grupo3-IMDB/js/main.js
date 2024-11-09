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
    const fecha = document.getElementById('fechanacimiento');
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

    const nombreVia = document.getElementById('nombreVia');
    if (nombreVia.value === "") {
        const listItem15 = document.getElementById('linombrevia');
        listItem15.style.display = 'block';
        hayErrores = true;
    }

    const numeroDireccion = document.getElementById('numeroDireccion');
    if (numeroDireccion.value === "") {
        const listItem16 = document.getElementById('linumerodireccion');
        listItem16.style.display = 'block';
        hayErrores = true;
    }

    const codigoPostal = document.getElementById('codigoPostal');
    if (codigoPostal.value === "") {
        const listItem17 = document.getElementById('licodigopostal');
        listItem17.style.display = 'block';
        hayErrores = true;
    }
    const nombreTitular = document.getElementById('nombreTitular');
    if (nombreTitular.value === "") {
        const listItem18 = document.getElementById('linombretitular');
        listItem18.style.display = 'block';
        hayErrores = true;
    }

    const fechaCaducidad = document.getElementById('fechaCaducidad');
    if (fechaCaducidad.value === "") {
        const listItem19 = document.getElementById('lifechacaducidad');
        listItem19.style.display = 'block';
        hayErrores = true;
    }

    const cvv = document.getElementById('cvv');
    if (cvv.value === "") {
        const listItem20 = document.getElementById('licvv');
        listItem20.style.display = 'block';
        hayErrores = true;
    }

    const nombreBanco = document.getElementById('nombreBanco');
    if (nombreBanco.value === "") {
        const listItem21 = document.getElementById('linombrebanco');
        listItem21.style.display = 'block';
        hayErrores = true;
    }

    const ibanRegex = /^[A-Z]{2}([A-Z0-9]{1,30})$/;
    const numeroCuenta = document.getElementById('numeroCuenta');
    if (ibanRegex.test(numeroCuenta.value)) {
        const listItem22 = document.getElementById('linumerocuenta');
        listItem22.style.display = 'block';
        hayErrores = true;
    }

    const swiftRegex = /^[A-Z]{6}[A-Z0-9]{1,3}$/;
    const swift = document.getElementById('swift');
    if (swiftRegex.test(swift.value)) {
        const listItem23 = document.getElementById('liswift');
        listItem23.style.display = 'block';
        hayErrores = true;
    }

    const sucursal = document.getElementById('sucursal');
    if (sucursal.value === "") {
        const listItem24 = document.getElementById('lisucursal');
        listItem24.style.display = 'block';
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




