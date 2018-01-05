export const responsive = (props) => {
  if (window && window.innerWidth <= 750) {
    return {...props.base, ...props.mobile}
  } else if (window && window.innerWidth <= 1100) {
    return {...props.base, ...props.tablet}
  } else {
    return props.base
  }
}

export const isRetina = () =>
  window.devicePixelRatio > 1
