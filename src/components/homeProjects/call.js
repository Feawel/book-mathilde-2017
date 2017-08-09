// src/componentqs/about/index.js
const Call = () => (
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
  `}</style>
    <div className='Call clickable'>
      <svg>
        <path d={'M25 2 L 195 2 A 5 5 0 0 1 195 42 L 25 42 A 5 5 0 0 1 25 2'}
          stroke='white'
          strokeWidth={1}
          fill='none'
        />
      </svg>
      <div className='Call_text'>View the case</div>
    </div>
  </div>
)

export default Call