// src/componentqs/projects/comete/userInterface.js
import React from 'react'
import ReactDOM from 'react-dom'
import Number from '../common/number'
import DoubleIllustrations from '../common/doubleIllustrations'
import SectionInfos from '../common/sectionInfos'
import { TitleSecondary, SubtitlePart, Description } from '../common/texts'
import { responsive } from '../../../utils/responsive'

class UserInterface extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    const {setSectionMetadata} = this.props
    setSectionMetadata({
      title: 'User interface',
      icon: '/static/projects/menu/grey-ui.png',
      activeIcon: '/static/projects/menu/apps-ui.png',
      element: ReactDOM.findDOMNode(this)
    })
  }

  render() {
    const { isMobile } = this.props
    return (
      <div className='User_interface'>
       <style jsx>{`
          .User_interface {
            width: 100%;
            margin: auto;
            overflow: hidden;
            position: relative;
            z-index: 0;
          }
          .Infos {
            display: inline-block;
            width: calc(100% - 20px);
          }
        `}</style>

        <Number
          content='02'
          color='#004459'
          borderBackground='linear-gradient(to left, #008db9 0%, #6ad7d9 100%)'
          responsivePicto='/static/projects/apps/4-user-interface/picto-UI.png' />
        <DoubleIllustrations
          main={{width: 462, src: '/static/projects/apps/4-user-interface/picto-UI.png'}}
          second={{width: 1060, src: '/static/projects/apps/4-user-interface/picto-UI.png'}}
          location={{bottom: 50, right: 100}}
          mobileLocation={{top: -675, right: -2315}} />
        <SectionInfos
          isMobile={isMobile}
          marginTop={155}
          title={{content: 'User Interface', color: '#004459'}}
          baseline={{content: 'Create an interface to please children', color: '#abb0bc'}}
          description={{color: '#474f6f', content: "The user interface was designed to be appealing to middle school students. So I decided to use multiple colors and themes, and to let an important place to pictures.<br/>However, the interface must also remain clear and uncluttered.<br/>Finally, I decided to create an UI kit for an easier implementation by the developers of the 8 books produced."}}
          />
        <Typeface />
        <Colors />
        <Picto isMobile={isMobile} />
        <Illustration />
        <Types />
        <More />
      </div>
    )
  }
}

const typos = [{app: 'Apple app', font: 'helvetica'}, {app: 'Android app', font: 'open-sans'}, {app: 'Windows app', font: 'segoe'}]

const Typeface = () =>
  <div className='Typeface'>
   <style jsx>{`
      .Typeface {
        width: 100%;
        position: relative;
        height: 472px;
        margin-top: 80px;
      }
      .Title_wrapper {
        position: relative;
        top: 45px;
        left: 0;
      }
      .Background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background: #eaecf2;
        height: 100%;
        opacity: 0.4;
      }
      @media screen and (max-width: 750px) {
        .Typeface {
          height: 525px;
        }
        .Background {
          width: 100%;
        }
        .Title_wrapper {
          display: inline-block;
          position: relative;
          top: 0;
          left: 0;
          margin: 60px 25px 40px 25px;
        }
      }
    `}</style>
    <div className='Background' />
    <div className='Global_content_wrapper'>
      <div className='Title_wrapper'>
        <TitleSecondary content='Typeface' style={{color: '#004459', margin: 0, letterSpacing: 1.05}} />
      </div>
      {typos.map((font, i) => <Typo key={i} index={i} font={font} />)}
    </div>
  </div>

const Typo = ({ font, index }) =>
  <div className={`Typo Typo_${index}`}>
   <style jsx>{`
      .Typo {
        position: absolute;
        top: 120px;
        left: 130px;
      }
      .Typo_1 {
        top: 242px;
        left: 380px;
      }
      .Typo_2 {
        top: 343px;
      }
      .Border {
        height: 40px;
        width: 2px;
        position: absolute;
        left: 0;
        top: 5px;
        background-image: linear-gradient(to bottom, #008db9 0%, #6ad7d9 100%);
      }
      .Content {
        position: relative;
        left: 30px;
        top: -7px;
      }
      .Font {
        height: 55px;
        margin-top: 5px;
      }
      .Example {
        height: 33px;
        position: absolute;
        left: 200px;
        opacity: 0.2;
      }
      @media screen and (max-width: 750px) {
        .Typo {
          position: relative;
          top: 0;
          left: 0;
          margin-left: 25px;
          display: block;
          margin-bottom: 40px;
        }
        .Example {
          display: none;
        }
        .Border {
          top: 10px;
        }
        .Font {
          height: 55px;
          margin-top: 1px;
        }
      }
    `}</style>
    <div className='Border' />
    <div className='Content'>
      <SubtitlePart
        content={font.app}
        style={{color: '#abb0bc', margin: 0}} />
      <img className='Font' src={`/static/projects/apps/4-user-interface/typeface/${font.font}.svg`} alt={`${font.font}`} />
      <img className='Example' src={`/static/projects/apps/4-user-interface/typeface/${font.font}-exemple.svg`} alt={`${font.font} exemple`} />
    </div>
  </div>

