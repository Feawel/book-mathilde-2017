// src/componentqs/projects/common/texts.js
import React from 'react'


export const TitlePrimary = ({content, style, mobile}) =>
  <h2 className='Global_title_primary' style={{...style}}>
    {content}
  </h2>

export const TitleSecondary = ({content, style, mobile, summary = false}) =>
  <h3 className={`Global_title_secondary ${summary ? 'Global_summary_title_secondary' : ''}`} style={{...style}} dangerouslySetInnerHTML={{__html: String(content)}} />

export const SubtitlePart = ({content, style, mobile}) =>
  <h4 className='Global_subtitle_part' style={{...style}}>
    {content}
  </h4>

export const Subtitle = ({content, style, mobile}) =>
  <h4 className='Global_subtitle' style={{...style}}>
    {content}
  </h4>

export const Description = ({content, style, mobile}) =>
  <div className='Global_description' style={{...style}} dangerouslySetInnerHTML={{__html: String(content)}} />

