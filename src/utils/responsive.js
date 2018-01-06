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

export const getResponsiveDirectory = () => {
  if(window.innerWidth > 1400 || (window.innerWidth > 750 && isRetina()))
    return 'desktop-2800'
  else if(window.innerWidth > 750)
    return 'desktop-1400'
  else if(window.innerWidth > 400 && isRetina())
    return 'mobile-1400'
  else
    return 'mobile-720'
}

export const isMobile = () =>
  window.innerWidth <= 750

