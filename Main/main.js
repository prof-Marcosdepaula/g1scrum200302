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

// Inicio Carousel JS
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
  
  /*====================================================================================*/ 
  
  function showSlidesAuto() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlidesAuto, 4000); // Change image every 2 seconds
  }


  // Inicio JS Seção Destaque

// This is "probably" IE9 compatible but will need some fallbacks for IE8
// - (event listeners, forEach loop)

// wait for the entire page to finish loading
window.addEventListener('load', function() {
  
  // setTimeout to simulate the delay from a real page load
  setTimeout(lazyLoad, 1000);
  
});

function lazyLoad() {
  var card_images = document.querySelectorAll('.card-image');
  
  // loop over each card image
  card_images.forEach(function(card_image) {
    var image_url = card_image.getAttribute('data-image-full');
    var content_image = card_image.querySelector('img');
    
    // change the src of the content image to load the new high res photo
    content_image.src = image_url;
    
    // listen for load event when the new photo is finished loading
    content_image.addEventListener('load', function() {
      // swap out the visible background image with the new fully downloaded photo
      card_image.style.backgroundImage = 'url(' + image_url + ')';
      // add a class to remove the blur filter to smoothly transition the image change
      card_image.className = card_image.className + ' is-loaded';
    });
    
  });
  
const cards = document.querySelectorAll('.card-demais');
let maxHeight = 0;

cards.forEach(card => {
  const cardHeight = card.clientHeight;
  if (cardHeight > maxHeight) {
  maxHeight = cardHeight;
}
});

cards.forEach(card => {
card.style.height = `${maxHeight}px`;
});
}

// Fim JS Seção Destaque