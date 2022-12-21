
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

start.addEventListener("click", ()=>{
    document.querySelector(".stepper").style.display="none";
    // document.querySelector(".container").innerHTML +="hi "+document.querySelector("#input-username").value
    createQuestion();
})

function createQuestion(){
    document.querySelector(".quetionnaire").classList.remove("hide");
    
}

//create the quiz questions
let questions = [
    {
      question: "Why is AWS more economical than traditional data centers for applications with varying compute workloads?",
      choiceA: "Amazon EC2 costs are billed on a monthly basis",
      choiceB: "Users retain full administrative access to their Amazon EC2 instances.",
      choiceC: "Amazon EC2 instances can be launched on demand when needed",
      choiceD: "Users can permanently run enough instances to handle peak workloads.",
      correct: "C",
    },
    {
      question: "Which AWS service would simplify the migration of a database to AWS?",
      choiceA: "AWS Storage Gateway",
      choiceB: "AWS Database Migration Service (AWS DMS)",
      choiceC: "Amazon EC2",
      choiceD: "Amazon AppStream 2.0",
      correct: "B",
    },
    {
      question: " Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?",
      choiceA: "AWS Config",
      choiceB: "AWS OpsWorks",
      choiceC: "AWS SDK",
      choiceD: "AWS Marketplace",
      correct: "D",
    },
    {
      question:"Which AWS networking service enables a company to create a virtual network within AWS?",
      choiceA: "AWS Config",
      choiceB: "Amazon Route 53",
      choiceC: "AWS Direct Connect",
      choiceD: "Amazon Virtual Private Cloud (Amazon VPC)",
      correct: "D",
    },
    {
      question: "Which of the following is an AWS responsibility under the AWS shared responsibility model?",
      choiceA: "Configuring third-party applications",
      choiceB: "Maintaining physical hardware",
      choiceC: "Securing application access and data",
      choiceD: "Managing guest operating systems",
      correct: "B",
    },
    {
      question: "Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?",
      choiceA: "AWS Regions",
      choiceB: "Edge locations",
      choiceC: "Availability Zones",
      choiceD: "Virtual Private Cloud (VPC)",
      correct: "B",
    },
    {
      question: "How would a system administrator add an additional layer of login security to a user's AWS Management Console?",
      choiceA: "Use Amazon Cloud Directory",
      choiceB: "Audit AWS Identity and Access Management (IAM) roles",
      choiceC: "Enable multi-factor authentication",
      choiceD: "Enable AWS CloudTrail",
      correct: "C",
    },
    {
      question: "Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?",
      choiceA: "AWS Trusted Advisor",
      choiceB: "AWS CloudTrail",
      choiceC: "AWS X-Ray",
      choiceD: "AWS Identity and Access Management (AWS IAM)",
      correct: "B",
    },
    {
      question: "Which service would be used to send alerts based on Amazon CloudWatch alarms?",
      choiceA: "Amazon Simple Notification Service (Amazon SNS)",
      choiceB: "AWS CloudTrail",
      choiceC: "AWS Trusted Advisor",
      choiceD: "Amazon Route 53",
      correct: "A",
    },
    {
      question: "Where can a user find information about prohibited actions on the AWS infrastructure?",
      choiceA: "AWS Trusted Advisor",
      choiceB: "AWS Identity and Access Management (IAM)",
      choiceC: "AWS Billing Console",
      choiceD: "AWS Acceptable Use Policy",
      correct: "D",
    },
];