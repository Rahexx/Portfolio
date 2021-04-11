const root = document.documentElement;
const animationValue = '.5s linear forwards';

const addProperlyAppAnimation = (image) => {
  const screenWidth = window.innerWidth;

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

const incScaleAnimation = (image, multipleBy = 4.75) => {
  const rect = image.getBoundingClientRect();
  const imageTopOffset = rect.top;
  const howFarScroll = window.pageYOffset;

  if (howFarScroll - imageTopOffset === 0 && multipleBy === 1) {
    addProperlyProfileAnimation(image);
  } else if (howFarScroll >= imageTopOffset * multipleBy) {
    addProperlyAppAnimation(image);
  }
};

const showImages = () => {
  const profileImage = document.querySelector('.section__profileImage');
  const appImages = document.querySelectorAll('.section__appImage');

  window.addEventListener('scroll', () => {
    const screenWidth = window.innerWidth;

    [profileImage, ...appImages].map((item, index) => {
      if (index === 0) {
        incScaleAnimation(item, 1);
      } else {
        incScaleAnimation(item);
      }
    });
  });
};

export default showImages;
