//HTML読み込み後の実行
$(function () {
	$('.slider').bxSlider({
		auto: true,
		pause: 3000,
		speed: 3000,
		pager: true,
		controls: false,
		mode: 'fade',
	});
});

// vegas
$(function () {
	$('#slider').vegas({
		slides: [
			{ src: 'images/slide1.jpg' },
			{ src: 'images/slide2.jpg' },
			{ src: 'imagesg/slide3.jpg' }
		],
		animation: 'random',
		delay: 10000,
		animationDuration: 20000,
	});
});

// ふわっと表示
$(function () {
	$(window).scroll(function () {
		$(".effect-fade").each(function () {
			var elemPos = $(this).offset().top; /* 要素の位置を取得 */
			var scroll = $(window).scrollTop(); /* スクロール位置を取得 */
			var windowHeight = $(window).height(); /* 画面幅を取得（画面の下側に入ったときに動作させるため） */
			if (scroll > elemPos - windowHeight) {
				/* 要素位置までスクロール出来たときに動作する 1度だけふわっとさせたい場合はelse文を削除*/
				$(this).addClass("effect-scroll");
			} else {
				$(this).removeClass("effect-scroll");
			}
		});
	});
	jQuery(window).scroll();
});

//HTML読み込み後の実行
$(function(){
	$('.slider').bxSlider({
auto: true,
pause: 2000,
speed: 2000,
pager: true,
controls: false,
mode:'fade',
});
});