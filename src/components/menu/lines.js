const Lines = () =>
  <div className='Lines'>
    <style jsx>{`
      .Lines {
        z-index: -1;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 10;
      }
      .Line {
        width: 1px;
        background-color: rgba(255,255,255,0.1);
        height: 100%
        position: absolute;
        top: 0;
        z-index: 2;
        height: 100%;
      }
      @media screen and (max-width: 1000px) {
        .Line_1 { left: 25%!important;}
        .Line_2 { left: 50%!important;}
        .Line_3 { left: 75%!important;}
        .Line_4 { display: none;}
      }
      @media screen and (max-width: 640px) {
        .Line_1 { left: 33.3%!important;}
        .Line_2 { left: 66.6%!important;}
        .Line_3 { display: none;}
        .Line_4 { display: none;}
      }
    `}</style>
    <div className='Line Line_1' style={{left: '20%'}} />
    <div className='Line Line_2' style={{left: '40%'}} />
    <div className='Line Line_3' style={{left: '60%'}} />
    <div className='Line Line_4' style={{left: '80%'}} />
  </div>

export default Lines
