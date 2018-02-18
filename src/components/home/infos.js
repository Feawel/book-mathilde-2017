// import Call from './call'
import {ButtonHome} from '../button'

// src/componentqs/home/infos.js
const Infos = ({ projectKey, infosAnimation, mask, title, problematic, number, tags, top, homeSubcolor, colors, lineWidth = 40, openProject }) => (
  <div className='Project_infos transitions'>
    <style jsx>{`
      div {
        color: white;
      }
      h2 {
        color: white;
        font-size: 66px;
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
        transform: scale(1, 1);
        opacity: 1;
      }
      .Project_infos_title {
        opacity: 1;
      }
      .Project_infos_problematic {
        font-size: 16px;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        color: #94eced;
        line-height: 30px;
        -webkit-margin-before: 0em;
        -webkit-margin-after: 0em;
        -webkit-margin-start: 0px;
        -webkit-margin-end: 0px;
        margin-top: 20px;
        margin-bottom: 22px;
      }
      .Line {
        height: 4px;
        margin: 37px auto 20px auto;
      }
      .Call_wrapper {
        width: 100%;
        position: relative;
        text-align: center;
        z-index: 8;
        opacity: 1;
        height: 40px;
        color: white;
        margin-top: 47px;
      }
      @media screen and (max-width: 1023px) {
        .Project_infos {
          top: calc(50% - 170px);
        }
        h2 {
          font-size:44px;
        }
        .Line {
          margin: 27px auto 0 auto;
        }
        .Project_infos_problematic {
          font-size:12px;
        }
      }
      @media screen and (max-width: 750px) {
        h2 {
          padding: 10px;
        }
        .Project_infos {
          transform: scale(0.9, 0.9);
        }
        .Project_infos_title {
          padding-top: 20px;
        }
        .Project_infos_problematic {
          line-height: 21px;
          letter-spacing: 1.8px;
        }
        .Call_wrapper {
          margin-top: 35px;
        }
      }
    `}</style>
    <Number number={number} infosAnimation={infosAnimation} />
    <div style={{ width: lineWidth, backgroundColor: colors.light}} className={`Line transitions ${infosAnimation.line}`} />
    <h2 style={{WebkitMaskImage: mask}} className={`Project_infos_title playfairdisplay_black transitions_1s ${infosAnimation.title}`}>{title}</h2>
    <p style={{ color: colors.light }} className={`futuralt_bold Project_infos_problematic transitions_1s baseline ${infosAnimation.baseline}`} dangerouslySetInnerHTML={{ __html: problematic }}/>
    <Tags tags={tags} top={top} infosAnimation={infosAnimation} />
    <div className='Call_wrapper'>
      <ButtonHome href={`/${projectKey}`} colors={colors} openProject={() => openProject()} infosAnimation={infosAnimation} />
    </div>
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

const Tags = ({ infosAnimation, tags }) =>
  <div className={`Project_infos_tags playfairdisplay_black transitions_1s ${infosAnimation.tags}`}>
    <style jsx>{`
      .Project_infos_tags {
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
    {tags.map((tag, i) => {
      const next = i === tags.length - 1 ? <span key={`dot-${i}`} /> : <span key={`dot-${i}`} className='Dot'>•</span>
      return [<span key={`tag-${i}`} className='Tag'>{tag.title}</span>, next]
    })}
  </div>

export default Infos
