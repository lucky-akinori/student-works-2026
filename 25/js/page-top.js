//ページトップアニメーション
$(function () {
    var topBtn = $('p.pagetop');
        topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn(300);
        } else {
            topBtn.fadeOut(300);
        }
    });
    $('p.pagetop a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
