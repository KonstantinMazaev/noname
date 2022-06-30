document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth
  if (width < 768){
    const swiper = new Swiper('.swiper', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
})
