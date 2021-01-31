const showNav = document.getElementById('main-nav');
const menu = document.getElementById('menu-botom');
const navDisplayed = document.getElementById("nav_list")

const bodyBlock = document.getElementById("toblock")



const activeTogle = () => {
  'use strict';
  showNav.classList.toggle('toggle-active');
  bodyBlock.classList.toggle('bodyblockScroll');

}

menu.addEventListener('click',
  activeTogle
);


navDisplayed.addEventListener('click', (e) => {  
  if (e.target.classList[0] != 'header-main__link') {
    // console.log(e.target.textContent)  
    activeTogle()
  }

})
