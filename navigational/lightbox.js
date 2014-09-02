$(document).ready(function($) {
    var images_href = $(document).find(".trigger").map(function() { return $(this).attr("href"); }).get();
    $('.trigger').click(function(event) {
        event.preventDefault();
        //var href = $(this).attr("href");
        var i = $('.trigger').index(this);
        var href = images_href[i];
        var description = $('.lightbox').attr("alt");
        function showImage(){
            $('#lightbox').html('<img src="' + href + '" />' +
              '<div id="text">' + 
                  '<p>' + description + '</p>' +
                  '<div id="lb-nav">' +
                      '<span class="navPrev">&#60;&#60;&nbsp; Prev</span>' +
                      '<h2>X</h2>' + 
                      '<span class="navNext">Next &nbsp;&#62;&#62;</span>' +
                  '</div>' +
              '</div>');
            $('#lightbox, #background').show();
        }
        function nextImage(){
            if(i === ($(document).find(".trigger").get().length)-1){
                i=0;
                href = images_href[i];
            }
            else{
                href = images_href[++i];
            }
            $('#lightbox, #background').hide();
            showImage();
        }
        function prevImage(){
            if(i === 0){
                i = ($(document).find(".trigger").get().length)-1;
                href = images_href[i];
            }
            else{
                href = images_href[--i];
            }
            $('#lightbox, #background').hide();
            showImage();
        }
        if ($('#lightbox').length > 0) {
          showImage();
        }
        else {
            var lightbox =
                    '<div id="background"></div>' +
                    '<div id="lightbox">' +
                        '<img src="' + href + '" />' +
                        '<div id="text">' +
                            '<p>' + description + '</p>' +
                            '<div id="lb-nav">' +
                                '<span class="navPrev">&#60;&#60;&nbsp; Prev</span>' +
                                '<h2>X</h2>' + 
                                '<span class="navNext">Next &nbsp;&#62;&#62;</span>' +
                            '</div>' +
                        '</div>' +
                    '</div>';
            $('body').append(lightbox);
        }
        $('#lightbox').on('click', function() {
            $('#lightbox, #background').hide();
        });
        $(document).on('click', '.navNext', function(){
            nextImage();
        });
        $(document).on('click', '.navPrev', function(){
            prevImage();
        });
    });
});
