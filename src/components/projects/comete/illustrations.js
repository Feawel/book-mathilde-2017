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
      icon: '/static/projects/comete/2-menu/picto-illu-grey.svg',
      activeIcon: '/static/projects/comete/2-menu/picto-illu.svg',
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
          @media screen and (max-width: 750px) {
            .First_row_illustrations {
              width: 100%;
            }
            .Poster {
              display: none;
            }
            .Second_row {
              top: 0;
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
        <div className='First_row'>
          <img className='First_row_illustrations Poster' src='/static/projects/comete/6-illustrations/illu1-2.png' />
          <img className='First_row_illustrations' src='/static/projects/comete/6-illustrations/ilu1-zoom2.png' />
        </div>
        <div className='Second_row'>
          <img width='100%' src='/static/projects/comete/6-illustrations/illu2.png' />
        </div>
      </div>
    )
  }
}


export default Illustrations
