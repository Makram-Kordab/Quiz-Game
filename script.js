const questions = [
    [ // Computer Science
        {//1
            question: "What does CPU stand for?",
            answers: [
                {text: "Central Processing Unit", correct: true},
                {text: "Computer Processing Unit", correct: false},
                {text: "Central Power Unit", correct: false},
                {text: "Core Processing Unit", correct: false},
            ]
        },
        {//2
            question: "Which programming language is primarily used for web development?",
            answers: [
                {text: "Java", correct: false},
                {text: "Python", correct: false},
                {text: "JavaScript", correct: true},
                {text: "C++", correct: false},
            ]
        },
        {//3
            question: "Who is credited with inventing the World Wide Web?",
            answers: [
                {text: "Bill Gates", correct: false},
                {text: "Tim Berners-Lee", correct: true},
                {text: "Steve Jobs", correct: false},
                {text: "Mark Zuckerberg", correct: false},
            ]
        },
        {//4
            question: "What is the main function of an operating system?",
            answers: [
                {text: "Manage hardware and software resources", correct: true},
                {text: "Run antivirus scans", correct: false},
                {text: "Store files permanently", correct: false},
                {text: "Speed up the internet", correct: false},
            ]
        },
        {//5
            question: "Which company developed the Linux operating system?",
            answers: [
                {text: "Microsoft", correct: false},
                {text: "Apple", correct: false},
                {text: "IBM", correct: false},
                {text: "No single company; it was created by Linus Torvalds", correct: true},
            ]
        },
        {//6
            question: "What does HTML stand for?",
            answers: [
                {text: "Hyper Transfer Markup Language", correct: false},
                {text: "Home Tool Markup Language", correct: false},
                {text: "High Tech Machine Learning", correct: false},
                {text: "None of the above", correct: true},
            ]
        },
        {//7
            question: "Which type of storage loses data when power is turned off?",
            answers: [
                {text: "RAM", correct: true},
                {text: "SSD", correct: false},
                {text: "HDD", correct: false},
                {text: "ROM", correct: false},
            ]
        },
        {//8
            question: "Which cybersecurity attack involves tricking users into revealing sensitive information?",
            answers: [
                {text: "Phishing", correct: true},
                {text: "DDoS", correct: false},
                {text: "Brute force attack", correct: false},
                {text: "SQL injection", correct: false},
            ]
        },
        {//9
            question: "What is the default port for HTTP?",
            answers: [
                {text: "443", correct: false},
                {text: "80", correct: true},
                {text: "21", correct: false},
                {text: "8080", correct: false},
            ]
        },
        {//10
            question: "Which data structure follows the Last In, First Out (LIFO) principle?",
            answers: [
                {text: "Queue", correct: false},
                {text: "Stack", correct: true},
                {text: "Array", correct: false},
                {text: "Linked List", correct: false},
            ]
        }
    ],
    [ // Economics
        {//1
            question: "What is the difference between nominal and real GDP?",
            answers: [
                {text: "Real GDP is adjusted for inflation, nominal GDP is not", correct: true},
                {text: "Nominal GDP is adjusted for inflation, real GDP is not", correct: false},
                {text: "Real GDP always includes exports, nominal GDP does not", correct: false},
                {text: "Nominal GDP includes only tangible goods", correct: false},
            ]
        },
        {//2
            question: "Which economic theory suggests that markets are always efficient?",
            answers: [
                {text: "Keynesian Economics", correct: false},
                {text: "Behavioral Economics", correct: false},
                {text: "Efficient Market Hypothesis", correct: true},
                {text: "Game Theory ", correct: false},
            ]
        },
        {//3
            question: "What does the Phillips Curve illustrate?",
            answers: [
                {text: "The relationship between interest rates and GDP growth", correct: false},
                {text: "The relationship between inflation and unemployment", correct: true},
                {text: "The trade-off between government spending and taxation", correct: false},
                {text: "How supply and demand affect currency exchange rates", correct: false},
            ]
        },
        {//4
            question: "What is the term for a market dominated by a few firms?",
            answers: [
                {text: "Monopoly ", correct: false},
                {text: "Duopoly ", correct: false},
                {text: "Cartel ", correct: false},
                {text: "None of the above", correct: true},
            ]
        },
        {//5
            question: "Which economic indicator measures inflation?",
            answers: [
                {text: "Consumer Price Index", correct: true},
                {text: "Producer Price Index", correct: false},
                {text: "Trade Balance", correct: false},
                {text: "GDP", correct: false},
            ]
        },
        {//6
            question: "What does the Laffer Curve analyze?",
            answers: [
                {text: "The relationship between inflation and unemployment", correct: false},
                {text: "The impact of tax rates on government revenue", correct: true},
                {text: "The effect of monetary policy on economic cycles", correct: false},
                {text: "The correlation between interest rates and economic growth", correct: false},
            ]
        },
        {//7
            question: "What is 'marginal utility' in economics?",
            answers: [
                {text: "The additional satisfaction gained from consuming one more unit of a good", correct: true},
                {text: "The total satisfaction from consuming a product", correct: false},
                {text: "The cost of producing one extra unit of a good", correct: false},
                {text: "The effect of taxes on consumer spending", correct: false},
            ]
        },
        {//8
            question: "What does 'comparative advantage' mean in trade?\nA country's ability to...",
            answers: [
                {text: "produce a good at a lower opportunity cost than others", correct: true},
                {text: "produce more of a good than another", correct: false},
                {text: "produce goods at the lowest total cost", correct: false},
                {text: "dominate international trade through subsidies", correct: false},
            ]
        },  
        {//9
            question: "What is the 'crowding out' effect?",
            answers: [
                {text: "When government spending increases private sector investment", correct: false},
                {text: "When increased government spending reduces private sector investment", correct: true},
                {text: "When high interest rates encourage consumer borrowing", correct: false},
                {text: "When low taxes cause inflation", correct: false},
            ]
        },
        {//10
            question: "What is the difference between adaptive and rational expectations?",
            answers: [
                {text: "Rational expectations rely only on past trends", correct: false},
                {text: "Adaptive expectations are based only on past trends", correct: true},
                {text: "Adaptive expectations are used only in developing economies", correct: false},
                {text: "Adaptive expectations incorporate all available information", correct: false},
            ]
        }
    ],
    [ // Music
        {//1
            question: "How many scale is there in middle eastern music?",
            answers: [
                {text: "8", correct: true},
                {text: "12", correct: false},
                {text: "2", correct: false},
                {text: "4", correct: false},
            ]
        },
        {//2
            question: "What scale is most used for sad vibes?",
            answers: [
                {text: "Rust", correct: false},
                {text: "Kurd", correct: false},
                {text: "Saba", correct: true},
                {text: "Nahawand ", correct: false},
            ]
        },
        {//3
            question: "How many note is there in 1 octave in eastern music?",
            answers: [
                {text: "7", correct: false},
                {text: "12", correct: false},
                {text: "24", correct: true},
                {text: "None of the above", correct: false},
            ]
        },
        {//4
            question: "Which country is most closely associated with the origin of the Oud?",
            answers: [
                {text: "Egypt ", correct: false},
                {text: "Turkey ", correct: false},
                {text: "Syria ", correct: false},
                {text: "Iraq", correct: true},
            ]
        },
        {//5
            question: "Which Arabic maqam is often associated with a mystical or spiritual feel?",
            answers: [
                {text: "Hijaz", correct: true},
                {text: "Bayat", correct: false},
                {text: "3ajam", correct: false},
                {text: "Sika", correct: false},
            ]
        },
        {//6
            question: "What percussion instruments are used in eastern music?",
            answers: [
                {text: "Darbuka ", correct: false},
                {text: "Ka5oon ", correct: false},
                {text: "Re2 ", correct: false},
                {text: "All of the above", correct: true},
            ]
        },
        {//7
            question: "What rhythmic cycle is most commonly found in Middle Eastern music?",
            answers: [
                {text: "Maqsum", correct: true},
                {text: "Sa3idi", correct: false},
                {text: "Laf", correct: false},
                {text: "Baladi", correct: false},
            ]
        },
        {//8
            question: "Which Middle Eastern instrument produces sound by striking metal strings",
            answers: [
                {text: "Qanun", correct: true},
                {text: "Bass", correct: false},
                {text: "Violin", correct: false},
                {text: "Oud", correct: false},
            ]
        },  
        {//9
            question: "What is the main difference between Western and Eastern musical scales?",
            answers: [
                {text: "Eastern scales have double the number of notes", correct: false},
                {text: "Eastern scales use quarter tones", correct: false},
                {text: "Western music uses only half tones", correct: false},
                {text: "When low taxes cause inflation", correct: true},
            ]
        },
        {//10
            question: "Which Middle Eastern scale is equivalent to the Western harmonic minor scale?",
            answers: [
                {text: "Hijaz", correct: false},
                {text: "Nahawand", correct: true},
                {text: "Sika", correct: false},
                {text: "Kurd", correct: false},
            ]
        }
    ],
    [//General
        {//1
            question: "Which planet in our solar system has the most moons?",
            answers:[
                {text: "Earth", correct: false},
                {text: "Neptune", correct: false},
                {text: "Saturn", correct: true},
                {text: "Jupitor", correct: false},
            ]
        }, 
        {//2
            question: "What is the capital city of Canada?",
            answers:[
                {text: "Ottowa", correct: true},
                {text: "Toronto", correct: false},
                {text: "Vancouver", correct: false},
                {text: "Montreal", correct: false},
            ]
        }, 
        {//3
            question: "What is the smallest country in the world by land area?",
            answers:[
                {text: "Liechtenstein", correct: false},
                {text: "San Marino", correct: false},
                {text: "Monaco", correct: false},
                {text: "Vatican City", correct: true},
            ]
        }, 
        {//4
            question: "Who painted the famous artwork 'The Starry Night'?", 
            answers:[
                {text: "Vincent van Gogh", correct: true},
                {text: "Leonardo da Vinci", correct: false},
                {text: "Pablo Picasso", correct: false},
                {text: "Claude Monet", correct: false},
            ]
        },
        {//5
            question: "What is the main language spoken in Brazil?",
            answers: [
                {text: "Spanish", correct: false},
                {text: "Portuguese", correct: true},
                {text: "Brazilian", correct: false},
                {text: "English", correct: false},
            ]
        },
        {//6
            question: "Who is known as \"The Father of Modern Computing?\"",
            answers: [
                {text: "Galileo Galilei", correct: false},
                {text: "Thomas Edison", correct: false},
                {text: "Alan Turing", correct: true},
                {text: "Charles Babbage", correct: false},
            ]
        },
        {//7
            question: "Which classical composer became deaf later in life but continued to compose music?",
            answers: [
                {text: "Wolfgang Amadeus Mozart", correct: false},
                {text: "Ludwig van Beethoven", correct: true},
                {text: "Johann Sebastian Bach", correct: false},
                {text: "Frédéric Chopin", correct: false},
            ]
        },
        {//8
            question: "Which physicist developed the theory of general relativity?",
            answers: [
                {text: "Isaac Newton", correct: false},
                {text: "Nikola Tesla", correct: false},
                {text: "Stephen Hawking", correct: false},
                {text: "Albert Einstein", correct: true},
            ]
        },
        {//9
            question: "Which instrument is often considered the face of Middle Eastern music?",
            answers: [
                {text: "Oud", correct: true},
                {text: "Violin", correct: false},
                {text: "9anun", correct: false},
                {text: "Nay", correct: false},
            ]
        },
        {//10
            question: "What is the smallest unit of life?",
            answers: [
                {text: "Organ", correct: false},
                {text: "Molecule", correct: false},
                {text: "Cell", correct: true},
                {text: "Atom", correct: false},
            ]
        }
    ]
];

let category = 3;
let selectedButton = null;

function selectCategory(selectedCategory, button) {
    category = selectedCategory;

    if (selectedButton) {
        selectedButton.classList.remove("selected-category");
    }

    // Apply styling to the newly selected button
    button.classList.add("selected-category");
    selectedButton = button;

    document.getElementById("start-btn-container").style.display = "block";
}

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function GoQuiz(){
    document.getElementById("menu-screen").style.display = "none";
    document.getElementById("quiz-screen").style.display = "block";
    
    startQuiz();
}

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();

    let currentQuestion = questions[category][currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = questionNo + ". " + questions[category][currentQuestionIndex].question;

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
    questionElement.innerHTML = `You scored ${score} out of ${questions[category].length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions[category].length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex<questions[category].length){
        handleNextButton();
    }else{
        startQuiz();
    }

});
