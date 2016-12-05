$(() => {
  const X = true;
  const O = false;

  let over = false;

  let turn = X;
  let values = [null, null, null, null, null, null, null, null, null];
  
  const flipTurn = function() {
    turn = !turn;
    $('#turn').text(turn === X ? 'X\'s turn' : 'O\'s turn');
  };

  const detectWin = function(square) {
    console.log(values);
    let col = square % 3;
    let row = Math.floor(square / 3);
    console.log(col, row);

    if (values[col] === values[square] && values[col + 3] === values[square] && values[col + 6] === values[square]) {
      return true;
    }
    if (values[row * 3] === values[square] && values[row * 3 + 1] === values[square] && values[row * 3 + 2] === values[square]) {
      return true;
    }
    if (square === 0 || square === 4 || square === 8) {
      if (values[0] === values[square] && values[4] === values[square] && values[8] === values[square]) {
        return true;
      }
    }
    if (square === 2 || square === 4 || square === 6) {
      if (values[2] === values[square] && values[4] === values[square] && values[6] === values[square]) {
        return true;
      }
    }

    return false;
  };

  $('td').click(e => {
    if (over) {
      return;
    }
    if (values[e.target.id] !== null) {
      return console.log('occupied already');
    }

    let $target = $(e.target);
    $target.text(turn === X ? 'x' : 'o');
    values[e.target.id] = turn;

    if (detectWin(+e.target.id)) {
      over = true;
      return $('#turn').text(turn === X ? 'X wins!' : 'O wins!');
    }

    flipTurn();
  });
});
