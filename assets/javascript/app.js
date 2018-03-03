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

  // On-click functions to start, start-over, and userChoice
  $("#start-game").on("click", function () {
    $(this).hide();
    $(".display-4").hide();
    game.loadQuestion();
  });

  $(".answerBtn").click(function () {
    var userChoice = ($(this).attr("data-value"));
    if (userChoice === currentQuestion.answer) {
      console.log(userChoice);
      game.stop();
      game.correct++;
      console.log(game.correct);
      game.correctChoice();
    } else {
      game.stop();
      game.incorrect++;
      game.incorrectChoice();
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
        $("button").hide();
        game.unanswered();
      }
    },

    stop: function () {
      clearInterval(intervalId);
    },

    //loadQuestion function
    loadQuestion: function () {
      currentQuestion = triviaQuestions[counter];
      $("#current-question").html("<h2>" + currentQuestion.question + "</h2>");

      $("#A").text(currentQuestion.answerList[0]).attr("data-value", currentQuestion.answerList[0]).removeClass("buttons-hidden");
      $("#B").text(currentQuestion.answerList[1]).attr("data-value", currentQuestion.answerList[1]).removeClass("buttons-hidden");
      $("#C").text(currentQuestion.answerList[2]).attr("data-value", currentQuestion.answerList[2]).removeClass("buttons-hidden");
      $("#D").text(currentQuestion.answerList[3]).attr("data-value", currentQuestion.answerList[3]).removeClass("buttons-hidden");

      intervalId = setInterval(game.countDown, 1000);
      game.countDown();
    },

    //if correct, show correct message and image
    correctChoice: function () {
      //clear question page
      $("#current-question").empty();
      $("#answer-choices").empty();
      $(".answerBtn").hide();
      $("#message").html("<h4>" + messages.correct + "</h4>");
      $("#image-holder").html("<img src='" + currentQuestion.image + "'/>");
      setTimeout(game.nextQuestion, 3000);
    },

    //if incorrect, show incorrect messae, correct answer and image
    incorrectChoice: function () {
      $("#current-question").empty();
      $("#answer-choices").empty();
      $(".answerBtn").hide();
      $("#message").html("<h4>" + messages.incorrect + "</h4>");
      $("#correct-answer").html("<h4> The correct answer is "+ currentQuestion.answer + "!</h4>");
      $("#image-holder").html("<img src='" + currentQuestion.image + "'/>");
      setTimeout(game.nextQuestion, 3000);
    },

    //unanswered functionn, if the question is not answered, show the correct answer and image
    unanswered: function () {
    unanswered++;
      console.log(unanswered);
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