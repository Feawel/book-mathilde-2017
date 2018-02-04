import React from 'react'

import Summary from '../common/summary'
import Footer from '../common/footer'
import Lines from '../common/lines'
import Pictures from './pictures'
import data from '../../../../data'

const Ganesha = ({ project }) =>
  <div id='project' className='Global_project'>
    <Lines />
    <Summary project={data.projects[4]} />
    <Pictures />
    <Footer project={data.projects[4]}/>
  </div>

export default Ganesha
