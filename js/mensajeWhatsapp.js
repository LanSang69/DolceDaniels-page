document.addEventListener('DOMContentLoaded', function() {
  // Asegura que los elementos existan antes de hacer algo
  const mensajeInput = document.getElementById('mensajeInput'); // Obtengo el ID del mensaje
  const enviarButton = document.getElementById('enviarButton'); // Obtengo ID del botón

  enviarButton.addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto

    iziToast.success({
      title: 'Redirigiendo a WhatsApp...',
      message: '¡Bienvenido!',
      position: 'topRight'
    });

    const mensaje = encodeURIComponent(mensajeInput.value); // Codifica el mensaje
    const numero = '+525586761828'; // Tu número de WhatsApp
    const enlaceWhatsApp = `https://api.whatsapp.com/send?phone=${encodeURIComponent(numero)}&text=${(mensaje)}`;

    // Redirige a WhatsApp después de 1.5 segundos (
    setTimeout(function() {
      window.open(enlaceWhatsApp, '_blank');
    }, 1000);
  });
});
