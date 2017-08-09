const SVGMenuIcon = () =>
  <svg className='clickable'>
    <style jsx>{`
      svg {
          position: absolute;
          top: 7px;
          left: 7px;
          fill: white;
          width: 40px;
          height: 40px;
        }
    `}</style>
    <g>
      <circle cx='5' cy='5.1' r='2'/>
      <circle cx='20.9' cy='5.1' r='2'/>
      <circle cx='13' cy='5.1' r='2'/>
      <circle cx='5' cy='13' r='2'/>
      <circle cx='20.9' cy='13' r='2'/>
      <circle cx='13' cy='13' r='2'/>
      <circle cx='5' cy='21' r='2'/>
      <circle cx='20.9' cy='21' r='2'/>
      <circle cx='13' cy='21' r='2'/>
    </g>
  </svg>

export default SVGMenuIcon