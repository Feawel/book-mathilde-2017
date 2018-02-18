import React from 'react'

import Summary from '../common/summary'
import Footer from '../common/footer'
import Lines from '../common/lines'
import Pictures from './pictures'
import Menu from '../common/menu'

const Ganesha = ({ project }) =>
  <div id='project' className='Global_project'>
    <Lines />
    <Summary project={project} />
        <Menu sections={[]} section={null} project={project} color={project.colors.primary} borderImage={'white'} />
    <Pictures />
    <Footer project={project}/>
  </div>

export default Ganesha
