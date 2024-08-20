
function getComputerChoice() {
    const getRandomNumner = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
        }

    let scount = 0;
    let pcount = 0;
    let rcount = 0;

    let num = getRandomNumner(1, 10);
    let choice = '';

    console.log(num);
    if (num < 3 + 1) choice + 'Rock';
    if (num > 3  && num < 6 + 1) choice + 'Paper';
    if (num > 6 ) choice + 'Scissors';
}

function getHumanChoice() {
    let choice = prompt('Rock, Paper or Scissors?: ');
    return choice.toLowerCase();
}

function decideWinner(hChoice, cChoice) {
    let score = 0;
    
}
let compChoice = getComputerChoice();
let humanChoice = getHumanChoice();





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