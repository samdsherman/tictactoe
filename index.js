$(() => {
  // $('body').text('hello');
  $('td').click(e => {
    console.log(e.target.id);
  });
});