// src/componentqs/projects/common/social.js
import React from 'react'

const Call = ({text, color = '#8061e7', colorHover = 'white', width = 150,
  backgroundInner = 'white', background = 'linear-gradient(-220deg, #4dd0ff 0%, #5d1bb0 100%)'}) => (
  <div style={{background}} className='Call clickable'>
   <style jsx>{`
      .Call {
        border-radius: 19px;
        width: ${width}px;
        height: 40px;
        position: relative;
        overflow: hidden;
      }
      .Call_inner {
        position: relative;
        top: 1px;
        left: 1px;
        border-radius: 19px;
        width: ${width-2}px;
        height: 38px;
      }
      .Call_text {
        position: absolute;
        top: 8px;
        left: 0;
        text-align: center;
        font-family: Futura;
        font-weight: bold;
        text-transform: uppercase;
        line-height: 22px;
        font-size: 10px;
        display: inline-block;
        width: ${width-2}px;
      }
      .Call:hover .Call_inner {
        top: -50px;
      }
      .Call:hover .Call_text {
        color: ${colorHover}!important;
      }
      @media screen and (max-width: 1000px) {
        .Call {
          margin: auto;
        }
      }
    `}</style>
    <div style={{background: backgroundInner}} className='Call_inner transitions'>
    </div>
    <div style={{color}} className='Call_text transitions'>
      {text}
    </div>
  </div>
)

export default Call
