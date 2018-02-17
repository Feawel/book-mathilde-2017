import React from 'react'

import Summary from '../common/summary'
import Footer from '../common/footer'
import Lines from '../common/lines'
import Pictures from './pictures'
import data from '../../../../data'
import Menu from '../common/menu'

const Ganesha = ({ project }) =>
  <div id='project' className='Global_project'>
    <Lines />
    <Summary project={data.projects[4]} />
        <Menu sections={[]} section={null} project={data.projects[4]} color={data.projects[4].colors.primary} borderImage={'white'} />
    <Pictures />
    <Footer project={data.projects[4]}/>
  </div>

export default Ganesha
