const modeToggle = document.getElementById('modeToggle');
const container = document.querySelector('.container'); // Get the container element

modeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    container.classList.toggle('dark'); // Toggle dark mode on container too
});
