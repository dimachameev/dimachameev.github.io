$(function() {

    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");


    $('.burger').click(function (event) {
        $('.burger,.nav').toggleClass('active');
    })

    $(window).on("scroll load resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset   + 1
        }, 600);
    });

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
        

    });

    //popup
    $('#popup__btn').click(function() { 
        $('#popup').fadeIn();
        $('#popup').addClass('disabled');
    
        
    });

    $('#popup__close, .close__bg').click(function() { 
        $('#popup').fadeOut();
        
    });

    $(document).mouseup(function (e) { 
        var popup = $('#popup__inner');
        if (e.target!=popup[0]&&popup.has(e.target).length === 0){
            $('#popup').fadeOut();
        }
    });



    $('#popup__btn2').click(function() { 
        $('#popup2').fadeIn();
        $('#popup2').addClass('disabled');
    });

    $('#popup__close2, .close__bg').click(function() { 
        $('#popup2').fadeOut();
        
    });

    $(document).mouseup(function (e) { 
        var popup = $('#popup__inner2');
        if (e.target!=popup[0]&&popup.has(e.target).length === 0){
            $('#popup2').fadeOut();  
        }
    });



    $('#popup__btn3').click(function() { 
        
        $('#popup3').fadeIn();
        $('#popup3').addClass('disabled');
    });

    $('#popup__close3, .close__bg').click(function() { 
        $('#popup3').fadeOut();
    });

    $(document).mouseup(function (e) { 
        var popup = $('#popup__inner3');
        if (e.target!=popup[0]&&popup.has(e.target).length === 0){
            $('#popup3').fadeOut();
            
        }
    });

});

