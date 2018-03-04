import React from 'react'
import {enableScroll, disableScroll} from '../../utils/scroll'

import Social from './social'
import AboutText from './text'
import AboutSkills from './skills'
import Close from './close'
import Columns from '../columns'

class Panel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    const {open, toggleOpen} = this.props
    return (
      <div style={{
        height: open ? '565px' : 0,
        visibility: open ? '' : 'hidden',
        marginBottom: open ? 10 : 0
      }} className='About_panel'>
        <style jsx>{`
          .About_panel {
            width: 100%;
            z-index: 12;
            margin-bottom: 10px;
            overflow: hidden;
            background-color: #001732;
            -webkit-transition      : all 1.5s  ;
            -moz-transition       : all 1.5s  ;
            -ms-transition        : all 1.5s  ;
            -o-transition         : all 1.5s  ;
            transition          : all 1.5s  ;
          }
          .Container {
            z-index: 1;
          }
          .Line {
            width: 1px;
            background-color: rgba(255,255,255,0.1);
            height: 100%
            position: absolute;
            top: 0;
            z-index: 2;
          }

          .Line_1 { left: 20%;}
          .Line_2 { left: 40%;}
          .Line_3 { left: 60%;}
          .Line_4 { left: 80%;}

          // Desktop > 1200px
          @media screen and (min-width: 1200px) {
            .Container {
              transform: scale(1);
            }
          }
          // 1000 < Screen < 1200 : mini texte skill + pas de trait + animation successive
          @media screen and (min-width: 1000px) and (max-width: 1200px) {
            .Container {
              transform: scale(0.8, 0.8);
              transform-origin: left center;
              -ms-transform: scale(0.8, 0.8);
              -webkit-transform: scale(0.8, 0.8);
              -moz-transform:  scale(0.8,0.8);
            }
          }
          // 750 < Screen < 1000 (tablette portrait) : plus de texte, animation successive
          @media screen and (min-width: 750px) and (max-width: 1000px) {
            .Container {
              transform: scale(0.7, 0.7);
              transform-origin: left center;
              -ms-transform: scale(0.7, 0.7);
              -webkit-transform: scale(0.7, 0.7);
              -moz-transform:  scale(0.7,0.7);
             }
          }
          @media screen and (max-width: 750px) {
            .Line_1 { left: 33.3%!important;}
            .Line_2 { left: 66.6%!important;}
            .Line_3 { display: none;}
            .Line_4 { display: none;}
          }
        `}</style>
        <div className='Line Line_1' style={{left: '20%'}} />
        <div className='Line Line_2' style={{left: '40%'}} />
        <div className='Line Line_3' style={{left: '60%'}} />
        <div className='Line Line_4' style={{left: '80%'}} />
        <Close toggleOpen={() => toggleOpen()} />
        <div className='Container'>
          <AboutText />
          <AboutSkills />
        </div>
        <Social />
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.open && !this.props.open) {
      disableScroll()
    } else if (!nextProps.open && this.props.open) {
      enableScroll()
    }
  }
}

export default Panel
