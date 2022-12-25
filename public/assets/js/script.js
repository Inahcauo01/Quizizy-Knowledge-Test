//-------------declaration des variables--------------
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

progressBar  = document.querySelector(".progressBar");
progress     = document.querySelector(".progress");
countdownText= document.querySelector(".countdown")

let scoreText  = document.querySelector(".score")
let correctionC = document.querySelector(".correction-container")
let indexQst = 0;
let score    = 0;
let timeOut;
let timer;
let res = [];

let triche=false;

//--------------------stepper next---------------------
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

//-------------------stepper previous------------------
previous.addEventListener("click",()=>{

    if(!two.classList.contains("hide")){
        // console.log("1")
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
        // console.log("2")
        steps.forEach(step => { step.classList.add("hide"); });
        two.classList.remove("hide");
        iconStep3.classList.remove("color")
    }
    else if(!four.classList.contains("hide")){
        // console.log("3")
        steps.forEach(step => { step.classList.add("hide"); });
        three.classList.remove("hide");
        iconStep4.classList.remove("color")
        next.classList.remove("hide")
    }
})

//------------------start button (step2)---------------
start.addEventListener("click", ()=>{
      steps.forEach(step => { step.classList.add("hide"); });
        three.classList.remove("hide");
        iconStep3.classList.add("color")
        previous.classList.add("hide")
        next.classList.add("hide")
        start.classList.add("hide")
      
      display(0)
      tricher();
      
})

//-----triage du tableau d'une maniére aléatoire-------
let shuffledArr = questions.sort(()=> {
  return Math.random() - 0.5;
})

//-------------verification des questions--------------
function checkQuestion(elm){  
  //index = elm.id
  if(elm.textContent == shuffledArr[elm.id].correct){
    // console.log((elm.id)+" correct");
    score++
  }else{
    res.push((elm.id))
    // console.log((elm.id)+" faux");
  }
  createQuestion()
  console.log("elm.id "+elm.id)
}

//---------creation des questions aleatoires-----------
function createQuestion(){

  clearTimeout(timeOut)
  clearTimeout(timer)
  
  //determiner le width selon la methode de trois 
  let w = ((indexQst * 100)/(shuffledArr.length-1))
  
  if(indexQst < shuffledArr.length-1){
    progressBar.style.width= w+"%"
    progress.innerHTML = (indexQst+1)+"/"+shuffledArr.length;  
    indexQst ++;
    display(indexQst);
  }
  else{
    // showing step4 (result)
    progressBar.style.width= "0%"
    steps.forEach(step => { step.classList.add("hide"); });
    four.classList.remove("hide");
    iconStep4.classList.add("color")
    progress.classList.add("hide")
    countDown(-1)
    scoreText.innerHTML = score;

    if(triche){
      //le cas de tricher (changer la page) lors du test
      correctionC.innerHTML += `
      <img src="assets/images/fail.png" style="width:200px">
      <div style="color:tomato">Vous n'êtes pas respecté les régles de ce quiz !</div>`;
      bgColor(1);
      scoreText.innerHTML = "0";
    }else{
      //le cas normal (n ya pas de triche)
      shuffledArr.forEach((elm,index) =>{   
          correctionC.innerHTML += 
          `<div class="qst-corr">${index+1}) ${elm.question}</div>
          <div class="correction" id="correction-${index}">
            ${elm.justif}
          </div>`;
          res.forEach(element => {
            if(element == index){
              document.querySelector("#correction-"+(index)).classList.add("faux");
            }
          });
      })
    }
  }
}

//---------------affichage des questions---------------
function display(index){
  question.innerHTML = shuffledArr[index].question;
  reponses.innerHTML = `<button class="rep reponse1" id="${index}" onclick="checkQuestion(this)">${shuffledArr[index].choiceA}</button>
                        <button class="rep reponse2" id="${index}" onclick="checkQuestion(this)">${shuffledArr[index].choiceB}</button>
                        <button class="rep reponse3" id="${index}" onclick="checkQuestion(this)">${shuffledArr[index].choiceC}</button>
                        <button class="rep reponse4" id="${index}" onclick="checkQuestion(this)">${shuffledArr[index].choiceD}</button>`;
  
  countDown(5);
  timeOut = setTimeout(() => {
    //le cas de ne pas repondre
    res.push(index)
    createQuestion()}, "5000")
    
}

//------------------compte a rebours-------------------
function countDown(sec){
  if(sec == -1){
    countdownText.innerHTML = "";
    bgColor(0)
    return 0  
  }else
  countdownText.innerHTML = sec+" seconds";
  sec--;

  bgColor(0)

  if(sec<1)       bgColor(1)
  else if(sec<2)  bgColor(2)
  else if(sec<3)  bgColor(3)

    timer = setTimeout(()=>{
      if(sec >= 0){
      countDown(sec)
    }else{
      clearTimeout(timer);
    }
    
    },1000)
    
    
}

//------------background avec couleur (timer)----------
function bgColor(color){
  if(color == 0)
    document.querySelector("body").style.background= "radial-gradient(circle, rgb(220, 225, 255) 0%, rgba(255,255,255,1) 100%)"
  else if(color == 1)
    document.querySelector("body").style.background= "radial-gradient(circle, rgb(255, 200, 200) 0%, rgba(255,255,255,1) 100%)"
  else if(color == 2)
    document.querySelector("body").style.background= "radial-gradient(circle, rgb(243, 208, 218) 0%, rgba(255,255,255,1) 100%)"
  else
    document.querySelector("body").style.background= "radial-gradient(circle, rgb(232, 217, 237) 0%, rgba(255,255,255,1) 100%)"
}

//--------Le cas de tricher (changer la page)----------
function tricher(){
  window.addEventListener('blur', ()=>{
    triche=true
  });
}