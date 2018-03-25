// src/componentqs/projects/comete/visualIdentity.js
import React from 'react'
import ReactDOM from 'react-dom'
import Number from '../common/number'
import DoubleIllustrations from '../common/doubleIllustrations'
import SectionInfos from '../common/sectionInfos'
import { TitleSecondary, Subtitle, SubtitlePart, Description } from '../common/texts'


class VisualIdentity extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const {setSectionMetadata} = this.props
    setSectionMetadata({
      title: 'Visual identity',
      icon: '/static/projects/menu/grey-id.png',
      activeIcon: '/static/projects/menu/ornikar-campaign-ID.png',
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
          color='#0d2d40'
          responsivePicto='/static/projects/ornikar-campaign/1-visual-identity/picto-ID.png'
          borderBackground='linear-gradient(to left, #da3c41 0%, #ffd678 100%)' />
        <DoubleIllustrations
            main={{width: 462, src: '/static/projects/ornikar-campaign/1-visual-identity/picto-ID.png'}}
            second={{width: 1001, src: '/static/projects/ornikar-campaign/1-visual-identity/picto-ID.png'}}
            location={{bottom: 150, right: 160}}
            mobileLocation={{top: -800, right: -215}} />
        <SectionInfos
          isMobile={isMobile}
          marginTop={195}
          title={{content: 'Visual Identity', color: '#0d2d40'}}
          baseline={{content: 'define your way of speaking', color: '#a7acb8'}}
          description={{color: '#474f6f', content: "The company wants to stand out from the traditional driving schools by a communication which has to be full joy and energy, and close of its young audience."}}
          />
        <Tone isMobile={isMobile} />
        <Charter isMobile={isMobile} />
        <Print />
      </div>
    )
  }
}

const Tone = ({isMobile}) =>
  <div className='Tone'>
    <style jsx>{`
      .Tone {
        position: relative;
        margin: auto;
        width: 100%;
        margin-top: 100px;
      }
      .Background {
        width; 100%;
        height 529px;
        background-color: #0d2d40;
      }
      .Top_border {
        background-image: url('/static/projects/ornikar-campaign/1-visual-identity/bordure-grise_3000.png');
        background-size: contain;
        background-repeat: no-repeat;
        height: 270px;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
      .Bottom_border {
        background-image: url('/static/projects/ornikar-campaign/1-visual-identity/bordure-noire_3000.png');
        background-size: contain;
        background-repeat: no-repeat;
        height: 28px;
        width: 100%;
      }
      .Infos_wrapper {
        width: 1020px;
        position: absolute;
        top: 150px;
        left: calc(50% - 510px);
      }
      .Tone_typo {
        width: 403px;
        display: block;
      }
      .Tone_illustration {
        position: absolute;
        width: 500px;
        right: 0;
        top: -80px;
      }
      @media screen and (max-width: 2000px) {
        .Top_border {
          background-image: url('/static/projects/ornikar-campaign/1-visual-identity/bordure-grise_2000.png');
        }
        .Bottom_border {
          background-image: url('/static/projects/ornikar-campaign/1-visual-identity/bordure-noire_2000.png');
        }
      }
      @media screen and (max-width: 1200px) {
        .Top_border {
          background-image: url('/static/projects/ornikar-campaign/1-visual-identity/bordure-grise_1200.png');
        }
        .Bottom_border {
          background-image: url('/static/projects/ornikar-campaign/1-visual-identity/bordure-noire_1200.png');
        }
      }
      @media screen and (max-width: 750px) {
        .Tone_typo { display: none; }
        .Tone_illustration {
          position: relative;
          top: 0;
          left: 0;
          display: block;
          width: 330px;
        }
        .Infos_wrapper {
          top: 60px;
          left: calc(50% - 150px);
          width: 300px;
        }
      }
    `}</style>
    <div className='Background' />
    <div className='Top_border' />
    <div className='Bottom_border' />
    <div className='Infos_wrapper'>
      <img className='Tone_typo' alt='communication tone' src='/static/projects/ornikar-campaign/1-visual-identity/PART1-titre-partie-entreprise.png' width='403'/>
      <Subtitle content='THE TONE' style={{color: 'white', textAlign: 'center', display: isMobile ? 'block' : 'none', fontSize: 18, letterSpacing: '0.9px'}} />
      <Description content='The communication is based on flat illustration in order to easily develop a <strong>humorous and slightly quirky tone</strong>, while avoiding posing the problems of taking pictures for a company that starts its activity.'
        style={{color: 'white', width: isMobile ? 290 : 440, marginTop: 30, textAlign: isMobile ? 'center' : 'left'}} />
      <img className='Tone_illustration' alt='tone illustration' src='/static/projects/ornikar-campaign/1-visual-identity/illu-pres-entreprise.png' />
    </div>
  </div>


