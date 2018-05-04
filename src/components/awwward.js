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
      }
      .Awwward_link {
        font-size: 16px;
        line-height: 32px;
        color: #a8adb9;
        display: block;
        text-decoration: none;
      }
      .Awwward_link:hover {
        text-decoration: underline;
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
    <h3 className='Title playfairdisplay_black'>Recognition & Awards</h3>
    <div className='Category_wrapper futuralt_bold'>
      Awwwards
      <div className='Line transitions' />
    </div>
    <Close toggleOpen={toggleAwwward} zIndex={12} color='#abb0bc' />
    <div className='Category'>
      <a target='_blank' href='https://www.awwwards.com/sites/mat-serra-design' className='Awwward_link futuralt_book transitions'>Site of the day nomination - Avril 2018</a>
      <a target='_blank' href='https://www.awwwards.com/sites/mat-serra-design' className='Awwward_link futuralt_book transitions'>Honorable Mention - 10 Avril 2018</a>
      <a target='_blank' href='https://www.awwwards.com/sites/mat-serra-design' className='Awwward_link futuralt_book transitions'>User Approved - 10 Avril 2018</a>
    </div>
    <div className='Category_wrapper futuralt_bold'>CSS WINNER</div>
    <div className='Category'>
      <a target='_blank' href='http://www.csswinner.com/details/mat-serra-design/12491' className='Awwward_link futuralt_book transitions'>Site of the day - 3 avril 2018</a>
    </div>
    <div className='Category_wrapper futuralt_bold'>CSS DESIGN AWARDS</div>
    <div className='Category'>
      <a target='_blank' href='https://www.cssdesignawards.com/sites/mat-serra-design/32691/' className='Awwward_link futuralt_book transitions'>Site of the day nomination - Avril 2018</a>
      <a target='_blank' href='https://www.cssdesignawards.com/sites/mat-serra-design/32691/' className='Awwward_link futuralt_book transitions'>UI Design Award - 12 avril 2018</a>
      <a target='_blank' href='https://www.cssdesignawards.com/sites/mat-serra-design/32691/' className='Awwward_link futuralt_book transitions'>UX Design Award - 12 avril 2018</a>
      <a target='_blank' href='https://www.cssdesignawards.com/sites/mat-serra-design/32691/' className='Awwward_link futuralt_book transitions'>Innovation Award - 12 avril 2018</a>
    </div>
    <div className='Category_wrapper futuralt_bold'>CSS light</div>
    <div className='Category'>
      <a target='_blank' href='https://www.csslight.com/website/23157/Mat-Serra-Design' className='Awwward_link futuralt_book transitions'>Featured of the day - 13 avril 2018</a>
    </div>
    <div className='Category_wrapper futuralt_bold'>Design nominees</div>
    <div className='Category'>
      <a target='_blank' href='https://www.designnominees.com/sites/mat-serra-design' className='Awwward_link futuralt_book transitions'>Site of the day - 9 avril 2018</a>
    </div>
  </div>


export default Awwward

