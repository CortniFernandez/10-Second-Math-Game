$(document).ready(function () {


  var displayRandomProblem = function() {
    $('#equation-box').empty();
    var equation = {};
    var numOne = Math.floor((Math.random() * 10) + 1);
    var numTwo = Math.floor((Math.random() * 10) + 1);
    $('#equation-box').append('<p>' + numOne + ' + ' + numTwo + ' = ?</p>');
    equation.answer = numOne + numTwo;

    $(document).on('click', '#btn-go', function() {
      $('#success-msg').empty();
      var userAnswer = $('#user-answer').val();
      if (userAnswer == equation.answer) {
        $('#success-msg').append('<p>Correct!</p>');
        displayRandomProblem();
        $('#user-answer').val('');
      } else {
        $('#success-msg').append('<p>Wrong!</p>')
        $(document).off('click', '#btn-go');
      };
    });
  };

  $(document).on('click', '#start-game', function() {
    $('#user-answer').val('');
    $('#success-msg').empty();
    displayRandomProblem();
  });

});