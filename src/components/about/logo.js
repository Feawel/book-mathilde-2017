const Logo = ({ toggleOpen, open, openMenu, isMobile }) =>
  <div style={{top: open ? 625 : (isMobile ? 25 : 40), display: openMenu ? 'none' : ''}} className='Logo_wrapper clickable' onClick={(e) => toggleOpen()}>
    <style jsx>{`
      .Logo_wrapper {
        position : absolute;
        top: 40px;
        left: 40px;
        color: white;
        z-index: 12;
        -webkit-transition      : all 1.5s  ;
        -moz-transition       : all 1.5s  ;
        -ms-transition        : all 1.5s  ;
        -o-transition         : all 1.5s  ;
        transition          : all 1.5s  ;
        overflow: hidden;
        height: 44px;
        width: 200px;
      }
      img:hover {
        cursor: pointer;
      }
      .Logo_1 {
        margin-right: 10px;
      }
      .Logo_2 {
        vertical-align: top;
        position : absolute;
        top: 5px;
      }
      .Logo_about {
        vertical-align: top;
        position : absolute;
        top: -30px;
      }
      @media screen and (min-width: 750px) {
        .Logo_wrapper:hover .Logo_2 {
          top: 80px;
        }
        .Logo_wrapper:hover .Logo_about {
          top: 5px;
        }
      }
      @media screen and (max-width: 750px) {
        .Logo_wrapper {
          left: 25px;
        }
      }
    `}</style>
    <img className='Logo_1' height='40' src='/static/about/logo-final-part1.svg' alt='Logo Mathilde Serra - 2017©' />
    <img className='Logo_2 transitions' height='30' src='/static/about/logo-about-me-01.svg' alt='Logo Mathilde Serra - 2017©' />
    <img className='Logo_about transitions' height='25' src='/static/about/logo-final-part2.svg' alt='Logo Mathilde Serra - 2017©' />
  </div>

export default Logo
