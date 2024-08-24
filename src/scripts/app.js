const menu = document.querySelector(".menu");
const menuInner = menu.querySelector(".menu__inner");
const menuArrow = menu.querySelector(".menu__arrow");
const menuTitle = menu.querySelector(".menu__title");
const burger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");
const logo = document.querySelector(".logo");

function toggleMenu() {
  menu.classList.toggle("is-active");
  overlay.classList.toggle("is-active");
  logo.classList.toggle("is-active");
}

function showSubMenu(children) {
  subMenu = children.querySelector(".submenu");
  subMenu.classList.add("is-active");
  subMenu.style.animation = "slideLeft .35s ease forwards";
  const menuTitle = children.querySelector("i").parentNode.childNodes[0]
    .textContent;
  menu.querySelector(".menu__title").textContent = menuTitle;
  menu.querySelector(".menu__header").classList.add("is-active");
}

 function hideSubMenu() {
   subMenu.style.animation = "slideRight .35s ease forwards";
   setTimeout(() => {
     subMenu.classList.remove("is-active");
   }, 300);

   menu.querySelector(".menu__title").textContent = "";
   menu.querySelector(".menu__header").classList.remove("is-active");
 }

function toggleSubMenu(e) {
  if (!menu.classList.contains("is-active")) {
    return;
  }
  if (e.target.closest(".menu__dropdown")) {
    const children = e.target.closest(".menu__dropdown");
    showSubMenu(children);
  }
}

window.addEventListener("resize", () => {
  if (window.innerWidth >= 992) {
    if (menu.classList.contains("is-active")) {
      toggleMenu();
    }
  }
});

const searchToggle = document.querySelector(".searchToggle");

searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});

burger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
logo.addEventListener("click", toggleMenu);
menuArrow.addEventListener("click", hideSubMenu);
menuTitle.addEventListener("click", hideSubMenu);
menuInner.addEventListener("click", toggleSubMenu);

window.addEventListener("scroll", function() {
	var header = document.querySelector(".header");
	header.classList.toggle("sticky", window.scrollY > 0);
})

// Carregamento do site
  let sliderDestaques = document.querySelectorAll(".slider__destaques-loading");
  let swiperMovies = document.querySelectorAll(".swiperPosterMovies");
  let sliderPages = document.querySelectorAll(".sliderMoviePages");
  let cardsMovies = document.querySelectorAll(".cardsMoviePoster");
  let loading = document.querySelectorAll(".spinner__loading");
  
  window.addEventListener('load', () => {
      sliderDestaques.forEach(item => {
          item.classList.remove("slider__destaques-loading")
      })
      swiperMovies.forEach(item => {
          item.classList.remove("swiperPosterMovies")
      })
      sliderPages.forEach(item => {
          item.classList.remove("sliderMoviePages")
      })
      cardsMovies.forEach(item => {
          item.classList.remove("cardsMoviePoster")
      })
      loading.forEach(item => {
          item.classList.remove("spinner__loading")
      })
  });