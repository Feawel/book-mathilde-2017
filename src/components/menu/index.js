// src/componentqs/about/index.js
import MenuPanel from './panel'
import MenuLogo from './logo'
import MenuCloseProject from './closeProject'


const Menu = ({ projectAppear, toggleOpen, open, openAbout, currentMenu, closeProject, isMobile, project, setProject }) =>
  [
    <MenuPanel key='panel' setProject={setProject} projectAppear={projectAppear} toggleOpen={toggleOpen} open={open} current={currentMenu} />,
    <MenuLogo key='logo' isMobile={isMobile} projectAppear={projectAppear} toggleOpen={toggleOpen} open={open} openAbout={openAbout} />,
    <MenuCloseProject key='close-project' project={project} closeProject={closeProject} projectAppear={projectAppear} openAbout={openAbout} isMobile={isMobile} />
  ]


export default Menu
