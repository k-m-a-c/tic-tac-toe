$(document).ready(function () {

  /* GLOBAL VARIABLES */

  // win conditions
  var winConditions = [
    // row win conditions
    [topLeft, topCentre, topRight],
    [middleLeft, middleCentre, middleRight],
    [bottomLeft, bottomCentre, bottomRight],
    // column win conditions
    [topLeft, middleLeft, bottomLeft],
    [topCentre, middleCentre, bottomCentre],
    [topRight, middleRight, bottomRight],
    // diagonal win conditions
    [topLeft, middleCentre, bottomRight],
    [topRight, middleCentre, bottomLeft]
  ];

  // set turn
  var turn = 1;

  /* END GLOBAL VARIABLES */

  // check for a game end
  var checkForWin = function() {

  }

  var checkForStalemate = function() {

  }

  // create players
  var Player = function() {
    this.name = name;
    this.marker = marker;
    this.moves = [];
  }

  var x = new Player(name = "x", marker = "X");
  var o = new Player(name = "o", marker = "O");

  var players = [];
  players.push(x, o);

  // change turns
  var setCurrentPlayer = function() {
    var currentPlayer = players[0];

    if (turn % 2 === 0) {
      return currentPlayer = players[1];

    } else {
      return currentPlayer = players[0];
    }

  }

  // place an "x" or "o" on the board
  var squares = $('.square');

  squares.on('click', function() {
    $(this).data('clicked', true);

    if (setCurrentPlayer() === players[0]) {

      // display the player's marker on the board
      $(this).text(players[0].marker);
      // add the player's move to his object
      players[0].moves.push(this);
      // save player data on the clicked square
      $(this).data('player', 'x');

    } else {

      // display the player's marker on the board
      $(this).text(players[1].marker);
      // add the player's move to his object
      players[1].moves.push(this);
      // save player data on the clicked square
      $(this).data('player', 'o');
    }

    $(this).off("click");
    turn ++;
  });

});