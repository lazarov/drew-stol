$(document).ready(function () {
  $('ul li a').click(function () {
      var loffer = $(this).attr('href');
      $('#loferty').load('subs/oferta/' + loffer + '.html').fadeIn(1500);;
      return false;
  });
});
