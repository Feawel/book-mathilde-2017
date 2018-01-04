// src/componentqs/projects/common/texts.js
import React from 'react'


export const TitlePrimary = ({content, style, mobile}) =>
  <h2 className='Global_title_primary' style={{...style}}>
    {content}
  </h2>

export const TitleSecondary = ({content, style, mobile}) =>
  <h3 className='Global_title_secondary' style={{...style}}>
    {content}
  </h3>

export const SubtitlePart = ({content, style, mobile}) =>
  <h3 className='Global_subtitle_part' style={{...style}}>
    {content}
  </h3>

export const Subtitle = ({content, style, mobile}) =>
  <h3 className='Global_subtitle' style={{...style}}>
    {content}
  </h3>

export const Description = ({content, style, mobile}) =>
  <h3 className='Global_description' style={{...style}} dangerouslySetInnerHTML={{__html: content}} />

