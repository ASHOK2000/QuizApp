
    const questions = document.getElementById("question");
    const choices = Array.from(document.getElementsByClassName("choice-text"));
    const QuestionCounterText=document.getElementById("questionCounter");
    const scoreText = document.getElementById("score")


    let currentQuestion = {};
    let acceptingAnswers = true;

    let score = 0;
    let questionCounter = 0;
    let availableQuestions = [];

    let Question = [
        {
            question: "How many sizes of headers are available in HTML by default?",
            choice1: "1",
            choice2: "4",
            choice3: "3",
            choice4: "6",

            answer: "4"     // answer is as per index number 

        },
        {
            question: "How to create an ordered list in HTML?",
            choice1: "<ul>",
            choice2: "<ol>",
            choice3: "<href>",
            choice4: "<b>",
            answer: "2"

        },
        {
            question: "HTML files are saved by default with the extension?",
            choice1: ".html",
            choice2: ".ht",
            choice3: ".xml",
            choice4: ".js",
            answer: "1"

        }, {
            question: "We enclose HTML tags within? ",
            choice1: "<>",
            choice2: "{}",
            choice3: "!!",
            choice4: "<!-- -->",
            answer: "2"
        }, {
            question: "How to display preformatted text in HTML?",
            choice2: "<pre>",
            choice3: "<hr>",
            choice1: "<p>",
            choice4: "none of the above",
            answer: "1"
        }, {
            question: "Which attribute is used to provide a unique name to an HTML element?",
            choice1: "id",
            choice2: "class",
            choice3: "type",
            choice4: "none of the above",
            answer: "1"
        }
    ];

    //constants

    const CORRECT_BONUS = 10;
    const MAX_QUESTIONS = 6;

    startGame = () => {
        questionCounter = 0;
        score = 0;
        availableQuestions = [...Question]
        console.log([...Question]);
        //console.log(availableQuestions)
        getNewQuestion();
    };


    getNewQuestion = () => {
        if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
            return window.location.assign("/end.html");
        }
        questionCounter++;
        QuestionCounterText.innerHTML = questionCounter+"/"+MAX_QUESTIONS;
        const questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions[questionIndex];
        question.innerText = currentQuestion.question;


        choices.forEach(choice => {
            const number = choice.dataset["number"];
            choice.innerText = currentQuestion["choice" + number];

        });
        availableQuestions.splice(questionIndex, 1);
        //console.log(availableQuestions)
        acceptingAnswers = true;

    };

    choices.forEach(choice => {
        choice.addEventListener("click", e => {

            if (!acceptingAnswers) return;
            acceptingAnswers = false;
            const selectedChoice = e.target;
            const selectedAnswer = selectedChoice.dataset["number"];
            const classToApply = 
                selectedAnswer === currentQuestion.answer ? "correct" : "incorrect";
           ///////////////////////////////////
                console.log(classToApply);

            if(classToApply == "correct"){
            incrementScore(0);
            console.log("if is running")
           }else{
            console.log("classToApply error");
           };
           
            selectedChoice.parentElement.classList.add(classToApply);
            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply);
                getNewQuestion();
            }, 1000);
            //console.log(selectedAnswer === currentQuestion.answer);
        });
    });

   var Newscore = function incrementScore(num){
        return num+10 ;
        // console.log(score)
    };
    // scoreText.innerHtml = score;

    startGame();
