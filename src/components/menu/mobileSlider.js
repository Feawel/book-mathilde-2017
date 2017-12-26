// src/componentqs/menu/slider.js

const Item = ({ project, index, current }) =>
   <div className='Item'>
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
        width: calc(100% - 150px);
        max-width: 400px;
        font-family: 'Playfair Display';
        display: inline-block;
        vertical-align: top;
        position: relative;
        top: 5px;
      }
      .Title {
        font-size: 18px;
        font-weight: 900;
        line-height: 22px;
      }
      .Tags {
        font-weight: 700;
        line-height: 18px;
        font-size: 10px;
        font-style: italic;
      }
      .Arrow {
        display: inline-block;
        font-size: 30px;
        vertical-align: top;
        position: relative;
        left: 20px;
      }
    `}</style>
    <div className='Picture'>
      <img height='64' alt={project.picture.alt} src={project.picture.src} />
    </div>
    <div className='Infos'>
      <div className='Title'>{project.title}</div>
      <div className='Tags' style={{color: project.color}}>{project.tags.map(tag => tag.title).join(' • ')}</div>
    </div>
    <div className='Arrow'>
    ›
    </div>
   </div>

const MobileSlider = ({ projects = [], current, open }) =>
  <div className='Menu_slider transitions'>
    <style jsx>{`
      .Menu_slider {
        width: 100%;
        height: 100%;
        color: white;
        font-family: 'Playfair Display';
      }
      .Items {
        position: absolute;
        padding: 20px;
        overflow: hidden;
        top: 100px;
        z-index: 0;
      }
      .Mask {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100px;
        background-color: #001732;
        z-index: 1;
      }
    `}</style>
    <div className='Mask' style={{height: open ? 100 : 0}}></div>
    <div className='Items'>
      {projects.map((project, i) => <Item current={current} key={i} project={project} index={i} />)}
    </div>
  </div>


export default MobileSlider