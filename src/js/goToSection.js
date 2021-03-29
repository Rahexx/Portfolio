const scrollToSection = (topDistance) => {
  window.scroll({
    top: topDistance,
    left: 0,
    behavior: 'smooth',
  });
};

const goToSection = () => {
  const navList = document.querySelectorAll('.nav__item');
  const skillSection = document.querySelector('.section:nth-child(2)');
  const projectSection = document.querySelector('.section:nth-child(3)');
  const contactSection = document.querySelector('.section:nth-child(6)');
  const rectSkill = skillSection.getBoundingClientRect();
  const rectProject = projectSection.getBoundingClientRect();
  const rectContact = contactSection.getBoundingClientRect();
  const skillOffsetTop = rectSkill.y;
  const projectOffsetTop = rectProject.y;
  const contactOffsetTop = rectContact.y;

  [...navList].map((item, index) => {
    item.addEventListener('click', () => {
      if (index === 0) {
        scrollToSection(0);
      } else if (index === 1) {
        scrollToSection(skillOffsetTop);
      } else if (index === 2) {
        scrollToSection(projectOffsetTop);
      } else {
        scrollToSection(contactOffsetTop);
      }
    });
  });
};

export default goToSection;
