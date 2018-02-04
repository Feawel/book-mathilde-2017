import React from 'react'

import get from 'lodash/get'
import Social from './social'
import Call from './call'
import { TitlePrimary, TitleSecondary, Description } from './texts'
import { isMobile } from '../../../utils/responsive'


class Summary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timeoutIds: [],
      hideTitle: true,
      hideBaseline: true,
      hideSubtitle: true,
      hideDescription: true,
      isMobile: null
    }
  }
  componentDidMount() {
    const { timeoutIds } = this.state
    setTimeout(() => this.setState({hideTitle: false}), 500)
    setTimeout(() => this.setState({hideBaseline: false, hideSubtitle: false}), 750)
    setTimeout(() => this.setState({hideDescription: false}), 1000)
    this.setState({ isMobile: isMobile() })
  }
  componentWillUnmount() {
    const { timeoutIds } = this.state
    this.setState({ hideTitle: true, hideBaseline: true, hideDescription: true })
    timeoutIds.forEach(t => clearTimeout(t))
  }
  render() {
    const { hideTitle, hideBaseline, hideSubtitle, hideDescription, isMobile } = this.state
    const { project } = this.props
    return (
      <div className='Project Summary'>
        <style jsx>{`
          .Summary {
            margin-bottom: 10px;
            width: 1020px;
            margin: auto;
            position: relative;
            padding-bottom: 45px;
          }

          .Disappear {
            opacity: 0!important;
            top: 60px!important;
          }
          .Container {
            position: relative;
            top: 0;
            opacity: 1;
          }
          .Transitions {
            -webkit-transition      : all .8s  ;
            -moz-transition       : all .8s  ;
            -ms-transition        : all .8s  ;
            -o-transition         : all .8s  ;
            transition          : all .8s  ;
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
            margin-top: 10px;
            vertical-align: top;
          }
          .Inner_left_section {
            margin: auto;
            width: 430px;
          }
          .Inner_right_section {
            margin: auto;
            width: 480px;
            margin-left: 110px;
          }
          .Description_title {
            margin-top: 110px;
            font-family: 'Futura - Bold';
            font-size: 10px;
            line-height: 27px;
            color: #abb0bc;
            letter-spacing: 1.1px;
          }
          .Social_container {
            margin-bottom: 40px;
          }
          @media screen and (max-width: 1000px) {
            .Summary {
              width: 100%;
            }
            .Summary_section {
              width: 100%;
              text-align:center;
            }
            .Inner_left_section, .Inner_right_section {
              margin: auto;
              width: 310px;
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
        <div className='Summary_section'>
          <div className='Inner_left_section'>
            <div className={`Container Transitions ${hideTitle ? 'Disappear' : ''}`}>
              <TitlePrimary
                content={project.title}
                style={{
                  fontSize: 74,
                  color: project.colors.typo,
                  marginTop: 95,
                  marginBottom: 20
                }}/>
              </div>
            <div className={`Container Transitions ${hideBaseline ? 'Disappear': ''}`}>
              <TitleSecondary
                content={project.problematic}
                summary={true}
                style={{
                  color: project.colors.primary,
                  fontSize: 24,
                  lineHeight:'36px',
                  marginTop: 20
                }}/>
            </div>
            <div className='Social_container'>
              <Social summary={true}/>
            </div>
            <div className='Call_top'>
              {project.callSummary && <Call newWindow={true} color={project.colors.primary} background={project.colors.gradient} href={project.callSummary} text='VIEW THE WEBSITE' />}
            </div>
          </div>
        </div>
        <div className='Summary_section'>
          <div className='Inner_right_section'>
            <div className={`Description_title Transitions Container ${hideSubtitle ? 'Disappear' : ''}`}>THE QUESTION</div>
            <div className={`Description Container Transitions ${hideDescription ? 'Disappear' : ''}`}>
              <Description
                content={project.description}
                style={{
                  color: '#474f6f',
                  fontSize: 16,
                  lineHeight: '28px',
                  marginTop: 0,
                  marginBottom: 0,
                  textAlign: isMobile ? 'left' : 'inherit'
                }} />
            </div>
            <FooterDesktop project={project} />
          </div>
          <FooterMobile project={project} />
        </div>
      </div>
    )
  }
}


const FooterMobile = ({ project }) =>
  <div className='Footer_mobile'>
    <style jsx>{`
      .Footer_mobile {
        background-color: rgba(222, 226, 237, 0.3);
        display: none;
        width: 100%;
        padding: 40px 0 1px 0;
        margin-top: 40px;
      }
      .Mobile_meta {
        margin: 5px 0;
      }
      .Mobile_meta:first-child {margin-top: 0;}
      .Left {
        display: inline-block;
        width: calc(50% - 25px);
        margin-left: 25px;
        text-align: left;
        vertical-align: top;
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
        background-image: ${project.colors.gradient};
        margin-right: 10px;
        position: relative;
        top: -3px;
      }
      .Label {
        display: inline-block;
        font-family: 'Futura - Bold';
        font-size: 10px;
        line-height: 18px;
        color: #abb0bc;
        letter-spacing: 1.1px;
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
        line-height: 56px;
        height: 54px;
        margin-top: 10px;
        position: relative;
        right: 10px;
        width: 150px;
        background: linear-gradient(330deg, ${project.colors.darkGradient} 0%, ${project.colors.primary} 50%, ${project.colors.lightGradient} 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .Mobile_stats .Label {
        width: calc(100% - 50px);
        vertical-align: top;
        position: relative;
        top: -4px;
      }
      .Call_wrapper {
        margin-top: 25px;
        margin-bottom: 25px;
      }
      @media screen and (max-width: 1000px) {
        .Footer_mobile {
          display: block;
        }
      }
    `}</style>
    <div className='Left'>
      <div className={`Mobile_meta ${project.customer ? '' : 'hide'}`}>
        <div className='Line' /> <div className='Label'>CLIENT</div>
        <div className='Value'>{project.customer}</div>
      </div>
      <div className={`Mobile_meta ${project.role ? '' : 'hide'}`}>
        <div className='Line' /> <div className='Label'>ROLE</div>
        <div className='Value'>{project.role}</div>
      </div>
      <div className={`Mobile_meta ${project.year ? '' : 'hide'}`}>
        <div className='Line' /> <div className='Label'>YEAR</div>
        <div className='Value'>{project.year}</div>
      </div>
    </div>
    <div className='Right'>
      <div className={`Mobile_stats ${project.stats ? '' : 'hide'}`}>
        <div className='Line' /> <div className='Label' dangerouslySetInnerHTML={{__html: get(project, 'stats[0].label')}} />
        <div className='Value_stat' >{get(project, 'stats[0].value')}</div>
      </div>
    </div>
    <div className='Call_wrapper'>
      {project.callSummary && <Call newWindow={true} color='white' colorHover={project.colors.primary} width={210} background='white' backgroundInner={project.colors.gradient} href={project.callSummary} text={project.callSummaryText || 'VIEW THE WEBSITE'} />}
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
        {project.customer && <Meta label='CUSTOMER' value={project.customer} />}
        {project.role && <Meta label='ROLE' value={project.role} />}
        {project.year && <Meta label='YEAR' value={project.year} />}
      </div>
      <div className='Stats'>
        {project.stats && project.stats.map((stat, i) => <Stat key={i} colors={project.colors} label={stat.label} value={stat.value} />)}
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
        font-size: 10px;
        line-height: 27px;
        color: #abb0bc;
        letter-spacing: 1.1px;
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
    <div className='Value' dangerouslySetInnerHTML={{__html: String(value)}} />
  </div>

const Stat = ({ label, value, colors }) =>
  <div className='Stat'>
    <style jsx>{`
      .Stat {
        display: inline-block;
        margin-top: 32px;
        width: 40%;
        vertical-align: top;
      }
      .Label {
        font-size: 10px;
        line-height: 14px;
        color: #abb0bc;
      }
      .Value {
        font-family: 'Playfair Display';
        font-weight: bold;
        font-size: 72px;
        height: 84px;
        margin-top: 20px;
        vertical-align: bottom;
        background: linear-gradient(330deg, ${colors.darkGradient} 0%, ${colors.primary} 50%, ${colors.lightGradient} 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    `}</style>
    <div className='Label futuralt_bold' dangerouslySetInnerHTML={{__html: label}} />
    <div style={{colors: colors.primary}} className='Value'>{value}</div>
  </div>

export default Summary
