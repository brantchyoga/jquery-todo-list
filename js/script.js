var list = $('<ul>');

list.addClass("list");
$('#container').append(list);

// $(function  () {
//   list.sortable();
// });

var clearItem = function() {
	$(this).parent().remove();
	console.log('test');
}

var addListItem = function() {
	var removeItem = $('<a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Delete</a>');
	var listItem = $('<li>');
	var newListItem = listItem.text($("#tasktodo").val());
	newListItem.addClass('toremove');
	$(list).append(newListItem);
	$("#tasktodo").val('');
	$('#tasktodo').focus();
	newListItem.append(removeItem);
	
}

var clearList = function() {
	$('.toremove').remove();
}






$("document").ready(function() {
	
	$('#submit').on('click', addListItem);
	$('#delete').on('click', clearList);
	$('#container').on("click", 'a.',clearItem);
	
	



});