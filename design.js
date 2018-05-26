
// When size is submitted by the user, call makeGrid()
var submitQuery;
submitQuery = $('input[type="submit"]')
submitQuery.click(function(event) {
  event.preventDefault();
  makeGrid();
});
// Function to make grid like structure.
	function makeGrid() {
	console.log("Executing makeGrid") 
// Declaring variables so that we can put data in them, which will make the grid.
	var gridAxisY, gridAxisX, gridRow, gridBox, canvas;
// Assigning values to the variables
	canvas = $('#pixelCanvas');
	gridAxisY = $('#inputHeight').val();
	gridAxisX = $('#inputWidth').val();
// Declaring function	
	canvas.children().remove()
// for loop to make Row	
	for (y = 0; y < gridAxisY; y++) {
	canvas.append('<tr></tr>');
	}
	gridRow = $('tr');
// for loop to make box
	for (x = 0; x < gridAxisX; x++) {
	gridRow.append('<td></td>');
	} 
	gridBox = canvas.find('td');
// When td is clicked by the user, change color of td
	gridBox.click(function() {
// Select color input
		console.log("Executing changeColor");
		var fillColor;
		fillColor = $("#colorPicker").val();
		$(this).attr('bgcolor', fillColor);
	});
}