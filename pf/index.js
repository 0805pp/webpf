// $ => 포장하다.
$('.wedpf-slider > .side-bars > div').click(function () {
    // this 클릭 당사자
    var $clickedBtn = $(this);
    // closest => 조상중에서 가장 가까운 엘리먼트 하나 찾아주세요.
    var $slider = $clickedBtn.closest('.wedpf-slider');

    //.index() => 형제번호
    var isLeft = $clickedBtn.index() == 0;

    // find => 지역탐색
    // $currnet => 현재 active 된 녀석
    var $currnet = $slider.find('.slides > .active');
    // next => 다음 형제 가져와
    var $post = null;

    if (isLeft) {
        $post = $currnet.prev();
    } else {
        $post = $currnet.next();
    }

    if ($post.length == 0) {
        if (isLeft) {
            $post = $slider.find('.slides > div:last-child');
        } else {
            $post = $slider.find('.slides > div:first-child');
        }
    }

    $currnet.removeClass('active');
    $post.addClass('active');
});

setInterval(function () {
    $('.wedpf-slider > .side-bars > div:last-child').click();
}, 7000);
