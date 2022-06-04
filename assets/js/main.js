const header = document.querySelector('.header--inner');
const sidebar = document.querySelector('.sidebar');
const navToggleHeader = document.querySelector('.navtoggle-header')
const navToggleSidebar = document.querySelector('.navtoggle-sidebar')
const navLinkHeader = document.querySelectorAll('.header--link') 
const navLinkSidebar = document.querySelectorAll('.sidebar--nav--item') 

// header
navToggleHeader.addEventListener('click', () => {
    header.classList.toggle('show-navbar')

})
navLinkHeader.forEach((item) => {
    item.addEventListener('click',()=>{
        header.classList.remove('show-navbar')
    })
})


// sidebar
navToggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar')
    navToggleSidebar.classList.toggle('show-sidebar')
})

navLinkSidebar.forEach((item) => {
    item.addEventListener('click',()=>{
        sidebar.classList.remove('show-sidebar')
        navToggleSidebar.classList.remove('show-sidebar')
    })
})
// close navbar and sidebar with esc key
window.addEventListener('keyup',(e) => {
    if (e.key === "Escape"){
        header.classList.remove('show-navbar')
        sidebar.classList.remove('show-sidebar')
        navToggleSidebar.classList.remove('show-sidebar')

    }
})