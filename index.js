$(() => {
  const X = true;
  const O = false;

  let turn = X;
  let values = [null, null, null, null, null, null, null, null, null];
  
  const flipTurn = function() {
    turn = !turn;
    $('#turn').text(turn === X ? "X's turn" : "O's turn");
  };

  $('td').click(e => {
    if (values[e.target.id] !== null) {
      return console.log('occupied already');
    }

    let $target = $(e.target);
    $target.text(turn === X ? 'x' : 'o');
    values[e.target.id] = turn;

    flipTurn();
  });
});
