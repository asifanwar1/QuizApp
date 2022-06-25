let startbtndiv = document.getElementById("startbtndiv");
let mainDiv = document.getElementById("mainDiv");
let nextbtn = document.getElementById("nextbtn");
let submitbtn = document.getElementById("submitbtn");
let scoreCard = document.getElementById("scoreCard");
let displayScore = document.getElementById("displayScore");
let qNum = document.getElementById("qNum");



let allQuestions = [
    {
        question: "Which operator is used to assign a value to a variable?",
        answer: "=",
        options: [
            "=",
            ">",
            "*",
            "<",
        ]
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answer: "Both head and body section",
        options: [
            "The head section",
            "The body section",
            "Both head and body section",
            "none of  above",
        ]
    },
    {
        question: "What will the following code return: Boolean(10 > 9)",
        answer: "True",
        options: [
            "True",
            "False",
            "Equal",
            "NaN",
        ]
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answer: "alert('Hello World');",
        options: [
            "msgBox('Hello World');",
            "msg('Hello World');",
            "alertBox('Hello World');",
            "alert('Hello World');",
        ]
    },
    {
        question: "How do you call a function named 'myFunction'?",
        answer: "myFunction();",
        options: [
            "call myFunction",
            "call function myFunction",
            "myFunction",
            "myFunction();",
        ]
    },
    {
        question: "How to write an IF statement for if 'i' is NOT equal to 5?",
        answer: "if (i != 5)",
        options: [
            "if(i<>5)",
            "if i <> 5",
            "if i =! 5 then",
            "if (i != 5)",
        ]
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answer: "onclick",
        options: [
            "onmouseover",
            "onclick",
            "onchange",
            "onmouseclick",
        ]
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answer: "var colors = ['red', 'green', 'blue']",
        options: [
            "var colors = red, green, blue",
            "var colors = (red, green, blue)",
            "var colors = {red, green, blue}",
            "var colors = ['red', 'green', 'blue']",
        ]
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        answer: "Math.round (7.25)",
        options: [
            "round (7.25)",
            "rnd (7.25)",
            "Math.round (7.25)",
            "Math.rnd (7.25)",
        ]
    },
    {
        question: "How do you declare a JavaScript variable?",
        answer: "all of the above",
        options: [
            "var number = 1;",
            "let number = 1;",
            "const number = 1;",
            "all of the above",
        ]
    }
];


 


displayQuestion = (e) =>{
    let que = document.getElementById("que");
    let optionAns = document.getElementsByClassName("optionAns");

    que.innerHTML = allQuestions[e].question;

    for(let i = 0; i < optionAns.length; i++){
        optionAns[i].innerHTML = allQuestions[e].options[i];  
    }
     
}




let questionNumCounter = 1;
let score = 0;
let questionCounter = 0;
    
nextbtn.onclick = ()=>{

    questionNumCounter++;
    
    result(questionCounter);
    
    questionCounter ++;
    
    displayQuestion(questionCounter);

    if(questionCounter === 9){
        nextbtn.style.display = "none";
        submitbtn.style.display = "block";
    }
    
    qNum.innerHTML ="Question: " + questionNumCounter;

    let optionAns = document.getElementsByClassName("optionAns");
    for(let i = 0; i < optionAns.length; i++){
    optionAns[i].classList.remove("active");
    }

    
} 




let optionAns = document.getElementsByClassName("optionAns");
for(let i = 0; i < optionAns.length; i++){
    optionAns[i].addEventListener("click", ()=>{
        
    let current = document.getElementsByClassName("active");

    if(current.length > 0){
        current[0].className = current[0].className.replace(" active", "");
    }
    optionAns[i].className += " active";
    
    });
    
    
}






startbtn.onclick = () =>{

    if(mainDiv.style.display === "none"){
        mainDiv.style.display = "block";
    }
    else{
        mainDiv.style.display = "none";
    }

    displayQuestion(0);
    startbtndiv.style.display = "none";   
}





result = (e) =>{
   let optionAns = document.getElementsByClassName("optionAns");

   for(let i = 0; i < optionAns.length; i++){
       if(optionAns[i].classList.contains("active") && optionAns[i].innerHTML == allQuestions[e].answer){
           score++;
       }
   }
   
}




submitbtn.onclick = () =>{

    result(questionCounter);
    scoreCard.style.display = "block";
    displayScore.innerHTML += score + " out of 10";
    mainDiv.style.display = "none";
    
}