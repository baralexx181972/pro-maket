(() => {
  const refs = {
    openMenuBtn: document.querySelector('.button__open'),
    closeMenuBtn: document.querySelector('.button__close'),
    menu: document.querySelector('.mobile__menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
  }
})();