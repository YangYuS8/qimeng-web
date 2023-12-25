'use strict'

/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback)
  }
}

/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector('[data-navbar]')
const openBtn = document.querySelector('[open-btn]')
const navTogglers = document.querySelectorAll('[data-nav-toggler]')
const overlay = document.querySelector('[data-overlay]')

const toggleNavbar = function () {
  navbar.classList.toggle('active')
  overlay.classList.toggle('active')
  document.body.classList.toggle('nav-active')
}

addEventOnElements(navTogglers, 'click', toggleNavbar)

/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector('[data-header]')
const link = document.querySelectorAll('[data-link]')
const logo = document.querySelector('[data-logo]')

window.addEventListener('scroll', function () {
  if (window.scrollY > 100) {
    header.classList.add('active')
    openBtn.classList.add('active')
    logo.classList.add('active')
    link.forEach((el) => {
      el.classList.add('active')
    })
  } else {
    header.classList.remove('active')
    openBtn.classList.remove('active')
    logo.classList.remove('active')
    link.forEach((el) => {
      el.classList.remove('active')
    })
  }
})

/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll('[data-reveal]')
const revealDelayElements = document.querySelectorAll('[data-reveal-delay]')

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (
      revealElements[i].getBoundingClientRect().top <
      window.innerHeight / 1.2
    ) {
      revealElements[i].classList.add('revealed')
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay =
    revealDelayElements[i].dataset.revealDelay
}

window.addEventListener('scroll', reveal)
window.addEventListener('load', reveal)

function sendEmail() {
  const name = document.getElementsByName('name')[0].value
  const message = document.getElementsByName('message')[0].value

    const emailLink = `mailto:Kou-sigoto@lspit.co.jp?${
        name ? `subject=${name}` : ''
    }${message ? `&body=${message}` : ''}`;

    window.location.href = emailLink;
}
