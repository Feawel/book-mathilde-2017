// src/componentqs/projects/ornikar/social.js
const Social = () => (
  <div className='Social'>
   <style jsx>{`
      img {
        width: 16px;
      }
      a:hover {
        opacity: 0.6;
      }
      .Social {
        position: relative;
        width: 100%;
        display: inline-block;
        margin: auto;
        color: #abb0bc;
      }
      .Social_inner_container {
        width: 100px;
      }
      a {
        margin-right: 25px;
        margin-top: 40px;
      }
      a:last-child {
        margin-right: 0;
      }
    `}</style>
    <div className='Social_inner_container'>
      <a className='Link' target='_blank' title='Twitter @Mathilde__Serra' href='/'><img src='/static/pictos/picto-twitter-grey.png' alt={`Mathilde Serra's twitter`} /></a>
      <a className='Link' target='_blank' title='Behance @MathildeSerra' href='/'><img src='/static/pictos/picto-behance-grey.png' alt={`Mathilde Serra's behance`} /></a>
      <a className='Link' target='_blank' title='Dribble @MathildeSerra'href='/'><img src='/static/pictos/picto-dribble-grey.png' alt={`Mathilde Serra's dribble`} /></a>
    </div>
  </div>
)

export default Social
