// src/componentqs/about/index.js
import MenuPanel from './panel'
import MenuLogo from './logo'
import MenuCloseProject from './closeProject'


const Menu = ({ projectAppear, toggleOpen, open, openAbout, projects, currentMenu, closeProject }) =>
  [
    <MenuPanel key='panel' projectAppear={projectAppear} toggleOpen={() => toggleOpen()} open={open} projects={projects} current={currentMenu} />,
    <MenuLogo key='logo' projectAppear={projectAppear} toggleOpen={() => toggleOpen()} open={open} openAbout={openAbout} />,
    <MenuCloseProject key='close-project' closeProject={closeProject} projectAppear={projectAppear} />
  ]


export default Menu
