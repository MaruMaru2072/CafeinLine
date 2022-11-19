$(document).ready(function () {
    $('.next').on('click',function(){
        var currentImg = $('.depan');
        var nextImg = currentImg.next();

        if(nextImg.length)
        {
            currentImg.removeClass('depan').css('z-index',-10);
            nextImg.addClass('depan').css('z-index',10);
        }
    });

    $('.previous').on('click',function(){
        var currentImg = $('.depan');
        var prevImg = currentImg.prev();

        if(prevImg.length)
        {
            currentImg.removeClass('depan').css('z-index',-10);
            prevImg.addClass('depan').css('z-index',10);
        }
    });

    $('.next2').on('click',function(){
        var currentImg = $('.depan2');
        var nextImg = currentImg.next();

        if(nextImg.length)
        {
            currentImg.removeClass('depan2').css('z-index',-20);
            nextImg.addClass('depan2').css('z-index',20);
        }
    });

    $('.previous2').on('click',function(){
        var currentImg = $('.depan2');
        var prevImg = currentImg.prev();

        if(prevImg.length)
        {
            currentImg.removeClass('depan2').css('z-index',-10);
            prevImg.addClass('depan2').css('z-index',10);
        }
    });
});
