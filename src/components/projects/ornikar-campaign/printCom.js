// src/componentqs/projects/ornikar-campaign/printCom.js
import React from 'react'
import ReactDOM from 'react-dom'
import Number from '../common/number'
import DoubleIllustrations from '../common/doubleIllustrations'
import SectionInfos from '../common/sectionInfos'
import { TitleSecondary, SubtitlePart, Description } from '../common/texts'


class PrintCom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const {setSectionMetadata} = this.props
    setSectionMetadata({
      title: 'Print com.',
      icon: '/static/projects/menu/grey-com-print.png',
      activeIcon: '/static/projects/menu/ornikar-campaign-com-print.png',
      element: ReactDOM.findDOMNode(this)
    })
  }

  render() {
    const {isMobile} = this.props
    return (
      <div className='Print_com'>
       <style jsx>{`
          .Print_com {
            width: 100%;
            margin: auto;
            overflow: hidden;
            position: relative;
          }
        `}</style>
        <Number
          content='02'
          color='#0d2d40'
          responsivePicto='/static/projects/ornikar-campaign/2-print-com/picto-com-print.png'
          borderBackground='linear-gradient(to left, #da3c41 0%, #ffd678 100%)' />
        <DoubleIllustrations
            main={{width: 462, src: '/static/projects/ornikar-campaign/2-print-com/picto-com-print.png'}}
            second={{width: 1001, src: '/static/projects/ornikar-campaign/2-print-com/picto-com-print.png'}}
            location={{bottom: 150, right: 160}}
            mobileLocation={{top: -800, right: -215}} />
        <SectionInfos
          isMobile={isMobile}
          marginTop={195}
          title={{content: 'Print com.', color: '#0d2d40'}}
          baseline={{content: 'CONVERT AND BUILDING CUSTOMER LOYALTY', color: '#a7acb8'}}
          description={{color: '#474f6f', content: "Print communication is used both to make the brand and services known during leafleting operations, and as a means of offering qualitative gifts to users."}}
          />
      </div>
    )
  }
}

export default PrintCom
