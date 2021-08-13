export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'About Me',
  headline: 'Bronson Perez',
  description:
    'I am a full stack developer who loves combining the frictionless design features of a UI/UX front end and the data in the back end. I recently earned a certificate in full stack development from UCI, and only a drop of my pool of knowledge consists of JavaScript, React.js, and MongoDB. I have worked on teams to make the best user experience possible and have a modern design as well. My passion is to use my skills to build software/websites for the people.',
  buttonLabel: 'Checkout My Linkedin',
  imgStart: false,
  img: require('../../images/gutsremove.png'),
  alt: 'guts',
  dark: true,
  primary: true,
  darkText: false,
  direction: 'https://www.linkedin.com/in/bronson-perez/'
}

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Projects',
  // headline: 'Login to your account at any time',
  // description:
  //   'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.',
  buttonLabel: 'Learn More',
  imgStart: true,
  // img: require('../../images/svg-2.svg'),
  // alt: 'Piggybank',
  dark: false,
  primary: false,
  darkText: true
}

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'My Resume',
  headline: 'Click the button to download my resume',
  // description:
  //   'Click the "Download" button to download my resume.',
  buttonLabel: 'Download',
  imgStart: false,
  img: require('../../images/resume.png'),
  alt: 'Papers',
  dark: false,
  primary: false,
  darkText: true,
  direction: './BronsonPerezResume(1).pdf'
}
