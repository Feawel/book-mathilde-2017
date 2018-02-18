import React from 'react'
import * as animationData from '../../static/data.json'
import dynamic from 'next/dynamic'
import Lines from './columns'

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
      animationStep: 100,
      bars: true,
      bar1: true,
      bar2: true,
      bar3: true,
      bar4: true,
      bar5: true,
      display: null
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
    const percent = Math.min(100, this.state.percent + this.state.animationDuration/(this.state.animationStep*50))
    this.setState({
      percentColorR: Math.max(97, this.state.percentColorR - (145 - 97)/(this.state.animationDuration/this.state.animationStep)),
      percentColorG: Math.min(218, this.state.percentColorG + (218 - 28)/(this.state.animationDuration/this.state.animationStep)),
      percentColorB: Math.min(255, this.state.percentColorB + (255 - 142)/(this.state.animationDuration/this.state.animationStep)),
      percent
    })
    if(percent === 100) {
      setTimeout(() => this.setState({ bar1: false }), 100)
      setTimeout(() => this.setState({ bar2: false }), 200)
      setTimeout(() => this.setState({ bar3: false }), 300)
      setTimeout(() => this.setState({ bar4: false }), 400)
      setTimeout(() => this.setState({ bar5: false }), 500)
      setTimeout(() => this.setState({ display: 'none' }), 2000)
      clearInterval(this.state.intervalId)
    }
  }

  render() {

    const {isMount, percent, percentColorR, percentColorG, percentColorB,
      bars, bar1, bar2, bar3, bar4, bar5, display} = this.state
    if (!isMount) return null
    const {initialAnimation} = this.props
  console.log(bars, bar1, bar2, bar3, bar4, bar5)
    const buttonStyle = {
      display: 'block',
      margin: '10px auto'
    }

    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: animationData
    }

    return <div style={{display}} className='Initial_animation transitions'>
      <style jsx>{`
      .Initial_animation {
        width: 100%;
        height: 100%;
        z-index: 1000;
        position: fixed;
      }
      .Anim_wrapper {
        position: relative;
        top: calc(50% - 195px);
        height: 390px;
        z-index: 10;
        opacity: ${initialAnimation ? 1 : 0}
      }
      .Infos {
        margin: auto;
        text-align: center;
        position: absolute;
        bottom: 60px;
        width: 100%;
        opacity: ${initialAnimation ? 1 : 0}
        z-index: 10;
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

      @media screen and (max-width: 1000px) {
        .Bar { width: 25%; }
        .Bar_1 { left: 0; }
        .Bar_2 { left: 25%; }
        .Bar_3 { left: 50%; }
        .Bar_4 { left: 75%; }
        .Bar_5 { display: none; }
      }
      @media screen and (max-width: 750px) {
        .Bar { width: 33.3%; }
        .Bar_1 { left: 0; }
        .Bar_2 { left: 33.3%; }
        .Bar_3 { left: 66.6%; }
        .Bar_4 { display: none; }
        .Bar_5 { display: none; }
      }
    `}</style>
      <Lines  />
      <div style={{zIndex: bars ? 9 : 0}} className='Bars'>
        <div className={`Bar Bar_1 ${bar1 ? 'active' : ''}`} />
        <div className={`Bar Bar_2 ${bar2 ? 'active' : ''}`} />
        <div className={`Bar Bar_3 ${bar3 ? 'active' : ''}`} />
        <div className={`Bar Bar_4 ${bar4 ? 'active' : ''}`} />
        <div className={`Bar Bar_5 ${bar5 ? 'active' : ''}`} />
      </div>
      <div className='Anim_wrapper transitions'>
        <Lottie options={defaultOptions} height={400} width={400} isStopped={this.state.isStopped} isPaused={this.state.isPaused}/>
      </div>
      <div className='Infos transitions'>
        <div className='Loader playfairdisplay_black' style={{
          color: `rgb(${percentColorR.toFixed(0)}, ${percentColorG.toFixed(0)}, ${percentColorB.toFixed(0)})`
        }}>Loading {percent.toFixed(0)}%</div>
        <div className='Credits futuralt_bold'>MAT SERRA - ARTISTIC DIRECTOR</div>
      </div>
    </div>
  }
}
