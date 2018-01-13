// src/componentqs/menu/button.js
import Link from 'next/link'

const MenuButton = ({ color, gradient, project, toggleOpen }) =>
  <Link href={{ pathname: '/', query: { project: project.key, typo: true } }} prefetch >
    <div style={{backgroundImage: `linear-gradient(to left, ${gradient.darkGradient} 0%, ${gradient.lightGradient} 100%)`}}
      className='Menu_button transitions clickable'>
      <style jsx>{`
        .Menu_button {
          position: absolute;
          top: calc(50% - 40px);
          right: calc(50% - 470px);
          width: 200px;
          height: 52px;
          border-radius: 25px;
          text-align: center;
          font-family: Futura;
          font-weight: bold;
          font-size: 12px;
          color: #ffffff;
          text-transform: uppercase;
          vertical-align: middle;
        }
        .Menu_button_text {
          position: relative;
          top: 20px;
        }
      `}</style>
      <span className='Menu_button_text'>View the case</span>
    </div>
  </Link>


export default MenuButton
