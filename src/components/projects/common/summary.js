import React from 'react'
import Social from './social'
import Call from './call'
import { TitlePrimary, TitleSecondary, Description } from './texts'

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
      .Description_title {
        margin-top: 80px;
        font-family: 'Futura - Bold';
        font-size: 10px;
        line-height: 27px;
        color: #abb0bc;
      }
      .Social_container {
        margin-bottom: 40px;
      }
      @media screen and (max-width: 1000px) {
        .Summary_section {
          width: 100%;
          text-align:center;
        }
        .Inner_left_section, .Inner_right_section {
          margin: auto;
          width: calc(100% - 50px);
        }
        .Description_title {
          display: none;
        }
        .Call_top {
          display: none;
        }
        .Footer_desktop {
          display: none;
        }
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
        <TitlePrimary
          content={project.title}
          style={{
            fontSize: 74,
            color: '#260608',
            marginTop: 80,
            marginBottom: 20,
            maxWidth: 420
          }}/>
        <TitleSecondary
          content={project.problematic}
          style={{
            color: project.color,
            fontSize: 23,
            marginTop: 20,
            maxWidth: 445
          }}/>
        <div className='Social_container'>
          <Social />
        </div>
        <div className='Call_top'>
          {project.website && <Call text='VIEW THE WEBSITE' />}
        </div>
      </div>
    </div>
    <div className='Summary_section'>
      <div className='Inner_right_section'>
        <div className='Description_title'>THE PROJECT</div>
        <Description
          content={project.description}
          style={{
            color: '#474f6f',
            fontSize: 16,
            lineHeight: '28px',
            marginTop: 0,
            marginBottom: 0
          }} />
        <FooterDesktop project={project} />
      </div>
      <FooterMobile project={project} />
    </div>
  </div>


const FooterMobile = ({ project }) =>
  <div className='Footer_mobile'>
    <style jsx>{`
      .Footer_mobile {
        background-color: #dee2ed;
        display: none;
        width: 100%;
        padding: 40px 0;
        margin-top: 40px;
      }
      .Left {
        display: inline-block;
        width: calc(50% - 25px);
        margin-left: 25px;
        text-align: left;
      }
      .Right {
        display: inline-block;
        width: calc(50% - 50px);
        margin-left: 25px;
        text-align: left;
      }
      .Line {
        width: 16px;
        height: 2px;
        display: inline-block;
        background-image: ${project.gradient.base};
        margin-right: 10px;
        position: relative;
        top: -3px;
      }
      .Label {
        display: inline-block;
        font-family: 'Futura - Bold';
        font-weight: bold;
        font-size: 10px;
        line-height: 27px;
        color: #abb0bc;
      }
      .Value {
        font-family: 'Playfair Display';
        font-weight: 400;
        font-size: 12px;
        font-style: italic;
        line-height: 24px;
        color: #474f6f;
        position: relative;
        left: 28px;
      }
      .Value_stat {
        font-family: 'Playfair Display';
        font-weight: bold;
        font-size: 72px;
        line-height: 24px;
        height: 54px;
        margin-top: 35px;
        position: relative;
        left: 28px;
      }
      .Mobile_stats .Label {
        width: calc(100% - 50px);
        vertical-align: top;
        position: relative;
        top: -4px;
      }
      @media screen and (max-width: 1000px) {
        .Footer_mobile {
          display: block;
        }
      }
    `}</style>
    <div className='Left'>
      <div className='Mobile_meta'>
        <div className='Line' /> <div className='Label'>CLIENT</div>
        <div className='Value'>{project.customer}</div>
      </div>
      <div className='Mobile_meta'>
        <div className='Line' /> <div className='Label'>ROLE</div>
        <div className='Value'>{project.role}</div>
      </div>
      <div className='Mobile_meta'>
        <div className='Line' /> <div className='Label'>YEAR</div>
        <div className='Value'>{project.year}</div>
      </div>
    </div>
    <div className='Right'>
      <div className='Mobile_stats'>
        <div className='Line' /> <div className='Label'>{project.stats[0].label}</div>
        <div className='Value_stat' style={{color: project.color }}>{project.stats[0].value}</div>
      </div>
    </div>
  </div>

const FooterDesktop = ({ project }) =>
  <div className='Footer_desktop'>
    <style jsx>{`
      @media screen and (max-width: 1000px) {
        .Footer_desktop {
          display: none;
        }
      }
    `}</style>
    <div className='Footer_desktop'>
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


const Meta = ({label, value}) =>
  <div className='Meta'>
    <style jsx>{`
      .Meta {
        display: inline-block;
        margin-top: 20px;
        width: 33%;
        vertical-align: top;
      }
      .Label {
        font-family: 'Futura - Bold';
        font-weight: bold;
        font-size: 10px;
        line-height: 27px;
        color: #abb0bc;
      }
      .Value {
        font-family: 'Playfair Display';
        font-weight: 400;
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
