const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelectorAll('.nav__item');
const nav = document.querySelector('.nav');

const initCloseNav = () => {
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', () => {
      if (window.innerWidth < 1024) {
        hamburger.classList.remove('hamburger--active');
        nav.style.transform = 'translateX(-100vw)';
      }
    });
  }
};

const initHamburger = () => {
  hamburger.addEventListener('click', () => {
    if (!hamburger.classList.contains('hamburger--active')) {
      hamburger.classList.add('hamburger--active');
      nav.style.transform = 'translateX(0)';
    } else {
      hamburger.classList.remove('hamburger--active');
      nav.style.transform = 'translateX(-100vw)';
    }
  });

  initCloseNav();
};

export default initHamburger;
