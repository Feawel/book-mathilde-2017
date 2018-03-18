// src/componentqs/projects/ornikar-campaign/DigitalCom.js
import React from 'react'
import ReactDOM from 'react-dom'
import Number from '../common/number'
import DoubleIllustrations from '../common/doubleIllustrations'
import SectionInfos from '../common/sectionInfos'
import { TitleSecondary, SubtitlePart, Description } from '../common/texts'


class DigitalCom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const {setSectionMetadata} = this.props
    setSectionMetadata({
      title: 'Digital com.',
      icon: '/static/projects/menu/grey-com-digital.png',
      activeIcon: '/static/projects/menu/ornikar-campaign-com-digital.png',
      element: ReactDOM.findDOMNode(this)
    })
  }

  render() {
    const {isMobile} = this.props
    return (
      <div className='Visual_identity'>
       <style jsx>{`
          .Visual_identity {
            width: 100%;
            margin: auto;
            overflow: hidden;
            position: relative;
          }
        `}</style>
        <Number
          content='01'
          color='#221061'
          responsivePicto='/static/projects/ornikar-campaign/3-digital-com/picto-com-digital.png'
          borderBackground='linear-gradient(to left, #5d1bb0 0%, #4dd0ff 100%)' />
        <DoubleIllustrations
            main={{width: 462, src: '/static/projects/ornikar-campaign/3-digital-com/picto-com-digital.png'}}
            second={{width: 1001, src: '/static/projects/ornikar-campaign/3-digital-com/picto-com-digital.png'}}
            location={{bottom: 150, right: 160}}
            mobileLocation={{top: -800, right: -215}} />
        <SectionInfos
          isMobile={isMobile}
          marginTop={195}
          title={{content: 'Digital com.', color: '#0d2d40'}}
          baseline={{content: 'participate in the creation of a strong identity on the web', color: '#a7acb8'}}
          description={{color: '#474f6f', content: "Illustrations are used by the company on the website, emails or social networks to reinforce or brighten messages, and especially to install a recognizable visual identity."}}
          />
      </div>
    )
  }
}

export default DigitalCom
