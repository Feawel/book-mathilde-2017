// src/componentqs/projects/common/number.js
import React from 'react'
import {TitlePrimary, Subtitle, Description} from './texts'

const SectionInfos = ({title, baseline, description, maxWidth = 460, marginTop = 180, isMobile}) =>
  <div className='Infos'>
    <style jsx>{`
      .Infos {
        display: inline-block;
        width: calc(50% - 40px);
        vertical-align: top;
        margin-top: ${marginTop}px;
        padding: 0 40px;
      }
      @media screen and (max-width: 750px) {
        .Infos {
          width: calc(100% - 40px);
          text-align:center;
          margin-top: 25px;
          padding: 0 20px;
        }
      }
    `}</style>
    <TitlePrimary
      content={title.content}
      style={{
        color: title.color,
        marginBottom: isMobile ? 27 : 22,
        marginTop: 0,
        maxWidth: isMobile ? 250 : maxWidth,
        marginLeft: isMobile ? 'auto' : undefined,
        marginRight: isMobile ? 'auto' : undefined
      }} />
    <Subtitle
      content={baseline.content}
      style={{
        color: baseline.color,
        marginTop: 0,
        marginBottom: isMobile ? 20 : 15,
        fontSize: isMobile ? 12 : 14,
        letterSpacing: isMobile ? 1.2 : 0.7,
        maxWidth: isMobile ? 310 : maxWidth
      }} />
    <Description
      content={description.content}
      style={{
        color: description.color,
        marginTop: 0,
        maxWidth: isMobile ? 310 : maxWidth
      }} />
  </div>

export default SectionInfos
