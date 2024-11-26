document.addEventListener("DOMContentLoaded", () => {
  let swiperInstance;

  function initSwiper() {
    swiperInstance = new Swiper(".swiper-container", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      on: {
        slideChange: () => {
          if (swiperInstance && !swiperInstance.destroyed) {
            console.log("Active slide index:", swiperInstance.activeIndex);
          }
        },
      },
    });
  }

  const toggleButton = document.getElementById("toggle-swiper");
  toggleButton.addEventListener("click", () => {
    if (swiperInstance) {
      if (!swiperInstance.destroyed) {
        swiperInstance.destroy(true, true);
        console.log("Swiper destroyed.");
      } else {
        initSwiper();
        console.log("Swiper initialized.");
      }
    }
  });

  initSwiper();
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle-swiper");

  toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("clicked");
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-swiper');
    const swiperContainer = document.querySelector('.swiper-container');
    const prevButton = swiperContainer.querySelector('.swiper-button-prev');
    const nextButton = swiperContainer.querySelector('.swiper-button-next');
  
    toggleButton.addEventListener('click', () => {
      prevButton.classList.toggle('hidden');
      nextButton.classList.toggle('hidden');
    });
  });
  
