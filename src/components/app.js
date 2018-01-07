// src/components/app.js
import React from 'react'
import data from '../../data'
// Components
import Menu from './menu'
import About from './about'
import HomeProject from './homeProjects'
import throttle from 'lodash/throttle'
import Projects from './projects'

import {enableScroll, disableScroll} from '../utils/scroll'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openMenu: false,
      currentMenu: 0,
      openAbout: false,
      currentProject: 0,
      timeoutId: null,
      backgroundSize: 'large',
      projectAppear: null
    }

    this.onScrollMenu = this.onScrollMenu.bind(this)
    this.firstProjectAnimation = this.firstProjectAnimation.bind(this)
    this.secondProjectAnimation = this.secondProjectAnimation.bind(this)
  }

  render () {
    const { openMenu, openAbout, currentMenu, currentProject, projectAppear, backgroundSize } = this.state
    const content = projectAppear ? <Projects current={currentProject} /> : null
    return [
      <About
        key='about'
        toggleOpen={() => this.toggleOpenAbout()}
        open={openAbout}
        openMenu={openMenu} />,
      <Menu
        key='menu'
        projects={data.projects}
        currentMenu={currentMenu}
        projectAppear={projectAppear}
        toggleOpen={() => this.toggleOpenMenu()}
        closeProject={() => this.closeProject()}
        open={openMenu}
        openAbout={openAbout} />,
      <HomeProject
        projectAppear={projectAppear}
        backgroundSize={backgroundSize}
        setCurrentProject={current => this.setCurrentProject(current)}
        openProject={current => this.openProject(current)}
        closeProject={() => this.closeProject()}
        key='project' />,
      <div key='project-content'
        style={{display: projectAppear ? 'none' : 'block', position: 'absolute', top: 0, left:0, width: '100%', height: '100%'}}>
        {content}
      </div>
    ]
  }

  componentDidMount() {
    this.handleScrollMenu = throttle(this.onScrollMenu, 500, { 'trailing': false });
    window.addEventListener('wheel', this.handleScrollMenu);
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleScrollMenu);
    clearTimeout(this.state.timeoutId)
  }

  onScrollMenu (e) {
    const {currentMenu} = this.state
    if(e.deltaY > 0) {
      this.setState({
        currentMenu: currentMenu === data.projects.length - 1 ? currentMenu : currentMenu + 1
      })
    } else {
      this.setState({
        currentMenu: currentMenu === 0 ? 0 : currentMenu - 1
      })
    }
  }

  openProject(){
    this.firstProjectAnimation()
    const timeoutId = setTimeout(this.secondProjectAnimation, 500)
    this.setState({ timeoutId })
  }

  firstProjectAnimation() {
    this.setState({  backgroundSize: 'small', projectAppear: true })
  }

  secondProjectAnimation() {
    this.setState({ backgroundSize: 'medium' })
  }

  closeProject() {
    this.setState({ projectAppear: false, backgroundSize: 'large' })
  }

  setCurrentProject(currentProject) {
    this.setState({ currentProject })
  }

  toggleOpenMenu () {
    this.setState({openMenu: !this.state.openMenu})
  }
  toggleOpenAbout () {
    const { openAbout, openMenu } = this.state
    this.setState({
      openAbout: !openAbout,
      openMenu: !openAbout ? false : openMenu
    })
  }
}

export default App
