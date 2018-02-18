const Credits = () =>
  <div className='Menu_credits futuralt_bold'>
    <style jsx>{`
      .Menu_credits {
        text-transform: uppercase;
        font-size: 10px;
        position: absolute;
        bottom: 40px;
        right: 40px;
        letter-spacing: 1px;
      }
      .Prefix {
        color: #abb0bc;
        padding-right: 5px;
      }
      .Me {
        color: #61daff;
        text-decoration: none;
      }
      @media screen and (max-width: 750px) {
        .Menu_credits {
          display:none;
        }
      }
    `}</style>
    <span className='Prefix'>developped by</span>
    <a className='Me' href='https://www.linkedin.com/in/jonathanbanon' target='_blank'>jonathan banon</a>
  </div>

export default Credits
