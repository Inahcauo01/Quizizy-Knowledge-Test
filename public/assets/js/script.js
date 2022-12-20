
let start = document.querySelector(".start")
let next = document.querySelector(".next");
let previous =  document.querySelector(".previous");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let steps = document.querySelectorAll(".step");
let iconStep1 = document.querySelector(".icon-step1")
let iconStep2 = document.querySelector(".icon-step2")
let iconStep3 = document.querySelector(".icon-step3")
let iconStep4 = document.querySelector(".icon-step4")

start.classList.add("hide")
iconStep1.classList.add("color")
//stepper next
next.addEventListener("click",()=>{
    previous.classList.remove("hide");

    if(!one.classList.contains("hide")){
        steps.forEach(step => { step.classList.add("hide"); });
        two.classList.remove("hide");
        iconStep2.classList.add("color")
    }
    else if(!two.classList.contains("hide")){
        steps.forEach(step => { step.classList.add("hide"); });
        three.classList.remove("hide");
        iconStep3.classList.add("color")
    }
    else if(!three.classList.contains("hide")){
        steps.forEach(step => { step.classList.add("hide"); });
        four.classList.remove("hide");
        iconStep4.classList.add("color")

        next.classList.add("hide");
        start.classList.remove("hide");
    }
})
//stepper previous
previous.addEventListener("click",()=>{

    if(!two.classList.contains("hide")){
        console.log("1")
        steps.forEach(step => { step.classList.add("hide"); });
        one.classList.remove("hide");

        next.classList.remove("hide")
        previous.classList.add("hide");
        iconStep2.classList.remove("color")
    }
    else if(!three.classList.contains("hide")){
        console.log("2")
        steps.forEach(step => { step.classList.add("hide"); });
        two.classList.remove("hide");
        iconStep3.classList.remove("color")
    }
    else if(!four.classList.contains("hide")){
        console.log("3")
        steps.forEach(step => { step.classList.add("hide"); });
        three.classList.remove("hide");
        iconStep4.classList.remove("color")
        
        start.classList.add("hide")
        next.classList.remove("hide")
    }
})