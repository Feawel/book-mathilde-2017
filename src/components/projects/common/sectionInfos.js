// src/componentqs/projects/common/number.js
import React from 'react'
import {TitlePrimary, Subtitle, Description} from './texts'

const SectionInfos = ({title, baseline, description, maxWidth = 460}) =>
  <div className='Infos'>
    <style jsx>{`
      .Infos {
        display: inline-block;
        width: calc(50% - 40px);
        vertical-align: top;
        margin-top: 180px;
        padding-left: 40px;
      }
    `}</style>
    <TitlePrimary content={title.content} style={{color: title.color, marginBottom: 20, marginTop: 0, maxWidth}} />
    <Subtitle content={baseline.content} style={{color: baseline.color, marginTop: 0, marginBottom: 15, maxWidth}} />
    <Description content={description.content} style={{color: description.color, marginTop: 0, maxWidth}} />
  </div>

export default SectionInfos
