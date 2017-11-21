import React from 'react'

import {BoysAds, GirlsAds, YoungsAds} from './ads'
import Summary from './summary'
import data from '../../../../data'

const Ornikar = ({ project }) =>
  <div className='Project Ornikar'>
    <style jsx>{`
      .Ornikar {

      }

    `}</style>
    <Summary project={data.projects[2]} />
    <BoysAds />
    <GirlsAds />
    <YoungsAds />
  </div>

export default Ornikar
