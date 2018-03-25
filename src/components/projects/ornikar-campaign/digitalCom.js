// src/componentqs/projects/ornikar-campaign/DigitalCom.js
import React from 'react'
import ReactDOM from 'react-dom'
import Number from '../common/number'
import DoubleIllustrations from '../common/doubleIllustrations'
import SectionInfos from '../common/sectionInfos'
import { TitleSecondary, Subtitle, SubtitlePart, Description } from '../common/texts'
import { getOrnikarResponsiveDirectory } from '../../../utils/responsive'


const section = {
  picture1: 'PART3-illu-equipe',
  picture1Extension: 'jpg',
  picture2: 'PART3-carrer1',
  picture2Extension: 'jpg',
  picture3: 'PART3-carrer2',
  picture3Extension: 'jpg'
}

const section2 = {
  picture2: 'PART3-mail-carrer1',
  picture2Extension: 'jpg',
  picture3: 'PART3-mail-carrer2',
  picture3Extension: 'jpg'
}

class DigitalCom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      directory: null
    }
  }

  componentDidMount() {
    const {setSectionMetadata} = this.props
    setSectionMetadata({
      title: 'Digital com.',
      icon: '/static/projects/menu/grey-com-digital.png',
      activeIcon: '/static/projects/menu/ornikar-campaign-com-digital.png',
      element: ReactDOM.findDOMNode(this)
    })
    this.setState({
      directory: getOrnikarResponsiveDirectory()
    })
  }

  render() {
    const {isMobile} = this.props
    const {directory} = this.state
    if(!directory) return <div />
    return (
      <div className='Digital_com'>
       <style jsx>{`
          .Digital_com {
            width: 100%;
            margin: auto;
            overflow: hidden;
            position: relative;
          }
        `}</style>
        <Number
          content='03'
          color='#0d2d40'
          responsivePicto='/static/projects/ornikar-campaign/3-digital-com/picto-com-digital.png'
          borderBackground='linear-gradient(to left, #da3c41 0%, #ffd678 100%)' />
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
        <SectionText
          isMobile={isMobile}
          title='illustrations for the website'
          subtitle='Brighten up the interface'
          description='I made a series of illustrations for several pages of their showcase site: the first page for the team, the second for the company, and finally articles to answer the most popular questions.' />
        <WebsiteIllustrations isMobile={isMobile} />
        <SectionPictures section={section} directory={directory} />
        <SectionText
          isMobile={isMobile}
          title='Illustrations for an e-mail'
          subtitle='Invitations at the new office'
          description='I realized illustrations for the mail sent to the closest employees of the company announcing the launch of the main offer, the relocation of the company in the city of Nantes, and the invitation for the kick off in the new office !' />
        <OrangeSection isMobile={isMobile} />
        <SectionPictures section={section2} directory={directory} />
      </div>
    )
  }
}

const WebsiteIllustrations = ({isMobile}) =>
  <div className='Website_illustrations'>
    <style jsx>{`
      .Website_illustrations {
        position: relative;
        margin: auto;
        width: 100%;
        height: 2948px;
      }
      .Background_illustration_1 {
        width: 100%;
        height: 600px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        background-image: url('/static/projects/ornikar-campaign/3-digital-com/PART3-illu-web-3000.png')
      }
      .Blue_zone {
        width: 100%;
        height: 2349px;
        background: #79ccd8;
        position: relative;
      }
      .Device_desktop {
        width: 1020px;
        position: relative;
        display: block;
        margin: auto;
        top: -350px;
      }
      .Device_mobile { display: none; }
      .Mockups {
        width: 1020px;
        margin: auto;
        position: relative;
        top: -390px;
      }
      .Mockup, .Picto {
        position: absolute;
      }
      .Picto {
        z-index: 0;
      }
      .Mockup {
        width: 640px;
        box-shadow: 5px 5px 30px 0px rgba(0,0,0,0.4);
        z-index: 3;
      }
      .Mockup_1 {
        top: 0;
        left: 0;
      }
      .Mockup_2 {
        top: 710px;
        left: 380px;
      }
      .Mockup_3 {
        top: 1440px;
        left: 0;
      }
      .Picto_1 {
        width: 624px;
        top: 0;
        right: -80px;
      }
      .Picto_2 {
        width: 390px;
        top: 1100px;
        left: 0;
      }
      .Picto_3 {
        width: 473px;
        top: 1724px;
        right: -80px;
      }
      @media screen and (max-width: 2000px) {
        .Background_illustration_1 {
          background-image: url('/static/projects/ornikar-campaign/3-digital-com/PART3-illu-web-2000.png')
        }
      }
      @media screen and (max-width: 1200px) {
        .Background_illustration_1 {
          background-image: url('/static/projects/ornikar-campaign/3-digital-com/PART3-illu-web-1200.png')
        }
      }
      @media screen and (max-width: 750px) {
        .Website_illustrations {
          height: 2190px;
          overflow: hidden;
        }
        .Blue_zone {
          height: 1835px;
        }
        .Background_illustration_1 {
          height: 360px;
          background-image: url('/static/projects/ornikar-campaign/3-digital-com/SMART_PART3-illu-web.png')
        }
        .Device_desktop { display: none; }
        .Device_mobile {
          display: block;
          margin: auto;
          width: 310px;
          position: relative;
          top: -200px;
        }
        .Picto {
          display: none;
        }
        .Mockups {
          width: 100%;
          text-align: center;
          top: -140px;
        }
        .Mockup {
          width: 310px;
          display: block;
          position: relative;
          margin: auto;
          margin-bottom: 40px;
          top: 0;
          left: 0;
          box-shadow: 5px 5px 20px 0px rgba(0,0,0,0.4);
        }
      }
    `}</style>
    <div className='Background_illustration_1' />
    <div className='Blue_zone'>
      <img src='/static/projects/ornikar-campaign/3-digital-com/PART3-ordi.png' className='Device_desktop' />
      <img src='/static/projects/ornikar-campaign/3-digital-com/SMART_Smartphone.png' className='Device_mobile' />
      <div className='Mockups'>
        <img src={`/static/projects/ornikar-campaign/3-digital-com/PART3-page-equipe-${isMobile ? 640 : 1280}.jpg`} className='Mockup Mockup_1' />
        <img src={`/static/projects/ornikar-campaign/3-digital-com/PART3-page-entreprise-${isMobile ? 640 : 1280}.jpg`} className='Mockup Mockup_2' />
        <img src={`/static/projects/ornikar-campaign/3-digital-com/PART3-page-article-${isMobile ? 640 : 1280}.jpg`} className='Mockup Mockup_3' />
        <img src='/static/projects/ornikar-campaign/3-digital-com/PART3-illu-panneaux.png' className='Picto Picto_1' />
        <img src='/static/projects/ornikar-campaign/3-digital-com/PART3-illu-nuage.png' className='Picto Picto_2' />
        <img src='/static/projects/ornikar-campaign/3-digital-com/PART3-illu-bulles.png' className='Picto Picto_3' />
      </div>
    </div>
  </div>

