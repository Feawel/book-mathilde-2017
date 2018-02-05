import React from 'react'
import Lottie from 'react-lottie'
import * as animationData from '../..//static/data.json'

export default class LottieControl extends React.Component {

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

    return <div>
      <Lottie options={defaultOptions}
              height={400}
              width={400}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}/>
      <button style={buttonStyle} onClick={() => this.setState({isStopped: true})}>stop</button>
      <button style={buttonStyle} onClick={() => this.setState({isStopped: false})}>play</button>
      <button style={buttonStyle} onClick={() => this.setState({isPaused: !this.state.isPaused})}>pause</button>
    </div>
  }
}
