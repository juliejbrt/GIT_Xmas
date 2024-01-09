let nav = document.querySelector("#header");
let menu = document.querySelector("#menu");
let icon = document.querySelector("#navbar i");

icon.addEventListener("click", () => {
  nav.classList.toggle("closed");
});

menu.addEventListener("click", () => {
  nav.classList.toggle("closed");
});

window.addEventListener("scroll", () => {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var logo = document.querySelector(".logo-scroll");
  var icon = document.querySelector(".bi-list-nested");

  if (scrollTop > 0) {
    nav.classList.add("white-header");
    logo.classList.add("logo-scroll-green");
    icon.classList.remove("icon-scroll-white");
  } else {
    nav.classList.remove("white-header");
    logo.classList.remove("logo-scroll-green");
    icon.classList.add("icon-scroll-white");
  }
});