/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
nagToggle = document.getElementById("nav-toggle");
nagClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag 很实用，可以参考
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new swiperPopular(".popular__container", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: "auto",
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 48,
    },
  },
});

/*=============== MIXITUP FILTER FEATURED 这里不明白===============*/
let mixerFeatured = mixitup(".featured__content", {
  selectors: {
    target: ".featured__card",
  },
  animation: {
    duration: 300,
  },
});

/* Link active featured 思路：1，拿到全部；2，添加功能-增加去除class；3，添加点击，然后给每个l加上功能*/
const linkFeatured = document.querySelectorAll(".featured__item");

function activeFeatured() {
  linkFeatured.forEach((l) => l.classList.remove("active-featured"));
  this.classList.add("active-featured"); /*this的用法可以学习 */
}
linkFeatured.forEach((l) => l.addEventListener("click", activeFeatured));

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK 有难度但是值得学习===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
  window.addEventListener("scroll", scrollActive);
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});

sr.reveal(
  `.home__title, .popular__container, .features__img, .featured__filters`
);
sr.reveal(`.home__subtitle`, { delay: 500 });
sr.reveal(`.home__elec`, { delay: 600 });
sr.reveal(`.home__img`, { delay: 800 });
sr.reveal(`.home__car-data`, { delay: 900, interval: 100, origin: "bottom" });
sr.reveal(`.home__button`, { delay: 1000, origin: "bottom" });
sr.reveal(`.about__group, .offer__data`, { origin: "left" });
sr.reveal(`.about__data, .offer__img`, { origin: "right" });
sr.reveal(`.features__map`, { delay: 600, origin: "bottom" });
sr.reveal(`.features__card`, { interval: 300 });
sr.reveal(`.featured__card, .logos__content, .footer__content`, {
  interval: 100,
});

/*这段代码是一个用于在页面滚动时更新导航菜单状态的 JavaScript 代码。让我为你解释一下：

const sections = document.querySelectorAll("section[id]");：这行代码通过选择器 "section[id]" 获取文档中所有带有 id 属性的 <section> 元素，并将其存储在名为 sections 的常量中。

function scrollActive() { ... }：这是一个名为 scrollActive 的函数，用于处理页面滚动时的逻辑。

const scrollY = window.pageYOffset;：获取当前页面在垂直方向上滚动的距离，存储在 scrollY 变量中。

sections.forEach((current) => { ... });：使用 forEach 循环遍历所有的 sections。

在循环内部，通过以下代码获取每个 section 的信息：

const sectionHeight = current.offsetHeight;：获取当前 section 的高度。这是因为 offsetHeight 是 DOM 元素属性之一，它返回一个元素的像素高度，包括元素的高度、内边距和边框，但不包括外边距。

在这个上下文中，current 是循环中的当前 section 元素，通过 offsetHeight 属性，它可以得知这个 section 在页面上的实际高度。这是为了后续的逻辑，比如判断当前滚动位置是否在这个 section 可见的范围内，以便在导航菜单中标记相应的链接为活动状态。

const sectionTop = current.offsetTop - 58;：获取当前 section 距离页面顶部的距离，并减去一个固定的值（58），这可能是为了考虑导航栏的高度。
const sectionId = current.getAttribute("id");：获取当前 section 的 id 属性值。
if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { ... } else { ... }：通过比较页面滚动距离和每个 section 的位置信息，判断当前哪个 section 处于可见状态。如果当前 section 可见，则给相应的导航菜单项添加 active-link 类，否则移除该类。

window.addEventListener("scroll", scrollActive);：将 scrollActive 函数添加为滚动事件的监听器，以便在页面滚动时执行相应的逻辑。

总体而言，这段代码的目的是根据页面滚动的位置，动态地在导航菜单中为当前可见的部分添加一个 active-link 类。这通常用于突显用户当前所在的页面部分。*/

/*这段代码使用了一个名为 ScrollReveal 的 JavaScript 库，该库可以帮助创建滚动时的动画效果。下面是对代码的解释：

const sr = ScrollReveal({ ... });：创建了一个 ScrollReveal 实例，并传递了一个配置对象。这个配置对象包含了一些参数，用于定义滚动时的动画效果。

origin: "top"：动画的起始位置是从元素的顶部开始。
distance: "60px"：滚动时元素移动的距离为 60 像素。
duration: 2500：动画的持续时间为 2500 毫秒（2.5 秒）。
delay: 400：动画延迟开始，延迟时间为 400 毫秒。
sr.reveal(...);：通过 reveal 方法应用滚动动画效果到指定的元素或元素集合。每个 sr.reveal 调用都对应一个或一组元素，以及可能有的特定的动画配置。

.home__title, .popular__container, .features__img, .featured__filters：对这些元素应用相同的动画效果。

.home__subtitle, .home__elec, .home__img, .home__car-data, .home__button：对这些元素分别应用不同的动画效果，并设置了不同的延迟时间和起始位置。

.about__group, .offer__data：这两个元素一起应用左侧滚动的动画效果。

.about__data, .offer__img：这两个元素一起应用右侧滚动的动画效果。

.features__map：应用底部滚动的动画效果，并设置了延迟时间。

.features__card：应用了间隔为 300 毫秒的动画效果。

.featured__card, .logos__content, .footer__content：对这些元素分别应用相同的动画效果，设置了间隔为 100 毫秒。

总体来说，这段代码使用 ScrollReveal 库为页面中的不同元素定义了滚动时的动画效果，包括元素的起始位置、移动距离、持续时间、延迟等。这样，当用户滚动页面时，页面中的这些元素将以定义好的方式逐渐显现出来。 */
