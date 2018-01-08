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
      @media screen and (max-width: 1023px) {
        .Social {
          display: none;
        }
      }
    `}</style>
    <a target='_blank' title='Twitter @Mathilde__Serra' href='/'><img src='/static/pictos/picto-twitter.svg' alt={`Mathilde Serra's twitter`} /></a>
    <a target='_blank' title='Behance @MathildeSerra' href='/'><img src='/static/pictos/picto-behance.svg' alt={`Mathilde Serra's behance`} /></a>
    <a target='_blank' title='Linkedin @MathildeSerra'href='/'><img src='/static/pictos/picto-linkedin.svg' alt={`Mathilde Serra's linkeding`} /></a>
  </div>
)

export default Social
