const controls = {
    left:document.querySelector(".slider__control--left"),
    right:document.querySelector(".slider__control--right"),
    index:0
}
const slider = [...document.querySelectorAll(".slider__container")];

//logic

controls.left.addEventListener("click",()=>{
    if(controls.index === 0){
        slider[controls.index].classList.add("hidden");
        slider[slider.length -1].classList.remove("hidden");
        controls.index = slider.length -1;
    }else{
        slider[controls.index].classList.add("hidden");
        slider[controls.index -1].classList.remove("hidden");
        controls.index--;
    }
})
controls.right.addEventListener("click",()=>{
    if(controls.index === slider.length - 1){
        slider[controls.index].classList.add("hidden");
        slider[0].classList.remove("hidden");
        controls.index = 0;
    }else{
        slider[controls.index].classList.add("hidden");
        slider[controls.index +1].classList.remove("hidden");
        controls.index++;
    }
})