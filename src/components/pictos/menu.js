const translations = {
  topLeft: {X: 8, Y: 8},
  topCenter: {X: 0, Y: 8},
  topRight: {X: -8, Y: 8},
  centerLeft: {X: 8, Y:0},
  centerRight: {X: -8, Y:0},
  bottomLeft: {X: 8, Y: -8},
  bottomCenter: {X: 0, Y: -8},
  bottomRight: {X: -8, Y: -8}
}

const SVGMenuIcon = ({}) =>
  <svg className='clickable'>
    <style jsx>{`
      svg {
        position: absolute;
        top: 3px;
        left: -1px;
        width: 40px;
        height: 40px;
      }
      circle {
        fill: white;
      }
      svg:hover > g > .Top_left {
        transform: translate(8px, 8px);
      }
      svg:hover > g > .Top_center {
        transform: translate(0px, 8px);
      }
      svg:hover > g > .Top_right {
        transform: translate(-8px, 8px);
      }
      svg:hover > g > .Center_left {
        transform: translate(8px, 0px);
      }
      svg:hover > g > .Center_right {
        transform: translate(-8px, 0px);
      }
      svg:hover > g > .Bottom_left {
        transform: translate(8px, -8px);
      }
      svg:hover > g > .Bottom_center {
        transform: translate(0px, -8px);
      }
      svg:hover > g > .Bottom_right {
        transform: translate(-8px, -8px);
      }
    `}</style>
    <g>
      <circle className='transitions Top_left' cx='12' cy='10.1' r='2'/>
      <circle className='transitions Top_right' cx='27.9' cy='10.1' r='2'/>
      <circle className='transitions Top_center' cx='20' cy='10.1' r='2'/>
      <circle className='transitions Center_left' cx='12' cy='18' r='2'/>
      <circle className='transitions Center_right' cx='27.9' cy='18' r='2'/>
      <circle  cx='20' cy='18' r='2'/>
      <circle className='transitions Bottom_left' cx='12' cy='26' r='2'/>
      <circle className='transitions Bottom_right' cx='27.9' cy='26' r='2'/>
      <circle className='transitions Bottom_center' cx='20' cy='26' r='2'/>
    </g>
  </svg>

export default SVGMenuIcon
