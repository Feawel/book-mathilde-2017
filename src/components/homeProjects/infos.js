// src/componentqs/homeProjects/infos.js
const Infos = ({ title, problematic, number, tags }) => (
  <div className='Project_infos'>
    <style jsx>{`
      div {
        color: white;
      }
      h2 {
        color: white;
        font-size: 66px;
        font-family: 'Playfair Display';
        font-weight: 900;
        margin: 0;
      }
      .Project_infos {
        width: 100%;
        margin: auto;
        display: inline-block;
        text-align: center;
        position: absolute;
        top: calc(50% - 256px);
      }
      .Project_infos_problematic {
        font-size: 16px;
        font-family: Futura;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-bottom: 30px;
        color: #94eced;
        line-height: 30px;
      }
      .Project_infos_tags {
        font-family: 'Playfair Display';
        font-weight: 700;
        font-size: 12px;
      }
      .Tag {
        font-style: italic;
      }
      .Dot {
        padding: 0 20px;
      }
      .Line {
        width: 40px;
        height: 4px;
        background-color: #94eced;
        margin: 37px auto 20px auto;
      }
      object svg {
        fill: white;
      }
    `}</style>
    <object
      data={`/static/home-projects/number/${number}.svg`}
      type='image/svg+xml'
      className='Project_infos_number'
      height='70'>
    </object>
    <div className='Line' />
    <h2 className='Project_infos_title'>{title}</h2>
    <p className='Project_infos_problematic' dangerouslySetInnerHTML={{ __html: problematic }}/>
    <div className='Project_infos_tags'>
      <span className='Tag'>User Interface</span>
      <span className='Dot'>•</span>
      <span className='Tag'>User Experience</span>
      <span className='Dot' >•</span>
      <span className='Tag'>Illustration</span>
    </div>
  </div>
)

export default Infos
