import React from 'react'
import Lottie from 'react-lottie'
import * as animationData from '../..//static/data.json'

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
    if(!isMount)
      return <div />
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

    return <div className='Initial_animation'>
      <style jsx>{`
      .Initial_animation {
        width: 100%;
        height: 100%;
        background-color: #001732;
      }
    `}</style>
      <Lottie options={defaultOptions}
        height={400}
        width={400}
        isStopped={this.state.isStopped}
        isPaused={this.state.isPaused}/>
    </div>
  }
}
