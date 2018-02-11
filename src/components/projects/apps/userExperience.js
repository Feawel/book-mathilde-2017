// src/componentqs/projects/comete/userInterface.js
import React from 'react'
import ReactDOM from 'react-dom'
import Number from '../common/number'
import DoubleIllustrations from '../common/doubleIllustrations'
import SectionInfos from '../common/sectionInfos'
import { TitleSecondary, Subtitle, SubtitlePart, Description } from '../common/texts'

class UserExperience extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: 0,
      isMobile: null
    }
    this.timer = this.timer.bind(this)
  }

  componentDidMount() {
    const {setSectionMetadata} = this.props
    setSectionMetadata({
      title: 'User experience',
      icon: '/static/projects/menu/grey-ux.png',
      activeIcon: '/static/projects/menu/apps-ux.png',
      element: ReactDOM.findDOMNode(this)
    })
    const intervalId = setInterval(this.timer, 3000)
    this.setState({ intervalId })
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  timer() {
    this.setState({ timer: this.state.timer + 1 })
  }

  render() {
    const { isMobile } = this.props
    return (
      <div className='User_experience'>
       <style jsx>{`
          .User_experience {
            width: 100%;
            margin: auto;
            overflow: hidden;
            position: relative;
            z-index: 0;
            height: 2782px;
          }
          @media screen and (max-width: 750px) {
            .User_experience {
              height: 2602px;
            }
          }
        `}</style>

        <Number
          content='01'
          color='#004459'
          borderBackground='linear-gradient(to left, #008db9 0%, #6ad7d9 100%)'
          responsivePicto='/static/projects/apps/3-user-experience/picto-UX.png' />
        <DoubleIllustrations
          main={{width: 460, src: '/static/projects/apps/3-user-experience/picto-UX.png'}}
          second={{width: 764, src: '/static/projects/apps/3-user-experience/picto-UX.png'}}
          location={{bottom: 150, right: 120}}
          mobileLocation={{top: -675, right: -1315}} />
        <SectionInfos
          isMobile={isMobile}
          marginTop={90}
          title={{content: 'User Experience', color: '#004459'}}
          baseline={{content: 'Create an app as easy to use as a book', color: '#abb0bc'}}
          description={{color: '#474f6f', content: "This app is a transcription of books for tablets. It is intended to be used by teachers and students in a class.<br/>The UX must remain as simple and instinctive than with books, even if we'll add tools such as fullscreen documents, drawing, comments, or answering exercises."}}
          />
        { isMobile !== null && isMobile && <ArchitectureMobile timer={this.state.timer} /> }
        { isMobile !== null && !isMobile && <Architecture timer={this.state.timer} /> }
        <Navbar />
        <Sidebar />
      </div>
    )
  }
}

