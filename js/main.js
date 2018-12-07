$(document).ready(function() {
  console.log("%c Game loaded successfully", "color: blue");
  $(".moves").append("Game started");
  let inputX = '<div class="x"><i class="fas fa-times fa-lg"></i></div>';
  let inputO = '<div class="o"><i class="far fa-circle fa-lg"></i></div>';
  let turn = "X";
  let win = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];

  $(".box").on("click", function() {
    if (this.childNodes.length > 0) {
      console.log("%c This space is already being used", "color: red");
      $(".moves").append(
        `<br /><span class="warning">This space is already being used</span>`
      );
    } else {
      if (turn == "X") {
        $(this).html(inputX);
        console.log("%c X played their turn", "color: green");
        $(".moves").append("<br />Player X has played");
        turn = "O";
      } else {
        $(this).html(inputO);
        console.log("%c O played their turn", "color: orange");
        $(".moves").append("<br />Player O has played");
        turn = "X";
      }
    }
  });

  // function checkIfWinner() {}
  $(".start-btn").on("click", function() {
    $(".box").empty();
    $(".moves").empty();
    $(".moves").append("New Game Started");
    console.log("%c New game started", "color: blue");
  });
});
