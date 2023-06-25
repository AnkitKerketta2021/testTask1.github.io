//? =========== ExploreSection Card Button Change Color On Hover LOGIC ===========

const cardBtn = document.querySelectorAll(
  ".exploreSection__gallery_cards-button"
);
const cardBtnTxt = document.querySelectorAll(
  ".exploreSection__gallery_cards-button button"
);

cardBtn.forEach((item, index) => {
  item.addEventListener("mouseenter", (e) => {
    e.target.style.color = "#ffffff";
    e.target.style.transition = "0.3s";
    cardBtnTxt[index].style.color = "#ffffff";
    cardBtnTxt[index].style.transition = "0.6s";
  });
  item.addEventListener("mouseleave", (e) => {
    e.target.style.color = "#003057";
    e.target.style.transition = "0.3s";
    cardBtnTxt[index].style.color = "#003057";
    cardBtnTxt[index].style.transition = "0.6s";
  });
});

// ? =========== Desktop Drop-Down Show and Hide LOGIC ===========
let enter = false;
const desktopDropdown = document.querySelector(".desktopDropdown");
const navIcons = document.querySelectorAll(
  ".navbar__rightSection_navList-items"
);
navIcons.forEach((icon, index) => {
  icon.addEventListener("mouseenter", (e) => {
    desktopDropdown.style.display = "flex";
    enter = true;
  });

  icon.addEventListener("mouseleave", (e) => {
    enter = false;
    desktopDropdown.addEventListener("mouseenter", (e) => {
      enter = true;
      desktopDropdown.style.display = "flex";
      desktopDropdown.style.display = "flex";
    });

    desktopDropdown.addEventListener("mouseleave", (e) => {
      enter = false;
      desktopDropdown.style.display = "none";
      desktopDropdown.style.display = "none";
    });

    setTimeout(() => {
      if (enter) {
        desktopDropdown.style.display = "flex";
      } else {
        desktopDropdown.style.display = "none";
      }
    }, 1000);
  });
});

// ? =========== Toggle Menu close Button LOGIC ===========
const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const dropDown = document.querySelector(".mobileDropdown");

openBtn.addEventListener("click", (e) => {
  openBtn.style.display = "none";
  closeBtn.style.display = "block";
  dropDown.style.display = "block";
});

closeBtn.addEventListener("click", (e) => {
  closeBtn.style.display = "none";
  dropDown.style.display = "none";
  openBtn.style.display = "block";
});

(function () {
  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;

  function displayWindowSize() {
    let myWidth = window.innerWidth;
    myWidth > 1000 ? (dropDown.style.display = "none") : false;
  }
})();
