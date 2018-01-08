// src/componentqs/projects/comete/visualIdentity.js
import React from 'react'
import ReactDOM from 'react-dom'
import Number from '../common/number'
import DoubleIllustrations from '../common/doubleIllustrations'
import SectionInfos from '../common/sectionInfos'
import { TitleSecondary, SubtitlePart, Description } from '../common/texts'
import { responsive } from '../../../utils/responsive'

const mainColors = ['#240868', '#805bec', '#00f1cc']
const addColors = ['#0f0f0f', '#381958', '#808080', '#0f949f', '#00c1ff']
const addColors2 = ['#ff7780', '#ed8a7a', '#f3cb7f', '#eeb6ff']

// responsive color distribution
const respAddColors = ['#0f0f0f', '#381958', '#808080', '#0f949f']
const respAddColors2 = ['#ff7780', '#ed8a7a', '#f3cb7f']
const respAddColors3 = ['#00c1ff', '#eeb6ff']

class VisualIdentity extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const {setSectionMetadata} = this.props
    setSectionMetadata({
      title: 'Visual identity',
      icon: '/static/projects/menu/grey-id.svg',
      activeIcon: '/static/projects/menu/comete-id.png',
      element: ReactDOM.findDOMNode(this)
    })
  }

  render() {
    return (
      <div className='Visual_identity'>
       <style jsx>{`
          .Visual_identity {
            width: 100%;
            margin: auto;
            overflow: hidden;
            position: relative;
          }
          .Logo_header {
            width: 1020px;
            height: 230px;
            background-color: #e9ebee;
            text-align: center;
            margin: auto;
            margin-top: 80px;
            margin-bottom: 60px;
          }
          .Logo {
            position: relative;
            top: 35px;
          }
          @media screen and (max-width: 750px) {
            .Logo_header {
              text-align: left;
              padding-left: 25px;
              zoom: 0.8;
            }
          }
        `}</style>
        <Number content='01' color='#221061' borderBackground='linear-gradient(to left, #5d1bb0 0%, #4dd0ff 100%)' />
        <DoubleIllustrations
            main={{width: 462, src: '/static/projects/comete/3-visual-identity/picto-ID.png'}}
            second={{width: 1001, src: '/static/projects/comete/3-visual-identity/picto-ID.png'}}
            location={{bottom: 150, right: 160}}
            mobileLocation={{top: -800, right: -215, zoom: 0.7}} />
        <SectionInfos
          title={{content: 'Visual Identity', color: '#221061'}}
          baseline={{content: 'Create a visual identity able to please to a large audience', color: '#abb0bc'}}
          description={{color: '#474f6f', content: 'To feat to the strategique choice, we creat a visual identity æcolorful and with a lot of illustrations. The color are brightful and refere to 90’s videogames.'}}
          />
        <div className='Logo_header'>
          <img className='Logo' width='410' src='/static/projects/comete/3-visual-identity/logo.svg' alt='comete header' />
        </div>
        <Color />
        <Typography />
      </div>
    )
  }
}

