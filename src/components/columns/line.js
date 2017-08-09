const Line = ({ left, width, opacity }) =>
  <div style={{ left, width, opacity }} className='Line transitions'>
    <style jsx>{`
      .Line {
        background-color: white;
        height: 100%;
        position: absolute;
        top: 0;
        z-index: 9;
      }
    `}</style>
  </div>

export default Line