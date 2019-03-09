$(document).ready(function() {
    $('.carousel').carousel({
        indicators: true,
        fullWidth: true
    });

    var instance = M.Carousel.getInstance($('.carousel'));
    var t = setInterval(function(){instance.next();}, 3000);
    $(".carousel").on('mousedown', function(){
    	clearInterval(t);
    });
});