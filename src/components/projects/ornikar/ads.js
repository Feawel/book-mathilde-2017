import React from 'react'
import { ads } from '../../../../data'

const Ads = ({gradient, firstPic, secondPic, thirdPic, title, description}) =>
  <div className='Ads'>
    <style jsx>{`
      .Ads {
        width: 100%;
        text-align: center;
        margin: 60px 0;
      }

      .Infos {
        font-family: Futura;
        font-size: 14px;
        text-align: center;
        display: inline-block;
      }

      .Title {
        font-weight: bold;
        font-size: 18px;
        color: #260608;
        text-transform: uppercase;
      }
      .Description {
        color: #474f6f;
        max-width: 440px;
        margin-top: 40px;
        margin-bottom: 60px;
      }
      .First_illustration_section {
        height: 630px;
        text-align: center;
      }
      .First_illustration_section > img {
        position: relative;
        top: 110px;
        box-shadow: 9px 9px 10px 7px rgba(1, 1, 1, 0.2);
      }
      .Low_picture {
        display: inline-block;
        width: 50%;
        height: 400px;
        background-size: cover;
      }

    `}</style>
    <div className='Infos'>
      <div className='Title'>
        {title}
      </div>
      <div className='Description'>
        {description}
      </div>
    </div>
    <div
      style={{backgroundImage: `linear-gradient(-41deg, ${gradient.light} 0%, ${gradient.dark} 100%)`}}
      className='First_illustration_section'>
      <img className='' src={firstPic} alt='main orknikar boys ad' />
    </div>
    <div className='Second_illustration_section'>
      <div style={{backgroundImage: `url('${secondPic}')`}} className='Low_picture' />
      <div style={{backgroundImage: `url('${thirdPic}')`}} className='Low_picture' />
    </div>
  </div>



export const BoysAds = () =>
  <Ads {...ads.boys} />

export const GirlsAds = () =>
  <Ads {...ads.girls} />

export const YoungsAds = () =>
  <Ads {...ads.youngs} />
