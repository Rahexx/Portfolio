let active = 0;

const addListenWindow = () => {
  const skillSection = document.querySelector('.section:nth-child(2)');
  const projectSection = document.querySelector('.section:nth-child(3)');
  const contactSection = document.querySelector('.section:nth-child(6)');
  const skillRect = skillSection.getBoundingClientRect();
  const projectRect = projectSection.getBoundingClientRect();
  const contactRect = contactSection.getBoundingClientRect();
  const skillOffsetTop = skillRect.y;
  const projectOffsetTop = projectRect.y;
  const contactOffsetTop = contactRect.y;
  const heightSection = skillRect.height;

  window.addEventListener('scroll', () => {
    const activeMenu = document.querySelector('.nav__item--active');
    const navItems = document.querySelectorAll('.nav__item');

    if (window.pageYOffset < skillOffsetTop - heightSection / 2) {
      active = 0;
      activeMenu.classList.remove('nav__item--active');
      navItems[active].classList.add('nav__item--active');
    } else if (
      window.pageYOffset >= skillOffsetTop - heightSection / 2 &&
      window.pageYOffset < projectOffsetTop - heightSection / 2
    ) {
      active = 1;
      activeMenu.classList.remove('nav__item--active');
      navItems[active].classList.add('nav__item--active');
    } else if (
      window.pageYOffset >= projectOffsetTop - heightSection / 2 &&
      window.pageYOffset < contactOffsetTop - heightSection / 2
    ) {
      active = 2;
      activeMenu.classList.remove('nav__item--active');
      navItems[active].classList.add('nav__item--active');
    } else if (window.pageYOffset >= contactOffsetTop - heightSection) {
      active = 3;
      activeMenu.classList.remove('nav__item--active');
      navItems[active].classList.add('nav__item--active');
    }
  });
};

const pointActiveSection = () => {
  addListenWindow();
};

const refreshPage = () => {
  window.scroll({
    top: 0,
    left: 0,
  });
};

window.onbeforeunload = refreshPage;

export default pointActiveSection;
