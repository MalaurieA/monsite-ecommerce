document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero');
    const logo = document.querySelector('.logo img'); // cible l'image du logo

        if (!header || !hero) return;
        
    const heroHeight = hero.offsetHeight;

        window.addEventListener('scroll', () => {
       
            if (window.scrollY > heroHeight - 100) {
        
                header.classList.add('scrolled');
        logo.src = 'Images/Capture_d_écran_2025-12-17_131307-removebg-preview.png'; // chemin vers ton logo noir
        } else {
        
                header.classList.remove('scrolled');
        logo.src = 'Images/Capture d\'écran 2025-12-12 220150_Nero_AI_Background_Remover.png'; // logo blanc
        }
        });
        });

/*Accordéon*/
const accordion = document.querySelectorAll('.advantages-accordion details');

accordion.forEach((detail) => {
  detail.addEventListener('click', () => {
    // Ferme tous les autres <details> sauf celui cliqué
    accordion.forEach((otherDetail) => {
      if (otherDetail !== detail) {
        otherDetail.removeAttribute('open');
      }
    });
  });
});

