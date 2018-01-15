// La funcionalidad de tu proyecto

/* Manipulación desde el DOM: Altura del menú en versión mobile */

/* Indicamos qué evento se le aplicará a qué elemento*/
window.addEventListener('load', function(event) {

    /* Guardamos el botón que generará el evento al ser seleccionado*/
    var buttonDropdown = document.getElementById('button-dropdown');
    /* Guardamos el valor que mostrará y su posición por índice*/
    var content = document.getElementsByTagName('main')[0];

    /* Función del botón al detectar el evento click*/
    buttonDropdown.addEventListener('click', function(event) {
        /* Estructura condicional para aumentar o "resetear" la altura (clases CSS)*/
        if (content.classList.contains('grow-height')) {
          content.classList.add('reset-height');
          content.classList.remove('grow-height');
        } else {
            content.classList.add('grow-height');
            content.classList.remove('reset-height');
        }
    })
})
