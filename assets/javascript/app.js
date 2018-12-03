$(document).ready(function () {
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
// create variables for user and questions and a counter.

var answers = { correct: 0, incorrect: 0, }
var userSelect = "";
var counterStart = 30;
var correct = 0;
var incorrect = 0;
var unasnwered = 0;


var triviaQues = [
  {
    question: "Which is the only American state to begin with the letter p?",
    choices: ["Pittsburgh", "Pennsylvania", "Park-City", "Puerto-Rico"],
    correct: 2
  },
  {
    question: "Name the worlds largest ocean?",
    choices: ["Atlantic", "Indian", "Pacific", "Arctic"],
    correct: 2
  },
  {
    question: "What is the capital of Spain?",
    choices: ["Madrid", "Barcelona", "Seville", "Granada"],
    correct: 0
  },
  {
    question: "What is the smallest country in the world at only 44 sq.km",
    choices: ["Hati", "St. Lucia", "Vatican City", "Estonia"],
    correct: 2
  },
  {
    question: "What is the worlds biggest island",
    choices: ["Madagascar", "Australia", "Greenland", "Indonesia"],
    correct: 2
  },
  {
    question: "Where would yoou find the worlds most ancient forest?",
    choices: ["Heidleburg, Germany", "Carines, Australia", "Salzburg, Austria", "Bogota, Columbia"],
    correct: 1
  },
]

//display question to user

$("#question").each(function () {
  var ques = triviaQues[0].question;
  $("#question").append(ques);
  console.log(ques);
})


//display choices to user

var choice1 = triviaQues[0].choices[0];
var choice2 = triviaQues[0].choices[1];
var choice3 = triviaQues[0].choices[2];
var choice4 = triviaQues[0].choices[3];
console.log(triviaQues[0].choices[0]);


$(".btn0").text(choice1);
$(".btn1").text(choice2);
$(".btn2").text(choice3);
$(".btn3").text(choice4);



// create and display a timer that counts down

$(".start").click(function () {
  var counter = 30;
   setInterval(function () {
    counter--;
    
    if (counter >= 0) {
      span = document.getElementById("time")
      span.innerHTML = counter;
    }

    if (counter === 0) {

      clearInterval(counter);
    }
  }, 1000);
  console.log(counter);
});


// create onclick event and if/else statements for choices

var userSelect = "";
userSelect = 2


if (triviaQues[0].correct[2] === userSelect); {
  correct++;
  $(".win").text(correct);
  $(".win").html("Wins: " + correct);
  console.log(userSelect);
}

if (triviaQues[1].correct[2] === userSelect); {
  correct++;
  $(".win").text(correct);
  $(".win").html("Wins: " + correct);
  console.log(userSelect);
}

if (triviaQues[2].correct[0] === userSelect); {
  correct++;
  $(".win").text(correct);
  $(".win").html("Wins: " + correct);
  console.log(userSelect);
}

if (triviaQues[3].correct[2] === userSelect); {
  correct++;
  $(".win").text(correct);
  $(".win").html("Wins: " + correct);
  console.log(userSelect);
}

if (triviaQues[4].correct[2] === userSelect); {
  correct++;
  $(".win").text(correct);
  $(".win").html("Wins: " + correct);
  console.log(userSelect);
}

if (triviaQues[5].correct[1] === userSelect); {
  correct++;
  $(".win").text(correct);
  $(".win").html("Wins: " + correct);
  console.log(userSelect);
}
console.log(userSelect);

// else if (triviaQues[5].correct[1] !== userSelect); {
//   correct++;
//   $(".loss").text(incorrect);
//   $(".loss").html("Losses: " + incorrect);
//   console.log(userSelect);
// }




// for (var i = 0; i < triviaQues.question.correct.length; i++)

// $(".buttonChoice").click(function() {
// var selection = '';
// var counter = 0;
// var incorrect = 0;
// var unanswered = 0;

// 
//   )
// }
// 
// create a var counter for corrrect, incorrect and unasnwered questions.
// create a submit button that calculates correct and incorrect answers
// create an empty function that resets 