// src/componentqs/menu/button.js

const MenuButton = ({ openProject }) =>
  <div className='Menu_button clickable'>
    <style jsx>{`
      .Menu_button {
        position: absolute;
        top: calc(50% - 25px);
        right: 200px;
        width: 200px;
        height: 52px;
        border-radius: 25px;
        background-image: linear-gradient(to left, #008db9 0%, #6ad7d9 100%);
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
