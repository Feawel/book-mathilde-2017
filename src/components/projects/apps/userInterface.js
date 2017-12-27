// src/componentqs/projects/comete/userInterface.js
import React from 'react'
import ReactDOM from 'react-dom'
import Number from '../common/number'
import DoubleIllustrations from '../common/doubleIllustrations'
import SectionInfos from '../common/sectionInfos'
import { TitleSecondary, Subtitle } from '../common/texts'

class UserInterface extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const {setSectionMetadata} = this.props
    setSectionMetadata({
      title: 'User experience',
      icon: '/static/projects/apps/2-menu/picto-UI-grey.svg',
      activeIcon: '/static/projects/apps/2-menu/picto-UI.svg',
      element: ReactDOM.findDOMNode(this)
    })
  }

  render() {
    return (
      <div className='User_interface'>
       <style jsx>{`
          .User_experience {
            width: 100%;
            margin: auto;
            overflow: hidden;
            position: relative;
            z-index: 0;
            position: relative;
          }
        `}</style>

        <Number content='02' color='white' borderBackground='linear-gradient(to left, #5d1bb0 0%, #4dd0ff 100%)' />
        <DoubleIllustrations
          main={{width: 353, src: '/static/projects/apps/4-user-interface/picto-UI.png'}}
          second={{width: 760, src: '/static/projects/apps/4-user-interface/picto-UI.png'}}
          location={{bottom: 150, right: 160}}
          mobileLocation={{top: -675, right: -315, zoom: 0.6}} />
        <SectionInfos
          title={{content: 'User Interface', color: '#004459'}}
          baseline={{content: 'Create an interface able to please to children', color: '#abb0bc'}}
          description={{color: '#474f6f', content: 'The user interface has been designed to appeal to college students. So I decided to use a lot of colors is to leave an important place to the picture. However, the interface must also remain clear and uncluttered. I have created an ui kit so that the whole 8 book can be implemented in the app.'}}
          />
      </div>
    )
  }
}

const Typeface = () =>
  <div className='Typeface'>
   <style jsx>{`
      .Typeface {

      }
    `}</style>
  </div>

const Color = () =>
  <div className='Color'>
   <style jsx>{`
      .Color {

      }
    `}</style>
  </div>

const Picto = () =>
  <div className='Architecture'>
   <style jsx>{`
      .Architecture {

      }
    `}</style>
  </div>

const Illustration = () =>
  <div className='Illustration'>
   <style jsx>{`
      .Illustration {

      }
    `}</style>
  </div>

const Types = () =>
  <div className='Types'>
   <style jsx>{`
      .Types {

      }
    `}</style>
  </div>

const Tools = () =>
  <div className='Tools'>
   <style jsx>{`
      .Tools {

      }
    `}</style>
  </div>

const More = () =>
  <div className='More'>
   <style jsx>{`
      .More {

      }
    `}</style>
  </div>

export default UserInterface
