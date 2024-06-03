// Función Modal para manipular los eventos
const miVentanaEmergente = document.getElementById('ventanaEmergente')

//Agregar un observador sobre el modal

miVentanaEmergente.addEventListener('show.bs.modal', function (event) {
    console.log('Se esta abriendo el modal');

    //reconoces el elemento que habilita el evento modal
    let boton = event.relatedTarget //eitiquetado relacionado al evento

    let mensaje = boton.getAttribute('data-titulo')
    let contenido = boton.getAttribute('data-contenido')

    document.getElementById('tituloModal').innerText = mensaje;//Usando un id
    document.querySelector('.modal-body').innerText = contenido;//Usando una clase
})

miVentanaEmergente.addEventListener('shown.bs.modal', function () {
    console.log('está abierto el modal');
})
miVentanaEmergente.addEventListener('hide.bs.modal', function () {
    console.log('se está cerrando el modal');
})
miVentanaEmergente.addEventListener('hidden.bs.modal', function () {
    console.log('esta cerrado modal');
})