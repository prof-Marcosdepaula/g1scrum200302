document.addEventListener('DOMContentLoaded', function() {
    // responsive menu toggle
    const menuToggle = document.getElementById('menutoggle');
    menuToggle.addEventListener('click', function() {
        const xsMenu = document.querySelector('.xs-menu');
        xsMenu.classList.toggle('displaynone');
    });

    // add active class on menu
    const menuItems = document.querySelectorAll('ul li');
    menuItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            menuItems.forEach(function(item) {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // drop-down menu
    const dropDowns = document.querySelectorAll('.drop-down');
    dropDowns.forEach(function(dropDown) {
        dropDown.addEventListener('mouseenter', function() {
            const megaMenu = this.querySelector('.mega-menu');
            megaMenu.classList.add('display-on');
        });
        dropDown.addEventListener('mouseleave', function() {
            const megaMenu = this.querySelector('.mega-menu');
            megaMenu.classList.remove('display-on');
        });
    });
});
