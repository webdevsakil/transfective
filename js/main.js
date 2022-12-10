
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header-area .menu-area');
    const mobileMenuBtn = this.document.querySelector('.mobile-menu-btn');
    const languages = this.document.querySelector('.languages');
    header.classList.toggle("sticky", window.scrollY > 100);
    mobileMenuBtn.classList.toggle("sticky-btn", window.scrollY > 100);
    languages.classList.toggle("sticky-flag", window.scrollY > 100);

})


const mobileMenuBtn = document.querySelector('.mobile-menu-btn button');
const mobileMenu = document.querySelector(".mobile-nav")
mobileMenuBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
})

const hasChildren = document.querySelectorAll('.has-children');
for (let item of hasChildren) {
    item.addEventListener('click', function (e) {
        item.classList.toggle('active');
    })
}