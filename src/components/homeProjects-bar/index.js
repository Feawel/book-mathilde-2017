import React from 'react'

// Components
import Social from './social'
import ScrollDown from './scrollDown'
import Infos from './infos'
import Wrapper from './wrapper'
import Background from './background'

import Lines from '../columns'
import BackgroundMask from '../animations/backgroundMask'

// Static data
import data from '../../../data'

// Utils
import { debounce } from '../../utils/debounce'

class HomeProjects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
      frames: data.animations.switchProjects.frames,
      opacityFrames: data.animations.switchProjects.opacityFrames,
      maskFrames: data.animations.switchProjects.maskFrames,
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
      backgroundPos: null
    }

    this.updateProject = this.updateProject.bind(this)
  }

  componentDidMount = () => {
    this.updateWithDebounce = debounce(this.updateProject, 500, true)
    window.addEventListener('wheel', this.updateWithDebounce)

    // setInterval(() => {
    //   const x = Math.round(Math.random()*30)
    //   const xDir = Math.round(Math.random()) === 0

    //   const y = Math.floor(Math.random()*30)
    //   const yDir = Math.round(Math.random()) === 0
    //   this.setState({ backgroundPos: {x, y, xDir, yDir}})
    // }, 500)
  }

  componentWillUnmount = () =>
    window.removeEventListener('wheel', this.updateWithDebounce)

  render () {
    const { current, width, opacity, textTop, lineWidth, draw, maskWidth, animating,
      bar1, bar2, bar3, bar4, bar5,
      backgroundPos } = this.state
    const project = data.projects[current%2]

    const backgroundPositionX = backgroundPos ? `calc(0px ${backgroundPos.xDir === 0 ? '+' : '-'} ${backgroundPos.x}px)` : 0
    const backgroundPositionY = backgroundPos ? `calc(0px ${backgroundPos.yDir === 0 ? '+' : '-'} ${backgroundPos.y}px)` : 0

    return (
      <Wrapper >
        <style jsx>{`
          .Background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
          }

          .Bars {
            width: 100%;
            z-index: 100;
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
        <ScrollDown move={animating} onClick={() => this.updateWithDebounce()} />
        <Social />
        {/*<Background hide={current !== 0} {...data.projects[0].picture} />
        <Background hide={current !== 1} {...data.projects[1].picture} />*/}
        <div style={{backgroundImage: `url('${project.picture.src}')`, backgroundPosition: `${backgroundPositionX} ${backgroundPositionY}`}}
          className='Background' />
        <div className='Bars'>
          <div className={`Bar Bar_1 ${bar1 ? 'active' : ''}`} />
          <div className={`Bar Bar_2 ${bar2 ? 'active' : ''}`} />
          <div className={`Bar Bar_3 ${bar3 ? 'active' : ''}`} />
          <div className={`Bar Bar_4 ${bar4 ? 'active' : ''}`} />
          <div className={`Bar Bar_5 ${bar5 ? 'active' : ''}`} />
        </div>
        <Infos top={textTop} draw={draw} lineWidth={lineWidth} {...project}/>
      </Wrapper>
    )
  }

  updateProject () {
    if(!this.state.animating) {
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
      this.setState({
        opacity: 0.5,
        width: 1,
        animating: true,
        textTop: 100,
        lineWidth: 0,
        draw: false
      }, () => setTimeout(() => {
        this.setState({
          current: this.state.current === 0 ? 1 : 0,
          animating: false,
          textTop: 0,
          lineWidth: 40,
          draw: true
        })
      }, 1500))
    }
  }

}

export default HomeProjects
