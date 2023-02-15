// start main slider
const images = document.querySelectorAll(".main .background img");
const smallImages = document.querySelectorAll(".main .background img.small");
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
    if (screen.width < 769) {
      if (img == -1) {
        for (let i = 5; i >= 0; i--) {
          smallImages[i].classList.remove("image-desactive");
        }
        img = 5;
      }
      if (img == 0) {
        smallImages[5].classList.remove("image-desactive");
      }
      smallImages[img].classList.add("image-desactive");
      img--;
    } else {
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
    }
  }, 3000);
}, 3000);
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

// start settings
//open and close
const gear = document.querySelector(".settings-box .gear");
const settingsBox = document.querySelector(".settings-box");
gear.addEventListener("click", () => {
  if (settingsBox.className.includes("active")) localStorage.clear();
  settingsBox.classList.toggle("active");
});
//change colors and fonts
const root = document.querySelector(":root");
const colorsList = document.querySelectorAll(
  ".settings-box .settings .main-list .color-list li"
);
const fontsList = document.querySelectorAll(
  ".settings-box .settings .main-list .font-list li"
);
const fonts = [
  "'Aref Ruqaa Ink', serif",
  "'Roboto Slab', serif",
  "'Open Sans', sans-serif",
];
const fontsParent = fontsList[0].parentNode;
const circlePosition = ["6.5px", "27px", "52px"];
localStorage.setItem("circlePosition", circlePosition[1]);
const colors = ["#3f3fe8", "#9b3de0", "#e63a3a", "#3dab37"];
fontsList.forEach((ele, i) => {
  ele.addEventListener("click", () => {
    // transition effects
    fontsParent.style.setProperty("--point-position", circlePosition[i]);
    // set color on root
    document.documentElement.style.setProperty("--main-font", fonts[i]);
    localStorage.setItem("font", fonts[i]);
  });
});
colorsList.forEach((ele, i) => {
  ele.addEventListener("click", () => {
    // transition effects
    colorsList.forEach((ele) => {
      ele.classList.remove("checked");
    });
    ele.classList.add("checked");
    document.documentElement.style.setProperty("--main-color", colors[i]);
    localStorage.setItem("color", colors[i]);
  });
});
// save on local storage and cancel
const save = document.getElementById("Save");
const cancel = document.getElementById("Cancel");
cancel.addEventListener("click", () => {
  settingsBox.classList.remove("active");
  localStorage.clear();
  document.documentElement.style.removeProperty("--main-font");
  document.documentElement.style.removeProperty("--main-color");
  fontsParent.style.removeProperty("--point-position");
});
save.addEventListener("click", () => {
  settingsBox.classList.remove("active");
});
if (localStorage.length > 0) {
  if (localStorage.getItem("font") !== null) {
    document.documentElement.style.setProperty(
      "--main-font",
      localStorage.getItem("font")
    );
    fontsParent.style.setProperty(
      "--point-position",
      localStorage.getItem("circlePosition")
    );
  }
  if (localStorage.getItem("color") !== null) {
    document.documentElement.style.setProperty(
      "--main-color",
      localStorage.getItem("color")
    );
  }
}
// end settings
// start skills
const skills = document.querySelectorAll(
  "#skills .skills .skill .skill-percent span"
);
const skillsPercent = ["90%", "80%", "70%", "50%", "80%", "95%"];
window.addEventListener("scroll", () => {
  if (window.scrollY > 1000) {
    skills.forEach((element, i) => {
      element.style.setProperty("width", skillsPercent[i]);
    });
  }
});
// end skills
// start gallery
const galleryImages = document.querySelectorAll("#gallery .container img");
const popup = document.querySelector("#gallery .popup");
const popupImg = document.querySelector("#gallery .popup img");
const popupDes = document.querySelector("#gallery .popup .description");
const popupexit = document.querySelector("#gallery .popup i");
galleryImages.forEach((ele, i) => {
  ele.addEventListener("click", () => {
    popupImg.src = `./images/Gallery/${i + 1}.jpg`;
    popupDes.innerHTML = `${ele.alt}`;
    popup.style.display = "flex";
  });
});
popupexit.onclick = () => {
  popup.removeAttribute("style");
};
// end gallery
