const questions = [
    {
        category: "Science: Computers",
        question: "What does CPU stand for?",
        choices :[
            "Central Process Unit",
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Processor Unit"
        ],
        answer: "Central Processing Unit"
    },
     {
    category: "Geography",
    question: "What is the capital city of France?",
    choices: ["Berlin", "Paris", "Madrid"],
    answer: "Paris"
  },
  {
    category: "Math",
    question: "What is 12 multiplied by 12?",
    choices: ["124", "144", "164"],
    answer: "144"
  },
  {
    category: "History",
    question: "In what year did World War II end?",
    choices: ["1943", "1947", "1945"],
    answer: "1945"
  },
  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "O2"],
    answer: "H2O"
  },

]

function getRandomQuestion(questions) {
    const randomIndex = Math.floor(Math.random()*questions.length)
return questions[randomIndex]
}

function getRandomComputerChoice(choices){
    const randomIndex = Math.floor(Math.random()*choices.length)
    return choices[randomIndex]
}

function getResults(userChoice, computerChoice, question){
    if(userChoice === question.answer){
        return "You win!"
    }else if(computerChoice === question.answer){
        return "Computer wins!"
    }else if (userChoice !== question.answer && computerChoice !== question.answer){
        return `Both choices are incorrect. The correct answer is ${question.answer}.`
    }else{
        return "It's a tie!"
    }
}

const randomQuestion = getRandomQuestion(questions)
const computerChoice = getRandomComputerChoice(randomQuestion.choices)
const  userChoice = prompt(`Category:${randomQuestion.category}\nQuestion:${randomQuestion.question}\nChoices:${randomQuestion.choices.join(",")}`)
const result = getResults(userChoice, computerChoice, randomQuestion)

console.log(`Your choice: ${userChoice}\nComputer's choice: ${computerChoice}\nResult: ${result}`)