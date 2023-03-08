$(function () {
  wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animate__animated ", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  });
  wow.init();

  const openBtn = document.querySelector(".menu__btn");
  const closeBtn = document.querySelector(".close__btn");
  const menu = document.querySelector(".menu__list");
  const body = document.querySelector("body");

  openBtn.addEventListener("click", () => {
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
      body.classList.remove("hidden");
    } else {
      menu.classList.add("open");
      body.classList.add("hidden");
    }
  });

  closeBtn.addEventListener("click", () => {
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
      body.classList.remove("hidden");
    } else {
      menu.classList.add("open");
      body.classList.add("hidden");
    }
  });

  const scrollUpBtn = document.querySelector(".scroll__up");

  let clientHeight = document.body.scrollHeight;

  window.addEventListener("scroll", function () {
    console.log();

    if (window.pageYOffset / clientHeight > 0.3) {
      scrollUpBtn.classList.add("show");
    } else {
      scrollUpBtn.classList.remove("show");
    }
  });



  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute("href").substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
});
