const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

const toggleSearch = document.getElementsByClassName('toggle-search')[0]
const searchBar = document.getElementsByClassName('search-bar')[0]

toggleSearch.addEventListener('click', () => {
  searchBar.classList.toggle('active')
});