

const technolgySliderWrapper = document.querySelector('.technolgy-slider-wrapper');
var technolgySlider = new Swiper(technolgySliderWrapper, {
    spaceBetween: 0,
    slidesPerView: 5,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
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
    disableOnInteraction: true
});


document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".brands-slider a",
        {
            scrollTrigger: {
                trigger: '.brands-slider',
                start:'top 90%'
              
            },
            y: 100, opacity: 0, stagger: 0.1
        }
    )

})


