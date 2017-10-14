import Background from '../homeProjects/background'

const BackgroundMask = ({ hide, picture1, picture2, width }) =>
  <div className='Down_up_wrapper'>
    <style jsx>{`
    `}</style>
    <Background width={'100%'} {...picture1} zIndex={1} />
    <Background width={typeof width === 'string' ? width.split('%')[0]*2+'%' : width } {...picture2} zIndex={2} />
  </div>

export default BackgroundMask