function getAge() {
	var dateOfBirth = new Date(1992, 01, 29, 23, 00, 00, 00);
	var actualDate = new Date();

	return parseInt(
		(actualDate - dateOfBirth) / 31536000000
	);
};

function getLanguage() {
	return $('#language').val();
};

$(document).ready(function(){
	
	var language = getLanguage();
	var years = language === 'pt-BR' ? ' anos' : '';
	var seeMore = language === 'pt-BR' ? 'ver mais' : 'see more';
	var seeLess = language === 'pt-BR' ? 'ver menos' : 'see less'; 

	$('#oldAge').text(
		(getAge() - 1).toString() + years
	);
	
	$('#age').text(
		getAge().toString() + years
	);
	
	$('#show').click(function(){

		var text = $(this).text().trim();
		var html = $(this).html();

		if (text == seeMore) {
			$(this).html(html.replace(seeMore, seeLess));
		}
		else {
			$(this).html(html.replace(seeLess, seeMore));
		}

		var el = $(this).parent().find('.state-hidden');
		el.toggle('slow');
	});
});