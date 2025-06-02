jQuery(document).ready(function($) {

/*------------------------------------------------
            DECLARATIONS
------------------------------------------------*/

    var loader = $('#loader');
    var loader_container = $('#preloader');
    var scroll = $(window).scrollTop();  
    var scrollup = $('.backtotop');
    var menu_toggle = $('.menu-toggle');
    var dropdown_toggle = $('.main-navigation button.dropdown-toggle');
    var nav_menu = $('.main-navigation ul.nav-menu');
    var quote_slider = $('.speaker-quote');
    var testimonial_slider = $('.testimonial-slider');
    var movies_slider = $('.movies-slider');
    var video1 = $('#video-wrapper .featured-video video');
    var video2 = $('#journey .featured-video video');
    var sticky_post = $('.blog article');
    var blog_list_meta = $('.blog-list .blog-posts-wrapper article .entry-header .entry-meta');
    var blog_list_title = $('.blog-list .blog-posts-wrapper article .entry-header .entry-title');
    var post_categories = $('.blog-list .blog-posts-wrapper article.has-post-thumbnail .post-categories');
    var post_categories_no_thumbnail = $('.blog-list .blog-posts-wrapper article:not(.sticky).no-post-thumbnail .post-categories');
    var blog_featured_image = $('.blog-list .blog-posts-wrapper article .featured-image a');

/*------------------------------------------------
            PRELOADER
------------------------------------------------*/

    loader_container.fadeOut();
    loader.fadeOut("slow");

/*------------------------------------------------
            HERO SECTION
------------------------------------------------*/
if( $(window).width() < 550 ) {
    $('#hero-section .featured-image').insertBefore('#hero-section .entry-summary');
}
else {
    $('#hero-section .entry-summary').insertBefore('#hero-section .featured-image');
}

$(window).resize(function() {
    if( $(window).width() < 550 ) {
        $('#hero-section .featured-image').insertBefore('#hero-section .entry-summary');
    }
    else {
        $('#hero-section .entry-summary').insertBefore('#hero-section .featured-image');
    }
});

/*------------------------------------------------
            UPCOMING EVENTS SECTION
------------------------------------------------*/
if( $(window).width() < 550 ) {
    $('#upcoming-events .events-wrapper').insertAfter('#upcoming-events');
}
else {
    $('.events-wrapper').insertAfter('#upcoming-events .event-short-description');
}

$(window).resize(function() {
    if( $(window).width() < 550 ) {
        $('#upcoming-events .events-wrapper').insertAfter('#upcoming-events');
    }
    else {
        $('.events-wrapper').insertAfter('#upcoming-events .section-header');
    }
});

/*------------------------------------------------
            SKILLS BAR
------------------------------------------------*/
if( $('#skills-section div').hasClass('skills-wrapper') ) {
    $('body').addClass('skills-wrapper-enabled');
}
else {
    $('body').addClass('skills-wrapper-disabled');
}

/*------------------------------------------------
            MOVIES LIST
------------------------------------------------*/
if( $('#movies-list').hasClass('page-section') ) {
    $('body').addClass('movies-list-enabled');
}
else {
    $('body').addClass('movies-list-disabled');
}

/*------------------------------------------------
                BACK TO TOP
------------------------------------------------*/

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            scrollup.css({bottom:"25px"});
        } 
        else {
            scrollup.css({bottom:"-100px"});
        }
    });

    scrollup.click(function() {
        $('html, body').animate({scrollTop: '0px'}, 800);
        return false;
    });

