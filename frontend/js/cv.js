document.addEventListener('DOMContentLoaded', () => {
    const { jsPDF } = window.jspdf;

    // Función para obtener los datos del formulario
    function obtenerDatosFormulario() {
        return {
            habilidades: document.getElementById('habilidades').value,
            estudios: document.getElementById('estudios').value,
            idiomas: document.getElementById('idiomas').value,
            foto: document.getElementById('foto').files[0] // Obtener el archivo de imagen
        };
    }

    // Función para generar el PDF del CV
    function generarCV() {
        const datos = obtenerDatosFormulario();
        const doc = new jsPDF();

        // Configuración básica del PDF
        doc.setFontSize(16);
        doc.text(`Currículum Vitae`, 10, 10);
        doc.setFontSize(12);
        doc.text(`Habilidades: ${datos.habilidades}`, 10, 20);
        doc.text(`Estudios: ${datos.estudios}`, 10, 30);
        doc.text(`Idiomas: ${datos.idiomas}`, 10, 40);

        // Si hay una foto seleccionada, la cargamos en el PDF
        if (datos.foto) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const imgData = event.target.result;
                // Tamaño de la foto en milímetros (40 mm x 40 mm)
                const ancho = 40; // 4 cm en mm
                const alto = 40;  // 4 cm en mm
                doc.addImage(imgData, 'JPEG', 10, 50, ancho, alto);
                doc.save(`mi-cv.pdf`);
            };
            reader.readAsDataURL(datos.foto);
        } else {
            doc.save(`mi-cv.pdf`);
        }
    }

    // Asignar la función al botón "Crear CV"
    document.getElementById('crearCVButton').addEventListener('click', generarCV);
});

