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
      maskWidth: '20%'
    }

    this.updateProject = this.updateProject.bind(this)
  }

  componentDidMount = () => {
    this.updateWithDebounce = debounce(this.updateProject, 500, true)
    window.addEventListener('wheel', this.updateWithDebounce)
  }

  componentWillUnmount = () =>
    window.removeEventListener('wheel', this.updateWithDebounce)

  render () {
    const { current, width, opacity, textTop, lineWidth, draw, maskWidth, animating } = this.state
    const project = data.projects[current%2]
    return (
      <Wrapper >
        <Lines  />
        <ScrollDown move={animating} onClick={() => this.updateWithDebounce()} />
        <Social />
        {/*<Background hide={current !== 0} {...data.projects[0].picture} />
        <Background hide={current !== 1} {...data.projects[1].picture} />*/}
        <Infos top={textTop} draw={draw} lineWidth={lineWidth} {...project}/>
        <BackgroundMask animating={animating} current={current} maskWidth={maskWidth} picture1={data.projects[0].picture} picture2={data.projects[1].picture} />
      </Wrapper>
    )
  }

  updateProject () {
    if(!this.state.animating) {
      this.setState({
        opacity: 0.5,
        width: 1,
        animating: true,
        textTop: 100,
        lineWidth: 0,
        draw: false
      }, () => setTimeout(() => this.setState({
        current: this.state.current === 0 ? 1 : 0,
        animating: false,
        textTop: 0,
        lineWidth: 40,
        draw: true
      }), 1500))

    }
  }

}

export default HomeProjects
