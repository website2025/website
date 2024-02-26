/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*=============== MENU SHOW ===============*/
/* VALIDATE IF CONSTANT EXISTS */
if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  })
}

/*=============== MENU HIDDEN ===============*/
/* VALIDATE IF CONSTANT EXISTS */
if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navlink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu click //
  navMenu.classList.remove('show-menu')
}
navlink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
  const header = document.getElementById('header')
  //when the scroll is greater than 50 viewport height, add the blur-header class to the//
  this.scrollY >= 50 ? header.classList.add('blur-header')
                     : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SWIPER FAVORITES ===============*/ 
/*let swiperFavourite = new Swiper('.favourite__swiper', {
  loop: true,
  slidesPerview: 'auto',
  centeredSlides: 'auto',
  grabCursor: true,

  breakpoint:{
    768:{
      slidesPerview: 3,
    }
  }
})*/

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiperFavourite = new Swiper(".favourite__swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },

  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')
  //when the scroll is higher than 350 viewport height, add the //
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                      : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollDown = window.scrollY

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
      sectionClass.classList.add('active-link')
    }else{
      sectionClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
 // reset: true, //Animations repeat
})

sr.reveal('.home__social, .favourite__container, .sponsor__container, .footer')
sr.reveal('.home__title span:nth-child(1)', {origin: 'left', opacity: 1})
sr.reveal('.home__title span:nth-child(3)', {origin: 'right', opacity: 1})
sr.reveal('.home__tooltip, .home__button, .model__button', {origin: 'bottom'})
sr.reveal('.about__data', {origin: 'left'})
sr.reveal('.about__img, .model__tooltip', {origin: 'right'})