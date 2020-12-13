$(document).ready(function () {
    $(window).scroll(function () {
        let wScroll = $(this).scrollTop();

        //// Parallax

        $('.jumbotron .greating').css({
            'transform': 'translate(0px, ' + wScroll + '%)'
        });
        $('.jumbotron .title').css({
            'transform': 'translate(0px, ' + wScroll / 2 + '%)'
        });
        $('.jumbotron .subtitle').css({
            'transform': 'translate(0px, ' + wScroll / 1.4 + '%)'
        });
        $('.jumbotron .description').css({
            'transform': 'translate(0px, ' + wScroll / 6 + '%)'
        });
        $('.jumbotron .btn').css({
            'transform': 'translate(0px, ' + wScroll / 9 + '%)'
        });

        //// My Skil Animation
        if (wScroll > $('.section-3').offset().top - 250) {
            $('.section-3 .card').each(function (index) {
                setTimeout(function () {
                    $('.section-3 .card').eq(index).addClass('show-card')
                }, 300 * (index + 1));
            });
        }
        //// My Project Animation
        if (wScroll > $('.section-4').offset().top - 250) {
            $('.section-4 .card').each(function (index) {
                setTimeout(function () {
                    $('.section-4 .card').eq(index).addClass('show-card')
                }, 300 * (index + 1));
            });
        }

        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        });
        //// My Certificate Animation
        if (wScroll > $('.section-5').offset().top - 250) {
            $('.section-5 .card').each(function (index) {
                setTimeout(function () {
                    $('.section-5 .card').eq(index).addClass('show-card')
                }, 300 * (index + 1));
            });
        }


    });

    // Section 4
    $('.section-4 .card').mouseover(function () {
        $(this).find('.tools').addClass('show-tools');
    });
    $('.section-4 .card').mouseout(function () {
        $(this).find('.tools').removeClass('show-tools');
    });

    lightbox.option({
        // 'resizeDuration': 200,
        // 'wrapAround': true,
        'disableScrolling': true
    })
});