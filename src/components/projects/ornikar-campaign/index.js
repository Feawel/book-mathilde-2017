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
        <Menu sections={sections} section={section} project={project} color='#00b3df' borderImage='linear-gradient(to left, #008db9 0%, #6ad7d9 100%)' />
        <VisualIdentity
          isMobile={isMobile}
          setSectionMetadata={(metadata) => this.setSectionMetadata(0, metadata)} />
        <PrintCom
          isMobile={isMobile}
          setSectionMetadata={(metadata) => this.setSectionMetadata(1, metadata)} />
        <DigitalCom
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
