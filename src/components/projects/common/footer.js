// src/componentqs/projects/common/social.js
import React from 'react'
import Call from './call'
import Social from './social'
import {data, JO_LINKEDIN, RS_LINKEDIN} from '../../../../data'

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
        text-transform: uppercase;
        font-size: 18px;
        color: white;
        line-height: 32px;
        display: inline-block;
        margin: 70px auto;
      }
      .Project {
        display: inline-block;
        width: calc(20% - 3px);
        border-right: 3px solid #001732;
        height: 100%;
        vertical-align: top;
        position: relative;
      }
      .Project_container {
        width: 140px;
        height: calc(100% - 34px);
        position: absolute;
        top: 34px;
        left: calc(50% - 70px);
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
        padding-top: 40px;
      }
      .Contact {
        font-size: 11px;
        line-height: 22px;
        color: #8554b2;
        text-transform: uppercase;
      }
      .Contact, .Contact_dev {
        font-size: 11px;
        line-height: 22px;
        color: #8554b2;
        text-transform: uppercase;
        display:inline-block;
        width: calc(33% - 40px);
        text-decoration: none;
        text-align: left;
        margin-left: 40px;
        letter-spacing: 1.1px;
        vertical-align: top;
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
        vertical-align: top;
      }
      .Mobile {display: none;}
      @media screen and (max-width: 750px) {
        .Footer {
          height: 1950px;
        }
        .Projects {
          height: 1450px;
        }
        .Project {
          display: block;
          width: 310px;
          margin: auto;
          height: 273px;
          background: white;
          position: relative;
          margin-bottom: 20px;
        }
        .Project_container {
          width: 220px;
          left: calc(50% - 110px);
        }
        .Project_card {
          top: 0;
        }
        .Projects {
          background: #001732;
        }
        .Infos {
          background: #001732;
          padding-top: 30px;
        }
        .Contact, .Contact_dev, .Social_wrapper {
          display: block;
          width: 310px;
          margin: auto;
          text-align: center;
        }
        .Contact_dev {
          margin-top: 6px;
          margin-bottom: 10px;
          text-transform: none;
        }
        .Desktop {display: none;}
        .Mobile {display: block;}
      }
    `}</style>
    <div className='Title futuralt_book'>
      If you love that project
      <br /><strong>those can interest you :</strong>
    </div>
    <div className='Projects'>
      {
        project.linkedProjects.map(index =>
          <div className='Project clickable' key={index}>
            <div style={{
              top: 130
            }} className='Project_title'>{data.projects[index].title}</div>
            <div className='Project_card transitions'>
              <div className='Project_container'>
                <div className='Project_card_title' style={{
                  marginBottom: 20
                }}>
                  {data.projects[index].title}
                </div>
                <Tags tags={data.projects[index].tags}/>
                <div className='Call_wrapper'>
                  <Call href={`/${data.projects[index].key}`} text='TRY THE CASE' />
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
    <div className='Infos Mobile'>
      <a href={RS_LINKEDIN} target='_blank' className='Contact futuralt_bold'>mathilde.serra01@gmail.com</a>
      <a href={JO_LINKEDIN} target='_blank' className='Contact_dev futuralt_bold'>
        Developped by <span className='Name'>Jonathan Banon</span>
      </a>
      <div className='Social_wrapper'>
        <Social centered={true} grey={false} />
      </div>
    </div>
    <div className='Infos Desktop'>
      <a href={RS_LINKEDIN} target='_blank' className='Contact futuralt_bold'>mathilde.serra01@gmail.com</a>
      <div className='Social_wrapper'>
        <Social centered={true} grey={false} />
      </div>
      <a href={JO_LINKEDIN} target='_blank' className='Contact_dev futuralt_bold'>
        Developped by <span className='Name'>jonathan banon</span>
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
  <div className='Tag futuralt_book'>
    <style jsx>{`
      .Tag {
        color: #abb0bc;
        font-size: 12px;
        line-height: 22px;
        margin-bottom: 5px;
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
