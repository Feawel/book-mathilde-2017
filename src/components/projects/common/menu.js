// src/componentqs/projects/common/menu.js
import React from 'react'
import ReactDOM from 'react-dom'
import throttle from 'lodash/throttle'
import isEmpty from 'lodash/isEmpty'
import get from 'lodash/get'
import Link from 'next/link'

const TOP_DIFF_VALUE = 245

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
      fixed: false,
      projectOffsetTop: 0,
      offsetTop: 500
    }

    this.onScrollMenu = this.onScrollMenu.bind(this)
  }

  render () {
    const { items, current, fixed } = this.state
    const { section, sections, borderImage, color, project } = this.props
    const leftBorder = current < sections.length/2
      ? 170*((sections.length/2)-current)
      : 170*(current-sections.length/2)
    return (
      <div id='project-top-menu' className={`Menu ${fixed ? 'Menu_fixed' : (isEmpty(sections) ? 'hide' : '')}`}>
       <style jsx>{`
          .Menu {
            width: 100%;
            height: 59px;
            background-color: white;
            border-bottom: 1px solid #e2e2e2;
            position: relative;
            text-align: center;
            position: relative;
            z-index: 9;
            overflow: hidden;
          }
          .Menu_fixed {
            position: fixed;
            top: 0;
          }
          .Menu_item {
            width: 170px;
            display: inline-block;
            vertical-align: top;
            font-size: 10px;
            color: #abb0bc;
            text-transform: uppercase;
            position: relative;
            top: 14px;
            letter-spacing: 1.1px;
          }
          .Menu_item.active {
            color: ${color};
          }
          .Border {
            position: absolute;
            bottom: 0;
            left: 300px;
            height: 4px;
            width: 166px;
            background-image: ${borderImage};
          }
          .Icon {
            position: relative;
            top: 4px;
            margin-right: 16px;
          }
          .Menu_inner {
            height: 100%;
            position: relative;
            overflow: auto;
          }
          .Scroll {
            position: relative;
            height: 100%;
            overflow: auto;
          }
          .Close {
            position: absolute;
            right: 40px;
            top: 20px;
          }
          .Close_text {
            font-size: 10px;
            font-color: #000000;
            position: relative;
            right: 10px;
            vertical-align: top;
            top: 2px;
            text-transform: uppercase;
            letter-spacing: 1.1px;
          }
          .Close_icon {
            position: relative;
            top: 1px;
            width: 14px;
          }
          @media screen and (max-width: 750px) {
            .Menu_inner {
              width: 100%;
            }
            .Scroll {
              width: ${sections.length*180}px!important;
            }
            .Close { display: none }
          }
        `}</style>
        <div className='Menu_inner'>
          <div className='Scroll'>
            {
              sections.map((item, i) =>
                <div onClick={() => this.changeCurrent(i)} key={i} className={`Menu_item futuralt_bold transitions clickable ${current === i ? 'active' : ''}`}>
                  <img width='18' src={current === i ? item.activeIcon : item.icon} className='Icon' alt={`Icon for ${item.title}`}/>
                  <span className='Text'>{item.title}</span>
                </div>
              )
            }
            <div
              style={{left: `calc(50% ${current < sections.length/2 ? '-' : '+'} ${leftBorder}px)`}}
              className='Border transitions'>
            </div>
          </div>
            <Link href={{ pathname: '/', query: { project: project.key, typo: true } }} prefetch >
              <div className='Close clickable transitions'>
                <span className='Close_text futuralt_bold transitions'>close project</span>
                <img src='/static/pictos/picto-croix.svg' className='Close_icon transitions' />
              </div>
          </Link>
        </div>
      </div>
    )
  }

  changeCurrent(current) {
    this.setState({ current })
    window.scroll({
      top: this.props.sections[current].element.offsetTop+(this.state.projectOffsetTop - 40),
      behavior: 'smooth'
    })
  }

  onScrollMenu(e) {
    const { offsetTop, projectOffsetTop } = this.state
    const offset = offsetTop+projectOffsetTop
    const { sections } = this.props
    const scrollY = window.scrollY

    const current = sections.reduce((memo, section, index) => {
      if(section.element.offsetTop-60 < scrollY) {
        return index
      } else {
        return memo
      }
    }, 0)

    this.setState({
      fixed: scrollY >= offset,
      current
    })
  }

  componentDidMount() {
    this.handleScrollMenu = throttle(this.onScrollMenu, 100, { 'trailing': false });
    window.addEventListener('scroll', this.handleScrollMenu);
    setTimeout(() => this.setState({
      projectOffsetTop: window.document.getElementById('project').offsetTop,
      offsetTop: ReactDOM.findDOMNode(this).offsetTop
    }), 300)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollMenu);
  }
}

export default Menu
