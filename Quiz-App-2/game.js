const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

// Game state variables
let currentQuestion = {}
let acceptingAnswers = true 
let score = 0
let questionCounter = 0
let availableQuestions =[]

// Question Bank
let questions = [
    {
       question: 'What does HTML stands for?',
       choice1: 'Hyper Text Markup Language',
       choice2: 'Hyper Test Makers Language',
       choice3: 'Hello Test Machine Learning',
       choice4: 'None of the above',
       answer:1,
    },

    {
        question: 'What is the full form of JS?',
        choice1: 'Jquery',
        choice2: 'Justin Bieber',
        choice3: 'Javascript',
        choice4: 'None of the above',
        answer:2,
     },

     {
        question: 'Which is the best burger combo in McDonalds?',
        choice1: 'Junior Chicken',
        choice2: 'Junior Chicken with poutine',
        choice3: 'Junior Chicken with boston doughnut',
        choice4: 'All of the above',
        answer:4,
     },

     {
        question: '2 + 2 = ?',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer:2,
     },

     {
        question: 'What is the full form of CSS?',
        choice1: 'Cascading style sheets',
        choice2: 'Custom syle sheets',
        choice3: 'Custard style sheets',
        choice4: 'All of the above',
        answer:1,
     },

   
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

// Function to start a new game
let startGame = () =>{
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

// Function to fetch and display a new question
let getNewQuestion = () =>{
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
       //Store score and redirect to end screen
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => 
        {
          const number  = choice.dataset['number']
          choice.innerText = currentQuestion['choice'+ number]
        }
        )

        availableQuestions.splice(questionsIndex,1)

        acceptingAnswers = true
}

// Handle choice selection
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers){
            return
        }

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct': 'incorrect'

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() =>{
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})


// Function to increment the score

incrementScore = num =>{
    score += num
    scoreText.innerText = score
}

// Start the game initially
startGame()