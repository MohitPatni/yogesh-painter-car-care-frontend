


function owlCarousel() {
   
    $(".test-owal")
        .owlCarousel({
            loop: true,
            margin: 20,
            autoplay: true,
            nav: false,
            dots: true,
            lazyLoad: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    nav: false,
                },
                400: {
                    items: 4,
                },
                600: {
                    items: 4,
                    nav: false,
                },
                1000: {
                    items: 7,
                    loop: false,
                },
            },
        })


}
// Testimonial Carousel
function testimonialOwlCarousel() {
    
    $('.wide-slider-testimonial').owlCarousel({
        loop:true,
        autoplay: true,
        margin:0,
       // animateOut: 'fadeOut',
       // animateIn: 'fadeIn',
        nav: false,
        
        autoplayHoverPause: false, 
        items: 1,
        autoheight: true,
        navText : ["<span class='ion-android-arrow-dropleft'></span>","<span class='ion-android-arrow-dropright'></span>"],
        responsive:{
          0:{
            items:1,
            nav:true
          },
          600:{
            items:1,
            nav:true
          },
          1000:{
            items:1,
            nav:true
          }
        }
       
      });

}
 // Testimonial Carousel End