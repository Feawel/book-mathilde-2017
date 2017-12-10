// src/componentqs/projects/comete/illustration.js
import React from 'react'
import ReactDOM from 'react-dom'

class Illustrations extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const {setSectionMetadata} = this.props
    setSectionMetadata({
      title: 'Illustration',
      icon: '/static/projects/comete/2-menu/picto-illu-grey.svg',
      activeIcon: '/static/projects/comete/2-menu/picto-illu.svg',
      element: ReactDOM.findDOMNode(this)
    })
  }

  render() {
    return (
      <div className='Illustrations'>
       <style jsx>{`
          .Illustrations {
            width: 100%;
            margin: auto;
            overflow: hidden;
          }
          .Number_container {
            font-family: 'Playfair Display';
            font-size: 48px;
            color: #221061;
            line-height: 32px;
            text-transform: uppercase;
            height: 65px;
            text-align: center;
            margin-top: 60px;
            position: relative;
            text-align: center;
          }
          .Border_bottom {
            display: inline-block;
            width: 52px;
            height: 4px;
            background-image: linear-gradient(to left, #5d1bb0 0%, #4dd0ff 100%);
          }
          .Infos {
            display: inline-block;
            width: 50%;
            vertical-align: top;
            margin-top: 180px;
          }
          .Illustration {
            position: relative;
            display: inline-block;
            width: 50%;
            margin-top: 60px;
          }
          .Illustration .Main {
            padding-right: 60px;
            float: right;
            z-index: 1;
            position: relative;
          }
          .Illustration .Second {
            position: absolute;
            opacity: 0.1;
            bottom: 200px;
            right: 100px;
            z-index: 0;
          }
          .Title {
            font-family: 'Playfair Display';
            font-weight: 900;
            font-size: 66px;
            color: #221061;
            line-height: 32px;
            max-width: 460px;
          }
          .Baseline {
            font-family: Futura;
            font-weight: bold;
            font-size: 14px;
            line-height: 24px;
            color: #abb0bc;
            text-transform: uppercase;
            margin-top: 30px;
            max-width: 460px;
          }
          .Description {
            font-family: Futura;
            font-size: 14px;
            line-height: 24px;
            color: #474f6f;
            margin-top: 10px;
            max-width: 460px;
          }
          .First_row_illustrations {
            display: inline-block;
          }
          .Second_row {
            position: relative;
            top: -4px;
          }
        `}</style>
        <div className='Number_container'>
          <div className='Number'>04</div>
          <div className='Border_bottom'></div>
        </div>
        <div className='Illustration'>
          <img className='Second' width='851' src='/static/projects/comete/6-illustrations/picto-illu.png' />
          <img className='Main' width='462' src='/static/projects/comete/6-illustrations/picto-illu.png' />
        </div>
        <div className='Infos'>
          <div className='Title'>Illustrations</div>
          <div className='Baseline'>pedagogical illustrations</div>
          <div className='Description'>In addition to the site, the communication and the interractive games, I made for the exhibition illustrations with pedagogical purpose in addition to the photographs presented.</div>
        </div>
        <div className='First_row'>
          <img className='First_row_illustrations' width='50%' src='/static/projects/comete/6-illustrations/illu1-2.png' />
          <img className='First_row_illustrations' width='50%' src='/static/projects/comete/6-illustrations/ilu1-zoom2.png' />
        </div>
        <div className='Second_row'>
          <img width='100%' src='/static/projects/comete/6-illustrations/illu2.png' />
        </div>
      </div>
    )
  }
}


export default Illustrations
