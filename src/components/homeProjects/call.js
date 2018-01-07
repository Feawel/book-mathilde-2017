// src/componentqs/about/index.js

const Call = ({ draw, infosAnimation, openProject }) => (
  <div onClick={(e) => openProject(e)} className={`Call_wrapper transitions ${infosAnimation.call}`}>
  <style jsx>{`
    .Call_wrapper {
      width: 100%;
      text-align: center;
      z-index: 8;
      opacity: 1;
      height: 40px;
      color: white;
      margin-top: 40px;
    }
    .Call {
      display: inline-block;
      position: relative;
      width: 218px;
      height: 40px;
      z-index: 12;
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
      letter-spacing: 0.1em;
    }
    svg {
      height: 45px;
      width: 218px;
      position: absolute;
      top: 0;
      left: 0;
    }
    .Call:hover path {
      fill: white;
    }
    .Call:hover .Call_text {
      color: #008db9;
    }
    .path {
      stroke-dasharray: 2000;
      animation: dash 3s linear forwards;
    }
    .path2 {
      stroke-dasharray: 2000;
      animation: dash2 3s linear forwards;
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
    <div className='Call transitions clickable'>
      <svg>

        <path d={'M25 2 L 195 2 A 5 5 0 0 1 195 42 L 25 42 A 5 5 0 0 1 25 2'}
          stroke='white'
          className={`transitions ${draw === null ? '' : (draw === false ? 'path2' : 'path')}`}
          strokeWidth={1}
          fill='none'
        />
      </svg>
      <div className='Call_text'>View the case</div>
    </div>
  </div>
)

export default Call
