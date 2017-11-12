import DownUp from '../animations/downUp.js'
import Call from './call'

// src/componentqs/homeProjects/infos.js
const Infos = ({ title, problematic, number, tags, top, draw, lineWidth = 35 }) => (
  <div className='Project_infos'>
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
        z-index: 9;
        zoom: 1;
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
        background-color: #94eced;
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
    <Number top={top} number={number} />
    <div style={{ width: lineWidth}} className='Line transitions' />
    <DownUp top={top}>
      <h2 className='Project_infos_title'>{title}</h2>
    </DownUp>
    <DownUp top={top}>
      <p className='Project_infos_problematic' dangerouslySetInnerHTML={{ __html: problematic }}/>
    </DownUp>
    <Tags top={top} />
    <Call top={top} draw={draw} />
  </div>
)

const Number = ({ top, number }) =>
  <DownUp top={top}>
    <style jsx>{`
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
  </DownUp>

const Tags = ({ top }) =>
  <DownUp top={top}>
    <div className='Project_infos_tags'>
      <style jsx>{`
        .Project_infos_tags {
          font-family: 'Playfair Display';
          font-weight: bold;
          font-size: 12px;
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
  </DownUp>

export default Infos
