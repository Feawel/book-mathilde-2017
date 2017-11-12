import React from 'react'

import Credits from './credits'
import Contact from './contact'
import Button from './button'
import Picture from './picture'
import Slider from './slider'

const MenuPanel = ({open, toggleOpen, projects, current}) =>
  <div style={{
    visibility: open ? '' : 'hidden',
    height: open ? '100%' : 0
  }} className='Menu_panel'>
    <style jsx>{`
      .Menu_panel {
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 11;
        background-color: #001732;
        margin-bottom: 10px;
        overflow: hidden;
        -webkit-transition      : all  .5s  ;
        -moz-transition       : all .5s  ;
        -ms-transition        : all .5s  ;
        -o-transition         : all .5s  ;
        transition          : all .5s  ;
      }
    `}</style>
    <Contact />
    <Credits />
    <Button />
    <Picture />
    <Slider projects={projects} current={current} />
  </div>

export default MenuPanel
