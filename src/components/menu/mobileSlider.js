// src/componentqs/menu/slider.js
import Link from 'next/link'

const Item = ({ project, index, current }) =>
  <Link href={{ pathname: '/', query: { project: project.key, typo: true } }} prefetch >
    <div className='Item clickable'>
      <style jsx>{`
        .Item {
          width: 100%;
          height: 64px;
          color: white;
          margin: 25px 0;
        }
        .Picture {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          overflow: hidden;
          display: inline-block;
          margin-right: 20px;
        }
        .Infos {
          width: calc(100% - 115px);
          max-width: 400px;
          display: inline-block;
          vertical-align: top;
          position: relative;
          top: 5px;
        }
        .Title {
          font-size: 18px;
          line-height: 22px;
        }
        .Tags {
          line-height: 18px;
          font-size: 10px;
          font-style: italic;
          letter-spacing: 0.5px;
        }
        .Arrow {
          display: inline-block;
          font-size: 30px;
          vertical-align: top;
          position: absolute;
          right: 25px;
        }
      `}</style>
      <div className='Picture'>
        <img height='64' alt='picture in menu' src={`/static/menu/rond-${project.key}.jpg`} />
      </div>
      <div className='Infos'>
        <div className='Title playfairdisplay_black'>{project.title}</div>
        <div className='Tags playfairdisplay_bold' style={{color: project.colors.primary}}>{project.tags.map(tag => tag.title).join(' • ')}</div>
      </div>
      <div className='Arrow'>
      ›
      </div>
    </div>
  </Link>

const MobileSlider = ({ projects = [], current, open, toggleOpen }) =>
  <div className='Menu_slider transitions'>
    <style jsx>{`
      .Menu_slider {
        width: 100%;
        height: 100%;
        color: white;
      }
      .Items {
        position: relative;
        padding: 20px;
        overflow: hidden;
        top: 55px;
        z-index: 0;
      }
      .Mask {
        position: fixed;
        top: 0;
        width: 100%;
        height: 55px;
        background-color: #001732;
        z-index: 1;
      }
      .Mask_opacity_1 {
        position: fixed;
        top: 57px;
        background-image: linear-gradient(to top, rgba(0, 23, 50, 0) 0%, #001732 100%);
        width: 100%;
        z-index: 1;
      }
      .Mask_opacity_2 {
        position: fixed;
        bottom: 0px;
        background-image: linear-gradient(to bottom, rgba(0, 23, 50, 0) 0%, #001732 100%);
        width: 100%;
        z-index: 1;
      }
    `}</style>
    <div className='Mask' style={{height: open ? 57 : 0}}></div>
    <div className='Mask_opacity_1' style={{height: open ? 61 : 0}} />
    <div className='Mask_opacity_2' style={{height: open ? 83 : 0}} />
    <div className='Items'>
      {projects.map((project, i) => <Item current={current} key={i} project={project} index={i} />)}
    </div>
  </div>


export default MobileSlider
