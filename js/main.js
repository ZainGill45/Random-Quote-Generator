const quoteText = document.querySelector("#quote");
const authorText = document.querySelector("#source");
const tagText = document.querySelector("#tag");
const container = document.querySelector("#container");

const quotes = [
  ["There is nothing impossible to they who will try.", "Alexander the Great", "Inspiration"],
  ["When you have a dream, you’ve got to grab it and never let go.", "Carol Burnett", "Inspiration"],
  ["Nothing is impossible. The word itself says ‘I’m possible!", "Audrey Hepburn", "Inspiration"],
  ["The bad news is time flies. The good news is you’re the pilot.", "Michael Altshuler", "Inspiration"],
  ["Life has got all those twists and turns. You’ve got to hold on tight and off you go.", "Nicole Kidman", "Inspiration"],
  ["Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.", "Amal Clooney", "Inspiration"],
  ["You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.", "Duchess Meghan", "Inspiration"],
  ["Success is not final, failure is not fatal: it is the courage to continue that counts.", "Winston Churchill", "Inspiration"],
  ["People tell you the world looks a certain way. Parents tell you how to think. Schools tell you how to think. TV. Religion. And then at a certain point, if you’re lucky, you realize you can make up your own mind. Nobody sets the rules but you. You can design your own life.", "Carrie Ann Moss", "Inspiration"],
  ["For me, becoming isn’t about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn’t end.", "Michelle Obama", "Inspiration"],
  ["Be yourself; everyone else is already taken.", "Oscar Wilde", "Wise"],
  ["In the end, it's not the years in your life that count. It's the life in your years.", "Abraham Lincoln", "Wise"],
  ["The greatest day in your life and mine is when we take total responsibility for our attitudes. That's the day we truly grow up.", "John C. Maxwell", "Wise"],
  ["Life is not a problem to be solved, but a reality to be experienced.", "Soren Kierkegaard", "Wise"],
  ["What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds.", "Wayne Dyer", "Wise"],
  ["Life is ten percent what happens to you and ninety percent how you respond to it.", "Lou Holtz", "Wise"],
  ["Too often we underestimate the power of a touch, a smile, a kind word, a listening ear, an honest compliment, or the smallest act of caring, all of which have the potential to turn a life around.", "Leo Buscaglia", "Wise"],
  ["Life isn't about finding yourself. Life is about creating yourself.", "George Bernard Shaw", "Wise"],
  ["There is more to life than increasing its speed.", "Mahatma Gandhi", "Wise"],
  ["Life is really simple, but we insist on making it complicated.", "Confucius", "Wise"],
  ["Our prime purpose in this life is to help others. And if you can't help them, at least don't hurt them.", "Dalai Lama", "Wise"],
  ["Life's most persistent and urgent question is, 'What are you doing for others?", "Martin Luther King, Jr.", "Wise"],
  ["Life is a series of natural and spontaneous changes. Don't resist them--that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.", "Lao Tzu", "Wise"],
  ["Change is the law of life. And those who look only to the past or present are certain to miss the future.", "John F. Kennedy", "Wise"],
  ["Only a life lived for others is a life worthwhile.", "Albert Einstein", "Wise"],
  ["When life is too easy for us, we must beware or we may not be ready to meet the blows which sooner or later come to everyone, rich or poor.", "Eleanor Roosevelt", "Wise"],
  ["God gave us the gift of life; it is up to us to give ourselves the gift of living well.", "Voltaire", "Wise"],
  ["We make a living by what we get, but we make a life by what we give.", "Winston Churchill", "Wise"],
  ["My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.", "Maya Angelou", "Wise"],
  ["There is no passion to be found playing small--in settling for a life that is less than the one you are capable of living.", "Nelson Mandela", "Wise"],
  ["You never really learn much from hearing yourself speak.", "George Clooney", "Wise"],
  ["I've failed over and over and over again in my life and that is why I succeed.", "Michael Jordan", "Wise"],
  ["Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this.", "Celine Dion", "Life"],
  ["The purpose of our lives is to be happy.", "Dalai Lama", "Life"],
  ["Life is what happens when you’re busy making other plans.", "John Lennon", "Life"],
  ["Many of life’s failures are people who did not realize how close they were to success when they gave up.", "Thomas A. Edison", "Life"],
  ["Never let the fear of striking out keep you from playing the game.", "Babe Ruth", "Life"],
  ["Money and success don’t change people; they merely amplify what is already there.", "Will Smith", "Life"],
  ["Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.", "Steve Jobs", "Life"],
  ["Not how long, but how well you have lived is the main thing.", "Seneca", "Life"],
  ["If life were predictable it would cease to be life, and be without flavor.", "Eleanor Roosevelt", "Life"],
  ["Curiosity about life in all of its aspects, I think, is still the secret of great creative people.", "Leo Burnett", "Life"],
  ["Everybody wants to be famous, but nobody wants to do the work. I live by that. You grind hard so you can play hard. At the end of the day, you put all the work in, and eventually it’ll pay off. It could be in a year, it could be in 30 years. Eventually, your hard work will pay off.", "Kevin Hart", "Hardwork"],
  ["Winners embrace hard work. They love the discipline of it, the trade-off they’re making to win. Losers, on the other hand, see it as punishment. And that’s the difference.", "Lou Holtz", "Hardwork"],
  ["Luck is great, but most of life is hard work.", "Iain Duncan Smith", "Hardwork"],
  ["Work and you’ll get what you need; work harder and you’ll get what you want.", "Prabakaran Thirumalai", "Hardwork"],
  ["Do what is right, not what is easy nor what is popular.", "Roy T. Bennett", "Philosophy"],
  ["By changing nothing, nothing changes.", "Tony Robbins", "Change"],
  ["You can, you should, and if you’re brave enough to start, you will.", "Stephen King", "Work"],
  ["Experience is not what happens to you; it is what you do with what happens to you.", "Aldous Huxley", "Life"],
  ["People often say that beauty is in the eye of the beholder, and I say that the most liberating thing about beauty is realizing you are the beholder.", "Salma Hayek", "Beauty"],
  ["Love doesn’t make the world go round. Love is what makes the ride worthwhile.", "Franklin P. Jones", "Love"],
  ["Kindness is one thing you can’t give away. It always comes back.", "George Skolsky", "Kindness"],
  ["Great opportunities to help others seldom come, but small ones surround us every day.", "Sally Koch", "Opportunity"],
  ["The greatest mistake you can make is to be continually fearing that you’ll make one.", "Elbert Hubbard", "Mistake"],
  ["Real courage is when you know you’re licked before you begin, but you begin anyway and see it through no matter what.", "Harper Lee", "Courage"],
  ["There is only one certainty in life and that is that nothing is certain.", "G.K. Chesterton", "Life"],
  ["The most important trip you may take in life is meeting people halfway.", "Henry Boye", "Compromise"],
  ["Never fear shadows. They simply mean there’s a light shining nearby.", "Ruth E. Renkel", "Hope"],
  ["Time you enjoy wasting was not wasted.", "John Lennon", "Time"],
  ["Having a young child explain something exciting he has seen is the finest example of communication you will ever hear or see.", "Bob Talbert", "Communication"],
  ["Worry never robs tomorrow of its sorrow; it only saps today of its strength.", "A.J. Cronin", "Stress"],
  ["My father gave me the best advice of my life. He said, “Whatever you do, don’t wake up at 65 years old and think about what you should have done with your life.”", "George Clooney", "Advice"],
  ["Pay no attention to what the critics say. A statue has never been erected in honor of a critic.", "Jean Sibelius", "Critic"],
  ["I would rather live in a world where my life is surrounded by mystery than live in a world so small that my mind could comprehend it.", "Harry Emerson Fosdick", "Life"],
  ["It’s a whole lot more satisfying to reach for the stars, even if you end up landing only on the moon.", "Kermit the Frog", "Achievement"],
  ["Be open to learning new lessons, even if they contradict the lessons you learned yesterday.", "Ellen DeGeneres", "Learning"],
  ["Quiet minds cannot be perplexed or frightened, but go on in fortune or misfortune at their own private pace, like a clock during a thunderstorm.", "Robert Louis Stevenson", "Wise"],
  ["To be without some of the things you want is an indispensable part of happiness.", "Bertrand Russell", "Wise"],
  ["The older you get the more you realize that kindness is synonymous with happiness.", "Lionel Barrymore", "Happiness"],
  ["The only thing worse than being talked about is not being talked about.", "Oscar Wilde", "Fame"],
  ["Worry is like sand in an oyster: a little produces a pearl, too much kills the animal.", "Marcelene Cox", "Worry"],
  ["Morale is when your hands and feet keep on working when your head says it can’t be done.", "Ben Morcell", "Moral"],
  ["What I do today is important because I am exchanging a day of my life for it.", "Hugh Mulligan", "Life"],
  ["Words of comfort, skillfully administered, are the oldest therapy known to man.", "Louis Nizer", "Healing"],
  ["It is our choices that show what we really are, far more than our abilities.", "J.K. Rowling", "Character"],
  ["Don’t waste a minute not being happy. If one window closes, run to the next window—or break down a door.", "Brooke Shields", "Happiness"],
  ["The aging process has you firmly in its grasp if you never get the urge to throw a snowball.", "Doug Larson", "Ageing"],
  ["Keep your love of nature, for that is the true way to understand art more and more.", "Vincent Van Gogh", "Art"],
  ["To feel that one has a place in life solves half the problem of contentment.", "George E. Woodberry", "Contentment"],
  ["I don’t want to get to the end of my life and find that I have just lived the length of it. I want to have lived the width of it as well.", "Diane Ackerman", "Life"],
  ["They always say time changes things, but you actually have to change them yourself.", "Andy Warhol", "Change"],
  ["A life of unremitting caution, without the carefree—or even, occasionally, the careless—may turn out to be half a life.", "Anna Quindlen", "Life"],
  ["Luck is what happens when preparation meets opportunity.", "Elmer G. Leterman", "Luck"],
  ["We are not at our best perched at the summit; we are climbers, at our best when the way is steep.", "John W. Gardner", "Achievement"],
  ["Without darkness, there are no dreams.", "Karla Kuban", "Dream"],
  ["Be yourself. No one can ever tell you that you’re doing it wrong.", "James Leo Herlihy", "Identity"],
  ["Procrastination means you know what you need to do and you don’t do it. If you don’t know what to do, you aren’t procrastinating. You are thinking.", "Lynn Lively", "Procrastination"],
  ["I’ve learned that people will forget what you’ve said, people will forget what you did, but people will never forget how you made them feel.", "Maya Angelou", "Wise"],
  ["Just because you’re nervous doesn’t mean you have to look nervous. Nobody can look inside you. Project what you want to project.", "Valerie Jarrett", "Projection"],
  ["Everyone is an explorer. How could you possibly live your life looking at a door and not opening it?", "Robert D. Ballard", "Life"],
  ["The secret of the man who is universally interesting is that he is universally interested.", "William Dean Howells", "Interesting"],
  ["Vitality shows not only in the ability to persist but in the ability to start over.", "F. Scott Fitzgerald", "Vitality"],
  ["The most common way people give up their power is by thinking they don’t have any.", "Alice Walker", "Power"],
]

