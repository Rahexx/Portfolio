const navDot = document.querySelector('.nav__pointActive');
let widthItem;

const howFarMove = (index) => {
  if (index === 0) {
    return widthItem / 2 - 7.5;
  }
  return widthItem / 2 + widthItem * index - 15 * (index + 1) * 1.2;
};

const initNavDotPositionSmall = () => {
  navDot.style.left = `${howFarMove(0)}px`;
};

const hoverEvent = (index) => {
  navDot.style.left = `${howFarMove(index)}px`;
};

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
    if (window.pageYOffset < skillOffsetTop - heightSection / 2) {
      hoverEvent(0);
    } else if (
      window.pageYOffset >= skillOffsetTop - heightSection / 2
      && window.pageYOffset < projectOffsetTop - heightSection / 2
    ) {
      hoverEvent(1);
    } else if (
      window.pageYOffset >= projectOffsetTop - heightSection / 2
      && window.pageYOffset < contactOffsetTop - heightSection / 2
    ) {
      hoverEvent(2);
    } else if (window.pageYOffset >= contactOffsetTop - heightSection) {
      hoverEvent(3);
    }
  });
};

const pointActiveSection = () => {
  const navItems = document.querySelectorAll('.nav__item');
  const rect = navItems[0].getBoundingClientRect();
  const screenWidth = window.innerWidth;
  widthItem = rect.width;

  if (screenWidth < 2000) {
    initNavDotPositionSmall();
  }

  [...navItems].map((item, index) => {
    item.addEventListener('mouseover', () => {
      hoverEvent(index);
    });

    item.addEventListener('mouseout', initNavDotPositionSmall);
  });

  addListenWindow();
};

export default pointActiveSection;
