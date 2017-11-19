// src/componentqs/menu/slider.js

const MenuPicture = ({ picture }) =>
  <div className='Menu_picture'>
    <style jsx>{`
      .Menu_picture {
        position: absolute;
        top: calc(50% - 120px);
        left: calc(50% - 500px);
        border-radius: 50%;
        height: 200px;
        width: 200px;
        overflow: hidden;
      }
    `}</style>
    <img height='200' alt={picture.alt} src={picture.src} />
  </div>


export default MenuPicture
