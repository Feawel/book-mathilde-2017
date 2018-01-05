import React from 'react'

import Summary from '../common/summary'
import Footer from '../common/footer'
import Pictures from './pictures'
import data from '../../../../data'

const Typo = ({ project }) =>
  <div className='Project Typo'>
    <Summary project={data.projects[5]} />
    <Pictures />
    <Footer project={data.projects[5]}/>
  </div>

export default Typo
