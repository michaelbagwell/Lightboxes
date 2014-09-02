$(document).ready(function($) {
    $('.trigger').click(function(event) {
        event.preventDefault();
        var href = $(this).attr("href");
        if ($('#lightbox').length > 0) {
          $('#content').html('<img src="' + href + '" />');
          $('#lightbox').show();
        }
        else {
            var lightbox =
                    '<div id="lightbox">' +
                    '<div id="content">' + //
                    '<img src="' + href + '" />' +
                    '</div>' +
                    '</div>';
            $('body').append(lightbox);
        }
        $('#lightbox').live('click', function() {
            $('#lightbox').hide();
        });
    })
});
