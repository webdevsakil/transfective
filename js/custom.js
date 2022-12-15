gsap.registerPlugin(ScrollTrigger);


gsap.from(".brands-slider a",
    {
        scrollTrigger: '.brands-slider',
        y: 100, opacity: 0, stagger: 0.1
    }
)


