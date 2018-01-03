// src/componentqs/projects/comete/userInterface.js
import React from 'react'
import ReactDOM from 'react-dom'
import Number from '../common/number'
import DoubleIllustrations from '../common/doubleIllustrations'
import SectionInfos from '../common/sectionInfos'
import { TitleSecondary, SubtitlePart, Description } from '../common/texts'
import Call from '../common/call'

class UserInterface extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const {setSectionMetadata} = this.props
    setSectionMetadata({
      title: 'User interface',
      icon: '/static/projects/apps/2-menu/picto-UI-grey.svg',
      activeIcon: '/static/projects/apps/2-menu/picto-UI.svg',
      element: ReactDOM.findDOMNode(this)
    })
  }

  render() {
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
          .Call_wrapper {
            position: absolute;
            top: 470px;
            left: calc(50% - 14px);
          }
        `}</style>

        <Number content='02' color='#004459' borderBackground='linear-gradient(to left, #008db9 0%, #6ad7d9 100%);' />
        <DoubleIllustrations
          main={{width: 353, src: '/static/projects/apps/4-user-interface/picto-UI.png'}}
          second={{width: 1060, src: '/static/projects/apps/4-user-interface/picto-UI.png'}}
          location={{bottom: 50, right: 100}}
          mobileLocation={{top: -675, right: -315, zoom: 0.6}} />
        <SectionInfos
          marginTop={90}
          title={{content: 'User Interface', color: '#004459'}}
          baseline={{content: 'Create an interface able to please to children', color: '#abb0bc'}}
          description={{color: '#474f6f', content: 'The user interface has been designed to appeal to college students. So I decided to use a lot of colors is to leave an important place to the picture. However, the interface must also remain clear and uncluttered. I have created an ui kit so that the whole 8 book can be implemented in the app.'}}
          />
        <div className='Call_wrapper'>
          <Call
            color='#00b3df'
            colorHover='white'
            background='#00b3df'
            backgroundInner='white'
            width={170}
            text='VIEW ALL THE CHARTE' />
        </div>
        <Typeface />
        <Colors />
        <Picto />
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
        background: #eaecf2;
        margin-top: 80px;
      }
    `}</style>
    <TitleSecondary content='Typeface' style={{color: '#004459', position: 'absolute', top: 45, left: 'calc(20% - 125px)'}} />
    {typos.map((font, i) => <Typo key={i} index={i} font={font} />)}
  </div>

const Typo = ({ font, index }) =>
  <div className={`Typo Typo_${index}`}>
   <style jsx>{`
      .Typo {
        position: absolute;
        top: 120px;
        left: 20%;
      }
      .Typo_1 {
        top: 232px;
        left: 40%;
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
      }
      .Font {
        height: 55px;
        margin-top: 10px;
      }
      .Exemple {
        height: 33px;
        position: absolute;
        left: 230px;
      }
    `}</style>
    <div className='Border' />
    <div className='Content'>
      <SubtitlePart
        content={font.app}
        style={{color: '#abb0bc', margin: 0}} />
      <img className='Font' src={`/static/projects/apps/4-user-interface/typeface/${font.font}.svg`} alt={`${font.font}`} />
      <img className='Exemple' src={`/static/projects/apps/4-user-interface/typeface/${font.font}-exemple.svg`} alt={`${font.font} exemple`} />
    </div>
  </div>

