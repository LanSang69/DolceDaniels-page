(function() {
    const menuButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link--menu');
    const menuItems = menu.querySelectorAll('.nav__links');
  
    function toggleMenu() {
      menu.classList.toggle('nav__link--show');
      menuButton.classList.toggle('open');
    }
  
    function closeMenu() {
      menu.classList.remove('nav__link--show');
      menuButton.classList.remove('open');
    }
  
    menuButton.addEventListener('click', toggleMenu);
  
    menuItems.forEach(item => {
      item.addEventListener('click', closeMenu);
    });
  })();