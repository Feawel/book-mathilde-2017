// src/componentqs/projects/common/number.js
import React from 'react'

const Number = ({content, color, borderBackground}) =>
  <div className='Number_container' style={{color}}>
    <style jsx>{`
      .Number_container {
        font-family: 'Playfair Display';
        font-weight: 900;
        font-size: 48px;
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
      }
    `}</style>
    <div className='Number'>{content}</div>
    <div className='Border_bottom' style={{backgroundImage: borderBackground}}></div>
  </div>

export default Number
