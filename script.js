//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega

document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el formulario y los campos de entrada (inputs y textarea)
    const form = document.querySelector('.formcontato__form');
    const inputs = document.querySelectorAll('.formcontato__input, .formcontato__textarea');

    // Añade un evento de 'input' a cada campo para validar mientras el usuario escribe
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            validaCampo(input);
        });
    });

    // Añade un evento de 'submit' para validar todos los campos al intentar enviar el formulario
    form.addEventListener('submit', function(event) {
        let formValido = true;
        inputs.forEach(input => {
            if (!validaCampo(input)) {
                formValido = false; // Si algún campo no es válido, evita el envío
            }
        });

        if (!formValido) {
            event.preventDefault(); // Detiene el envío del formulario si hay errores
        }
    });

    // Función que valida un campo individual
    function validaCampo(input) {
        const tipo = input.dataset.tipo;
        let esValido = true;

        // Verifica si el campo es válido según las reglas HTML (required, type="email", etc.)
        if (!input.validity.valid) {
            esValido = false;
            mostrarMensajeError(input, "Este campo no es válido"); // Muestra mensaje si no es válido
        } else {
            ocultarMensajeError(input); // Oculta el mensaje si es válido
        }

        return esValido; // Retorna si el campo es válido o no
    }

    // Función para mostrar el mensaje de error
    function mostrarMensajeError(input, mensaje) {
        const spanError = input.parentElement.querySelector('.input-message-error');
        spanError.textContent = mensaje; // Establece el mensaje de error
        spanError.style.display = 'block'; // Muestra el mensaje de error
    }

    // Función para ocultar el mensaje de error
    function ocultarMensajeError(input) {
        const spanError = input.parentElement.querySelector('.input-message-error');
        spanError.style.display = 'none'; // Oculta el mensaje de error
    }
});
