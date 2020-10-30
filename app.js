let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".nav-links li");
let img = document.querySelector(".front-cover .city");
let background = document.querySelector("body");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

// IMAGE HOVER

img.addEventListener("mouseleave", () => {
  mouseCursor.classList.remove("img-hover");
  background.classList.remove("background-color");
});
img.addEventListener("mouseover", () => {
  mouseCursor.classList.add("img-hover");
  background.classList.add("background-color");
});

// LOGO HOVER
let logo = document.querySelector(".logo");

logo.addEventListener("mouseleave", () => {
  mouseCursor.classList.remove("link-grow");
  logo.classList.remove("hovered-link");
  background.classList.remove("background-color");
});
logo.addEventListener("mouseover", () => {
  mouseCursor.classList.add("link-grow");
  logo.classList.add("hovered-link");
  background.classList.add("background-color");
});

// LINKS HOVER
navLinks.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    link.classList.remove("hovered-link");
    background.classList.remove("background-color");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    link.classList.add("hovered-link");
    background.classList.add("background-color");
  });
});
