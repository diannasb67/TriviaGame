$(document).ready(function() {
});
console.log("hello");


//Homework instructions
//You'll create a trivia form with multiple choice or true/false options (your choice).
//The player will have a limited amount of time to finish the quiz.
//The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
//Don't let the player pick more than one answer per question.
//Don't forget to include a countdown timer.

//MY PSEUDOCODE

// create multiple choice or true/false options 
//1. Which is the only American state to begin with the letter p?
//A. Pennsylvania
//2. Name the worlds largest ocean?
//A. Pacific
//3. Where would yoou find the worlds most ancient forest?
//A. Daintree Forest North of Carines, Australia.
//4. What is the capital of Span?
//A. Madrid
//5. Which city is Prague in?
//A. Czech Republic
//6. What is the smallest country in the world at only 44 sq.km?
//A. Vatican City
//7. What is the Capital city of Kenya? 
//A. Nairobi
//8. What is the worlds biggest island?
//A. Greenland
//9. What is the capital of Sweeden?
//A. Stockholm
//10. What is the capital of The Netherlands?
//A.  Amsterdam


// create variables for user and questions and a counter.

var answers = { correct: 0, incorrect: 0,}
var userSelect = "";
var counterStart = 30;
var correct = 0;
var incorrect = 0;
var unasnwered = 0;


var triviaQues = [
{question: "Which is the only American state to begin with the letter p?", 
choices: ["Pittsburgh", "Pennsylvania", "Park-City", "Puerto-Rico"],
correct: 2 }, 
{question: "Name the worlds largest ocean?",
choices: ["Atlantic", "Indian", "Pacific", "Arctic"],
correct: 2},
{question: "What is the capital of Spain?", 
choices: ["Madrid", "Barcelona", "Seville", "Granada"], 
correct: 0},
{question: "What is the smallest country in the world at only 44 sq.km",
choices: ["Hati", "St. Lucia", "Vatican City", "Estonia"],
correct: 2},
{question: "What is the worlds biggest island",
choices: ["Madagascar", "Australia", "Greenland", "Indonesia"],
correct: 2},
{question: "Where would yoou find the worlds most ancient forest?",
choices: ["Heidleburg, Germany", "Carines, Australia", "Salzburg, Austria", "Bogota, Columbia"],
correct: 1},
]
 
//display question to user

$("#question").each(function() {

    var ques = triviaQues[0].question;
    
    $("#question").append(ques);

    console.log(ques);  
})


  

//display choices to user

// var quest = triviaQues[0].question[i];  
// console.log(quest);

// $(".question").html(quest);


var choice1 = triviaQues[0].choices[0];
var choice2 = triviaQues[0].choices[1];
var choice3 = triviaQues[0].choices[2];
var choice4 = triviaQues[0].choices[3];
console.log(triviaQues[0].choices[0]);


$(".btn").text(choice1);
$(".btn1").text(choice2); 
$(".btn2").text(choice3); 
$(".btn3").text(choice4);      



// create a timer that counts down and display it using jquery
// $(".timer").html("Time Remaining " + "00" + counterStart + " seconds");

// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.text(minutes + ":" + seconds);

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }

// jQuery(function ($) {
//     var fiveMinutes = 60 * 5,
//         display = $('#time');
//     startTimer(fiveMinutes, display);
// });
// create if/else statements
// 
// create a var counter for corrrect, incorrect and unasnwered questions.
// create questions with only one answer
// create a submit button that calculates correct and incorrect answers
// create an empty function that resets 