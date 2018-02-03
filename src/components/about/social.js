// src/componentqs/home/social.js
const Social = () => (
  <div className='Social'>
   <style jsx>{`
      .Social {
        z-index: 10;
        width: 20px;
        position: absolute;
        bottom: 8px;
        right: 30px;
      }
      img {
        width: 16px;
      }
      a {
        margin-bottom: 25px;
        display: inline-block;
      }
      a:hover {
        opacity: 0.6;
      }
      @media screen and (min-width: 750px) {
        .Social {
          display: none;
        }
      }
      @media screen and (max-width: 750px) {
        .Social {
          position: relative;
          width: 100%;
          bottom: inherit;
          right: inherit;
          display: inline-block;
          margin: auto;
        }
        .Social_inner_container {
          width: 100px;
          margin: auto;
        }
        a {
          margin-right: 25px;
          margin-top: 30px;
        }
        a:last-child {
          margin-right: 0;
        }
      }
    `}</style>
    <div className='Social_inner_container'>
      <a className='Link' target='_blank' title='Twitter @Mathilde__Serra' href='/'><img src='/static/pictos/picto-twitter.svg' alt={`Mathilde Serra's twitter`} /></a>
      <a className='Link' target='_blank' title='Behance @MathildeSerra' href='/'><img src='/static/pictos/picto-behance.svg' alt={`Mathilde Serra's behance`} /></a>
      <a className='Link' target='_blank' title='Linkedin @MathildeSerra'href='/'><img src='/static/pictos/picto-linkedin.svg' alt={`Mathilde Serra's linkeding`} /></a>
    </div>
  </div>
)

export default Social
