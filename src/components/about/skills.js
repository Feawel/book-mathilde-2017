import React from 'react'
import {skills} from '../../../data'

class Skills extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0
    }
  }

  render () {
    const { current } = this.state
    return (
      <div className='About_skills'>
        <style jsx>{`
          .About_skills {
            display: inline-block;
            vertical-align: top;
          }
          @media screen and (max-width: 750) {
            .About_skills {
              display: none;
            }
          }
          .Skill {
            width: 42px;
            height: 42px;
            border-radius: 50%;
            color: #001732;
            position: absolute;
            opacity: 0.1;
            background-image: linear-gradient(to left, #fff 0%, #fff 100%);
            font-family: Futura;
          }
          .Inner_skill {
            position: relative;
            top: 10px;
            left: 13px;
          }
          .Photoshop {
            top: 71px;
            left: 812px;
          }
          .Photoshop:hover, .Photoshop.active {
            background-image: linear-gradient(to left, #424fc0 0%, #02d0ff 100%);
            opacity: 1;
          }
          .Illustrator {
            top: 117px;
            left: 874px;
          }
          .Illustrator:hover, .Illustrator.active {
            background-image: linear-gradient(-85deg, #f02472 0%, #fbaf1c 100%);
            opacity: 1;
          }
          .Sketch {
            top: 180px;
            left: 921px;
          }
          .Sketch:hover, .Sketch.active {
            background-image: linear-gradient(to right, #ffbde2 0%, #7e2cf3 100%);
            opacity: 1;
          }
          .Aftereffect {
            top: 249px;
            left: 943px;
          }
          .Aftereffect:hover, .Aftereffect.active {
            background-image: linear-gradient(-85deg, #fbaf1c 0%, #fbfc1c 100%);
            opacity: 1;
          }
          .Drawing {
            top: 321px;
            left: 940px;
          }
          .Drawing:hover, .Drawing.active {
            background-image: linear-gradient(to right, #deff3e 0%, #2fbdae 100%);
            opacity: 1;
          }
        `}</style>
        <img alt='avatar mathilde serra' src='/static/about/illustration.png' width='575px' />
        {
          skills.map((skill, index) =>
            <div key={index} onClick={() => this.changeCurrent(index)} className={`Skill clickable active ${skill.className} ${current===index ? 'active' : ''}`}>
              <span className='Inner_skill'>{skill.icon}</span>
            </div>
          )
        }
      </div>
    )
  }

  changeCurrent (current) {
    this.setState({ current })
  }
}


export default Skills
