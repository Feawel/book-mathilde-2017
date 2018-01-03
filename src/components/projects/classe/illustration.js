// src/componentqs/projects/comete/userInterface.js
import React from 'react'
import ReactDOM from 'react-dom'
import Number from '../common/number'
import DoubleIllustrations from '../common/doubleIllustrations'
import SectionInfos from '../common/sectionInfos'
import { TitleSecondary, SubtitlePart } from '../common/texts'

class Illustration extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const {setSectionMetadata} = this.props
    setSectionMetadata({
      title: 'Illustration',
      icon: '/static/projects/classe/2-menu/picto-illu-grey.svg',
      activeIcon: '/static/projects/classe/2-menu/picto-illu.png',
      element: ReactDOM.findDOMNode(this)
    })
  }

  render() {
    return (
      <div className='Illustration'>
        <style jsx>{`
          .Illustration {
            width: 100%;
            margin: auto;
            overflow: hidden;
            position: relative;
            z-index: 0;
            padding-bottom: 400px;
          }
        `}</style>

        <Number content='03' color='#1a2432' borderBackground='linear-gradient(to left, #f04372 0%, #ffd69c 100%)' />
        <DoubleIllustrations
          main={{width: 460, src: '/static/projects/classe/5-illustration/picto-illu.png'}}
          second={{width: 764, src: '/static/projects/classe/5-illustration/picto-illu.png'}}
          location={{bottom: 150, right: 120}}
          mobileLocation={{top: -675, right: -315, zoom: 0.6}} />
        <SectionInfos
          marginTop={90}
          title={{content: 'Illustrations', color: '#1a2432'}}
          baseline={{content: 'brighten up the interface', color: '#a8adb9'}}
          description={{color: '#474f6f', content: 'I have produced two types of illustrations for the interface: drawings to populate even empty interfaces, and illustrations that serve to identify the classes.'}}
          />
        <Interfaces />
        <Classes />
      </div>
    )
  }
}

const Interfaces = () =>
  <div className='Interfaces'>
    <style jsx>{`
      .Interfaces {
        position: relative;
        margin: auto;
        width: 1170px;
        margin-top: 80px;
      }
      .Left {
        display: inline-block;
        width: 370px;
        margin-right: 25px;
        vertical-align: top;
      }
      .Right {
        display: inline-block;
        width: 768px;
        height: 593px;
        vertical-align: top;
        text-align: center;
        background-color: #f2f3f4;
      }
      .Right img {
        width: 638px;
        position: relative;
        top: 40px;
      }
      .Colors {
        width: 340px;
        display: inline-block;
        margin-bottom: 15px;
      }
      .Square {
        display: inline-block;
        width: 48px;
        height: 48px;
        margin-right: 20px;
      }
      .Rectangle {
        display: inline-block;
        width: 200px;
        height: 48px;
      }
    `}</style>
    <div className='Left'>
      <TitleSecondary content='interface illustrations' style={{color: '#474f6f', margin: '0 auto'}} />
      <SubtitlePart
        content='Empty stats or pop-up'
        style={{color: '#a8adb9'}} />
      <img style={{marginTop: 10, marginBottom: 20}} height='291' alt='some interface related illustrations' src='/static/projects/classe/5-illustration/dessin-crabe.png' />
      <div className='Colors'>
        <div className='Square' style={{backgroundColor: '#f5f6f7'}} />
        <div className='Square' style={{backgroundColor: '#f2f3f4'}} />
        <div className='Rectangle' style={{backgroundColor: '#e4e8ed'}} />
      </div>
      <div className='Colors'>
        <div className='Square' style={{backgroundColor: '#c4ccd9'}} />
        <div className='Square' style={{backgroundColor: '#c8cee0'}} />
        <div className='Rectangle' style={{backgroundColor: '#bac3d9'}} />
      </div>
      <div className='Colors'>
        <div className='Square' style={{backgroundColor: '#a1acc3'}} />
        <div className='Square' style={{backgroundColor: '#5a71a1'}} />
        <div className='Rectangle' style={{backgroundColor: '#00b3df'}} />
      </div>
    </div>
    <div className='Right'>
      <img alt='some interface related illustrations' src='/static/projects/classe/5-illustration/illu-interface-01.png' />
    </div>
  </div>

