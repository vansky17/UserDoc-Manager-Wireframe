
/* Handle nav menu on small screens */
function toggleMobileMenu() {
    $('.hamburger-menu').on('click', '#hamburger', function(){
        $(this).closest('nav').find('.mobile-menu').slideToggle(0);       
    });
    $('.mobile-menu').on('click', function() {
        $(this).closest('nav').find('#hamburger').trigger('click');
    });
}
/* Implementing autoscroll functionality */
function handleAutoScroll() {
    $('a[href^="#"]').on('click', function(event) { 
        let scrollTarget = $(this.getAttribute('href')); 
        if( scrollTarget.length ) {
            $('html, body').stop().animate({scrollTop: scrollTarget.offset().top }, 800);   
        }
    });
}
function initiateApp(){
   toggleMobileMenu();
   handleAutoScroll();
}

$(initiateApp);