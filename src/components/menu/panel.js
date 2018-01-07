import React from 'react'

import Credits from './credits'
import Contact from './contact'
import Slider from './slider'
import MobileSlider from './mobileSlider'
import {enableScroll, disableScroll} from '../../utils/scroll'

class MenuPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    const {open, toggleOpen, projects, current, projectAppear} = this.props
    return (
      <div style={{
        visibility: open ? '' : 'hidden',
        height: open ? '100%' : 0,
        display: projectAppear ? 'none' : 'block'
      }} className='Menu_panel transitions'>
        <style jsx>{`
          .Menu_panel {
            position: absolute;
            top: 0;
            width: 100%;
            z-index: 11;
            background-color: #001732;
            overflow: hidden;
          }
          .Mobile_slider {
            display: none;
          }
          // 750 < Screen < 1000 (tablette portrait)
          @media screen and (min-width: 750px) and (max-width: 1000px) {
            zoom: 0.75;
          }
          @media screen and (max-width: 750px) {
            .Menu_panel {
              overflow: auto;
            }
            .Slider {
              display:none;
            }
            .Mobile_slider {
              display:block;
            }
          }
        `}</style>
        <Contact />
        <Credits />
        <div className='Slider'>
          <Slider projects={projects} current={current} />
        </div>
        <div className='Mobile_slider'>
          <MobileSlider open={open} projects={projects} current={current} />
        </div>
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

export default MenuPanel
