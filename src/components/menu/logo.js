import SVGMenuIcon from '../pictos/menu'
import SVGCloseIcon from '../pictos/close'

const MenuLogo = ({open, toggleOpen, openAbout, projectAppear, isMobile}) =>
  <div style={{
    top: openAbout ? 625 : (isMobile ? 25 : 40),
    display: projectAppear ? 'none' : 'block'
  }} onClick={() => toggleOpen()} className={`Menu_dots_container ${open ? 'Open' : ''}`} >
    <style jsx>{`
      .Menu_dots_container {
        position: absolute;
        right: 40px;
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
        opacity: 1;
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
        letter-spacing: 2.4px;
        z-index: 8;
        opacity: 0;
      }
      .Menu_text_menu.Menu_text_m {
        -webkit-transition      : all 0.5s  ;
        -moz-transition       : all 0.5s  ;
        -ms-transition        : all 0.5s  ;
        -o-transition         : all 0.5s  ;
        transition          : all 0.5s  ;
        right: 58px;
      }
      .Menu_text_menu.Menu_text_e {
        -webkit-transition      : all .7s  ;
        -moz-transition       : all .7s  ;
        -ms-transition        : all .7s  ;
        -o-transition         : all .7s  ;
        transition          : all .7s  ;
        right: 43px;
      }
      .Menu_text_menu.Menu_text_n {
        -webkit-transition      : all .9s  ;
        -moz-transition       : all .9s  ;
        -ms-transition        : all .9s  ;
        -o-transition         : all .9s  ;
        transition          : all .9s  ;
        right: 33px;
      }
      .Menu_text_menu.Menu_text_u {
        -webkit-transition      : all 1.1s  ;
        -moz-transition       : all 1.1s  ;
        -ms-transition        : all 1.1s  ;
        -o-transition         : all 1.1s  ;
        transition          : all 1.1s  ;
        right: 20px;
      }
      .Menu_text_close.Menu_text_c {
        right: 61px;
        -webkit-transition      : all 0.5s  ;
        -moz-transition       : all 0.5s  ;
        -ms-transition        : all 0.5s  ;
        -o-transition         : all 0.5s  ;
        transition          : all 0.5s  ;
      }
      .Menu_text_close.Menu_text_l {
        right: 49px;
        -webkit-transition      : all 0.7s  ;
        -moz-transition       : all 0.7s  ;
        -ms-transition        : all 0.7s  ;
        -o-transition         : all 0.7s  ;
        transition          : all 0.7s  ;
      }
      .Menu_text_close.Menu_text_o {
        right: 40px;
        -webkit-transition      : all 0.9s  ;
        -moz-transition       : all 0.9s  ;
        -ms-transition        : all 0.9s  ;
        -o-transition         : all 0.9s  ;
        transition          : all 0.9s  ;
      }
      .Menu_text_close.Menu_text_s {
        right: 27px;
        -webkit-transition      : all 1.1s  ;
        -moz-transition       : all 1.1s  ;
        -ms-transition        : all 1.1s  ;
        -o-transition         : all 1.1s  ;
        transition          : all 1.1s  ;
      }
      .Menu_text_close.Menu_text_e {
        right: 17px;
        -webkit-transition      : all 1.3s  ;
        -moz-transition       : all 1.3s  ;
        -ms-transition        : all 1.3s  ;
        -o-transition         : all 1.3s  ;
        transition          : all 1.3s  ;
      }
      @media screen and (max-width: 750px) {
        .Menu_dots_container {
          right: 25px;
        }
        .Menu_text {
          display: none;
        }
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
          <div key='menu-text-1' className='clickable transitions futuralt_bold Menu_text Menu_text_menu Menu_text_m'>M</div>,
          <div key='menu-text-2' className='clickable transitions futuralt_bold Menu_text Menu_text_menu Menu_text_e'>E</div>,
          <div key='menu-text-3' className='clickable transitions futuralt_bold Menu_text Menu_text_menu Menu_text_n'>N</div>,
          <div key='menu-text-4' className='clickable transitions futuralt_bold Menu_text Menu_text_menu Menu_text_u'>U</div>
        ]
      : [
          <div key='menu-text-1' className='clickable transitions futuralt_bold Menu_text Menu_text_close Menu_text_c'>C</div>,
          <div key='menu-text-2' className='clickable transitions futuralt_bold Menu_text Menu_text_close Menu_text_l'>L</div>,
          <div key='menu-text-3' className='clickable transitions futuralt_bold Menu_text Menu_text_close Menu_text_o'>O</div>,
          <div key='menu-text-4' className='clickable transitions futuralt_bold Menu_text Menu_text_close Menu_text_s'>S</div>,
          <div key='menu-text-5' className='clickable transitions futuralt_bold Menu_text Menu_text_close Menu_text_e'>E</div>
        ]
    }
  </div>


export default MenuLogo
