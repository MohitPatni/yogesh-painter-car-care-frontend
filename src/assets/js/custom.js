


function owlCarousel() {
   
    $(".owl-carousel")
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
                    items: 1,
                    nav: false,
                },
                400: {
                    items: 2,
                },
                600: {
                    items: 3,
                    nav: false,
                },
                1000: {
                    items: 4,
                    loop: false,
                },
            },
        })


}
// Testimonial Carousel
function testimonialOwlCarousel() {
    
    $(".testimonial-content").owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
       
        nav: false,
        dots: true,
        lazyLoad: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            400: {
                items: 1,
            },
            600: {
                items: 1,
                nav: false,
            },
            1000: {
                items: 1,
                loop: false,
            },
        },
    });

}
 // Testimonial Carousel End