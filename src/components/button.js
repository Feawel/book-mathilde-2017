
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
    `}</style>
    <i className="fa fa-dribbble"></i> <span className='Inner_text'>VIEW THE CASE</span>
  </a>

