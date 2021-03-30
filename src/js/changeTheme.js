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
const skillIcons = document.querySelectorAll('.section__skillIcon');
const bgIcons = document.querySelectorAll('.header__iconBg');
const skillCssIcon = skillIcons[0];
const skillBootstrapIcon = skillIcons[1];
const skillGitIcon = skillIcons[2];
const skillHtmlIcon = skillIcons[3];
const skillJsIcon = skillIcons[4];
const skillReactIcon = skillIcons[5];
const skillSassIcon = skillIcons[6];
const skillWebpackIcon = skillIcons[7];
const skillStyledComponentsIcon = skillIcons[8];
const bgCssIcon = bgIcons[0];
const bgBootstrapIcon = bgIcons[1];
const bgGitIcon = bgIcons[2];
const bgHtmlIcon = bgIcons[3];
const bgJsIcon = bgIcons[4];
const bgReactIcon = bgIcons[5];
const bgSassIcon = bgIcons[6];
const bgWebpackIcon = bgIcons[7];
const bgStyledComponentsIcon = bgIcons[8];

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
  bgCssIcon.src = cssWhite;
  skillBootstrapIcon.src = bootstrapWhite;
  bgBootstrapIcon.src = bootstrapWhite;
  skillGitIcon.src = gitWhite;
  bgGitIcon.src = gitWhite;
  skillHtmlIcon.src = htmlWhite;
  bgHtmlIcon.src = htmlWhite;
  skillJsIcon.src = jsWhite;
  bgJsIcon.src = jsWhite;
  skillReactIcon.src = reactWhite;
  bgReactIcon.src = reactWhite;
  skillSassIcon.src = sassWhite;
  bgSassIcon.src = sassWhite;
  skillWebpackIcon.src = webpackWhite;
  bgWebpackIcon.src = webpackWhite;
  skillStyledComponentsIcon.src = styledComponentsWhite;
  bgStyledComponentsIcon.src = styledComponentsWhite;
};

const setLightTheme = () => {
  root.style.setProperty('--color-bg', '#9ccaec');
  root.style.setProperty('--color-nav', '#6abefc');
  root.style.setProperty('--color-text', '#000000');
  root.style.setProperty('--color-footerBefore', 'rgba(0, 0, 0, 0.3)');
  root.style.setProperty('--color-footerInfo', 'rgba(0, 0, 0, 0.3)');

  skillCssIcon.src = cssHeader;
  bgCssIcon.src = cssHeader;
  skillBootstrapIcon.src = bootstrapHeader;
  bgBootstrapIcon.src = bootstrapHeader;
  skillGitIcon.src = gitHeader;
  bgGitIcon.src = gitHeader;
  skillHtmlIcon.src = htmlHeader;
  bgHtmlIcon.src = htmlHeader;
  skillJsIcon.src = jsHeader;
  bgJsIcon.src = jsHeader;
  skillReactIcon.src = reactHeader;
  bgReactIcon.src = reactHeader;
  skillSassIcon.src = sassHeader;
  bgSassIcon.src = sassHeader;
  skillWebpackIcon.src = webpackHeader;
  bgWebpackIcon.src = webpackHeader;
  skillStyledComponentsIcon.src = styledComponentsHeader;
  bgStyledComponentsIcon.src = styledComponentsHeader;
};

const changeTheme = () => {
  const themePanel = document.querySelector('.nav__themeMode');
  const themeCircle = document.querySelector('.nav__themeCircle');

  themePanel.addEventListener('click', () => {
    const themePanelWidth = themePanel.offsetWidth;
    const themeCircleWidth = themeCircle.offsetWidth;
    const screenWidth = window.innerWidth;
    const movePx = screenWidth < 1024 ? 9 : 0;

    if (theme.active === theme.lightTheme) {
      theme.active = theme.darkTheme;
      themeCircle.style.transform = `translateX(${
        themePanelWidth - 4 - themeCircleWidth * 2 + movePx
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
