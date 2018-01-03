import React from 'react'

import {BoysAds, GirlsAds, YoungsAds} from './ads'
import Summary from '../common/summary'
import Footer from '../common/footer'
import data from '../../../../data'

const Ornikar = ({ project }) =>
  <div className='Project Ornikar'>
    <Summary project={data.projects[2]} />
    <div style={{marginTop: 60}}>
      <BoysAds />
      <GirlsAds />
      <YoungsAds />
    </div>
    <Footer project={data.projects[2]}/>
  </div>

export default Ornikar
