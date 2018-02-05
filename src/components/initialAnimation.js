import React from 'react'
import * as animationData from '../../static/data.json'
import dynamic from 'next/dynamic'

const Lottie = dynamic(import('react-lottie'), {
  ssr: false
})

export default class InitialAnimation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isStopped: false, isPaused: false};
  }

  componentDidMount() {
    this.setState({isMount: true})
  }

  render() {

    const {isMount} = this.state
    if (!isMount) return null;
    const {initialAnimation} = this.props

    const buttonStyle = {
      display: 'block',
      margin: '10px auto'
    };

    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: animationData,
      // rendererSettings: {
      //   preserveAspectRatio: 'xMidYMid slice'
      // }
    };

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
        top: 50px;
      }
    `}</style>
      <div className='Anim_wrapper'>
        <Lottie options={defaultOptions} height={400} width={400} isStopped={this.state.isStopped} isPaused={this.state.isPaused}/>
      </div>
    </div>
  }
}
