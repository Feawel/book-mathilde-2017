// src/componentqs/about/index.js
import MenuPanel from './panel'
import MenuLogo from './logo'


const Menu = ({ toggleOpen, open, openAbout, projects, currentMenu }) =>
  [
    <MenuPanel key='panel' toggleOpen={() => toggleOpen()} open={open} projects={projects} current={currentMenu} />,
    <MenuLogo key='logo' toggleOpen={() => toggleOpen()} open={open} openAbout={openAbout} />
  ]


export default Menu
