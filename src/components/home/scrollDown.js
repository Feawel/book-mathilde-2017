// src/componentqs/home/scrollDown.js
import Down_arrow from '../pictos/down_arrow'

const ScrollDown = ({ onClick, move = false }) => (
  <div onClick={onClick} className='Scroll_down clickable'>
    <style jsx>{`
      .Scroll_down {
        position: absolute;
        bottom: 40px;
        left: 35px;
        font-size: 10px;
        z-index: 10;
      }
      .Scroll_down_text {
        text-orientation: upright;
        position: relative;
        top: 5px;
      }
      .Scroll_down_letter {
        display:block;
        color: white;
        position: relative;
      }
      .Down_arrow_container {
        transform: scale(1.2);
        -moz-transform: scale(1.2);
      }
      .Scroll_down:hover > .Down_arrow_container {
        top: 10px!important;
      }
      @media screen and (max-width: 1023px) {
        .Scroll_down {
          bottom: 70px;
          text-align: center;
          transform: scale(1.5);
          -moz-transform: scale(1.5);
          left: 50%;
        }
        .Scroll_down_text {
          display: none;
        }
      }
    `}</style>
    <div className='Scroll_down_text futuralt_bold'>
      <span className='Scroll_down_letter' style={{left: 1}}>S</span>
      <span className='Scroll_down_letter' style={{left: 1}}>C</span>
      <span className='Scroll_down_letter' style={{left: 1}}>R</span>
      <span className='Scroll_down_letter'>O</span>
      <span style={{left: 2}} className='Scroll_down_letter'>L</span>
      <span style={{left: 2}} className='Scroll_down_letter'>L</span>
    </div>
    <div className='Down_arrow_container transitions' style={{position: 'relative', top: move ? 10 : 0}}>
      <Down_arrow />
    </div>
  </div>
)

export default ScrollDown
