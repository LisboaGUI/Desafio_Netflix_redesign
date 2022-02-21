$('.owl-carousel').owlCarousel({
    items:10,
    merge: true,
    loop:true,
    margin:10,
    video: true,
    lazyload: true,
    center: true,
    nav:false,
    responsive:{
        480:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

