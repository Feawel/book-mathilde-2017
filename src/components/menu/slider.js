// src/componentqs/menu/slider.js
import Button from './button'
import Picture from './picture'

const Item = ({ project, index, current, setProject }) =>
   <div onClick={() => setProject(project.key)} style={{
      opacity: Math.max(1 - Math.abs(index-current)*0.2, 0),
      color: index === current ? project.colors.primary : 'white',
      fontSize: index === current ? 36 : 24,
      height: index===current ? 80 : 40
    }} className='Item transitions clickable'>
    <style jsx>{`
      .Item {
        height: 20px;
        margin: 30px 0;
      }
    `}</style>
    {project.title}
    {index === current && <Tags project={project} />}
  </div>

const Tags = () =>
  <div className="Project_infos_tags">
    <style jsx>{`
      .Project_infos_tags {
        font-family: 'Playfair Display';
        font-weight: bold;
        font-size: 12px;
        opacity: 1;
        margin-top: 10px;
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


const MenuSlider = ({ projects = [], current , setProject, toggleOpen}) => [
  <Button key='button' project={projects[current]} toggleOpen={toggleOpen} gradient={projects[current].colors} />,
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
      {projects.map((project, i) => <Item setProject={setProject} current={current} key={i} project={project} index={i} />)}
    </div>
  </div>
]

export default MenuSlider
