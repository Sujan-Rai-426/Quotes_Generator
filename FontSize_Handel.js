const increaseBtn = document.getElementById('increaseFont');
const decreaseBtn = document.getElementById('decreaseFont');

let currentFontSize = 1.2; // default font size in rem

increaseBtn.addEventListener('click', () => {
  if (currentFontSize < 2.5) { // max size
        currentFontSize += 0.1;
        applyFontSize();
    }
});

decreaseBtn.addEventListener('click', () => {
  if (currentFontSize > 0.8) { // min size
        currentFontSize -= 0.1;
        applyFontSize();
    }
});

function applyFontSize() {
    quoteText.style.fontSize = `${currentFontSize}rem`;
    quoteAuthor.style.fontSize = `${currentFontSize * 0.85}rem`;
}
