function TabBox__init() {
    $('.tab-box-menu-item').click(function () {
        var groupNo = $(this).attr('data-tab-box-group');
        var groupItemNo = $(this).attr('data-tab-box-group-item');

        $('[data-tab-box-group="' + groupNo + '"].tab-box-menu-item').removeClass('active');
        $('[data-tab-box-group="' + groupNo + '"][data-tab-box-group-item="' + groupItemNo + '"].tab-box-menu-item').addClass('active');

        $('[data-tab-box-group="' + groupNo + '"].tab-box-content').removeClass('active');
        $('[data-tab-box-group="' + groupNo + '"][data-tab-box-group-item="' + groupItemNo + '"].tab-box-content').addClass('active');


    });
}

TabBox__init();

$('a').click(function () {
    if ($(this).attr('href') == '#') {
        return false;
    }
});
