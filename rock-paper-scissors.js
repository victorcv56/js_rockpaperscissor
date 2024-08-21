
function getComputerChoice() 
{
    const getRandomNumner = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }

    let num = getRandomNumner(1, 10);
    let choice = '';

    console.log(num);
    if (num < 3 + 1) choice + 'Rock';
    if (num > 3  && num < 6 + 1) choice + 'Paper';
    if (num > 6 ) choice + 'Scissors';
}

function getHumanChoice() 
{
    let choice = prompt('Rock, Paper or Scissors?: ');
    return choice.toLowerCase();
}

function startGame(hScore, cScore) 
{
    let hChoice = getHumanChoice();
    let cChoice = getComputerChoice();

    while (hScore < 10 || cScore < 10)
    {
        if (hChoice === 'rock' && cChoice === 'scissors') hScore += 1;     
        if (hChoice === 'paper' && cChoice === 'rock') hScore += 1;     
        if (hChoice === 'scissors' && cChoice === 'paper') hScore += 1;     
        if (cChoice === 'rock' && hChoice === 'scissors') cScore += 1;     
        if (cChoice === 'paper' && hChoice === 'rock') cScore += 1;     
        if (cChoice === 'scissors' && hChoice === 'paper') cScore += 1;     

    }
}

let hScore = 0;
let cScore = 0;

startGame(hScore, cScore) 
{

}




/*
computer choice code is: 
- if random number lands between 1-3 computer choooses rock
- if number lands between 4-6 computer throws paper
- if number lands between 7-9 computer throws scissors

Another thing to consider is math.random() gives us a number
between 0-1 which we can convert to whole numbers if i multiply
by 10, but i need to stop at 9..
*/

// Random number within a range formula: 

// const getRandomNumner = (min, max) {
//     return Math.random() * (max - min) + min
// }