const mainColors = [{src: 'illu-lls', desc: 'App color', code: '#00b3df'}, {src: 'illu-exo', desc: 'Exercise color', code: '#66cc80'}]
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
        width: 100%;
        position: relative;
        height: 551px;
      }
      .Colors {
        position: relative;
        margin-top: 60px;
        margin-left: calc(20% - 125px);
      }
      .Main_colors {
        display: inline-block;
        width: 150px;
      }
      .Secondary_colors {
        display: inline-block;
        margin-left: 250px;
        vertical-align: top;
        width: 700px;
      }
      .Font_colors,.Additional_colors {
        width: 700px;
        display: inline-block;
      }
    `}</style>
    <TitleSecondary content='Color' style={{color: '#004459', position: 'relative', top: 45, left: 'calc(20% - 125px)'}} />
    <div className='Colors'>
      <div className='Main_colors'>
        <SubtitlePart
          content='Main colors'
          style={{color: '#abb0bc', margin: '20px 0'}} />
        {mainColors.map((color, i) => <MainColor color={color} key={i} />)}
      </div>
      <div className='Secondary_colors'>
        <div className='Font_colors'>
          <SubtitlePart
            content='Font colors'
            style={{color: '#abb0bc', margin: '20px 0'}} />
            {fontColors.map((color, i) => <SecondaryColor color={color} key={i} />)}
        </div>
        <div className='Additional_colors'>
          <SubtitlePart
            content='Additional colors'
            style={{color: '#abb0bc', margin: '20px 0'}} />
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
        height: 2px;
        width: 20px;
        background: ${color.code};
        margin-bottom: 10px;
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

const SecondaryColor = ({color, big = false}) =>
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
        height: 2px;
        width: 20px;
        background: ${color.code};
        margin-bottom: 10px;
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


const Picto = () =>
  <div className='Picto'>
   <style jsx>{`
      .Picto {
        background-image: linear-gradient(to left, #008db9 0%, #6ad7d9 100%);
        width: 100%;
        height: 738px;
        margin: auto;
        text-align: center;
        display: inline-block;
        position: relative;
      }
      .Picto_list {
        width: 100%;
        margin: auto;
        text-align: center;
        position: absolute;
        bottom: 80px;
      }
      .Pictograms {
        width: 1050px;
        margin: auto;
        margin-top: 40px;
      }
      .Picto_big_left {
        display: inline-block;
        width: 358px;
        vertical-align: top;
      }
      .Picto_text {
        display: inline-block;
        width: 404px;
      }
      .Picto_big_right {
        display: inline-block;
        width: 288px;
        vertical-align: top;
      }
    `}</style>
    <TitleSecondary content='PICTOGRAMME' style={{color: 'white', margin: '80px auto 0 auto'}} />
    <SubtitlePart
      content='Guidelines'
      style={{opacity: 0.6}} />
    <div className='Pictograms'>
      <div className='Picto_big_left'>
        <img height='288' src='/static/projects/apps/4-user-interface/picto/picto-grand.svg' alt='picto-grand' />
      </div>
      <div className='Picto_text'>
        <img height='144px' src='/static/projects/apps/4-user-interface/picto/picto-petit.svg' alt='picto-petit' />
        <Description
          style={{verticalAlign: 'top', textAlign: 'left', display: 'inline-block', width: 150, marginLeft: 50, fontSize: 12, marginTop: 0}}
          content='The contours and radius of Angles makes 2px for a picto Of 44x44. The interior spaces make 2px or a multiple.' />
        <Description
          style={{textAlign: 'left', display: 'block', width: 180, position: 'relative', left: 28, top: 30, fontSize: 12, marginTop: 0}}
          content='The pictograms are drawn In an "inline" style, in lines And not in full. They are used In two versions, 44px X 44px, and 22px X 22px.' />
      </div>
      <div className='Picto_big_right'>
        <img height='288' src='/static/projects/apps/4-user-interface/picto/picto-guidelines.svg' alt='picto-guidelines' />
      </div>
    </div>
    <div className='Picto_list'>
      <img height='121' src='/static/projects/apps/4-user-interface/picto/pictos.svg' alt='picto list' />
    </div>
  </div>

const Illustration = () =>
  <div className='Illustration'>
   <style jsx>{`
      .Illustration {
        width: 100%;
        position: relative;
        height: 575px;
        background-size: contain;
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
        height: 2850px;
        margin: auto;
        text-align: center;
      }
    `}</style>
    <TitleSecondary content='Types of pages' style={{color: '#004459', margin: '80px auto 0 auto'}} />
    <SubtitlePart
      content='We create a template for every type of page'
      style={{color: '#abb0bc'}} />
    <Background />
    <Templates />
    <Tools />
  </div>

const Templates = () =>
  <div className='Templates'>
    <style jsx>{`
      .Templates {
        width: 1050px;
        margin: auto;
        margin-top: 80px;
        z-index: 1
      }
      .Template {
        display: inline-block;
        width: 320px;
        margin-right: 30px;
        vertical-align: top;
      }
      .Template img {
        height: 425px;
      }
      .Description {
        font-size: 12px;
        line-height: 18px;
        color: white;
        text-align: center;
        margin-top: 20px;
      }
    `}</style>
    <div className='Template'>
      <img alt='template ouverture' src='/static/projects/apps/4-user-interface/types/template1.jpg' />
      <div className='Description futuralt_book'>Introduction of a chapter in French.</div>
    </div>
    <div className='Template'>
      <img alt='template ouverture' src='/static/projects/apps/4-user-interface/types/template2.jpg' />
      <div className='Description futuralt_book'>A page with a principal document like a text and severall documents less important.</div>
    </div>
    <div className='Template'>
      <img alt='template ouverture' src='/static/projects/apps/4-user-interface/types/template3.jpg' />
      <div className='Description futuralt_book'>A page with document of equal importance.</div>
    </div>
  </div>

const Background = () =>
  <div className='Background'>
    <style jsx>{`
      .Background {
        position: absolute;
        right: 0;
        top: 200px;
        width: 100%;
        z-index: -1;
      }
      .clip-borders {
        height: 1250px;
        width: 100%;
        background-image: linear-gradient(to right, #6ad7d9 0%, #008db9 100%);
        margin: 0 auto;
        -webkit-clip-path: polygon(0% 100%,0% 15%,100% 0%,100% 85%);
        clip-path: polygon(0% 100%,0% 15%,100% 0%,100% 85%);
        -webkit-clip-path: url("#rhomboid-clip");
        clip-path: url("#rhomboid-clip");
      }
    `}</style>
    <div className="clip-borders"></div>
    <svg className="clip-svg">
      <defs>
        <clipPath id="rhomboid-clip" clipPathUnits="objectBoundingBox">
          <polygon points="0 1, 0 0.15, 1 0, 1 0.85" />
        </clipPath>
      </defs>
    </svg>
  </div>

const Tools = () =>
  <div className='Tools'>
   <style jsx>{`
      .Tools {
        position: relative;
        width: 100%;
        margin: auto;
        text-align: center;
      }
      .Screen {
        margin-top: 60px;
        position: relative;
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
      .Border {
        height: 22px;
        width: 2px;
        position: absolute;
        left: -20px;
        top: 7px;
        background-color: white;
      }
      .Screen_2 {
        margin-top: 0;
        top: -200px;
        text-align: right;
      }
      .Screen_2 .Infos {
        margin-right: 130px;
        margin-left: 0;
        top: 250px;
      }
      .Screen_2 .Border {
        background-color: #00b3df;
      }
    `}</style>
    <TitleSecondary content='We also make awesome' style={{letterSpacing: 1.05, color: 'white', margin: '80px 0 0 0'}} />
    <TitleSecondary content='tools ...' style={{letterSpacing: 1.05, color: '#005970', margin: 0}} />
    <div className='Screen Screen_1'>
      <img height='616' alt='exercise screen' src='/static/projects/apps/4-user-interface/types/ipad-seul.png' />
      <div className='Infos'>
        <div className='Border' />
        <TitleSecondary content='Answer to the question' style={{letterSpacing: 1.05, fontFamily: '\'Futura LT - Book\'', textTransform: 'none', color: 'white', margin: 0}} />
        <Description
          style={{textAlign: 'left', marginTop: 20}}
          content='On each page, the student can answer questions. It is accessed thanks to a floating button which is therefore always accessible. Once it has pressed the button, the interface divides between questions and response space, and related documents on the other. Once he has answered, the student can send the answers to his teacher.' />
      </div>
    </div>
    <div className='Screen Screen_2'>
      <div className='Infos'>
        <div className='Border' />
        <TitleSecondary content='Draw on the pages' style={{textAlign: 'left', letterSpacing: 1.05, fontFamily: '\'Futura LT - Book\'', textTransform: 'none', color: '#00b3df', margin: 0}} />
        <Description
          style={{textAlign: 'left', marginTop: 20, color: '#474f6f'}}
          content='The user can operate a "draft" mode. This feature allows it to draw on a page and save this draft. Teachers use it for classroom demonstrations.' />
      </div>
      <img height='616' alt='exercise screen' src='/static/projects/apps/4-user-interface/types/ipad-seul.png' />
    </div>
    <TitleSecondary content='and more ...' style={{letterSpacing: 1.05, color: '#005970', margin: 0}} />
  </div>

const More = () =>
  <div className='Illustration'>
   <style jsx>{`
      .Illustration {
        width: 100%;
        position: absolute;
        bottom: 0;
        height: 700px;
        background-size: cover;
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
