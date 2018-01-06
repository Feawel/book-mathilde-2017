// src/componentqs/about/index.js
const Background = ({ alt, src, hide, zIndex = 1, right = 0, width = '100%' }) => (
  <div style={{zIndex, right, width, display: hide ? 'none' : '', backgroundImage: `url("${src}")`}} className='Background_picture'>
    <style jsx>{`
      div {
        height: 100%;
        top: 0;
        margin: 0;
        padding: 0;
        background-size: cover;
        overflow: hidden;
        position: relative;
        -webkit-transition      : all 1.5s  ;
        -moz-transition       : all 1.5s  ;
        -ms-transition        : all 1.5s  ;
        -o-transition         : all 1.5s  ;
        transition          : all 1.5s  ;
      }
    `}</style>
  </div>
)

export default Background
