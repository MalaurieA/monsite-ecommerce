document.addEventListener("DOMContentLoaded", () => {

  const slides = document.querySelectorAll('.hero-bg');
  const nextBtn = document.querySelector('.slider-next');
  const prevBtn = document.querySelector('.slider-prev');

  // Sécurité : il faut exactement 2 slides
  if (slides.length < 2) {
    console.error("Il faut au moins 2 éléments avec la classe .hero-bg");
    return;
  }

  const images = [
    "Images/IMG_6130.JPG",
    "Images/IMG_9014.JPG",
    "Images/IMG_6990.JPG",
    "Images/IMG_7123.JPG"
  ];

  let currentIndex = 0;
  let interval = null;

  // Initialisation
  slides[0].style.backgroundImage = `url("${images[0]}")`;
  slides[0].classList.add('active');

  function changeSlide(nextIndex) {
    const currentSlide = slides[currentIndex % 2];
    const nextSlide = slides[(currentIndex + 1) % 2];

    nextSlide.style.backgroundImage = `url("${images[nextIndex]}")`;

    currentSlide.classList.remove('active');
    nextSlide.classList.add('active');

    currentIndex = nextIndex;
  }

  function nextImage() {
    changeSlide((currentIndex + 1) % images.length);
  }

  function prevImage() {
    changeSlide((currentIndex - 1 + images.length) % images.length);
  }

  function startAutoSlide() {
    interval = setInterval(nextImage, 5000);
  }

  function resetAutoSlide() {
    clearInterval(interval);
    startAutoSlide();
  }

  // Lancement automatique
  startAutoSlide();

  // Bouton suivant
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextImage();
      resetAutoSlide();
    });
  }

  // Bouton précédent
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevImage();
      resetAutoSlide();
    });
  }

});
