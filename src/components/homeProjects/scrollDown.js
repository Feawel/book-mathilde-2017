// src/componentqs/homeProjects/scrollDown.js
import Down_arrow from '../pictos/down_arrow'

const ScrollDown = ({ onClick }) => (
  <div onClick={onClick} className='Scroll_down clickable'>
    <style jsx>{`
      .Scroll_down {
        position: absolute;
        bottom: 45px;
        left: 34px;
        font-size: 10px;
        font-family: Futura;
        font-weight: bold;
        z-index: 9;
      }
      .Scroll_down_text {
        text-orientation: upright;
      }
      .Scroll_down_letter {
        display:block;
        color: white;
        position: relative;
      }
      @media screen and (max-width: 1023px) {
        .Scroll_down {
          width: 100%;
          bottom: 35px;
          left: 6px;
          text-align: center;
        }
        .Scroll_down_text {
          display: none;
        }
      }
    `}</style>
    <div className='Scroll_down_text'>
      <span className='Scroll_down_letter'>S</span>
      <span className='Scroll_down_letter'>C</span>
      <span className='Scroll_down_letter'>R</span>
      <span className='Scroll_down_letter'>O</span>
      <span style={{left: 2}} className='Scroll_down_letter'>L</span>
      <span style={{left: 2}} className='Scroll_down_letter'>L</span>
    </div>
    <Down_arrow />
  </div>
)

export default ScrollDown
