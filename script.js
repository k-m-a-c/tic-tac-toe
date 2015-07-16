$(document).ready(function() {

  // List game-ending conditions and check for a match after each click
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

  var tableCells = $('td');
  var turn = 1;
  var playerOClickedCells = [];
  var playerXClickedCells = [];

  var compareArrays = function () {
    for (i=0; i < winConditions; i++) {

    }
  }

  // Define how to check for a win condition
  var checkForPlayerOWin = function () {
    for (i=0; i < playerOClickedCells.length; i++) {
      if(playerOClickedCells[i])
    }
  }

  // Define how to check for a stalemate
  var checkForAStalemate = function () {

  }

  // - Add an "x" or an "o" to a cell
  // - Disallow double clicking a cell
  // - Add the clicked cell to the array for "player x"
  //    or "player o"
  tableCells.on("click", function() {

    $(this).data("clicked", true);

    if (turn % 2 === 0) {
      $(this).css("background-color", "coral").text("x");
      $(this).data("player", "x");
      playerXClickedCells.push(this);

      checkForAWin();
      checkForAStalemate();

    } else {
      $(this).css("background-color", "teal").text("o");
      $(this).data("player", "o");
      playerOClickedCells.push(this);

      checkForAWin();
      checkForAStalemate();
    }

    $(this).off("click");
    turn ++;

  });



});