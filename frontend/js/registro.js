 // Función para mostrar u ocultar el campo "nombre de empresa" según el rol seleccionado
 document.getElementById('role').addEventListener('change', function() {
    const role = this.value;
    const nombreEmpresaGroup = document.getElementById('nombreEmpresaGroup');

    if (role === 'empresa') {
        nombreEmpresaGroup.style.display = 'block';
        document.getElementById('nombre_empresa').setAttribute('required', 'required');
    } else {
        nombreEmpresaGroup.style.display = 'none';
        document.getElementById('nombre_empresa').removeAttribute('required');
    }
});

// Evento submit del formulario
document.getElementById('signup-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;
    const role = document.getElementById('role').value;
    const nombre_empresa = document.getElementById('nombre_empresa').value;

    let url = '';

    if (role === "empresa") {
        url = 'http://localhost:3000/api/crearempresa';
    } else {
        url = 'http://localhost:3000/api/creardesempleado';
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ correo, contraseña, nombre_empresa })
        });

        if (!response.ok) {
            throw new Error('Error en la red o el servidor');
        }

        const result = await response.json();

        if (result.id) {
            alert('Registro exitoso');window.location.href = '../pages/inscripcion.html';
        } else {
            alert('Error en el registro: ' + result.message);
        }
    } catch (error) {
        alert('Hubo un error al procesar tu solicitud: ' + error.message);
    }
});