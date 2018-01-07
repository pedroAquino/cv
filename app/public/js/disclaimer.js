function getAge() {
	var dateOfBirth = new Date(1992, 01, 29, 23, 00, 00, 00);
	var actualDate = new Date();

	return parseInt(
		(actualDate - dateOfBirth) / 31536000000
	);
};

$(document).ready(function(){
	
	$('#oldAge').text(
		(getAge() - 1).toString() + ' anos'
	);
	
	$('#age').text(
		getAge().toString() + ' anos'
	);
	
	$('#show').click(function(){

		var text = $(this).text().trim();
		var html = $(this).html();

		if (text == 'ver mais') {
			$(this).html(html.replace('ver mais', 'ver menos'));
		}
		else {
			$(this).html(html.replace('ver menos', 'ver mais'));
		}

		var el = $(this).parent().find('.state-hidden');
		el.toggle('slow');
	});
});