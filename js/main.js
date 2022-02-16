const quoteText = document.querySelector("#quote");
const authorText = document.querySelector("#source");
const tagText = document.querySelector("#tag");
const container = document.querySelector("#container");

const maximumStoredQuotes = 100;
const maximumQuoteCharacterLimit = 250;
const intervelBetweenRequests = 3500;

const storedFallBackQuotes = [
  {
    "id": 1135252,
    "language_code": "en",
    "content": "Love never dies a natural death. It dies because we don't know how to replenish its source. It dies of blindness and errors and betrayals. It dies of illness and wounds; it dies of weariness, of witherings, of tarnishings.",
    "url": "https://quotepark.com/quotes/1135252-anais-nin-love-never-dies-a-natural-death-it-dies-because-w/",
    "originator": {
      "id": 127414,
      "name": "Anaïs Nin",
      "url": "https://quotepark.com/authors/anais-nin/"
    },
    "tags": [
      "Love"
    ]
  },
  {
    "id": 1178494,
    "language_code": "en",
    "content": "Political language is designed to make lies sound truthful and murder respectable, and to give an appearance of solidity to pure wind.",
    "url": "https://quotepark.com/quotes/1178494-george-orwell-political-language-is-designed-to-make-lies-sound/",
    "originator": {
      "id": 127747,
      "name": "George Orwell",
      "url": "https://quotepark.com/authors/george-orwell/"
    },
    "tags": [
      "wind"
    ]
  },
  {
    "id": 2111046,
    "language_code": "en",
    "content": "Since you have accepted the gift of a Friend, you must be ready to do anything for His sake.",
    "url": "https://quotepark.com/quotes/2111046-mwanandeke-kindembo-since-you-have-accepted-the-gift-of-a-friend-you/",
    "originator": {
      "id": 284126,
      "name": "Mwanandeke Kindembo",
      "url": "https://quotepark.com/authors/mwanandeke-kindembo/"
    },
    "tags": [
      "friend"
    ]
  },
  {
    "id": 2034585,
    "language_code": "en",
    "content": "In fostering a sense of success, teachers have to be responsive to the learners and create several self-assessment activities in learning.",
    "url": "https://quotepark.com/quotes/2034585-sukavich-rangsitpol-in-fostering-a-sense-of-success-teachers-have-to/",
    "originator": {
      "id": 218988,
      "name": "Sukavich Rangsitpol",
      "url": "https://quotepark.com/authors/sukavich-rangsitpol/"
    },
    "tags": [
      "teacher"
    ]
  },
  {
    "id": 1033762,
    "language_code": "en",
    "content": "Love starts when we push aside our ego and make room for someone else.",
    "url": "https://quotepark.com/quotes/1033762-rudolf-steiner-love-starts-when-we-push-aside-our-ego-and-make-ro/",
    "originator": {
      "id": 133912,
      "name": "Rudolf Steiner",
      "url": "https://quotepark.com/authors/rudolf-steiner/"
    },
    "tags": [
      "start"
    ]
  },
  {
    "id": 742934,
    "language_code": "en",
    "content": "Interviewer: 'So Frank, you have long hair. Does that make you a woman?'\nFrank Zappa: 'You have a wooden leg. Does that make you a table?",
    "url": "https://quotepark.com/quotes/742934-frank-zappa-interviewer-so-frank-you-have-long-hair-does-t/",
    "originator": {
      "id": 127919,
      "name": "Frank Zappa",
      "url": "https://quotepark.com/authors/frank-zappa/"
    },
    "tags": [
      "woman"
    ]
  },
  {
    "id": 1845749,
    "language_code": "en",
    "content": "and should be entitled to have access to education according to their competency and needs.",
    "url": "https://quotepark.com/quotes/1845749-sukavich-rangsitpol-and-should-be-entitled-to-have-access-to-education/",
    "originator": {
      "id": 218988,
      "name": "Sukavich Rangsitpol",
      "url": "https://quotepark.com/authors/sukavich-rangsitpol/"
    },
    "tags": [
      "need"
    ]
  },
  {
    "id": 2097399,
    "language_code": "en",
    "content": "When you have something to say, silence is a lie.",
    "url": "https://quotepark.com/quotes/2097399-jordan-peterson-when-you-have-something-to-say-silence-is-a-lie/",
    "originator": {
      "id": 212248,
      "name": "Jordan Peterson",
      "url": "https://quotepark.com/authors/jordan-peterson/"
    },
    "tags": [
      "something"
    ]
  },
  {
    "id": 1727739,
    "language_code": "en",
    "content": "If things are not failing, you are not innovating enough.",
    "url": "https://quotepark.com/quotes/1727739-elon-musk-if-things-are-not-failing-you-are-not-innovating/",
    "originator": {
      "id": 213788,
      "name": "Elon Musk",
      "url": "https://quotepark.com/authors/elon-musk/"
    },
    "tags": [
      "thing"
    ]
  },
  {
    "id": 2103262,
    "language_code": "en",
    "content": "Learn to pay yourself first, you'll never be broke",
    "url": "https://quotepark.com/quotes/2103262-cornelius-keagon-learn-to-pay-yourself-first-youll-never-be-broke/",
    "originator": {
      "id": 283607,
      "name": "Cornelius Keagon",
      "url": "https://quotepark.com/authors/cornelius-keagon/"
    },
    "tags": [
      "Learning"
    ]
  },
  {
    "id": 41488,
    "language_code": "en",
    "content": "Show must go on!",
    "url": "https://quotepark.com/quotes/41488-freddie-mercury-show-must-go-on/",
    "originator": {
      "id": 164806,
      "name": "Freddie Mercury",
      "url": "https://quotepark.com/authors/freddie-mercury/"
    },
    "tags": [
      "show"
    ]
  },
  {
    "id": 2035045,
    "language_code": "en",
    "content": "In order to see the boundaries of the probabilities, need to try impossible.",
    "url": "https://quotepark.com/quotes/2035045-mehmed-ii-in-order-to-see-the-boundaries-of-the-probabilitie/",
    "originator": {
      "id": 218173,
      "name": "Mehmed II",
      "url": "https://quotepark.com/authors/mehmed-ii/"
    },
    "tags": [
      "try"
    ]
  },
  {
    "id": 1777959,
    "language_code": "en",
    "content": "Rape is one of the most terrible crimes on earth. And it happens every few minutes.",
    "url": "https://quotepark.com/quotes/1777959-kurt-cobain-rape-is-one-of-the-most-terrible-crimes-on-earth/",
    "originator": {
      "id": 130635,
      "name": "Kurt Cobain",
      "url": "https://quotepark.com/authors/kurt-cobain/"
    },
    "tags": [
      "rape"
    ]
  },
  {
    "id": 279267,
    "language_code": "en",
    "content": "That is not dead which can eternal lie,\r\nAnd with strange aeons even death may die.",
    "url": "https://quotepark.com/quotes/279267-hp-lovecraft-that-is-not-dead-which-can-eternal-lie-and-with/",
    "originator": {
      "id": 127701,
      "name": "H.P. Lovecraft",
      "url": "https://quotepark.com/authors/hp-lovecraft/"
    },
    "tags": [
      "evening"
    ]
  },
  {
    "id": 1263396,
    "language_code": "en",
    "content": "I just want to be wonderful.",
    "url": "https://quotepark.com/quotes/1263396-marilyn-monroe-i-just-want-to-be-wonderful/",
    "originator": {
      "id": 134279,
      "name": "Marilyn Monroe",
      "url": "https://quotepark.com/authors/marilyn-monroe/"
    },
    "tags": [
      "wonder"
    ]
  },
  {
    "id": 2034578,
    "language_code": "en",
    "content": "Constructive process is a process of development and learning is a process of reconstruction of nature.",
    "url": "https://quotepark.com/quotes/2034578-sukavich-rangsitpol-constructive-process-is-a-process-of-development-a/",
    "originator": {
      "id": 218988,
      "name": "Sukavich Rangsitpol",
      "url": "https://quotepark.com/authors/sukavich-rangsitpol/"
    },
    "tags": [
      "processing"
    ]
  },
  {
    "id": 1034002,
    "language_code": "en",
    "content": "The Sea, once it casts its spell, holds one in its net of wonder forever.",
    "url": "https://quotepark.com/quotes/1034002-jacques-yves-cousteau-the-sea-once-it-casts-its-spell-holds-one-in-its/",
    "originator": {
      "id": 131011,
      "name": "Jacques-Yves Cousteau",
      "url": "https://quotepark.com/authors/jacques-yves-cousteau/"
    },
    "tags": [
      "wonder"
    ]
  },
  {
    "id": 2103268,
    "language_code": "en",
    "content": "I will choose the bad guy in every story, I am attracted to villians",
    "url": "https://quotepark.com/quotes/2103268-cornelius-keagon-i-will-choose-the-bad-guy-in-every-story-i-am-att/",
    "originator": {
      "id": 283607,
      "name": "Cornelius Keagon",
      "url": "https://quotepark.com/authors/cornelius-keagon/"
    },
    "tags": [
      "story"
    ]
  },
  {
    "id": 1102179,
    "language_code": "en",
    "content": "Wordless,\nInfinite —\nYou.\nYou intensify\neverything.\nYou are\nfire\nburning\nall that\nis left\nof my\nheart.",
    "url": "https://quotepark.com/quotes/1102179-frida-kahlo-wordless-infinite-you-you-intensify-everything/",
    "originator": {
      "id": 128530,
      "name": "Frida Kahlo",
      "url": "https://quotepark.com/authors/frida-kahlo/"
    },
    "tags": [
      "left"
    ]
  },
  {
    "id": 1802642,
    "language_code": "en",
    "content": "People generally don't change unless a traumatic event occurs in their life which triggers the brain into new action.",
    "url": "https://quotepark.com/quotes/1802642-jordan-peterson-people-generally-dont-change-unless-a-traumatic-e/",
    "originator": {
      "id": 212248,
      "name": "Jordan Peterson",
      "url": "https://quotepark.com/authors/jordan-peterson/"
    },
    "tags": [
      "trigger"
    ]
  },
  {
    "id": 1292294,
    "language_code": "en",
    "content": "I am a hard person to love but when I love, I love really hard.",
    "url": "https://quotepark.com/quotes/1292294-tupac-shakur-i-am-a-hard-person-to-love-but-when-i-love-i-love/",
    "originator": {
      "id": 129929,
      "name": "Tupac Shakur",
      "url": "https://quotepark.com/authors/tupac-shakur/"
    },
    "tags": [
      "personal"
    ]
  },
  {
    "id": 2111441,
    "language_code": "en",
    "content": "It's all true that education will make you intelligent. But it can't automatically make you a good person too.",
    "url": "https://quotepark.com/quotes/2111441-mwanandeke-kindembo-its-all-true-that-education-will-make-you-intelli/",
    "originator": {
      "id": 284126,
      "name": "Mwanandeke Kindembo",
      "url": "https://quotepark.com/authors/mwanandeke-kindembo/"
    },
    "tags": [
      "goodness"
    ]
  },
  {
    "id": 711443,
    "language_code": "en",
    "content": "Never be afraid to trust an unknown future to a known God.",
    "url": "https://quotepark.com/quotes/711443-corrie-ten-boom-never-be-afraid-to-trust-an-unknown-future-to-a-kn/",
    "originator": {
      "id": 130666,
      "name": "Corrie ten Boom",
      "url": "https://quotepark.com/authors/corrie-ten-boom/"
    },
    "tags": [
      "Faith"
    ]
  },
  {
    "id": 1307728,
    "language_code": "en",
    "content": "Reality is wrong. Dreams are for the real.",
    "url": "https://quotepark.com/quotes/1307728-tupac-shakur-reality-is-wrong-dreams-are-for-the-real/",
    "originator": {
      "id": 129929,
      "name": "Tupac Shakur",
      "url": "https://quotepark.com/authors/tupac-shakur/"
    },
    "tags": [
      "Powerful"
    ]
  },
  {
    "id": 1221212,
    "language_code": "en",
    "content": "Comming from your friendly neighborhood Spider-Man",
    "url": "https://quotepark.com/quotes/1221212-stan-lee-comming-from-your-friendly-neighborhood-spider-man/",
    "originator": {
      "id": 138562,
      "name": "Stan Lee",
      "url": "https://quotepark.com/authors/stan-lee/"
    },
    "tags": [
      "spider"
    ]
  },
  {
    "id": 1030050,
    "language_code": "en",
    "content": "I don't know where I'm going from here, but I promise it won't be boring.",
    "url": "https://quotepark.com/quotes/1030050-david-bowie-i-dont-know-where-im-going-from-here-but-i-prom/",
    "originator": {
      "id": 132069,
      "name": "David Bowie",
      "url": "https://quotepark.com/authors/david-bowie/"
    },
    "tags": [
      "New Year"
    ]
  },
  {
    "id": 1520278,
    "language_code": "en",
    "content": "A Woman in harmony with her spirit\nis like a river flowing.\nShe goes where she will without pretense and arrives at her destination\nprepared to be herself\nand only herself",
    "url": "https://quotepark.com/quotes/1520278-maya-angelou-a-woman-in-harmony-with-her-spirit-is-like-a-river/",
    "originator": {
      "id": 127515,
      "name": "Maya Angelou",
      "url": "https://quotepark.com/authors/maya-angelou/"
    },
    "tags": [
      "woman"
    ]
  },
  {
    "id": 984543,
    "language_code": "en",
    "content": "Every one interprets everything in terms of his own experience. If you say anything which does not touch a precisely similar spot in another man's brain, he either misunderstands you, or doesn't understand you at all.",
    "url": "https://quotepark.com/quotes/984543-aleister-crowley-every-one-interprets-everything-in-terms-of-his-ow/",
    "originator": {
      "id": 127330,
      "name": "Aleister Crowley",
      "url": "https://quotepark.com/authors/aleister-crowley/"
    },
    "tags": [
      "touch"
    ]
  },
  {
    "id": 1909850,
    "language_code": "en",
    "content": ".. When an individual, e. g. higher forms of animals, thinks, it is always for his own advantage whether the resulting action or expression is favorable or not to the onlookers or observers.",
    "url": "https://quotepark.com/quotes/1909850-isidro-a-t-savillo-when-an-individual-e-g-higher-forms-of-anima/",
    "originator": {
      "id": 222368,
      "name": "Isidro A. T. Savillo",
      "url": "https://quotepark.com/authors/isidro-a-t-savillo/"
    },
    "tags": [
      "result"
    ]
  },
  {
    "id": 1956436,
    "language_code": "en",
    "content": "Help me find a way to pass the time Everybody tellin' me life's short, but I wanna die Help me find a way to make you mine Everybody tellin' me not to, but I'm gonna try Now I'm gettin' high again, tonight",
    "url": "https://quotepark.com/quotes/1956436-lil-peep-help-me-find-a-way-to-pass-the-time-everybody-tell/",
    "originator": {
      "id": 269333,
      "name": "Lil Peep",
      "url": "https://quotepark.com/authors/lil-peep/"
    },
    "tags": [
      "try"
    ]
  }
];