const mainColors = [{src: 'illu-lls', desc: 'App color', code: '#00b3df', right: false}, {src: 'illu-exo', desc: 'Exercise color', code: '#66cc80', right: true}]
const fontColors = [
  {src: 'illu-typo1', desc: 'Title & text', code: '#383838'},
  {src: 'illu-typo2', desc: 'Additional info', code: '#878787'},
  {src: 'illu-typo3', desc: 'Text level 2', code: '#ababab'}
  ]
const additionalColors1 = [
  {src: 'illu-histoire-de-lart', desc: 'Art history pages', code: '#ef85c1'},
  {src: 'illu-info', desc: 'Case study pages', code: '#f9b644'},
  {src: 'illu-frech-exo', desc: 'French exercises', code: '#e14658'}
]
const additionalColors2 = [
  {src: 'illu-french-exo2', desc: 'French exercises', code: '#1fb58f'},
  {src: 'illu-history', desc: 'History exercises', code: '#00bcd4'},
  {src: 'illu-book', desc: 'Book to read', code: '#bb65ca'}
]

const Colors = () =>
  <div className='Color_wrapper'>
    <style jsx>{`
      .Color_wrapper {
        width: 1020px;
        position: relative;
        margin: auto;
        height: 510px;
      }
      .Title_wrapper {
        position: relative;
        margin-top: 45px;
      }
      .Colors {
        position: relative;
        margin-top: 30px;
        margin-left: 0;
      }
      .Main_colors {
        display: inline-block;
        width: 150px;
        margin-top: 20px;
      }
      .Secondary_colors {
        display: inline-block;
        margin-left: 200px;
        vertical-align: top;
        width: 650px;
      }
      .Font_colors,.Additional_colors {
        width: 700px;
        display: inline-block;
      }
      @media screen and (max-width: 750px) {
        .Color_wrapper {
          width: 100%;
          height: 967px;
        }
        .Title_wrapper {
          display: inline-block;
          position: relative;
          top: 0;
          left: 0;
          margin: 50px 25px 10px 25px;
        }
        .Colors {
          margin-left: 25px;
          margin-top: 0;
        }
        .Main_colors {
          margin: auto;
          margin-top: 0;
          width: 310px;
        }
        .Secondary_colors {
          display: inline-block;
          margin-left: 0;
          vertical-align: top;
          width: 310px;
        }
        .Font_colors,.Additional_colors {
          display: inline-block;
          margin: auto;
          width: 310px;
        }
      }
    `}</style>
    <div className='Title_wrapper'>
      <TitleSecondary content='Color' style={{color: '#004459', margin: 0, letterSpacing: 1.05}} />
    </div>
    <div className='Colors'>
      <div className='Main_colors'>
        <SubtitlePart
          content='Main colors'
          style={{color: '#abb0bc', lineHeight: '18px', margin: '0 0 30px 0'}} />
        {mainColors.map((color, i) => <MainColor color={color} key={i} />)}
      </div>
      <div className='Secondary_colors'>
        <div className='Font_colors'>
          <SubtitlePart
            content='Font colors'
            style={{color: '#abb0bc', lineHeight: '18px', margin: '20px 0'}} />
            {fontColors.map((color, i) => <SecondaryColor marginBottom={5} color={color} key={i} />)}
        </div>
        <div className='Additional_colors'>
          <SubtitlePart
            content='Additional colors'
            style={{color: '#abb0bc', lineHeight: '18px', margin: '20px 0'}} />
          {additionalColors1.map((color, i) => <SecondaryColor color={color} key={i} />)}
          {additionalColors2.map((color, i) => <SecondaryColor color={color} key={i} />)}
        </div>
      </div>
    </div>
  </div>

