$('a.changecolor').click(function() {
    var house = $(this).attr("id"); 
    $('#paper').removeClass();
    $('#paper').addClass($(this).attr("id"));
    return false;
});

$('.readmore a').click(function() {
  var article = '#article'+$(this).attr("id");
    $('#content').fadeOut(150);
     $(article).delay(151).fadeIn(150);
    return false;
});

$('.frontpage a').click(function() {
  var article = '#article'+$(this).attr("id");
    $(article).fadeOut(150);
     $('#content').delay(151).fadeIn(150);
    return false;
});
