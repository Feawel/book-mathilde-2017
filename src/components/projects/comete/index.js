import React from 'react'

import data from '../../../../data'

import Summary from '../common/summary'
import Menu from '../common/menu'
import Footer from '../common/footer'
import VisualIdentity from './visualIdentity'
import UserInterface from './userInterface'
import VideoGames from './videoGames'
import Illustrations from './illustrations'

class Comete extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      section: 0,
      sections: []
    }
  }

  render() {
    const {project, section, sections} = this.state
    return (
      <div className='Project Comete'>
        <Summary project={data.projects[1]} />
        <Menu sections={sections} section={section} project={data.projects[1]} />
        <VisualIdentity
          setSectionMetadata={(metadata) => this.setSectionMetadata(0, metadata)} />
        <UserInterface
          setSectionMetadata={(metadata) => this.setSectionMetadata(1, metadata)} />
        <VideoGames
          setSectionMetadata={(metadata) => this.setSectionMetadata(2, metadata)} />
        <Illustrations
          setSectionMetadata={(metadata) => this.setSectionMetadata(3, metadata)} />
        <Footer project={data.projects[1]}/>
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
