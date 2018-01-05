import React from 'react'
import { isRetina } from '../../../utils/responsive'
import { TitleSecondary, SubtitlePart } from '../common/texts'

const getResponsiveDirectory = () => {
  if(window.innerWidth > 1400 || (window.innerWidth > 750 && isRetina()))
    return 'desktop-2800'
  else if(window.innerWidth > 750)
    return 'desktop-1400'
  else if(window.innerWidth > 400 && isRetina())
    return 'mobile-1400'
  else
    return 'mobile-720'
}


class Pictures extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      directory: null
    }
  }
  componentDidMount() {
    this.setState({
      directory: getResponsiveDirectory()
    })
  }
  render() {
    const { directory } = this.state
    if(directory === null) return <div />
    return (
      <div className='Pictures'>
        <style jsx>{`
          .Pictures {
            position: relative;
            margin: auto;
          }
          .Picture_block {
            width: 100%;
          }
          .Picture_inline {
            display: inline-block;
            width: calc(50% - 10px);
          }
          .H_separator {
            width: 100%;
            height: 18px;
          }
          .V_separator {
            display: inline-block;
            width: 20px;
            height: 100%;
          }
          .Infos {
            width: 435px;
            margin: auto;
            text-align: center;
          }
          .Quote {
            font-size: 14px;
            line-height: 26px;
            color: #0a284c;
            margin-bottom: 40px;
          }
          @media screen and (max-width: 750px) {
            .Picture_inline {
              width: 100%;
              display: block;
            }
            .V_separator {
              display: block;
              width: 100%;
              height: 18px;
            }
            .Infos {
              width: 300px;
            }
          }
        `}</style>
        <div className='H_separator' />
        <div className='Infos'>
          <TitleSecondary content='Typography 1' style={{color: '#474f6f', margin: '10px auto'}} />
          <SubtitlePart
            content='Ciceron'
            style={{color: '#a6abb7', margin: '10px auto'}} />
          <div className='Quote playfairdisplay_black'>
          “Not only is there an art in knowing a thing, but also a certain art in teaching it.“
          </div>
        </div>
        <img className='Picture_block' src={`/static/projects/typo/${directory}/1.jpg`} alt='first typo picture' />
        <div className='H_separator' />
        <div>
          <img className='Picture_inline' src={`/static/projects/typo/${directory}/2.jpg`} alt='third typo picture' />
          <div className='V_separator' />
          <img className='Picture_inline' src={`/static/projects/typo/${directory}/3.jpg`} alt='fourth typo picture' />
        </div>
        <div className='H_separator' />
        <div className='Infos'>
          <TitleSecondary content='Typography 2' style={{color: '#474f6f', margin: '10px auto'}} />
          <SubtitlePart
            content='John Powell'
            style={{color: '#a6abb7', margin: '10px auto'}} />
          <div className='Quote playfairdisplay_black'>
          “The only real mistake is the one from which we learn nothing. “
          </div>
        </div>
        <img className='Picture_block' src={`/static/projects/typo/${directory}/4.jpg`} alt='first typo picture' />
        <div className='H_separator' />
        <div>
          <img className='Picture_inline' src={`/static/projects/typo/${directory}/5.jpg`} alt='third typo picture' />
          <div className='V_separator' />
          <img className='Picture_inline' src={`/static/projects/typo/${directory}/6.jpg`} alt='fourth typo picture' />
        </div>
        <div className='H_separator' />
        <div className='Infos'>
          <TitleSecondary content='Typography 3' style={{color: '#474f6f', margin: '10px auto'}} />
          <SubtitlePart
            content='Thomas Edison'
            style={{color: '#a6abb7', margin: '10px auto'}} />
          <div className='Quote playfairdisplay_black'>
          “To invent, you need a good imagination and a pile of junk“
          </div>
        </div>
        <img className='Picture_block' src={`/static/projects/typo/${directory}/7.jpg`} alt='first typo picture' />
        <div className='H_separator' />
        <div>
          <img className='Picture_inline' src={`/static/projects/typo/${directory}/8.jpg`} alt='third typo picture' />
          <div className='V_separator' />
          <img className='Picture_inline' src={`/static/projects/typo/${directory}/9.jpg`} alt='fourth typo picture' />
        </div>
        <div className='H_separator' />
      </div>
    )
  }
}

export default Pictures
