const profileImage = document.querySelector('.section__profileImage');
const appImages = document.querySelectorAll('.section__appImage');
const allImages = [profileImage, ...appImages];
const dimensions = [...allImages].map((item) => {
  const rect = item.getBoundingClientRect();
  const itemTopOffset = rect.top;

  return itemTopOffset;
});
const root = document.documentElement;
const animationValue = '.5s linear forwards';
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

const addProperlyAppAnimation = (image) => {
  if (screenWidth < 550) {
    image.style.animation = `showAppImageSmall ${animationValue}`;
  } else if (screenWidth < 1024) {
    image.style.animation = `showAppImageLarge ${animationValue}`;
  } else if (screenWidth >= 1024) {
    image.style.animation = `showAppImageExtraLarge ${animationValue}`;
  }
};

const addProperlyProfileAnimation = (image) => {
  const screenWidth = window.innerWidth;

  if (screenWidth < 1600) {
    image.style.animation = `showProfileImage ${animationValue}`;
  } else if (screenWidth >= 1600) {
    image.style.animation = `showProfileImageExtraLarge ${animationValue}`;
  }
};

const incScaleAnimation = (image, dimension, multipleBy = 4.75) => {
  const howFarScroll = window.pageYOffset;

  if (howFarScroll >= dimension - screenHeight * 0.6 && multipleBy === 1) {
    addProperlyProfileAnimation(image);
  } else if (howFarScroll >= dimension - screenHeight * 0.6) {
    addProperlyAppAnimation(image);
  }
};

const showImages = () => {
  window.addEventListener('scroll', () => {
    allImages.map((item, index) => {
      if (index === 0) {
        incScaleAnimation(item, dimensions[index], 1);
      } else {
        incScaleAnimation(item, dimensions[index]);
      }
    });
  });
};

export default showImages;
