const openNavBar = document.getElementById('navbarButton')
const navBar = document.getElementById('mobile-navbar');
const closeNavBar = document.getElementById('closeNavBar')
const navBarLinks = document.querySelectorAll('.mobile-link')

console.log(navBarLinks)

openNavBar.addEventListener('click', () => {
    navBar.style.display = 'flex';
})

closeNavBar.addEventListener('click', () => {
    navBar.style.display = 'none'
})

for (let i = 0; i < navBarLinks.length -1; i++) {
    navBarLinks[i].addEventListener('click', () => {
        navBar.style.display = 'none'
    })
}
