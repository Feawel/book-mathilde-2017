import React from 'react'

// Components
import Social from './social'
import ScrollDown from './scrollDown'
import Infos from './infos'
import Wrapper from './wrapper'
import Background from './background'

import Lines from '../columns'

// Static data
import data from '../../../data'

const getBackgroundStyle = (size, isMobile) => {
  switch(size) {
    case 'large':
      return {height: '100%', width:'100%', position: 'relative', top: 0, left: 0, transition: 'all .5s'}
    case 'medium':
      return {height: isMobile ? '35%' : '70%', width:'100%', position: 'relative', left: 0, top: 0, transition: 'all 1s'}
    case 'small':
      return {height: isMobile ? '35%' : '70%', width:'80%', position: 'relative', left: '10%', top: 100, transition: 'all .5s'}
  }
}

const HomeProjects = (props) => {
  const { projectAppear, backgroundSize, openProject, animating, project,
    bar1, bar2, bar3, bar4, bar5, bars, infosAnimation, backgroundDirectory,
    mask, openProjectAnimation, isMobile } = props
    console.log('backgroundDirectory', backgroundDirectory, isMobile)
  if(!backgroundDirectory) return <div />

  return (
    <Wrapper >
      <style jsx>{`
        .Background_wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .Background {
          width: 100%;
          height: 100%;
          background-size: cover;

        }
        .Bars {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
        .Bar {
          width: 20%;
          background-color: #001732;
          height: 0;
          -webkit-transition      : all 1s  ;
          -moz-transition       : all 1s  ;
          -ms-transition        : all 1s  ;
          -o-transition         : all 1s  ;
          transition          : all 1s  ;
          position: absolute;
          bottom: 0;
        }

        .Bar_1 { left: 0; }
        .Bar_2 { left: 20%; }
        .Bar_3 { left: 40%; }
        .Bar_4 { left: 60%; }
        .Bar_5 { left: 80%; }

        .Bar.active { height: 100%; }
      `}</style>
      <Lines  />
      {!(projectAppear || openProjectAnimation) && <ScrollDown move={animating} onClick={() => this.updateWithDebounce()} />}
      {!(projectAppear || openProjectAnimation) && <Social />}
      <div className='Background_wrapper'>
        <div className='Background transitions'
          style={{backgroundImage: `url('/static/home-projects/background/${backgroundDirectory}/${project.key}.jpg')`, ...getBackgroundStyle(backgroundSize, isMobile)}} />
      </div>
      <div style={{zIndex: bars ? 9 : 0}} className='Bars'>
        <div className={`Bar Bar_1 ${bar1 ? 'active' : ''}`} />
        <div className={`Bar Bar_2 ${bar2 ? 'active' : ''}`} />
        <div className={`Bar Bar_3 ${bar3 ? 'active' : ''}`} />
        <div className={`Bar Bar_4 ${bar4 ? 'active' : ''}`} />
        <div className={`Bar Bar_5 ${bar5 ? 'active' : ''}`} />
      </div>
      {!(projectAppear || openProjectAnimation) && <Infos infosAnimation={infosAnimation} mask={mask} openProject={() => openProject()} {...project}/>}
    </Wrapper>
  )
}

export default HomeProjects
