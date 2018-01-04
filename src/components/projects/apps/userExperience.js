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
      timer: 0
    }
    this.timer = this.timer.bind(this)
  }

  componentDidMount() {
    const {setSectionMetadata} = this.props
    setSectionMetadata({
      title: 'User experience',
      icon: '/static/projects/apps/2-menu/picto-UX-grey.svg',
      activeIcon: '/static/projects/apps/2-menu/picto-UX.svg',
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
    return (
      <div className='User_experience'>
       <style jsx>{`
          .User_experience {
            width: 100%;
            margin: auto;
            overflow: hidden;
            position: relative;
            z-index: 0;
            height: 2700px;
          }
        `}</style>

        <Number content='01' color='#004459' borderBackground='linear-gradient(to left, #008db9 0%, #6ad7d9 100%)' />
        <DoubleIllustrations
          main={{width: 460, src: '/static/projects/apps/3-user-experience/picto-UX.png'}}
          second={{width: 764, src: '/static/projects/apps/3-user-experience/picto-UX.png'}}
          location={{bottom: 150, right: 120}}
          mobileLocation={{top: -675, right: -315, zoom: 0.6}} />
        <SectionInfos
          marginTop={90}
          title={{content: 'User Experience', color: '#004459'}}
          baseline={{content: 'Create an app as easy to use as a book', color: '#abb0bc'}}
          description={{color: '#474f6f', content: 'This app is a transcription of books for tablets. It is intended to be used by teachers and children in class. The user experience must therefore be as simple and instinctive as with the basic books, while adding tools such as the ability to documents in full screens, to draw and write on the pages, to put some of them side, or even to respond to exercises.'}}
          />
        <Architecture timer={this.state.timer} />
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
        padding-bottom: 100px;
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
        bottom: -70px;
        width: 260px;
        text-align: center;
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
        top: 123px;
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
    `}</style>
    <TitleSecondary content='Architecture' style={{color: '#004459', margin: '80px auto 0 auto'}} />
    <SubtitlePart
      content='How does it work ?'
      style={{color: '#abb0bc', margin: '25px 0 60px 0'}} />
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
        height: 644px;
        width: 872px;
        background-size: contain;
      }
      .Infos {
        position: absolute;
        top: 30px;
        right: 150px;
      }
    `}</style>
    <div className='Illustration' />
    <div className='Infos'>
      <TitleSecondary content='Navbar' style={{color: '#004459', margin: '40px auto 0 auto'}} />
      <SubtitlePart
        content='iOS version'
        style={{color: '#abb0bc'}} />
    </div>
  </div>

const Sidebar = () =>
  <div className='Sidebar'>
   <style jsx>{`
      .Sidebar {
        display: block;
        position: relative;
        width: 100%;
        text-align: center;
        background-image: linear-gradient(to left, #008db9 0%, #6ad7d9 100%);
        height: 800px;
        top: -150px;
        z-index: -1;
      }
      .Infos {
        display: block;
        max-width: 290px;
        text-align: left;
        position: absolute;
        top: 100px;
        left: calc(50% - 524px);
      }
      .Pictos {
        display: inline-block;
        background: url('/static/projects/apps/3-user-experience/sidebar-pictos.png');
        height: 242px;
        width: 368px;
        background-size: contain;
        position: absolute;
        top: 300px;
        left: calc(100% - 705px - 368px + 20px);
      }
      .Screens {
        display: inline-block;
        background: url('/static/projects/apps/3-user-experience/sidebar-screens.png');
        height: 601px;
        width: 705px;
        background-size: contain;
        position: absolute;
        right: 0;
        top: 100px;
      }
    `}</style>
    <div className='Infos'>
      <TitleSecondary content='Sidebar' style={{color: 'white', margin: '40px auto 0 auto'}} />
      <SubtitlePart
        content='iOS version' />
      <Description
        content='The sidebarre was divided into two tabs: On one side, all the chapters and pages of the book, on the other all personalized or marked pages.'
        style={{color: 'white', margin: '20px 0'}} />
    </div>
    <div className='Pictos' />
    <div className='Screens' />
  </div>

export default UserExperience
