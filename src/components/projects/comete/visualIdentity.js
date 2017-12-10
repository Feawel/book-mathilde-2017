// src/componentqs/projects/comete/visualIdentity.js
import React from 'react'
import ReactDOM from 'react-dom'
import Number from '../common/number'
import DoubleIllustrations from '../common/doubleIllustrations'
import SectionInfos from '../common/sectionInfos'

const mainColors = ['#240868', '#805bec', '#00f1cc']
const addColors = ['#0f0f0f', '#381958', '#808080', '#0f949f', '#00c1ff']
const addColors2 = ['#ff7780', '#ed8a7a', '#f3cb7f', '#eeb6ff']

class VisualIdentity extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const {setSectionMetadata} = this.props
    setSectionMetadata({
      title: 'Visual identity',
      icon: '/static/projects/comete/2-menu/picto-ID-grey.svg',
      activeIcon: '/static/projects/comete/2-menu/picto-ID.svg',
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
        `}</style>
        <Number content='01' color='#221061' borderBackground='linear-gradient(to left, #5d1bb0 0%, #4dd0ff 100%)' />
        <DoubleIllustrations
            main={{width: 462, src: '/static/projects/comete/3-visual-identity/picto-ID.png'}}
            second={{width: 1001, src: '/static/projects/comete/3-visual-identity/picto-ID.png'}}
            location={{bottom: 150, right: 160}} />
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

const Color = () =>
  <div className='Color'>
   <style jsx>{`
      .Color {
        max-width: 1020px;
        text-align: center;
        margin: auto;
        position: relative;
      }
      .Title {
        font-family: Futura;
        font-weight: bold;
        font-size: 21px;
        text-transform: uppercase;
        color: #8061e7;
        line-height: 32px;
        text-align: left;
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
      .Color_title {
        font-family: Playfair Display;
        font-weight: 900;
        font-style: italic;
        font-size: 16px;
        color: #abb0bc;
        line-height: 32px;
        margin-bottom: 20px;
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
    `}</style>
    <div className='Title'>Color</div>
    <div className='Main_colors'>
      <div className='Color_title'>Main colors</div>
      {
        mainColors.map((color, i) =>
          <div key={i} style={{borderColor: color}} className='Main_color clickable'>
            <div style={{backgroundColor: color}} className='Main_color_inner' />
          </div>
        )
      }
    </div>
    <div className='Add_colors'>
      <div style={{textAlign: 'right'}} className='Color_title'>Additional colors</div>
      {
        addColors.map((color, i) =>
          <div key={i} style={{borderColor: color}} className='Add_color clickable'>
            <div style={{backgroundColor: color}} className='Add_color_inner' />
          </div>
        )
      }
    </div>
    <div className='Add_colors_2'>
      {
        addColors2.map((color, i) =>
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

const Typography = () =>
  <div className='Typography'>
   <style jsx>{`
      .Typography {
        max-width: 1020px;
        text-align: center;
        margin: auto;
        margin-top: 60px;
        margin-bottom: 80px;
      }
      .Title {
        font-family: Futura;
        font-weight: bold;
        font-size: 21px;
        text-transform: uppercase;
        color: #8061e7;
        line-height: 32px;
        text-align: left;
      }
      .Picture {
        margin-top: 40px;
      }
    `}</style>
    <div className='Title'>Typography</div>
    <img className='Picture' width='550' src='/static/projects/comete/3-visual-identity/typo-titilium.svg' alt='typo titilium' />
  </div>

export default VisualIdentity