const MainColor = ({color, big = false}) =>
  <div className='Main_color'>
    <style jsx>{`
      .Main_color {
        width: 230px;
        position: relative;
        font-size: 12px;
      }
      .Illustration {
        display: inline-block;
        width: 136px;
        margin-bottom: 35px;
      }
      .Infos {
        display: inline-block;
        vertical-align: top;
        position: relative;
        top: 48px;
        left: 20px;
      }
      .Border {
        display: inline-block;
        height: 2px;
        width: 20px;
        background: ${color.code};
        margin-bottom: 10px;
      }
      .Description {
        color: #474f6f;
        line-height: 18px;
      }
      @media screen and (max-width: 750px) {
        .Main_color {
          display: inline-block;
          width: 155px;
          margin: auto;
        }
        .Illustration {
          margin-bottom: 0;
        }
        .Infos {
          width: 155px;
          text-align: center;
          top: 0;
          left: 0;
        }
        .Illustration {
          position: relative;
          left: ${color.right ? '20px' : '0'};
        }
        .Infos {
          margin-top: 20px;
          left: ${color.right ? 10 : -10}px;
        }
      }
    `}</style>
    <img className='Illustration' alt='lls picto' src={`/static/projects/apps/4-user-interface/color/${color.src}.svg`} />
    <div className='Infos'>
      <div className='Border' />
      <div className='Description futuralt_bold'>
      {color.desc} <br /> <span className='futuralt_book'>{color.code}</span>
      </div>
    </div>
  </div>

const SecondaryColor = ({color, big = false, marginBottom}) =>
  <div className='Secondary_color'>
    <style jsx>{`
      .Secondary_color {
        width: 225px;
        position: relative;
        font-size: 12px;
        display: inline-block;
        vertical-align: top;
      }
      .Illustration {
        display: inline-block;
        width: 68px;
        margin-bottom: 35px;
      }
      .Infos {
        display: inline-block;
        vertical-align: top;
        position: relative;
        top: 14px;
        left: 20px;
      }
      .Border {
        display: inline-block;
        height: 2px;
        width: 20px;
        background: ${color.code};
        margin-bottom: 10px;
      }
      .Description {
        color: #474f6f;
        line-height: 18px;
      }
      @media screen and (max-width: 750px) {
        .Secondary_color {
          width: 100px;
          text-align: center;
          margin-bottom: 20px;
        }
        .Border {
          position: relative;
          top: 7px;
        }
        .Illustration {
          margin-bottom: 0;
        }
        .Infos {
          width: 100px;
          text-align: center;
          top: 0;
          left: 0;
        }
      }
    `}</style>
    <img style={{marginBottom}} className='Illustration' alt='lls picto' src={`/static/projects/apps/4-user-interface/color/${color.src}.svg`} />
    <div className='Infos'>
      <div className='Border' />
      <div className='Description futuralt_bold'>
      {color.desc} <br /> <span className='futuralt_book'>{color.code}</span>
      </div>
    </div>
  </div>


