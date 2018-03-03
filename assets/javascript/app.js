$('.document').ready(function () {

  // Declare variables for questions, correctAnswers, incorrectAnswers, unanswered, timer, images array, userChoice, message

  // var userChoice = '';
  var correct = 0;
  var incorrect = 0;
  var notAnswered = 0;
  var intervalId;

  // Questions, answers, images objects
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


  // Messages object
  var messages = {
    correct: "You got it dude!",
    incorrect: "No way Jose!",
    timesUp: "Time's up!",
    finished: "All done! Here's how you did!"
  };

  // On-click functions to start, start-over, and userChoice
  $("#start-game").on("click", function () {
    $(this).hide();
    $(".display-4").hide();
    game.loadQuestion();
  });

  $("#start-over").on("click", function () {
    game.reset();
    
  });

  $(".answerBtn").click(function () {
    var userChoice = ($(this).attr("data-value"));
    if (userChoice === currentQuestion.answer) {
      console.log("User chose " + userChoice);
      game.stop();
      game.correct++;
      console.log("Correct is at " + game.correct);
      game.correctChoice();
    } else {
      console.log("User chose " + userChoice);
      game.stop();
      game.incorrect++;
      console.log("Incorrect is at " + game.incorrect);
      game.incorrectChoice();
    }
  });


  // Game object
  var game = {
    timer: 4,
    correct: 0,
    incorrect: 0,
    notAnswered: 0,

    // Time remaining functions
    countDown: function () {
      game.timer--;
      $("#timer").html("<h4>Time Remaining: " + game.timer + " seconds</h4>");

      if (game.timer === 0) {
        game.stop();
        $("#timer").html("<h4>" + messages.timesUp + "</h4>");
        game.unanswered();
      }
    },

    stop: function () {
      clearInterval(intervalId);
    },

    //loadQuestion function
    loadQuestion: function () {
      currentQuestion = triviaQuestions[counter];
      console.log("Question counter is at " + counter);
      $("#current-question").html("<h2>" + currentQuestion.question + "</h2>");

      $("#A").text(currentQuestion.answerList[0]).attr("data-value", currentQuestion.answerList[0]).removeClass("buttons-hidden");
      $("#B").text(currentQuestion.answerList[1]).attr("data-value", currentQuestion.answerList[1]).removeClass("buttons-hidden");
      $("#C").text(currentQuestion.answerList[2]).attr("data-value", currentQuestion.answerList[2]).removeClass("buttons-hidden");
      $("#D").text(currentQuestion.answerList[3]).attr("data-value", currentQuestion.answerList[3]).removeClass("buttons-hidden");

      intervalId = setInterval(game.countDown, 1000);
      game.countDown();

      // $("#results").empty();
    },

    //if correct
    correctChoice: function () {
      //clear question page
      $("#current-question").empty();
      $(".answerBtn").hide();
      //show correct message and image
      $("#message").html("<h4>" + messages.correct + "</h4>");
      $("#image-holder").html("<img src='" + currentQuestion.image + "'/>");
      setTimeout(game.nextQuestion, 3000);
    },

    //if incorrect
    incorrectChoice: function () {
      //clear question page
      $("#current-question").empty();
      $(".answerBtn").hide();
      //show incorrect messae, correct answer, and image
      $("#message").html("<h4>" + messages.incorrect + "</h4>");
      $("#correct-answer").html("<h4> The correct answer is " + currentQuestion.answer + "!</h4>");
      $("#image-holder").html("<img src='" + currentQuestion.image + "'/>");
      setTimeout(game.nextQuestion, 3000);
    },

    //unanswered function, if the question is not answered, show the correct answer and image
    unanswered: function () {
      notAnswered++;
      console.log("Not answered is at " + notAnswered);
      //clear question page
      $("#current-question").empty();
      $(".answerBtn").hide();
      //show correct answer message and image
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
      $(".answerBtn").show();

      game.timer = 4;

      if (counter === triviaQuestions.length - 1) {
        game.results();
      } else {
        counter++;
        game.loadQuestion();
      }
    },

    //results page function, shows correct/incorrect/unasnwered and start over button
    results: function () {
      $("#current-question").empty();
      $(".answerBtn").hide();
      $("#correct-answer").hide();
      $("#image-holder").hide();

      $("#message").html("<h4>" + messages.finished + "</h4>");

      $("#correctTotal").html("Correct: " + game.correct);
      $("#incorrectTotal").html("Incorrect: " + game.incorrect);
      $("#unansweredTotal").html("Unanswered: " + game.notAnswered);
      $("#start-over").html("<button>Start Over?</button>");

      // setTimeout(game.reset, 5000);
    },

    // Reset function
    reset: function () {
      correct: 0;
      incorrect: 0;
      notAnswered: 0;
      timer: 4;

      game.loadQuestion();
    },


  }

});