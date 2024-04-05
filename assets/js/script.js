//Create array of objects for image and answers
const pictureArray = [
    {
        picture: 'Mount Fuji',
        img: 'assets/img/q1.jpeg',
        answer: 'Japan',
        options: ['South Korea', 'Japan', 'China']
    },
    {
        picture: 'Iguazufalls',
        img: 'assets/img/q2.jpg',
        answer: 'Argentina',
        options: ['USA', 'Chile', 'Argentina']
    },
    {
        picture: 'Gap-of-Dunloe',
        img: 'assets/img/q3.jpg',
        answer: 'Ireland',
        options: ['England', 'Scotland', 'Ireland']
    },
    {
        picture: 'Golden Temple',
        img: 'assets/img/q4.png',
        answer: 'India',
        options: ['India', 'Thailand', 'Bali']
    },
    {
        picture: 'Mombasa Tusk',
        img: 'assets/img/q5.jpg',
        answer: 'Kenya',
        options: ['Tanzania', 'Kuwait', 'Kenya']
    },
    {
        picture: 'machu-pichu',
        img: 'assets/img/q6.png',
        answer: 'Peru',
        options: ['Mexico', 'Brazil', 'Peru']
    },
    {
        picture: 'under sea waterfall',
        img: 'assets/img/q7.jpg',
        answer: 'Mauritius',
        options: ['Seychelles', 'Maldives Island', 'Mauritius']
    },
    {
        picture: 'Sénanque-Abbey',
        img: 'assets/img/q8.webp',
        answer: 'France',
        options: ['France', 'Spain', 'Italy']
    },
    {
        picture: 'Skogafoss-waterfall',
        img: 'assets/img/q9.jpg',
        answer: 'Iceland',
        options: ['Greenland', 'USA', 'Iceland']
    },
    {
        picture: 'Twelve-Apostles',
        img: 'assets/img/q10.jpeg',
        answer: 'Australia',
        options: ['USA', 'New Zealand', 'Australia']
    }
];

//created variable questionNumber and assigned 0 to get the first question

let questionNumber = 0;

let startGame = false;

//create variable landmarkElement to get img element in index.html

const landmarkElement = document.getElementById('landmark-img');
landmarkElement.src = pictureArray[questionNumber].img;
landmarkElement.alt = pictureArray[questionNumber].picture;

let allOptions = document.getElementsByClassName("option");
console.log("allOptions", allOptions);
for (let i = 0; i < allOptions.length; i++) {
    allOptions[i].innerHTML = pictureArray[questionNumber].options[i];
}

//initial score is 0
let score = 0;

let scoreValue = document.getElementById('score');
scoreValue.innerHTML = score;

//initial timer is 0
let timer = 0;
let displayTimer = document.getElementById("timer");
displayTimer.innerHTML = 0;

//to increment the timer value from 0 to 30 use javascript internal function called setInverval

function displayScore() {
    console.log("test");
}

let setTimer;

function stopInterval() {
    clearInterval(setTimer);    
}

function removeBackgroundColor() {
    document.querySelectorAll('.option').forEach(button => {
        button.style.backgroundColor = '';
        button.disabled = false;

    });
}

function startInterval() {
    setTimer = setInterval(function () {
        timer = timer + 1;
        // console.log("timer", timer)
        displayTimer.innerHTML = timer;
        if (timer === 30) {
            stopInterval();
            //displayScore();
            nextQuestion();
            removeBackgroundColor();
            timer = 0;
            if (questionNumber === 9) {                
                // document.getElementById('startPopup').style.display=document.getElementById('startMsgbx').style.display ="block";
                document.getElementById('scorePopup').style.display = document.getElementById('scoreMsgbx').style.display = "block";
                // document.getElementById('popupContainer').style.display = "block";
                document.getElementById('scoreDisplay').innerHTML = score;
                return;
            }
            startInterval();

        }
    }, 1000);
}

//created nextQuestion function to increment the questionNumber by 1
function nextQuestion() {
    //if all the questions were answered return
    if (questionNumber === 9) { 
        // alert("test");     
        return;
}

//if questions are in between 1 to 10 these lines will be executed
questionNumber = questionNumber + 1;
console.log("questionNumber", questionNumber);
landmarkElement.src = pictureArray[questionNumber].img;
landmarkElement.alt = pictureArray[questionNumber].picture;

//when question increased then next question options are updated
for (let i = 0; i < allOptions.length; i++) {
    allOptions[i].innerHTML = pictureArray[questionNumber].options[i];
    }

}

//Audio for correct Answer
function audioCorrectAnswer() {
    console.log("audio correct answer");
    let correctAnswer = document.getElementById("correctAnswer");
    correctAnswer.play();
}

//Audio for wrong Answer
function audioWrongAnswer() {
    let wrongAnswer = document.getElementById("wrongAnswer");
    wrongAnswer.play();
}

function checkAnswer(e) {
    console.log("check answer clicked", e.innerHTML, questionNumber);
    if(startGame === false){
        alert("Click start button to start");
        return;
    }
