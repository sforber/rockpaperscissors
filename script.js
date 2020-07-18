const choices = ["rock","paper","scissors"]
let score = 0;
let gameCount = 0;

function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)]
}

function resultCheck(compChoice, playersChoice){
    if (compChoice == playersChoice){
        return("draw")
    }
    else if ((playersChoice == "rock" && compChoice == "scissors") || (playersChoice == "scissors" && compChoice == "paper") || (playersChoice == "paper" && compChoice == "rock")) {
        return("won")
    }
    else if ((compChoice == "rock" &&  playersChoice == "scissors") || (compChoice == "scissors" && playersChoice == "paper") || (compChoice == "paper" && playersChoice == "rock")) {
        return("lost")    
    }
}

function game(playersChoice){
    gameCount ++;
    let compChoice = computerChoice();
    if (resultCheck(compChoice, playersChoice) == 'draw'){
        score = score + 0.5;
        resultsText.innerHTML = "It's a draw";
    }
    else if (resultCheck(compChoice, playersChoice) == 'won'){
        score++;
        resultsText.innerHTML = "You win, " + playersChoice + " beats "+ compChoice;
    }
    else if (resultCheck(compChoice, playersChoice) == 'lost'){
        score = score + 0;
        resultsText.innerHTML = "You lose, " + compChoice + " beats "+ playersChoice;
    }

    scoreText.innerHTML = "Score: " + score;

    if (gameCount == 5){
        buttons.forEach((button) => {button.disabled = true});
        if (score > 2.5){
            resultsText.innerHTML += "<br>GAME OVER: YOU WIN!</br>"
        }
        else if(score == 2.5){
            console.log("DRAW")
            resultsText.innerHTML += "<br>GAME OVER: IT'S A TIE!</br>"
        }
        else{
            resultsText.innerHTML += "<br>GAME OVER: YOU LOSE!</br>"
        }
    }
}

const results = document.querySelector('#results');
const scoreDiv = document.querySelector('#score');

const scoreText = document.createElement('p');
scoreText.innerHTML = "Score: " + score;
scoreDiv.appendChild(scoreText);

const resultsText = document.createElement('p');
results.appendChild(resultsText);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        game(button.id)
    });
});
