'use strict'

const nav = document.querySelector('nav')
const toggle_open = document.querySelector('.toggle-open')
const toggle_close = document.querySelector('.toggle-close')
const [btn_Left, btn_Right] = [document.querySelector('.left'), document.querySelector('.right')]
const headerImg_Desktop = document.querySelector('.desktop')
const headerImg_Mobile = document.querySelector('.mobile')
const arrBtn = [btn_Left, btn_Right]
const paraScroll = document.querySelector('.scroll-para')
const titleScroll = document.querySelector('.scroll-title')
const title = [
    'Discover innovative ways to decorate',
    'We are available all across the globe',
    'Manufactured with the best materials'
]
const text = [
    "Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.",
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology  to ensure that every product is made as perfect and as consistent as possible. With three decades of  experience in this industry, we understand what customers want for their home and office."
]

// document.addEventListener('DOMContentLoaded', () => {
//     /* window.matchMedia() could be used on load */
//     let resizer = new ResizeObserver(handleResize);
//     resizer.observe(document.querySelector('body'));
//   });

//   function handleResize(entries) {
//     console.log('resize called');
//     if (entries[0].contentRect.width > 800) {
//         headerImg = document.querySelector('.desktop')
//     } else {
//         headerImg = document.querySelector('.mobile')
//     }
//   }

let idx_Img = 1;
arrBtn.forEach(btn=> {
    btn.addEventListener('click', () => {
        if(btn.className === "left") {
            idx_Img--;
            idx_Img = idx_Img === 0 ? idx_Img = 3 : idx_Img;
            headerImg_Desktop.src = `images/desktop-image-hero-${idx_Img}.jpg`
            headerImg_Mobile.src = `images/mobile-image-hero-${idx_Img}.jpg`
            titleScroll.textContent = title[idx_Img - 1]
            paraScroll.textContent = text[idx_Img - 1]
        } else {
            idx_Img++;
            idx_Img = idx_Img === 4 ? idx_Img = 1 : idx_Img;
            headerImg_Desktop.src = `images/desktop-image-hero-${idx_Img}.jpg`
            headerImg_Mobile.src = `images/mobile-image-hero-${idx_Img}.jpg`
            titleScroll.textContent = title[idx_Img - 1]
            paraScroll.textContent = text[idx_Img - 1]
        }
    })
})

toggle_open.addEventListener('click', () => {
    nav.classList.add('open')
})
toggle_close.addEventListener('click', () => {
    nav.classList.remove('open')
})