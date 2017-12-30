// src/componentqs/projects/comete/userInterface.js
import React from 'react'
import ReactDOM from 'react-dom'
import Number from '../common/number'
import DoubleIllustrations from '../common/doubleIllustrations'
import SectionInfos from '../common/sectionInfos'
import { TitleSecondary, Subtitle, Description } from '../common/texts'

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
      </div>
    )
  }
}


export default UserExperience
