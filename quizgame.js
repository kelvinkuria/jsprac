// ============================================================================
// PART 1: THE QUESTION BANK (DATA)
// ============================================================================

// We create a variable named 'questions'.
// 'const' means constant: we won't replace this entire list later.
// '[]' creates an empty Array (a list) to hold our question cards.
const questions = [

    // ITEM 1: A JavaScript Object (a profile card) inside the list.
    {
        // 'category' is a key. "Science: Computers" is the value.
        category: "Science: Computers",
        
        // 'question' holds the text we will ask the player.
        question: "What does CPU stand for?",
        
        // 'choices' is a mini-list (Array) inside the object.
        // These are the possible answers the player can pick.
        choices :[
            "Central Process Unit",
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Processor Unit"
        ],
        
        // 'answer' holds the exact text that counts as correct.
        // Note: Computers are case-sensitive. "Unit" must match "Unit".
        answer: "Central Processing Unit"
    },

    // ITEM 2: Another Question Card (Geography).
    {
    category: "Geography",
    question: "What is the capital city of France?",
    // A shorter list of choices this time.
    choices: ["Berlin", "Paris", "Madrid"],
    answer: "Paris"
  },

  // ITEM 3: Another Question Card (Math).
  {
    category: "Math",
    question: "What is 12 multiplied by 12?",
    choices: ["124", "144", "164"],
    answer: "144"
  },

  // ITEM 4: Another Question Card (History).
  {
    category: "History",
    question: "In what year did World War II end?",
    choices: ["1943", "1947", "1945"],
    answer: "1945"
  },

  // ITEM 5: Another Question Card (Science).
  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "O2"],
    answer: "H2O"
  },
] 
// The list ends here. We now have 5 question cards stored in 'questions'.

// ============================================================================
// PART 2: THE GAME TOOLS (FUNCTIONS)
// ============================================================================

// TOOL 1: Pick a Random Question
// This function needs 1 ingredient: the list of 'questions'.
function getRandomQuestion(questions) {
    
    // Step A: Generate a random decimal between 0 and 0.999...
    // Step B: Multiply by 'questions.length' (which is 5). Result: 0 to 4.999...
    // Step C: 'Math.floor' rounds DOWN to the nearest whole number (0, 1, 2, 3, or 4).
    // This gives us a valid ID number (index) for the list.
    const randomIndex = Math.floor(Math.random() * questions.length)
    
    // We use the random ID to pick one specific question card from the list.
    // 'return' sends this card back to wherever the function was used.
    return questions[randomIndex]
}

// TOOL 2: Computer Makes a Guess
// This function needs 1 ingredient: the list of 'choices' from a specific question.
function getRandomComputerChoice(choices){
    
    // We do the exact same math as before to get a random ID number.
    // But this time, we multiply by the length of the 'choices' list (usually 3 or 4).
    const randomIndex = Math.floor(Math.random() * choices.length)
    
    // We pick the choice at that random ID and return it.
    // This simulates the computer guessing an answer.
    return choices[randomIndex]
}

// TOOL 3: The Referee (Decide Who Wins)
// This function needs 3 ingredients: Your answer, Computer's answer, and the Question Card.
function getResults(userChoice, computerChoice, question){
    
    // CHECK 1: Did the user get it right?
    // '===' checks if the text matches exactly (including capital letters).
    if(userChoice === question.answer){
        // If yes, return this message immediately. The function stops here.
        return "You win!"
    
    // CHECK 2: If user was wrong, did the computer get it right?
    }else if(computerChoice === question.answer){
        // If yes, computer wins.
        return "Computer wins!"
    
    // CHECK 3: If both were wrong...
    // '!==' means "NOT equal to". '&&' means "AND".
    }else if (userChoice !== question.answer && computerChoice !== question.answer){
        // Tell the player both failed and show the correct answer.
        // The ${question.answer} injects the real answer into the text.
        return `Both choices are incorrect. The correct answer is ${question.answer}.`
    
    // CHECK 4: The Tie Condition (ELSE)
    }else{
        // This runs if none of the above are true.
        // NOTE: In this specific code logic, this part is actually impossible to reach.
        // (See the "Logic Flaw" section below for why).
        return "It's a tie!"
    }
}

// ============================================================================
// PART 3: RUNNING THE GAME (EXECUTION)
// ============================================================================

// STEP 1: The Game Master picks a question.
// We run TOOL 1, feed it the big 'questions' list, and save the result.
const randomQuestion = getRandomQuestion(questions)

// STEP 2: The Computer makes its guess immediately.
// We run TOOL 2, feed it the choices from the picked question, and save the result.
const computerChoice = getRandomComputerChoice(randomQuestion.choices)

// STEP 3: Ask the Human player.
// 'prompt' creates a pop-up box in the browser.
// We use backticks (`) to write a multi-line message.
// '\n' creates a new line (like pressing Enter).
// '.join(",")' turns the list of choices into a single string like "A, B, C".
const userChoice = prompt(`Category:${randomQuestion.category}\nQuestion:${randomQuestion.question}\nChoices:${randomQuestion.choices.join(",")}`)

// STEP 4: Calculate the winner.
// We run TOOL 3, feed it all the answers, and save the result message.
const result = getResults(userChoice, computerChoice, randomQuestion)

// STEP 5: Show the final score.
// 'console.log' prints the text to the developer console.
// We use ${} to inject the variables into the final message.
console.log(`Your choice: ${userChoice}\nComputer's choice: ${computerChoice}\nResult: ${result}`)