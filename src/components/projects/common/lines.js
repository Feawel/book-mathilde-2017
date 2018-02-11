const Lines = () =>
  <div className='Lines'>
    <style jsx>{`
      .Lines {
        z-index: -1;
        position: relative;
        width: calc(100% - 20px);
        border: 10px solid transparent;
        top: 42px;
      }
      .Line {
        width: 1px;
        background-color: rgba(183,183,183,0.4);
        height: 100%
        position: absolute;
        top: 0;
        z-index: 2;
        height: 15000px;
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
