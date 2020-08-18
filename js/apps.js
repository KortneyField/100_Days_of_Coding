// 1. Create a multidimensional array to hold quiz questions and answers
const questions = [
  ["What is 2 + 3 = ___", '5'], 
  ["What is the color of the sky?", "blue"], 
  ["What is the first letter in the alphabet?", "a"] 
]; 
  


// 2. Store the number of questions answered correctly
let correctAnswers = 0; 
let correctArray = []; 
let incorrectArray = []; 

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

for (i =0; i < questions.length; i++) {
  let question = questions[i][0];
  let answer = questions[i][1]; 
  let response = prompt(question); 
  if (response === answer) {
    correctAnswers = correctAnswers + 1; 
    correctArray.push(question)
    } else {
      incorrectArray.push(question);
    }
}

console.log(correctArray);


function getNewArray (arr) {
  let items = ''; 
  for (i = 0; i < arr.length; i++){ 
    items += `<li> ${arr[i]} </li>`;
  }
  return items;
}



// 4. Display the number of correct answers to the user
  
let message = `<h1> You got ${correctAnswers} questions correct </h1> <br> <br> 
              Correct Questions: <br>  
              <ul>${getNewArray(correctArray)}</ul> <br><br>
              Incorrect Questions: <br> 
              <ul>${getNewArray(incorrectArray)}</ul>`;


document.querySelector('main').innerHTML = message; 






