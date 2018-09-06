

$(document).ready(function() {

    if ($('.headerSlider').length > 0) {
        $('.headerSlider').slick({
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            autoplay: false
        });
    }

    if ($('.complexItem').length > 0) {
        var ps1 = new PerfectScrollbar('#firstStore', {
            wheelPropagation: true
        });
        var ps2 = new PerfectScrollbar('#secondStore',{
            wheelPropagation: true
        });
        setTimeout(function () {
            ps1.update();
            ps2.update();
        }, 100);
    }

    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    if ($('.menu__burger').length > 0) {
        $('.menu__burger').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('active');
            $(this).parents('.headerNav').toggleClass('openSide').find('ul').toggleClass('open-nav');
        });
    }
});
