document.addEventListener('DOMContentLoaded', function() {      //Se asegura que los elementos existan antes de hacer algo
  const mensajeInput = document.getElementById('mensajeInput'); //Obtengo el ID del mesaje
  const enviarButton = document.getElementById('enviarButton'); //Obtengo ID del botón

  enviarButton.addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto

    const mensaje = encodeURIComponent(mensajeInput.value);   //Copia el v
    const numero = '+525564779982'; // Tu número de WhatsApp
    const enlaceWhatsApp = `https://api.whatsapp.com/send?phone=${encodeURIComponent(numero)}&text=${(mensaje)}`;
    window.open(enlaceWhatsApp, '_blank');
    console.log(enlaceWhatsApp);
  });
});