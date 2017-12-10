// src/componentqs/projects/comete/userInterface.js
import React from 'react'
import ReactDOM from 'react-dom'

class UserInterface extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const {setSectionMetadata} = this.props
    setSectionMetadata({
      title: 'User interface',
      icon: '/static/projects/comete/2-menu/picto-UI-grey.svg',
      activeIcon: '/static/projects/comete/2-menu/picto-UI.svg',
      element: ReactDOM.findDOMNode(this)
    })
  }

  render() {
    return (
      <div className='User_interface'>
       <style jsx>{`
          .User_interface {
            width: 100%;
            margin: auto;
            overflow: hidden;
            position: relative;
            background-color: #0d0136;
            z-index: 0;
            height: 5100px;
          }
          .Backgrounds {
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
          }
          .Background_1 {
            height: 815px;
            background-image: url('/static/projects/comete/4-user-interface/fond-comete/fond-comete1.png');
          }
          .Background_2 {
            height: 725px;
            background-image: url('/static/projects/comete/4-user-interface/fond-comete/fond-comete2.png');
          }
          .Background_3 {
            height: 815px;
            background-image: url('/static/projects/comete/4-user-interface/fond-comete/fond-comete3.png');
          }
          .Background_4 {
            height: 815px;
            background-image: url('/static/projects/comete/4-user-interface/fond-comete/fond-comete4.png');
          }
          .Background_5 {
            height: 481;
            background-image: url('/static/projects/comete/4-user-interface/fond-comete/fond-comete5.png');
          }
          .Part_1 {
            z-index: 1;
            position: relative;
          }
          .Number_container {
            font-family: 'Playfair Display';
            font-size: 48px;
            color: white;
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
            bottom: 150px;
            right: 160px;
            z-index: 0;
          }
          .Title {
            font-family: 'Playfair Display';
            font-weight: 900;
            font-size: 66px;
            color: white;
            line-height: 32px;
            max-width: 460px;
          }
          .Baseline {
            font-family: Futura;
            font-weight: bold;
            font-size: 14px;
            line-height: 24px;
            color: white;
            text-transform: uppercase;
            margin-top: 30px;
            max-width: 460px;
          }
          .Description {
            font-family: Futura;
            font-size: 14px;
            line-height: 24px;
            color: white;
            margin-top: 10px;
            max-width: 460px;
            opacity: 0.6;
          }
          .Content_illustration {
            background-image: url('/static/projects/comete/4-user-interface/illu-content-page-1200px.png');
            background-size: cover;
            width: 100%;
            height: 680px;
          }
          @media screen and (max-width: 1200px) {
            .Content_illustration {
              background-image: url('/static/projects/comete/4-user-interface/illu-content-page-1200px.png');
            }
          }
          @media screen and (min-width: 1201px) and (max-width: 2000px) {
            .Content_illustration {
              background-image: url('/static/projects/comete/4-user-interface/illu-content-page-2000px.png');
            }
          }
          @media screen and (min-width: 2001px) {
            .Content_illustration {
              background-image: url('/static/projects/comete/4-user-interface/illu-content-page-3000px.png');
            }
          }
        `}</style>
        <div className='Backgrounds'>
          <div className='Background_1' />
          <div className='Background_2' />
          <div className='Background_3' />
          <div className='Background_4' />
          <div className='Background_5' />
        </div>
        <div className='Part_1'>
          <div className='Number_container'>
            <div className='Number'>02</div>
            <div className='Border_bottom'></div>
          </div>
          <div className='Illustration'>
            <img className='Second' width='1001' src='/static/projects/comete/4-user-interface/picto-UI.png' />
            <img className='Main' width='462' src='/static/projects/comete/4-user-interface/picto-UI.png' />
          </div>
          <div className='Infos'>
            <div className='Title'>User Interface</div>
            <div className='Baseline'>Create an interface able to please to children</div>
            <div className='Description'>To feat to the strategique choice, we creat a visual identity colorful and with a lot of illustrations. The color are brightful and refere to 90’s videogames.</div>
          </div>
        </div>
        <Homepage />
        <Content />
        <div className='Content_illustration' />
      </div>
    )
  }
}

const Content = () =>
  <div className='Content'>
   <style jsx>{`
    .Content {
      width: 100%;
      text-align: center;
      z-index: 1;
      position: relative;
      height: 350px;
      background-color: white;
      margin: auto;
    }
    .Title {
      font-family: Futura;
      font-weight: bold;
      font-size: 21px;
      line-height: 32px;
      color: #221061;
      display: inline-block;
      margin-top: 80px;
    }
    .Baseline {
      font-family: Playfair Display;
      font-weight: 900;
      font-size: 16px;
      font-style: italic;
      line-height: 32px;
      color: #abb0bc;
      max-width: 450px;
      margin: auto;
      margin-top: 10px;
    }
    .Description {
      font-family: Futura;
      font-size: 16px;
      line-height: 24px;
      color: #474f6f;
      max-width: 450px;
      margin: auto;
      margin-top: 10px;
    }
  `}</style>
    <div className='Title'>CONTENT PAGE</div>
    <div className='Baseline'>Scientific pages for a scientific exhibition</div>
    <div className='Description'>The curators of the exhibition wished to have an important scientific content. We have grouped them in two pages, one on the Rosetta mission and one on the comets. The information was presented as much as possible in the form of diagrams and graphics to make them more accessible.</div>
  </div>

const Homepage = () =>
  <div className='Homepage'>
   <style jsx>{`
    .Homepage {
      width: 100%;
      text-align: center;
      z-index: 1;
      position: relative;
      margin-top: 80px;
    }
    .Title {
      font-family: Futura;
      font-weight: bold;
      font-size: 21px;
      line-height: 32px;
      color: #8061e7;
      margin: auto;
      margin-bottom: 40px;
      text-transform: uppercase;
    }
    .Description {
      width: 315px;
      margin: auto;
      font-family: Futura;
      font-size: 14px;
      line-height: 24px;
      color: white;
      opacity: 0.6;
      text-align: center;
    }
    .Smartphone_home {
      display: block;
      margin: auto;
    }
    .Home_screen {
      display: block;
      margin: auto;
      margin-top: 30px;
    }
    .Home_typo {
      vertical-align: top;
      margin-right: 200px;
      opacity: 0.08;
    }
    .Home_screen_image {
      vertical-align: top;
      filter: drop-shadow(0px 5px 50px rgba(128, 97, 231, 0.8));
      text-shadow: 0px 5px 237px rgba(128, 97, 231, 0.8);
    }
  `}</style>
    <div className='Title'>Homepage</div>
    <div className='Description'>The goal of the homepage is to be as immersive as possible. The page is cut by strips of animated illustrations in parrallax and opens on a video of teaser.</div>
    <img className='Smartphone_home' height='638' alt='tablet smartphone homepage comete' src='/static/projects/comete/4-user-interface/home-smartphone+tablette.png' />
    <div className='Home_screen'>
      <img className='Home_typo' height='1826' alt='homepage typo' src='/static/projects/comete/4-user-interface/typo-homepage.svg' />
      <img className='Home_screen_image' height='2565' alt='homepage comete' src='/static/projects/comete/4-user-interface/page_accueil_final_3.jpg' />
    </div>
  </div>

export default UserInterface
