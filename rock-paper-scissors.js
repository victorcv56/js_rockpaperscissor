
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

function startGame() 
{
    let flag = true;

    while (flag) // This is where the bug is, || expression is activating until both scores are less 
    {
        let hChoice = getHumanChoice();
        let cChoice = getComputerChoice();
        console.log(`User threw ${hChoice}.\nComputer threw ${cChoice}.`)
        
        if (hChoice == 'rock') 
        {
            if (cChoice == 'scissors') uScore += 1;
            else if (cChoice == 'paper') cScore += 1;
            else console.log('draw!');
        }

        if (hChoice == 'paper') 
        {
            if (cChoice == 'rock') uScore += 1;
            else if (cChoice == 'scissors') cScore += 1;
            else console.log('draw!');
        }
        
        if (hChoice == 'scissors') 
        {
            if (cChoice == 'paper') uScore += 1;
            else if (cChoice == 'rock') cScore += 1;
            else console.log('draw!');
        }
        console.log(``)
        console.log(`uScore = ${uScore} \ncScore = ${cScore}`)
        
        if (uScore == 3 || cScore == 3) flag = false;
    }

    if (cScore == 3) {
        console.log("Computer winss!");
    }

    else if (uScore == 3) {
        console.log("Human winss!")
    }
    
}


let uScore = 0;
let cScore = 0;

startGame();

console.log(`score is ${uScore} vs ${cScore}`);



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