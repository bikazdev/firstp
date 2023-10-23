const home = document.querySelector(".home");
const btnSignUp = document.querySelector(".btnSignUp");
const btnLogin = document.querySelector(".btnLogin");
const menu = document.querySelector('.x')
const otherMenu = document.querySelector('.otherMenu')
const menuArrow = document.querySelector('.menuArrow')
const container = document.querySelector('.container')

menu.addEventListener('click', function(event) {
  menuArrow.classList.toggle('active')
  otherMenu.classList.toggle('active')
})
