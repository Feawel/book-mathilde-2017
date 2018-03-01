// src/componentqs/about/index.js
import MenuPanel from './panel'
import MenuLogo from './logo'
import MenuCloseProject from './closeProject'
import LogoAnimation from './logoAnimation'


const Menu = ({ openProject, projectAppear, toggleOpen, open, openAbout, currentMenu, closeProject, isMobile, project, setProject }) =>
  [
    <LogoAnimation open={open} key='animation' />,
    <MenuPanel key='panel' openProject={openProject} openAbout={openAbout} isMobile={isMobile} setProject={setProject} projectAppear={projectAppear} toggleOpen={toggleOpen} open={open} current={currentMenu} />,
    <MenuLogo key='logo' isMobile={isMobile} projectAppear={projectAppear} toggleOpen={toggleOpen} open={open} openAbout={openAbout} />,
    <MenuCloseProject key='close-project' project={project} closeProject={closeProject} projectAppear={projectAppear} openAbout={openAbout} isMobile={isMobile} />
  ]


export default Menu
