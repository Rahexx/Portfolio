const initalScrollTop = () => {
  const goTop = document.querySelector('.goTop');

  const scrollTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  goTop.addEventListener('click', scrollTop);
};

export default initalScrollTop;
