$(document).ready(function () {

  var currentProblem;
  var maxTime = 10;
  var yourScore = 0;
  var highScore = 0;
  var timer;

  var startGame = function() {
    if (!timer) {
      if (maxTime === 0) {
        alert("Time's up! Ready to try again?");
        updateMaxTime(10);
        if (yourScore > highScore) {
          $('#high-score').text(yourScore);
          alert("New high score! Keep going!");
        };
        updateScore(-yourScore);
      }
      timer = setInterval(function () {
        updateMaxTime(-1);
        if (maxTime === 0) {
          clearInterval(timer);
          timer = undefined;
        }
      }, 1000);
    }
  }

  var updateMaxTime = function (amount) {
    maxTime += amount;
    $('#countdown').html('<p>' + maxTime + '</p>');
  }

  var updateScore = function (amount) {
    yourScore += amount;
    $('#your-score').text(yourScore);
  };

  var getRandomEq = function() {
    var equation = {};
    var numOne = Math.floor((Math.random() * 10) + 1);
    var numTwo = Math.floor((Math.random() * 10) + 1);
    equation.display = numOne + ' + ' + numTwo + ' = ?';
    equation.answer = numOne + numTwo;
    return equation;
  };

  var newProblem = function() {
    currentProblem = getRandomEq();
    $('#equation-box').text(currentProblem.display);
  };

  var checkAnswer = function(userAnswer, correctAnswer) {
    $('#success-msg').empty();
    if (userAnswer === correctAnswer) {
      $('#success-msg').append('<p>Correct!</p>');
      newProblem();
      $('#user-answer').val('');
      updateMaxTime(+1);
      updateScore(+1);
    } else {
      $('#success-msg').append('<p>Wrong!</p>')
     
    };
  }

  $(document).on('keyup', '#user-answer', function(e) {
    if (e.keyCode == 13) {
    checkAnswer(Number($('#user-answer').val()), currentProblem.answer);
    };
  });

  $('#user-answer').on('keyup', function() {
    startGame();
  });

  newProblem();

});