class Classes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: 0,
      banners: [
        {index: 'rouge', color: '#e74c3c'},
        {index: 'orange', color: '#e57e22'},
        {index: 'jaune', color: '#f1c40f'},
        {index: 'vert', color: '#2ecc71'},
        {index: 'vert2', color: '#1abc9c'},
        {index: 'bleu', color: '#3498db'},
        {index: 'violet', color: '#9b59b6'}
      ],
      index: null
    }
    this.timer = this.timer.bind(this)
  }

  componentDidMount() {
    const intervalId = setInterval(this.timer, 3000)
    this.setState({ intervalId })
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  timer() {
    this.setState({ timer: this.state.timer + 1 })
  }
  setActive(index) {
    this.state.intervalId && clearInterval(this.state.intervalId)
    this.setState({index})
  }

  render() {
    const { banners, timer, index } = this.state
    const active = index === null ? banners[timer%7].index : banners[index].index
    return (
      <div className='Classes'>
        <style jsx>{`
          .Classes {
            position: relative;
            margin: auto;
            margin-top: 80px;
            text-align: center;
          }
          .Banners {
            position: relative;
            height: 400px;
            margin-top: 200px;
          }
          .Iphone {
            position: absolute;
            width: 494px;
            top: -126px;
            left: calc(50% - 247px);
          }
          .Circles {
            margin: auto;
            text-align: center;
            width: 1070px;
            position: relative;
          }
        `}</style>
        <TitleSecondary content='illustrations of classes' style={{color: '#474f6f', margin: '0 auto'}} />
        <SubtitlePart
          content='7 possible themes'
          style={{color: '#a6abb7'}} />
        <div className='Banners'>
          {banners.map((banner, i) => <Banner active={banner.index === active} banner={banner} key={i} />)}
          <img className='Iphone' alt='iphone creux' src='/static/projects/classe/5-illustration/iphone-frontal-creux.png' />
          {banners.map((banner, i) => <Screen active={banner.index === active} banner={banner} key={i} />)}
        </div>
        <div className='Circles'>
          {banners.map((banner, i) => <Circle index={i} setActive={(index) => this.setActive(index)} active={banner.index === active} banner={banner} key={i} />)}
        </div>
      </div>
    )
  }
}

const Screen = ({banner, active}) =>
  <div style={{opacity: active ?  1 : 0}} className='transitions Screen'>
    <style jsx>{`
      .Screen {
        position: absolute;
        top: 0px;
        width: 430px;
        left: calc(50% - 215px);
      }

    `}</style>
    <img width='430' alt={`bandeau ${banner.index}`} src={`/static/projects/classe/5-illustration/smartphone-${banner.index}.png`} />
  </div>

const Banner = ({banner, active}) =>
  <div style={{opacity: active ?  1 : 0}} className=' transitions Banner'>
    <style jsx>{`
      .Banner {
        position: absolute;
        top: 0;
        left:0;
      }

    `}</style>
    <img height='166' alt={`bandeau ${banner.index}`} src={`/static/projects/classe/5-illustration/bandeau-${banner.index}.png`} />
  </div>

const Circle = ({banner, active, setActive, index}) =>
  <div onClick={() => setActive(index)} className={`transitions Circle clickable ${active ? 'active' : ''}`}>
    <style jsx>{`
      .Circle {
        position: relative;
        display: inline-block;
        text-align: center;
        width: 150px;
        height: 150px;
        z-index: 10;
        top: 0;
      }
      .Circle.active {
        top: 10px;
      }
      .Image {
        display: inline-block;
        position: relative;
        width: 110px;
        height: 110px;
        z-index: 2;
      }
      .Image.active {
        width: 90px;
        height: 90px;
      }
      .Container {
        width: 110px;
        height: 110px;
        text-align: center;
        margin: auto;
        position: absolute;
      }
      .Radius {
        display: inline-block;
        position: relative;
        width: 90px;
        height: 90px;
        border-radius: 50%;
        z-index: -1;
        border: 1px solid ${banner.color};
        position: relative;
        top: 0px;
      }
      .Radius.active {
        position: relative;
        top: -10px;
        width: 110px;
        height: 110px;
      }
    `}</style>
    <div className='Container'>
      <img className={`Image transitions ${active ? 'active' : ''}`} alt={`rond ${banner.index}`} src={`/static/projects/classe/5-illustration/rond-${banner.index}.png`} />
    </div>
    <div className='Container'>
      <div className={`Radius transitions ${active ? 'active' : ''}`}  />
    </div>
  </div>


export default Illustration
