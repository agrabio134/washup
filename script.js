document.addEventListener('DOMContentLoaded', function () {
    const ele = document.querySelector('.sel1');
    ele.style.cursor = 'grab';

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e) {
        ele.style.cursor = 'grabbing';
        ele.style.userSelect = 'none';

        pos = {
            left: ele.scrollLeft,
            top: ele.scrollTop,
            // Get the current mouse position relative to the document
            x: e.clientX + window.pageXOffset,
            y: e.clientY + window.pageYOffset,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX + window.pageXOffset - pos.x;
        const dy = e.clientY + window.pageYOffset - pos.y;

        // Scroll the element
        ele.scrollTop = pos.top - dy;
        ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
        ele.style.cursor = 'grab';
        ele.style.removeProperty('user-select');

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    // Attach the handler to the element
    ele.addEventListener('mousedown', mouseDownHandler);
});


// carousel
const galleryWrapper = document.querySelector('.gallery-wrapper');
const galleryItems = document.querySelectorAll('.gallery-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 2;

function showNext() {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  moveImages();
}

function showPrev() {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  moveImages();
}

function moveImages() {
  const itemWidth = galleryItems[currentIndex].offsetWidth;
  galleryWrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

  galleryItems.forEach(item => item.classList.remove('active'));
  galleryItems[currentIndex].classList.add('active');
}

prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

// Show the first image initially
galleryItems[currentIndex].classList.add('active');


//carousel container
document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('#bdt-prime-slider-1cd24bc5 .bdt-center-slider', {
      autoplay: {
        delay: 5000,
      },
      loop: true,
      speed: 500,
      slidesPerView: 1,
      slidesPerGroup: 1,
      centeredSlides: true,
      effect: 'slide',
      parallax: true,
      breakpoints: {
        767: {
          slidesPerView: 3,
          spaceBetween: 20,
          slidesPerGroup: 1
        },
        1023: {
          slidesPerView: 4,
          spaceBetween: 70,
          slidesPerGroup: 1
        }
      },
      navigation: {
        nextEl: '#bdt-prime-slider-1cd24bc5 .bdt-navigation-next',
        prevEl: '#bdt-prime-slider-1cd24bc5 .bdt-navigation-prev',
      },
      lazy: {
        loadPrevNext: true
      }
    });
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    const ele = document.getElementById('container-brands');
    ele.style.cursor = 'grab';

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e) {
        ele.style.cursor = 'grabbing';
        ele.style.userSelect = 'none';

        pos = {
            left: ele.scrollLeft,
            top: ele.scrollTop,
            // Get the current mouse position
            x: e.clientX,
            y: e.clientY,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        // Scroll the element
        ele.scrollTop = pos.top - dy;
        ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
        ele.style.cursor = 'grab';
        ele.style.removeProperty('user-select');

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    // Attach the handler
    ele.addEventListener('mousedown', mouseDownHandler);
});


document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');

  hamburgerMenu.addEventListener('click', function () {
      navLinks.classList.toggle('active');
  });
});

