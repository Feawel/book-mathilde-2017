import React from 'react'

import Summary from '../common/summary'
import Menu from '../common/menu'
import Footer from '../common/footer'
import Lines from '../common/lines'

import VisualIdentity from './visualIdentity'
import PrintCom from './printCom'
import DigitalCom from './digitalCom'

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
        <Menu sections={sections} section={section} project={project} color={project.colors.primary} borderImage='linear-gradient(to left, #da3c41 0%, #ffd678 100%)' />
        <VisualIdentity
          isMobile={isMobile}
          setSectionMetadata={(metadata) => this.setSectionMetadata(0, metadata)} />
        <PrintCom
          isMobile={isMobile}
          setSectionMetadata={(metadata) => this.setSectionMetadata(1, metadata)} />
        <DigitalCom
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
