$(document).ready(function() {
  $("*").dblclick(function(e) {
       e.preventDefault();
  });
  $("header").hide(0).delay(0).fadeIn(2500);
  $("ul").show('slide', {direction: 'right'}, 1500);
  $("ul.nav li a").click(function () {
     $("header").hide( 1000 );
  });
  $('ul.nav li a').click(function() {
			var page = $(this).attr('href');
			$('#content').load('subs/' + page + '.html').hide(0).delay(0).fadeIn(1500);
			return false;
	});
});
