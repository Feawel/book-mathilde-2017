import React from 'react'
import { ads } from '../../../../data'
import { TitleSecondary, Description } from '../common/texts'

const Ads = ({gradient, firstPic, secondPic, thirdPic, title, description, last}) =>
  <div className='Ads'>
    <style jsx>{`
      .Ads {
        width: 100%;
        text-align: center;
        margin: 70px 0 ${last ? '0 0' : ''};
      }
      .Infos {
        text-align: center;
        display: inline-block;
      }

      .Title {
        font-weight: bold;
        font-size: 18px;
        color: ;
        text-transform: uppercase;
      }
      .First_illustration_section {
        height: 630px;
        text-align: center;
      }
      .First_illustration {
        position: relative;
        top: 110px;
        width: 780px;
        box-shadow: 9px 9px 10px 7px rgba(1, 1, 1, 0.2);
      }
      .Low_picture {
        display: inline-block;
        width: 50%;
        height: 400px;
        background-size: cover;
      }
      .Low_picture_first {
        background-image: url('${secondPic}');
      }
      .Low_picture_second {
        background-image: url('${thirdPic}');
      }
      @media screen and (max-width: 750px) {
        .First_illustration_section {
          height: 288px;
        }
        .First_illustration {
          width: 80%;
          top: 65px;
        }
        .Low_picture {
          width: 100%;
          height: 360px;
          background-size: cover;
        }
        .Low_picture_first {
          background-image: url('${secondPic.replace('desktop', 'smartphone')}');
        }
        .Low_picture_second {
          background-image: url('${thirdPic.replace('desktop', 'smartphone')}');
        }
      }

    `}</style>
    <div className='Infos'>
      <TitleSecondary content={title} style={{color: '#260608', margin: '0 auto'}} />
      <Description
          style={{color: '#474f6f', marginTop: 40, marginBottom: 60, maxWidth: '440px'}}
          content={description} />
    </div>
    <div
      style={{backgroundImage: `linear-gradient(-41deg, ${gradient.light} 0%, ${gradient.dark} 100%)`}}
      className='First_illustration_section'>
      <img className='First_illustration' src={firstPic} alt='main orknikar boys ad' />
    </div>
    <div className='Second_illustration_section'>
      <div className='Low_picture Low_picture_first' />
      <div className='Low_picture Low_picture_second' />
    </div>
  </div>



export const BoysAds = () =>
  <Ads {...ads.boys} />

export const GirlsAds = () =>
  <Ads {...ads.girls} />

export const YoungsAds = () =>
  <Ads {...ads.youngs} last={true} />
