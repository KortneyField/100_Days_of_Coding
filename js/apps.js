
const main = document.querySelector('main');
const randomNumber = getRandomNumber(5);
let guess;
let counter = 1;
let guesses = 3;  

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}
console.log(randomNumber);

do { 
    guess = prompt(`You have ${guesses} left. Guess the Computer's number: ___ `)
    counter++; 
    guesses --; 
    if (guess == randomNumber) {
        main.innerHTML = `<h1> It took you ${counter} times to guessed the number ${randomNumber}! </h1>`;
        break;
    } else if (guess == 3) { 
        main.innerHTML = `<h1> Too many guesses! </h1>`;
        break; 
    }
} while (parseInt(guess) !== randomNumber); 
    
    
    


