$(document).ready(function(){
	$("#show").click(function(){

		var text = $(this).text().trim();
		var html = $(this).html();

		if (text == "ver mais") {
			$(this).html(html.replace("ver mais", "ver menos"));
		}
		else {
			$(this).html(html.replace("ver menos", "ver mais"));
		}

		var el = $(this).parent().find(".state-hidden");
		el.toggle("slow");
	});
});