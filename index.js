(function($){

    var animate = window.setTimeout(function(){
        $('html.csstransitions.js body').addClass('animate');
    }, 500);

    $(window).resize(function(){
        $('.card').css('height', 'auto');
        var halfheight = $('.card').height() / 2;
        halfheight = "-" + halfheight + "px";
        $('.card').css('margin-top', halfheight);
    });

    $('.card').css('height', 'auto');
    var halfheight = $('.card').height() / 2;
    halfheight = "-" + halfheight + "px";
    $('.card').css('margin-top', halfheight);

})(jQuery);