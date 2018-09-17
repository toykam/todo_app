$(function() {
	$("#add").on("click", function() {
		var val = $("input").val();
		if (val !== '') {
			var elem = $("<li class='todolists'></li>").text(val);
			$(elem).append("<button class='rem'>X</button>");
			$("#mylist").append(elem);
			$("input").val("");
			$(".rem").on("click", function() {
				$(this).parent().remove();
			});
		}else{
			alert("To-do Name Must not be empty");
		}
	});
});