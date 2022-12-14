
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header-area .menu-area');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const languages = document.querySelector('.languages');
    const mobileNav = document.querySelector('.mobile-nav')
    header.classList.toggle("sticky", window.scrollY > 100);
    mobileMenuBtn.classList.toggle("sticky-btn", window.scrollY > 100);
    languages.classList.toggle("sticky-flag", window.scrollY > 100);
    mobileNav.classList.toggle('sticky-mobile-menu', window.scrollY > 100);

})


const mobileMenuBtn = document.querySelector('.mobile-menu-btn button');

const mobileMenu = document.querySelector(".mobile-nav")
mobileMenuBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
})

const languages = document.querySelector('.languages');
const mobileNav = document.querySelector('.mobile-nav');

languages.addEventListener('mouseenter', function () {
    if (mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active')
    }
})

// has children before

const mobileNavChildren = document.querySelectorAll('.has-children');
const mobileNavChildrenLength = mobileNavChildren.length;

for (let i = 0; i < mobileNavChildrenLength; i++) {
    let span = document.createElement('span');
    span.innerText = "+";
    mobileNavChildren[i].appendChild(span);
}


const hasChildrenSpan = document.querySelectorAll('.has-children span');
for (let i = 0; i < hasChildrenSpan.length; i++) {
    hasChildrenSpan[i].addEventListener('click', function (e) {
        e.target.parentNode.classList.toggle('active');

        if (e.target.innerText == '+') {
            e.target.innerText = "-";
        } else {
            e.target.innerText = "+";
        }
    })
}

const technolgySliderWrapper = document.querySelector('.technolgy-slider-wrapper');
let slides = technolgySliderWrapper.querySelectorAll('.slide');

for (let i = 0; i < slides.length; i++) {
    slides[i].addEventListener('mouseenter', function (e) {
        console.log(e.target);
        e.target.classList.add('active-slide-on-mouse');
        slides[i - 1].classList.add('prev-slide-on-mouse')
        slides[i + 1].classList.add('next-slide-on-mouse')
    })
    slides[i].addEventListener('mouseleave', function (e) {
        console.log(e.target);
        e.target.classList.remove('active-slide-on-mouse');
        slides[i + 1].classList.remove('next-slide-on-mouse');
        slides[i - 1].classList.remove('prev-slide-on-mouse')
    })
}

