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
      icon: '/static/projects/classe/2-menu/picto-UX-grey.svg',
      activeIcon: '/static/projects/classe/2-menu/picto-UX.png',
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

        <Number content='02' color='#1a2432' borderBackground='linear-gradient(to left, #f04372 0%, #ffd69c 100%)' />
        <DoubleIllustrations
          main={{width: 460, src: '/static/projects/classe/4-user-experience/picto-UX.png'}}
          second={{width: 764, src: '/static/projects/classe/4-user-experience/picto-UX.png'}}
          location={{bottom: 150, right: 120}}
          mobileLocation={{top: -675, right: -315, zoom: 0.6}} />
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
      .Background {

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
        width: 1165px;
        margin: 0 0 120px 100px;
        position: relative;
        top: 80px;
      }
      .Left {
        display: inline-block;
        width: 330px;
        margin-right: 30px;
      }
      .Right {
        display: inline-block;
        width: 800px;
        text-align: right;
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
    `}</style>
    <img src='/static/projects/classe/4-user-experience/fond-3.svg' className='Blue_background' />
    <div className='Content'>
      <div className='Left'>
        <TitleSecondary content='homepage' style={{margin: '0 auto'}} />
        <Description
          content='Here is the interface that welcomes the user at first.  It has access to all classes already created, and can create new ones. It can also modify or delete a class already created.'
          style={{marginBottom: 50, maxWidth: '320px'}} />
        <img className='Anim'alt='animation class card' src='/static/projects/classe/4-user-experience/anim-carte.gif' />
      </div>
      <div className='Right'>
        <img width='794' alt='animation class card' src='/static/projects/classe/4-user-experience/mockup-home.png' />
      </div>
    </div>
    <div className='Classes'>
      <div className='Header'>
        <TitleSecondary content='on a classes' style={{margin: '0 auto'}} />
        <SubtitlePart
          content='Manage your students, your homework and communicate with the class.'
          style={{lineHeight: '24px'}} />
      </div>
      <img className='Anim_ipad' alt='animation class ipad' src='/static/projects/classe/4-user-experience/anim-classes.gif' />
    </div>
  </div>

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
        left: 70px;
        width: 1174px;
        z-index: -1;
      }
    `}</style>
    <img src='/static/projects/classe/4-user-experience/fond-4.svg' className='Blue_background' />
    <div className='Header'>
      <TitleSecondary content='statistics' style={{margin: '0 auto', marginTop: 120}} />
      <SubtitlePart
        content={`Follow your students' progress.`} />
    </div>
    <img className='Stats_background' alt='statistics mockup' src='/static/projects/classe/4-user-experience/stat-fond.png' />
    <img className='Mockup' alt='statistics mockup' src='/static/projects/classe/4-user-experience/ecran-stat.jpg' />
    <img className='Anim_stats' alt='statistics animation' src='/static/projects/classe/4-user-experience/anim-stat.gif' />

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
        width: 1050px;
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
        width: 610px;
        margin-right: 80px;
      }
      .Infos {
        display: inline-block;
        width: 350px;
        text-align: left;
        vertical-align: top;
        position: relative;
        top: 90px;
      }
    `}</style>
    <img className='Mockup' alt='mockup' src='/static/projects/classe/4-user-experience/homework1.gif' />
    <div className='Infos'>
      <TitlePrimary
        content='01'
        style={{margin: 0}} />
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
        width: 610px;
      }
      .Infos {
        display: inline-block;
        width: 350px;
        text-align: left;
        vertical-align: top;
        margin-right: 80px;
        position: relative;
        top: 70px;
      }
    `}</style>
    <div className='Infos'>
      <TitlePrimary
        content='02'
        style={{margin: 0}} />
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
        width: 610px;
        margin-right: 80px;
      }
      .Infos {
        display: inline-block;
        width: 350px;
        text-align: left;
        vertical-align: top;
        position: relative;
        top: 40px;
      }
    `}</style>
    <img className='Mockup' alt='mockup' src='/static/projects/classe/4-user-experience/homework1.gif' />
    <div className='Infos'>
      <TitlePrimary
        content='03'
        style={{margin: 0}} />
      <Subtitle
        content='EDIT the homework'
        style={{letterSpacing: 0.7, margin: 0}} />
      <Description
        content={`Give a name and instruction to the assignment, and choose exercises among those proposed.`}
        style={{margin: 0}} />
    </div>
  </div>

export default UserExperience
