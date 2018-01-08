// src/componentqs/menu/slider.js
import Button from './button'
import Picture from './picture'

const MainItem = ({ project }) =>
  <div className='Main_item' style={{color: project.color}}>
    <style jsx>{`
      .Main_item {
        color: #00b0dc;
        font-size: 36px;
        margin: 30px 0;
      }
    `}</style>
    {project.title}
  </div>

const Item = ({ project, index, current }) =>
   <div style={{
      opacity: Math.max(1 - Math.abs(index-current)*0.2, 0),
      color: index === current ? project.color : 'white',
      fontSize: index === current ? 36 : 24,
      height: index===current ? 80 : 40
    }} className='Item transitions'>
    <style jsx>{`
      .Item {
        height: 20px;
        margin: 30px 0;
      }
    `}</style>
    {project.title}
  </div>

const MenuSlider = ({ projects = [], current }) => [
  <Button key='button' gradient={projects[current].gradient} />,
  <Picture key='picture' picture={projects[current].key} />,
  <div key='slider' className='Menu_slider transitions' style={{top: `calc(50% - ${80 + 70*current}px)`}}>
    <style jsx>{`
      .Menu_slider {
        position: absolute;
        top: calc(50% - 80px);
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
      {projects.map((project, i) => <Item current={current} key={i} project={project} index={i} />)}
    </div>
  </div>
]

export default MenuSlider
