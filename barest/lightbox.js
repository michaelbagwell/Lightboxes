$(document).ready(function($) {
    $('.trigger').click(function(event) {
        event.preventDefault();
        var href = $(this).attr("href");
        if ($('#lightbox').length > 0) {
          $('#content').html('<img src="' + href + '" />');
          $('#lightbox, #background').show();
        }
        else {
            var lightbox =
                    '<div id="background"></div>' +
                    '<div id="lightbox">' +
                    '<div id="content">' + //
                    '<img src="' + href + '" />' +
                    '</div>' +
                    '</div>';
            $('body').append(lightbox);
        }
        $('#lightbox').on('click', function() {
            $('#lightbox, #background').hide();
        });
    })
});
