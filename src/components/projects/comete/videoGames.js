// src/componentqs/projects/common/social.js
import React from 'react'
import ReactDOM from 'react-dom'

import { firstGameScreens,  secondGameScreens } from '../../../../data/comete'
import Call from '../common/call'
import Number from '../common/number'
import DoubleIllustrations from '../common/doubleIllustrations'
import SectionInfos from '../common/sectionInfos'
import { TitleSecondary,  Description } from '../common/texts'

class VideoGames extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const {setSectionMetadata} = this.props
    setSectionMetadata({
      title: 'Video games',
      icon: '/static/projects/menu/grey-game.png',
      activeIcon: '/static/projects/menu/comete-game.png',
      element: ReactDOM.findDOMNode(this)
    })
  }

  render() {
    const {isMobile} = this.props
    return (
      <div className='Video_games'>
        <style jsx>{`
          .Video_games {
            width: 100%;
            margin: auto;
            overflow: hidden;
            position: relative;
          }
        `}</style>
        <Number
          content='03'
          color='#221061'
          responsivePicto='/static/projects/comete/5-video-games/picto-video-game.png'
          borderBackground='linear-gradient(to left, #5d1bb0 0%, #4dd0ff 100%)' />
        <DoubleIllustrations
            main={{width: 462, src: '/static/projects/comete/5-video-games/picto-video-game.png'}}
            second={{width: 850, src: '/static/projects/comete/5-video-games/picto-video-game.png'}}
            location={{bottom: 200, right: 100}} />
        <SectionInfos
          isMobile={isMobile}
          title={{content: 'Video Games', color: '#221061'}}
          baseline={{content: 'Make funny and educational videos games', color: '#abb0bc'}}
          description={{color: '#474f6f', content: 'We built two games to ensure traffic to the website, but also as a scientific mediation to the public.'}}
          />
        <FirstVideoGame isMobile={isMobile} />
        <SecondVideoGame isMobile={isMobile} />
      </div>
    )
  }
}

const FirstVideoGame = ({ isMobile }) =>
  <div className='First_video_game'>
    <style jsx>{`
      .First_video_game {
        width: 100%;
        background-image: linear-gradient(to bottom, #0d0136 0%, #230f66 100%);
        margin-top: 80px;
        padding-top: 80px;
        padding-bottom: 80px;
      }
      .First_video_game_container {
        width: 1020px;
        margin: auto;
      }
      .Details {
        width: 100%;
        position: relative;
        text-align: right;
      }
      .Details.responsive {
        display: none;
      }
      @media screen and (max-width: 750px) {
        .First_video_game {
          width: 100%;
          padding-top: 40px;
          padding-bottom: 1px;
        }
        .Titles_container {
          margin-left: 25px;
        }
        .First_video_game_container {
          width: 100%;
        }
        .Call_wrapper {
          display: none;
        }
        .Details.desktop {
          display: none;
        }
        .Details.responsive {
          display: inline-block;
          position: relative;
          right: 50px;
        }
        .Description_wrapper {
          position: relative;
          width: 300px;
          margin: auto;
          text-align: center;
        }
      }
    `}</style>
    <div className='First_video_game_container'>
      <div className='Infos'>
        <div className='Titles_container'>
          <TitleSecondary content='THE FIRST' style={{color: '#00f1cc', marginBottom: isMobile ? 0 : 5, marginTop: 0}} />
          <TitleSecondary content='VIDEO GAME' style={{color: '#8061e7', marginTop: 0, marginBottom: 40}} />
        </div>
        <div className='Details responsive'>
          <img className='Detail_screen' height='500' alt='question screen comete' src='/static/projects/comete/responsive/5-video-games/smartphone-jeux1-01.png' />
        </div>
        <div className='Description_wrapper'>
          <Description style={{marginBottom: 40, opacity: 0.6, color: 'white', width: 300}} content='The first game is a one-page scroll quiz which tests your knowledge about Rosetta spaceship. Answering the 20 questions will make you land Rosetta on the comet.' />
        </div>
        <div className='Call_wrapper'>
          <Call
            color='white'
            colorHover='#0d0136'
            background='white'
            backgroundInner='#0d0136'
            text='Try the game' />
          </div>
      </div>
      <div className='Details desktop'>
        <img className='Detail_screen' height='539' alt='question screen comete' src='/static/projects/comete/5-video-games/illu-ipad-linear.png' />
      </div>
      <Screens screens={firstGameScreens} />
    </div>
  </div>

