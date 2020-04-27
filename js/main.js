let landingPage = document.querySelector(".landing-page"),
  gear = document.querySelector(".setting-box .fa-gear"),
  settingBox = document.querySelector(".setting-box"),
  colors = document.querySelectorAll(".setting-container .options ul li"),
  localColor = localStorage.getItem("main-color");
if (localColor !== null) {
  document.documentElement.style.setProperty("--main-color", localColor);
}

gear.onclick = function () {
  settingBox.classList.toggle("slide");
};

colors.forEach((color) => {
  color.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      color.dataset.color
    );

    localStorage.setItem("main-color", color.dataset.color);
  });
});
/***Change Landing page background***/
setInterval(() => {
  let rand = Math.floor(Math.random() * 4);
  landingPage.style.backgroundImage = `url('../img/bg${rand + 1}.jpg')`;
}, 10000);

let next = document.querySelector(".products .slider .next"),
  prev = document.querySelector(".products .slider .prev"),
  slider = document.querySelector(
    ".container .products .slider .slide-container"
  );
/*Previous Slide*/
prev.onclick = function () {
  let LastImg = document.querySelector(
      ".container .products .slider .slide-container div:last-child"
    ),
    images = document.querySelectorAll(
      ".container .products .slider .slide-container .img"
    );
  images.forEach((image) => {
    image.classList.remove("active");
    image.classList.add("transition", "prev-move");
  });
  setTimeout(() => {
    images.forEach((image) => {
      image.classList.remove("transition", "prev-move", "animate");
    });
    slider.prepend(LastImg);
    ActivateCenterSlide();
  }, 300);
};
/*Next Slide*/
next.onclick = function () {
  let firstImg = document.querySelector(
      ".container .products .slider .slide-container div:first-child"
    ),
    images = document.querySelectorAll(
      ".container .products .slider .slide-container .img"
    );
  images.forEach((image) => {
    image.classList.remove("active");
    image.classList.add("transition", "next-move");
  });
  setTimeout(() => {
    images.forEach((image) => {
      image.classList.remove("transition", "next-move", "animate");
    });
    slider.append(firstImg);
    ActivateCenterSlide();
  }, 300);
};

function ActivateCenterSlide() {
  images = document.querySelectorAll(
    ".container .products .slider .slide-container .img"
  );
  (CenterChildNo = Math.ceil(images.length / 2)),
    (CenterChild = document.querySelector(
      `.container .products .slider .slide-container div:nth-child(${CenterChildNo})`
    ));
  CenterChild.classList.add("active", "animate");
}

//Our Team Animate

let TeamCards = document.querySelectorAll(".team .row .col .card"),
  cardOne = TeamCards.item(0),
  cardTwo = TeamCards.item(1);

window.onscroll = function () {
  let windowHeight = window.innerHeight,
    cardOneTopOffset = cardOne.offsetTop,
    cardOneOffestHeight = cardOne.offsetHeight,
    windowScrollTop = window.pageYOffset;

  if (
    windowScrollTop + windowHeight >=
    cardOneTopOffset - cardOneOffestHeight
  ) {
    cardOne.style.setProperty("top", "0");
    cardTwo.style.setProperty("top", "0");
  } else {
    cardOne.style.removeProperty("top");
    cardTwo.style.removeProperty("top");
  }
};

//toggle menu 
let toggleButton = document.querySelector(".header-area button"),
  links = document.querySelector(".header-area .links");

toggleButton.onclick = function () {
  this.classList.toggle("open");
  if (this.classList.contains("open")) {
    links.style.display = "block";
  } else {
    links.removeAttribute("style");
  }
};
