document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.testimonial-card');
  let current = 0;

  function showCard(index) {
    cards.forEach((card, i) => {
      card.classList.remove('active');
      if(i === index) card.classList.add('active');
    });
  }

  showCard(current);

  setInterval(() => {
    current = (current + 1) % cards.length;
    showCard(current);
  }, 5000); // change toutes les 5 secondes
});
