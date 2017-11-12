const Credits = () =>
  <div className='Menu_credits'>
    <style jsx>{`
      .Menu_credits {
        text-transform: uppercase;
        font-family: Futura;
        font-weight: bold;
        font-size: 10px;
        position: absolute;
        bottom: 40px;
        right: 40px;
      }
      .Prefix {
        color: #abb0bc;
        padding-right: 5px;
      }
      .Me {
        color: #61daff;
        text-decoration: none;
      }
    `}</style>
    <span className='Prefix'>developped by</span>
    <a className='Me' href='https://www.linkedin.com/in/jonathanbanon' target='_blank'>jonathan banon</a>
  </div>

export default Credits
