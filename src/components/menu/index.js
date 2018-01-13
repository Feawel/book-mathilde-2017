// src/componentqs/about/index.js
import MenuPanel from './panel'
import MenuLogo from './logo'
import MenuCloseProject from './closeProject'


const Menu = ({ projectAppear, toggleOpen, open, openAbout, currentMenu, closeProject, project }) =>
  [
    <MenuPanel key='panel' projectAppear={projectAppear} toggleOpen={() => toggleOpen()} open={open} current={currentMenu} />,
    <MenuLogo key='logo' projectAppear={projectAppear} toggleOpen={() => toggleOpen()} open={open} openAbout={openAbout} />,
    <MenuCloseProject key='close-project' project={project} closeProject={closeProject} projectAppear={projectAppear} />
  ]


export default Menu
