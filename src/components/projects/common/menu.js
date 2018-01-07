// src/componentqs/projects/common/menu.js
import React from 'react'
import ReactDOM from 'react-dom'
import throttle from 'lodash/throttle'
import get from 'lodash/get'

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
      fixed: false,
      offsetTop: 0
    }

    this.onScrollMenu = this.onScrollMenu.bind(this)
  }

  render () {
    const { items, current, fixed } = this.state
    const { section, sections, borderImage, color } = this.props
    const leftBorder = current < sections.length/2
      ? 170*((sections.length/2)-current)
      : 170*(current-sections.length/2)
    return (
      <div className={`Menu ${fixed ? 'Menu_fixed' : ''}`}>
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
            font-family: Futura;
            font-weight: bold;
            font-size: 10px;
            color: #abb0bc;
            text-transform: uppercase;
            position: relative;
            top: 20px;
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
            margin-right: 12px;
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
          @media screen and (max-width: 750px) {
            .Menu_inner {
              width: 100%;
            }
            .Scroll {
              width: ${sections.length*180}px!important;
            }
          }
        `}</style>
        <div className='Menu_inner'>
          <div className='Scroll'>
            {
              sections.map((item, i) =>
                <div onClick={() => this.changeCurrent(i)} key={i} className={`Menu_item transitions clickable ${current === i ? 'active' : ''}`}>
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
        </div>
      </div>
    )
  }

  changeCurrent(current) {
    this.setState({ current })
    window.scroll({
      top: this.props.sections[current].element.offsetTop,
      behavior: 'smooth'
    })
  }

  onScrollMenu(e) {
    const { offsetTop } = this.state
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
      fixed: scrollY >= offsetTop,
      current
    })
  }

  componentDidMount() {
    this.handleScrollMenu = throttle(this.onScrollMenu, 30, { 'trailing': false });
    window.addEventListener('scroll', this.handleScrollMenu);
    this.setState({offsetTop: ReactDOM.findDOMNode(this).offsetTop+380})
  }

  componentWillUnmount() {

    window.removeEventListener('scroll', this.handleScrollMenu);
  }
}

export default Menu