const randomColors = 
[
  '#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#868e96', '#495057', '#343a40', '#212529', // Grey lighter variants not used '#f8f9fa', '#f1f3f5', 
  '#ffc9c9', '#ffa8a8', '#ff8787', '#ff6b6b', '#fa5252', '#f03e3e', '#e03131', '#c92a2a', // Red lighter variants not used '#fff5f5', '#ffe3e3', 
  '#fcc2d7', '#faa2c1', '#f783ac', '#f06595', '#e64980', '#d6336c', '#c2255c', '#a61e4d', //  Pink lighter variants not used '#fff0f6', '#ffdeeb', 
  '#eebefa', '#e599f7', '#da77f2', '#cc5de8', '#be4bdb', '#ae3ec9', '#9c36b5', '#862e9c', // Grape lighter variants not used '#f8f0fc', '#f3d9fa', 
  '#d0bfff', '#b197fc', '#9775fa', '#845ef7', '#7950f2', '#7048e8', '#6741d9', '#5f3dc4', // Violet lighter variants not used '#f3f0ff', '#e5dbff', 
  '#bac8ff', '#91a7ff', '#748ffc', '#5c7cfa', '#4c6ef5', '#4263eb', '#3b5bdb', '#364fc7', // Indigo lighter variants not used '#edf2ff', '#dbe4ff', 
  '#a5d8ff', '#74c0fc', '#4dabf7', '#339af0', '#228be6', '#1c7ed6', '#1971c2', '#1864ab', // Blue lighter variants not used '#e7f5ff', '#d0ebff', 
  '#99e9f2', '#66d9e8', '#3bc9db', '#22b8cf', '#15aabf', '#1098ad', '#0c8599', '#0b7285', // Cyan lighter variants not used '#e3fafc', '#c5f6fa', 
  '#96f2d7', '#63e6be', '#38d9a9', '#20c997', '#12b886', '#0ca678', '#099268', '#087f5b', // Teal lighter variants not used '#e6fcf5', '#c3fae8', 
  '#b2f2bb', '#8ce99a', '#69db7c', '#51cf66', '#40c057', '#37b24d', '#2f9e44', '#2b8a3e', // Green lighter variants not used '#ebfbee', '#d3f9d8', 
  '#d8f5a2', '#c0eb75', '#a9e34b', '#94d82d', '#82c91e', '#74b816', '#66a80f', '#5c940d', // Lime lighter variants not used '#f4fce3', '#e9fac8', 
  '#ffec99', '#ffe066', '#ffd43b', '#fcc419', '#fab005', '#f59f00', '#f08c00', '#e67700', // Yellow lighter variants not used '#fff9db', '#fff3bf', 
  '#ffd8a8', '#ffc078', '#ffa94d', '#ff922b', '#fd7e14', '#f76707', '#e8590c', '#d9480f', // Orange lighter variants not used '#fff4e6', '#ffe8cc', 
];

let viewedQuotes = [];

const GenerateNewQuote = () => {
  if (viewedQuotes.length >= quotes.length)
    viewedQuotes = [];

  let randNum = Math.floor(Math.random() * quotes.length);

  while (CheckIfIndexIsInArray(randNum, viewedQuotes))
    randNum = Math.floor(Math.random() * quotes.length);

  SetRandomBackgroundColor();

  viewedQuotes.push(randNum);

  quoteText.innerHTML = quotes[randNum][0];
  authorText.innerHTML = quotes[randNum][1];
  tagText.innerHTML = `Tag: ${quotes[randNum][2]}`;
}

const CheckIfIndexIsInArray = (numberToCheck, arrayToCheck) => {
  for (var i = 0; i < arrayToCheck.length; i++) {
    if (numberToCheck === arrayToCheck[i]) {
      return true;
    }
  }
  return false;
}

const SetRandomBackgroundColor = () => {
  const randNum = Math.floor(Math.random() * randomColors.length);
  container.style.backgroundColor = randomColors[randNum];
}

const quoteButton = document.querySelector("#loadQuote").addEventListener("click", GenerateNewQuote);