const Architecture = ({ timer }) =>
  <div className='Architecture'>
   <style jsx>{`
      .Architecture {
        display: block;
        position: relative;
        width: 100%;
        margin: auto;
        text-align: center;
        z-index: 1;
        padding-bottom: 85px;
      }
      .Slider {
        width: 100%;
        height: 390px;
        background-image: linear-gradient(to right, #6ad7d9 0%, #008db9 100%);
        margin: auto;
        position: relative;
        z-index: 1;
      }
      .Screen {
        position: absolute;
        top: 19px;
        display: inline-block;
        height: 349px;
      }
      .Text {
        position: absolute;
        bottom: -80px;
        width: 260px;
        text-align: center;
        letter-spacing: 1.05px;
      }
      .Line {
        width: 1px;
        height: 24px;
        background-color: #bbc9d5;
        margin: auto;
      }
      .Left {
        left: calc(50% - 262px - 131px - 80px);
      }
      .Center {
        left: calc(50% - 131px);
      }
      .Right {
        left: calc(50% + 131px + 80px);
      }
      .Screen.active {
        opacity: 1;
      }
      .Screen.inactive {
        opacity: 0;
      }
      .Ipad {
        width: 308px;
        position: absolute;
        top: 118px;
        z-index: 10;
        display: block;
      }
      .Ipad.position_0 {
        left: calc(50% - 155px - 262px - 80px);
      }
      .Ipad.position_1 {
        left: calc(50% - 155px);
      }
      .Ipad.position_2 {
        left: calc(50% - 155px + 262px + 80px);
      }
      @media screen and (max-width: 750px) {
        .Architecture {
          display: none;
        }
      }
    `}</style>
    <TitleSecondary content='Architecture' style={{color: '#004459', margin: '65px auto 0 auto', letterSpacing: 1.05}} />
    <SubtitlePart
      content='How does it work ?'
      style={{color: '#abb0bc', margin: '5px 0 75px 0', letterSpacing: 1.05}} />
    <div className='Slider'>
      <img
        className={`Screen Left transitions ${timer%3 === 0 ? 'active' : 'inactive'}`}
        src='/static/projects/apps/3-user-experience/illus-archi-0-active.png' />
      <img
        className={`Screen Left transitions ${timer%3 === 0 ? 'inactive' : 'active'}`}
        src='/static/projects/apps/3-user-experience/illus-archi-0.png' />
      <div className='Text Left transitions' style={{opacity: timer%3 === 0 ? 1 : 0}}>
        <div className='Line' />
        <Subtitle content='CHOOSE A BOOK' style={{color: '#00b3df', margin: 0}} />
      </div>

      <img
        className={`Screen Center transitions ${timer%3 === 1 ? 'active' : 'inactive'}`}
        src='/static/projects/apps/3-user-experience/illus-archi-1-active.png' />
      <img
        className={`Screen Center transitions ${timer%3 === 1 ? 'inactive' : 'active'}`}
        src='/static/projects/apps/3-user-experience/illus-archi-1.png' />
      <div className='Text Center transitions' style={{opacity: timer%3 === 1 ? 1 : 0}}>
        <div className='Line' />
        <Subtitle content='CHOOSE A CHAPTER' style={{color: '#00b3df', margin: 0}} />
      </div>

      <img
        className={`Screen Right transitions ${timer%3 === 2 ? 'active' : 'inactive'}`}
        src='/static/projects/apps/3-user-experience/illus-archi-2-active.png' />
      <img
        className={`Screen Right transitions ${timer%3 === 2 ? 'inactive' : 'active'}`}
        src='/static/projects/apps/3-user-experience/illus-archi-2.png' />
      <div className='Text Right transitions' style={{opacity: timer%3 === 2 ? 1 : 0}}>
        <div className='Line' />
        <Subtitle content='CHOOSE A LESSON' style={{color: '#00b3df', margin: 0}} />
      </div>
    </div>
    <img className={`Ipad transitions position_${timer%3}`}
      src='/static/projects/apps/3-user-experience/ipad.png' />
  </div>



const ArchitectureMobile = ({ timer }) => {
  const left = timer%3 === 0 ? 343 : (timer%3 === 1 ? 1 : -341)
  return (
    <div className='Architecture_mobile_wrapper'>
      <TitleSecondary content='Architecture' style={{textAlign: 'center', color: '#004459', margin: '50px auto 0 auto', letterSpacing: 1.05}} />
      <SubtitlePart
        content='How does it work ?'
          style={{textAlign: 'center', color: '#abb0bc', margin: '5px 0 50px 0', letterSpacing: 1.05}} />
      <div className='Architecture_mobile'>
       <style jsx>{`
          .Architecture_mobile {
            display: block;
            position: relative;
            width: 100%;
            margin: auto;
            background-image: linear-gradient(to right, #6ad7d9 0%, #008db9 100%);
            text-align: center;
            z-index: 1;
            margin-top: 60px;
          }
          .Slider {
            width: 100%;
            height: 410px;
            margin: auto;
            position: relative;
            z-index: 1;
          }
          .Screen {
            position: absolute;
            top: -22px;
            display: inline-block;
            height: 349px;
            transform: scale(1, 1);
          }
          .Text {
            position: absolute;
            top: 340px;
            width: 220px;
            text-align: center;
            margin-left: 20px;
          }
          .Text.active {
            opacity: 1;
          }
          .Text.inactive {
            opacity: 0;
          }
          .Left {
            left: calc(50% - 262px - 131px - 80px);
          }
          .Center {
            left: calc(50% - 131px);
          }
          .Right {
            left: calc(50% + 131px + 80px);
          }
          .Screen.active {
            transform: scale(1, 1);
          }
          .Screen.inactive {
            transform: scale(0.9, 0.9);
          }
          .Squares {
            width: 80px;
            margin: auto;
          }
          .Square {
            position: relative;
            top: -20px;
            display: inline-block;
            width: 12px;
            height: 12px;
            opacity: 0.6;
            margin-right: 15px;
            border-radius: 2px;
            background-color: white;
          }
          .Square.active {
            width: 16px;
            height: 16px;
            opacity: 1;
          }
          .Square:nth-child(3) {
            margin-right: 0;
          }
        `}</style>
        <div className='Slider transitions' style={{ left }}>
          <img
            className={`Screen Left transitions ${timer%3 === 0 ? 'active' : 'inactive'}`}
            src='/static/projects/apps/3-user-experience/illus-archi-0-active.png' />
          <div className={`Text Left transitions ${timer%3 === 0 ? 'active' : 'inactive'}`}>
            <Subtitle content='CHOOSE A BOOK' style={{margin: 0}} />
          </div>

          <img
            className={`Screen Center transitions ${timer%3 === 1 ? 'active' : 'inactive'}`}
            src='/static/projects/apps/3-user-experience/illus-archi-1-active.png' />
          <div className={`Text Center transitions ${timer%3 === 1 ? 'active' : 'inactive'}`}>
            <Subtitle content='CHOOSE A CHAPTER' style={{margin: 0}} />
          </div>

          <img
            className={`Screen Right transitions ${timer%3 === 2 ? 'active' : 'inactive'}`}
            src='/static/projects/apps/3-user-experience/illus-archi-2-active.png' />
          <div className={`Text Right transitions ${timer%3 === 2 ? 'active' : 'inactive'}`}>
            <Subtitle content='CHOOSE A LESSON' style={{margin: 0}} />
          </div>
        </div>
        <div className='Squares'>
          <div className={`Square transitions ${timer%3 === 0 ? 'active' : ''}`} />
          <div className={`Square transitions ${timer%3 === 1 ? 'active' : ''}`} />
          <div className={`Square transitions ${timer%3 === 2 ? 'active' : ''}`} />
        </div>
      </div>
    </div>
  )
}

