const buttons = document.querySelectorAll('.tab-btn')
const newsItems = document.querySelectorAll('.news-item')

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter')

    // Show all news items initially
    newsItems.forEach((item) => {
      item.style.display = 'block'
    })

    // Hide news items that don't match the filter
    if (filter !== 'all') {
      newsItems.forEach((item) => {
        const category = item.getAttribute('data-category')
        if (category !== filter) {
          item.style.display = 'none'
        }
      })
    }
  })
})

document.addEventListener('DOMContentLoaded', function () {
  const paragraphs = document.querySelectorAll('.toggle-paragraph')
  paragraphs.forEach((paragraph) => {
    const words = paragraph.textContent
      .split(' ')
      .filter((word) => word.trim() !== '')
    const wordCount = words.length
    if (wordCount > 20) {
      const truncatedText = words.slice(0, 20).join(' ') + '...'
      paragraph.textContent = truncatedText
    }
  })
})

// Getting the search parameters from the current URL
document.addEventListener('DOMContentLoaded', function () {
  // Checking if param1 exists in localStorage
  const storedParam1 = localStorage.getItem('param1')

  // Getting the search parameters from the current URL
  const searchParams = new URLSearchParams(window.location.search)

  // Getting the value of param1
  const param1Value = searchParams.get('param1')

  // Selecting the menu items
  const loginLink = document.querySelector('a.login')
  const getStartedLink = document.querySelector('a.get-started')
  const dashboard = document.getElementById('dashboard')
  const phoneLogin = document.getElementById('dashboard-go')
  const menuHeader = document.getElementById('menu-header-nav')

  // Hide the dashboard link by default
  dashboard.style.display = 'none'

  // If param1 exists in localStorage or URL params, show the dashboard link
  if (storedParam1 || param1Value) {
    dashboard.style.display = 'block'
    phoneLogin.style.display = 'block'
  } else {
    // If neither param1 exists in localStorage nor in URL params, show login and get started links
    loginLink.style.display = 'block'
    getStartedLink.style.display = 'block'
  }

  // If param1 exists in localStorage, remove login and get started links
  if (storedParam1) {
    loginLink.parentNode.style.display = 'none'
    getStartedLink.parentNode.style.display = 'none'
    menuHeader.style.display = 'none'
  }

  // If param1 exists in URL params, store it in localStorage and then remove login and get started links
  if (param1Value) {
    localStorage.setItem('param1', param1Value)
    loginLink.parentNode.style.display = 'none'
    getStartedLink.parentNode.style.display = 'none'
    menuHeader.style.display = 'none'
  }
  const newUrl = window.location.href.split('?')[0]
  window.history.replaceState({}, document.title, newUrl)
})

// Menu toggle
const toggleButton = document.querySelector('.hamburger-icon')
const menu = document.getElementById('menu')

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('active')
})

// Modal Toggle
const login = document.getElementById('login')
const loginModal = document.getElementById('login-modal')
const closeModal = document.getElementById('cross')

//Latest news tab

document.addEventListener('DOMContentLoaded', function () {
  let buttons = document.querySelectorAll('.tab-btn')
  console.log(buttons)

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      console.log('Its working')
      // Remove 'active' class from all buttons
      buttons.forEach(function (btn) {
        btn.classList.remove('active')
      })
      // Add 'active' class to the clicked button
      button.classList.add('active')
    })
  })
})

const dropdownIcons = document.querySelectorAll('.drop-down')
const dropdownContents = document.querySelectorAll('.dropdown-content')

dropdownIcons.forEach((icon, index) => {
  icon.addEventListener('click', () => {
    // Close all dropdowns
    dropdownContents.forEach((content, i) => {
      if (i !== index) {
        content.classList.remove('show-link-dropdown')
      }
    })

    // Toggle the clicked dropdown
    dropdownContents[index].classList.toggle('show-link-dropdown')
  })
})

const navbar = document.querySelector('header')
const threshold = 100 // Threshold when the navbar becomes sticky (in pixels)

window.addEventListener('scroll', () => {
  if (window.scrollY >= threshold) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky')
  }
})

const accordions = document.querySelectorAll('.accordion')

let activeParagraph = null

function toggleParagraph(event) {
  const paragraph = event.target.nextElementSibling

  if (paragraph === activeParagraph) {
    // If it's the active paragraph, close it
    paragraph.classList.remove('accordion-active')
    activeParagraph = null
  } else {
    // Close the currently active paragraph (if any)
    if (activeParagraph) {
      activeParagraph.classList.remove('accordion-active')
    }

    // Open the clicked paragraph
    paragraph.classList.add('accordion-active')
    activeParagraph = paragraph
  }
}

accordions.forEach((accordion) => {
  accordion.addEventListener('click', toggleParagraph)
})
document.getElementById('seeMore').addEventListener('click', function () {
  var hiddenContent = document.getElementById('hiddenContent')
  if (hiddenContent.style.display === 'none') {
    hiddenContent.style.display = 'block'
    document.getElementById('seeMore').textContent = 'See less'
  } else {
    hiddenContent.style.display = 'none'
    document.getElementById('seeMore').textContent = 'See more'
  }
})

document.addEventListener('DOMContentLoaded', function () {
  // Add 'loader' class to body
  document.body.classList.add('loader')
})

window.addEventListener('load', function () {
  // When the page is fully loaded, remove 'loader' class from body
  document.body.classList.remove('loader')
  // Remove the wrapper div
  var loaderWrapper = document.getElementById('loader-wrapper')
  if (loaderWrapper) {
    loaderWrapper.parentNode.removeChild(loaderWrapper)
  }
  // Hide the loading spinner
  document.getElementById('loading-spinner').classList.add('hide-spinner')
})
