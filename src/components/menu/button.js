// src/componentqs/menu/button.js

const MenuButton = ({ openProject, color, gradient }) =>
  <div style={{backgroundImage: `linear-gradient(to left, ${gradient.dark} 0%, ${gradient.light} 100%)`}}
    className='Menu_button transitions clickable'>
    <style jsx>{`
      .Menu_button {
        position: absolute;
        top: calc(50% - 40px);
        right: calc(50% - 420px);
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


export default MenuButton
