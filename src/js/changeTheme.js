import cssWhite from '../assets/cssWhite.png';
import bootstrapWhite from '../assets/bootstrapWhite.png';
import gitWhite from '../assets/gitWhite.png';
import htmlWhite from '../assets/htmlWhite.png';
import jsWhite from '../assets/jsWhite.png';
import reactWhite from '../assets/reactWhite.png';
import sassWhite from '../assets/sassWhite.png';
import webpackWhite from '../assets/webpack.png';
import styledComponentsWhite from '../assets/styled-components.png';
import cssHeader from '../assets/cssHeader.png';
import bootstrapHeader from '../assets/bootstrapHeader.png';
import gitHeader from '../assets/gitHeader.png';
import htmlHeader from '../assets/htmlHeader.png';
import jsHeader from '../assets/jsHeader.png';
import reactHeader from '../assets/reactHeader.png';
import sassHeader from '../assets/sassHeader.png';
import webpackHeader from '../assets/webpackDark.png';
import styledComponentsHeader from '../assets/styled-componentsDark.png';

const root = document.documentElement;
const skillCssIcon = document.querySelector('.section__skillIcon:nth-child(1)');
const skillBootstrapIcon = document.querySelector(
  '.section__skillIcon:nth-child(2)',
);
const skillGitIcon = document.querySelector('.section__skillIcon:nth-child(3)');
const skillHtmlIcon = document.querySelector(
  '.section__skillIcon:nth-child(4)',
);
const skillJsIcon = document.querySelector('.section__skillIcon:nth-child(5)');
const skillReactIcon = document.querySelector(
  '.section__skillIcon:nth-child(6)',
);
const skillSassIcon = document.querySelector(
  '.section__skillIcon:nth-child(7)',
);
const skillWebpackIcon = document.querySelector(
  '.section__skillIcon:nth-child(8)',
);
const skillStyledComponentsIcon = document.querySelector(
  '.section__skillIcon:nth-child(9)',
);

const theme = {
  lightTheme: 'light',
  darkTheme: 'dark',
  active: 'light',
};

const setDarkTheme = () => {
  root.style.setProperty('--color-bg', '#14446B');
  root.style.setProperty('--color-nav', '#143A5A');
  root.style.setProperty('--color-text', '#ffffff');
  root.style.setProperty('--color-footerBefore', 'rgba(255, 255, 255, 0.3)');
  root.style.setProperty('--color-footerInfo', 'rgba(255, 255, 255, 0.6)');

  skillCssIcon.src = cssWhite;
  skillBootstrapIcon.src = bootstrapWhite;
  skillGitIcon.src = gitWhite;
  skillHtmlIcon.src = htmlWhite;
  skillJsIcon.src = jsWhite;
  skillReactIcon.src = reactWhite;
  skillSassIcon.src = sassWhite;
  skillWebpackIcon.src = webpackWhite;
  skillStyledComponentsIcon.src = styledComponentsWhite;
};

const setLightTheme = () => {
  root.style.setProperty('--color-bg', '#9ccaec');
  root.style.setProperty('--color-nav', '#6abefc');
  root.style.setProperty('--color-text', '#000000');
  root.style.setProperty('--color-footerBefore', 'rgba(0, 0, 0, 0.3)');
  root.style.setProperty('--color-footerInfo', 'rgba(0, 0, 0, 0.3)');

  skillCssIcon.src = cssHeader;
  skillBootstrapIcon.src = bootstrapHeader;
  skillGitIcon.src = gitHeader;
  skillHtmlIcon.src = htmlHeader;
  skillJsIcon.src = jsHeader;
  skillReactIcon.src = reactHeader;
  skillSassIcon.src = sassHeader;
  skillWebpackIcon.src = webpackHeader;
  skillStyledComponentsIcon.src = styledComponentsHeader;
};

const changeTheme = () => {
  const themePanel = document.querySelector('.nav__themeMode');
  const themeCircle = document.querySelector('.nav__themeCircle');
  const themePanelWidth = themePanel.offsetWidth;
  const themeCircleWidth = themeCircle.offsetWidth;

  themePanel.addEventListener('click', () => {
    if (theme.active === theme.lightTheme) {
      theme.active = theme.darkTheme;
      themeCircle.style.transform = `translateX(${
        themePanelWidth - 4 - themeCircleWidth * 1.66
      }px)`;
      setDarkTheme();
    } else {
      theme.active = theme.lightTheme;
      themeCircle.style.transform = 'translateX(0px)';
      setLightTheme();
    }
  });
};

export default changeTheme;
