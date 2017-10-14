import Social from '../homeProjects/social'
import AboutText from './text'
import AboutSkills from './skills'
import Close from './close'

const Panel = ({open, toggleOpen}) =>
  <div style={{height: open ? '585px' : 0, visibility: open ? '' : 'hidden'}} className='About_panel'>
    <style jsx>{`
      .About_panel {
        width: 100%;
        z-index: 11;
        margin-bottom: 10px;
        overflow: hidden;
        background-color: #001732;
        -webkit-transition      : all 1.5s  ;
        -moz-transition       : all 1.5s  ;
        -ms-transition        : all 1.5s  ;
        -o-transition         : all 1.5s  ;
        transition          : all 1.5s  ;
      }
    `}</style>
    <Close toggleOpen={() => toggleOpen()} />
    <AboutText />
    <AboutSkills />
    <Social />
  </div>


export default Panel