let apiSettings = {
  method: 'GET',
  url: 'https://quotes15.p.rapidapi.com/quotes/random/',
  headers: {
    'x-rapidapi-host': 'quotes15.p.rapidapi.com',
    'x-rapidapi-key': '271600c359mshcfd53c5d0827848p1a47dfjsn3ab38fe14cc2'
  }
};

let viewedStoredFallBackQuotes = [];
let storedQuotes = [];
let viewedQuotes = [];

const MakeGetRequest = (path) => {
  return axios.request(path);
}

setInterval(() => { StoreQuotes(); }, intervelBetweenRequests);

const GenerateNewQuote = async () => {
  SetRandomBackgroundColor();
  if (storedQuotes.length <= 0 || storedQuotes.length >= viewedQuotes.length) {
    GetQuoteFromLocal();
  } else {
    GetQuoteFromAPI()
  }
}

const StoreQuotes = async () => {
  if (storedQuotes.length < maximumStoredQuotes) {
    let apiCall = await MakeGetRequest(apiSettings)
    if (apiCall.data.content.length <= maximumQuoteCharacterLimit) {
      storedQuotes.push(apiCall.data)
    }
  } else if (viewedQuotes.length >= storedQuotes.length) {
    storedQuotes = [];
    viewedQuotes = [];
  }
}

