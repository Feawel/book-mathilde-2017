// src/componentqs/projects/common/social.js
import React from 'react'
import ReactDOM from 'react-dom'

import { firstGameScreens,  secondGameScreens } from '../../../../data/comete'
import Call from '../common/call'

class VideoGames extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const {setSectionMetadata} = this.props
    setSectionMetadata({
      title: 'Video games',
      icon: '/static/projects/comete/2-menu/picto-video-game-grey.svg',
      activeIcon: '/static/projects/comete/2-menu/picto-video-game.svg',
      element: ReactDOM.findDOMNode(this)
    })
  }

  render() {
    return (
      <div className='Video_games'>
        <style jsx>{`
          .Video_games {
            width: 100%;
            margin: auto;
            overflow: hidden;
          }
          .Number_container {
            font-family: 'Playfair Display';
            font-size: 48px;
            color: #221061;
            line-height: 32px;
            text-transform: uppercase;
            height: 65px;
            text-align: center;
            margin-top: 60px;
            position: relative;
            text-align: center;
          }
          .Border_bottom {
            display: inline-block;
            width: 52px;
            height: 4px;
            background-image: linear-gradient(to left, #5d1bb0 0%, #4dd0ff 100%);
          }
          .Infos {
            display: inline-block;
            width: 50%;
            vertical-align: top;
            margin-top: 180px;
          }
          .Illustration {
            position: relative;
            display: inline-block;
            width: 50%;
            margin-top: 60px;
          }
          .Illustration .Main {
            padding-right: 60px;
            float: right;
            z-index: 1;
            position: relative;
          }
          .Illustration .Second {
            position: absolute;
            opacity: 0.1;
            bottom: 200px;
            right: 100px;
            z-index: 0;
          }
          .Title {
            font-family: 'Playfair Display';
            font-weight: 900;
            font-size: 66px;
            color: #221061;
            line-height: 32px;
            max-width: 460px;
          }
          .Baseline {
            font-family: Futura;
            font-weight: bold;
            font-size: 14px;
            line-height: 24px;
            color: #abb0bc;
            text-transform: uppercase;
            margin-top: 30px;
            max-width: 460px;
          }
          .Description {
            font-family: Futura;
            font-size: 14px;
            line-height: 24px;
            color: #474f6f;
            margin-top: 10px;
            max-width: 460px;
            margin-bottom: 30px;
          }
        `}</style>
        <div className='Number_container'>
          <div className='Number'>03</div>
          <div className='Border_bottom'></div>
        </div>
        <div className='Illustration'>
          <img className='Second' width='850' src='/static/projects/comete/5-video-games/picto-video-game.png' />
          <img className='Main' width='462' src='/static/projects/comete/5-video-games/picto-video-game.png' />
        </div>
        <div className='Infos'>
          <div className='Title'>Video Games</div>
          <div className='Baseline'>Make funny and educational videos games</div>
          <div className='Description'>We made two games first to ensure traffic to the site, but also to do a scientific mediation work with the general public..</div>
          <Call width={200} text='TRY THE VIDEOS GAMES' />
        </div>
        <FirstVideoGame />
        <SecondVideoGame />
      </div>
    )
  }
}

const FirstVideoGame = () =>
  <div className='First_video_game'>
    <style jsx>{`
      .First_video_game {
        width: calc(100% - 260px);
        background-image: linear-gradient(to bottom, #0d0136 0%, #230f66 100%);
        padding: 80px 130px;
      }
      .Title {
        font-family: Futura;
        font-weight: bold;
        text-transform: uppercase;
        line-height: 34px;
        font-size: 21px;
      }
      .Title_1 {
        color: #00f1cc;
      }
      .Title_2 {
        color: #8061e7;
      }
      .Description {
        font-family: Futura;
        color: white;
        font-size: 14px;
        opacity: 0.6;
        line-height: 24px;
        max-width: 310px;
        margin-top: 30px;
        margin-bottom: 40px;
      }
      .Details {
        width: 100%;
        position: relative;
        text-align: right;
      }
    `}</style>
    <div className='Infos'>
      <div className='Title Title_1'>THE FIRST</div>
      <div className='Title Title_2'>VIDEO GAME</div>
      <div className='Description'>The first game is a quiz presented one-page scroll that test the knowledge about the spaceship Rosetta travel. In responding to 20 question, you land Rosetta on the comet.</div>
      <Call
        color='white'
        colorHover='#0d0136'
        background='white'
        backgroundInner='#0d0136'
        text='Try the game' />
    </div>
    <div className='Details'>
      <img className='Detail_screen' height='539' alt='question screen comete' src='/static/projects/comete/5-video-games/illu-ipad-linear.png' />
    </div>
    <Screens screens={firstGameScreens} />
  </div>

