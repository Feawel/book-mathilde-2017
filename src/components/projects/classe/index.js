import React from 'react'

import Summary from '../common/summary'
import Menu from '../common/menu'
import Footer from '../common/footer'
import Lines from '../common/lines'

import UserExperience from './userExperience'
import UserInterface from './userInterface'
import Illustration from './illustration'

class Comete extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      section: 0,
      sections: []
    }
  }

  render() {
    const {section, sections} = this.state
    const {isMobile, project} = this.props
    return (
      <div id='project' className='Global_project'>
        <Lines />
        <Summary project={project} />
        <Menu sections={sections} section={section} project={project} color='#fb5e80' borderImage='linear-gradient(to left, #f04372 0%, #ffd69c 100%)' />
        <UserInterface
          isMobile={isMobile}
          setSectionMetadata={(metadata) => this.setSectionMetadata(0, metadata)} />
        <UserExperience
          isMobile={isMobile}
          setSectionMetadata={(metadata) => this.setSectionMetadata(1, metadata)} />
        <Illustration
          isMobile={isMobile}
          setSectionMetadata={(metadata) => this.setSectionMetadata(2, metadata)} />
        <Footer project={project}/>
      </div>
    )
  }

  setSectionMetadata(key, metadata) {
    const {sections} = this.state
    sections[key] = metadata
    this.setState({sections: sections})
  }

  changeSection(section) {
    this.setState({section})
  }

}

export default Comete
