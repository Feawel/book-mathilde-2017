// src/components/app.js
import React from 'react'
import debounce from 'lodash/debounce'
import data from '../../data'
console.log('data', data)
// Components
import Menu from './menu'
import About from './about'
import HomeProject from './homeProjects'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openMenu: false,
      currentMenu: 0,
      openAbout: false
    }

    this.onScrollMenu = this.onScrollMenu.bind(this)
  }

  render () {
    const { openMenu, openAbout, currentMenu } = this.state
    return [
      <About
        key='about'
        toggleOpen={() => this.toggleOpenAbout()}
        open={openAbout}
        openMenu={openMenu} />,
      <Menu
        key='menu'
        projects={data.projects}
        currentMenu={currentMenu}
        toggleOpen={() => this.toggleOpenMenu()}
        open={openMenu}
        openAbout={openAbout} />,
      <HomeProject key='project' />
    ]
  }

  componentDidMount() {
    window.addEventListener('wheel', this.onScrollMenu);
  }

  componentWillUnmount() {
    window.addEventListener('wheel', this.onScrollMenu);
  }

  onScrollMenu (e) {
    const {currentMenu} = this.state
    if(e.deltaY > 0) {
      this.setState({
        currentMenu: currentMenu === data.projects.length - 1 ? currentMenu : currentMenu + 1
      })
    } else {
      this.setState({
        currentMenu: currentMenu === 0 ? 0 : currentMenu - 1
      })
    }
  }

  toggleOpenMenu () {
    this.setState({openMenu: !this.state.openMenu})
  }
  toggleOpenAbout () {
    const { openAbout, openMenu } = this.state
    this.setState({
      openAbout: !openAbout,
      openMenu: !openAbout ? false : openMenu
    })
  }
}

export default App
