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
 * FUNCTIONS
 * 
/**/

function generateRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}