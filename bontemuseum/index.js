// $ => 포장하다.
$('.bonte-slider > .side-bars > div').click(function () {
    // this 클릭 당사자
    var $clickedBtn = $(this);
    // closest => 조상중에서 가장 가까운 엘리먼트 하나 찾아주세요.
    var $slider = $clickedBtn.closest('.bonte-slider');

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

    var postIndex = $post.index();
    var $item = $(this).parent().parent().find('>.item > div');

    $item.removeClass('active');
    $item.eq(postIndex).addClass('active');

});

setInterval(function () {
    $('.bonte-slider > .side-bars > div:last-child').click();
}, 6000);

// $('.bonte-slider .item > div').click(function() {
//     // this는 `클릭` 이라는 사건을 당한 당사자 입니다.
//     // 즉 this는 여러분이 클릭한 div를 의미합니다.

//     // $(this)는 `이거 포장해주세요!` 라는 의미입니다.
//     // 여기서 이거는 this 입니다.
//     // 이렇게 포장을 하는 이유는 포장을 한 후에는 명령을 내리기 편하기 때문입니다.
//     var $클릭된_녀석 = $(this);

//     // 즉 .page-nav 를 말합니다.
//     var $클릭된_녀석의_부모 = $클릭된_녀석.parent()

//     // 지역탐색, 참고로 $('')는 전국탐색입니다.
//     var $기존_활성된_녀석 = $클릭된_녀석의_부모.find('.active');
//     $기존_활성된_녀석.removeClass('active');
//     $클릭된_녀석.addClass('active');

//     var 이번에_클릭된_녀석이_형제중에서_몇번째인지 = $클릭된_녀석.index();

//     // 조상중에서 .slider-2 를 가진 녀석을 딱 하나 가져온다.(기준 나랑 가장 가까운 것)
//     var $슬라이더 = $클릭된_녀석.closest('.slider-2');

//     // 기존에 나와있던 이미지를 안나오게 한다.
//     $슬라이더.find('.slides > div.active').removeClass('active');
//     // 현재 클릭된 버튼의 순서에 맞춰서 슬라이드를 보여준다.
//     $슬라이더.find('.slides > div:nth-of-type(' + (이번에_클릭된_녀석이_형제중에서_몇번째인지 + 1) + ')').addClass('active');
// });

$('.bonte-slider > .item > div').click(function () {

    var index = $(this).index();
    var $slide = $(this).parent().parent().find('>.slides > .img-box');

    $slide.removeClass('active');
    $slide.eq(index).addClass('active');

    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');

});
