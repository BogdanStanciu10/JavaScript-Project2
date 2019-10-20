let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board")
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//console.log(scissors_div);

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    // console.log(Math.floor(Math.random() * 3)); // obtin 0,1,2 numere intregi
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]; // obtin r,p,s
}

//console.log(getComputerChoice());

function convertToWord(letter) {
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    return "Scissors";

}

function win(userChoice, computerChoice) {
    // console.log("WIN");
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice); // r , s sau p
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    //console.log(userChoice);
    //console.log(computerChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} . You win!`; // pt ca obtin p beats s, am sa fac o functie care converteste
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);

}

function lose(userChoice, computerChoice) {
    // console.log("LOST");
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    //console.log(userChoice);
    //console.log(computerChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} . You lost!`; // pt ca obtin p beats s, am sa fac o functie care converteste
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
    // console.log("DRAWWWW");
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    //console.log(userChoice);
    //console.log(computerChoice);
    result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a draw!`; // pt ca obtin p beats s, am sa fac o functie care converteste
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice) {
    //console.log(userChoice); // obtin r,p,s

    const computerChoice = getComputerChoice();

    // console.log("user choice => " + userChoice);
    // console.log("computer choice => " +computerChoice);
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice)
            //console.log("USER WINS.");
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            //console.log("USER LOSES");
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            //console.log("Its a draw");
            break;

    }

}


function main() {
    rock_div.addEventListener('click', () => game("r"));
        //console.log("hey you clicked on rock");
    

    paper_div.addEventListener('click', function () {
        //console.log("hey you clicked on paper");
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        //console.log("hey you clicked on scissors");
        game("s");
    })
}


main();