const Picto = ({ isMobile }) =>
  <div className='Picto'>
   <style jsx>{`
      .Picto {
        background-image: linear-gradient(to left, #008db9 0%, #6ad7d9 100%);
        width: 100%;
        height: 746px;
        margin: auto;
        text-align: center;
        display: inline-block;
        position: relative;
      }
      .Picto_container {
        width: 1020px;
        height: 100%;
        margin: auto;
      }
      .Picto_list {
        width: 100%;
        margin: auto;
        margin-top: 60px;
      }
      .Pictograms {
        width: 100%;
        margin: auto;
        margin-top: 50px;
        text-align: left;
        position: relative;
        height: 290px;
      }
      .Illustration {
        display: inline-block;
        position: absolute;
      }
      .Illustration_1 {
        top: 0;
        left: 0;
      }
      .Illustration_2 {
        top: 0;
        left: 328px;
      }
      .Illustration_3 {
        top: 0;
        right: 0;
      }
      .Description_container_1 {
        position: absolute;
        display: inline-block;
        width: 175px;
        top: 174px;
        left: 328px;
      }
      .Description_container_2 {
        position: absolute;
        display: inline-block;
        width: 155px;
        top: 0;
        left: 539px;
      }
      .Picto_list_responsive {
        display: none;
      }
      @media screen and (max-width: 750px) {
        .Picto {
          height: 1345px;
        }
        .Picto_list {
          display: none;
        }
        .Picto_container {
          width: 310px;
        }
        .Pictograms {
          height: 772px;
          margin-top: 30px;
        }
        .Illustration {
          height: 310px!important;
        }
        .Illustration_1 {
          top: 0;
          left: 0;
        }
        .Illustration_2 {
          display: none;
        }
        .Illustration_3 {
          top: 410px;
          left: 0;
        }
        .Description_container_2 {
          top: 330px;
          left: 0;
        }
        .Description_container_1 {
          top: 740px;
          left: 0;
        }
        .Description_container_1, .Description_container_2 {
          width: 305px;
          margin: auto;
        }
        .Picto_list_responsive {
          display: block;
          margin-top: 40px;
        }
      }
    `}</style>
    <div className='Picto_container'>
      <TitleSecondary content='PICTOGRAM' style={{color: 'white', letterSpacing: 1.05, margin: '69px auto 0 auto'}} />
      <SubtitlePart
        content='Guidelines'
        style={{opacity: 0.6, margin: '10px 0 0 0'}} />
      <div className='Pictograms'>
        <img className='Illustration Illustration_1' height='288' src='/static/projects/apps/4-user-interface/picto/picto-grand.svg' alt='picto-grand' />
        <div className='Description_container_1'>
          <Description
            style={{verticalAlign: 'top', opacity: 0.8, lineHeight: '18px', textAlign: isMobile ? 'center' : 'left', display: 'inline-block', fontSize: 12, marginTop: 0}}
            content="The contours and angle's radius is 2px for a picto of 44 x 44px. The interior spaces are 2px or a multiple of 2px." />
        </div>
        <img className='Illustration Illustration_2' height='144px' src='/static/projects/apps/4-user-interface/picto/picto-petit.svg' alt='picto-petit' />
        <div className='Description_container_2'>
          <Description
            style={{textAlign: isMobile ? 'center' : 'left', opacity: 0.8, lineHeight: '18px',  display: 'block', fontSize: 12, marginTop: 0}}
            content='The pictograms are drawn in an "inline" style, in lines and not in full. They are used in two versions, 44px x 44px, and 22px x 22px.' />
        </div>
        <img className='Illustration Illustration_3' height='288' src='/static/projects/apps/4-user-interface/picto/picto-guidelines.svg' alt='picto-guidelines' />
      </div>
      <div className='Picto_list'>
        <img height='121' src='/static/projects/apps/4-user-interface/picto/pictos.svg' alt='picto list' />
      </div>
      <div className='Picto_list_responsive'>
        <img height='252' src='/static/projects/apps/4-user-interface/smartphone/picto.svg' alt='picto list' />
      </div>
    </div>
  </div>

const Illustration = () =>
  <div className='Illustration'>
   <style jsx>{`
      .Illustration {
        width: 100%;
        position: relative;
        height: 575px;
        background-size: cover;
        background-position: center center;
      }
      @media screen and (max-width: 750px) {
        .Illustration {
          height: 450px;
          background-image: url('/static/projects/apps/4-user-interface/smartphone/ipad-photo-600.jpg');
        }
      }
      @media screen and (min-width: 750px) {
        .Illustration {
          background-image: url('/static/projects/apps/4-user-interface/photo-ipad-1200px.jpg');
        }
      }
      @media screen and (min-width: 1400px) {
        .Illustration {
          background-image: url('/static/projects/apps/4-user-interface/photo-ipad-2000px.jpg');
        }
      }
      @media screen and (min-width: 2400px) {
        .Illustration {
          background-image: url('/static/projects/apps/4-user-interface/photo-ipad-3000px.jpg');
        }
      }
    `}</style>
  </div>

const Types = () =>
  <div className='Types'>
    <style jsx>{`
      .Types {
        width: 100%;
        position: relative;
        height: 2790px;
        margin: auto;
        text-align: center;
      }
      .Title_container {
        margin: 70px auto 0 auto;
      }
      @media screen and (max-width: 750px) {
        .Types {
          height: 3600px;
        }
        .Title_container {
          margin: 50px auto 0 auto;
        }
        .Subtitle_container {
          width: 250px;
          margin: auto;
        }
      }
    `}</style>
    <div className='Title_container'>
      <TitleSecondary content='Types of pages' style={{color: '#004459', letterSpacing: 1.05, margin: 0}} />
    </div>
    <div className='Subtitle_container'>
      <SubtitlePart
        content='We created a template for every type of page'
        style={{color: '#abb0bc', lineHeight: '22px'}} />
    </div>
    <Background />
    <BackgroundMobile1 />
    <BackgroundMobile2 />
    <BackgroundMobile3 />
    <Templates />
    <Tools />
  </div>

