import React from 'react'

import {BoysAds, GirlsAds, YoungsAds} from './ads'
import Summary from '../common/summary'
import Footer from '../common/footer'
import Lines from '../common/lines'
import data from '../../../../data'

const Ornikar = ({ project, isMobile }) =>
  <div id='project' className='Global_project'>
    <Lines />
    <Summary project={data.projects[2]} />
    <div>
      <BoysAds isMobile={isMobile} />
      <GirlsAds isMobile={isMobile} />
      <YoungsAds isMobile={isMobile} />
    </div>
    <Footer project={data.projects[2]}/>
  </div>

export default Ornikar
