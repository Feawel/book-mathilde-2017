// src/componentqs/projects/comete/userInterface.js
import React from 'react'
import ReactDOM from 'react-dom'
import Number from '../common/number'
import DoubleIllustrations from '../common/doubleIllustrations'
import SectionInfos from '../common/sectionInfos'
import { TitleSecondary, Subtitle, Description } from '../common/texts'

class Illustration extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const {setSectionMetadata} = this.props
    setSectionMetadata({
      title: 'Illustration',
      icon: '/static/projects/classe/2-menu/picto-illu-grey.svg',
      activeIcon: '/static/projects/classe/2-menu/picto-illu.png',
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

        <Number content='03' color='#1a2432' borderBackground='linear-gradient(to left, #f04372 0%, #ffd69c 100%)' />
        <DoubleIllustrations
          main={{width: 460, src: '/static/projects/classe/5-illustration/picto-illu.png'}}
          second={{width: 764, src: '/static/projects/classe/5-illustration/picto-illu.png'}}
          location={{bottom: 150, right: 120}}
          mobileLocation={{top: -675, right: -315, zoom: 0.6}} />
        <SectionInfos
          marginTop={90}
          title={{content: 'Illustrations', color: '#1a2432'}}
          baseline={{content: 'brighten up the interface', color: '#a8adb9'}}
          description={{color: '#474f6f', content: 'I have produced two types of illustrations for the interface: drawings to populate even empty interfaces, and illustrations that serve to identify the classes.'}}
          />
      </div>
    )
  }
}


export default Illustration
