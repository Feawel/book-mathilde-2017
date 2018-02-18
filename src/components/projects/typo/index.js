import React from 'react'

import Summary from '../common/summary'
import Lines from '../common/lines'
import Footer from '../common/footer'
import Pictures from './pictures'
import Menu from '../common/menu'

const Typo = ({ project }) =>
  <div id='project' className='Global_project'>
    <Lines />
    <Summary project={project} />
    <Menu sections={[]} section={null} project={project} color={project.colors.primary} borderImage={'white'} />
    <Pictures />
    <Footer project={project}/>
  </div>

export default Typo
