import Close from '../pictos/close'

const CloseAbout = ({toggleOpen}) =>
  <div className='About_close clickable' onClick={() => toggleOpen()}>
    <style jsx>{`
      .About_close {
        position: absolute;
        top: 40px;
        right: 40px;
        font-family: Futura;
        font-weight: bold;
        line-height: 22px;
        font-size: 12px;
        text-transform: uppercase;
        color: white;
        display: inline-block;
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
      polygon {}
      .Close_text {
        display: inline-block;
        vertical-align: top;
        position: relative;
        top: 6px;
        right: 10px;
        z-index: 0;
      }
    `}</style>
    <div className='Close_text'>CLOSE</div>
    <svg>
      <circle cx="16" cy="16" r="20" stroke="white" strokeWidth="1" fill="none" />
      <polygon points="26.1,8.8 23.2,5.9 16,13.2 8.9,6.1 6.1,9 13.2,16 5.9,23.3 8.7,26.1 16,18.8 23,25.9 25.9,23.1 18.8,16 "/>
    </svg>
  </div>


export default CloseAbout
