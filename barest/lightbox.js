$(document).ready(function($) {
    $('.trigger').click(function(event) {
        event.preventDefault();
        var href = $(this).attr("href");
        var description = $('.lightbox').attr("alt");
        if ($('#lightbox').length > 0) {
          $('#lightbox').html('<img src="' + href + '" />' +
                              '<div id="text">' + 
                                  '<p>' + description + '</p>'
                              '</div>');
          $('#lightbox, #background').show();
        }
        else {
            var lightbox =
                    '<div id="background"></div>' +
                    '<div id="lightbox">' +
                        '<img src="' + href + '" />' +
                        '<div id="text">' +
                            '<p>' + description + '</p>'
                        '</div>' +
                    '</div>';
            $('body').append(lightbox);
        }
        $('#lightbox').on('click', function() {
            $('#lightbox, #background').hide();
        });
    })
});
