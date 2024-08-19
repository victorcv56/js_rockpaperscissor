
function getComputerChoice() {
    num = Math.round((Math.random() * 10));
    console.log(num);
    if (num < 3 + 1) console.log('Rock');
    if (num > 3  && num < 6 + 1) console.log('Paper');
    if (num > 6 ) console.log('Scissor');
    scount = 0;
    pcount = 0;
    rcount = 0;

}

getComputerChoice();


/*
computer choice code is: 
- if random number lands between 1-3 computer choooses rock
- if number lands between 4-6 computer throws paper
- if number lands between 7-9 computer throws scissors

Another thing to consider is math.random() gives us a number
between 0-1 which we can convert to whole numbers if i multiply
by 10, but i need to stop at 9..
*/