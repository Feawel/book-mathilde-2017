
// href { pathname: '/', query: { project: project.key, typo: true } }
export const ButtonHome = ({infosAnimation, openProject, href, colors, height = 38, width = 175, buttonColor = '#fff', buttonColorRgb = '255, 255, 255'}) =>
  <a href={href} onClick={(e) => {
    e.preventDefault()
    openProject()
  }} className={`futuralt_bold Button_wrapper ${infosAnimation.call}`}>
    <style jsx>{`
      a {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        text-decoration: none;
        cursor: pointer;
        border: 1px solid white;
        border-radius: 19px;
        height: ${height}px;
        width: ${width}px;
        padding: 0;
        outline: none;
        overflow: hidden;
        color: ${buttonColor};
        transition: color 0.3s 0.1s ease-out;
        text-align: center;
        line-height: 250%;
        letter-spacing: 1.2px;
        font-size: 12px;
      }
      a::before{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        content:'';
        border-radius: 50%;
        display: block;
        width: ${width*2}px;
        height: ${width*2}px;
        line-height: ${width*2}px;
        left: -${width/2}px;
        text-align: center;
        transition: box-shadow 0.5s ease-out;
        z-index: -1;
        box-sizing: border-box;
      }
      a::after {
        box-sizing: border-box;
      }
      a:hover{
        color: ${colors.primary};
      }
      a:hover::before{
        box-shadow:inset 0 0 0 ${width}px rgba(${buttonColorRgb},1);
        box-sizing: border-box;
      }
      .Inner_text {
        position: relative;
        top: 5px;
      }
      @media screen and (max-width: 1023px) {
        .Call_wra
        a {
          background: white;
          color: ${colors.primary};
        }
      }
    `}</style>
    <i className="fa fa-dribbble"></i> <span className='Inner_text'>VIEW THE CASE</span>
  </a>

export const ButtonProject = ({footer, text = 'Hello', href, target, height = 38, width = 200, textColor = '#8061e7', textColorHover = '#fff', gradient = 'linear-gradient(-220deg, #4dd0ff 0%, #5d1bb0 100%)', background = 'white'}) =>
  <a href={href} target={target} className='button_wrapper'>
    <style jsx>{`
      .button_wrapper {
        display: block;
        position: relative;
        margin: 20px 0 20px 0;
        height: ${height+2}px;
        width: ${width+2}px;
        text-decoration: none;
        z-index: 1;
      }
      .button {
        display: inline-flex;
        height: ${height}px;
        width: ${width}px;
        text-transform: uppercase;
        font-size: .8em;
        letter-spacing: 1.5px;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        top: 1px;
        left: ${footer ? 0 : 1}px;
        cursor: pointer;
        border-radius: 20px;
        background: ${background};
        font-size: 10px;
        z-index: 10;
      }

      .button_container {
        width: ${width+2}px;
        height: ${height+2}px;
        background-image: ${gradient};
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        border-radius: 20px;
      }

      .button_text {
        color: ${textColor};
        text-decoration: none;
        letter-spacing: 1.2px;
      }

      .button .button_text {
        position: relative;
        transition: all .2s ease-Out;
      }

      .circle {
        width: 0%;
        height: 0%;
        opacity: 0;
        line-height: ${height}px;
        border-radius: 50%;
        background-image: ${gradient};
        position: absolute;
        transition: all .25s ease-Out;
        top: ${(height/2)}px;
        left: ${width/2}px;
      }

      .button:hover .circle {
        width: 100%;
        height: 100%;
        opacity: 1;
        top: 0;
        left: 0;
        border-radius: 20px;
      }

      .button:hover .button_text {
        color: ${textColorHover};
      }
      @media screen and (max-width: 1000px) {
        .button_text {
          color: ${textColorHover};
        }
        .button_container {
          top: 1px;
        }
        .circle {
          width: 100%;
          height: 100%;
          opacity: 1;
          top: 0;
          left: 0;
          border-radius: 20px;
        }
      }
    `}</style>
    <div className='button_container' />
    <div className='button futuralt_bold'>
      <div className='circle'></div>
      <span className='button_text'>{text}</span>
    </div>
  </a>

