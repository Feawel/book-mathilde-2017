import Call from './call'

// src/componentqs/home/infos.js
const Infos = ({ infosAnimation, mask, title, problematic, number, tags, top, draw, homeSubcolor, colors, lineWidth = 35, openProject }) => (
  <div className='Project_infos transitions'>
    <style jsx>{`
      div {
        color: white;
      }
      h2 {
        color: white;
        font-size: 66px;
        font-family: 'Playfair Display';
        font-weight: 900;
        margin: 0;
      }
      .Project_infos {
        width: 100%;
        margin: auto;
        display: inline-block;
        text-align: center;
        position: absolute;
        top: calc(50% - 202px);
        z-index: 8;
        zoom: 1;
        opacity: 1;
      }
      .Project_infos_title {
        opacity: 1;
      }
      .Project_infos_problematic {
        font-size: 16px;
        font-family: Futura;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        margin-bottom: 30px;
        color: #94eced;
        line-height: 30px;
      }
      .Line {
        height: 4px;
        margin: 37px auto 20px auto;
      }
      @media screen and (max-width: 1023px) {
        .Project_infos {
          top: calc(50% - 170px);
        }
        h2 {
          font-size:44px;
        }
        .Line {
          margin: 17px auto 0 auto;
        }
        .Project_infos_problematic {
          font-size:12px;
        }
      }
      @media screen and (max-width: 640px) {
        h2 {
          padding: 10px;
        }
      }
      // Media Query to handle dezoom effect on centered typo when small height
      @media screen and (max-height: 700px) {
        .Project_infos {
          zoom: 0.9;
        }
      }
    `}</style>
    <Number number={number} infosAnimation={infosAnimation} />
    <div style={{ width: lineWidth, backgroundColor: colors.light}} className={`Line transitions ${infosAnimation.line}`} />
    <h2 style={{WebkitMaskImage: mask}} className={`Project_infos_title transitions_1s ${infosAnimation.title}`}>{title}</h2>
    <p style={{ color: colors.light }} className={`Project_infos_problematic transitions_1s baseline ${infosAnimation.baseline}`} dangerouslySetInnerHTML={{ __html: problematic }}/>
    <Tags top={top} infosAnimation={infosAnimation} />
    <Call openProject={() => openProject()} infosAnimation={infosAnimation} draw={null} />
  </div>
)

const Number = ({ number, infosAnimation }) =>
  <div className={`Tags transitions_1s ${infosAnimation.number}`}>
    <style jsx>{`
      .Tags {
        opacity: 1;
      }
      object svg {
        fill: white;
      }
      @media screen and (max-width: 1023px) {
        object {
          height: 48px;
        }
      }
    `}</style>
    <object
      data={`/static/home-projects/number/${number.index}.svg`}
      type='image/svg+xml'
      className='Project_infos_number'
      height={number.height}>
    </object>
  </div>

const Tags = ({ infosAnimation }) =>
  <div className={`Project_infos_tags transitions_1s ${infosAnimation.tags}`}>
    <style jsx>{`
      .Project_infos_tags {
        font-family: 'Playfair Display';
        font-weight: bold;
        font-size: 12px;
        opacity: 1;
      }
      @media screen and (max-width: 1023px) {
        .Project_infos_tags {
          display: none;
        }
      }
      .Tag {
        font-style: italic;
        letter-spacing: 0.05em;
      }
      .Dot {
        padding: 0 20px;
      }
    `}</style>
    <span className='Tag'>User Interface</span>
    <span className='Dot'>•</span>
    <span className='Tag'>User Experience</span>
    <span className='Dot' >•</span>
    <span className='Tag'>Illustration</span>
  </div>

export default Infos
