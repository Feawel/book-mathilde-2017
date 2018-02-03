import Close from '../pictos/close'

const CloseAbout = ({toggleOpen}) =>
  <div className='About_close clickable' onClick={() => toggleOpen()}>
    <style jsx>{`
      .About_close {
        position: absolute;
        top: 30px;
        right: 27px;
        line-height: 22px;
        font-size: 12px;
        text-transform: uppercase;
        color: white;
        display: inline-block;
        letter-spacing: 2.4px;
        width: 110px;
        z-index: 5;
      }
      .About_close:hover .Circle_container {
        opacity: 0.8;
      }
      svg {
        fill: white;
        width: 50px;
        height: 50px;
        display: inline-block;
        position: relative;
        z-index: 1;
      }
      circle {
        opacity: 0.5;
      }
      .Close_container {
        width: 45px;
        height: 45px;
        vertical-align: top;
        display: inline-block;
        position: relative;
      }
      .Circle_container {
        position: absolute;
        top: -5px;
      }
      .Cross_container {
        position: absolute;
        top: 1px;
        transform: scale(0.7);
        -moz-transform: scale(0.7);
        left: 7px;
      }
      .Close_text {
        display: inline-block;
        vertical-align: top;
        position: relative;
        right: 7px;
        top: 10px;
        z-index: 0;
      }
    `}</style>
    <div className='Close_text futuralt_bold'>CLOSE</div>
    <div className='Close_container'>
      <div className='Circle_container'>
        <svg className='Circle'>
          <circle cx="26" cy="26" r="20" stroke="white" strokeWidth="1" fill="none" />
        </svg>
      </div>
      <div className='Cross_container'>
        <svg className='Cross'>
          <polygon points="26.1,8.8 23.2,5.9 16,13.2 8.9,6.1 6.1,9 13.2,16 5.9,23.3 8.7,26.1 16,18.8 23,25.9 25.9,23.1 18.8,16 "/>
        </svg>
      </div>
    </div>
  </div>


export default CloseAbout
