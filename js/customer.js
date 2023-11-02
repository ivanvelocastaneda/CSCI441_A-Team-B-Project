// Reviews section slides js
let slides = document.querySelectorAll(".crd");
let count = 0;
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
function myFun() {
  slides.forEach(function (curVal) {
    curVal.style.transform = `translateX(-${count * 100}%)`;
  });
}
// Sets an interval on the reviews section to change to a different reviewer
setInterval(function () {
  count++;
  if (count == slides.length) {
    count = 0;
  }
  myFun();
}, 2000);

// Login and sign up js
//hide and show password
const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link");
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".password");
    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    });
  });
});
// toogle between sign up and login pages
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // preventing form from submitting
    forms.classList.toggle("show-signup");
  });
});

// let user = document.getElementById("user");
// let logBtn = document.getElementById("logBtn");
// user.addEventListener("click", function () {
//   document.querySelector(".loginPage").classList.toggle("active1");
// });

// logBtn.addEventListener("click", function () {
//   let email = document.getElementById("email");
//   let pass = document.getElementById("pass");

//   if (email.value == "" && pass.value == "") {
//     alert("Fill in Details");
//   } else {
//     alert("You logged IN!");
//     document.querySelector(".loginPage").style.display = "none";
//   }
// });

// let bar = document.getElementById("bar");
// bar.addEventListener("click", function () {
//   document.querySelector("ul").classList.toggle("showData");
// });
