// src/componentqs/about/index.js
import AboutPanel from './panel'
import AboutLogo from './logo'

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  render () {
    const { open } = this.state
    return [
      <AboutPanel key='panel' toggleOpen={() => this.toggleOpen()} open={open} />,
      <AboutLogo key='logo' toggleOpen={() => this.toggleOpen()} />
    ]
  }

  toggleOpen () {
    console.log('toggle open ')
    this.setState({open: !this.state.open})
  }
}

export default About
