jQuery(".mobile-nav-wrapper ul").on('click', 'li', function () {
    jQuery(this).toggleClass('active').siblings().removeClass('active');
});