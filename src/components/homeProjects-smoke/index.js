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
        <style jsx>{`
          .Background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-image: url('${project.picture.src}')
          }
        `}</style>
        <Lines  />
        <ScrollDown move={animating} onClick={() => this.updateWithDebounce()} />
        <Social />
        {/*<Background hide={current !== 0} {...data.projects[0].picture} />
        <Background hide={current !== 1} {...data.projects[1].picture} />*/}
        <Infos top={textTop} draw={draw} lineWidth={lineWidth} {...project}/>
        <div className='Background' />
      </Wrapper>
    )
  }

  updateProject () {
    if(!this.state.animating) {
      setTimeout(function() {
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
      }.bind(this), 1000)

      var canvas = document.getElementById('canvas')
      var ctx = canvas.getContext('2d')
      canvas.width = 1500
      canvas.height = 1500

      var party = window.smokemachine(ctx, [255, 255, 255])

      var vCount = 0

      setInterval(function() {
        party.start()

        if(vCount < 14) {
          party.addsmoke(vCount*100,100,30)
          party.addsmoke(vCount*100,200,30)
          party.addsmoke(vCount*100,300,30)
          party.addsmoke(vCount*100,400,30)
          party.addsmoke(vCount*100,500,30)
          party.addsmoke(vCount*100,600,30)
          party.addsmoke(vCount*100,700,30)
          party.addsmoke(vCount*100,800,30)

          vCount++
        } else {
          canvas.width = 0
          canvas.height = 0
        }
      }, 100)

      //   setTimeout(function(){
      //     party.start()

      //     party.addsmoke(120,100,200)
      //     party.addsmoke(120,200,200)
      //     party.addsmoke(120,300,200)
      //     party.addsmoke(120,400,200)
      //     party.addsmoke(120,500,200)
      //     party.addsmoke(120,600,200)
      //     party.addsmoke(120,700,200)
      //     party.addsmoke(120,800,200)
      //     setTimeout(function(){
      //       party.start()
      //     }, 1000)
      //   },1000)


    }
  }

}

export default HomeProjects
