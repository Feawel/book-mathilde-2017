import React from 'react'

import data from '../../../../data'

import Summary from '../common/summary'
import Menu from '../common/menu'
import Footer from '../common/footer'

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
    const project = data.projects[3]
    return (
      <div className='Global_project Comete'>
        <Summary project={project} />
        <Menu sections={sections} section={section} project={project} color='#fb5e80' borderImage='linear-gradient(to left, #f04372 0%, #ffd69c 100%)' />
        <UserInterface
          setSectionMetadata={(metadata) => this.setSectionMetadata(0, metadata)} />
        <UserExperience
          setSectionMetadata={(metadata) => this.setSectionMetadata(1, metadata)} />
        <Illustration
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