class Color extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      titleStyle: {color: '#8061e7', textAlign: 'left'},
      subtitle1Style: {color: '#abb0bc', margin: '0 0 20px 0'},
      subtitle2Style: {textAlign: 'right', color: '#abb0bc', margin: '0 0 20px 0'}
    }
  }
  componentDidMount() {
    const { titleStyle, subtitle1Style, subtitle2Style } = this.state
    this.setState({
      titleStyle: responsive({base: {...titleStyle}, mobile: {marginLeft: 25}}),
      subtitle1Style: responsive({base: {...subtitle1Style}, mobile: {textAlign: 'left'}}),
      subtitle2Style: responsive({base: {...subtitle2Style} , mobile:{textAlign: 'left'}})
    })
  }
  render() {
    const { titleStyle, subtitle1Style, subtitle2Style } = this.state
    return (
      <div className='Color'>
        <style jsx>{`
          .Color {
            max-width: 1020px;
            text-align: center;
            margin: auto;
            position: relative;
          }
          .Outer_circle {
            width: 446px;
            height: 446px;
            border-radius: 50%;
            border: 1px solid #dee2ed;
            margin: auto;
            display: inline-block;
          }
          .Inner_circle {
            width: 375px;
            height: 375px;
            border-radius: 50%;
            background-color:#dee2ed;
            margin: auto;
            position: relative;
            top: 38px;
          }
          .Picture {
            margin: auto;
            position: relative;
            bottom: 55px;
          }
          .Main_colors {
            width: 205px;
            text-align: left;
            position: absolute;
            top: 100px;
            left: calc(50% - 388px);
          }
          .Main_color {
            width: 39px;
            height: 39px;
            border: 1px solid #240868;
            border-radius: 50%;
            display: inline-block;
            margin: auto;
            margin-right: 40px;
          }
          .Main_color:nth-child(4) {
            margin-right: 0;
          }
          .Main_color_inner {
            width: 31px;
            height: 31px;
            border-radius: 50%;
            margin: auto;
            position: relative;
            top: 4px;
          }
          .Add_colors {
            width: 260px;
            text-align: left;
            position: absolute;
            top: 100px;
            right: calc(50% - 450px);
          }
          .Add_color {
            width: 26px;
            height: 26px;
            border: 1px solid #0f0f0f;
            border-radius: 50%;
            display: inline-block;
            margin: auto;
            margin-right: 30px;
          }
          .Add_color:nth-child(6) {
            margin-right: 0;
          }
          .Add_color_inner {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            margin: auto;
            position: relative;
            top: 3px;
          }
          .Add_colors_2 {
            width: 260px;
            text-align: left;
            position: absolute;
            top: 200px;
            right: calc(50% - 510px);
          }
          .Add_colors_3 {
            width: 260px;
            text-align: left;
            position: absolute;
          }
          .Add_colors.responsive, .Add_colors_2.responsive, .Add_colors_3.responsive {
            display: none;
          }
          @media screen and (max-width: 750px) {
            .Outer_circle {
              position: relative;
              left: 190px;
              zoom: 0.8;
            }
            .Main_colors {
              left: 25px;
            }
            .Main_color {
              margin-right: 18px;
            }
            .Add_colors {
              top: 200px;
              left: 25px;
            }
            .Add_color {
              margin-right: 15px;
            }
            .Add_colors_2 {
              left: 25px;
              top: 300px;
            }
            .Add_colors_3 {
              left: 25px;
              top: 350px;
            }
            .Add_colors.responsive, .Add_colors_2.responsive, .Add_colors_3.responsive {
              display: inline-block;
            }
            .Add_colors.desktop, .Add_colors_2.desktop, .Add_colors_3.desktop {
              display: none;
            }
          }
        `}</style>
        <TitleSecondary
          content='Color'
          style={titleStyle} />
        <div className='Main_colors'>
          <SubtitlePart
            content='Main colors'
            style={subtitle1Style} />
            { mainColors.map((color, i) =>
              <div key={i} style={{borderColor: color}} className='Main_color clickable'>
                <div style={{backgroundColor: color}} className='Main_color_inner' />
              </div>
            )
          }
        </div>
        <div className='Add_colors desktop'>
          <SubtitlePart
            content='Additional colors'
            style={subtitle2Style} />
          {
            addColors.map((color, i) =>
              <div key={i} style={{borderColor: color}} className='Add_color clickable'>
                <div style={{backgroundColor: color}} className='Add_color_inner' />
              </div>
            )
          }
        </div>
        <div className='Add_colors_2 desktop'>
          {
            addColors2.map((color, i) =>
              <div key={i} style={{borderColor: color}} className='Add_color clickable'>
                <div style={{backgroundColor: color}} className='Add_color_inner' />
              </div>
            )
          }
        </div>
        <div className='Add_colors responsive'>
          <SubtitlePart
            content='Additional colors'
            style={subtitle2Style} />
          {
            respAddColors.map((color, i) =>
              <div key={i} style={{borderColor: color}} className='Add_color clickable'>
                <div style={{backgroundColor: color}} className='Add_color_inner' />
              </div>
            )
          }
        </div>
        <div className='Add_colors_2 response'>
          {
            respAddColors2.map((color, i) =>
              <div key={i} style={{borderColor: color}} className='Add_color clickable'>
                <div style={{backgroundColor: color}} className='Add_color_inner' />
              </div>
            )
          }
        </div>
        <div className='Add_colors_3 response'>
          {
            respAddColors3.map((color, i) =>
              <div key={i} style={{borderColor: color}} className='Add_color clickable'>
                <div style={{backgroundColor: color}} className='Add_color_inner' />
              </div>
            )
          }
        </div>
        <div className='Outer_circle'>
          <div className='Inner_circle'>
            <img width='398' className='Picture' alt='smartphone comete' src='/static/projects/comete/3-visual-identity/illu-smartphone-couleures.png' />
          </div>
        </div>
      </div>
    )
  }
}

class Typography extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      titleStyle: {color: '#8061e7', textAlign: 'left'}
    }
  }
  componentDidMount() {
    const { titleStyle } = this.state
    this.setState({ titleStyle: responsive({base: {...titleStyle}, mobile: {marginLeft: 25}}) })
  }
  render() {
    const { titleStyle } = this.state
    return (
      <div className='Typography'>
        <style jsx>{`
          .Typography {
            max-width: 1020px;
            text-align: center;
            margin: auto;
            margin-top: 60px;
            margin-bottom: 80px;
          }
          .Picture {
            margin-top: 40px;
            display: inline-block;
          }
          .Picture_responsive {
            display:none;
          }
          @media screen and (max-width: 750px) {
            .Title {
              margin-left: 25px;
            }
            .Picture {
              display:none;
            }
            .Picture_responsive {
              margin-top: 40px;
              display: inline-block;
            }
          }
        `}</style>
        <TitleSecondary
          content='Typography'
          style={titleStyle} />
        <img className='Picture' width='550' src='/static/projects/comete/3-visual-identity/typo-titilium.svg' alt='typo titilium' />
        <img className='Picture_responsive' width='90%' src='/static/projects/comete/responsive/3-visual-identity/typo-titilium1.svg' alt='typo titilium 1' />
        <img className='Picture_responsive' width='90%' src='/static/projects/comete/responsive/3-visual-identity/typo-titilium2.svg' alt='typo titilium 2' />
      </div>
    )
  }
}

export default VisualIdentity
