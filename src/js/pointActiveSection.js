const navDot = document.querySelector('.nav__pointActive');
let widthItem;

const howFarMove = (index, screenSize = 'small') => {
  if (index === 0 && screenSize === 'small') {
    return widthItem / 2 - 7.5;
  } else if (index === 0 && screenSize === 'large') {
    return widthItem / 2;
  } else if (index >= 0 && screenSize === 'large') {
    return widthItem / 2 + (widthItem / 2) * (index * 2) - 7.5;
  } else if (index >= 0 && screenSize === 'small') {
    return widthItem / 2 + widthItem * index - 15 * (index + 1) * 1.2;
  }
};

const initNavDotPositionSmall = () => {
  navDot.style.left = `${howFarMove(0)}px`;
};

const initNavDotPositionLarge = () => {
  navDot.style.left = `${howFarMove(0, 'large')}px`;
};

const hoverEvent = (index, screenSize = 'small') => {
  navDot.style.left = `${howFarMove(index, screenSize)}px`;
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
  const screenWidth = window.innerWidth;
  const screenSize = screenWidth < 2000;

  window.addEventListener('scroll', () => {
    const size = screenSize ? 'small' : 'large';

    if (window.pageYOffset < skillOffsetTop - heightSection / 2) {
      hoverEvent(0, size);
    } else if (
      window.pageYOffset >= skillOffsetTop - heightSection / 2 &&
      window.pageYOffset < projectOffsetTop - heightSection / 2
    ) {
      hoverEvent(1, size);
    } else if (
      window.pageYOffset >= projectOffsetTop - heightSection / 2 &&
      window.pageYOffset < contactOffsetTop - heightSection / 2
    ) {
      hoverEvent(2, size);
    } else if (window.pageYOffset >= contactOffsetTop - heightSection) {
      hoverEvent(3, size);
    }
  });
};

const deleteListeners = () => {
  const navItems = document.querySelectorAll('.nav__item');
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
  const screenWidth = window.innerWidth;
  const screenSize = screenWidth < 2000;

  [...navItems].map((item, index) => {
    item.removeEventListener('mouseover', () => {
      if (screenSize) {
        hoverEvent(index);
      } else {
        hoverEvent(index, 'large');
      }
    });

    if (screenSize) {
      item.removeEventListener('mouseout', initNavDotPositionSmall);
    } else {
      item.removeEventListener('mouseout', initNavDotPositionLarge);
    }
  });

  window.removeEventListener('scroll', () => {
    const size = screenSize ? 'small' : 'large';

    if (window.pageYOffset < skillOffsetTop - heightSection / 2) {
      hoverEvent(0, size);
    } else if (
      window.pageYOffset >= skillOffsetTop - heightSection / 2 &&
      window.pageYOffset < projectOffsetTop - heightSection / 2
    ) {
      hoverEvent(1, size);
    } else if (
      window.pageYOffset >= projectOffsetTop - heightSection / 2 &&
      window.pageYOffset < contactOffsetTop - heightSection / 2
    ) {
      hoverEvent(2, size);
    } else if (window.pageYOffset >= contactOffsetTop - heightSection) {
      hoverEvent(3, size);
    }
  });

  pointActiveSection();
};

const pointActiveSection = () => {
  const navItems = document.querySelectorAll('.nav__item');
  const rect = navItems[0].getBoundingClientRect();
  const screenWidth = window.innerWidth;
  const screenSize = screenWidth < 2000;
  let resizeTimer;
  widthItem = rect.width;

  if (screenSize) {
    initNavDotPositionSmall();
  } else {
    initNavDotPositionLarge();
  }

  [...navItems].map((item, index) => {
    item.addEventListener('mouseover', () => {
      if (screenSize) {
        hoverEvent(index);
      } else {
        hoverEvent(index, 'large');
      }
    });

    if (screenSize) {
      item.addEventListener('mouseout', initNavDotPositionSmall);
    } else {
      item.addEventListener('mouseout', initNavDotPositionLarge);
    }
  });

  addListenWindow();

  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
      deleteListeners();
    }, 200);
  });
};

export default pointActiveSection;
