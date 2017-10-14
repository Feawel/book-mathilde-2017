const SVGCloseIcon = () =>
  <svg className='clickable'>
    <style jsx>{`
      svg {
          position: absolute;
          top: 4px;
          left: 4px;
          fill: white;
          width: 40px;
          height: 40px;
        }
    `}</style>
    <polygon points="26.1,8.8 23.2,5.9 16,13.2 8.9,6.1 6.1,9 13.2,16 5.9,23.3 8.7,26.1 16,18.8 23,25.9 25.9,23.1 18.8,16 "/>
  </svg>

export default SVGCloseIcon
