const quoteText = document.querySelector("#quote");
const settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://quotes15.p.rapidapi.com/quotes/random/",
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "quotes15.p.rapidapi.com",
    "x-rapidapi-key": "271600c359mshcfd53c5d0827848p1a47dfjsn3ab38fe14cc2"
  }
};

let quotes = [];
let viewedQuotes = [];

const GenerateQuotes = () => {
  if (quotes.length < 100) {
    $.ajax(settings).done(function (response) {
      if (response.content.length <= 200) {
        quotes.push(response.content);
      }
      console.log(quotes)
    });
  }
}

GenerateQuotes();

setInterval(GenerateQuotes, 1500);

const LoadQuote = () => {
  ChangeBackgroundColor();

  if (viewedQuotes.length >= 100)
    viewedQuotes = [];

  let randomNum = Math.floor(Math.random() * quotes.length);

  while (CheckPreviousQuotes(randomNum)) {
    randomNum = Math.floor(Math.random() * quotes.length);
  }

  viewedQuotes.push(randomNum);
  quoteText.innerHTML = quotes[randomNum];
}


const CheckPreviousQuotes = (currentRandomNum) => {
  for (var i = 0; i < viewedQuotes.length; i++) {
    if (currentRandomNum === viewedQuotes[i]) {
      return true
    }
  }
  return false
}

const ChangeBackgroundColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  document.querySelector("#container").style.backgroundColor = color;
}

document.querySelector('#LoadQuote').addEventListener("click", LoadQuote, false);