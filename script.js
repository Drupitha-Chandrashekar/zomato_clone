// script.js

function scrollLeft() {
  const box = document.querySelector(".box");
  box.scrollBy({
    left: -250, // Adjust this value to scroll by the width of one image box
    behavior: "smooth",
  });
}

function scrollRight() {
  const box = document.querySelector(".box");
  box.scrollBy({
    left: 250, // Adjust this value to scroll by the width of one image box
    behavior: "smooth",
  });
}
