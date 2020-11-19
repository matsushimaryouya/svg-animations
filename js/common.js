/* ページ内スムーズ移動 */
$(function(){
    // スムーススクロール
    $('a[href^="#"]').click(function() {
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
    });

    // card hover action
    $('.squareCard').hover(function(){
        $(this).children(".hoverBox").fadeIn();
    },function(){
        $(this).children(".hoverBox").fadeOut();
    });
});