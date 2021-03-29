const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

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
};

export default initHamburger;
