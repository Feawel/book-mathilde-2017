import React from 'react'

import {BoysAds, GirlsAds, YoungsAds} from './ads'
import Summary from '../common/summary'
import Footer from '../common/footer'
import Lines from '../common/lines'
import Menu from '../common/menu'

const Ornikar = ({ project, isMobile }) =>
  <div id='project' className='Global_project'>
    <Lines />
    <Summary project={project} />
    <Menu sections={[]} section={null} project={project} color={project.colors.primary} borderImage={'white'} />
    <div>
      <BoysAds isMobile={isMobile} />
      <GirlsAds isMobile={isMobile} />
      <YoungsAds isMobile={isMobile} />
    </div>
    <Footer project={project}/>
  </div>

export default Ornikar
