$(document).ready(function () {
	$.ajaxSetup({ cache: false });
	var quote;
	var author;


	function getNewQuote() {
		$.getJSON("//quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function (data) {
			if (data[0].content.length > 120) {
				getNewQuote();
			}
			else {
				$(".quote").html(data[0].content);
				var quoteAuthor = " —" + data[0].title;
				$(".author").html(quoteAuthor);
			}
		});
	}
	getNewQuote();

	$('#newQuote').on('click', function () {
		getNewQuote();
	});

	$('#tweet').on('click', function () {
		window.open('https://twitter.com/intent/tweet?text=' + $('.quote').text() + " - " + $('.author').text());
	});
});