const mobileList1 = ['Open the sidebar', 'Search a page on the book', 'Bookmark']
const mobileList2 = ['Connect / Disconnect', 'Setting (light, typo size)', 'Use the pencil tool']
const Navbar = () =>
  <div className='Navbar'>
   <style jsx>{`
      .Navbar {
        display: block;
        position: relative;
        width: 100%;
        margin: auto;
        display: inline-block;
      }
      .Illustration {
        display: inline-block;
        background: url('/static/projects/apps/3-user-experience/navbar-illu.png');
        height: 770px;
        width: 1151px;
        background-size: cover;
        position: relative;
        top: -45px;
      }
      .Infos {
        position: absolute;
        top: 30px;
        right: 150px;
      }
      .Mobile_grey_part{
        display: none;
      }
      .Mockup {
        display: none;
      }
      .Mobile_pictos {
        display: none;
      }
      @media screen and (max-width: 750px) {
        .Illustration {
          display: none;
        }
        .Navbar {
          height: 677px;
        }
        .Infos {
          height: 0px;
          background-color: white;
          position: relative;
          width: 100%;
          text-align: center;
          top: 10px;
          right: 0
        }
        .Mobile_grey_part {
          position: absolute;
          opacity: 0.3;
          top: 160px;
          display: inline-block;
          height: 284px;
          width: 100%;
          background-color: #dbdfea;
          text-align: center;
        }
        .Mockup {
          display: inline-block;
          width: 302px;
          margin: auto;
          position: absolute;
          top: 200px;
          left: calc(50% - 151px);
        }
        .Mobile_pictos {
          display: inline-block;
          width: 100%;
          position: absolute;
          top: 490px;
        }
        .Mobile_pictos_inner {
          width: 311px;
          margin: auto;
        }
        .List {
          display: inline-block
          width: 170px;
          vertical-align: top;
        }
      }
    `}</style>
    <div className='Illustration' />
    <div className='Infos'>
      <TitleSecondary content='Navbar' style={{color: '#004459', margin: '40px auto 0 auto', letterSpacing: 1.05}} />
      <SubtitlePart
        content='iOS version'
        style={{color: '#abb0bc', margin: '5px 0'}} />
    </div>
    <div className='Mobile_grey_part' />
    <img src='/static/projects/apps/3-user-experience/smartphone/ipad-navbar.png' alt='responsive navbar image' className='Mockup' />
    <div className='Mobile_pictos'>
      <div className='Mobile_pictos_inner'>
        <div className='List'>
          {mobileList1.map((item, i) => <Item item={item}  key={i} index={i} list={0} />)}
        </div>
        <div className='List' style={{width: 140}}>
          {mobileList2.map((item, i) => <Item item={item}  key={i} index={i} list={1} />)}
        </div>
      </div>
    </div>
  </div>

const Item = ({ item, index, list }) =>
  <div className='Item'>
    <style jsx>{`
      .Item {
        width: 100%;
        height: 32px;
        vertical-align: top;
        margin-bottom: 20px;
      }
      .Item img {
        margin-right: 10px;
        width: 32px;
        height: 32px;
        display: inline-block;
      }
    `}</style>
    <img src={`/static/projects/apps/3-user-experience/smartphone/picto-navbar-${list}${index}.svg`} alt={`image ${item}`} />
    <Description
      content={item}
      style={{display: 'inline-block', color: '#474f6f', margin: 0, width: 95, textAlign: 'left', lineHeight: '18px'}} />
  </div>


