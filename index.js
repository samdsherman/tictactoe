$(() => {
  let xTurn = true;
  $('td').click(e => {
    if (xTurn) {
      $(e.target).text('x');
    } else {
      $(e.target).text('o');
    }
    xTurn = !xTurn;
  });
});