const colors = ['#e28844', '#ffb766', '#dc5b60', '#375e71', '#0d2d40']
const Charter = ({isMobile}) =>
  <div className='Charter'>
    <style jsx>{`
      .Charter {
        position: relative;
        margin: auto;
        width: 1020px;
        height: 615px;
      }
      .Pipette_illustration {
        width: 510px;
        display: inline-block;
        margin-right: 78px;
      }
      .Infos_wrapper {
        width: 410px;
        display: inline-block;
        vertical-align: top;
        position: relative;
        top: 140px;
      }
      .Charter_typo {
        display: block;
      }
      .Colors_wrapper {
        width: 800px;
        position: absolute;
        bottom: 120px;
        left: 200px;
      }
      .mobile { display: none; }
      @media screen and (max-width: 750px) {
        .Charter {
          width: 100%;
          height: 889px;
        }
        .Charter_typo { display: none; }
        .Pipette_illustration {
          position: relative;
          top: 0;
          left: 0;
          display: block;
          width: 330px;
          margin: auto;
          margin-top: 30px;
        }
        .Infos_wrapper {
          width: 100%;
          margin: auto;
          text-align: center;
          margin-top: 60px;
          top: 0;
        }
        .desktop { display: none; }
        .mobile { display: block; }
        .Colors_wrapper {
          width: 270px;
          position: relative;
          top: -115px;
          left: -10px;
          margin: auto;
        }
      }
    `}</style>
    <img className='Pipette_illustration desktop' alt='pipette illustration' src='/static/projects/ornikar-campaign/1-visual-identity/illu-pipette.png' />
    <div className='Infos_wrapper'>
      <img className='Charter_typo' alt='charter typo' src='/static/projects/ornikar-campaign/1-visual-identity/PART1-titre-partie-charte-graphique.png' width='248'/>
      <Subtitle content='COLOR RANGE' style={{color: '#0d2d40', textAlign: 'center', display: isMobile ? 'block' : 'none', fontSize: 18, letterSpacing: '0.9px'}} />
      <Description content='In addition to illustrations, we decided to use a diverse and <strong>bright colorful range</strong> and a selection of <strong>vintage and  decorative typography</strong> combined in visuals.'
        style={{color: '#474f6f', width: isMobile ? 295 : 410, marginTop: 30, textAlign: isMobile ? 'center' : 'left'}} />
    </div>
    <img className='Pipette_illustration mobile' alt='pipette illustration' src='/static/projects/ornikar-campaign/1-visual-identity/SMART_illu-pipette.png' />
    <div className='Colors_wrapper'>
      {colors.map((color, i) => <Circle color={color} key={i} index={i} last={i===colors.length - 1} />)}
    </div>
  </div>

const Circle = ({color, last, index}) =>
  <div className='Circle'>
    <style jsx>{`
      .Circle {
        width: 100px;
        display: inline-block;
        height: 100px;
        border-radius: 50%;
        background-color: ${color};
        margin-right: ${last ? 0 : 75}px;
      }
      @media screen and (max-width: 750px) {
        .Circle {
          margin-right: ${(index%2===0) ? 0 : 68}px;
          margin-left: ${index === 0 ? 170 : 0}px;
          margin-top: ${index === 0 ? 0 : 50}px;
        }
      }
    `}</style>
  </div>

const Print = () =>
  <div className='Print'>
    <style jsx>{`
      .Print {
        background-image: url('/static/projects/ornikar-campaign/1-visual-identity/PART1-recap-com-3000.jpg');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        height: 448px;
      }
      @media screen and (max-width: 2000px) {
        .Print {
          background-image: url('/static/projects/ornikar-campaign/1-visual-identity/PART1-recap-com-2000.jpg');
        }
      }
      @media screen and (max-width: 1200px) {
        .Print {
          background-image: url('/static/projects/ornikar-campaign/1-visual-identity/PART1-recap-com-1200.jpg');
        }
      }
      @media screen and (max-width: 1200px) {
        .Print {
          height: 428px;
          background-image: url('/static/projects/ornikar-campaign/1-visual-identity/SMART_PART1-recap-com.jpg');
        }
      }
    `}</style>
  </div>

export default VisualIdentity
