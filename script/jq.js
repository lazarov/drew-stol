$(document).ready(function() {
  $("header").hide(0).delay(0).fadeIn(2500)
  $("ul.nav li a").click(function () {
     $("header").hide( 1000 );
  });
  $('ul.nav li a').click(function() {
			var page = $(this).attr('href');
			$('#content').load('subs/' + page + '.html');
			return false;
	});
});
