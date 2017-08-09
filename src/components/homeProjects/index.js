import React from 'react'

// Components
import Social from './social'
import Menu from './menu'
import ScrollDown from './scrollDown'
import Infos from './infos'
import Wrapper from './wrapper'
import Background from './background'
import Call from './call'
import About from '../about'
import Lines from '../columns'

// Static data
import data from '../../../data'

// Utils
import { debounce } from '../../utils/debounce'

class HomeProjects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
      index: 0,
      frames: data.animations.switchProjects.frames,
      opacityFrames: data.animations.switchProjects.opacityFrames,
      width: 1,
      opacity: 0.5,
      animating: false
    }

    this.updateProject = this.updateProject.bind(this)
  }

  componentDidMount = () => {
    this.updateWithDebounce = debounce(this.updateProject, 500, true)
    window.addEventListener('mousewheel', this.updateWithDebounce)
  }

  componentWillUnmount = () =>
    window.removeEventListener('mousewheel', this.updateWithDebounce)

  render () {
    const { current, width, opacity } = this.state
    const project = data.projects[current%2]

    return <Wrapper>
      <Lines width={width} opacity={opacity} />
      <About />
      <Menu />
      <ScrollDown onClick={() => this.updateWithDebounce()} />
      <Social />
      <Background hide={current !== 0} {...data.projects[0].picture} />
      <Background hide={current !== 1} {...data.projects[1].picture} />
      <Infos {...project}/>
      <Call />
    </Wrapper>
  }

  updateProject () {
    if(!this.state.animating) {
      this.setState({
        index: 0,
        opacity: 0.5,
        width: 1,
        animating: true
      }, () => this.interval = setInterval(() => this.updateWidth(), 100))

    }
  }

  updateWidth = () => {
    const { index, opacity, frames, opacityFrames, current } = this.state

    if(frames[index]) {
      this.setState({
        width: frames[index],
        index: index+4,
        opacity: opacityFrames[index],
        current: index === (4+frames.length/2) ? (current ? 0 : 1) : current
      })
    } else {
      clearInterval(this.interval)
      this.setState({animating: false})
    }
  }
}

export default HomeProjects