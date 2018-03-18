// src/componentqs/projects/ornikar-campaign/printCom.js
import React from 'react'
import ReactDOM from 'react-dom'
import Number from '../common/number'
import DoubleIllustrations from '../common/doubleIllustrations'
import SectionInfos from '../common/sectionInfos'
import { TitleSecondary, Subtitle, SubtitlePart, Description } from '../common/texts'
import { getOrnikarResponsiveDirectory } from '../../../utils/responsive'

class PrintCom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {directory: null}
  }

  componentDidMount() {
    const {setSectionMetadata} = this.props
    setSectionMetadata({
      title: 'Print com.',
      icon: '/static/projects/menu/grey-com-print.png',
      activeIcon: '/static/projects/menu/ornikar-campaign-com-print.png',
      element: ReactDOM.findDOMNode(this)
    })
    this.setState({
      directory: getOrnikarResponsiveDirectory()
    })
  }

  render() {
    const {isMobile} = this.props
    const {directory} = this.state
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
        {sections.map((section, i) => <Section isMobile={isMobile} section={section} key={i} directory={directory} />)}
      </div>
    )
  }
}

const sections = [
  {
    title: 'FLYER FOR THE HIGWAY CODE',
    subtitle: 'The first offer of the company',
    description: 'I made a flyer announcing the launch of an offer dedicated to the Highway Code.<br/>The target for those flyers is young people between 18 and 25 years old. The promise is to pass the highway code quickly, without constraints, and at a lower cost. Baseline is "Get your highway code for 49,90€."',
    picture1: 'PART2-flyer1',
    picture1Extension: 'jpg',
    picture2: 'PART2-flyer1-carre1',
    picture2Extension: 'jpg',
    picture3: 'PART2-flyer1-carre2',
    picture3Extension: 'jpg'
  },
  {
    title: 'INFOGRAPHIC FOR HELP CANDIDATES',
    subtitle: 'Print and web work',
    description: 'To help candidates who have subscribed to the highway code offer from Ornikar, I realized a graphic explaining to the customers the nine steps to pass his highay code as « independant » candidates.This infographic is available online in long version, and a more succinct poster is sent to candidates with their « Get started » kit.',
    picture1: 'PART2-infographic',
    picture1Extension: 'png',
    picture2: 'PART2-infographic-carre1',
    picture2Extension: 'jpg',
    picture3: 'PART2-infographic-carre2',
    picture3Extension: 'jpg'
  },
  {
    title: 'FLYER FOR THE DRIVING LICENCE',
    subtitle: 'The second offer of the company',
    description: 'I made this flyer as part of a communication campaign offering promotions for driving registration.',
    picture1: 'PART2-flyer2',
    picture1Extension: 'png',
    picture2: 'PART2-flyer2-carre1',
    picture2Extension: 'jpg',
    picture3: 'PART2-flyer2-carre2',
    picture3Extension: 'jpg'
  }
]



const Section = ({section, directory, isMobile}) =>
  <div className='Section'>
    <style jsx>{`
      .Section {
        position: relative;
        margin: auto;
        width: 100%;
      }
      .Pictures {
        position: relative;
        margin: auto;
      }
      .Picture_block {
        width: 100%;
      }
      .Picture_inline {
        display: inline-block;
        width: calc(50% - 10px);
      }
      .H_separator {
        width: 100%;
        height: 16px;
      }
      .V_separator {
        display: inline-block;
        width: 20px;
        height: 100%;
      }
      .Picture_1 {
        width: 100%;
      }
      .Picture_2, .Picture_3 {
        width: calc(50% - 10px);
      }
      @media screen and (max-width: 750px) {
        .Picture_2, .Picture_3 {
          width: 100%;
          display: block;
        }
        .V_separator {
          display: block;
          width: 100%;
          height: 10px;
        }
        .H_separator {
          height: 10px;
        }
      }
    `}</style>
    <Subtitle
      content={section.title}
      style={{color: '#0d2d40', textAlign: 'center', fontSize: 21, letterSpacing: '1.05px', margin: `${isMobile ? 40 : 80}px auto 20px auto`}} />
    <SubtitlePart
      content={section.subtitle}
      style={{color: '#a5aab6', textAlign: 'center', fontSize: 16, margin: '0 auto 20px auto'}} />
    <Description
      content={section.description}
      style={{color: '#375e71', lineHeight: '28px', fontSize: 16, textAlign: isMobile ? 'center' : 'left', width: isMobile ? 300 : 435, margin: `0 auto ${isMobile ? 40 : 80}px auto`}} />
    <div className='Pictures'>
      <img className='Picture_1' src={`/static/projects/ornikar-campaign/2-print-com/${directory}/${section.picture1}.${section.picture1Extension}`} />
      <div className='H_separator' />
      <img className='Picture_2' src={`/static/projects/ornikar-campaign/2-print-com/${directory}/${section.picture2}.${section.picture2Extension}`} />
      <div className='V_separator' />
      <img className='Picture_3' src={`/static/projects/ornikar-campaign/2-print-com/${directory}/${section.picture3}.${section.picture3Extension}`} />
    </div>
  </div>

export default PrintCom