class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {first: true}
  }
  toggleMobileScreen(first) {
    this.setState({first})
  }
  render() {
    const { first } = this.state
    const leftColor = first ? '#00b2e1' : 'white'
    const rightColor = first ? 'white' : '#00b2e1'

    return (
      <div className='Sidebar'>
       <style jsx>{`
          .Sidebar {
            display: block;
            position: relative;
            width: 100%;
            text-align: center;
            background-image: linear-gradient(to left, #008db9 0%, #6ad7d9 100%);
            height: 835px;
            top: -150px;
            z-index: -1;
          }
          .Infos {
            position: absolute;
            left: 0;
            top: 87px;
            display: inline-block;
            max-width: 290px;
            text-align: left;
          }
          .Pictos {
            display: inline-block;
            background: url('/static/projects/apps/3-user-experience/sidebar-pictos.png');
            height: 242px;
            width: 368px;
            background-size: contain;
            position: absolute;
            top: 330px;
            left: 50px;
          }
          .Screens {
            display: inline-block;
            background: url('/static/projects/apps/3-user-experience/sidebar-screens.png');
            height: 705px;
            width: 767px;
            background-size: cover;
            position: absolute;
            right: -130px;
            top: 80px;
          }
          .Mobile_screens {
            display: none;
          }
          .Switch {
            display: none;
          }
          @media screen and (max-width: 750px) {
            .Sidebar {
              top: 0;
              height: 830px;
            }
            .Infos {
              position: relative;
              width: 300px;
              text-align: center;
              top: 30px;
              left: 0;
              margin: auto;
            }
            .Screens {
              display: none;
              background: url('/static/empty_icon.png');
            }
            .Pictos {
              display: none;
              background: url('/static/empty_icon.png');
            }
            .Mobile_screens {
              position: relative;
              display: inline-block;
              width: 310px;
              margin: 30px auto;
            }
            .Screen {
              position: absolute;
              top: 0;
              left: 0;
              width: 310px;
              box-shadow: 0px 7px 20px 0px rgba(1,1,1,0.5);
            }
            .Screen.active {
              opacity: 1;
            }
            .Screen.inactive {
              opacity: 0;
            }
            .Switch {
              display: inline-block;
              margin: auto;
              position: absolute;
              bottom: 60px;
              left: calc(50% - 155px);
              width: 310px;
              height: 42px;
            }
            .Left {
              vertical-align: top;
              display: inline-block;
              width: 155px;
              border-radius: 2px 0 0 2px;
            }
            .Right {
              vertical-align: top;
              display: inline-block;
              width: 153px;
              border-radius: 0 2px 2px 0;
            }
            .Left.inactive, .Right.inactive {
              background-color: transparent;
              border: 1px solid white;
              height: 40px;
            }
            .Left.active, .Right.active {
              background-color: white;
              border: none;
              height: 42px;
            }
          }
        `}</style>
        <div className='Global_content_wrapper'>
          <div className='Infos'>
            <TitleSecondary content='Sidebar' style={{color: 'white', margin: '40px auto 0 auto', letterSpacing: 1.05}} />
            <SubtitlePart
              content='iOS version' style={{opacity: 0.8}} />
            <Description
              content='The sidebarre was divided into two tabs: On one side, all the chapters and pages of the book, on the other all personalized or marked pages.'
              style={{color: 'white', margin: '20px 0', opacity: 0.8}} />
          </div>
          <div className='Pictos' />
          <div className='Screens' />
          <div className='Mobile_screens'>
            <img className={`transitions Screen Screen_pages ${first ? 'active' : 'inactive'}`} alt='pages screen' src='/static/projects/apps/3-user-experience/smartphone/sidebar1.jpg' />
            <img className={`transitions Screen Screen_notes ${first ? 'inactive' : 'active'}`} alt='notes screen' src='/static/projects/apps/3-user-experience/smartphone/sidebar2.jpg' />
          </div>
          <div className='Switch'>
            <div className={`Left clickable ${first ? 'active' : 'inactive'}`} onClick={() => this.toggleMobileScreen(true)}>
              <Description content='Pages' style={{color: leftColor, margin: 0, display: 'inline', position: 'relative', top: 7}} />
            </div>
            <div className={`Right clickable ${first ? 'inactive' : 'active'}`} onClick={() => this.toggleMobileScreen(false)}>
              <Description content='Notes' style={{color: rightColor, margin: 0, display: 'inline', position: 'relative', top: 7}} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default UserExperience
