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

// Use for Ganesha & Typo projects
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


// Use for ornikar campaign project
export const getOrnikarResponsiveDirectory = () => {
  if(window.innerWidth > 2000 || (window.innerWidth > 1000 && isRetina()))
    return '3000'
  if(window.innerWidth > 1400 || (window.innerWidth > 750 && isRetina()))
    return '2000'
  else if(window.innerWidth > 750)
    return '1200'
  else
    return 'mobile'
}

// Use for project homepage
export const getBackgroundResponsiveDirectory = () => {
  if(window.innerWidth < 750) {// mobile
    return 'mobile-828x1472'
  }
  else if(window.innerWidth > 750 && window.innerWidth < 1100 && window.innerHeight > 750) { // tablet
    if(window.innerWidth > window.innerHeight) return 'tablet-2048x1536'
    else return 'tablet-1600x2560'
  }
  else if(window.innerWidth < 1300 && !isRetina()) { // no retina small desktop
    return 'desktop-1280x720'
  }
  else { // retina device
    if(window.innerWidth < 1500) return 'desktop-2000x1150'
    else return 'desktop-3000x1700'
  }
}

export const DEVICE_MOBILE = 'mobile'
export const DEVICE_TABLET = 'tablet'
export const DEVICE_DESKTOP = 'desktop'

export const isMobile = () =>
  window.innerWidth <= 750

export const isTablet = () =>
  window.innerWidth > 750 && window.innerWidth <= 1000

export const getDevice = () =>
  isMobile ? DEVICE_MOBILE : (isTablet ? DEVICE_TABLET : DEVICE_DESKTOP)

