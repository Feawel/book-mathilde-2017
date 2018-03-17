import React from 'react'
import {skills} from '../../../data'
import SkillLine from './skillLine'

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
          @media screen and (max-width: 750px) {
            .About_skills {
              display: none;
            }
          }
          .Skill_container {
            position:absolute;
          }
          .Skill_container_Photoshop {
            top: 68px;
            left: 813px;
          }
          .Skill_container_Illustrator {
            top: 118px;
            left: 876px;
          }
          .Skill_container_Sketch {
            top: 180px;
            left: 921px;
          }
          .Skill_container_Aftereffect {
            top: 249px;
            left: 943px;
          }
          .Skill_container_Drawing {
            top: 320px;
            left: 944px;
          }
          .Skill {
            width: 38px;
            height: 38px;
            border-radius: 50%;
            color: #001732;
            opacity: 0.1;
            background-image: linear-gradient(to left, #fff 0%, #fff 100%);
            -webkit-transition      : all  .5s  ;
            -moz-transition       : all .5s  ;
            -ms-transition        : all .5s  ;
            -o-transition         : all .5s  ;
            transition          : all .5s  ;
          }
          .Skill_content {
            position: absolute;
            top: 10px;
            width: 200px;
            overflow: hidden;
          }
          .Skill_content_Photoshop {
            left: 230px;
            color: #02d0ff;
          }
          .Skill_content_Illustrator {
            left: 180px;
            color: #fbaf1c;
          }
          .Skill_content_Sketch {
            left: 120px;
            color: #7e2cf3;
          }
          .Skill_content_Aftereffect {
            left: 70px;
            color: #fbfc1c;
          }
          .Skill_content_Drawing {
            left: 80px;
            color: #2fbdae;
          }
          .Skill_content_title {
            font-size: 16px;
            line-height: 22px;
          }
          .Skill_content_level {
            font-size: 10px;
            text-transform: uppercase;
            color: #ffffff;
            line-height: 23px;
            letter-spacing: 1.5px;
            opacity: 0.6;
          }
          .Skill_content_description {
            font-size: 11px;
            color: #ffffff;
            line-height: 16px;
            opacity: 0.6;
          }
          .Inner_skill {
            position: relative;
            top: 10px;
            font-size: 20px;
            left: 11px;
          }
          .Photoshop:hover, .Photoshop.active {
            background-image: linear-gradient(to left, #424fc0 0%, #02d0ff 100%);
            opacity: 1;
          }
          .Illustrator:hover, .Illustrator.active {
            background-image: linear-gradient(-85deg, #f02472 0%, #fbaf1c 100%);
            opacity: 1;
          }
          .Sketch:hover, .Sketch.active {
            background-image: linear-gradient(to right, #ffbde2 0%, #7e2cf3 100%);
            opacity: 1;
          }
          .Aftereffect:hover, .Aftereffect.active {
            background-image: linear-gradient(-85deg, #fbaf1c 0%, #fbfc1c 100%);
            opacity: 1;
          }
          .Drawing:hover, .Drawing.active {
            background-image: linear-gradient(to right, #deff3e 0%, #2fbdae 100%);
            opacity: 1;
          }
          .noHeight {
            height: 0;
          }
          .withHeight {
            height: 150px;
            -webkit-transition      : all  1s  ;
            -moz-transition       : all 1s  ;
            -ms-transition        : all 1s  ;
            -o-transition         : all 1s  ;
            transition          : all 1s  ;
          }
          @media screen and (min-width: 750px) and (max-width: 1000px) {
            .Skill_content_Photoshop, .Skill_content_Illustrator, .Skill_content_Sketch,
            .Skill_content_Aftereffect, .Skill_content_Drawing {
              top: 0;
              left: 60px;
            }
            .Skill_content_description {
              display: none;
            }
          }
        `}</style>
        <img style={{position: 'absolute'}} alt='avatar mathilde serra' src='/static/about/illustration.png' width='575px' />
        {
          skills.map((skill, index) =>
            <div key={index} className={`Skill_container Skill_container_${skill.className}`}>
              <div key={`icon-${index}`} onMouseEnter={() => this.changeCurrent(index)} className={`Skill futuralt_book clickable ${skill.className} ${current===index ? 'active' : ''}`}>
                <img width={skill.className === 'Sketch' ? '18px' : '16px'} className='Inner_skill' src={skill.icon} />
              </div>
              <SkillLine key={`line-${index}`} lineLength={skill.lineLength} isCurrent={current===index} />
              <div key={`content-${index}`} className={`Skill_content Skill_content_${skill.className} ${current===index ? 'withHeight' : 'noHeight'}`}>
                <div className='Skill_content_title playfairdisplay_black'>{skill.title}</div>
                <div className='Skill_content_level futuralt_bold'>{skill.level}</div>
                <div className='Skill_content_description futuralt_book'>{skill.description}</div>
              </div>
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
