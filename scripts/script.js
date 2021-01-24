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
  activeTogle,
);


navDisplayed.addEventListener('click', (e) => {
  if (e.target.textContent === "Home") {
    // console.log(e.target.textContent)
  } else if (e.target.textContent === "Collection") {
    console.log('aded')
  } else if (e.target.textContent === "About") {
    console.log('aded')
  } else if (e.target.textContent === "Contac") {
    console.log('aded')
  } else {
    activeTogle()
  }

})
