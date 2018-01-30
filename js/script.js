//Connects 2 separate lists using there class
$("#tasklist, #finished").sortable({
      connectWith: ".sortable"
    }).disableSelection();
//Grabs the clicked <a> tag and removes the parent
//element <li>
var clearItem = function() {
	$(this).parent().remove();
}
//Function creates li & a tags, adds a class,
//grabs the value from the input field and
//puts it into html list
var addListItem = function() {
	var removeItem = $('<a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Delete</a>');
	var newListItem = $('<li>').text($("#tasktodo").val());;
	newListItem.addClass('toremove');
//appending <a> tag to li is important for the
//onclick function clearItem
	newListItem.append(removeItem);
	$('#tasklist').hide()
			.css('opacity',0.0)
			.append(newListItem)
			.show('slow')
			.animate({opacity: 1.0});
//resets input field to nothing and focuses
	$("#tasktodo").val('');
	$('#tasktodo').focus();
}

var clearList = function() {
	$('.toremove').remove();
}

$("document").ready(function() {
	$('#submit').on('click', addListItem);
//Adds new list item when enter is pressed only
// if theres a value
	$('#tasktodo').keypress(function(e){
        if(e.which == 13){
        	e.preventDefault();
        	if ($("#tasktodo").val()) {
        		addListItem();
        	}
        }
    });
	$('#delete').on('click', clearList);
//grabs the parent element of the event handler <a>
	$('#finished').on("click", 'a',clearItem);
});