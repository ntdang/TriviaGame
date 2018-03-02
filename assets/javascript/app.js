$('.document').ready(function () {

  // Declare variables for questions, correctAnswers, incorrectAnswers, unanswered, timer, images array, userChoice, message

  // var userChoice = '';
  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;
  var intervalId;

  // Questions, answers, images object


  var q1 = {
    question: "Mr. Feeny was the teacher in which popular TV show?",
    answerList: ["Fresh Prince of Bel-Air", "Beverly Hills 90210", "Boy Meets World", "Saved by the Bell"],
    answer: "Boy Meets World",
    image: "./assets/images/Feeny.jpg"
  }

  var q2 = {
    question: "What was Tommy's last name in Rugrats?",
    answerList: ["Finster", "Pickles", "Chuckie", "DeVille"],
    answer: "Pickles",
    image: "./assets/images/TommyPickles.png"
  }

  var q3 = {
    question: "Jagged Little Pill is the album by which singer?",
    answerList: ["Alanis Morissette", "Whitney Houston", "Mariah Carey", "Courtney Love"],
    answer: "Alanis Morissette",
    image: "./assets/images/Jagged.jpg"
  }

  var q4 = {
    question: "The gameshow where teams competed to find lost treasures in a Mayan temple was called..?",
    answerList: ["Secrets of a Lost Temple", "The Mayan Maze", "What Would You Do?", "Legends of the Hidden Temple"],
    answer: "Legends of the Hidden Temple",
    image: "./assets/images/Legends.jpg"
  }

  var q5 = {
    question: "Which of the following was NOT a character in Super Mario Kart?",
    answerList: ["Luigi", "Peach", "Crash", "Toad"],
    answer: "Crash",
    image: "./assets/images/SMK.jpg"
  }

  var triviaQuestions = [q1, q2, q3, q4, q5];
  var counter = 0;


  // Messages Object
  var messages = {
    correct: "You got it dude!",
    incorrect: "No way Jose!",
    timesUp: "Time's up!",
    finished: "All done! Here's how you did!"
  };

  // On-click functions to start and start-over
  $("#start-game").on("click", function () {
    $(this).hide();
    $(".display-4").hide();
    game.loadQuestion();
  });

  $("button").on("click", function () {
    var userChoice = ($(this).attr("data-value"));
    if (userChoice === currentQuestion.answer) {
      console.log(userChoice);
      // game.stop();
      // game.correct++;
      // console.log("Correct!");
      // answerChoice();
    }
  });


  // Game object
  var game = {
    // triviaQuestions: triviaQuestions,
    // currentQuestion: triviaQuestions[counter],
    timer: 4,
    correct: 0,
    incorrect: 0,
    unanswered: 0,

    // Time remaining functions
    countDown: function () {
      game.timer--;
      $("#timer").html("<h4>Time Remaining: " + game.timer + " seconds</h4>");

      if (game.timer === 0) {
        game.stop();
        $("#timer").html("<h4>" + messages.timesUp + "</h4>");
        $("#answer-choices").hide();
        game.unanswered();
        console.log("Time's Up!");
      }
    },

    stop: function () {
      clearInterval(intervalId);
    },

    //loadQuestion function
    loadQuestion: function () {
      currentQuestion = triviaQuestions[counter];

      $("#current-question").html("<h2>" + currentQuestion.question + "</h2>");
      for (var i = 0; i < currentQuestion.answerList.length; i++) {
        $("#answer-choices").append("<button id='answer-button'" + "data-value='" + currentQuestion.answerList[i] + "'>" + currentQuestion.answerList[i] + "</button>");
      }

      intervalId = setInterval(game.countDown, 1000);
      game.countDown();
    },

    //answerChoice function, when user clicks on a choice do this...
    //if correct, show correct message and image
    //else show incorrect message, the correct answer and image
    answerChoice: function () {
      //clear question page
      $("#current-question").empty();
      $("#answer-choices").empty();


      //   $("button").on("click", function () {
      //     userChoice = ($(this).attr("data-value"));
      //     if (userChoice === currentQuestion.answer) {
      //       console.log(this);
      //       // game.stop();
      //       // game.correct++;
      //       // console.log("Correct!");
      //       // answerChoice();
      //     }
      //   })
    },

    // //correct and incorrect function, if the answer is correct, show correct message and image
    // //else show incorrect message, the correct answer and image
    // answerPage: function () {
    //   //clear question page
    //   $("#current-question").empty();
    //   $("#answer-choices").empty();


    // },

    //unanswered functionn, if the question is not answered, show the correct answer and image
    unanswered: function () {
      $("#correct-answer").html("<h4>The correct answer is " + currentQuestion.answer + "!<h4>");
      $("#image-holder").html("<img src='" + currentQuestion.image + "'/>");
      setTimeout(game.nextQuestion, 3000);

    },





    //nextQuestion function, loads next question
    nextQuestion: function () {
      //clear answer page
      $("#message").empty();
      $("#correct-answer").empty();
      $("#image-holder").empty();

      game.timer = 4;
      counter++;
      game.loadQuestion();

    },




    //results page function, shows correct/incorrect/unasnwered and start over button





    // Reset function
    reset: function () {
      correct: 0;
      incorrect: 0;
      unanswered: 0;
      timer: 4;
    },


  }

});