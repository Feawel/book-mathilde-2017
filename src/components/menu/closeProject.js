import Close from '../pictos/close'
import Link from 'next/link'

class CloseProject extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hide : true, timeoutId: null }
  }

  componentWillReceiveProps(nextProps) {
    if(this.state.hide && nextProps.projectAppear) {
      const timeoutId = setTimeout(() => this.setState({ hide: false }), 1000)
      this.setState({timeoutId})
    } else if (!nextProps.projectAppear && !this.state.hide) {
      this.setState({hide: true})
    }
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeoutId)
  }

  render () {
    const { projectAppear, closeProject, project, openAbout, isMobile } = this.props
    const { hide } = this.state
    return (
      <Link href={{ pathname: '/', query: { project: project.key, typo: true } }} prefetch >
        <div style={{
            top: openAbout ? 625 : 40,
            display: projectAppear && !hide ? 'block' : 'none'
          }}
          className='Menu_close_project clickable'
          onClick={() => closeProject()}>
          <style jsx>{`
            .Menu_close_project {
              position: absolute;
              right: 17px;
              width: 40px;
              top: 52px;
              height: 40px;
              z-index: 11;
              -webkit-transition      : all 1.5s  ;
              -moz-transition       : all 1.5s  ;
              -ms-transition        : all 1.5s  ;
              -o-transition         : all 1.5s  ;
              transition          : all 1.5s  ;
            }
            .Circle {
              position: absolute;
              bottom: 7px;
              right: 10px;
            }
            svg {
              fill: white;
              width: 50px;
              height: 50px;
              display: inline-block;
              position: relative;
              z-index: 1;
            }
            .Cross {
              transform: scale(0.7, 0.7);
              transform-origin: left center;
              position: relative;
              right: 5px;
              bottom: 9px;
            }
            circle {
              opacity: 0.5;
            }
            @media screen and (max-width: 750px) {
              .Menu_close_project {
                right: 20px;
              }
            }
          `}</style>
          <svg className='Circle'>
            <circle cx="26" cy="26" r="20" stroke="white" strokeWidth="1" fill="none" />
          </svg>

          <svg className='Cross'>
            <polygon points="26.1,8.8 23.2,5.9 16,13.2 8.9,6.1 6.1,9 13.2,16 5.9,23.3 8.7,26.1 16,18.8 23,25.9 25.9,23.1 18.8,16 "/>
          </svg>
        </div>
      </Link>
    )
  }
}


export default CloseProject
