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
    correct: "Pennsylvania"
  },
  {
    question: "Name the worlds largest ocean?",
    choices: ["Atlantic", "Indian", "Pacific", "Arctic"],
    correct: "Pacific"
  },
  {
    question: "What is the capital of Spain?",
    choices: ["Madrid", "Barcelona", "Seville", "Granada"],
    correct: "Madrid"
  },
  {
    question: "What is the smallest country in the world at only 44 sq.km",
    choices: ["Hati", "St. Lucia", "Vatican City", "Estonia"],
    correct: "Vatican City"
  },
  {
    question: "What is the worlds biggest island",
    choices: ["Madagascar", "Australia", "Greenland", "Indonesia"],
    correct: "Greenland"
  },
  {
    question: "Where would yoou find the worlds most ancient forest?",
    choices: ["Heidleburg, Germany", "Carines, Australia", "Salzburg, Austria", "Bogota, Columbia"],
    correct: "Carines, Australia"
  },
]

var index = 0

function displayNextQuestion () { 
  
  
  $("#buttonContain").empty();

  //display question to user
  $("#question").html(triviaQues[index].question)
    


  //display choices to user
  for (var i = 0; i < triviaQues[index].choices.length; i++){
    var newChoice = $('<button>')
    newChoice.text(triviaQues[index].choices[i])
    newChoice.addClass('buttonChoice').addClass('btn1')
    $('#buttonContain').append(newChoice)
  }
}

function endGame () {
  var gameEnd = $("<div>").html("GAME OVER");
      gameEnd.id('gameEnd');
    }

    console.log(endGame)

displayNextQuestion();



// create and display a timer that counts down

function setImageSource(imageId, imageSrc) {
  $('#buttonContain' + imageId).attr('src', imageSrc);
}


$(".start").click(function () {
  var counter = 30;

  setTimeout(function(){ 
    
    // alert("Time Out!"); }, 31000);
    $("#time").html("Time Out!"); }, 31000);


     setInterval(function () {
    counter--;

    if (counter >= 0) {
      span = document.getElementById("time")
      span.innerHTML = counter;
    }

    if (counter === 0) {
      endGame;
      clearInterval(counter);
      
    }

    
  }, 1000);
  console.log(counter);
});


// create onclick event and if/else statements for choices




//onclick with increments to next question.

$("#buttonContain").on("click", ".buttonChoice", function() {
  var userSelect = $(this).text();
  
  if (triviaQues[index].correct === userSelect)  {
    correct++;
    $(".correct").text(correct);
    $(".correct").html("Correct: " + correct);
    alert("Correct!!");

  }
  
  else {  
    incorrect++;
    $(".incorrect").text(incorrect);
    $(".incorrect").html("Incorrect: " + incorrect);
    alert("Incorrect!!");
   }

   index++
   if(index===triviaQues.length) {
      alert("GAME OVER");
      $("#question").html("GAME OVER");
      $("#buttonContain").empty();


      
   }
   else { 
    
    displayNextQuestion(); 
   }

   

  console.log(userSelect);  
})



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