
const DownUp = ({ children, top = 0 }) =>
  <div className='Down_up_wrapper'>
    <style jsx>{`
      .Down_up_wrapper {
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
      .Down_up {
        position: relative;
        -webkit-transition			: all 1s  ;
        -moz-transition				: all 1s  ;
        -ms-transition				: all 1s  ;
        -o-transition 				: all 1s  ;
        transition 					: all 1s  ;
      }
    `}</style>
    <div style={{ top }} className='Down_up transitions'>{children}</div>
  </div>

export default DownUp