const Templates = () =>
  <div className='Templates'>
    <style jsx>{`
      .Templates {
        width: 1020px;
        margin: auto;
        margin-top: 73px;
        z-index: 1
      }
      .Template {
        display: inline-block;
        width: 320px;
        margin-right: 30px;
        vertical-align: top;
      }
      .Template:nth-child(3) {
        margin-right: 0;
      }
      .Template img {
        width: 320px;
        height: 425px;
        -moz-box-shadow: 0px 7px 15px 0px rgba(1,1,1,0.35);
        -webkit-box-shadow: 0px 7px 15px 0px rgba(1,1,1,0.35);
        -o-box-shadow: 0px 7px 15px 0px rgba(1,1,1,0.35);
        box-shadow: 0px 7px 15px 0px rgba(1,1,1,0.35);
      }
      .Description {
        font-size: 12px;
        line-height: 18px;
        color: white;
        text-align: center;
        margin-top: 20px;
      }
      @media screen and (max-width: 750px) {
        .Templates {
          width: 100%;
        }
        .Template {
          display: block;
          margin: 40px auto;
        }
        .Template:nth-child(3) {
          margin-right: auto;
        }
      }
    `}</style>
    <div className='Template'>
      <img alt='template ouverture' src='/static/projects/apps/4-user-interface/types/template1.jpg' />
      <div className='Description futuralt_book'>Introduction of a chapter in French.</div>
    </div>
    <div className='Template'>
      <img alt='template ouverture' src='/static/projects/apps/4-user-interface/types/template2.jpg' />
      <div className='Description futuralt_book'>A page with one main document (here a text) and secondary pictures.</div>
    </div>
    <div className='Template'>
      <img alt='template ouverture' src='/static/projects/apps/4-user-interface/types/template3.jpg' />
      <div className='Description futuralt_book'>A page with documents of equal importance.</div>
    </div>
  </div>

const Background = () =>
  <div className='Background'>
    <style jsx>{`
      .Background {
        position: absolute;
        right: 0;
        top: 40px;
        width: 100%;
        z-index: -1;
      }
      .clip-borders {
        height: 1410px;
        width: 100%;
        background-image: linear-gradient(to right, #6ad7d9 0%, #008db9 100%);
        margin: 0 auto;
        -webkit-clip-path: polygon(0% 100%,0% 28%,100% 0%,100% 88%);
        clip-path: polygon(0% 100%,0% 28%,100% 0%,100% 88%);
        -webkit-clip-path: url("#rhomboid-clip");
        clip-path: url("#rhomboid-clip");
      }
      @media screen and (max-width: 750px) {
        .Background {
          display: none;
        }
      }
    `}</style>
    <div className="clip-borders"></div>
    <svg className="clip-svg">
      <defs>
        <clipPath id="rhomboid-clip" clipPathUnits="objectBoundingBox">
          <polygon points="0 1, 0 0.28, 1 0, 1 0.88" />
        </clipPath>
      </defs>
    </svg>
  </div>

const BackgroundMobile1 = () =>
  <div className='Background'>
    <style jsx>{`
      .Background {
        position: absolute;
        right: 0;
        top: 120px;
        width: 100%;
        z-index: -1;
      }
      .clip-borders {
        height: 616px;
        width: 100%;
        background-image: linear-gradient(to right, #6ad7d9 0%, #008db9 100%);
        margin: 0 auto;
        -webkit-clip-path: polygon(0% 100%,0% 15%,100% 0%,100% 85%);
        clip-path: polygon(0% 100%,0% 15%,100% 0%,100% 85%);
        -webkit-clip-path: url("#background-mobile-1");
        clip-path: url("#background-mobile-1");
      }
      @media screen and (min-width: 750px) {
        .Background {
          display: none;
        }
      }
    `}</style>
    <div className="clip-borders"></div>
    <svg className="clip-svg">
      <defs>
        <clipPath id="background-mobile-1" clipPathUnits="objectBoundingBox">
          <polygon points="0 1, 0 0.15, 1 0, 1 0.85" />
        </clipPath>
      </defs>
    </svg>
  </div>

