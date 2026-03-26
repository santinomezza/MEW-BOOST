document.addEventListener("DOMContentLoaded", function () {
  // Animación al hacer Scroll
  const elements = document.querySelectorAll(".reveal-left, .reveal-right");

  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    elements.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;
      const boxBottom = el.getBoundingClientRect().bottom;

      if (boxTop < triggerBottom && boxBottom > 0) {
        el.classList.add("reveal-active");
      } else {
        el.classList.remove("reveal-active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // Menú Hamburguesa Responsivo
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const navItems = document.querySelectorAll(".nav-links a");

  if(hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    // Cerrar menú al apretar un link
    navItems.forEach(item => {
      item.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  }

  // Animación de Contadores (Count Up) para ser muchísimo más profesional
  const counters = document.querySelectorAll('.counter-up');
  const speed = 200; // Cuanto más bajo, más rápido

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-target');
        
        const updateCount = () => {
          const count = +counter.innerText.replace(/\D/g, ''); // Remover cualquier caracter no numérico temporalmente
          const inc = target / speed;

          if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 15);
          } else {
            // Cuando termina, agrega el símbolo (como '+') si estaba en el data-prefix o suffix
            const prefix = counter.getAttribute('data-prefix') || '';
            const suffix = counter.getAttribute('data-suffix') || '';
            counter.innerText = prefix + target + suffix;
          }
        };
        
        updateCount();
        observer.unobserve(counter); // Animar solo una vez para mejor performance
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => {
    counterObserver.observe(counter);
  });
});

