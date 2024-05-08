let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function (){
    navbar.classList.toggle("active");
});

window.onscroll = () => {
  navbar.classList.remove("active");
};

myButton.addEventListener("click", function () {
  myPopup.classList.add("show");
});
closePopup.addEventListener("click", function () {
  myPopup.classList.remove("show");
});
window.addEventListener("click", function (event) {
  if (event.target == myPopup) {
      myPopup.classList.remove("show");
  }
});

myButton2.addEventListener("click", function () {
  myPopup2.classList.add("show");
});
closePopup2.addEventListener("click", function () {
  myPopup2.classList.remove("show");
});
window.addEventListener("click", function (event) {
  if (event.target == myPopup2) {
      myPopup2.classList.remove("show");
  }
});

myButton3.addEventListener("click", function () {
  myPopup3.classList.add("show");
});
closePopup3.addEventListener("click", function () {
  myPopup3.classList.remove("show");
});
window.addEventListener("click", function (event) {
  if (event.target == myPopup3) {
      myPopup3.classList.remove("show");
  }
});

myButton4.addEventListener("click", function () {
  myPopup4.classList.add("show");
});
closePopup4.addEventListener("click", function () {
  myPopup4.classList.remove("show");
});
window.addEventListener("click", function (event) {
  if (event.target == myPopup4) {
      myPopup4.classList.remove("show");
  }
});

myButton5.addEventListener("click", function () {
  myPopup5.classList.add("show");
});
closePopup5.addEventListener("click", function () {
  myPopup5.classList.remove("show");
});
window.addEventListener("click", function (event) {
  if (event.target == myPopup5) {
      myPopup5.classList.remove("show");
  }
});

myButton6.addEventListener("click", function () {
  myPopup6.classList.add("show");
});
closePopup6.addEventListener("click", function () {
  myPopup6.classList.remove("show");
});
window.addEventListener("click", function (event) {
  if (event.target == myPopup6) {
      myPopup6.classList.remove("show");
  }
});

myButton7.addEventListener("click", function () {
  myPopup7.classList.add("show");
});
closePopup7.addEventListener("click", function () {
  myPopup7.classList.remove("show");
});
window.addEventListener("click", function (event) {
  if (event.target == myPopup5) {
      myPopup7.classList.remove("show");
  }
});

myButton8.addEventListener("click", function () {
  myPopup8.classList.add("show");
});
closePopup8.addEventListener("click", function () {
  myPopup8.classList.remove("show");
});
window.addEventListener("click", function (event) {
  if (event.target == myPopup5) {
      myPopup8.classList.remove("show");
  }
});

myButton9.addEventListener("click", function () {
  myPopup9.classList.add("show");
});
closePopup9.addEventListener("click", function () {
  myPopup9.classList.remove("show");
});
window.addEventListener("click", function (event) {
  if (event.target == myPopup5) {
      myPopup9.classList.remove("show");
  }
});


