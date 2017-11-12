// src/componentqs/about/index.js
import AboutPanel from './panel'
import AboutLogo from './logo'

const About = ({ toggleOpen, open, openMenu }) =>
  [
    <AboutPanel key='panel' toggleOpen={() => toggleOpen()} open={open} />,
    <AboutLogo key='logo' toggleOpen={() => toggleOpen()} open={open} openMenu={openMenu} />
  ]

export default About
