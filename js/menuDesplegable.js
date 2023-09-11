(function() {
  // Seleccionando el botón del menú y el menú en sí
  const menuButton = document.querySelector('.nav__menu');
  const menu = document.querySelector('.nav__link--menu');
  const menuItems = menu.querySelectorAll('.nav__links');

  // Función para alternar la visibilidad del menú
  function toggleMenu() {
    menu.classList.toggle('nav__link--show'); // Alterna la clase 'nav__link--show' en el menú
    menuButton.classList.toggle('open'); // Alterna la clase 'open' en el botón del menú
  }

  // Función para cerrar el menú
  function closeMenu() {
    menu.classList.remove('nav__link--show'); // Elimina la clase 'nav__link--show' del menú
    menuButton.classList.remove('open'); // Elimina la clase 'open' del botón del menú
  }

  // Agregar un evento de escucha al botón del menú para alternar el menú
  menuButton.addEventListener('click', toggleMenu);

  // Agregar eventos de escucha a cada elemento del menú para cerrar el menú cuando se hace clic en un enlace
  menuItems.forEach(item => {
    item.addEventListener('click', closeMenu);
  });
})();
