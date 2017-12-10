import React from 'react'
import Social from './social'
import Call from './call'

const Summary = ({ project }) =>
  <div className='Project Summary'>
    <style jsx>{`
      .Summary {
        margin-bottom: 50px;
      }
      .Header {
        width: 100%;
        height: 500px;
      }
      .Illustration {
        position: relative;
        top: 23px;
      }
      .Summary_section {
        display: inline-block;
        width: 50%;
        margin-top: 10px;
        vertical-align: top;
      }
      .Inner_left_section {
        margin: auto;
        width: calc(100% - 200px);
      }
      .Inner_right_section {
        margin: auto;
        width: calc(100% - 100px);
      }
      .Title {
        font-family: 'Playfair Display';
        font-weight: 900;
        font-size: 74px;
        color: #260608;
        margin-bottom: 20px;
        max-width: 420px;
      }
      .Problematic {
        font-family: Futura;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        max-width: 345px;

      }
      .Description_title {
        margin-top: 50px;
        font-family: Futura;
        font-weight: bold;
        font-size: 10px;
        line-height: 27px;
        color: #abb0bc;
      }
      .Description {
        font-family: Futura;
        color: #474f6f;
        font-size: 16px;
        line-height: 28px;
      }
      .Social_container {
        margin-bottom: 40px;
      }
    `}</style>
    <div className='Header'>
      <img
        style={{backgroundImage: project.gradient.base}}
        className='Illustration'
        width='100%'
        height='500'
        src={project.picture.src}
        alt='project header' />
    </div>
    <div className='Summary_section'>
      <div className='Inner_left_section'>
        <h1 className='Title'>{project.title}</h1>
        <h2 style={{color: project.color}} className='Problematic'>{project.problematic}</h2>
        <div className='Social_container'>
          <Social />
        </div>
        {project.website && <Call text='VIEW THE WEBSITE' />}
      </div>
    </div>
    <div className='Summary_section'>
      <div className='Inner_right_section'>
        <div className='Description_title'>THE PROJECT</div>
        <div className='Description' dangerouslySetInnerHTML={{__html: project.description}} />
        <div className='Meta'>
          <Meta label='CUSTOMER' value={project.customer} />
          <Meta label='ROLE' value={project.role} />
          <Meta label='YEAR' value={project.year} />
        </div>
        <div className='Stats'>
          {project.stats.map((stat, i) => <Stat key={i} color={project.color} label={stat.label} value={stat.value} />)}
        </div>
      </div>
    </div>
  </div>


const Meta = ({label, value}) =>
  <div className='Meta'>
    <style jsx>{`
      .Meta {
        display: inline-block;
        margin-top: 40px;
        width: 33%;
        vertical-align: top;
      }
      .Label {
        font-family: Futura;
        font-weight: bold;
        font-size: 10px;
        line-height: 27px;
        color: #abb0bc;
      }
      .Value {
        font-family: 'Playfair Display';
        font-size: 12px;
        font-style: italic;
        line-height: 24px;
        color: #474f6f;
      }
    `}</style>
    <div className='Label'>{label}</div>
    <div className='Value' dangerouslySetInnerHTML={{__html: value}} />
  </div>

const Stat = ({ label, value, color }) =>
  <div className='Stat'>
    <style jsx>{`
      .Stat {
        display: inline-block;
        margin-top: 40px;
        width: 40%;
        vertical-align: top;
      }
      .Label {
        font-family: Futura;
        font-weight: bold;
        font-size: 10px;
        line-height: 14px;
        color: #abb0bc;
      }
      .Value {
        font-family: 'Playfair Display';
        font-weight: bold;
        font-size: 72px;
        line-height: 24px;
        height: 54px;
        margin-top: 35px;
      }
    `}</style>
    <div className='Label' dangerouslySetInnerHTML={{__html: label}} />
    <div style={{color}} className='Value'>{value}</div>
  </div>

export default Summary
