import React from 'react'
import * as animationData from '../../static/data.json'
import dynamic from 'next/dynamic'

const Lottie = dynamic(import('react-lottie'), {
  ssr: false
})

export default class InitialAnimation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isStopped: false,
      isPaused: false,
      percent: 0,
      percentColorR: 145,
      percentColorG: 28,
      percentColorB: 142,
      // endColor: 'rgb(97,218,255)',
      animationDuration: 7000,
      animationStep: 100
    }
    this.load = this.load.bind(this)
  }

  componentDidMount() {
    const {animationStep} = this.state
    const intervalId = setInterval(this.load, animationStep)
    this.setState({intervalId, isMount: true})
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  load() {
    this.setState({
      percentColorR: Math.max(97, this.state.percentColorR - (145 - 97)/(this.state.animationDuration/this.state.animationStep)),
      percentColorG: Math.min(218, this.state.percentColorG + (218 - 28)/(this.state.animationDuration/this.state.animationStep)),
      percentColorB: Math.min(255, this.state.percentColorB + (255 - 142)/(this.state.animationDuration/this.state.animationStep)),
      percent: Math.min(100, this.state.percent + this.state.animationDuration/(this.state.animationStep*40))
    })
    if(percent === 100) clearInterval(this.state.intervalId)
  }

  render() {

    const {isMount, percent, percentColorR, percentColorG, percentColorB} = this.state
    if (!isMount) return null
    const {initialAnimation} = this.props
    // const initialAnimation = true
    const buttonStyle = {
      display: 'block',
      margin: '10px auto'
    }

    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: animationData,
      // rendererSettings: {
      //   preserveAspectRatio: 'xMidYMid slice'
      // }
    }

    return <div className='Initial_animation transitions'>
      <style jsx>{`
      .Initial_animation {
        width: 100%;
        height: ${initialAnimation ? '100%' : 0};
        background-color: #001732;
        z-index: 1000;
      }
      .Anim_wrapper {
        position: relative;
        top: calc(50% - 195px);
        height: 390px;
        opacity: ${initialAnimation ? 1 : 0}
      }
      .Infos {
        margin: auto;
        text-align: center;
        position: absolute;
        bottom: 60px;
        width: 100%;
        opacity: ${initialAnimation ? 1 : 0}
      }
      .Loader {
        font-size: 20px;
        line-height: 22px;
      }
      .Credits {
        font-size: 10px;
        letter-spacing: 1px;
        color: white;
        opacity: 0.4;
        position: relative;
        top: 20px;
      }
    `}</style>
      <div className='Anim_wrapper'>
        <Lottie options={defaultOptions} height={400} width={400} isStopped={this.state.isStopped} isPaused={this.state.isPaused}/>
      </div>
      <div className='Infos'>
        <div className='Loader playfairdisplay_black' style={{
          color: `rgb(${percentColorR.toFixed(0)}, ${percentColorG.toFixed(0)}, ${percentColorB.toFixed(0)})`
        }}>Loading {percent.toFixed(0)}%</div>
        <div className='Credits futuralt_bold'>MAT SERRA - ARTISTIC DIRECTOR</div>
      </div>
    </div>
  }
}
