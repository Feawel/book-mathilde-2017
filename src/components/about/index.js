// src/componentqs/about/index.js
import AboutPanel from './panel'
import AboutLogo from './logo'

const About = ({ toggleOpen, open, openMenu, isMobile }) =>
  [
    <AboutPanel key='panel' toggleOpen={() => toggleOpen()} open={open} />,
    <AboutLogo key='logo' isMobile={isMobile} toggleOpen={() => toggleOpen()} open={open} openMenu={openMenu} />
  ]

export default About
