
const quotes = {
    Science: [
        { quote: "Science is not only a disciple of reason but, also, one of romance and passion.", author: "Stephen Hawking" },
        { quote: "The greatest scientists are artists as well.", author: "Albert Einstein" },
        { quote: "The important thing is not to stop questioning.", author: "Albert Einstein" },
        { quote: "Research is what I'm doing when I don't know what I'm doing.", author: "Wernher von Braun" },
        { quote: "To confine our attention to terrestrial matters would be to limit the human spirit.", author: "Stephen Hawking" },
        { quote: "The good thing about science is that it's true whether or not you believe in it.", author: "Neil deGrasse Tyson" },
        { quote: "The science of today is the technology of tomorrow.", author: "Edward Teller" },
    ]
};


let currCategory = "Science";
let currIndex = 0;

const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');

// Function to display the current quote
function displayQuote() {
    const quote = quotes[currCategory][currIndex];
    quoteText.textContent = `"${quote.quote}"`;
    quoteAuthor.textContent = `${quote.author}`;
    
    // Disable the prev/next buttons based on index
    prevBtn.disabled = currIndex === 0;
    nextBtn.disabled = currIndex === quotes[currCategory].length - 1;
}


// Next button function
const nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', () => {
    if (currIndex < quotes[currCategory].length - 1) {
        currIndex++;
        displayQuote();  // Re-render the quote after updating the index
    }
});


// Random button function
const randomBtn = document.getElementById('randomBtn');
randomBtn.addEventListener('click', () => {
    const quotesArray = quotes[currCategory];
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    
    currIndex = randomIndex;
    displayQuote();          
});


// Previous button function
const prevBtn = document.getElementById('prevBtn');
prevBtn.addEventListener('click', () => {
    if (currIndex > 0) {
        currIndex--;
        displayQuote();  // Re-render the quote after updating the index
    }
});


displayQuote();
