// src/componentqs/projects/comete/userInterface.js
import React from 'react'
import ReactDOM from 'react-dom'
import Number from '../common/number'
import DoubleIllustrations from '../common/doubleIllustrations'
import SectionInfos from '../common/sectionInfos'
import { TitlePrimary, TitleSecondary, Subtitle, SubtitlePart, Description } from '../common/texts'

class UserExperience extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const {setSectionMetadata} = this.props
    setSectionMetadata({
      title: 'User experience',
      icon: '/static/projects/menu/grey-ux.svg',
      activeIcon: '/static/projects/menu/classe-ux.png',
      element: ReactDOM.findDOMNode(this)
    })
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
          }
        `}</style>

        <Number
          content='02'
          color='#1a2432'
          responsivePicto='/static/projects/classe/4-user-experience/picto-UX.png'
          borderBackground='linear-gradient(to left, #f04372 0%, #ffd69c 100%)' />
        <DoubleIllustrations
          main={{width: 460, src: '/static/projects/classe/4-user-experience/picto-UX.png'}}
          second={{width: 764, src: '/static/projects/classe/4-user-experience/picto-UX.png'}}
          location={{bottom: 150, right: 120}}
          mobileLocation={{top: -675, right: -1315, zoom: 0.6}} />
        <SectionInfos
          marginTop={90}
          title={{content: 'User Experience', color: '#1a2432'}}
          baseline={{content: 'A simple and fun interface', color: '#a8adb9'}}
          description={{color: '#474f6f', content: 'The digital class interface offers a large number of complex functionnalities. The design work consisted of making it simple enough and playful for teachers and students.'}}
          />
        <Persona />
        <Homepage />
        <Statistics />
        <Homework />
      </div>
    )
  }
}


const teacherList = [
  {icon: '/static/projects/classe/4-user-experience/picto-carte-01.png', content: 'Create a class and add students'},
  {icon: '/static/projects/classe/4-user-experience/picto-carte-02.png', content: 'Create and correct homework'},
  {icon: '/static/projects/classe/4-user-experience/picto-carte-03.png', content: 'Chat with students'}
]
const studentList = [
  {icon: '/static/projects/classe/4-user-experience/picto-carte-04.png', content: 'Join a class'},
  {icon: '/static/projects/classe/4-user-experience/picto-carte-05.png', content: 'Do your homework'},
  {icon: '/static/projects/classe/4-user-experience/picto-carte-06.png', content: 'Chat with your teacher and class'}
]
const Persona = () =>
  <div className='Persona'>
   <style jsx>{`
      .Persona {
        position: relative;
        margin: auto;
        width: 100%;
        height: 651px;
        text-align: center;
        margin-top: 80px;
      }
      .Background {
        margin: auto;
        width: 100%;
        height: 651px;
        background-color: #e7e9ef;
        position: absolute;
        top: 0;
        opacity: 0.3;
        z-index: -1;
      }
      .Cards {
        width: 810px;
        margin: auto;
        z-index: 1;
      }
      .Card:first-child {
        margin-right: 80px;
      }
      .Card {
        display: inline-block;
        width: 290px;
        height: 350px;
        background-color: white;
        box-shadow: 0px 2px 10px 0px rgba(1, 1, 1, 0.2);
        padding: 40px 30px 30px 30px;
      }
      .Avatar {
        display: inline-block;
        width: 131px;
        height: 131px;
      }
      @media screen and (max-width: 750px) {
        .Persona {
          height: 1105px;
        }
        .Cards {
          width: 100%;
        }
        .Card:first-child {
          margin-right: 0;
          margin-bottom: 40px;
        }
      }
    `}</style>
    <div className='Background' />
    <TitleSecondary content='how DOES it’s work ?' style={{color: '#474f6f', margin: '0 auto', marginBottom: 60, position: 'relative', top: 60}} />
    <SubtitlePart
      content='Uses of the digital class'
      style={{color: '#a6abb7', marginBottom: 60}} />
    <div className='Cards'>
      <div className='Card'>
        <img className='Avatar' src='/static/projects/classe/4-user-experience/illu-carte1-01.png' alt='teacher avatar' />
        <Subtitle
          content='you are a teacher. YOu can :'
          style={{color: '#00b3df', margin: '20px 0'}} />
        <div className='List'>
          {teacherList.map((item, i) => <Item {...item} key={i} />)}
        </div>
      </div>
      <div className='Card'>
        <img className='Avatar' src='/static/projects/classe/4-user-experience/illu-carte2-01.png' alt='student avatar' />
        <Subtitle
          content='you are a student. YOu can :'
          style={{color: '#fe5778', margin: '20px 0'}} />
        <div className='List'>
          {studentList.map((item, i) => <Item {...item} key={i} />)}
        </div>
      </div>
    </div>
  </div>

const Item = ({content, icon}) =>
  <div className='Item'>
   <style jsx>{`
      .Item {
        display: block;
        text-align: left;
        margin-bottom: 15px;
      }
      .Image {
        margin-right: 20px;
        width: 36px;
        height: 36px;
      }
    `}</style>
    <img className='Image' alt='' src={icon} />
    <Description content={content} style={{position: 'relative', top: 5, verticalAlign: 'top', display: 'inline', color: '#474f6f'}} />
  </div>

const Homepage = () =>
  <div className='Homepage'>
   <style jsx>{`
      .Homepage {
        position: relative;
        margin: auto;
        height: 1485px;
      }
      .Blue_background {
        display: inline-block;
        width: 100%;
        height: 1225px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
      }
      .Content {
        width: 1020px;
        margin: 0 auto 120px;
        position: relative;
        top: 80px;
      }
      .Anim {
        width: 357px;
        display: inline-block;
        position: relative;
        right: 100px;
      }
      .Classes {
        text-align: center;
        margin: auto;
        margin-top: 290px;
      }
      .Header {
        width: 320px;
        margin: auto;
      }
      .Anim_ipad {
        display: inline-block;
        height: 511px;
        margin: auto;
        margin-top: 60px;
      }
      .Description_container {
        width: 320px;
        margin-bottom: 50px;
      }
      .Mockup_home_mobile {
        display: none;
      }
      .Mockup_home_desktop {
        position: absolute;
        right: -130px;
        top: 0;
      }
      @media screen and (max-width: 750px) {
        .Blue_background {
          display: none;
        }
        .Homepage {
          height: 1300px;
          background-image: linear-gradient(to top, #008ab6 0%, #73e4e6 100%);
        }
        .Content {
          top: 40px;
          width: 90%;
          margin: auto;
          text-align: center;
        }
        .Anim {
          right: 50px;
          display: block;
          margin: auto;
        }
        .Description_container {
          margin-bottom: 20px;
        }
        .Right {
          width: 100%;
        }
        .Mockup_home_desktop {
          display: none;
        }
        .Mockup_home_mobile {
          display: inline-block;
          position: relative;
          right: 80px;
        }
        .Classes {
          margin-top: 40px;
        }
      }
    `}</style>
    <img src='/static/projects/classe/4-user-experience/fond-3.svg' className='Blue_background' />
    <div className='Content'>
      <TitleSecondary content='homepage' style={{margin: '0 auto'}} />
      <div className='Description_container'>
        <Description
          content='Here is the interface that welcomes the user at first.  It has access to all classes already created, and can create new ones. It can also modify or delete a class already created.' />
      </div>
      <img className='Anim'alt='animation class card' src='/static/projects/classe/4-user-experience/anim-carte.gif' />
      <img className='Mockup_home_desktop' width='794' alt='animation class card' src='/static/projects/classe/4-user-experience/mockup-home.png' />
      <img className='Mockup_home_mobile' height='486' alt='animation class card' src='/static/projects/classe/4-user-experience/mobile/smartphone-home-01.png' />
    </div>
    <div className='Classes'>
      <div className='Header'>
        <TitleSecondary content='on a classe' style={{margin: '0 auto'}} />
        <SubtitlePart
          content='Manage your students, your homework and communicate with the class.'
          style={{lineHeight: '24px'}} />
      </div>
      <Classe />
    </div>
  </div>

class Classe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: 0
    }
    this.timer = this.timer.bind(this)
  }

  componentDidMount() {
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
    const { timer } = this.state
    const left = timer%3 === 0 ? 343 : (timer%3 === 1 ? 1 : -341)
    return (
      <div className='Classe'>
       <style jsx>{`
          .Classe {
            display: block;
            position: relative;
            width: 100%;
            margin: auto;
            text-align: center;
            z-index: 1;
            margin-top: 60px;
          }
          .Slider {
            width: 100%;
            height: 390px;
            margin: auto;
            position: relative;
            z-index: 1;
          }
          .Screen {
            position: absolute;
            top: 19px;
            display: inline-block;
            height: 349px;
            zoom: 1;
          }
          .Text {
            position: absolute;
            bottom: -100px;
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
            zoom: 1;
          }
          .Screen.inactive {
            zoom: 0.9;
          }
          .Ipad {
            width: 308px;
            position: absolute;
            top: -25px;
            z-index: 10;
            display: block;
            left: calc(50% - 155px);
          }
          @media screen and (max-width: 750px) {
            .Ipad {
              display: none;
            }
            .Text {
              bottom: -50px;
            }
          }
        `}</style>
        <div className='Slider transitions' style={{ left }}>
          <img
            className={`Screen Left transitions ${timer%3 === 0 ? 'active' : 'inactive'}`}
            src='/static/projects/classe/4-user-experience/anim-classe-1.png' />
          <div className={`Text Left transitions ${timer%3 === 0 ? 'active' : 'inactive'}`}>
            <div className='Line' />
            <Subtitle content='INVITE STUDENTS AND SEE THEIR STATS' style={{color: '#00b3df', margin: 0}} />
          </div>

          <img
            className={`Screen Center transitions ${timer%3 === 1 ? 'active' : 'inactive'}`}
            src='/static/projects/classe/4-user-experience/anim-classe-2.png' />
          <div className={`Text Center transitions ${timer%3 === 1 ? 'active' : 'inactive'}`}>
            <div className='Line' />
            <Subtitle content='MANAGE THE HOMEWORK YOU CREATED' style={{color: '#00b3df', margin: 0}} />
          </div>

          <img
            className={`Screen Right transitions ${timer%3 === 2 ? 'active' : 'inactive'}`}
            src='/static/projects/classe/4-user-experience/anim-classe-3.png' />
          <div className={`Text Right transitions ${timer%3 === 2 ? 'active' : 'inactive'}`}>
            <div className='Line' />
            <Subtitle content='CHAT WITH YOUR STUDENTS ACROSS CLASSES' style={{color: '#00b3df', margin: 0}} />
          </div>
        </div>
        <img className='Ipad transitions'
          src='/static/projects/classe/4-user-experience/ipad.png' />
      </div>
    )
  }
}

const Statistics = () =>
  <div className='Statistics'>
   <style jsx>{`
      .Statistics {
        position: relative;
        margin: auto;
        height: 1288px;
        text-align: center;
      }
      .Blue_background {
        display: inline-block;
        width: 100%;
        height: 1288px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
      }
      .Statistics_wrapper {
        width: 1020px;
        height: 100%;
        position: relative;
        margin: auto;
      }
      .Header {
        display: inline-block;
        position: relative;
        margin: auto;
        margin-bottom: 60px;
      }
      .Mockup {
        display: block;
        margin: auto;
        width: 800px;
        z-index: 5;
      }
      .Anim_stats {
        position: absolute;
        bottom: 270px;
        display: block;
        height: 360px;
        z-index: 8;
      }
      .Stats_background {
        position: absolute;
        top: 300px;
        left: -75px;
        width: 1174px;
        z-index: -1;
      }
      .Title_container {
        margin-top: 120px;
      }
      @media screen and (max-width: 750px) {
        .Statistics {
          margin-top: 250px;
          background-image: linear-gradient(to top, #008ab6 0%, #73e4e6 100%);
          height: 770px;
        }
        .Statistics_wrapper {
          width: 100%;
        }
        .Blue_background {
          display: none;
        }
        .Stats_background {
          display: none;
        }
        .Title_container {
          margin-top: 60px;
        }
        .Stats_background {
          display: none;
        }
        .Mockup, .Anim_stats {
          width: 310px;
          height: auto;
          display: block;
          margin: auto;
        }
        .Anim_stats {
          width: 350px;
          position: relative;
          bottom: auto;
        }
      }
    `}</style>
    <img src='/static/projects/classe/4-user-experience/fond-4.svg' className='Blue_background' />
    <div className='Statistics_wrapper'>
      <div className='Header'>
        <div className='Title_container'>
          <TitleSecondary content='statistics' style={{margin: '0 auto'}} />
        </div>
        <SubtitlePart
          content={`Follow your students' progress.`} />
      </div>
      <img className='Stats_background' alt='statistics mockup' src='/static/projects/classe/4-user-experience/stat-fond.png' />
      <img className='Mockup' alt='statistics mockup' src='/static/projects/classe/4-user-experience/ecran-stat.jpg' />
      <img className='Anim_stats' alt='statistics animation' src='/static/projects/classe/4-user-experience/anim-stat.gif' />
    </div>
  </div>

const Homework = () =>
  <div className='Homework'>
   <style jsx>{`
      .Homework {
        position: relative;
        margin: auto;
        text-align: center;
      }
      .Steps {
        margin: auto;
        position: relative;
        width: 1020px;
      }
      .Red_background {
        display: inline-block;
        width: 100%;
        height: 1006px;
        position: absolute;
        top: 200px;
        left: 0;
        z-index: -1;
      }
      @media screen and (max-width: 750px) {
        .Steps {
          width: 100%;
          background-image: linear-gradient(to top, #ffd69c 0%, #f04372 100%);
          padding-top: 60px;
        }
        .Red_background {
          display: none;
        }
      }
    `}</style>
    <TitleSecondary content='create homework' style={{color: '#474f6f', margin: '0 auto', marginTop: 60}} />
    <SubtitlePart
      content='In three steps'
      style={{color: '#a8adb9', marginBottom: 60}} />
    <div className='Steps'>
      <Step1 />
      <Step2 />
      <Step3 />
    </div>
    <img src='/static/projects/classe/4-user-experience/fond-5.svg' className='Red_background' />
  </div>

const Step1 = () =>
  <div className='Step'>
    <style jsx>{`
      .Step {
        position: relative;
      }
      .Mockup {
        display: inline-block;
        width: 592px;
        margin-right: 70px;
      }
      .Infos {
        display: inline-block;
        width: 350px;
        text-align: left;
        vertical-align: top;
        position: relative;
        top: 90px;
      }
      .Title {
        margin: 0;
      }
      @media screen and (max-width: 750px) {
        .Title {
          font-size: 66px!important;
          line-height: 78px!important;
        }
        .Step {
          width: 310px;
          margin: auto;
          height: 390px;
        }
        .Infos, .Mockup {
          width: 100%;
          display: block;
          margin: auto;
          text-align: center;
        }
        .Infos {
          position: absolute;
          top: 0px;
        }
        .Mockup {
          position: absolute;
          top: 240px;
        }
      }
    `}</style>
    <img className='Mockup' alt='mockup' src='/static/projects/classe/4-user-experience/homework1.gif' />
    <div className='Infos'>
      <div className='Global_title_primary Title'>01</div>
      <Subtitle
        content='choose the type of homework'
        style={{letterSpacing: 0.7, margin: 0}} />
      <Description
        content={`Choose to create an assignment by picking exercises yourself from books, and then correct each student's copy, or choose to generate a session of autocorrected exercises.`}
        style={{margin: 0}} />
    </div>
  </div>

const Step2 = () =>
  <div className='Step'>
    <style jsx>{`
      .Step {
        position: relative;
        margin-top: 60px;
      }
      .Mockup {
        display: inline-block;
        width: 592px;
      }
      .Infos {
        display: inline-block;
        width: 350px;
        text-align: left;
        vertical-align: top;
        margin-right: 70px;
        position: relative;
        top: 70px;
      }
      .Title {
        margin: 0;
      }
      @media screen and (max-width: 750px) {
        .Title {
          font-size: 66px!important;
          line-height: 78px!important;
        }
        .Step {
          width: 310px;
          margin: auto;
          height: 350px;
          margin-top: 60px;
        }
        .Infos, .Mockup {
          width: 100%;
          display: block;
          margin: auto;
          text-align: center;
        }
        .Infos {
          position: absolute;
          top: 0px;
        }
        .Mockup {
          position: absolute;
          top: 200px;
        }
      }
    `}</style>
    <div className='Infos'>
      <div className='Global_title_primary Title'>02</div>
      <Subtitle
        content='set the homework'
        style={{letterSpacing: 0.7, margin: 0}} />
      <Description
        content={`Choose the subject, the chapter, and the students to whom you intend this duty`}
        style={{margin: 0}} />
    </div>
    <img className='Mockup' alt='mockup' src='/static/projects/classe/4-user-experience/homework2.gif' />
  </div>

const Step3 = () =>
  <div className='Step'>
    <style jsx>{`
      .Step {
        position: relative;
        margin-top: 60px;
      }
      .Mockup {
        display: inline-block;
        width: 592px;
        margin-right: 70px;
      }
      .Infos {
        display: inline-block;
        width: 350px;
        text-align: left;
        vertical-align: top;
        position: relative;
        top: 40px;
      }
      .Title {
        margin: 0;
      }
      @media screen and (max-width: 750px) {
        .Title {
          font-size: 66px!important;
          line-height: 78px!important;
        }
        .Step {
          width: 310px;
          margin: auto;
          height: 390px;
          margin-top: 60px;
        }
        .Infos, .Mockup {
          width: 100%;
          display: block;
          margin: auto;
          text-align: center;
        }
        .Infos {
          position: absolute;
          top: 0px;
        }
        .Mockup {
          position: absolute;
          top: 180px;
        }
      }
    `}</style>
    <img className='Mockup' alt='mockup' src='/static/projects/classe/4-user-experience/homework3.gif' />
    <div className='Infos'>
      <div className='Global_title_primary Title'>03</div>
      <Subtitle
        content='EDIT the homework'
        style={{letterSpacing: 0.7, margin: 0}} />
      <Description
        content={`Give a name and instruction to the assignment, and choose exercises among those proposed.`}
        style={{margin: 0}} />
    </div>
  </div>

export default UserExperience
