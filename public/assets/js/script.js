
let start     = document.querySelector(".start")
let next      = document.querySelector(".next");
let previous  =  document.querySelector(".previous");
let one       = document.querySelector(".one");
let two       = document.querySelector(".two");
let three     = document.querySelector(".three");
let four      = document.querySelector(".four");
let steps     = document.querySelectorAll(".step");
let iconStep1 = document.querySelector(".icon-step1")
let iconStep2 = document.querySelector(".icon-step2")
let iconStep3 = document.querySelector(".icon-step3")
let iconStep4 = document.querySelector(".icon-step4")

let question = document.querySelector(".quetion")
let reponses = document.querySelector(".reponses")

start.classList.add("hide")
iconStep1.classList.add("color")

progressBar = document.querySelector(".progressBar");
progress = document.querySelector(".progress");


//stepper next
next.addEventListener("click",()=>{
    previous.classList.remove("hide");

    if(!one.classList.contains("hide")){
        steps.forEach(step => { step.classList.add("hide"); });
        two.classList.remove("hide");
        iconStep2.classList.add("color")
        next.classList.add("hide")
        start.classList.remove("hide")
    }
    else if(!two.classList.contains("hide")){
        steps.forEach(step => { step.classList.add("hide"); });
        three.classList.remove("hide");
        iconStep3.classList.add("color")
        previous.classList.add("hide")
        next.classList.add("hide")
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
        next.classList.remove("color3")
        next.innerHTML = "next"
        next.classList.remove("hide")
        previous.classList.add("hide");
        iconStep2.classList.remove("color")
        start.classList.add("hide")
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
        next.classList.remove("hide")
    }
})
// start button (step2)
start.addEventListener("click", ()=>{
      steps.forEach(step => { step.classList.add("hide"); });
        three.classList.remove("hide");
        iconStep3.classList.add("color")
        previous.classList.add("hide")
        next.classList.add("hide")
        start.classList.add("hide")
      createQuestion();
      
})

let indexQst = 0;
// sort array using random order
let shuffledArr = questions.sort(()=> {
  return Math.random() - 0.5;
})

let timeOut;
function createQuestion(){

  clearTimeout(timeOut)

  display(indexQst);
  //determiner le width selon la methode de trois 
  let w = ((indexQst * 100)/(shuffledArr.length-1))
  if(indexQst < shuffledArr.length-1){
    progressBar.style.width= w+"%"
    progress.innerHTML = (indexQst+1)+"/"+shuffledArr.length;
    indexQst++;
  }
  else{
    // sowing step4 (result)
    progressBar.style.width= w+"%"
    steps.forEach(step => { step.classList.add("hide"); });
    four.classList.remove("hide");
    iconStep4.classList.add("color")
  }
}
function display(index){
  question.innerHTML = shuffledArr[index].question;
  reponses.innerHTML = `<button class="rep reponse1" onclick="createQuestion()">${shuffledArr[index].choiceA}</button>
                        <button class="rep reponse2" onclick="createQuestion()">${shuffledArr[index].choiceB}</button>
                        <button class="rep reponse3" onclick="createQuestion()">${shuffledArr[index].choiceC}</button>
                        <button class="rep reponse4" onclick="createQuestion()">${shuffledArr[index].choiceD}</button>`;
  
  timeOut = setTimeout(() => {
    createQuestion()
    console.log("Delayed for 3 second."+index) }, "3000")
}

function countDown(time){
  
}


// document.querySelector(".rep").addEventListener("click",()=>{
//   createQuestion();
// })

