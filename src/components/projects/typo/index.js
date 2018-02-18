import React from 'react'

import Summary from '../common/summary'
import Lines from '../common/lines'
import Footer from '../common/footer'
import Pictures from './pictures'

const Typo = ({ project }) =>
  <div id='project' className='Global_project'>
    <Lines />
    <Summary project={project} />
    <Pictures />
    <Footer project={project}/>
  </div>

export default Typo
