const themeToggleBtn = document.querySelector('.theme-toggler-btn');
const sunMoonContainer = document.querySelector('.sun-moon-container');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const currentRotation = parseInt(
    getComputedStyle(sunMoonContainer).getPropertyValue('--rotation')
  );
  sunMoonContainer.style.setProperty('--rotation', currentRotation + 180);
});
