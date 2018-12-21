//Check off specific todos by clicking

$("ul").on("click", "li", function(){
	//if li is gray
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	//Click on X to delete todo
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		//create a new Li and add to ul
		$("ul").append("<li><span><i class = 'fas fa-trash'></i> </span>" + todoText + "</li>");
	}
});

$(".fa-list-alt").click(function(){
	$("input[type = 'text']").fadeToggle();
});