import React from 'react'

// Components
import Social from './social'
import ScrollDown from './scrollDown'
import Infos from './infos'
import Wrapper from './wrapper'
import Background from './background'

import Lines from '../columns'

// Static data
import data from '../../../data'

// Utils
import { debounce } from '../../utils/debounce'
import { getBackgroundResponsiveDirectory } from '../../utils/responsive'

class HomeProjects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
      frames: data.animations.switchProjects.frames,
      opacityFrames: data.animations.switchProjects.opacityFrames,
      maskFrames: data.animations.switchProjects.maskFrames,
      backgroundDirectory: null,
      width: 1,
      opacity: 0.5,
      animating: false,
      textTop: 0,
      lineWidth: 40,
      draw: null,
      maskWidth: '20%',
      bar1: false,
      bar2: false,
      bar3: false,
      bar4: false,
      bar5: false,
      bars: false,
      backgroundPos: null,
      maskDisappear: [
        {pos: 0, alpha: 1},
        {pos: 0.5, alpha: 1},
        {pos: 0.5, alpha: 1},
        {pos: 0.5, alpha: 1},
        {pos: 1, alpha: 1}
      ],
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

    this.updateProject = this.updateProject.bind(this)
  }

  componentDidMount = () => {
    this.activateUpdateHomeProject()
    this.setState({backgroundDirectory: getBackgroundResponsiveDirectory()})
  }

  componentWillUnmount = () =>
    this.deactivateUpdateHomeProject()

  render () {
    const { current, width, opacity, textTop, lineWidth, draw, maskWidth, animating,
      bar1, bar2, bar3, bar4, bar5, backgroundPos, infosAnimation, bars,
      backgroundDirectory } = this.state
    const { projectAppear, backgroundSize, openProject } = this.props

    const project = data.projects[current]

    const mask = this.getInfosMaskAppear()

    if(!backgroundDirectory) return <div />

    return (
      <Wrapper >
        <style jsx>{`
          .Background_wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          .Background {
            width: 100%;
            height: 100%;
            background-size: cover;

          }
          .Background.small {
            height: 300px;
          }

          .Bars {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
          }
          .Bar {
            width: 20%;
            background-color: #001732;
            height: 0;
            -webkit-transition      : all 1s  ;
            -moz-transition       : all 1s  ;
            -ms-transition        : all 1s  ;
            -o-transition         : all 1s  ;
            transition          : all 1s  ;
            position: absolute;
            bottom: 0;
          }

          .Bar_1 { left: 0; }
          .Bar_2 { left: 20%; }
          .Bar_3 { left: 40%; }
          .Bar_4 { left: 60%; }
          .Bar_5 { left: 80%; }

          .Bar.active { height: 100%; }
        `}</style>
        <Lines  />
        {!projectAppear && <ScrollDown move={animating} onClick={() => this.updateWithDebounce()} />}
        {!projectAppear && <Social />}
        <div className='Background_wrapper'>
          <div className={`Background transitions ${projectAppear ? 'small' : ''}`}
            style={{backgroundImage: `url('/static/home-projects/background/${backgroundDirectory}/${project.key}.jpg')`, ...this.getBackgroundStyle(backgroundSize)}} />
        </div>
        {projectAppear && <div style={{color: 'white', position: 'relative', top: 200, left: 200, zIndex:100, width: 200}} onClick={() => this.closeProject()}>FERMER</div>}
        <div style={{zIndex: bars ? 9 : 0}} className='Bars'>
          <div className={`Bar Bar_1 ${bar1 ? 'active' : ''}`} />
          <div className={`Bar Bar_2 ${bar2 ? 'active' : ''}`} />
          <div className={`Bar Bar_3 ${bar3 ? 'active' : ''}`} />
          <div className={`Bar Bar_4 ${bar4 ? 'active' : ''}`} />
          <div className={`Bar Bar_5 ${bar5 ? 'active' : ''}`} />
        </div>
        {!projectAppear && <Infos infosAnimation={infosAnimation} mask={mask} openProject={() => this.openProject()} top={textTop} draw={draw} lineWidth={lineWidth} {...project}/>}
      </Wrapper>
    )
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

  getBackgroundStyle(size) {
    switch(size) {
      case 'large':
        return {height: '100%', width:'100%', position: 'relative', top: 0, left: 0, transition: 'all .5s'}
      case 'medium':
        return {height: '70%', width:'100%', position: 'relative', left: 0, top: 0, transition: 'all 2s'}
      case 'small':
        return {height: '70%', width:'80%', position: 'relative', left: '10%', top: 100, transition: 'all .5s'}
    }
  }

  openProject() {
    this.props.openProject()
    this.deactivateUpdateHomeProject()
  }

  closeProject() {
    this.activateUpdateHomeProject()
    this.props.closeProject()
  }

  updateProject () {
    if(!this.state.animating) {

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
        opacity: 0.5,
        width: 1,
        animating: true,
        textTop: 100,
        lineWidth: 0,
        draw: false,
        infosAnimation: {
          number: 'Global_disappear',
          line: 'Global_disappear',
          title: 'Global_disappear',
          baseline: 'Global_disappear',
          tags: 'Global_disappear',
          call: 'Global_disappear'
        }
      }, () => setTimeout(() => {
        const current = this.nextProject(this.state.current)
        this.setState({
          current,
          animating: false,
          textTop: 0,
          lineWidth: 40,
          draw: true,
          maskAppear: [
            {pos: 0, alpha: 0},
            {pos: 0.5, alpha: 0},
            {pos: 0.5, alpha: 0},
            {pos: 0.5, alpha: 0},
            {pos: 1, alpha: 0}
          ],
          infosAnimation: {
            ...this.state.infosAnimation,
            line: 'Global_disappear Global_width_0'
          }
        })
        this.props.setCurrentProject(current)
        setTimeout(() => this.setState({infosAnimation: {...this.state.infosAnimation, title: ''}}), 500)
        setTimeout(() => {
          const intervalId = setInterval(() => this.appearByMask(), 50)
          this.setState({ intervalId })
          setTimeout(() => {
            clearInterval(this.state.intervalId)
            this.setState({maskAppear: null})
          }, 2000)
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

  deactivateUpdateHomeProject() {
    window.removeEventListener('wheel', this.updateWithDebounce)
  }

  activateUpdateHomeProject() {
    this.updateWithDebounce = debounce(this.updateProject, 500, true)
    window.addEventListener('wheel', this.updateWithDebounce)
  }

  nextProject(current) {
    if(current === data.projects.length) {
      return 0
    } else {
      return current+1
    }
  }

}

export default HomeProjects
