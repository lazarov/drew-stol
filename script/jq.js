$(document).ready(function() {
  $("header").hide(0).fadeIn(2000);

  $("ul.nav li a").click(function () {
     $("header").hide( 1000 );
  });

  $('ul.nav li a').click(function() {
			var page = $(this).attr('href');
			$('#content').load('subs/' + page + '.html').hide(0).fadeIn(1500);
			return false;
	});
});
