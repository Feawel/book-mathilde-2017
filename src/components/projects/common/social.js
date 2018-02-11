// src/componentqs/projects/common/social.js
import React from 'react'
import {RS_TWITTER, RS_BEHANCE, RS_LINKEDIN} from '../../../../data'

const Social = ({ grey = true, centered = false, summary = false, behance}) => (
  <div className='Social'>
   <style jsx>{`
      img {
        width: ${summary ? 20 : 16}px;
        vertical-align: top;
      }
      a:hover {
        opacity: 0.6;
      }
      .Social {
        position: relative;
        width: 100%;
        display: inline-block;
        margin: auto;
        color: #abb0bc;
      }
      .Social_inner_container {
        width: 120px;
        ${centered ? 'margin: auto;' : ''}
      }
      a {
        margin-right: 20px;
        margin-top: 40px;
      }
      a:last-child {
        margin-right: 0;
      }
      @media screen and (max-width: 1000px) {
        .Social_inner_container {
          width: 115px;
          margin: auto;
        }
        img {
          width: 21px;
        }
      }
    `}</style>
    <div className='Social_inner_container'>
      <a className='Link' target='_blank' title='Twitter @Mathilde__Serra' href={RS_TWITTER}><img src={`/static/pictos/picto-twitter${grey ? '-grey.png' : '.svg'}`} alt={`Mathilde Serra's twitter`} /></a>
      <a className='Link' target='_blank' title='Behance @MathildeSerra' href={behance}><img style={{position: 'relative', top: 2}} src={`/static/pictos/picto-behance${grey ? '-grey.png' : '.svg'}`} alt={`Mathilde Serra's behance`} /></a>
      <a className='Link' target='_blank' title='Dribble @MathildeSerra'href='/'><img src={`/static/pictos/picto-dribble${grey ? '-grey.png' : '.svg'}`} alt={`Mathilde Serra's dribble`} /></a>
    </div>
  </div>
)

export default Social
