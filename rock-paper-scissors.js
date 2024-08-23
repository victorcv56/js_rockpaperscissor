
function getComputerChoice() 
{
    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }

    let num = getRandomNumber(1, 10);
    let choice = '';

    console.log(num);
    if (num < 3 + 1) choice += 'Rock';
    else if (num > 3  && num < 6 + 1) choice += 'Paper';
    else if (num > 6 ) choice += 'Scissors';
    
    return choice.toLowerCase();
}

function getHumanChoice() 
{
    let choice = prompt('Rock, Paper or Scissors?: ');
    return choice.toLowerCase();
}

function startGame(hScore, cScore) 
{
    while (hScore <= 3 || cScore <= 3)
    {
        let hChoice = getHumanChoice();
        let cChoice = getComputerChoice();

        
        if (hChoice == 'rock') 
        {
            if (cChoice == 'scissors') hScore += 1;
            else if (cChoice == 'paper') cScore += 1;
            else console.log('draw!');
        }
        console.log(`hScore = ${hScore} \ncScore = ${cScore}.`)

    }
    if (cScore == 3) {
        console.log("Computer winss!");
    }

    else if (hScore == 3) {
        console.log("Human winss!")
    }
    
    return hScore, cScore;

}


let hScore = 0;
let cScore = 0;

startGame(hScore, cScore);

console.log(`score is ${hScore} vs ${cScore}`);



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