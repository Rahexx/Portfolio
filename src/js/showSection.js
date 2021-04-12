const animationValues = '.5s linear forwards';
const rightSideTitles = document.querySelectorAll(
  '.section__rightSide .section__title',
);
const rightDimensions = [...rightSideTitles].map((item) => {
  const rect = item.getBoundingClientRect();
  const itemTopOffset = rect.top;

  return itemTopOffset;
});

const addShowAnimation = (item, index) => {
  const howFarScroll = window.pageYOffset;
  const screenHeight = window.innerHeight;

  if (howFarScroll >= rightDimensions[index] - screenHeight * 0.5) {
    item.style.animation = `showTitleRightSide ${animationValues}`;
  }
};

const showSection = () => {
  window.addEventListener('scroll', () => {
    [...rightSideTitles].map((item, index) => {
      addShowAnimation(item, index);
    });
  });
};

export default showSection;
