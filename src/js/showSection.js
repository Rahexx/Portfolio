const animationValues = '.5s linear forwards';
const rightSideTitles = document.querySelectorAll(
  '.section__rightSide .section__title',
);
const leftSideTitles = document.querySelectorAll(
  '.section__leftSide .section__title',
);
const rightSideText = document.querySelectorAll(
  '.section__rightSide .section__text',
);
const leftSideText = document.querySelectorAll(
  '.section__leftSide .section__text',
);
const listTechnology = document.querySelectorAll(
  '.section__rightSide .section__listTechnology',
);
const contactText = document.querySelectorAll(
  '.section__rightSide .section__contact',
);
const itemsRightSide = [
  ...rightSideTitles,
  ...rightSideText,
  ...listTechnology,
  ...contactText,
];
const rightDimensions = itemsRightSide.map((item) => {
  const rect = item.getBoundingClientRect();
  const itemTopOffset = rect.top;

  return itemTopOffset;
});
const leftDimensions = [...leftSideTitles, ...leftSideText].map((item) => {
  const rect = item.getBoundingClientRect();
  const itemTopOffset = rect.top;

  return itemTopOffset;
});
const screenHeight = window.innerHeight;
const animationNames = ['showTitleLeftSide', 'showTitleRightSide'];

const addShowAnimation = (item, animationName, dimensions) => {
  const howFarScroll = window.pageYOffset;

  if (howFarScroll >= dimensions - screenHeight * 0.5) {
    item.style.animation = `${animationName} ${animationValues}`;
  }
};

const showSection = () => {
  window.addEventListener('scroll', () => {
    [...leftSideTitles, ...leftSideText].map((item, index) => {
      addShowAnimation(item, animationNames[0], leftDimensions[index]);
    });

    itemsRightSide.map((item, index) => {
      addShowAnimation(item, animationNames[1], rightDimensions[index]);
    });
  });
};

export default showSection;
