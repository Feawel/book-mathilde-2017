const Logo = ({ toggleOpen }) =>
  <div className='Logo_wrapper clickable' onClick={(e) => toggleOpen()}>
    <style jsx>{`
      .Logo_wrapper {
        position : absolute;
        top: 40px;
        left: 30px;
        color: white;
        z-index: 10;
      }
      img {
        width: 180px;
      }
      img:hover {
        cursor: pointer;
      }
    `}</style>
    <img className='Logo' src='/static/logo-01.svg' alt='Logo Mathilde Serra - 2017©' />
  </div>

export default Logo