/*------------------------------------------------
                MENU, STICKY MENU AND SEARCH
------------------------------------------------*/

    menu_toggle.click(function() {
        nav_menu.slideToggle();
        $(this).toggleClass('active');
        $('#masthead .main-navigation').toggleClass('menu-open');
        $('.menu-overlay').toggleClass('active');
    });
    
    $(document).click(function (e) {
      var container = $("#masthead");
       if (!container.is(e.target) && container.has(e.target).length === 0) {
            if( $('.main-navigation').hasClass('menu-open') ) {
                nav_menu.fadeOut();
                $('.main-navigation').removeClass('menu-open');

                if( $('#page div').hasClass('menu-overlay' ) ) {
                    $('#page div').removeClass('menu-overlay');
                }
                else {
                    $('#page').append('<div class="menu-overlay"></div>');
                }
            }
        }
    });

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            nav_menu.fadeOut();
            $('.main-navigation').removeClass('menu-open');
            
            if( $('#page div').hasClass('menu-overlay' ) ) {
                $('#page div').removeClass('menu-overlay');
            }
            else {
                $('#page').append('<div class="menu-overlay"></div>');
            }
        }
    });

    dropdown_toggle.click(function() {
        $(this).toggleClass('active');
       $(this).parent().find('.sub-menu').first().slideToggle();
       $('#primary-menu > li:last-child button.active').unbind('keydown');
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            $('.site-header.sticky-header').fadeIn();
            if ($('.site-header').hasClass('sticky-header')) {
                $('.site-header.sticky-header').addClass('nav-shrink');
                $('.site-header.sticky-header').fadeIn();
            }
        } 
        else {
            $('.site-header.sticky-header').removeClass('nav-shrink');
        }
    });

    $('.main-navigation ul li a.search').click(function(event) {
        event.preventDefault();
        $(this).toggleClass('search-open');
        $('.main-navigation #search').toggle();
        $('.main-navigation .search-field').focus();
    });

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            $('.main-navigation .search').removeClass('search-open');
            $('.main-navigation #search').hide();
        }
    });

    $(document).click(function (e) {
      var container = $("#masthead");
       if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.main-navigation .search').removeClass('search-open');
            $('.main-navigation #search').hide();
        }
    });

/*--------------------------------------------------------------
 Keyboard Navigation
----------------------------------------------------------------*/
if( $(window).width() < 1024 ) {
    $('#primary-menu').find("li").last().bind( 'keydown', function(e) {
        if( e.which === 9 ) {
            e.preventDefault();
            $('#masthead').find('.menu-toggle').focus();
        }
    });

    $('#primary-menu > li:last-child button:not(.active)').bind( 'keydown', function(e) {
        if( e.which === 9 ) {
            e.preventDefault();
            $('#masthead').find('.menu-toggle').focus();
        }
    });
}
else {
    $('#primary-menu').find("li").unbind('keydown');
}

$(window).resize(function() {
    if( $(window).width() < 1024 ) {
        $('#primary-menu').find("li").last().bind( 'keydown', function(e) {
            if( e.which === 9 ) {
                e.preventDefault();
                $('#masthead').find('.menu-toggle').focus();
            }
        });

        $('#primary-menu > li:last-child button:not(.active)').bind( 'keydown', function(e) {
            if( e.which === 9 ) {
                e.preventDefault();
                $('#masthead').find('.menu-toggle').focus();
            }
        });
    }
    else {
        $('#primary-menu').find("li").unbind('keydown');
    }
});
menu_toggle.on('keydown', function (e) {
    var tabKey    = e.keyCode === 9;
    var shiftKey  = e.shiftKey;

    if( menu_toggle.hasClass('active') ) {
        if ( shiftKey && tabKey ) {
            e.preventDefault();
            nav_menu.slideUp();
            $('.main-navigation').removeClass('menu-open');
            $('.menu-overlay').removeClass('active');
            menu_toggle.removeClass('active');
        };
    }
});


/*------------------------------------------------
                SLICK SLIDERS
------------------------------------------------*/

    quote_slider.slick();
    testimonial_slider.slick({
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    var status = $('.pagingInfo');

    movies_slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        status.text(i + '/' + slick.slideCount);
    });

    movies_slider.slick({
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });


/*------------------------------------------------
            STICKY POST AND META
------------------------------------------------*/

    if(sticky_post.hasClass('sticky')) {
        $('body.blog').addClass('has-sticky-post');
    }
    else {
        $('body.blog').addClass('no-sticky-post');     
    }

    if($('.single-post-wrapper article div').hasClass('featured-image')) {
        $('body.single-post').addClass('has-single-featured-image');
    }
    else {
        $('body.single-post').addClass('single-no-featured-image');     
    }
    
    blog_list_meta.each(function() {
        $(this).siblings(blog_list_title).after(this);
    });

    post_categories.each(function() {
        $(this).parents('article:first').find(blog_featured_image).append(this);
    });

    post_categories_no_thumbnail.each(function() {
        $(this).parents('article:first').find('.entry-summary').prepend(this);
    });


/*------------------------------------------------
                END JQUERY
------------------------------------------------*/

});