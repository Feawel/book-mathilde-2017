// src/componentqs/about/index.js

const Call = ({ colors, infosAnimation, openProject }) => (
  <div onClick={(e) => openProject(e)} className={`Call_wrapper transitions ${infosAnimation.call}`}>
  <style jsx>{`
    .Call_wrapper {
      width: 100%;
      text-align: center;
      z-index: 8;
      opacity: 1;
      height: 40px;
      color: white;
      margin-top: 47px;
    }
    .Call {
      display: inline-block;
      position: relative;
      width: 175px;
      height: 40px;
      z-index: 12;
      border: 1px solid white;
      border-radius: 20px;
    }
    .Call:hover {
      background-color: white;
    }
    .Call_text {
      text-transform: uppercase;
      font-size: 12px;
      text-align: center;
      position: absolute;
      top: 14px;
      left: 0;
      height: 45px;
      width: 175px;
      letter-spacing: 1.2px;
    }
    .Call:hover .Call_text {
      color: ${colors.primary};
    }
    @media screen and (max-width: 1023px) {
      .Call {
        background-color: white;
      }
      .Call_text {
        color: ${colors.primary};
      }
    }
  `}</style>
    <div className='Call clickable'>
      <div className='Call_text futuralt_bold'>View the case</div>
    </div>
  </div>
)

export default Call
