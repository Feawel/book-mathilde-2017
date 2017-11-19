const Text = () =>
  <div className='About_text_wrapper'>
    <style jsx>{`
      .About_text_wrapper {
        font-family: Futura;
        color: white;
        font-size: 12px;
        font-weight: 100;
        display: inline-block;
        vertical-align: top;
        margin: 60px 0 0 60px;
      }
      .About_text {
        width: 327px;
      }
      .About_text_mobile {
        display: none;
      }
      .About_img_mask_mobile {
        display: none;
      }
      .About_img {
        width: 352px;
      }
      .Description {
        margin-top: 60px;
        opacity: 0.6;
      }
      .Goal {
        margin-top: 20px;
        font-weight: bold;
      }
      .Email {
        font-weight: bold;
        color: #941c91;
        text-transform:uppercase;
        margin-top: 40px;
      }
      @media screen and (max-width: 750px) {
        .About_text_wrapper {
          margin: 80px auto 0 auto;
          text-align: center;
          width: 100%;
        }
        .About_text {
          display: none;
        }
        .About_text_mobile {
          text-align: center;
          width: calc(100% - 60px);
          margin-left: auto;
          margin-right: auto;
          display: block;
          line-height: 26px;
          max-width: 350px;
        }
        .About_img {
          width: 311px;
        }
        .Description {
          margin-top: 40px;
          width: calc(100% - 100px);
        }
        .About_img_mask_mobile {
          position: absolute;
          top: 150px;
          left: 0;
          background-image: linear-gradient(to top, #001732 0%, rgba(0, 23, 50, 0) 100%);
          width: 100%;
          height: 106px;
          display: inline-block;
        }
      }
    `}</style>
    <img className='About_img' src='/static/about/typo-about.svg' />
    <div className='About_img_mask_mobile' />
    <div className='About_text Description'>
      Hello ! I am an artistic director specialized in the realization of website,
      application, and web communication, especially in start-up.  <br />I like to explore other
      forms of creation, such as illustration, typographic creation, video games or
      interactive installations.
    </div>
    <div className='About_text_mobile Description'>
      Hello ! I am an artistic director specialized in the
      realization of website, application, and web
      communication, especially in start-up.
    </div>
    <div className='About_text Goal'>
      I’m looking for challenging design work, if you have a particulary tricky one, no doubt,
      i’m the girl for you !
    </div>
    <div className='About_text_mobile Goal'>
      I’m looking for challenging design work, if you have a particulary tricky one, no doubt,
      i’m the girl for you !
    </div>
    <div className='About_text Email transitions'>mathilde.serra01@gmail.com</div>
    <div className='About_text_mobile Email transitions'>mathilde.serra01@gmail.com</div>
  </div>

export default Text
