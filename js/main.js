window.addEventListener('scroll', function () {
    const header = document.querySelector('.header-area .menu-area');
   // const bannarArea = this.document.querySelector('.bannar-area')
    header.classList.toggle("sticky", window.scrollY > 100);
    // bannarArea.classList.toggle('bannarSpacing', this.window.scrollY > 100)
})