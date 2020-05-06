/*
$(function(){

    //.accordion1の中のp要素がクリックされたら
	$('.accordion1 .question').click(function(){

		//クリックされた.accordion1の中のp要素に隣接するul要素が開いたり閉じたりする。
		$(this).next('.answer').slideToggle();

	});
});

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 1000;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
		var headerHeight = 55.48; //固定ヘッダーの高さ
		var position = target.offset().top - headerHeight; //ターゲットの座標からヘッダの高さ分引く
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

$(function(){
	$('.slider').slick({
 infinite: true,
arrows:true,
 slidesToShow: 1,
 adaptiveHeight: true
});
 });

 $(function() {
    $('#navToggle').click(function(){//headerに .openNav を付加・削除
        $('.header').toggleClass('openNav');
    });
});
*/
