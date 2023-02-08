// start main slider
const images = document.querySelectorAll(".main .background img");
const fields = document.querySelectorAll(".main .fields .field");
fields[0].classList.add("active-field");
let i = 0;
let img = 5;
setTimeout(() => {
  setInterval(() => {
    //fields
    if (i == 5) {
      fields[i].classList.remove("active-field");
      i = -1;
    }
    i++;
    if (i != 0) fields[i - 1].classList.remove("active-field");
    fields[i].classList.add("active-field");
    //images
    if (img == -1) {
      for (let i = 5; i >= 0; i--) {
        images[i].classList.remove("image-desactive");
      }
      img = 5;
    }
    if (img == 0) {
      images[5].classList.remove("image-desactive");
    }
    images[img].classList.add("image-desactive");
    img--;
  }, 3000);
}, 1000);
// end main slider
// star burger
const burgers = document.querySelectorAll(".main .burger i");
const menu = document.querySelector(".main .main-nav ul");
burgers[0].addEventListener("click", () => {
  burgers[0].classList.remove("active-mark");
  burgers[1].classList.add("active-mark");
  menu.classList.toggle("active-menu");
});
burgers[1].addEventListener("click", () => {
  burgers[1].classList.remove("active-mark");
  burgers[0].classList.add("active-mark");
  menu.classList.toggle("active-menu");
});
menu.onclick = () => {
  burgers[1].classList.remove("active-mark");
  burgers[0].classList.add("active-mark");
  menu.classList.toggle("active-menu");
};
// end burger
