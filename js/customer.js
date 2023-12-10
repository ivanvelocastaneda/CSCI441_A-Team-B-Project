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


