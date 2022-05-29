$(function(){
    let ftEl = $('#footer').clone();
    $("#wah-main").append(ftEl);
    $("#wah-main").fullpage({
        navigation: true,
        navigationPosition: "right",
        navigationTooltips: ["HOME", "웹접근성연구소", "웹 접근성이란?", "주요사업", "정보마당"],
        afterLoad: function(origin, destination, direction){
            var loadedSection = this;
            if(destination.index == 1 || destination.index == 2) {
                $("#wah-hd").addClass("shadow");
            } else {
                $("#wah-hd").removeClass("shadow");
            }
        },
    });
    var mainvisualSwiper = new Swiper(".main-vusual-swiper", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
        effect: "fade",
        speed: 1000,
      });
    var mainiconSwiper = new Swiper(".main-section2-icon-container", {
        slidesPerView: 'auto',
        spaceBetween: 12,
    });
   
    $(".main-biz-section").on("mouseenter focusin", function(){
        $(this).siblings().find(".mb-hide").slideUp(300);
        $(this).find(".mb-hide").slideDown(300);
    });


    $(".notice-btn").addClass("active");
    $(".notice-btn").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });
    $(".reference-btn").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });
    $('.slide-btn').click(function(){
        var $this = $(this);
        var index = $this.index();
        var $outer = $this.parents('.sec5');
        var $current = $outer.find('.main-section5-container > .tab-box.active');
        var $post = $outer.find('.main-section5-container > .tab-box').eq(index);
        
        $current.removeClass('active');
        $post.addClass('active');
        // 위의 코드는 탭메뉴 코드입니다.
        
        $('.slick-container').slick('setPosition');
        // 탭 페이지 안에서 slick 사용시 – slick이 첫페이지에 있지 않으면 slick의 첫번째 이미지가 보이지 않고 2번째 부터 도는것을 확인 할 수 있다. 해당 문제는 탭이 active가 된 후 그 페이지에 slick이 있다면 = slick의 위치를 수동으로 새로 고쳐줘야 한다.
    });
    
    // 기존 처음의 slick 적용
    $('.slick-container').slick({
        slidesToShow: 3,
        dots: true,
        infinite: true,
        touchThreshold: 20,
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 1,
              }
            },
        ]
    });
});