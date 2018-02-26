$('.document').ready(function () {

      // Declare variables for questions, correctAnswers, incorrectAnswers, unanswered, timer, images array, userChoice, message

      var userChoice = '';
      var correctAnswers = 0;
      var incorrectAnswers = 0;
      var unanswered = 0;
      var timer = 30;

      var images = ["../images/Feeny.jpg", "../images/TommyPickles.png", "../images/Jagged.jpg", "../images/Legends.jpg", "../images/SMK.jpg"];


      var triviaQuestions = {
        q1: {
          question: "Mr. Feeny was the teacher in which popular TV show?",
          answerList: ["Fresh Prince of Bel-Air", "Beverly Hills 90210", "Boy Meets Word", "Saved by the Bell"],
          answer: 2,
          q2: {
            question: "What was Tommy's last name in Rugrats?",
            answerList: ["Finster", "Pickles", "Chuckie", "DeVille"],
            answer: 1,
            q3: {
              question: "Jagged Little Pill is the album by which singer?",
              answerList: ["Alanis Morissette", "Whitney Houston", "Mariah Carey", "Courtney Love"],
              answer: 0,
              q4: {
                question: "The gameshow where teams competed to find lost treasures in a Mayan temple was called..?",
                answerList: ["Secrets of a Lost Temple", "The Mayan Maze", "What Would You Do?", "Legends of the Hidden Temple"],
                answer: 3,
                q5: {
                  question: "Which of the following was NOT a character in Super Mario Kart?",
                  answerList: ["Luigi", "Peach", "Crash", "Toad"],
                  answer: 2,
                }
              }
            }
          }
        }
      };

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
        });



        // New game function
        function reset() {
          userChoice = '';
          correctAnswers = 0;
          incorrectAnswers = 0;
          unanswered = 0;
          timer = 30;
          newQuestion();
        };


        // New question function
        function newQuestion() {

        };


        // Time remaining function



        // Answer page function



        // Scoreboard function















      });