const OrangeSection = () =>
  <div className='Orange_section'>
    <style jsx>{`
      .Orange_section {
        position: relative;
        margin: auto;
        width: 100%;
        background-color: #ffbb66;
        height: 1361px;
        z-index: -1;
      }
      .Top_border {
        background-image: url('/static/projects/ornikar-campaign/3-digital-com/bordure-orange_3000.png');
        background-size: contain;
        background-repeat: no-repeat;
        height: 28px;
        width: 100%;
        position: absolute;
        top: -8px;
        left: 0;
      }
      .Background_illu {
        width: 1280px;
        height: 1020px;
        background-image: url('/static/projects/ornikar-campaign/3-digital-com/PART3-illu-fond-mail.png');
        background-size: contain;
        background-repeat: no-repeat;
        z-index: 3;
        position: absolute;
        top: 50px;
        z-index: 3;
        left: calc(50% - 640px);
      }
      .Main {
        position: relative;
        width: 720px;
        display: block;
        margin: auto;
        top: 155px;
        z-index: 4;
        box-shadow: 5px 5px 25px 0px rgba(0,0,0,0.25);
      }
      @media screen and (max-width: 2000px) {
        .Top_border {
          background-image: url('/static/projects/ornikar-campaign/3-digital-com/bordure-orange_2000.png');
        }
      }
      @media screen and (max-width: 1200px) {
        .Top_border {
          background-image: url('/static/projects/ornikar-campaign/3-digital-com/bordure-orange_1200.png');
        }
      }
      @media screen and (max-width: 750px) {
        .Orange_section {
          height: 548px;
        }
        .Background_illu { display: none; }
        .Main {
          width: 310px;
          top: 40px;
        }
      }
    `}</style>
    <div className='Top_border' />
    <div className='Background_illu' />
    <img className='Main' alt='lancement heures de conduite' src='/static/projects/ornikar-campaign/3-digital-com/PART3-mail-1440.jpg' />
  </div>

const SectionText = ({title, subtitle, description, isMobile}) =>
  <div className='SectionText'>
    <style jsx>{`
      .SectionText {
        position: relative;
        margin: auto;
        width: 100%;
      }
    `}</style>
    <Subtitle
      content={title}
      style={{color: '#0d2d40', textAlign: 'center', fontSize: 21, width: isMobile ? 300 : 500, letterSpacing: 1.05, margin: `${isMobile ? 40 : 80}px auto 20px auto`}} />
    <SubtitlePart
      content={subtitle}
      style={{color: '#a5aab6', textAlign: 'center', fontSize: 16, width: isMobile ? 300 : 500, margin: '0 auto 20px auto'}} />
    <Description
      content={description}
      style={{color: '#375e71', lineHeight: '28px', fontSize: 16, textAlign: 'center', width: isMobile ? 300 : 435, margin: `0 auto ${isMobile ? 40 : 80}px auto`}} />
  </div>

const SectionPictures = ({section, directory}) =>
  <div className='Section'>
    <style jsx>{`
      .Section {
        position: relative;
        margin: auto;
        width: 100%;
        z-index: 5;
      }
      .Pictures {
        position: relative;
        margin: auto;
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
    <div className='Pictures'>
      {section.picture1 && <img className='Picture_1' src={`/static/projects/ornikar-campaign/3-digital-com/${directory}/${section.picture1}.${section.picture1Extension}`} />}
      {section.picture1 && <div className='H_separator' />}
      <img className='Picture_2' src={`/static/projects/ornikar-campaign/3-digital-com/${directory}/${section.picture2}.${section.picture2Extension}`} />
      <div className='V_separator' />
      <img className='Picture_3' src={`/static/projects/ornikar-campaign/3-digital-com/${directory}/${section.picture3}.${section.picture3Extension}`} />
    </div>
  </div>

export default DigitalCom
