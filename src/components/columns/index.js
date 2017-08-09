import React from 'react'
import Line from './line'
import data from '../../../data'

const Columns = ({ width, opacity }) =>
  <div>
    <Line left='0%' width={width} opacity={opacity} />
    <Line left='20%' width={width} opacity={opacity} />
    <Line left='40%' width={width} opacity={opacity} />
    <Line left='60%' width={width} opacity={opacity} />
    <Line left='80%' width={width} opacity={opacity} />
  </div>

export default Columns