

var technolgySlider = new Swiper(".technolgy-slider-wrapper", {
    spaceBetween: 20,
    slidesPerView: 5,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter:true
    },
    breakpoints: {
        100: {
            slidesPerView: 1,
        },
        400: {
            slidesPerView: 2,
        },
        600: {
            slidesPerView: 3,
        },

        800: {
            slidesPerView: 4,
        },
        1000: {
            slidesPerView: 5,
        },
        1400: {
            slidesPerView: 5
        }

    },
});



let SwiperBottom = new Swiper('.brands-slider-area', {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 6000,
    autoplay: {
        delay: 0,

        reverseDirection: true
    },
    loop: true,
    loopedSlides: 4,
    slidesPerView: 'auto',
    allowTouchMove: true,
    disableOnInteraction: true,

});

var swiper = new Swiper(".successSliderActive", {
    effect: "fade",

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".brands-slider a",
        {
            scrollTrigger: {
                trigger: '.brands-slider',
                start: 'top 90%'

            },
            y: 100, opacity: 0, stagger: 0.1
        }
    )
   

})


