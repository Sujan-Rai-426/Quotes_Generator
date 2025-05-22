const modeToggle = document.getElementById('modeToggle');
const container = document.querySelector('.container'); // Get the container element
const body = document.body;

modeToggle.addEventListener('change', () => {
    body.classList.toggle('dark');
    container.classList.toggle('dark'); // Toggle dark mode on container too
});
