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
    `}</style>
    <img src='/static/about/typo-about.svg' width='352px' />
    <div className='About_text Description'>
      Hello ! I am an artistic director specialized in the realization of website,
      application, and web communication, especially in start-up.  <br />I like to explore other
      forms of creation, such as illustration, typographic creation, video games or
      interactive installations.
    </div>
    <div className='About_text Goal'>
      I’m looking for challenging design work, if you have a particulary tricky one, no doubt,
      i’m the girl for you !
    </div>
    <div className='About_text Email transitions'>mathilde.serra01@gmail.com</div>
  </div>

export default Text
