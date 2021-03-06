// src/componentqs/projects/comete/userInterface.js
import React from 'react'
import ReactDOM from 'react-dom'
import Number from '../common/number'
import DoubleIllustrations from '../common/doubleIllustrations'
import SectionInfos from '../common/sectionInfos'
import { TitleSecondary, SubtitlePart, Description } from '../common/texts'

class UserInterface extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const {setSectionMetadata} = this.props
    setSectionMetadata({
      title: 'User interface',
      icon: '/static/projects/menu/grey-ui.png',
      activeIcon: '/static/projects/menu/comete-ui.png',
      element: ReactDOM.findDOMNode(this)
    })
  }

  render() {
    const {isMobile} = this.props
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
            position: relative;
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
          .Content_illustration {
            background-image: url('/static/projects/comete/4-user-interface/illu-content-page-1200px.png');
            background-size: cover;
            background-position: center;
            width: 100%;
            height: 680px;
            z-index: 2;
            position: relative;
          }
          @media screen and (max-width: 1400px) {
            .Content_illustration {
              background-image: url('/static/projects/comete/4-user-interface/illu-content-page-1200px.png');
            }
          }
          @media screen and (min-width: 1401px) and (max-width: 2300px) {
            .Content_illustration {
              background-image: url('/static/projects/comete/4-user-interface/illu-content-page-2000px.png');
            }
          }
          @media screen and (min-width: 2301px) {
            .Content_illustration {
              background-image: url('/static/projects/comete/4-user-interface/illu-content-page-3000px.png');
            }
          }
          @media screen and (max-width: 750px) {
            .User_interface {
              height: 2935px;
            }
            .Background_1 {
              height: 815px;
              background-image: url('/static/projects/comete/responsive/4-user-interface/fond-comete/fond-comete1.png');
            }
            .Background_2 {
              height: 725px;
              background-image: url('/static/projects/comete/responsive/4-user-interface/fond-comete/fond-comete2.png');
            }
            .Background_3 {
              height: 815px;
              background-image: url('/static/projects/comete/responsive/4-user-interface/fond-comete/fond-comete3.png');
            }
            .Background_4 {
              height: 815px;
              background-image: url('/static/projects/comete/responsive/4-user-interface/fond-comete/fond-comete4.png');
            }
            .Background_5 {
              height: 481;
              background-image: url('/static/projects/comete/responsive/4-user-interface/fond-comete/fond-comete5.png');
            }
            .Content_illustration {
              background-image: url('/static/projects/comete/responsive/4-user-interface/content-page-smartphone-01.png');
              background-size: cover;
              background-color: white;
              width: 100%;
              height: 280px;
              opacity: 1;
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
          <Number
            content='02'
            color='white'
            responsivePicto='/static/projects/comete/4-user-interface/picto-UI.png'
            borderBackground='linear-gradient(to left, #5d1bb0 0%, #4dd0ff 100%)' />
          <DoubleIllustrations
            main={{width: 462, src: '/static/projects/comete/4-user-interface/picto-UI.png'}}
            second={{width: 1001, src: '/static/projects/comete/4-user-interface/picto-UI.png'}}
            location={{bottom: 150, right: 160}}
            mobileLocation={{top: -675, right: -315}} />
          <SectionInfos
            isMobile={isMobile}
            marginTop={195}
            title={{content: 'User Interface', color: 'white'}}
            baseline={{content: 'Create a fun and immersive interface', color: 'white'}}
            description={{opacity: 0.6, color: 'white', content: 'We have designed a fun website, using animations, videos, diagrams or illustrations as well as featured the exhibition and thorough scientific content.'}}
            />
        </div>
        <Homepage />
        <Content isMobile={isMobile} />
        <div className='Content_illustration' />
      </div>
    )
  }
}

const Content = ({isMobile}) =>
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
    .Infos {
      position: relative;
      top: 73px;
    }
    @media screen and (max-width: 750px) {
      .Content {
        height 390px;
      }
    }
  `}</style>
    <div className='Infos'>
      <TitleSecondary content='CONTENT PAGES' style={{color: '#221061', margin: 0}} />
      <SubtitlePart
        content='Scientific pages for a scientific exhibition'
        style={{color: '#abb0bc', width: isMobile ? 300 : 450, margin: 'auto'}} />
      <Description
        content='The exhibition presented a large scientific content. We gathered this content into two pages, one focused on rosetta mission and the other one on different comets. Pieces of information were presented as much as possible with diagrams and graphics for greater clarity.'
        style={{color: '#474f6f', fontSize: 16, margin: '10px auto', width: isMobile ? 300 : 450}} />
    </div>
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
    .Smartphone_home {
      display: block;
      margin: auto;
    }
    .Mobile {
      display: none;
    }
    .Home_screen {
      display: block;
      margin: auto;
      margin-top: 30px;
      padding-bottom: 80px;
    }
    .Home_typo {
      vertical-align: top;
      margin-right: 200px;
      opacity: 0.08;
      height: 1826px;
    }
    .Home_screen_image {
      vertical-align: top;
      height: 2565px;
      filter: drop-shadow(0px 5px 50px rgba(128, 97, 231, 0.5));
      text-shadow: 0px 5px 237px rgba(128, 97, 231, 0.5);
    }
    @media screen and (max-width: 750px) {
      .Homepage {
        margin-top: 45px;
      }
      .Desktop {
        display: none;
      }
      .Mobile {
        display: block;
      }
      .Home_typo {
        height: 840px;
        margin-right: 0px;
      }
      .Home_screen_image {
        height: 1151px;
      }
    }

  `}</style>
    <TitleSecondary content='Homepage' style={{color: '#8061e7', margin: 'auto auto 40px auto'}} />
    <div className='Desktop'>
      <Description
        content='The homepage intends to be as immersive as possible. The page is cut by strips of animated illustrations in parallax and offers a teasing video.'
        style={{opacity: 0.6, margin: 'auto', width: 300, textAlign: 'center'}} />
    </div>
    <div className='Mobile'>
      <Description
        content='The goal of the homepage is to be as immersive as possible. The page is cut by strips of animated illustrations in parallax and opens a teasing video.'
        style={{opacity: 0.6, margin: 'auto', width: 300, textAlign: 'center'}} />
    </div>
    <img className='Smartphone_home Desktop' height='638' alt='tablet smartphone homepage comete' src='/static/projects/comete/4-user-interface/home-smartphone+tablette.png' />
    <img className='Smartphone_home Mobile' width='100%' alt='tablet smartphone homepage comete' src='/static/projects/comete/responsive/4-user-interface/illu-iphone-homepage-01.png' />
    <div className='Home_screen'>
      <img className='Home_typo' alt='homepage typo' src='/static/projects/comete/4-user-interface/typo-homepage.svg' />
      <img className='Home_screen_image' alt='homepage comete' src='/static/projects/comete/4-user-interface/page_accueil_final_3.jpg' />
    </div>
  </div>

export default UserInterface
