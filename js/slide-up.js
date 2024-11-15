document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.slide-up');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach((element, index) => {
      element.setAttribute('data-index', index % 6); // Repeat delay cycle every 6 items
      observer.observe(element);
    });
  });
