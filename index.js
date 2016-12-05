$(() => {
  const X = true;
  const O = false;

  let turn = X;
  let values = [null, null, null, null, null, null, null, null, null];

  $('td').click(e => {
    if (values[e.target.id] !== null) {
      return console.log('occupied already');
    }

    let $target = $(e.target);
    $target.text(turn === X ? 'x' : 'o');
    values[e.target.id] = turn;

    turn = !turn;
  });
});