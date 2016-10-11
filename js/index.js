$(function () {
    $('.nav-left').on('click',function () {
        $(this).find('.parallel').toggleClass('traX');
        $(this).find('.straight').toggleClass('traY');
        $('.mask').slideToggle('slide');
    })
    // 楼层跳转
    $(".nav li").eq(0).click(function (event) {
        $("body").animate({scrollTop:$('.banner').offset().top},500);
    });
    $(".nav li ").eq(1).click(function(event) {
        $("body").animate({scrollTop: $('.about').offset().top}, 500);
    });
    $(".nav li ").eq(2).click(function(event) {
        $("body").animate({scrollTop: $('.works').offset().top}, 500);
    });
    $(".nav li ").eq(3).click(function(event) {
        $("body").animate({scrollTop: $('.experience').offset().top}, 500);
    });
    $(".nav li ").eq(4).click(function(event) {
        $("body").animate({scrollTop: $('.contact').offset().top}, 500);
    });
    $('.More').on('click',function(){
        $('body').animate({scrollTop:$('.about').offset().top},500);
    })
    // 小屏楼层跳转
    $(".nav-list li").eq(0).click(function (event) {
        $("body").animate({scrollTop:$('.banner').offset().top},500);
    });
    $(".nav-list li ").eq(1).click(function(event) {
        $("body").animate({scrollTop: $('.about').offset().top}, 500);
    });
    $(".nav-list li ").eq(2).click(function(event) {
        $("body").animate({scrollTop: $('.works').offset().top}, 500);
    });
    $(".nav-list li ").eq(3).click(function(event) {
        $("body").animate({scrollTop: $('.experience').offset().top}, 500);
    });
    $(".nav-list li ").eq(4).click(function(event) {
        $("body").animate({scrollTop: $('.contact').offset().top}, 500);
    });


    $('#gotop').click(function(){
        $('body').animate({scrollTop: 0}, 800);
        return false;
    })

    //滚动条事件
    $(window).scroll(function(){
        if($(window).scrollTop()>$('.about').offset().top){
            $('#gotop').css({'display':'block'})
        }else{
            $('#gotop').css('display','none')
        }
        if($(window).scrollTop()>$('.works').offset().top-100){
            $('.apple,.chess,.snake,.yintai,.tel,.tianmao,.poker,.music,.ps,.camera').css({'animation':'top .5s linear','display':'block'})
        }
        if($(window).scrollTop()>$('.contact').offset().top){

        }
    })
})