// src/componentqs/homeProjects/scrollDown.js
import Down_arrow from '../pictos/down_arrow'

const ScrollDown = ({ onClick }) => (
  <div className='Scroll_down clickable'>
    <style jsx>{`
      .Scroll_down {
        position: absolute;
        bottom: 45px;
        left: 34px;
        font-size: 10px;
        font-family: Futura;
        font-weight: bold;
        z-index: 10;
      }
      .Scroll_down_text {
        text-orientation: upright;
      }
      .Scroll_down_letter {
        display:block;
        color: white;
        position: relative;
      }
    `}</style>
    <div onClick={onClick} className='Scroll_down_text'>
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