const SecondVideoGame = ({ isMobile }) =>
  <div className='Second_video_game'>
    <style jsx>{`
      .Second_video_game {
        width: 100%;
        background-color: white;
      }
      .First_part {
        width: 1020px;
        margin: auto;
        padding-top: 80px;
        padding-bottom: 80px;
      }
      .Second_part {
        width: 100%;
        padding: 0;
        background-image: linear-gradient(to bottom, #0d0136 0%, #230f66 100%);
      }
      .Second_part_container {
        width: 1020px;
        margin: auto;
      }
      .Details {
        display: inline-block;
        position: relative;
        text-align: left;
        vertical-align: bottom;
        margin-top: 250px;
      }
      .Screens_container {
        padding: 0px auto;
      }
      .Infos {
        float: right;
        display: inline-block;
        text-align: left;
      }
      .Details.responsive {
        display: none;
      }
      @media screen and (max-width: 750px) {
        .First_part {
          width: 100%;
          padding: 40px 0px;
        }
        .Call_wrapper {
          display: none;
        }
        .Infos {
          text-align: center;
          float: none;
          width: 100%;
          display: inline-block;
        }
        .Details.desktop {
          display: none;
        }
        .Details.responsive {
          display: inline-block;
          position: relative;
          margin-top: 0px;
          position: relative;
          right: 30px;
        }
        .Description_wrapper {
          position: relative;
          top: -100px;
        }
      }
    `}</style>
    <div className='Second_video_game_container'>
      <div className='First_part'>
        <div className='Details desktop'>
          <img className='Detail_screen' height='361' alt='question screen comete' src='/static/projects/comete/5-video-games/illu-ipad-linear-violet.png' />
        </div>
        <div className='Infos'>
          <TitleSecondary content='THE SECOND' style={{width: '100%', color: '#00f1cc', marginBottom: isMobile ? 0 : 5, marginTop: 0}} />
          <TitleSecondary content='VIDEO GAME' style={{width: '100%', color: '#240868', marginTop: 0, marginBottom: 20}} />
          <div className='Details responsive'>
            <img className='Detail_screen' height='309' alt='question screen comete' src='/static/projects/comete/responsive/5-video-games/ordi-jeux2-01.png' />
          </div>
          <Description style={{marginBottom: 40, color: '#474f6f', maxWidth: 300}} content="The second game is about drag and drop Rosetta's instruments on the probe. The scientist on the top describes the needed instrument, and the user chooses one corresponding to the description in the list below." />
          <div className='Call_wrapper'><Call text='Try the game' /></div>
        </div>
      </div>
      <div className='Second_part'>
        <div className='Second_part_container'>
          <div className='Screens_container'>
            <Screens paddingTop={55} dashTop={-40} screens={secondGameScreens} />
          </div>
        </div>
      </div>
    </div>
  </div>

const Screens = ({screens, dashTop = 0, paddingTop = 110}) =>
  <div className='Screens'>
    <style jsx>{`
      .Screens {
        position: relative;
        overflow: hidden;
        padding-bottom: 80px;
      }
      .Dash {
        position: absolute;
        left: calc(50% - 50px);
        z-index: 0;
      }
      .Screen_container {
        position: relative;
        z-index: 1;
      }
      @media screen and (max-width: 750px) {
        .Screens {
          display: none;
        }
      }
    `}</style>
    <img style={{top: dashTop}} height='2400' width='100' className='Dash' alt='poitilles vert comete' src='/static/projects/comete/5-video-games/ligne-pointiller-vert.svg' />
    <div style={{paddingTop}} className='Screen_container'>
      {
        screens.map((screen, i) =>
          i%2 === 0
            ? <LeftScreen screen={screen} key={i} />
            : <RightScreen screen={screen} key={i} />
        )
      }
    </div>
  </div>


const LeftScreen = ({screen}) =>
  <div className='Left_screen'>
    <style jsx>{`
      .Left_screen {
        margin-top: 80px;
      }
      .Screen {
        display: inline-block;
        filter: drop-shadow(0px 7px 30px rgba(1, 1, 1, 0.6));
      }
      .Infos {
        position: relative;
        display: inline-block;
        max-width: 190px;
        margin-left: 80px;
        vertical-align: top;
        top: 170px;
      }
      .Line {
        width: 2px;
        height: 22px;
        background-color: #00c1ff;
        position: absolute;
        top: 5px;
        left: -20px;
      }
    `}</style>
    <img height='439' className='Screen' alt='screen comete' src={`/static/projects/comete/5-video-games/${screen.src}.png`} />
    <div className='Infos'>
      <div className='Line' />
      <TitleSecondary content={screen.title} style={{color: '#00c1ff', letterSpacing: 1.05, margin: 0, fontFamily: `'Futura LT - Book'`}} />
      <Description content={screen.description} style={{fontSize: 12, margin: 0, lineHeight: '18px', marginTop: 15}} />
    </div>
  </div>

const RightScreen = ({screen}) =>
  <div className='Right_screen'>
    <style jsx>{`
      .Right_screen {
        margin-top: 80px;
      }
      .Screen {
        display: inline-block;
        filter: drop-shadow(0px 7px 30px rgba(1, 1, 1, 0.6));
      }
      .Infos {
        position: relative;
        display: inline-block;
        max-width: 190px;
        margin-right: 80px;
        vertical-align: top;
        top: 170px;
      }
      .Line {
        width: 2px;
        height: 22px;
        background-color: #00c1ff;
        position: absolute;
        top: 5px;
        left: 0px;
      }
      .Text_container {
        position: relative;
        left: 20px;
      }
    `}</style>
    <div className='Infos'>
      <div className='Line' />
      <div className='Text_container'>
        <TitleSecondary content={screen.title} style={{color: '#00c1ff', letterSpacing: 1.05, margin: 0, fontFamily: `'Futura LT - Book'`}} />
        <Description content={screen.description} style={{fontSize: 12, margin: 0, lineHeight: '18px', marginTop: 15}} />
      </div>
    </div>
    <img height='439' className='Screen' alt='screen comete' src={`/static/projects/comete/5-video-games/${screen.src}.png`} />
  </div>

export default VideoGames
