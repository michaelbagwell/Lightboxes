$(document).ready(function($) {
    
    //get array of image hrefs and their alt tags, used as new image source and descriptions
    var images_href = $(document).find(".trigger").map(function() { return $(this).attr("href"); }).get();
    var descriptionAlt = $(document).find(".lightbox").map(function() { return $(this).prop("alt"); }).get();
    
    //get position of last image
    var maxLength = ($(document).find(".trigger").get().length)-1;
    
    $('.trigger').click(function(event) {
        //prevent default linking behaviour, establish index and default values
        event.preventDefault();
        var i = $('.trigger').index(this);
        var href = images_href[i];
        var description = descriptionAlt[i];
        
        //reset values based on current index and set them as href and p respectively
        function initialize(i){
            href = images_href[i];
            description = descriptionAlt[i];
            $('.lb-img').attr('src', href);
            $('#text p').html(description);
        }
        
        function nextImage(){
            (i === maxLength) ? (i=0) : (++i); //loop to first image or move forwards through image index
            initialize(i);
        }
        
        function prevImage(){
            (i === 0) ? (i = maxLength) : (--i); //loop to last image or move backwards through image index
            initialize(i);
        }
        
        //update and show lightbox if already created and hidden
        if ($('#lightbox').length > 0) {
            initialize(i);
            $('#lightbox, #background').show();
        }
        
        //initial creation and appending of lightbox to html
        else {          
            var lightbox =
                    '<div id="background"></div>' +
                    '<div id="lightbox">' +
                        '<img class="lb-img" src="' + href + '" />' +
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
        
        //handle click events on nav
        $(document).on('click', '.navNext', function(){
            nextImage();
        }).on('click', '.navPrev', function(){
            prevImage();
        }).on('click', 'h2', function(){
           $('#lightbox, #background').hide();
        });
        
        //handle click events on lightbox, excluding children
        $('#lightbox').on('click', function(e) {
            if(e.target === this){
                $('#lightbox, #background').hide();
            }
        })
    })
})
