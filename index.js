
const mobileNav= document.getElementById('mobileNav')
const mainMenu= document.getElementById('main-menu')
const closeButton = document.getElementById('closeNav')

mobileNav.addEventListener('click', event => {
  mobileNav.classList.toggle('hidden')
  mobileNav.classList.toggle('absolute')
})
mainMenu.addEventListener('click', event => {
})