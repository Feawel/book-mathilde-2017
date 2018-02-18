import React from 'react'
import data from '../../../data'

import Credits from './credits'
import Contact from './contact'
import Slider from './slider'
import MobileSlider from './mobileSlider'
import Lines from './lines'
import {enableScroll, disableScroll} from '../../utils/scroll'

const MenuPanel = ({open, openAbout, toggleOpen, current, projectAppear, setProject, isMobile}) =>
  <div style={{
    opacity: open ? 1 : 0,
    visibility: open ? '' : 'hidden'
  }} className={`Menu_panel ${open ? 'transitions_1_5s' : ''}`}>
    <style jsx>{`
      .Menu_panel {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 11;
        overflow: hidden;
      }
      .Mobile_slider {
        width: 100%;
        height: 100%;
        display: none;
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
    <Lines isMobile={isMobile} />
    <Contact />
    <Credits />
    <div className='Slider'>
      <Slider toggleOpen={toggleOpen} setProject={setProject} projects={data.projects} current={current} />
    </div>
    <div className='Mobile_slider'>
      <MobileSlider toggleOpen={toggleOpen} open={open} projects={data.projects} current={current} />
    </div>
  </div>

export default MenuPanel
