$(document).ready(function () {

  var currentProblem;

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
    } else {
      $('#success-msg').append('<p>Wrong!</p>')
      $(document).off('click', '#btn-go');
    };
  }

  $(document).on('click', '#btn-go', function() {
    checkAnswer(Number($('#user-answer').val()), currentProblem.answer);
  });

  newProblem();
  


});