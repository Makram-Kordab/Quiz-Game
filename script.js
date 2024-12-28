const questions = [
    {
        question: "Which is largest animal in the world?",
        answers:[
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    }, 
    {
        question: "Which is smallest continent the world?",
        answers:[
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false},
        ]
    }, 
    {
        question: "Which is largest desert in the world?",
        answers:[
            {text: "Kalahari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: false},
            {text: "Antarctica", correct: true},
        ]
    }, 
    {
        question: "Which is smallest country in the world?", 
        answers:[
            {text: "Vatican City", correct: true},
            {text: "Bhutan", correct: false},
            {text: "Nepal", correct: false},
            {text: "Shri Lanka", correct: false},
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            {text: "Paris", correct: true},
            {text: "London", correct: false},
            {text: "Berlin", correct: false},
            {text: "Madrid", correct: false},
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            {text: "Venus", correct: false},
            {text: "Jupiter", correct: false},
            {text: "Mars", correct: true},
            {text: "Saturn", correct: false},
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            {text: "Arctic Ocean", correct: false},
            {text: "Pacific Ocean", correct: true},
            {text: "Atlantic Ocean", correct: false},
            {text: "Indian Ocean", correct: false},
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            {text: "Charles Dickens", correct: false},
            {text: "Jane Austen", correct: false},
            {text: "Mark Twain", correct: false},
            {text: "William Shakespeare", correct: true},
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            {text: "H2O", correct: true},
            {text: "CO2", correct: false},
            {text: "O2", correct: false},
            {text: "H2", correct: false},
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            {text: "Japan", correct: true},
            {text: "China", correct: false},
            {text: "South Korea", correct: false},
            {text: "Thailand", correct: false},
        ]
    },
    {
        question: "Which is the longest river in the world?",
        answers: [
            {text: "Yangtze", correct: false},
            {text: "Mississippi", correct: false},
            {text: "Nile", correct: true},
            {text: "Amazon", correct: false},
        ]
    },
    {
        question: "Which gas do plants primarily use for photosynthesis?",
        answers: [
            {text: "Carbon Dioxide", correct: true},
            {text: "Oxygen", correct: false},
            {text: "Nitrogen", correct: false},
            {text: "Hydrogen", correct: false},
        ]
    },
    {
        question: "What is the smallest unit of life?",
        answers: [
            {text: "Organ", correct: false},
            {text: "Cell", correct: true},
            {text: "Atom", correct: false},
            {text: "Molecule", correct: false},
        ]
    },
    {
        question: "Which is the hottest planet in our solar system?",
        answers: [
            {text: "Mercury", correct: false},
            {text: "Mars", correct: false},
            {text: "Jupiter", correct: false},
            {text: "Venus", correct: true},
        ]
    },
    {
        question: "Who discovered penicillin?",
        answers: [
            {text: "Isaac Newton", correct: false},
            {text: "Alexander Fleming", correct: true},
            {text: "Marie Curie", correct: false},
            {text: "Louis Pasteur", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = questionNo + ". " + questions[currentQuestionIndex].question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block "
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }

});




startQuiz();