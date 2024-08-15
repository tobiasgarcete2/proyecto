document.getElementById('signup-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    alert("entró al js")

    const gmail = document.getElementById('gmail').value;
    const contraseña = document.getElementById('contraseña').value;

    const response = await fetch('http:/localhost:3000/traerusuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ gmail, contraseña })
    });

    const result = await response.json();
    
    if (result.success) {
        alert('inicio de session exitoso',window.location.href='../index.html');
    } else {
        alert('Error en el registro: ' + result.message);
    }
});