import React from 'react'
import { isRetina } from '../../../utils/responsive'


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
          }
        `}</style>
        <img className='Picture_block' src={`/static/projects/ganesha/${directory}/1.jpg`} alt='first ganesha picture' />
        <div className='H_separator' />
        <img className='Picture_block' src={`/static/projects/ganesha/${directory}/2.jpg`} alt='second ganesha picture' />
        <div className='H_separator' />
        <div>
          <img className='Picture_inline' src={`/static/projects/ganesha/${directory}/3.jpg`} alt='third ganesha picture' />
          <div className='V_separator' />
          <img className='Picture_inline' src={`/static/projects/ganesha/${directory}/4.jpg`} alt='fourth ganesha picture' />
        </div>
        <div className='H_separator' />
        <img className='Picture_block' src={`/static/projects/ganesha/${directory}/5.jpg`} alt='fifth ganesha picture' />
        <div className='H_separator' />
        <div>
          <img className='Picture_inline' src={`/static/projects/ganesha/${directory}/6.jpg`} alt='sixth ganesha picture' />
          <div className='V_separator' />
          <img className='Picture_inline' src={`/static/projects/ganesha/${directory}/7.jpg`} alt='seventh ganesha picture' />
        </div>
        <div className='H_separator' />
        <div>
          <img className='Picture_inline' src={`/static/projects/ganesha/${directory}/8.jpg`} alt='height ganesha picture' />
          <div className='V_separator' />
          <img className='Picture_inline' src={`/static/projects/ganesha/${directory}/9.jpg`} alt='nine ganesha picture' />
        </div>
        <div className='H_separator' />
        <img className='Picture_block' src={`/static/projects/ganesha/${directory}/10.jpg`} alt='ten ganesha picture' />
        <div className='H_separator' />
        <img className='Picture_block' src={`/static/projects/ganesha/${directory}/11.jpg`} alt='eleven ganesha picture' />
        <div className='H_separator' />
        <img className='Picture_block' src={`/static/projects/ganesha/${directory}/12.jpg`} alt='twelve ganesha picture' />
        <div className='H_separator' />
      </div>
    )
  }
}

export default Pictures
