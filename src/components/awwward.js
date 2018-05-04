import React from 'react'
import Close from './about/close'

const Awwward = ({awwward, toggleAwwward}) =>
  <div style={{
    opacity: awwward ? 1 : 0,
    transform: awwward ? 'scale(1)' : 'scale(0)'
  }} className='Awwward transitions'>
    <style jsx>{`
      .Awwward {
        position: absolute;
        width: calc(100% - 60px);
        height: 100%;
        text-align: center;
        padding: 30px;
        background-color: white;
        z-index: 12;
      }
      .Title {
        font-size: 66px;
        color: #1a2432;
        margin-top: 60px;
        margin-bottom: 15px;
        background: #222 -webkit-gradient(linear, left top, right top, from(#222), to(#222), color-stop(0.5, #fff)) 0 0 no-repeat;
        -webkit-background-size: 125px;

        color: rgba(255, 255, 255, 0.1);
        -webkit-background-clip: text;

        -webkit-animation-name: shine;
        -webkit-animation-duration: 5s;
        -webkit-animation-iteration-count: infinite;
      }
      .Category_wrapper {
        text-transform: uppercase;
        font-size: 14px;
        line-height: 24px;
        color: #1a2432;
        letter-spacing: 0.7px;
        margin: auto;
        margin-top: 15px;
        display: inline-block;
        cursor: pointer;
        text-decoration: none;
      }
      .Awwward_link {
        font-size: 16px;
        line-height: 32px;
        color: #a8adb9;
        display: block;
      }
      .Line {
        width: 100%;
        height: 4px;
        background-color: #cacfde;
      }
      .Category_wrapper:hover .Line {
        background-color: inherit;
        background-image: linear-gradient(to right, #911c8e 0%, #61d7ff 100%);
      }

    `}</style>
    <Lines />
    <h3 className='Title playfairdisplay_black'>Recognition & Awards</h3>
    <a target='_blank' href='https://www.awwwards.com/sites/mat-serra-design' className='Category_wrapper futuralt_bold'>
      Awwwards
      <div className='Line transitions' />
    </a>
    <Close toggleOpen={toggleAwwward} zIndex={12} color='#abb0bc' />
    <div className='Category'>
      <div className='Awwward_link futuralt_book transitions'>Site of the day nomination - Avril 2018</div>
      <div className='Awwward_link futuralt_book transitions'>Honorable Mention - 10 Avril 2018</div>
      <div className='Awwward_link futuralt_book transitions'>User Approved - 10 Avril 2018</div>
    </div>
    <a target='_blank' href='http://www.csswinner.com/details/mat-serra-design/12491' className='Category_wrapper futuralt_bold'>
      CSS WINNER
      <div className='Line transitions' />
    </a>
    <div className='Category'>
      <div className='Awwward_link futuralt_book transitions'>Site of the day - 3 avril 2018</div>
    </div>
    <a target='_blank' href='https://www.cssdesignawards.com/sites/mat-serra-design/32691/' className='Category_wrapper futuralt_bold'>
      CSS DESIGN AWARDS
      <div className='Line transitions' />
    </a>
    <div className='Category'>
      <div className='Awwward_link futuralt_book transitions'>Site of the day nomination - Avril 2018</div>
      <div className='Awwward_link futuralt_book transitions'>UI Design Award - 12 avril 2018</div>
      <div className='Awwward_link futuralt_book transitions'>UX Design Award - 12 avril 2018</div>
      <div className='Awwward_link futuralt_book transitions'>Innovation Award - 12 avril 2018</div>
    </div>
    <a target='_blank' href='https://www.csslight.com/website/23157/Mat-Serra-Design' className='Category_wrapper futuralt_bold'>
      CSS light
      <div className='Line transitions' />
    </a>
    <div className='Category'>
      <div className='Awwward_link futuralt_book transitions'>Featured of the day - 13 avril 2018</div>
    </div>
    <a target='_blank' href='https://www.designnominees.com/sites/mat-serra-design' className='Category_wrapper futuralt_bold'>
      Design nominees
      <div className='Line transitions' />
    </a>
    <div className='Category'>
      <div className='Awwward_link futuralt_book transitions'>Site of the day - 9 avril 2018</div>
    </div>
  </div>

const Lines = ({ isMobile }) =>
  <div className='Lines'>
    <style jsx>{`
      .Lines {
        z-index: ${isMobile ? 11 : -1};
        position: absolute;
        height: 200%;
      }
      .Line {
        width: 1px;
        background-color: rgba(128,128,128,0.2);
        height: 100%
        position: fixed;
        top: 0;
        z-index: 2;
        height: 200%;
      }
      @media screen and (max-width: 1000px) {
        .Line_1 { left: 25%!important;}
        .Line_2 { left: 50%!important;}
        .Line_3 { left: 75%!important;}
        .Line_4 { display: none;}
      }
      @media screen and (max-width: 750px) {
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


export default Awwward

