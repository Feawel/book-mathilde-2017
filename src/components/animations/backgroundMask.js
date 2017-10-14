import Background from '../homeProjects/background'

const BackgroundMask = ({ hide, picture1, picture2, maskWidth = '20%', current, animating }) => {
  const zIndex1 = current === 0 ? (animating ? 0 : 1) : (animating ? 1 : 0)
  const zIndex2 = current === 1 ? (animating ? 0 : 1) : (animating ? 1 : 0)
  return (
    <div className='Background_mask_wrapper'>
      <style jsx>{`
        .Background_mask_wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          display:inline-block;
        }
        .Background_mask_picture_wrapper {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
      <div className='Background_mask_picture_wrapper'>
        <BackgroundMaskItem zIndex={zIndex1} picture={picture1} width={current === 0 ? '100%' : (!animating ? '0%' : '100%')}/>
        <BackgroundMaskItem zIndex={zIndex1} right='100%' width={current === 0 ? '200%' : (!animating ? '100%' : '200%')} picture={picture1} />
        <BackgroundMaskItem zIndex={zIndex1} right='200%' width={current === 0 ? '300%' : (!animating ? '200%' : '300%')} picture={picture1} />
        <BackgroundMaskItem zIndex={zIndex1} right='300%' width={current === 0 ? '400%' : (!animating ? '300%' : '400%')} picture={picture1} />
        <BackgroundMaskItem zIndex={zIndex1} right='400%' width={current === 0 ? '500%' : (!animating ? '400%' : '500%')} picture={picture1} />
      </div>

      <div className='Background_mask_picture_wrapper'>
        <BackgroundMaskItem zIndex={zIndex2} picture={picture2} width={current === 1 ? '100%' : (!animating ? '0%' : '100%')} />
        <BackgroundMaskItem zIndex={zIndex2} right='100%' width={current === 1 ? '200%' : (!animating ? '100%' : '200%')} picture={picture2} />
        <BackgroundMaskItem zIndex={zIndex2} right='200%' width={current === 1 ? '300%' : (!animating ? '200%' : '300%')} picture={picture2} />
        <BackgroundMaskItem zIndex={zIndex2} right='300%' width={current === 1 ? '400%' : (!animating ? '300%' : '400%')} picture={picture2} />
        <BackgroundMaskItem zIndex={zIndex2} right='400%' width={current === 1 ? '500%' : (!animating ? '400%' : '500%')} picture={picture2} />
      </div>
    </div>
  )
}


const BackgroundMaskItem = ({right, width, picture, zIndex}) =>
  <div style={{zIndex}} className="Background_mask_item">
    <style jsx>{`
      .Background_mask_item {
        width: 20%;
        max-width: 20%;
        overflow: hidden;
        display:inline-block;
        height: 100%;
        position: relative;
      }
    `}</style>
    <Background width={width} right={right} src={picture.src}  />
  </div>

export default BackgroundMask
