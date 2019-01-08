window.addEventListener('load', () => {
  const overlay = document.getElementById('preloader');
  setTimeout(() => {
    if (!overlay.classList.contains('done')) overlay.classList.add('done');
  }, 1000);
});
