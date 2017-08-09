// src/componentqs/about/index.js
import React from 'react'
import SVGMenuIcon from '../../pictos/menu'
import SVGCloseIcon from '../../pictos/close'

class Menu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }
  render () {
    const { open } = this.state
    return <div onClick={() => this.toggleMenu()} className='Menu_radius clickable'>
      <style jsx>{`
        .Menu_radius {
          position: absolute;
          top: 40px;
          right: 30px;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          border: 1px solid white;
          z-index: 10;
        }
      `}</style>
        { open ? <SVGCloseIcon key='open' /> : <SVGMenuIcon key='close' /> }
    </div>
  }
  toggleMenu() {
    this.setState({ open: !this.state.open });
  }
}

export default Menu
