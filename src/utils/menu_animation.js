const elem = document.querySelector('#nav-bg'),
      toggleBtn = document.querySelector('#toggle-btn'),
      elemH = elem.getBoundingClientRect().height,
      elemW = elem.getBoundingClientRect().width;

let open = false;
let scale, offsetX, offsetY;

const calculateValues = (() => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  //const cssStyles = getComputedStyle(elem);
  //const offsetValue = Number(cssStyles.getPropertyValue('--offset-value'));
  const offsetValue = Number(getComputedStyle(elem).getPropertyValue('--offset-value'));

  //  Offsets to center the circle
  offsetX = (w/2) - (elemW/2) - offsetValue;
  offsetY = (h/2) - (elemH/2) - offsetValue;

  // Good old pythagoras
  const radius = Math.sqrt((Math.pow(h, 2))+(Math.pow(w, 2)));
  scale = radius/(elemW/2)/2 + .1; // Add '.1' to compensate for Safari sub pixel blur issue
  return scale;
})


const openMenu = () => {
  elem.style.setProperty("--translate-x", `${offsetX}px`);
  elem.style.setProperty("--translate-y", `-${offsetY}px`);
  elem.style.setProperty("--scale", scale);
}
const closeMenu = () => {
  elem.style.setProperty("--scale", 1);
  elem.style.setProperty("--translate-x", 0);
  elem.style.setProperty("--translate-y", 0);
}
const animateMenu = () => {
  open ? openMenu() : closeMenu();
};

const toggleMenu = () => {
  open = !open;
  animateMenu();
  toggleBtn.classList.toggle('shown');
}

const resizeHandler = () => {
  window.requestAnimationFrame(() => {
    calculateValues();
    animateMenu();
  });
}

calculateValues();

//toggleBtn.onclick = toggleMenu;
toggleBtn.addEventListener('click', toggleMenu, false);
window.addEventListener("resize", resizeHandler, false);


<div id="nav-bg" class="btn"></div>
<div id="toggle-btn" class="btn"></div>



/* =========
VARIABLES
========= */
:root {
  --offset-value: 30;
  --btn-size: 60;

  --green: #4ECA78;
}




/* =====================
NAVIGATION BACKGROUND
===================== */
#nav-bg {
  transform-origin: center center;
  transition: transform .3s;
  transform: translate(var(--translate-x), var(--translate-y)) scale(var(--scale));
  will-change: transform;
  pointer-events: none;
}


/* ======
BUTTON
====== */
.btn {
  position: fixed;
  height: calc(var(--btn-size)*1px);
  width: calc(var(--btn-size)*1px);
  bottom: calc((var(--offset-value))*1px);
  left: calc(var(--offset-value)*1px);
  /*left: calc(50% - (var(--btn-size)/2*1px)); if you wish to center it */
  border-radius: 50%;
  background: #fafafa;
  cursor: pointer;
  margin: 0;
  padding: 0 15px;
  border: none;
  z-index: 100;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

#toggle-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--green);
  /*box-shadow: 0 6px 12px rgba(0,0,0,.1);*/
  transition: transform .3s;
}

#toggle-btn.shown:before {
  transform: scale(.6);
  transition: .2s;
}

#toggle-btn:before {
  content: '';
  transition: .2s .2s;
  position: absolute;
  top: 3px;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.1);
  border-radius: inherit;
  filter: blur(5px);
  z-index: -2;
}
#toggle-btn:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: #fafafa;
  z-index: -1;
}



/* Usual suspects */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
}

a,
a:visited,
a:focus,
a:active,
a:link {
  text-decoration: none;
  outline: 0;
}

a {
  color: currentColor;
  transition: .2s ease-in-out;
}

ul {
  padding: 0;
  list-style: none;
}

img {
  vertical-align: middle;
  height: auto;
  width: 100%;
}
