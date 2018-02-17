import {RS_TWITTER, RS_LINKEDIN, RS_BEHANCE} from '../../../data'

// src/componentqs/home/social.js
const Social = () => (
  <div className='Social'>
    <style jsx>{`
      .Social {
        z-index: 10;
        width: 20px;
        position: absolute;
        bottom: 0px;
        right: 35px;
      }
      img {
        width: 16px;
      }
      a {
        margin-bottom: 24px;
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
    <a target='_blank' title='Twitter @Mathilde__Serra' href={RS_TWITTER}><img src='/static/pictos/picto-twitter.svg' alt={`Mathilde Serra's twitter`} /></a>
    <a target='_blank' title='Behance @MathildeSerra' href={RS_BEHANCE}><img src='/static/pictos/picto-behance.svg' alt={`Mathilde Serra's behance`} /></a>
    <a target='_blank' title='Linkedin @MathildeSerra'href={RS_LINKEDIN}><img src='/static/pictos/picto-linkedin.svg' alt={`Mathilde Serra's linkeding`} /></a>
  </div>
)

export default Social
