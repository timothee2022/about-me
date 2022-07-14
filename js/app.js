'use strict'
let score = '0'

//console.log('hvbhbhbhbhb');

let userName = prompt('What is your name ?');

alert(`Welcome to my website ${userName} !! Glad that you are here.`);

let questionOne = prompt('Yes or No...Do you live in the US').toLowerCase();

if (questionOne === 'y' || questionOne === 'yes') {
  alert(`Me too! Nice to meet you ${userName}`)
} else if (questionOne === 'n' || questionOne === 'no') { alert(`Feel fee to come visit the US anytime`) } else { alert(`Please answer Yes or No`) };




let questionTwo = prompt('Are you from Seattle').toLowerCase();

if (questionTwo === 'y' || questionTwo === 'yes') {
  alert(`Nice ! I have never been there`)
} else if (questionTwo === 'n' || questionTwo === 'no') {
  alert(`You should go on vacation at Seattle. It is a beautiful city.
`)
} else { alert(`Please answer Yes or No`) };



let questionThree = prompt('Washington DC or New York City...What is the Capital of United States?').toLowerCase();

if (questionThree === 'Washington DC' || questionThree === 'DC') {
  alert(`You're right. Great JOB !`)
} else if (questionThree === 'New York City' || questionThree === 'new york city') {
  alert(`Wrong Answer! Washington DC is the Capital of the United States
`)
} else { alert(`Please choose between Washington DC or New York City `) };




let questionFour = prompt('Yes or No...Do you have any kids ?').toLowerCase();

if (questionFour === 'y' || questionFour === 'yes') {
  alert(`Congratulations ! I love kids as well`)
} else if (questionFour === 'n' || questionFour === 'no') { alert(`Kids can be fun and too much work at the same time`) } else { alert(`Wrong Answer`) };




let questionFive = prompt('Nice talking with you ! Do you wish to view my full page').toLowerCase();

if (questionFive === 'y' || questionFive === 'yes') {
  alert(`Thank you ! Have fun on my page`)
} else if (questionFive === 'n' || questionFive === 'no') { alert(`Oh, I do not think you have a choice`) } else { alert(`Wrong Answer ! Enjoy my page`) };



let userGuesses = 4;
let age = 32;
let foundAge = false;

let userAgeGuess = prompt(`Between 30 and 40... Guess what is my age?`);

while (userGuesses > 0 && !foundAge) {
  if (userAgeGuess < age) {
    userAgeGuess = prompt('Too Low, Guess again');
  } else if (userAgeGuess > age) {
    userAgeGuess = prompt('Too High, Guess again');
  } else {
    alert(`Congratulation!! You guess it right`);
    foundAge = true;
  }
  userGuesses--;
};
if (foundAge === false) {
  alert(`32 is the right Age`);
};



let userAttempt = 6;
let fruits = ['mango', 'watermelon', 'orange'];


let userFruitsGuess = prompt(`Guess one of my favorites fruits?`).toLowerCase();
for (let i = 0; i < userAttempt; i++) {
  if (userFruitsGuess == fruits[0] || userFruitsGuess == fruits[1] || userFruitsGuess == fruits[2]) {
    alert(`Congratulations! You are right`);
    break;
    score++;
  }
  else {
    alert(`Guess again`);
    userFruitsGuess = prompt(`Guess one of my favorites fruits?`).toLowerCase();
  }
}
alert(`These are my favorites fruits ${fruits}`);
alert(`Your score is ${score} out of 1`)

