import React from 'react'

import Summary from '../common/summary'
import Menu from '../common/menu'
import Footer from '../common/footer'
import Lines from '../common/lines'
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
    const {section, sections} = this.state
    const {isMobile, project} = this.props
    return (
      <div id='project' className='Global_project'>
        <Lines />
        <Summary project={project} />
        <Menu sections={sections} section={section} project={project} color='#8061e7' borderImage='linear-gradient(to left, #5d1bb0 0%, #4dd0ff 100%)' />
        <VisualIdentity
          isMobile={isMobile}
          setSectionMetadata={(metadata) => this.setSectionMetadata(0, metadata)} />
        <UserInterface
          isMobile={isMobile}
          setSectionMetadata={(metadata) => this.setSectionMetadata(1, metadata)} />
        <VideoGames
          isMobile={isMobile}
          setSectionMetadata={(metadata) => this.setSectionMetadata(2, metadata)} />
        <Illustrations
          isMobile={isMobile}
          setSectionMetadata={(metadata) => this.setSectionMetadata(3, metadata)} />
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
