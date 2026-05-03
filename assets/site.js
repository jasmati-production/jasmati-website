// Reveal on scroll
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(e => e.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(e => io.observe(e));
})();

// FAQ toggles
(function () {
  document.querySelectorAll('.faq__q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq__item');
      const open = item.classList.contains('is-open');
      // Close siblings
      item.parentElement.querySelectorAll('.faq__item.is-open').forEach(s => s.classList.remove('is-open'));
      if (!open) item.classList.add('is-open');
    });
  });
})();

// Contact form (mock submit)
(function () {
  const form = document.querySelector('#contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const success = form.querySelector('.form-success');
    if (success) success.classList.add('is-visible');
    form.querySelectorAll('input, textarea, select').forEach(el => { if (el.type !== 'submit') el.value = ''; });
  });
})();
