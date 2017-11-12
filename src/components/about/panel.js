import React from 'react'
import {enableScroll, disableScroll} from '../../utils/scroll'

import Social from '../homeProjects/social'
import AboutText from './text'
import AboutSkills from './skills'
import Close from './close'

class Panel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    const {open, toggleOpen} = this.props
    return (
      <div style={{
        height: open ? '585px' : 0,
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

          // Desktop > 1200px
          @media screen and (min-width: 1200) {
            zoom: 0.8;
          }
          // 1000 < Screen < 1200 : mini texte skill + pas de trait + animation successive
          @media screen and (min-width: 1000) and (max-width: 1200) {
            zoom: 0.8;
          }
          // 750 < Screen < 1000 (tablette portrait) : plus de texte, animation successive
          @media screen and (min-width: 750) and (max-width: 1000) {
            zoom: 0.7;
          }
        `}</style>
        <Close toggleOpen={() => toggleOpen()} />
        <AboutText />
        <AboutSkills />
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
