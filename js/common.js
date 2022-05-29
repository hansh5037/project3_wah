$(function(){
    $(".depth1").on("mouseenter focusin", function(){
        $(this).stop().addClass("active")
    });
    $(".depth1").on("mouseleave focusout", function(){
        $(this).stop().removeClass("active")
    });

    $(".wah-gnb").on("mouseenter focusin", function(){
        $(this).parents("#wah-hd").stop().addClass("active")
        $(".depth2").stop().fadeIn(400);
        $(".wah-gnb-bg").stop().fadeIn(400);
    });
    $(".wah-gnb").on("mouseleave focusout", function(){
        $(this).parents("#wah-hd").stop().removeClass("active")
        $(".depth2").stop().fadeOut(200);
        $(".wah-gnb-bg").stop().fadeOut(200);
    });

    $(".gnb-toggle-btn").click(function(){
        $(this).toggleClass("close");
        $(".m-wah-gnb").toggleClass("open");
        $(".util-wrap").toggleClass("open");
        $(".m-wah-gnb .depth2").hide();
    });

    $(".m-wah-gnb .depth1 > a").click(function(){
        $(this).parent().siblings().find(".depth2").slideUp();
        $(this).next().slideToggle();
    });

});