const BackgroundMobile2 = () =>
  <div className='Background'>
    <style jsx>{`
      .Background {
        position: absolute;
        right: 0;
        top: 860px;
        width: 100%;
        z-index: -1;
      }
      .clip-borders {
        height: 485px;
        width: 100%;
        background-image: linear-gradient(to right, #6ad7d9 0%, #008db9 100%);
        margin: 0 auto;
        -webkit-clip-path: polygon(0% 100%,0% 15%,100% 0%,100% 85%);
        clip-path: polygon(0% 100%,0% 15%,100% 0%,100% 85%);
        -webkit-clip-path: url("#background-mobile-2");
        clip-path: url("#background-mobile-2");
      }
      @media screen and (min-width: 750px) {
        .Background {
          display: none;
        }
      }
    `}</style>
    <div className="clip-borders"></div>
    <svg className="clip-svg">
      <defs>
        <clipPath id="background-mobile-2" clipPathUnits="objectBoundingBox">
          <polygon points="0 1, 0 0.15, 1 0, 1 0.85" />
        </clipPath>
      </defs>
    </svg>
  </div>

const BackgroundMobile3 = () =>
  <div className='Background'>
    <style jsx>{`
      .Background {
        position: absolute;
        right: 0;
        top: 1500px;
        width: 100%;
        z-index: -1;
      }
      .clip-borders {
        height: 588px;
        width: 100%;
        background-image: linear-gradient(to right, #6ad7d9 0%, #008db9 100%);
        margin: 0 auto;
        -webkit-clip-path: polygon(0% 100%,0% 15%,100% 0%,100% 85%);
        clip-path: polygon(0% 100%,0% 15%,100% 0%,100% 85%);
        -webkit-clip-path: url("#background-mobile-3");
        clip-path: url("#background-mobile-3");
      }
      @media screen and (min-width: 750px) {
        .Background {
          display: none;
        }
      }
    `}</style>
    <div className="clip-borders"></div>
    <svg className="clip-svg">
      <defs>
        <clipPath id="background-mobile-3" clipPathUnits="objectBoundingBox">
          <polygon points="0 1, 0 0.15, 1 0, 1 0.85" />
        </clipPath>
      </defs>
    </svg>
  </div>

