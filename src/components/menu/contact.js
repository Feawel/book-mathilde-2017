const Contact = () =>
  <div className='Menu_credits futuralt_bold'>
    <style jsx>{`
      .Menu_credits {
        text-transform: uppercase;
        font-size: 10px;
        position: absolute;
        bottom: 40px;
        left: 40px;
        letter-spacing: 1px;
      }
      .Me {
        color: #941c91;
        text-decoration: none;
      }
      @media screen and (max-width: 750px) {
        .Menu_credits {
          display:none;
        }
      }
    `}</style>
    <a className='Me' href='https://www.linkedin.com/in/mathilde-serra-37946aa9/' target='_blank'>mathilde.serra01@gmail.com</a>
  </div>

export default Contact
