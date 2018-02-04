import React from 'react'

import data from '../../../../data'

import Summary from '../common/summary'
import Menu from '../common/menu'
import Footer from '../common/footer'
import Lines from '../common/lines'

import UserExperience from './userExperience'
import UserInterface from './userInterface'

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
    const {isMobile} = this.props
    const project = data.projects[0]
    return (
      <div id='project' className='Global_project'>
        <Lines />
        <Summary project={project} />
        <Menu sections={sections} section={section} project={project} color='#00b3df' borderImage='linear-gradient(to left, #008db9 0%, #6ad7d9 100%)' />
        <UserExperience
          isMobile={isMobile}
          setSectionMetadata={(metadata) => this.setSectionMetadata(0, metadata)} />
        <UserInterface
          isMobile={isMobile}
          setSectionMetadata={(metadata) => this.setSectionMetadata(1, metadata)} />
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
