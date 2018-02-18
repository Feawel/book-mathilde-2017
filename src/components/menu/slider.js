// src/componentqs/menu/slider.js
import Button from './button'
import Picture from './picture'
import Link from 'next/link'

const Item = ({ project, index, current, setProject, isCurrent }) =>
   <div onClick={() => setProject(project.key)} style={{
      opacity: Math.max(1 - Math.abs(index-current)*0.2, 0),
      color: isCurrent ? project.colors.primary : 'white',
      fontSize: isCurrent ? 36 : 24,
      height: isCurrent ? 80 : 40
    }} className={`Item transitions clickable${isCurrent ? ' current' : ''}`}>
    <style jsx>{`
      .Item {
        height: 20px;
        margin: 30px 0;
      }
      .current {
        background: linear-gradient(330deg, ${project.colors.darkGradient} 0%, ${project.colors.primary} 50%, ${project.colors.lightGradient} 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    `}</style>
    {project.title}
    {isCurrent && <Tags project={project} />}
  </div>

const Tags = () =>
  <div className="Project_infos_tags playfairdisplay_black">
    <style jsx>{`
      .Project_infos_tags {
        font-size: 10px;
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
  <div className='Picture_container'>
    {
      projects.map((project, i) =>
        <Picture isCurrent={i === current} key={i} picture={{src: `/static/menu/rond-${project.key}.jpg`, alt: 'rond menu'}} />
    )}
  </div>,
  <div key='slider' className='Menu_slider playfairdisplay_black transitions' style={{top: `calc(50% - ${80 + 70*current}px)`}}>
    <style jsx>{`
      .Menu_slider {
        position: absolute;
        top: calc(50% - 80px);
        width: 400px;
        left: calc(50% - 150px);
        height: 100%;
        color: white;
      }
      .active {
        color: red;
      }
      .Items {
        width: 400px;
      }
    `}</style>

    <div className='Items'>
      {projects.map((project, i) =>
        i === current
          ? <Link key={i} href={{ pathname: '/', query: { project: projects[current].key, typo: true } }} prefetch >
              <Item setProject={setProject} isCurrent={i === current} current={current} key={i} project={project} index={i} />
            </Link>
          : <Item setProject={setProject} isCurrent={i === current} current={current} key={i} project={project} index={i} />
      )}
    </div>
  </div>
]

export default MenuSlider
