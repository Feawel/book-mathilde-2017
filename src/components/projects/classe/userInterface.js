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
      icon: '/static/projects/classe/2-menu/picto-UI-grey.svg',
      activeIcon: '/static/projects/classe/2-menu/picto-UI.png',
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
            z-index: 1;
            padding-bottom: 400px;
          }
          .Call_wrapper {
            position: absolute;
            top: 470px;
            left: calc(50% - 14px);
          }
        `}</style>

        <Number content='01' color='#1a2432' borderBackground='linear-gradient(to left, #f04372 0%, #ffd69c 100%)' />
        <DoubleIllustrations
          main={{width: 363, src: '/static/projects/classe/3-user-interface/picto-UI.png'}}
          second={{width: 850, src: '/static/projects/classe/3-user-interface/picto-UI.png'}}
          location={{bottom: 100, right: 120}}
          mobileLocation={{top: -675, right: -315, zoom: 0.6}} />
        <SectionInfos
          marginTop={90}
          title={{content: 'User Interface', color: '#1a2432'}}
          baseline={{content: 'creation of a UI kit', color: '#a8adb9'}}
          description={{color: '#474f6f', content: 'I developed a system to unify the experience on all screens and devices for users, and simplify the work of developers. With this specification, the implementation of current and future features is both clean and easy.'}}
          />
          <div className='Call_wrapper'>
            <Call
              color='#fb5e80'
              colorHover='white'
              background='#fb5e80'
              backgroundInner='white'
              width={170}
              text='VIEW ALL THE CHARTE' />
          </div>
          <Typography />
          <Colors />
          <Icon />
          <Components />
      </div>
    )
  }
}

const typo1 = {
  title: 'Titles',
  number: 1,
  rows: [
    {title: 'Title level 1', cn: 'opensans_semibold', fontSize: 26, color: '#474f6f', font: 'Semibold'},
    {title: 'Title level 2', cn: 'opensans_bold', fontSize: 22, color: '#474f6f', font: 'Bold'},
    {title: 'Title level 3', cn: 'opensans_bold', fontSize: 20, color: '#474f6f', font: 'Bold'}
  ]
}

const typo2 = {
  title: 'Subtitles',
  number: 2,
  rows: [
    {title: 'Subtitle 1', cn: 'opensans_bold', fontSize: 13, color: '#828DA7', font: 'Bold'},
    {title: 'Subtitle 2', cn: 'opensans_bold', fontSize: 13, color: '#BDC2CE', font: 'Bold'},
    {title: 'Subtitle 3', cn: 'opensans_bold', fontSize: 11, color: '#828DA7', font: 'Bold'}
  ]
}

const typo3 = {
  title: 'Complement',
  number: 3,
  rows: [
    {title: 'ADDITIONAL INFORMATION 1', cn: 'opensans', fontSize: 13, color: '#828DA7', font: 'Regular'},
    {title: 'ADDITIONAL INFORMATION 2', cn: 'opensans', fontSize: 11, color: '#828DA7', font: 'Regular'}
  ]
}

const typo4 = {
  title: 'Current text',
  number: 4,
  rows: [
    {title: 'Current text 1', cn: 'opensans_bold', fontSize: 13, color: '#1A2432', font: 'Bold'},
    {title: 'Current text 2', cn: 'opensans_bold', fontSize: 13, color: '#474F6F', font: 'Bold'},
    {title: 'Current text 3', cn: 'opensans', fontSize: 13, color: '#474F6F', font: 'Regular'}
  ]
}

const Typography = () =>
  <div className='Typography'>
    <style jsx>{`
      .Typography {
        margin: auto;
        position: relative;
        text-align: center;
        margin-top: 60px;
        z-index: 1;
      }
      .Box {
        width: 1020px;
        height: 330px;
      }
      .Box {
        position: absolute;
        background-color: #e7e9ef;
        left: calc(50% - 510px);
        z-index: 2;
        opacity: 0.3;
      }
      .Content {
        width: 730px;
        margin: auto;
      }
      .Infos {
        display: inline-block;
        width: 360px;
        margin-left: 150px;
        vertical-align: top;
        margin-top: 30px;
        text-align: left;
      }
      .Typo_illu {
        display: inline-block;
        height: 262px;
        margin-top: 30px;
      }
      .Title {
        color: #00b3df;
        letter-spacing: 1.05;
        text-transform: none;
        margin-bottom: 10px;
      }
      .Description {
        font-size: 16px;
        line-height: 24px;
      }
      .Typos {
        width: 1050px;
        margin: auto;
        margin-top: 100px;
      }
    `}</style>
    <TitleSecondary
      content='Typeface'
      style={{color: '#474f6f'}} />
    <div className='Box' />
    <div className='Content'>
      <img className='Typo_illu' alt='typo illustration' src='/static/projects/classe/3-user-interface/typo.png' />
      <div className='Infos'>
        <div className='Title Global_title_secondary futuralt_book'>Opens sans Regular</div>
        <div className='opensans Description'>
          The quick brown fox jumps over the lazy dog<br />
          1234567890
        </div>
        <div className='Title Global_title_secondary futuralt_book'>Opens sans Bold</div>
        <div className='opensans_bold Description'>
          The quick brown fox jumps over the lazy dog<br />
          1234567890
        </div>
      </div>
    </div>
    <div className='Typos'>
      <Typo typo={typo1} />
      <Typo typo={typo2} />
      <Typo typo={typo3} />
      <Typo typo={typo4} />
    </div>
  </div>

const Typo = ({typo: {title, number, rows}}) =>
  <div className='Typo'>
    <style jsx>{`
      .Typo {
        position: relative;
        display: inline-block;
        width: 250px;
        vertical-align: top;
        text-align: left;
      }
      .Number_circle {
        display: inline-block;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: #fb637c;
        text-align: center;
        margin-bottom: 40px;
      }
      .Rows {
        vertical-align: top;
      }
    `}</style>
    <div className='Number_circle'>
      <TitleSecondary
        content={number}
        style={{fontFamily: `'Futura LT - Book'`, textTransform: 'none', position: 'relative', margin: 0, top: 0, left: 0, color: 'white', display: 'inline-block'}} />
    </div>
    <TitleSecondary
      content={title}
      style={{fontFamily: `'Futura LT - Book'`, textTransform: 'none', color: '#fb637c', margin: 0, display: 'inline-block', marginLeft: 20}} />
    <div className='Rows'>
      {rows.map((row, i) => <Row key={i} {...row} />)}
    </div>
  </div>


const Row = ({title, cn, fontSize, color, font}) =>
  <div className='Row'>
    <style jsx>{`
      .Row {
        position: relative;
        width: 200px;
        vertical-align: top;
        text-align: left;
        height: 75px;
        line-height: 27px;
      }
      .Description {
        font-size: 13px;
        color: #828da7;
        line-height: 27px;
        letter-spacing: 0.65;
      }
    `}</style>
    <div className={`Title ${cn}`} style={{fontSize, color}}>
      {title}
    </div>
    <div className='Description opensans'>
      {font} - {fontSize}px - {color}
    </div>
  </div>


const bigColors = [
  {title: 'brand color', color: '#00b3df'},
  {title: 'EXERCICES color', color: '#fe5778'},
  {title: 'STAT color', color: '#94de00'}
]

const smallColors = [
  {title: 'class theme 1', color: '#9b59b6'},
  {title: 'class theme 2', color: '#3498db'},
  {title: 'class theme 3', color: '#1abc9c'},
  {title: 'class theme 4', color: '#2ecc71'},
  {title: 'class theme 5', color: '#f1c40f'},
  {title: 'class theme 6', color: '#e57e22'},
  {title: 'class theme 7', color: '#e74c3c'}
]

const Colors = () =>
  <div className='Colors'>
    <style jsx>{`
      .Colors {
        margin: auto;
        position: relative;
        z-index: 1;
        text-align: center;
      }
      .Big_colors {
        margin: auto;
        width: 500px;
        margin-top: 40px;
      }
      .Small_colors {
        margin: auto;
        width: 800px;
        margin-top: 40px;
      }
    `}</style>
    <TitleSecondary content='Color palette' style={{color: '#474f6f', margin: '80px auto 0 auto'}} />
    <Subtitle
      content='Colors to find there'
      style={{color: '#a8adb9', fontSize: 16, textTransform: 'none', margin: '10px 0', fontStyle: 'italic'}} />
    <div className='Big_colors'>
      {bigColors.map((color, i) => <BigColor key={i} {...color} />)}
    </div>
    <div className='Small_colors'>
      {smallColors.map((color, i) => <SmallColor key={i} {...color} />)}
    </div>
  </div>

const BigColor = ({title, color}) =>
  <div className='Big_color'>
    <style jsx>{`
      .Big_color {
        display: inline-block;
        position: relative;
        text-align: center;
        margin-right: 70px;
      }
      .Big_color:nth-child(3) {
        margin-right: 0;
      }
      .Outer_circle {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: transparent;
        border: 1px solid ${color};
        margin: auto;
      }
      .Inner_circle {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: ${color};
        margin: auto;
        position: relative;
        top: 10px;
      }
      .Infos {
        text-transform: uppercase;
        color: #828da7;
        font-size: 13px;
        line-height: 27px;
        margin-top: 20px;
      }
    `}</style>
    <div className='Outer_circle'>
      <div className='Inner_circle'>
      </div>
    </div>
    <div className='Infos opensans_bold'>
      <div className='Title'>
        {title}
      </div>
      <div className='Color'>
        {color}
      </div>
    </div>
  </div>

const SmallColor = ({title, color}) =>
  <div className='Small_color'>
    <style jsx>{`
      .Small_color {
        display: inline-block;
        position: relative;
        text-align: center;
        margin-right: 40px;
      }
      .Small_color:nth-child(7) {
        margin-right: 0;
      }
      .Circle {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: ${color};
        margin: auto;
      }
      .Infos {
        text-transform: uppercase;
        color: #828da7;
        font-size: 10px;
        line-height: 18px;
        margin-top: 20px;
      }
      .Color {
        font-size: 11px;
        color: #474f6f;
      }
    `}</style>
    <div className='Circle' />
    <div className='Infos opensans_bold'>
      <div className='Title'>
        {title}
      </div>
      <div className='Color opensans'>
        {color}
      </div>
    </div>
  </div>


const descriptionStyle = {verticalAlign: 'top', textAlign: 'left', display: 'inline-block', width: 170, margin: 0, marginLeft: 20, fontSize: 14, color: 'white', lineHeight: '18px'}
const Icon = () =>
  <div className='Icon'>
    <style jsx>{`
      .Icon {
        margin: auto;
        position: relative;
        text-align: center;
        margin-top: 60px;
        z-index: 1;
      }
      .Mockups {
        display: inline-block;
        height: 558px;
      }
      .Blue_background {
        background-image: url('/static/projects/classe/3-user-interface/fond-bleu1-01.svg');
        background-size: cover;
        width: 100%;
        height: 800px;
        position: absolute;
        top: 360px;
        z-index: -1;
      }
      .Pictos {
        width: 1040px;
        margin: auto;
        margin-top: 60px;
        text-align: center;
      }
      .Section_left, .Section_center {
        display: inline-block;
        width: 230px;
        margin-right: 25px;
        vertical-align: top;
      }
      .Section_right {
        display: inline-block;
        width: 530px;
        vertical-align: top;
      }
      .Infos {
        text-align: left;
        margin-top: 40px;
      }
      .Number_container {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: white;
        color: #00b0dc;
        font-size: 9px;
        display: inline-block;
        text-align: center;
      }
      .Number {
        position: relative;
        top: 4px;
      }
      .Description {
        width: 170px;
      }
    `}</style>
    <img alt='iphone mockups' src='/static/projects/classe/3-user-interface/iphones-colors-01.png' className='Mockups' />
    <TitleSecondary content='icons' style={{color: 'white', margin: '50px auto 0 auto'}} />
    <Subtitle
      content='Guidelines'
      style={{color: 'white', fontSize: 16, textTransform: 'none', margin: '10px 0', fontStyle: 'italic'}} />
    <div className='Blue_background' />
    <div className='Pictos'>
      <div className='Section_left'>
        <img height='229' alt='first picto exemple' src='/static/projects/classe/3-user-interface/picto1-01.png' />
        <div className='Infos'>
          <div className='Number_container futuralt_bold'><span className='Number'>1</span></div>
          <Description
            style={descriptionStyle}
            content='The pictograms are drawn in an "inline" style, in lines and not in full. They are used in two versions, 32x32px, and 16x16px.' />
        </div>
      </div>
      <div className='Section_center'>
        <img height='229' alt='second picto exemple' src='/static/projects/classe/3-user-interface/picto2-01.png' />
        <div className='Infos'>
          <div className='Number_container futuralt_bold'><span className='Number'>2</span></div>
          <Description
            style={descriptionStyle}
            content='The contours and radius of angles makes 2px for a picto of 32x32.' />
        </div>
        <div className='Infos' style={{marginTop: 10}}>
          <div className='Number_container futuralt_bold'><span className='Number'>3</span></div>
          <Description
            style={descriptionStyle}
            content='The interior spaces make 2px.' />
        </div>
      </div>
      <div className='Section_right'>
        <img height='229' alt='third picto exemple' src='/static/projects/classe/3-user-interface/picto3-01.png' />
        <div className='Infos'>
          <div className='Number_container futuralt_bold'><span className='Number'>4</span></div>
          <Description
            style={descriptionStyle}
            content='Or a multiple of 2 like 4 or 6px.' />
        </div>
      </div>
    </div>
  </div>

const Components = () =>
  <div className='Components'>
    <style jsx>{`
      .Components {
        margin: auto;
        position: relative;
        text-align: center;
        margin-top: 60px;
        z-index: 1;
        margin-top: 120px;
      }
      .Mockups {
        display: inline-block;
        height: 676px;
        margin-top: 40px;
      }
    `}</style>
    <TitleSecondary content='Components' style={{color: '#474f6f', margin: '50px auto 0 auto'}} />
    <Subtitle
      content='Grid system for responsive'
      style={{color: '#a8adb9', fontSize: 16, textTransform: 'none', margin: '10px 0', fontStyle: 'italic'}} />
    <img alt='component mockups' src='/static/projects/classe/3-user-interface/grid-01.png' className='Mockups' />
    <Description
            style={{width: 400, margin: 0, color: '#474f6f', lineHeight: '20px', margin: '30px auto'}}
            content='For a layout between 840 and 1600px, the grid contains 12 columns. The first breaking point is at 840px (8 columns), the second at 600px (4 columns). At over 1600px, the grid aligns in the center and stops growing.' />
    <img alt='illu component' width='100%' src='/static/projects/classe/3-user-interface/illu-component.png' />
  </div>

const Illustration = () =>
  <div className='Illustration'>
    <style jsx>{`
      .Illustration {

      }
    `}</style>
  </div>

export default UserInterface