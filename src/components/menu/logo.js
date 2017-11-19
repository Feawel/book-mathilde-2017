import SVGMenuIcon from '../pictos/menu'
import SVGCloseIcon from '../pictos/close'

const MenuLogo = ({open, toggleOpen, openAbout}) =>
  <div style={{top: openAbout ? '625px' : '40px'}} onClick={() => toggleOpen()} className={`Menu_dots_container ${open ? 'Open' : ''}`} >
    <style jsx>{`
      .Menu_dots_container {
        position: absolute;
        right: 30px;
        width: 40px;
        height: 40px;
        z-index: 11;
        -webkit-transition      : all 1.5s  ;
        -moz-transition       : all 1.5s  ;
        -ms-transition        : all 1.5s  ;
        -o-transition         : all 1.5s  ;
        transition          : all 1.5s  ;
      }
      .Menu_dots_container:hover > .Menu_radius {
        opacity: 1;
      }
      .Menu_dots_container:hover > .Menu_text {
        width: 50px;
        height: 20px;
        visibility: inherit;
      }
      .Menu_dots_container.Open > .Menu_text {
        width: 50px;
        height: 20px;
        visibility: inherit;
      }
      .Menu_radius {
        position: absolute;
        right: 0px;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        opacity: 0.2;
        border: 1px solid white;
        z-index: 10;
      }
      .Menu_dots {
        position: absolute;
        z-index: 11;
        height: 40px;
      }
      .Menu_text {
        position: absolute;
        width: 40px;
        height: 40px;
        visibility: hidden;
        color: white;
        top: 13px;
        right: 40px;
        font-size: 12px;
        font-family: Futura;
        font-weight: bold;
        z-index: 8;
      }
      .Menu_text_menu.Menu_text_m {
        right: 48px;
      }
      .Menu_text_menu.Menu_text_e {
        right: 33px;
      }
      .Menu_text_menu.Menu_text_n {
        right: 23px;
      }
      .Menu_text_menu.Menu_text_u {
        right: 10px;
      }
      .Menu_text_close.Menu_text_c {
        right: 54px;
      }
      .Menu_text_close.Menu_text_l {
        right: 42px;
      }
      .Menu_text_close.Menu_text_o {
        right: 33px;
      }
      .Menu_text_close.Menu_text_s {
        right: 20px;
      }
      .Menu_text_close.Menu_text_e {
        right: 10px;
      }
    `}</style>
    <div key='menu-dots' className='Menu_dots'>
      {open
        ? <SVGCloseIcon key='open' />
        : <SVGMenuIcon key='close' />}
    </div>
    <div key='menu-radius' className='Menu_radius clickable'>
    </div>
    {
      !open
      ? [
          <div key='menu-text-1' className='clickable transitions Menu_text Menu_text_menu Menu_text_m'>M</div>,
          <div key='menu-text-2' className='clickable transitions Menu_text Menu_text_menu Menu_text_e'>E</div>,
          <div key='menu-text-3' className='clickable transitions Menu_text Menu_text_menu Menu_text_n'>N</div>,
          <div key='menu-text-4' className='clickable transitions Menu_text Menu_text_menu Menu_text_u'>U</div>
        ]
      : [
          <div key='menu-text-1' className='clickable transitions Menu_text Menu_text_close Menu_text_c'>C</div>,
          <div key='menu-text-2' className='clickable transitions Menu_text Menu_text_close Menu_text_l'>L</div>,
          <div key='menu-text-3' className='clickable transitions Menu_text Menu_text_close Menu_text_o'>O</div>,
          <div key='menu-text-4' className='clickable transitions Menu_text Menu_text_close Menu_text_s'>S</div>,
          <div key='menu-text-5' className='clickable transitions Menu_text Menu_text_close Menu_text_e'>E</div>
        ]
    }
  </div>


export default MenuLogo
