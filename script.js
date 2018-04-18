
$('a.changecolor').click(function() {
    var house = $(this).attr("id"); 
    $('#paper').removeClass();
    $('#paper').addClass($(this).attr("id"));
    return false;
});
