/**
 *  MINEFIELD
 *  1. GENERATE 16 RANDOM NUMBERS FROM 1 TO 100 (BOMBS);
 *  2. ASK THE USER TO INSERT A NUMBER BETWEEN 1 AND 100, IF THE NUMBER IS ALREADY PRESENT IN THE LIST THE GAME IS OVER, OTHERWISE ASK THE USER ANOTHER NUMBER;
 *  3. THE GAME IS OVER ONCE THE USER INSERT A PROHIBITED NUMBER OR REACHES THE MAX AVAIABLE NUMBER;
 *  4. ONCE THE GAME IS OVER, THE SOFTWARE MUST PRINT THE RESULTS, THE NUMBER OF TIMES THE USER INSERTED A CORRECTED NUMBER;
 *  5. BONUS: THE SOFTWARE ASKS FOR A DIFFICULTY AT THE START OF THE GAME: 0 => 1 to 100; 1 => 1 to 80; 2 => 1 to 50;
 * 
/**/

/**
 * INIT
 *  Phase 1
 * 
/**/

// VARIABLES

var maxNumber = 100;
var bombsNumber = 16;
var possibilities = maxNumber - bombsNumber;
var bombList = [];
var allowedNumbers = [];
var user = 0;


// GENERATE 16 RANDOM NUMBERS FROM 1 TO 100 (BOMBS)

while(bombList.length < bombsNumber) {
    var bomb = generateRandomNumber(maxNumber);

    if(! bombList.includes(bomb)) {
        bombList.push(bomb);
    }
}
console.log('Bomb List:', bombList);

/**
 * 
 *  GAME MAIN LOOP
 * 
/**/

while( (allowedNumbers.length < possibilities) && (! bombList.includes(user))) {

    // USER CHOICE
    user = parseInt( prompt('Please enter a number between 1 and ' + maxNumber + '\n Succesfull attempts: ' + allowedNumbers.length + ' of ' + possibilities) );

    // VALIDATION
    while(isNaN(user) || user < 1 || user > maxNumber) {
        user = parseInt( prompt('Invalid input. Please enter a valid number between 1 and ' + maxNumber));
    }
    console.log(user);

    // CHECK FOR CHOICES
    if(bombList.includes(user)) {
        alert('You Lose... You were succesfull only: ' + allowedNumbers.length + ' times before finding the Bomb...');
    } else if (allowedNumbers.includes(user)) {
        alert('Already inserted Number, please enter another one');
    } else if (! allowedNumbers.includes(user)) {
        allowedNumbers.push(user);
    }

    // CHECK FOR REACHING MAX OF POSSIBILITIES

    if(allowedNumbers.length === possibilities) {
        alert('YOU WON!');
    }
}

/**
 * END DISPLAY
/**/

console.log('--- GAME OVER ---');
console.log('List of allowed inserted numbers: ', allowedNumbers);
console.log('Succesfull Attempts: ', allowedNumbers.length);





/**
 * 
 * FUNCTIONS
 * 
/**/

function generateRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}