const CheckIfQuoteHasBeenViewed = (indexToCheck, arrayToCheck) => {
  for (let i = 0; i <= arrayToCheck.length; i++) {
    if (indexToCheck === arrayToCheck[i]) {
      return true;
    }
  }
  return false;
}

const DisplayQuote = (quote, author, tag) => {
  quoteText.innerHTML = quote;
  authorText.innerHTML = author;
  tagText.innerHTML = tag;
}

const GetQuoteFromLocal = () => {
  let fallbackRandNum = Math.floor(Math.random() * storedFallBackQuotes.length);

  while (CheckIfQuoteHasBeenViewed(fallbackRandNum, viewedStoredFallBackQuotes)) {
    fallbackRandNum = Math.floor(Math.random() * storedFallBackQuotes.length);
    if (viewedStoredFallBackQuotes.length >= storedFallBackQuotes.length) {
      viewedStoredFallBackQuotes = [];
    }
  }

  viewedStoredFallBackQuotes.push(fallbackRandNum);

  let [tagFirstLetter, ...other] = storedFallBackQuotes[fallbackRandNum].tags[0];
  const completeTag = `${tagFirstLetter.toUpperCase()}${other.join().replaceAll(',', '')}`;

  DisplayQuote(storedFallBackQuotes[fallbackRandNum].content, `${storedFallBackQuotes[fallbackRandNum].originator.name}`, `Tag: ${completeTag}`)
}

const GetQuoteFromAPI = () => {
  let randNum = Math.floor(Math.random() * storedQuotes.length);

  while (CheckIfQuoteHasBeenViewed(randNum, viewedQuotes)) {
    randNum = Math.floor(Math.random() * storedQuotes.length);
    if (viewedQuotes.length >= storedQuotes.length) {
      viewedQuotes = [];
    }
  }

  viewedQuotes.push(randNum);
  let [tagFirstLetter, ...other] = storedQuotes[randNum].tags[0];
  const completeTag = `${tagFirstLetter.toUpperCase()}${other.join().replaceAll(',', '')}`;

  DisplayQuote(storedQuotes[randNum].content, `${storedQuotes[randNum].originator.name}`, `Tag: ${completeTag}`)
}

const SetRandomBackgroundColor = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  container.style.backgroundColor = color;
}

const quoteButton = document.querySelector("#loadQuote").addEventListener('click', GenerateNewQuote);