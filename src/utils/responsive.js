export const responsive = (props) => {
  if (window && window.innerWidth <= 750) {
    console.log('props.base', props.base)
    console.log('props.mobile', props.mobile)
    console.log('{...props.base, ...props.mobile}', {...props.base, ...props.mobile})
    return {...props.base, ...props.mobile}
  } else if (window && window.innerWidth <= 1100) {
    return {...props.tablet, ...props.base}
  } else {
    return props.base
  }
}
