$('.document').ready(function () {

  // Declare variables for questions, correctAnswers, incorrectAnswers, unanswered, timer, images array, userChoice, message

  // var userChoice = '';
  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;
  var intervalId;

  // Questions, answers, images object
  var triviaQuestions = [{
    question: "Mr. Feeny was the teacher in which popular TV show?",
    answerList: ["Fresh Prince of Bel-Air", "Beverly Hills 90210", "Boy Meets World", "Saved by the Bell"],
    answer: "Boy Meets World",
    image: "./assets/images/Feeny.jpg",
  }, {
    question: "What was Tommy's last name in Rugrats?",
    answerList: ["Finster", "Pickles", "Chuckie", "DeVille"],
    answer: "Pickles",
    image: "./assets/images/TommyPickles.png",
  }, {
    question: "Jagged Little Pill is the album by which singer?",
    answerList: ["Alanis Morissette", "Whitney Houston", "Mariah Carey", "Courtney Love"],
    answer: "Alanis Morissette",
    image: "./assets/images/Jagged.jpg",
  }, {
    question: "The gameshow where teams competed to find lost treasures in a Mayan temple was called..?",
    answerList: ["Secrets of a Lost Temple", "The Mayan Maze", "What Would You Do?", "Legends of the Hidden Temple"],
    answer: "Legends of the Hidden Temple",
    image: "./assets/images/Legends.jpg",
  }, {
    question: "Which of the following was NOT a character in Super Mario Kart?",
    answerList: ["Luigi", "Peach", "Crash", "Toad"],
    answer: "Crash",
    image: "./assets/images/SMK.jpg",
  }];


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

  // Game object
  var game = {
    triviaQuestions: triviaQuestions,
    currentQuestion: 0,
    timer: 20,
    correct: 0,
    incorrect: 0,
    unanswered: 0,

    // Time remaining functions
    countDown: function () {
      game.timer--;
      $("#timer").html("<h4>Time Remaining " + game.timer + " seconds</h4>");

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
      $("#current-question").html("<h2>" + triviaQuestions[this.currentQuestion].question + "</h2>");
      for (var i = 0; i < triviaQuestions[this.currentQuestion].answerList.length; i++) {
        $("#answer-choices").append("<button id='answer-button'" + "data-value='" + triviaQuestions[this.currentQuestion].answerList[i] + "'>" + triviaQuestions[this.currentQuestion].answerList[i] + "</button>");
      }

      intervalId = setInterval(game.countDown, 1000);
      $("#timer").html("<h4>Time Remaining " + game.timer + " seconds</h4>");

    },

    //answerChoice function, when user clicks on a choice do this...
    //if correct, show correct message and image
    //else show incorrect message, the correct answer and image
    answerChoice: function () {
      //clear question page
      $("#current-question").empty();
      $("#answer-choices").empty();


      $("button").on("click", function () {
        var userChoice = ($("button").attr("data-value"));
        if (userChoice === triviaQuestions[this.currentQuestion].answer) {
          console.log(userChoice);
          game.stop();
          game.correct++;
          console.log("Correct!");
        }
      })
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
      $("#correct-answer").html("<h4>The correct answer is " + triviaQuestions[this.currentQuestion].answer + "!<h4>");
      $("#image-holder").append("<img src='" + triviaQuestions[this.currentQuestion].image + "'/>");
      // game.nextQuestion();
      
    },





    //nextQuestion function, loads next question
    // nextQuestion: function () {
    //   //clear answer page
    //   $("#message").empty();
    //   $("#correct-answer").empty();
    //   $("#image-holder").empty();


    //   setTimeout(game.loadQuestion, 3000);
    //   game.timer = 25;
    //   game.currentQuestion++;
      
    // },




    //results page function, shows correct/incorrect/unasnwered and start over button





    // Reset function
    reset: function () {
      correct: 0;
      incorrect: 0;
      unanswered: 0;
      timer: 20;
    },


  }

});