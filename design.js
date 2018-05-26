// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!

}
// When size is submitted by the user, call makeGrid()
var submitQuery;
submitQuery = $('input[type="submit"]')
submitQuery.click(function(event) {
  event.preventDefault();
  makeGrid();
});