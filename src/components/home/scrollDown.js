// src/componentqs/home/scrollDown.js
import Down_arrow from '../pictos/down_arrow'
import {data} from '../../../data'

const InactiveCircle = ({hasMargin}) =>
  <div className='Inactive_circle transitions'>
    <style jsx>{`
      .Inactive_circle {
        display: inline-block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: white;
        opacity: 0.6;
        margin-right: ${hasMargin ? 10 : 0}px;
      }
    `}</style>
  </div>

const ActiveCircle = ({hasMargin}) =>
  <div className='Active_circle_wrapper transitions'>
    <style jsx>{`
      .Active_circle_wrapper {
        display: inline-block;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        border: 1px solid white;
        margin-right: ${hasMargin ? 10 : 0}px;
        position: relative;
        top: 10px;
      }
      .Active_circle {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
        position: relative;
        left: 8px;
        top: 8px;
      }
    `}</style>
    <div className='Active_circle transitions' />
  </div>

const ScrollDown = ({ isMobile, project, onPrevious, onNext, move = false }) => (
  <div onClick={isMobile ? () => {} : onNext} className='Scroll_down clickable'>
    <style jsx>{`
      .Scroll_down {
        position: absolute;
        bottom: 45px;
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
      .Mobile_scroll {
        display: none;
      }
      @media screen and (max-width: 1023px) {
        .Down_arrow_container {
          display: none;
        }
        .Scroll_down {
          bottom: 25px;
          text-align: center;
          width: 100%;
          left: 0;
        }
        .Scroll_down_text {
          display: none;
        }
        .Mobile_scroll {
          position: relative;
          display: block;
          width: 100%;
          margin: auto;
          text-align: center;
        }
        .Left_arrow {
          position: absolute;
          top: 15px;
          left: 15px;
        }
        .Right_arrow {
          top: 15px;
          position: absolute;
          right: 15px;
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
    <div className='Mobile_scroll transitions'>
      <img onClick={onPrevious} className='Left_arrow' alt='left arrow' src='/static/home-projects/left-arrow.png' />
      {data.projects.map((p, i) => p.key === project.key ? <ActiveCircle hasMargin={i !== data.projects.length - 1} key={i} /> : <InactiveCircle hasMargin={i !== data.projects.length - 1} key={i} />)}
      <img onClick={onNext} className='Right_arrow' alt='right arrow' src='/static/home-projects/right-arrow.png' />
    </div>
  </div>
)

export default ScrollDown
