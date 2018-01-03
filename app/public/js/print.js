
$(document).ready(function(){
	
	$('#print').click(function(){
		$('a').attr('href', '#');
		window.print();
	});
});