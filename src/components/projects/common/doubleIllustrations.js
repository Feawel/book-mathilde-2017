// src/componentqs/projects/common/number.js
import React from 'react'

const DoubleIllustrations = ({main, second, location}) =>
  <div className='Illustration'>
    <style jsx>{`
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
        z-index: 0;
      }
    `}</style>
    <img style={{bottom: location.bottom, right: location.right}} className='Second' width={second.width} src={second.src} />
    <img className='Main' width={main.width} src={main.src} />
  </div>

export default DoubleIllustrations