const SecondVideoGame = () =>
  <div className='Second_video_game'>
    <style jsx>{`
      .Second_video_game {
        width: 100%;
        background-color: white;
      }
      .First_part {
        width: calc(100% - 260px);
        padding: 80px 130px;
      }
      .Second_part {
        padding: 0;
        background-image: linear-gradient(to bottom, #0d0136 0%, #230f66 100%);
      }
      .Title {
        font-family: Futura;
        font-weight: bold;
        text-transform: uppercase;
        line-height: 34px;
        font-size: 21px;
        text-align: left;
      }
      .Title_1 {
        color: #00f1cc;
      }
      .Title_2 {
        color: #240868;
      }
      .Description {
        font-family: Futura;
        color: #474f6f;
        font-size: 14px;
        line-height: 24px;
        max-width: 300px;
        margin-top: 30px;
        text-align: left;
        margin-bottom: 40px;
      }
      .Details {
        display: inline-block;
        position: relative;
        text-align: left;
        vertical-align: bottom;
        margin-top: 250px;
      }
      .Screens_container {
        padding: 0px 130px;
      }
      .Infos {
        float: right;
        display: inline-block;
      }
    `}</style>
    <div className='First_part'>
      <div className='Details'>
        <img className='Detail_screen' height='361' alt='question screen comete' src='/static/projects/comete/5-video-games/illu-ipad-linear-violet.png' />
      </div>
      <div className='Infos'>
        <div className='Title Title_1'>THE SECOND</div>
        <div className='Title Title_2'>VIDEO GAME</div>
        <div className='Description'>The second game allows to learn more about the instruments embedded on the probe Rosetta. The game works on the principle of Drag and Drop. The scientist describes an instrument, the user must catch it in the list placed at his disposal, and the dropper on Rosetta. If it is he, he fixes himself there.</div>
        <Call text='Try the game' />
      </div>
    </div>
    <div className='Second_part'>
      <div className='Screens_container'>
        <Screens paddingTop={55} dashTop={-40} screens={secondGameScreens} />
      </div>
    </div>
  </div>

const Screens = ({screens, dashTop = 0, paddingTop = 110}) =>
  <div className='Screens'>
    <style jsx>{`
      .Screens {
        position: relative;
        overflow: hidden;
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
    `}</style>
    <img style={{top: dashTop}} height='2182' width='100' className='Dash' alt='poitilles vert comete' src='/static/projects/comete/5-video-games/ligne-pointiller-vert.svg' />
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
      .Title {
        font-family: Futura;
        font-size: 21px;
        line-height: 32px;
        color: #00c1ff;
        letter-spacing: 1.05px;
      }
      .Description {
        font-family: Futura;
        font-size: 12px;
        line-height: 18px;
        color: white;
      }
    `}</style>
    <img height='439' className='Screen' alt='screen comete' src={`/static/projects/comete/5-video-games/${screen.src}.png`} />
    <div className='Infos'>
      <div className='Line' />
      <div className='Title'>{screen.title}</div>
      <div className='Description'>{screen.description}</div>
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
        left: -20px;
      }
      .Title {
        font-family: Futura;
        font-size: 21px;
        line-height: 32px;
        color: #00c1ff;
        letter-spacing: 1.05px;
      }
      .Description {
        font-family: Futura;
        font-size: 12px;
        line-height: 18px;
        color: white;
      }
    `}</style>
    <div className='Infos'>
      <div className='Line' />
      <div className='Title'>{screen.title}</div>
      <div className='Description'>{screen.description}</div>
    </div>
    <img height='439' className='Screen' alt='screen comete' src={`/static/projects/comete/5-video-games/${screen.src}.png`} />
  </div>

export default VideoGames
