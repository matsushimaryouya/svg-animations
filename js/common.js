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

// lottie
var animation = bodymovin.loadAnimation({
    container: document.getElementById('Lottie'), 
    renderer: 'svg', // 描画形式
    loop: true, // trueにしたらループ。1回再生の場合はfalse
    autoplay: true, // 自動再生
    path: 'loadingV2.json' ,// jsonのパスを指定
    name: "Hello World", // 今後のリファレンスとして名前を指定（オプション）
    });