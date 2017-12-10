// src/componentqs/projects/common/social.js
import React from 'react'
import Call from './call'
import Social from './social'
import data from '../../../../data'

const Footer = ({ project, background = '#001732', projectsBackground = 'linear-gradient(to right, #61daff 0%, #941c91 100%)'}) =>
  <div style={{background}} className='Footer'>
   <style jsx>{`
      .Footer {
        position: relative;
        width: 100%;
        display: inline-block;
        margin: auto;
        height: 620px;
        text-align: center;
      }
      .Projects {
        background: ${projectsBackground};
        width: 100%;
        height: 318px;
        overflow: hidden;
      }
      .Title {
        font-family: Futura;
        text-transform: uppercase;
        font-size: 18px;
        color: white;
        line-height: 32px;
        display: inline-block;
        margin: 80px auto;
      }
      .Project {
        display: inline-block;
        width: calc(20% - 3px);
        border-right: 3px solid #001732;
        height: 100%
        vertical-align: top;
        position: relative;
      }
      .Project_title {
        font-family: Playfair Display;
        font-weight: 900;
        font-size: 24px;
        color: white;
        position: relative;
      }
      .Project_card {
        width: 100%;
        height: 100%;
        background: white;
        position: absolute;
        top: 320px;
        text-align: center;
      }
      .Project:hover .Project_card {
        top: 0;
      }
      .Project_card_title {
        font-family: Playfair Display;
        font-weight: 900;
        font-size: 24px;
        line-height: 30px;
        color: #941c91;
      }
      .Call_wrapper {
        display: inline-block;
        margin: auto;
      }
      .Infos {
        width: 100%;
        margin: auto;
        padding-top: 30px;
      }
      .Contact {
        font-family: Futura;
        font-weight: bold;
        font-size: 11px;
        line-height: 22px;
        color: #8554b2;
        text-transform: uppercase;
      }
      .Contact, .Contact_dev {
        font-family: Futura;
        font-weight: bold;
        font-size: 11px;
        line-height: 22px;
        color: #8554b2;
        text-transform: uppercase;
        display:inline-block;
        width: calc(33% - 40px);
        text-decoration: none;
        text-align: left;
        margin-left: 40px;
      }
      .Contact_dev {
        color: #abb0bc;
        text-align: right;
        margin-left: 0px;
        margin-right: 40px;
      }
      .Contact_dev .Name {
        color: #61daff;
      }
      .Social_wrapper {
        display:inline-block;
        width: 33%;
        text-align: center;
      }
    `}</style>
    <div className='Title'>
      If you love that project
      <br /><strong>those can interest you :</strong>
    </div>
    <div className='Projects'>
      {
        project.linkedProjects.map(index =>
          <div className='Project clickable' key={index}>
            <div style={{
              top: data.projects[index].title.length > 20 ? 126 : 142
            }} className='Project_title'>{data.projects[index].title}</div>
            <div className='Project_card transitions'>
              <div className='Project_card_title' style={{
                marginBottom:data.projects[index].title.length > 20 ? 20 : 30,
                marginTop:data.projects[index].title.length > 20 ? 20 : 40
              }}>
                {data.projects[index].title}
              </div>
              <Tags tags={data.projects[index].tags}/>
              <div className='Call_wrapper'>
                <Call text='TRY THE CASE' />
              </div>
            </div>
          </div>
        )
      }
    </div>
    <div className='Infos'>
      <a href='' className='Contact'>mathilde.serra01@gmail.com</a>
      <div className='Social_wrapper'>
        <Social centered={true} grey={false} />
      </div>
      <a href='' className='Contact_dev'>
        developped by <span className='Name'>jonathan banon</span>
      </a>
    </div>

  </div>

const Tags = ({tags}) =>
  <div className='Tags'>
    <style jsx>{`
      .Tags {
        margin-bottom: 20px;
      }
    `}</style>
    {tags.map((tag, i) => <Tag key={i} tag={tag} /> )}
  </div>

const Tag = ({tag}) =>
  <div className='Tag'>
    <style jsx>{`
      .Tag {
        color: #abb0bc;
        font-family: Futura;
        font-size: 12px;
        line-height: 22px;
        margin-bottom: 20px;
      }
      .Tag_icon {
        height: 18px;
        position: relative;
        top: 3px;
        margin-right: 12px;
      }
      .Tag_title {
        display: inline-block;
      }
    `}</style>
    <img src={`/static/pictos/${tag.icon}-grey.svg`} className='Tag_icon' />
    <div className='Tag_title'>{tag.title}</div>
  </div>

export default Footer
