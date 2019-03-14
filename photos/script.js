$(window).on('load', function() {
    $("#loading").hide();

    $('.carousel').carousel({
        indicators: true,
        fullWidth: true
    });

    var instance = M.Carousel.getInstance($('.carousel'));
    var t = setInterval(function(){instance.next();}, 3000);
    $(".carousel").one('mousedown', function(){
    	clearInterval(t);
    });
});