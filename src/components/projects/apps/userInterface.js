// src/componentqs/projects/comete/userInterface.js
import React from 'react'
import ReactDOM from 'react-dom'
import Number from '../common/number'
import DoubleIllustrations from '../common/doubleIllustrations'
import SectionInfos from '../common/sectionInfos'
import { TitleSecondary, Subtitle, Description } from '../common/texts'
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
            top: -40px;
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
      <Subtitle
        content={font.app}
        style={{color: '#abb0bc', fontSize: 16, margin: 0, textTransform: 'none', fontStyle: 'italic'}} />
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
        <Subtitle
          content='Main colors'
          style={{color: '#abb0bc', fontSize: 16, textTransform: 'none', margin: '20px 0', fontStyle: 'italic'}} />
        {mainColors.map((color, i) => <MainColor color={color} key={i} />)}
      </div>
      <div className='Secondary_colors'>
        <div className='Font_colors'>
          <Subtitle
            content='Font colors'
            style={{color: '#abb0bc', fontSize: 16, textTransform: 'none', margin: '20px 0', fontStyle: 'italic'}} />
            {fontColors.map((color, i) => <SecondaryColor color={color} key={i} />)}
        </div>
        <div className='Additional_colors'>
          <Subtitle
            content='Additional colors'
            style={{color: '#abb0bc', fontSize: 16, textTransform: 'none', margin: '20px 0', fontStyle: 'italic'}} />
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
    <Subtitle
      content='Guidelines'
      style={{color: 'white', fontSize: 16, opacity: 0.6, textTransform: 'none', margin: '10px 0', fontStyle: 'italic'}} />
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

      }
    `}</style>
  </div>

const Types = () =>
  <div className='Types'>
   <style jsx>{`
      .Types {

      }
    `}</style>
  </div>

const Tools = () =>
  <div className='Tools'>
   <style jsx>{`
      .Tools {

      }
    `}</style>
  </div>

const More = () =>
  <div className='More'>
   <style jsx>{`
      .More {

      }
    `}</style>
  </div>

export default UserInterface
