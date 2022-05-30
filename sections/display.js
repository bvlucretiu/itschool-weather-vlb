let scrollToTopButton = document.querySelector(".scroll-to-top");
console.log(scrollToTopButton);

function handleScroll() {
  if (window.scrollY > 600) {
    console.log(">600");
  } else if (window.scrollY < 600) {
    console.log("<600");
  }
  if (window.scrollY > 600) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
}
function handleClick() {
  // const scrollObject = { top:0, left:100, behavior: "smooth" };
  // window.scrollTo( scrollObject );
  window.scrollTo({ top: 0, left: 100, behavior: "smooth" });
}

window.addEventListener("scroll", handleScroll);

scrollToTopButton.addEventListener("click", handleClick);
