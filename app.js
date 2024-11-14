const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieList[i].querySelector("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click" , () => {
    clickCounter++;
    if (itemNumber - (4 + clickCounter) >= 0) {
      movieList[i].style.transform = `translateX(${
        movieList[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieList[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
   
  });
  
  console.log(movieList[i].querySelectorAll("img").length);
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.movie-list-container,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click",()=>{
    items.forEach(item=>{
      item.classList.toggle("active")
    })
    ball.classList.toggle("active")

})

document.addEventListener("DOMContentLoaded", () => {
  const socialIcons = document.querySelectorAll('.social-icon');

  // Animate social icons on scroll down
  window.addEventListener('scroll', () => {
      const footer = document.getElementById('footer');
      if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
          socialIcons.forEach(icon => {
              icon.classList.add("animate");
          });
      }
  });
});