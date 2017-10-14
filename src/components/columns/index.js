import React from 'react'
import Line from './line'
import data from '../../../data'

const Columns = ({ width, opacity }) =>
  <div style={{height:0}}>
    <DesktopLines width={width} opacity={opacity} />
    <TabletLines width={typeof width === 'string' ? width.split('%')[0]*1.25+'%' : width} opacity={opacity} />
    <SmartphoneLines width={typeof width === 'string' ? width.split('%')[0]*1.67+'%' : width} opacity={opacity} />
  </div>

const DesktopLines = ({ width = 1, opacity = 0.5 }) =>
  <div className='Desktop_lines'>
    <style jsx>{`
      .Desktop_lines {
        display:none;
      }
      @media screen and (min-width: 1024px) {
        .Desktop_lines {
          display: inline-block;
        }
      }
    `}</style>
    <Line left='0%' width={width} opacity={opacity} />
    <Line left='20%' width={width} opacity={opacity} />
    <Line left='40%' width={width} opacity={opacity} />
    <Line left='60%' width={width} opacity={opacity} />
    <Line left='80%' width={width} opacity={opacity} />
  </div>

const TabletLines = ({ width = 1, opacity = 0.5 }) =>
  <div className='Tablet_lines'>
    <style jsx>{`
      .Tablet_lines {
        display: none;
      }
      @media screen and (min-width: 640px) and (max-width: 1024px) {
        .Tablet_lines {
          display: inline-block;
        }
      }
    `}</style>
    <Line left='0%' width={width} opacity={opacity} />
    <Line left='25%' width={width} opacity={opacity} />
    <Line left='50%' width={width} opacity={opacity} />
    <Line left='75%' width={width} opacity={opacity} />
  </div>

const SmartphoneLines = ({ width = 1, opacity = 0.5 }) =>
  <div className='Smartphone_lines'>
    <style jsx>{`
      .Smartphone_lines {
        display: none;
      }
      @media screen and (max-width: 640px) {
        .Smartphone_lines {
          display: inline-block;
        }
      }
    `}</style>
    <Line left='0%' width={width} opacity={opacity} />
    <Line left='33.3%' width={width} opacity={opacity} />
    <Line left='66.6%' width={width} opacity={opacity} />
  </div>

export default Columns
