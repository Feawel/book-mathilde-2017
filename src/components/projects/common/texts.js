// src/componentqs/projects/common/texts.js
import React from 'react'


export const TitlePrimary = ({content, style}) =>
  <h2 className='Global_title_primary' style={{...style}}>
    {content}
  </h2>

export const TitleSecondary = ({content, style}) =>
  <h3 className='Global_title_secondary' style={{...style}}>
    <style jsx>{`
    `}</style>
    {content}
  </h3>

export const Subtitle = ({content, style}) =>
  <h3 className='Global_subtitle' style={{...style}}>
    <style jsx>{`
    `}</style>
    {content}
  </h3>

export const Description = ({content, style}) =>
  <h3 className='Global_description' style={{...style}} dangerouslySetInnerHTML={{__html: content}} />
