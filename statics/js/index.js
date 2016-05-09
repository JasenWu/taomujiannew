/**
 * Created by apple on 16/5/9.
 */
$(function(){
    function rightVal(){
        var winWidth = parseInt($(window).width()),
            focusWidth = parseInt($(".js-slider-num-wrap").width());
        return  (winWidth - focusWidth) / 2;
    }
    $(".js-slider-num-wrap").css("right",+rightVal()+"px").css("bottom","10px");

    $(".js-slider3").slider({direction: "left"});

})
