// src/componentqs/about/index.js
const Background = ({ alt, src, hide, zIndex = 1, left = 0 }) => (
  <div style={{zIndex, left, display: hide ? 'none' : '', backgroundImage: `url("${src}")`}} className='Background_picture'>
    <style jsx>{`
      div {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        margin: 0;
        padding: 0;
        background-size: cover;
        overflow: hidden;
      }
      img {
        width: 100%;
      }
    `}</style>
  </div>
)

export default Background