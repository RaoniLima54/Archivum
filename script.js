function scrollCarousel(button, direction) {
  const wrapper = button.closest('.carousel-wrapper');
  if (!wrapper) return;

  const carousel = wrapper.querySelector('.carousel');
  if (!carousel) return;

  const scrollAmount = carousel.clientWidth * 0.8;
  carousel.scrollLeft += scrollAmount * direction;
}

function expandCard(card) {
  document.querySelectorAll('.card').forEach(c => {
    if (c !== card) c.classList.remove('active');
  });

  card.classList.toggle('active');
}
