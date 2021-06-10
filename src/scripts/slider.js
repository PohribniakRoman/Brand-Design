const controls = {
  left: document.querySelector(".slider__control--left"),
  right: document.querySelector(".slider__control--right"),
};
let index = 0;

const len = document.querySelectorAll(".slider__container").length;
const slider = document.querySelector(".slider__container");
slider.style.marginLeft = "0%";
//logic

controls.left.addEventListener("click", () => {
  if (index === 0) {
    index = len-1;
    slider.style.marginLeft = `-${(index) * 100}%`;
  } else {
    index--;
    slider.style.marginLeft = `-${index * 100}%`;
  }
});
controls.right.addEventListener("click", () => {
  if (index === len - 1) {
    slider.style.marginLeft = "0";
    index = 0;
  } else {
    index++;
    slider.style.marginLeft = `-${index * 100}%`;
  }
});
