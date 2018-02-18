// src/components/app.js
import React from 'react'
import data from '../../data'
import Router from 'next/router'

// Components
import Menu from './menu'
import About from './about'
import Home from './home'
import throttle from 'lodash/throttle'
import Projects from './projects'
import InitialAnimation from './initialAnimation'
import {enableScroll, disableScroll} from '../utils/scroll'
import { getBackgroundResponsiveDirectory, isMobile } from '../utils/responsive'
import {getNextProjectKey, getPrevProjectKey, getProjectByKey, getIndexByProjectKey} from '../utils/project'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      preventUpdateProject: false,
      openMenu: false,
      backgroundDirectory: null,
      animating: false,
      openAbout: false,
      currentProject: 'typo',
      timeoutIds: [],
      backgroundSize: 'large',
      initialAnimation: false,
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
      },
      isMobile: false,
      ...props.initialState
    }

    this.onScrollMenu = this.onScrollMenu.bind(this)
    this.firstProjectAnimation = this.firstProjectAnimation.bind(this)
    this.secondProjectAnimation = this.secondProjectAnimation.bind(this)
    this.thirdProjectAnimation = this.thirdProjectAnimation.bind(this)
    this.updateProjectUp = this.updateProjectUp.bind(this)
    this.updateProjectDown = this.updateProjectDown.bind(this)
    this.updateProject = this.updateProject.bind(this)
    this.getInfosMaskAppear = this.getInfosMaskAppear.bind(this)
    this.displayTypoAnimation = this.displayTypoAnimation.bind(this)
    this.hideTypoAnimation = this.hideTypoAnimation.bind(this)
  }

  render () {
    const { openMenu, openAbout, currentProject, projectAppear, backgroundSize,
      infosAnimation, backgroundDirectory, bar1, bar2, bar3, bar4, bar5, bars,
      animating, openProjectAnimation, isMobile, initialAnimation } = this.state

    const project = getProjectByKey(currentProject)
    const content = projectAppear ? <Projects isMobile={isMobile} current={project} /> : null

    console.log('backgroundDirectory', backgroundDirectory)

    return [
      <InitialAnimation initialAnimation={initialAnimation} />,
      <div className='Preload_pictures'>
        {backgroundDirectory && data.projects.map(project =>
          <div style={{
            background: `url('/static/home-projects/background/${backgroundDirectory}/${project.key}.jpg') no-repeat -99999px -99999px`
          }} />
        )}
      </div>,
      <About
        key='about'
        isMobile={isMobile}
        toggleOpen={() => this.toggleOpenAbout()}
        open={openAbout}
        openMenu={openMenu} />,
      <Menu
        key='menu'
        isMobile={isMobile}
        projects={data.projects}
        project={project}
        currentMenu={getIndexByProjectKey(currentProject)}
        projectAppear={projectAppear}
        toggleOpen={() => this.toggleOpenMenu()}
        closeProject={() => this.closeProject()}
        setProject={project => this.setProject(project)}
        open={openMenu}
        openAbout={openAbout} />,
      <Home
        openProject={() => this.openProject()}
        closeProject={() => this.closeProject()}
        mask={this.getInfosMaskAppear()}
        bar1={bar1} bar2={bar2} bar3={bar3} bar4={bar4} bar5={bar5} bars={bars}
        projectAppear={projectAppear}
        backgroundSize={backgroundSize}
        isMobile={isMobile}
        animating={animating}
        updateProject={(e) => this.updateProject(e)}
        project={project}
        infosAnimation={infosAnimation}
        backgroundDirectory={backgroundDirectory}
        openProjectAnimation={openProjectAnimation}
        key='project' />,
      <div key='project-content' className={`Global_project_container ${openAbout ? 'Global_about_open' : ''}`}
        style={{display: projectAppear ? 'block' : 'none'}}>
        {content}
      </div>
    ]
  }

  componentWillMount() {
    if(this.props.launchTypoAnimation) {
      this.hideTypoAnimation()
      setTimeout(() => this.displayTypoAnimation(null, true), 0)
    }
  }

  componentDidMount() {
    this.setState({backgroundDirectory: getBackgroundResponsiveDirectory(), isMobile: isMobile()})
    this.activateUpdateHomeProject()
    setTimeout(() => this.setState({initialAnimation: false}), 7000)
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.initialState) {
      this.setState({...this.state, ...nextProps.initialState})
    }
  }

  componentWillUnmount() {
    this.deactivateScrollMenu()
    this.deactivateUpdateHomeProject()
    const { timeoutIds } = this.state
    timeoutIds.forEach(timeoutId => clearTimeout(timeoutId))
  }

  onScrollMenu (e) {
    disableScroll()
    const {currentProject} = this.state
    if(e.deltaY > 0) {
      this.setState({
        currentProject: getNextProjectKey(currentProject)
      })
      setTimeout(() => enableScroll(), 800)
    } else {
      this.setState({
        currentProject: getPrevProjectKey(currentProject)
      })
      setTimeout(() => enableScroll(), 800)
    }
  }

  activateScrollMenu() {
    this.handleScrollMenu = throttle(this.onScrollMenu, 1000, {trailing: false});
    window.addEventListener('wheel', this.handleScrollMenu);
  }
  deactivateScrollMenu() {
    window.removeEventListener('wheel', this.handleScrollMenu);
  }

  toggleOpenMenu () {
    if(this.state.openMenu && this.state.isMobile) {
      this.activateUpdateHomeProject()
    } else if (this.state.openMenu) {
      this.deactivateScrollMenu()
      this.activateUpdateHomeProject()
    } else if (!this.state.openMenu && this.state.isMobile) {
      this.deactivateUpdateHomeProject()
    } else {
      this.activateScrollMenu()
      this.deactivateUpdateHomeProject()
    }


    this.setState({openMenu: !this.state.openMenu})
  }
  toggleOpenAbout () {
    const { openAbout, openMenu } = this.state
    if(openAbout) {
      this.activateUpdateHomeProject()
    } else  {
      this.deactivateUpdateHomeProject()
    }
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
        {pos: 0, alpha: maskAppear[0].alpha + 0.053},
        {pos: Math.max(maskAppear[1].pos - 0.015, 0), alpha: maskAppear[1].alpha + 0.053},
        {pos: 0.5, alpha: Math.max(maskAppear[2].alpha + 0.5, 0)},
        {pos: Math.min(maskAppear[3].pos + 0.015, 1), alpha: maskAppear[3].alpha + 0.053},
        {pos: 1, alpha: maskAppear[4].alpha + 0.053}
      ]
    })

    // Previous anim version
    // {pos: 0, alpha: maskAppear[0].alpha + 0.009},
    // {pos: Math.max(maskAppear[1].pos - 0.015, 0), alpha: maskAppear[1].alpha + 0.009},
    // {pos: 0.5, alpha: Math.max(maskAppear[2].alpha + 0.5, 0)},
    // {pos: Math.min(maskAppear[3].pos + 0.015, 1), alpha: maskAppear[3].alpha + 0.009},
    // {pos: 1, alpha: maskAppear[4].alpha + 0.009}
  }

  /******* RELATED TO PROJECT CHANGE ON HOME *********/

  openProject(){
    this.firstProjectAnimation()
    const { timeoutIds } = this.state
    timeoutIds.push(setTimeout(this.secondProjectAnimation, 400))
    this.setState({ timeoutIds })
    this.deactivateUpdateHomeProject()
  }

  closeProject() {
    this.activateUpdateHomeProject()
    this.setState({ projectAppear: false, backgroundSize: 'large' })
  }

  firstProjectAnimation() {
    this.setState({  backgroundSize: 'small', openProjectAnimation: true })
  }

  secondProjectAnimation() {
    this.setState({ backgroundSize: 'medium' }, this.thirdProjectAnimation)
  }

  thirdProjectAnimation() {
    // this.setState({ projectAppear: true, openProjectAnimation: false })
    const { currentProject } = this.state
    setTimeout(() => Router.push({ pathname: `/${currentProject}` }), 600)

  }

  deactivateUpdateHomeProject() {
    window.removeEventListener('wheel', this.updateWithDebounce)
  }

  activateUpdateHomeProject() {
    this.updateWithDebounce = throttle(this.updateProject, 500, { 'trailing': false });
    window.addEventListener('wheel', this.updateWithDebounce);

    this.updateDownWithDebounce = throttle(this.updateProjectDown, 500, { 'trailing': false });
    document.addEventListener('swiped-down', this.updateDownWithDebounce);

    this.updateUpWithDebounce = throttle(this.updateProjectUp, 500, { 'trailing': false });
    document.addEventListener('swiped-up', this.updateUpWithDebounce);
  }

  launchBarAnimation () {
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
  }

  hideTypoAnimation () {
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
    })
  }

  displayTypoAnimation (e, same) {
    const { currentProject: changingProject, infosAnimation } = this.state
    const currentProject = same
        ? changingProject
        : (e.deltaY > 0 ? getNextProjectKey(changingProject) : getPrevProjectKey(changingProject))

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
  }

  setProject(project) {
    this.setState({currentProject: project})
  }

  launchHomeContentAnimation (e, same = null) {
    this.hideTypoAnimation()
    setTimeout(() => {
      this.displayTypoAnimation(e, same)
    }, 1500)
  }

  updateProjectDown () {
    this.updateProject({deltaY: -1})
  }

  updateProjectUp () {
    this.updateProject({deltaY: 1})
  }

  updateProject (e) {
    const { animating, maskAppear, preventUpdateProject } = this.state
    if(!animating && maskAppear === null && !preventUpdateProject) {
      this.launchBarAnimation()

      this.launchHomeContentAnimation(e)
    }
  }
}

export default App
