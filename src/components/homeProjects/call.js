// src/componentqs/about/index.js
import DownUp from '../animations/downUp.js'

const Call = ({ draw, top }) => (
  <div className='Call_wrapper'>
  <style jsx>{`
    .Call_wrapper {
      width: 100%;
      text-align: center;
      position: absolute;
      bottom: 140px;
      z-index: 10;
      height: 40px;
      color: white;
    }
    .Call {
      display: inline-block;
      position: relative;
      width: 218px;
      height: 40px;
    }
    .Call_text {
      text-transform: uppercase;
      font-size: 12px;
      font-family: Futura;
      font-weight: bold;
      text-align: center;
      position: absolute;
      top: 14px;
      left: 0;
      height: 45px;
      width: 218px;
    }
    svg {
      height: 45px;
      width: 218px;
      position: absolute;
      top: 0;
      left: 0;
    }
    .path {
      stroke-dasharray: 2000;
      animation: dash 5s linear forwards;
    }
    .path2 {
      stroke-dasharray: 2000;
      animation: dash2 5s linear forwards;
    }
    @keyframes dash {
      from {
        stroke-dashoffset: 2000;
      }
      to {
        stroke-dashoffset: 0;
      }
    }
    @keyframes dash2 {
      from {
        stroke-dashoffset: 0;
      }
      to {
        stroke-dashoffset: -2000;
      }
    }
    @media screen and (max-width: 1023px) {
      svg path {
        fill: white;
      }
      .Call_text {
        color: #008db9;
      }
    }
  `}</style>
    <div className='Call clickable'>
      <svg>

        <path d={'M25 2 L 195 2 A 5 5 0 0 1 195 42 L 25 42 A 5 5 0 0 1 25 2'}
          stroke='white'
          className={draw === null ? '' : (draw === false ? 'path2' : 'path')}
          strokeWidth={1}
          fill='none'
        />
      </svg>
      <DownUp top={top}>
        <div className='Call_text'>View the case</div>
      </DownUp>
    </div>
  </div>
)

export default Call