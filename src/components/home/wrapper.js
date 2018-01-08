// src/componentqs/home/wrapper.js
const WhiteBorderWrapper = ({ children }) =>
  <div className='Container_white_borders'>
    <style jsx>{`
      div {
        width: calc(100% - 20px);
        height: calc(100% - 20px);
        border: 10px solid white;
        position: relative;
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
      }
    `}</style>
    {children}
  </div>

export default WhiteBorderWrapper
