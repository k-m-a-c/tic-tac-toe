$(document).ready(function() {
  var tableCell = $('td');
  var turn = 1;

  tableCell.on("click", function() {

    if (turn % 2 === 0) {
      $(this).css("background-color", "coral").text('X');
    } else {
      $(this).css("background-color", "teal").text("O");
    }

    $(this).off("click");
    turn ++;

  });
});