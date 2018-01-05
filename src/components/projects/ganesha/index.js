import React from 'react'

import Summary from '../common/summary'
import Footer from '../common/footer'
import Pictures from './pictures'
import data from '../../../../data'

const Ganesha = ({ project }) =>
  <div className='Project Ganesha'>
    <Summary project={data.projects[4]} />
    <Pictures />
    <Footer project={data.projects[2]}/>
  </div>

export default Ganesha
