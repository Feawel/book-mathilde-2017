// src/componentqs/projects/comete/illustration.js
import React from 'react'
import ReactDOM from 'react-dom'
import Number from '../common/number'
import DoubleIllustrations from '../common/doubleIllustrations'
import SectionInfos from '../common/sectionInfos'

class Illustrations extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const {setSectionMetadata} = this.props
    setSectionMetadata({
      title: 'Illustration',
      icon: '/static/projects/menu/grey-illu.svg',
      activeIcon: '/static/projects/menu/comete-illu.png',
      element: ReactDOM.findDOMNode(this)
    })
  }

  render() {
    return (
      <div className='Illustrations'>
       <style jsx>{`
          .Illustrations {
            width: 100%;
            margin: auto;
            overflow: hidden;
            position: relative;
          }
          .First_row_illustrations {
            display: inline-block;
            width: 50%;
          }
          .Second_row {
            position: relative;
            top: -4px;
          }
          .First_row.responsive, .Second_row.responsive {
            display: none;
          }
          @media screen and (max-width: 750px) {
            .First_row.responsive, .Second_row.responsive {
              display: block;
            }
            .First_row_illustrations {
              width: 100%;
            }
            .First_row.desktop, .Second_row.desktop {
              display: none;
            }
          }
        `}</style>
        <Number content='04' color='#221061' borderBackground='linear-gradient(to left, #5d1bb0 0%, #4dd0ff 100%)' />
        <DoubleIllustrations
          main={{width: 462, src: '/static/projects/comete/6-illustrations/picto-illu.png'}}
          second={{width: 851, src: '/static/projects/comete/6-illustrations/picto-illu.png'}}
          location={{bottom: 200, right: 100}} />
        <SectionInfos
          title={{content: 'Illustrations', color: '#221061'}}
          baseline={{content: 'pedagogical illustrations', color: '#abb0bc'}}
          description={{color: '#474f6f', content: 'In addition to the site, the communication and the interractive games, I made for the exhibition illustrations with pedagogical purpose in addition to the photographs presented.'}}
          />
        <div className='First_row desktop'>
          <img className='First_row_illustrations' src='/static/projects/comete/6-illustrations/illu1-2.png' />
          <img className='First_row_illustrations' src='/static/projects/comete/6-illustrations/ilu1-zoom2.png' />
        </div>
        <div className='Second_row desktop'>
          <img width='100%' src='/static/projects/comete/6-illustrations/illu2.png' />
        </div>
        <div className='First_row responsive'>
          <img className='First_row_illustrations' src='/static/projects/comete/responsive/6-illustrations/ilu1-zoom2.png' />
        </div>
        <div className='Second_row responsive'>
          <img width='100%' src='/static/projects/comete/responsive/6-illustrations/illu2.png' />
        </div>
      </div>
    )
  }
}


export default Illustrations
