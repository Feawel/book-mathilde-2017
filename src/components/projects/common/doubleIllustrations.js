// src/componentqs/projects/common/number.js
import React from 'react'

const DoubleIllustrations = ({main, second, location, mobileLocation = {}}) =>
  <div className='Illustration'>
    <style jsx>{`
      .Illustration {
        position: relative;
        display: inline-block;
        width: 46%;
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
      @media screen and (max-width: 750px) {
        .Illustration {
          position: absolute;
        }
        .Illustration .Main {
          display: none;
        }
        .Illustration .Second {
          top: ${mobileLocation.top}px!important;
          right: ${mobileLocation.right}px!important;
          zoom: ${mobileLocation.zoom}!important;
          opacity: 0.2;
        }
      }
    `}</style>
    <img style={{bottom: location.bottom, right: location.right}} className='Second' width={second.width} src={second.src} />
    <img className='Main' width={main.width} src={main.src} />
  </div>

export default DoubleIllustrations
