// src/componentqs/menu/slider.js

const MainItem = ({ project }) =>
  <div className='Main_item'>
    <style jsx>{`
      .Main_item {
        color: #00b0dc;
        font-size: 36px;
        margin: 30px 0;
      }
    `}</style>
    {project.title}
  </div>

const Item = ({ project, index }) =>
   <div style={{opacity: Math.max(1 - index*0.2, 0)}} className='Item'>
    <style jsx>{`
      .Item {
        color: white;
        font-size: 24px;
        height: 20px;
        margin: 30px 0;
      }
    `}</style>
    {project.title}
  </div>

const MenuSlider = ({ projects = [], current }) =>
  <div className='Menu_slider'>
    <style jsx>{`
      .Menu_slider {
        position: absolute;
        top: 40px;
        width: 350px;
        left: calc(50% - 150px);
        height: 100%;
        color: white;
        font-family: 'Playfair Display';
      }
      .active {
        color: red;
      }
      .Items {
        width: 350px;
      }
    `}</style>
    <div className='Items'>
      {projects.map((project, i) =>
        i === current
          ? <MainItem key={i} project={project} />
          : <Item key={i} project={project} index={i} />
      )}
    </div>
  </div>


export default MenuSlider
