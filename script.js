/* fichier script js */

document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopElement = document.querySelector('.scroll-to-top');

    // Scroll to top au clic
    scrollToTopElement.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Apparition fluide après 70% de scroll
    window.addEventListener('scroll', function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;

      if (scrollPercent > 0.7) {
        scrollToTopElement.classList.add('visible');
      } else {
        scrollToTopElement.classList.remove('visible');
      }
    });
  });

  const hamburger = document.getElementById('hamburger');
      const navMenuMobile = document.getElementById('navMenuMobile');
      
      // Quand l'icône hamburger est cliquée
      hamburger.addEventListener('click', () => {
        navMenuMobile.classList.toggle('active');  // Affiche ou masque le menu
        hamburger.classList.toggle('active');      // Transforme l'icône hamburger en croix
        document.body.classList.toggle('menu-active'); // Empêche le scroll du site
      });

