// src/componentqs/menu/slider.js

const MenuPicture = ({  }) =>
  <div className='Menu_picture'>
    <style jsx>{`
      .Menu_picture {
        position: absolute;
        top: calc(50% - 100px);
        left: 100px;
      }
    `}</style>
    <img width='200' height='200' alt='thumbnail project picture' src='/static/menu/picture.png' />
  </div>


export default MenuPicture