class Tools extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screen1Title: {letterSpacing: 1.05, fontFamily: '\'Futura LT - Book\'', textTransform: 'none', color: 'white', margin: 0},
      screen1Desc: {textAlign: 'left', marginTop: 20, fontSize: 12, opacity: 0.8, lineHeight: '18px'},
      screen2Title: {textAlign: 'left', letterSpacing: 1.05, fontFamily: '\'Futura LT - Book\'', textTransform: 'none', color: '#00b3df', margin: 0},
      screen2Desc: {textAlign: 'left', marginTop: 20, color: '#474f6f', fontSize: 12, opacity: 0.8, lineHeight: '18px'}
    }
  }
  componentDidMount() {
    const { screen1Title, screen1Desc, screen2Title, screen2Desc } = this.state
    this.setState({
      screen1Title: responsive({base: {...screen1Title}, mobile: {textAlign: 'center', color: '#00b0dc', marginTop: 20}}),
      screen1Desc: responsive({base: {...screen1Desc}, mobile: {textAlign: 'center', color: '#474f6f'}}),
      screen2Title: responsive({base: {...screen2Title} , mobile:{textAlign: 'center', color: '#00b0dc', position: 'relative', top: 20}}),
      screen2Desc: responsive({base: {...screen2Desc} , mobile:{textAlign: 'center', color: '#474f6f'}})
    })
  }
  render() {
    const { screen1Title, screen1Desc, screen2Title, screen2Desc } = this.state
    return (
      <div className='Tools'>
       <style jsx>{`
          .Tools {
            position: relative;
            width: 100%;
            margin: auto;
            text-align: center;
          }
          .Screen {
            width: 1020px;
            margin: auto;
            margin-top: 50px;
            position: relative;
            text-align: left;
          }
          .Infos {
            text-align: left;
            display: inline-block;
            width: 300px;
            vertical-align: top;
            position: relative;
            margin-left: 130px;
            top: 120px;
          }
          .Title_container {
            margin: 70px 0 0 0;
          }
          .Border {
            height: 22px;
            width: 2px;
            position: absolute;
            left: -20px;
            top: 7px;
            background-color: white;
          }
          .Screen_1 img, .Screen_2 img {
            height: 609px;
          }
          .Screen_2 {
            margin-top: 0;
            top: -100px;
            text-align: right;
          }
          .Screen_2 .Infos {
            margin-right: 120px;
            margin-left: 0;
            top: 290px;
          }
          .Screen_2 .Border {
            background-color: #00b3df;
          }
          .Andmore_container {
            display: inline-block;
            position: relative;
            margin: 0;
            top: -40px;
          }
          .Video_1 {
            position: absolute;
            top: 44px;
            left: 38px;
            width: 388px;
          }
          .Video_2 {
            position: absolute;
            width: 388px;
            top: 44px;
            right: 38px;
          }
          @media screen and (max-width: 750px) {
            .Border {
              display: none;
            }
            .Screen {
              width: 100%;
            }
            .Title_container {
              margin: 50px 0 0 0;
            }
            .Screen_1 img, .Screen_2 img {
              display: block;
              margin: auto;
              width: 328px;
              height: auto;
            }
            .Andmore_container {
              top: 0;
              margin-top: 40px;
            }
            .Infos {
              text-align: center;
              display: block;
              width: 300px;
              margin: 0 auto 60px auto;
              top: 0;
            }
            .Screen_2 .Infos {
              margin: 0 auto;
              top: 530px;
            }
            .Video_1 {
              top: 30px;
              left: 50px;
              width: 276px;
            }
            .Video_2 {
              top: 141px;
              left: 50px;
              width: 276px;
            }
          }
        `}</style>
        <div className='Title_container'>
          <TitleSecondary content='We also make awesome' style={{letterSpacing: 1.05, color: 'white', margin: 0}} />
          <TitleSecondary content='tools!' style={{letterSpacing: 1.05, color: '#005970', margin: 0}} />
        </div>
        <div className='Screen Screen_1'>
          <img alt='exercise screen' src='/static/projects/apps/4-user-interface/types/ipad-seul-1.png' />
          <video muted autoPlay loop className='Video_1' src='/static/projects/apps/4-user-interface/types/exo.mp4' />
          <div className='Infos'>
            <div className='Border' />
            <TitleSecondary content='Answer the questions' style={screen1Title} />
            <Description
              style={screen1Desc}
              content='On each page, the students can answer the questions. It is accessed thanks to a floating button which is therefore always accessible. When you click, the interface divides into questions and response spaces on one side, and related documents on the other. Once the students have answered, they can send their answers to their teacher.' />
          </div>
        </div>
        <div className='Screen Screen_2'>
          <div className='Infos'>
            <div className='Border' />
            <TitleSecondary content='Draw on the pages' style={screen2Title} />
            <Description
              style={screen2Desc}
              content='The user can operate a "draft" mode. This feature allows him to draw on a page and save his draft. Teachers can use it for classroom demonstrations.' />
          </div>
          <video muted autoPlay loop className='Video_2' src='/static/projects/apps/4-user-interface/types/dessin.mp4' />
          <img alt='exercise screen' src='/static/projects/apps/4-user-interface/types/ipad-seul-2.png' />
        </div>
        <div className='Andmore_container'>
          <TitleSecondary content='and more!'
            style={{letterSpacing: 1.05, color: '#005970', margin: 0}} />
        </div>
      </div>
    )
  }
}

const More = () =>
  <div className='Illustration'>
   <style jsx>{`
      .Illustration {
        width: 100%;
        position: absolute;
        bottom: 0;
        height: 700px;
        background-size: cover;
        background-position: center center;
      }
      @media screen and (max-width: 750px) {
        .Illustration {
          height: 436px;
          background-image: url('/static/projects/apps/4-user-interface/smartphone/ipad-screen-600px-01.png');
        }
      }
      @media screen and (min-width: 750px) {
        .Illustration {
          background-image: url('/static/projects/apps/4-user-interface/illu-ipad-more-1200px.png');
        }
      }
      @media screen and (min-width: 1400px) {
        .Illustration {
          background-image: url('/static/projects/apps/4-user-interface/illu-ipad-more-2000px.png');
        }
      }
      @media screen and (min-width: 2400px) {
        .Illustration {
          background-image: url('/static/projects/apps/4-user-interface/illu-ipad-more-3000px.png');
        }
      }
    `}</style>
  </div>



export default UserInterface
