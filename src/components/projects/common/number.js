// src/componentqs/projects/common/number.js
import React from 'react'

const Number = ({content, color, borderBackground, responsivePicto}) =>
  <div className='Number_container playfairdisplay_black' style={{color}}>
    <style jsx>{`
      .Number_container {
        font-size: 48px;
        line-height: 29px;
        text-transform: uppercase;
        height: 65px;
        text-align: center;
        margin-top: 50px;
        position: relative;
        text-align: center;
      }
      .Border_bottom {
        display: inline-block;
        width: 52px;
        height: 4px;
      }
      .Responsive_picto { display: none; }
      @media screen and (max-width: 750px) {
        .Number, .Border_bottom {
          display: none;
        }
        .Responsive_picto {
          display: inline-block;
          width: 60px;
        }
      }
    `}</style>
    <img className='Responsive_picto' src={responsivePicto} />
    <div className='Number'>{content}</div>
    <div className='Border_bottom' style={{backgroundImage: borderBackground}}></div>
  </div>

export default Number
