$(function() {
    $('.play-trailer').each(function() {
        $(this).on('click', function() {
            var msrc = $(this).data('src');
            var poste = $(this).data('poster');
            $.when(
                $('.js-modal').find('video').attr("src", msrc),
                $('.js-modal').find('video').attr("poster", poste),
                $('.js-modal').fadeIn()
            )
            return false;
        });
    });
    $('.js-modal-close').on('click', function() {
        $.when($('.js-modal').fadeOut())
        .done(function() {
            $('.js-modal').find('video').attr("src", "")
            $('.js-modal').find('video').attr("poster", "")
        });
        return false;
    });
});

$(function() {
    $('.playTrailer-card').each(function() {
        $(this).on('click', function() {
            var msrc = $(this).data('src');
            var poste = $(this).data('poster');
            $.when(
                $('.js-modal').find('video').attr("src", msrc),
                $('.js-modal').find('video').attr("poster", poste),
                $('.js-modal').fadeIn()
            )
            return false;
        });
    });
    $('.js-modal-close').on('click', function() {
        $.when($('.js-modal').fadeOut())
        .done(function() {
            $('.js-modal').find('video').attr("src", "")
            $('.js-modal').find('video').attr("poster", "")
        });
        return false;
    });
});

$(function() {
    $('.playTrailer-modal').each(function() {
        $(this).on('click', function() {
            var msrc = $(this).data('src');
            var poste = $(this).data('poster');
            $.when(
                $('.js-modal').find('video').attr("src", msrc),
                $('.js-modal').find('video').attr("poster", poste),
                $('.js-modal').fadeIn()
            )
            return false;
        });
    });
    $('.js-modal-close').on('click', function() {
        $.when($('.js-modal').fadeOut())
        .done(function() {
            $('.js-modal').find('video').attr("src", "")
            $('.js-modal').find('video').attr("poster", "")
        });
        return false;
    });
});