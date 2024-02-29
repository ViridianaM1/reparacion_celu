function mostrarMensaje() {

    var correo = document.getElementById('exampleFormControlInput1').value;
    var mensaje = document.getElementById('exampleFormControlTextarea1').value;

    if (correo.trim() === '' || mensaje.trim() === '') {
        alert('Por favor, completa todos los campos antes de enviar.');
        return;
    }

    alert("Mensaje enviado");
}
