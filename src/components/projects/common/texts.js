// src/componentqs/projects/common/texts.js
import React from 'react'


export const TitlePrimary = ({content, style, mobile}) =>
  <h2 className='Global_title_primary' style={{...style}}>
    {content}
  </h2>

export const TitleSecondary = ({content, style, mobile}) =>
  <h3 className='Global_title_secondary Mobile' style={{...style}}>
    {mobile && <style jsx>{`@media screen and (max-width: 750px) { .Mobile { ${mobile} }}`}</style>}
    {content}
  </h3>

export const SubtitlePart = ({content, style, mobile}) =>
  <h3 className='Global_subtitle_part Mobile' style={{...style}}>
    {mobile && <style jsx>{`@media screen and (max-width: 750px) { .Mobile { ${mobile} }}`}</style>}
    {content}
  </h3>

export const Subtitle = ({content, style, mobile}) =>
  <h3 className='Global_subtitle Mobile' style={{...style}}>
    {mobile && <style jsx>{`@media screen and (max-width: 750px) { .Mobile { ${mobile} }}`}</style>}
    {content}
  </h3>

export const Description = ({content, style, mobile}) =>
  <h3 className='Global_description Mobile' style={{...style}} dangerouslySetInnerHTML={{__html: content}}>
    {mobile && <style jsx>{`@media screen and (max-width: 750px) { .Mobile { ${mobile} }}`}</style>}
  </h3>

