import React from 'react'

import Summary from '../common/summary'
import Lines from '../common/lines'
import Footer from '../common/footer'
import Pictures from './pictures'
import data from '../../../../data'

const Typo = ({ project }) =>
  <div id='project' className='Global_project'>
    <Lines />
    <Summary project={data.projects[5]} />
    <Pictures />
    <Footer project={data.projects[5]}/>
  </div>

export default Typo
