// src/componentqs/menu/button.js
import Link from 'next/link'
import {ButtonProject} from '../button'

const MenuButton = ({ color, gradient, openProject, project, toggleOpen }) =>
  <div className='Menu_button'>
    <style jsx>{`
      .Menu_button {
        position: absolute;
        top: calc(50% - 53px);
        right: calc(50% - 470px);
      }
    `}</style>
    <ButtonProject
      textColor={project.colors.primary}
      gradient={project.colors.gradient}
      radius={25}
      fontSize={12}
      width={194}
      height={46}
      background='#001732'
      href={`/${project.key}`}
      onClick={(e) => {
        e.preventDefault()
        toggleOpen()
        openProject()
      }}
      text='VIEW THE CASE' />
  </div>
/*const MenuButton = ({ color, gradient, openProject, project, toggleOpen }) =>
  <div onClick={() => {
      toggleOpen()
      openProject()
    }}>
    <div style={{
      backgroundImage: `linear-gradient(to left, ${gradient.darkGradient} 0%, ${gradient.lightGradient} 100%)`
    }}
      className='Menu_button transitions clickable futuralt_bold'>
      <style jsx>{`
        .Menu_button {
          position: absolute;
          top: calc(50% - 40px);
          right: calc(50% - 470px);
          width: 194px;
          height: 46px;
          border-radius: 25px;
          text-align: center;
          font-size: 12px;
          color: #ffffff;
          text-transform: uppercase;
          vertical-align: middle;
          letter-spacing: 1.8px;
        }
        .Menu_button_text {
          position: relative;
          top: 17px;
        }
      `}</style>
      <span className='Menu_button_text'>View the case</span>
    </div>
  </div>*/


export default MenuButton
