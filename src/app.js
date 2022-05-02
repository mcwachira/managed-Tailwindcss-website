const menu = document.getElementById('menu')
const menuButton = document.getElementById('menu-btn')

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('open')
    menu.classList.toggle('hidden')
})

