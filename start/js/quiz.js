/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
correct = 0;



// 2. Store the rank of a player
rank = "not known"


// 3. Select the <main> HTML element


/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
answer1 = prompt("Name the programmming language that you are learning")
if (answer1.toLowerCase() == 'javascript') {
  correct += 1
}
console.log(answer1.toUpperCase())
console.log(answer1.toLowerCase())
  

answer2 = prompt("What is the programmuing language for web")
if (answer2.toLowerCase() == 'html') {
  correct += 1
}
console.log(answer2.toUpperCase())
console.log(answer2.toLowerCase())


answer3 = prompt("What language we use for styling web")
if (answer3.toLowerCase() == 'css') {
  correct += 1
}
console.log(answer3.toUpperCase())
console.log(answer3.toLowerCase())


answer4 = prompt("What is the name of the college you study in")
if (answer4.toLowerCase() == 'douglas') {
  correct += 1
}
console.log(answer4.toUpperCase())
console.log(answer4.toLowerCase())


answer5 = prompt("What is the name of the city where your college is")
if (answer5.toLowerCase() == 'new westminster') {
  correct += 1
}
console.log(answer5.toUpperCase())
console.log(answer5.toLowerCase())


/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if (correct >= 5) {
  rank = "Gold"
}
else if (correct >= 3) {
  rank = "Silver"
}
else if (correct >= 1) {
  rank = "Bronze"
}
else {
  rank = "No crown"
}


// 6. Output results to the <main> element
document.querySelector('main').innerHTML = `Your Score is: ${correct} out of 5 <br> Your Crown is: ${rank}`