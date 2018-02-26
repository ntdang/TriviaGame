$('.document').ready(function () {

  // Declare variables for questions, correctAnswers, incorrectAnswers, unanswered, timer, images array, userChoice, message

  var userChoice = '';
  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;
  var timer = 30;
  var intervalId;

  var images = ["../images/Feeny.jpg", "../images/TommyPickles.png", "../images/Jagged.jpg", "../images/Legends.jpg", "../images/SMK.jpg"];


  var triviaQuestions = [{
    question: "Mr. Feeny was the teacher in which popular TV show?",
    answerList: ["Fresh Prince of Bel-Air", "Beverly Hills 90210", "Boy Meets Word", "Saved by the Bell"],
    answer: 2,
  }, {
    question: "What was Tommy's last name in Rugrats?",
    answerList: ["Finster", "Pickles", "Chuckie", "DeVille"],
    answer: 1,
  }, {
    question: "Jagged Little Pill is the album by which singer?",
    answerList: ["Alanis Morissette", "Whitney Houston", "Mariah Carey", "Courtney Love"],
    answer: 0,
  }, {
    question: "The gameshow where teams competed to find lost treasures in a Mayan temple was called..?",
    answerList: ["Secrets of a Lost Temple", "The Mayan Maze", "What Would You Do?", "Legends of the Hidden Temple"],
    answer: 3,
  }, {
    question: "Which of the following was NOT a character in Super Mario Kart?",
    answerList: ["Luigi", "Peach", "Crash", "Toad"],
    answer: 2,
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
    $("#content").html("<h3>Time Remaining: " + game.timeRemaining + " seconds</h3>");
    game.loadQuestion();
    game.countDown();
  });

  // Game object
  var game = {
    triviaQuestions: triviaQuestions,
    currentQuestion: 0,
    timeRemaining: timer,
    correct: 0,
    incorrect: 0,
    unanswered: 0,

    // Time remaining function
    countDown: function () {
      intervalId = (decrement, 1000);
    },

    decrement: function () {
      timer--;
      $("#timer").html(game.timeRemaining);

      if (game.timeRemaining === 0) {
        stop();
        $("#timer").text("Time's up!");
      }
    },

    stop: function () {
      clearInterval(intervalId);
    },

    //loadQuestion function
    loadQuestion: function () {
      $("#current-question").html("<h2>" + triviaQuestions[this.currentQuestion].question + "</h2>");
      for (var i = 0; i < triviaQuestions[this.currentQuestion].answerList.length; i++) {
        $("#answer-choices").append("<button class='answer-button' id='button'" + "data-name'" + triviaQuestions[this.currentQuestion].answerList[i] + "'>" + triviaQuestions[this.currentQuestion].answerList[i] + "</button>");
      }
    },

    // Reset function
    reset: function () {
      correct: 0;
      incorrect: 0;
      unanswered: 0;
      timeRemaining: timer;
    },





    // Answer page function



    // Scoreboard function














  }

});