document.addEventListener("DOMContentLoaded", function () {

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

});

