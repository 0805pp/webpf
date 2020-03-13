$('.top-bn-bar > .cell:nth-child(2) > .slider-1 > .side-btns > div').click(function () {
    var $this = $(this);
    var $slider = $this.closest('.slider-1');

    var index = $this.index();
    var isLeft = index == 0;

    var $current = $slider.find(' > .slides > .active');
    var $post;

    if (isLeft) {
        $post = $current.prev();
    } else {
        $post = $current.next();
    }

    if ($post.length == 0) {
        if (isLeft) {
            $post = $slider.find(' > .slides > :last-child');
        } else {
            $post = $slider.find(' > .slides > :first-child');
        }
    }

    $current.removeClass('active');
    $post.addClass('active');
});


$('.best-prod-box-1 .menu-box > .menu-box-1 > ul > li').mouseenter(function () {
    $(this).addClass('active');
    $(this).siblings('.active').removeClass('active');

    var index = $(this).index();

    var $bestProdBox1 = $(this).closest('.best-prod-box-1');

    $bestProdBox1.find(' > .content-box > ul > li.active').removeClass('active');
    $bestProdBox1.find(' > .content-box > ul > li').eq(index).addClass('active');
});

$('.best-prod-box-1 .menu-box > .menu-box-1 > ul > li:first-child').mouseenter();
