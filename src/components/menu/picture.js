// src/componentqs/menu/slider.js

const MenuPicture = ({ picture, isCurrent }) =>
  <div className='Menu_picture transitions'>
    <style jsx>{`
      .Menu_picture {
        position: absolute;
        top: calc(50% - 120px);
        left: calc(50% - 430px);
        border-radius: 50%;
        height: 200px;
        width: 200px;
        overflow: hidden;
        opacity: ${isCurrent ? 1 : 0};
        transform: scale(${isCurrent ? 1 : 0});
        -moz-transform: scale(${isCurrent ? 1 : 0});
      }
    `}</style>
    <img height='200' alt={picture.alt} src={picture.src} />
  </div>


export default MenuPicture
