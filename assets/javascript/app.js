$('.document').ready(function () {

  // Declare variables for questions, correctAnswer, incorrectAnswer, unanswered, wins, losses, timer, images array, userChoice, message

  var wins = 0;
  var losses = 0;
  var currentQuestion = '';
  var userChoice = '';
  var correctAnswer = '';
  var incorrectAnswer = '';
  var unanswered = '';

  var images = ["../images/Feeny.jpg", "../images/TommyPickles.png", "../images/Jagged.jpg", "../images/Legends.jpg", "../images/SMK.jpg"];



  // Questions Object
  var questions = [{
    question: "Mr. Feeny was the teacher in which popular TV show?",
    answerList: ["Fresh Prince of Bel-Air", "Beverly Hills 90210", "Boy Meets Word", "Saved by the Bell"],
    answer: 2
  }, {
    question: "What was Tommy's last name in Rugrats?",
    answerList: ["Finster", "Pickles", "Chuckie", "DeVille"],
    answer: 1
  }, {
    question: "Jagged Little Pill is the album by which singer?",
    answerList: ["Alanis Morissette", "Whitney Houston", "Mariah Carey", "Courtney Love"],
    answer: 0
  }, {
    question: "The gameshow where teams competed to find lost treasures in a Mayan temple was called..?",
    answerList: ["Secrets of a Lost Temple", "The Mayan Maze", "What Would You Do?", "Legends of the Hidden Temple"],
    answer: 3
  }, {
    question: "5) Which of the following was NOT a character in Super Mario Kart?",
    answerList: ["Luigi", "Peach", "Crash", "Toad"],
    answer: 2
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
    newGame();
  });



  // New game function
  function newGame() {
    wins = 0;
    losses = 0;
    currentQuestion = '';
    userChoice = '';
    correctAnswer = '';
    incorrectAnswer = '';
    unanswered = '';
  };


  // New question function
  $('#current-question').html('Question #' + (currentQuestion + 1) + '/' + questions.length);
  $('.question').html('<h2>' + triviaQuestions[currentQuestion].question + '</h2>');
  for (var i = 0; i < 4; i++) {
    var choices = $('<div>');
    choices.text(questions[currentQuestion].answerList[i]);
    choices.attr({
      'data-index': i
    });
    choices.addClass('thisChoice');
    $('.answerList').append(choices);
  }



  // Time remaining function



  // Answer page function



  // Scoreboard function















});