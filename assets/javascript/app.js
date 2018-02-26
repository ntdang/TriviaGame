$('.document').ready(function () {

  // Declare variables for questions, correctAnswers, incorrectAnswers, unanswered, timer, images array, userChoice, message

  var userChoice = '';
  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;
  var timer = 30;
  var intervalId;

  var triviaQuestions = [{
    question: "Mr. Feeny was the teacher in which popular TV show?",
    answerList: ["Fresh Prince of Bel-Air", "Beverly Hills 90210", "Boy Meets World", "Saved by the Bell"],
    answer: "Boy Meets World",
    image: "../images/Feeny.jpg",
  }, {
    question: "What was Tommy's last name in Rugrats?",
    answerList: ["Finster", "Pickles", "Chuckie", "DeVille"],
    answer: "Pickles",
    image: "../images/TommyPickles.png",
  }, {
    question: "Jagged Little Pill is the album by which singer?",
    answerList: ["Alanis Morissette", "Whitney Houston", "Mariah Carey", "Courtney Love"],
    answer: "Alanis Morissette",
    image: "../images/Jagged.jpg",
  }, {
    question: "The gameshow where teams competed to find lost treasures in a Mayan temple was called..?",
    answerList: ["Secrets of a Lost Temple", "The Mayan Maze", "What Would You Do?", "Legends of the Hidden Temple"],
    answer: "Legends of the Hidden Temple",
    image: "../images/Legends.jpg",
  }, {
    question: "Which of the following was NOT a character in Super Mario Kart?",
    answerList: ["Luigi", "Peach", "Crash", "Toad"],
    answer: "Crash",
    image: "../images/SMK.jpg",
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
    $("#timer").html("<h3>Time Remaining: " + game.timeRemaining + " seconds</h3>");
    game.loadQuestion();
  });

  // Game object
  var game = {
    triviaQuestions: triviaQuestions,
    currentQuestion: 0,
    timeRemaining: timer,
    correct: 0,
    incorrect: 0,
    unanswered: 0,

    // Time remaining functions
    countDown: function () {
      intervalId = setInterval(decrement, 1000);
    },

    decrement: function () {
      game.timeRemaining--;
      $("#timer").html(game.timeRemaining);

      if (game.timeRemaining === 0) {
        stop();
        $("#content").text("Time's up!");
      }
    },

    stop: function () {
      clearInterval(intervalId);
    },

    //loadQuestion function
    loadQuestion: function () {
      $("#current-question").html("<h2>" + triviaQuestions[this.currentQuestion].question + "</h2>");
      for (var i = 0; i < triviaQuestions[this.currentQuestion].answerList.length; i++) {
        $("#answer-choices").append("<button id='answer-button'" + "data-name='" + triviaQuestions[this.currentQuestion].answerList[i] + "'>" + triviaQuestions[this.currentQuestion].answerList[i] + "</button>");
      }

      game.countDown();
    },

    // madeChoice: function (a) {
    //     game.stop();
    //     if ($(a.target).data("name") === triviaQuestions[this.currentQuestion].answer) {
    //       this.answerIsCorrect();
    //     } else {
    //       this.answerIsIncorrect();
    //     }
    //   },

    // answerIsCorrect: function () {
    //   game.stop();
    //   game.correct++;
    //   $("#content").html(messages.correct);
    //   $("#content").append("<img src='" + triviaQuestions[game.currentQuestion].image + "' />");

    //   if (game.currentQuestion === triviaQuestions.length - 1) {
    //     setTimeout(game.results, 3000);
    //   } else {
    //     setTimeout(game.nextQuestion, 3000);
    //   }
    // },  


    // nextQuestion: function () {
    //   game.timeRemaining = timer;
    //   game.currentQuestion++;
    //   game.loadQuestion();
    // },

    // Reset function
    reset: function () {
      correct: 0;
      incorrect: 0;
      unanswered: 0;
      timeRemaining: timer;
    },


  }

});