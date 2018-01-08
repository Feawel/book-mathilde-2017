// src/components/app.js
import React from 'react'
import data from '../../data'
// Components
import Menu from './menu'
import About from './about'
import HomeProject from './home'
import throttle from 'lodash/throttle'
import Projects from './projects'

import {enableScroll, disableScroll} from '../utils/scroll'
import { getBackgroundResponsiveDirectory } from '../utils/responsive'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openMenu: false,
      backgroundDirectory: null,
      animating: false,
      currentMenu: 0,
      openAbout: false,
      currentProject: 0,
      timeoutIds: [],
      backgroundSize: 'large',
      projectAppear: null,
      bar1: false,
      bar2: false,
      bar3: false,
      bar4: false,
      bar5: false,
      bars: false,
      maskAppear: null,
      infosAnimation: {
        number: '',
        line: '',
        title: '',
        baseline: '',
        tags: '',
        call: ''
      }
    }

    this.onScrollMenu = this.onScrollMenu.bind(this)
    this.firstProjectAnimation = this.firstProjectAnimation.bind(this)
    this.secondProjectAnimation = this.secondProjectAnimation.bind(this)
    this.thirdProjectAnimation = this.thirdProjectAnimation.bind(this)
    this.updateProject = this.updateProject.bind(this)
    this.getInfosMaskAppear = this.getInfosMaskAppear.bind(this)
  }

  render () {
    const { openMenu, openAbout, currentMenu, currentProject, projectAppear, backgroundSize,
      infosAnimation, backgroundDirectory, bar1, bar2, bar3, bar4, bar5, bars,
      animating, openProjectAnimation } = this.state
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
        openProject={() => this.openProject()}
        closeProject={() => this.closeProject()}
        mask={this.getInfosMaskAppear()}
        bar1={bar1} bar2={bar2} bar3={bar3} bar4={bar4} bar5={bar5} bars={bars}
        projectAppear={projectAppear}
        backgroundSize={backgroundSize}
        animating={animating}
        current={currentProject}
        infosAnimation={infosAnimation}
        backgroundDirectory={backgroundDirectory}
        openProjectAnimation={openProjectAnimation}
        key='project' />,
      <div key='project-content' className='Global_project_container'
        style={{display: projectAppear ? 'block' : 'none'}}>
        {content}
      </div>
    ]
  }

  componentDidMount() {
    this.handleScrollMenu = throttle(this.onScrollMenu, 500, { 'trailing': false });
    window.addEventListener('wheel', this.handleScrollMenu);
    this.setState({backgroundDirectory: getBackgroundResponsiveDirectory()})
    this.activateUpdateHomeProject()
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleScrollMenu);
    this.deactivateUpdateHomeProject()
    const { timeoutIds } = this.state
    timeoutIds.forEach(timeoutId => clearTimeout(timeoutId))
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

  getInfosMaskAppear() {
    const { maskAppear } = this.state
    if(!maskAppear) return ''
    return `-webkit-gradient(
      linear,
      left center, right center,
      color-stop(${maskAppear[0].pos},  rgba(0,0,0,${maskAppear[0].alpha})),
      color-stop(${maskAppear[1].pos},  rgba(0,0,0,${maskAppear[1].alpha})),
      color-stop(${maskAppear[2].pos},  rgba(0,0,0,${maskAppear[2].alpha})),
      color-stop(${maskAppear[3].pos},  rgba(0,0,0,${maskAppear[3].alpha})),
      color-stop(${maskAppear[4].pos},  rgba(0,0,0,${maskAppear[4].alpha}))
    )`
  }

  appearByMask() {
    const { maskAppear } = this.state
    if(!maskAppear) return null
    this.setState({
      maskAppear: [
        {pos: 0, alpha: maskAppear[0].alpha + 0.009},
        {pos: Math.max(maskAppear[1].pos - 0.015, 0), alpha: maskAppear[1].alpha + 0.009},
        {pos: 0.5, alpha: Math.max(maskAppear[2].alpha + 0.5, 0)},
        {pos: Math.min(maskAppear[3].pos + 0.015, 1), alpha: maskAppear[3].alpha + 0.009},
        {pos: 1, alpha: maskAppear[4].alpha + 0.009}
      ]
    })
  }

  /******* RELATED TO PROJECT CHANGE ON HOME *********/
  nextProject(current) {
    if(current === data.projects.length) {
      return 0
    } else {
      return current+1
    }
  }

  prevProject(current) {
    if(current === 0) {
      return data.projects.length - 1
    } else {
      return current-1
    }
  }

  openProject(){
    this.firstProjectAnimation()
    const { timeoutIds } = this.state
    timeoutIds.push(setTimeout(this.secondProjectAnimation, 620))
    this.setState({ timeoutIds })
    this.deactivateUpdateHomeProject()
  }

  closeProject() {
    this.activateUpdateHomeProject()
    this.setState({ projectAppear: false, backgroundSize: 'large' })
  }

  firstProjectAnimation() {
    this.setState({  backgroundSize: 'small', openProjectAnimation: true },)
  }

  secondProjectAnimation() {
    this.setState({ backgroundSize: 'medium' }, this.thirdProjectAnimation)
  }

  thirdProjectAnimation() {
    this.setState({ projectAppear: true, openProjectAnimation: false })
  }

  deactivateUpdateHomeProject() {
    window.removeEventListener('wheel', this.updateWithDebounce)
  }

  activateUpdateHomeProject() {
    this.updateWithDebounce = throttle(this.updateProject, 500, { 'trailing': false });
    window.addEventListener('wheel', this.updateWithDebounce);
  }

  updateProject (e) {
    const { animating, maskAppear, currentProject: changingProject, infosAnimation } = this.state
    if(!animating && maskAppear === null) {

      /***** BARS RELATED ANIMATIONS *****/
      this.setState({bars: true})
      setTimeout(() => this.setState({ bar1: true }), 100)
      setTimeout(() => this.setState({ bar2: true }), 200)
      setTimeout(() => this.setState({ bar3: true }), 300)
      setTimeout(() => this.setState({ bar4: true }), 400)
      setTimeout(() => this.setState({ bar5: true }), 500)
      setTimeout(() => this.setState({ bar1: false }), 1600)
      setTimeout(() => this.setState({ bar2: false }), 1700)
      setTimeout(() => this.setState({ bar3: false }), 1800)
      setTimeout(() => this.setState({ bar4: false }), 1900)
      setTimeout(() => this.setState({ bar5: false }), 2000)
      setTimeout(() => this.setState({ bars: false }), 3000)
      /*********************************/


      this.setState({
        animating: true,
        infosAnimation: {
          number: 'Global_disappear',
          line: 'Global_disappear',
          title: 'Global_disappear',
          baseline: 'Global_disappear',
          tags: 'Global_disappear',
          call: 'Global_disappear'
        }
      }, () => setTimeout(() => {
        const currentProject = e.deltaY > 0
          ? this.nextProject(changingProject)
          : this.prevProject(changingProject)

        this.setState({
          currentProject,
          animating: false,
          maskAppear: [
            {pos: 0, alpha: 0},
            {pos: 0.5, alpha: 0},
            {pos: 0.5, alpha: 0},
            {pos: 0.5, alpha: 0},
            {pos: 1, alpha: 0}
          ],
          infosAnimation: {
            ...infosAnimation,
            line: 'Global_disappear Global_width_0'
          }
        })
        setTimeout(() => this.setState({infosAnimation: {...infosAnimation, title: ''}}), 500)
        setTimeout(() => {
          const intervalId = setInterval(() => this.appearByMask(), 50)
          this.setState({ intervalId })
          setTimeout(() => {
            clearInterval(this.state.intervalId)
            this.setState({maskAppear: null})
          }, 1000)
        }, 800)
        setTimeout(() => this.setState({
          infosAnimation: {
            number: '',
            line: '',
            title: '',
            baseline: '',
            tags: '',
            call: ''
          }}), 1200)
      }, 1500))
    }
  }
}

export default App
