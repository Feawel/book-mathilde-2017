
class LogoAnimation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      elem: null,
      elemH: null,
      elemW: null,
      scale: null,
      offsetX: null,
      offsetY: null,
      open: false,
      btnSize: 60,
      offsetValue: 30,
      backgroundColor: '#001732',
      hideCircle: true
    }
    this.openMenu = this.openMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
    this.animateMenu = this.animateMenu.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
    this.resizeHandler = this.resizeHandler.bind(this)
    this.calculateValues = this.calculateValues.bind(this)
  }
  render() {
    const {open, hideCircle, offsetValue, backgroundColor, btnSize, translateX, translateY, scale} = this.state
    return (
      <div className='Logo_animation_container' >
        <style jsx>{`
          .Logo_animation_container {
            position: relative;
            visibility: ${open ? '' : 'hidden'};
            -webkit-transition      : all .25s  ;
            -moz-transition       : all .25s  ;
            -ms-transition        : all .25s  ;
            -o-transition         : all .25s  ;
            transition          : all .25s  ;
          }
          .Nav_bg {
            transform-origin: center center;
            transition: transform .3s;
            transform: translate(${translateX}, ${translateY}) scale(${scale});
            will-change: transform;
            pointer-events: none;
          }

          .Button {
            position: fixed;
            height: calc(${btnSize}*1px);
            width: calc(${btnSize}*1px);
            top: calc((${offsetValue})*1px);
            right: calc(${offsetValue}*1px);
            border-radius: 50%;
            background: ${backgroundColor};
            cursor: pointer;
            margin: 0;
            padding: 0 15px;
            border: none;
            z-index: 11;
            user-select: none;
            -webkit-tap-highlight-color: rgba(0,0,0,0);
          }

          .Toggle_button {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #4ECA78;
            transition: transform .3s;
          }

          .Toggle_button.shown:before {
            transform: scale(.6);
            transition: .2s;
          }

          .Toggle_button:before {
            content: '';
            transition: .2s .2s;
            position: absolute;
            top: 3px;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: inherit;
            filter: blur(5px);
            z-index: -2;
          }
          .Toggle_button:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: inherit;
            background: ${backgroundColor};
            z-index: -1;
          }

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          html, body {
            height: 100%;
          }

          img {
            vertical-align: middle;
            height: auto;
            width: 100%;
          }

        `}</style>
        <div id='nav-bg' className='Button Nav_bg transitions'></div>
        <div id='toggle-btn' onClick={() => this.toggleMenu()} className={`Button transitions Toggle_button ${open ? 'shown' : ''}`}></div>
      </div>
    )
  }

  componentDidMount() {
    const elem = document.querySelector('#nav-bg'),
      elemH = elem.getBoundingClientRect().height,
      elemW = elem.getBoundingClientRect().width

    this.setState({
      elemH,
      elemW,
    }, this.calculateValues)
    window.addEventListener('resize', this.resizeHandler, false);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.open !== this.props.open) {
      this.toggleMenu()
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandler, false);
  }

  openMenu() {
    const {offsetX, offsetY, scale} = this.state
    this.setState({
      hideCircle: false,
      translateX: `-${offsetX}px`,
      translateY: `${offsetY}px`,
      scale: scale
    })
  }

  closeMenu() {
    this.setState({
      translateX: 0,
      translateY: 0,
      scale: 1,
      hideCircle: true
    })
  }

  animateMenu() {
    this.state.open ? this.openMenu() : this.closeMenu()
  }

  toggleMenu() {
    this.calculateValues()
    const open = !this.state.open
    this.setState({open: !this.state.open}, this.animateMenu)
  }

  resizeHandler() {
    window.requestAnimationFrame(() => {
      this.calculateValues()
      this.animateMenu()
    })
  }

  calculateValues() {
    const { elemH, elemW, offsetValue } = this.state
    const w = window.innerWidth
    const h = window.innerHeight

    //  Offsets to center the circle
    const offsetX = (w/2) - (elemW/2) - offsetValue
    const offsetY = (h/2) - (elemH/2) - offsetValue

    // Good old pythagoras
    const radius = Math.sqrt((Math.pow(h, 2))+(Math.pow(w, 2)))
    const scale = radius/(elemW/2)/2 + .1 // Add '.1' to compensate for Safari sub pixel blur issue
    this.setState({ offsetX, offsetY, scale })
  }
}


export default LogoAnimation
