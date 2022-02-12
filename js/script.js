// quotes object
var quotes = {
  quoteWiseObj: {
    quotes: ["Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor.",
      "In every walk with nature one receives far more than he seeks.",
      "Do not go where the path may lead, go instead where there is no path and leave a trail."],
    source: ["Sholom Aleichem",
      "John Muir",
      "Ralph Waldo Emerson"],
    citation: ["N/A",
      "N/A",
      "N/A"],
    year: ["N/A",
      "N/A",
      "N/A"]
  },
  quoteLifeObj: {
    quotes: ["There is only one happiness in this life, to love and be loved",
      "Only i can change my life. No one can do it for me",
      "The greatest gift of life is friendship, and i have received it."],
    source: ["George Sand",
      "Carol Burnett",
      "Hubert H. Humphrey"],
    citation: ["N/A",
      "N/A",
      "N/A"],
    year: ["N/A",
      "N/A",
      "N/A"]
  },
  quoteMotivationalObj: {
    quotes: ["It does not matter how slowly you go as long as you do not stop.",
      "It always seems impossible until it's done",
      "If you can dream it, you can do it"],
    source: ["Confucius",
      "Nelson Mandela",
      "Walt Disney"],
    citation: ["N/A",
      "N/A",
      "N/A"],
    year: ["N/A",
      "N/A",
      "N/A"]
  }
}


// calls the print quote function after a certin amount of time has passed
var timer = setInterval(printQuote, 9000);

// Storing old random number so we don't generate the same thing over again
var oldRandom = null;
var oldRandomTag = null;
var randNumTag = null;

// generates a random color and applies it to the background
function getRandomColor() {
  // putting all valid hex char in a variable
  var letters = '0123456789ABCDEF';
  // container for the random hex code
  var color = '#';
  // generates a random hex code by incrementing i by 1 until it gets to 6 witch is the length of a proper hex code
  for (var i = 0; i < 6; i++) {
    // adding random letters and numbers to the hex code container by using the random number method
    color += letters[Math.floor(Math.random() * 16)];
  }
  // changing the color of the background
  document.getElementById("container").style.background = color;
}

// prints a new randomized quote from the qoutes object to the browser
function printQuote() {
  // disabling the interval
  clearInterval(timer);
  // generating random num for tag
  if (oldRandomTag !== null) {
    randNumTag = Math.floor(Math.random() * 3);

    while (randNumTag === oldRandomTag) {
      randNumTag = Math.floor(Math.random() * 3);
    }

    oldRandomTag = randNumTag;
  } else {
    randNumTag = Math.floor(Math.random() * 3);
    oldRandomTag = randNumTag;
  }
  // called getRandomColor for a new background color applied to the container
  getRandomColor();
  // determining what tag should selected determined by the randNumTag variable
  if (randNumTag === 0) {
    // printing all needed output to the browser
    document.getElementById("tag").innerHTML = "Tag: Wisdom";
    document.getElementById("quote").innerHTML = quotes.quoteWiseObj.quotes[GenerateRandomNum(quotes.quoteWiseObj.quotes.length)];
    document.getElementById("source").innerHTML = quotes.quoteWiseObj.source[GenerateRandomNum(quotes.quoteWiseObj.quotes.length)];
    document.getElementById("citation").innerHTML = quotes.quoteWiseObj.citation[GenerateRandomNum(quotes.quoteWiseObj.quotes.length)];
    document.getElementById("year").innerHTML = quotes.quoteWiseObj.year[GenerateRandomNum(quotes.quoteWiseObj.quotes.length)];
  } else if (randNumTag === 1) {
    document.getElementById("tag").innerHTML = "Tag: Life";
    // printing all needed output to the browser
    document.getElementById("quote").innerHTML = quotes.quoteLifeObj.quotes[GenerateRandomNum(quotes.quoteLifeObj.quotes.length)];
    document.getElementById("source").innerHTML = quotes.quoteLifeObj.source[GenerateRandomNum(quotes.quoteLifeObj.quotes.length)];
    document.getElementById("citation").innerHTML = quotes.quoteLifeObj.citation[GenerateRandomNum(quotes.quoteLifeObj.quotes.length)];
    document.getElementById("year").innerHTML = quotes.quoteLifeObj.citation[GenerateRandomNum(quotes.quoteLifeObj.quotes.length)];
  } else {
    document.getElementById("tag").innerHTML = "Tag: Motivational";
    // printing all needed output to the browser
    document.getElementById("quote").innerHTML = quotes.quoteMotivationalObj.quotes[GenerateRandomNum(quotes.quoteMotivationalObj.quotes.length)];
    document.getElementById("source").innerHTML = quotes.quoteMotivationalObj.source[GenerateRandomNum(quotes.quoteMotivationalObj.quotes.length)];
    document.getElementById("citation").innerHTML = quotes.quoteMotivationalObj.citation[GenerateRandomNum(quotes.quoteMotivationalObj.quotes.length)];
    document.getElementById("year").innerHTML = quotes.quoteMotivationalObj.citation[GenerateRandomNum(quotes.quoteMotivationalObj.quotes.length)];
  }
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

function GenerateRandomNum(maxValue) {
  var currentRandom = Math.floor(Math.random() * maxValue);
  while (currentRandom === oldRandom) {
    currentRandom = Math.floor(Math.random() * maxValue);
  }
  oldRandom = currentRandom;
  return currentRandom;
}