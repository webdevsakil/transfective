


var mySwiper = new Swiper(".technolgy-slider-wrapper", {
    spaceBetween: 0,
    slidesPerView: 5,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
});


document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".brands-slider a",
        {
            scrollTrigger: {
                trigger: '.brands-slider',
                markers: true
            },
            y: 100, opacity: 0, stagger: 0.1
        }
    )

})


