
const quizData = [
  {
  question: "Which fast food restaurant's logo features four yellow squares on a blue background?",
  answer: "Greggs", 
  options: ["Greggs","Mc Donalds", "Burger King", "Taco Bell"]
},
{
  question: "What type of pastry are profiteroles made with?",
  answer: "Choux pastry", 
  options: ["Biscuit pastry","Choux pastry"]
},
{
  question: "What is Roquefort cheese made from?",
  answer: "Ewe's milk", 
  options: ["Cow milk", "Almond milk","Ewe's milk", "Goats milk"]
},
{
  question: "Are Jaffa Cakes legally a cake or a biscuit?",
  answer: "A cake", 
  options: ["A cake","A biscuit"]
},
{
  question: "What is Eleven's favourite food in Stranger Things?",
  answer: "Eggos", 
  options: ["French Fries", "Eggos", "Ice Cream", "Burger"]
},
{
  question: "What is the most expensive spice in the world by weight?",
  answer: "Saffron", 
  options: ["Curry", "Salt", "Saffron", "Chili"]
},
{
  question: "Grenadine comes from which fruit?",
  answer: "Pomegranate", 
  options: ["Pomegranate", "Apple", "Pear", "Cherry"]
},
{
  question: "What kind of dessert did Great British Bake Off star Iain famously throw in the bin back in 2014?",
  answer: "Baked Alaska", 
  options: ["Apple Pie", "Crème Brûlée", "Baked Alaska", "Vanilla Pudding"]
},
{
  question: "What drink is nicknamed 'the green fairy'?",
  answer: "Absinthe", 
  options: ["Jägermeister", "Absinthe", "Midori Melon", "Green Moon Vodka"]
},
{
  question: "Which chocolate's slogan is: 'the lighter way to enjoy chocolate'?",
  answer: "Maltesers", 
  options: ["Milka", "Lindt", "Maltesers", "Herseys"]
},
{
  question: "Where was Tabasco invented?",
  answer: "Avery Island, Louisiana", 
  options: ["Mexico", "Avery Island, Louisiana", "Russia", "Spain"]
},
{
  question: "What is the main ingredient in sauerkraut?",
  answer: "Cabbage", 
  options: ["Salat", "Spinach", "Cabbage", "Cucumbers"]
},
{
  question: "What is added to a croque monsieur to make it a croque madame?",
  answer: "An egg", 
  options: ["A pear", "An Apple", "An egg", "Milk" ]
},
{
  question: "Which celebrity released a cookbook called 'From Crook to Cook' in 2018?",
  answer: "Snoop Dogg", 
  options: ["Snoop Dogg", "Harry Styles", "Selena Gomez", "Justin Bieber"]
},
{
  question: "What are the two main ingredients in Cullen Skink?",
  answer: "Smoked haddock and potatoes", 
  options: ["Salat and bread", "Sausage and potatoes", "Smoked haddock and potatoes", "Beef and potatoes"]
},
{
  question: "Which of these does not contain nuts?",
  answer: "Double Decker", 
  options: ["Double Decker", "Snickers", "Toblerone", "Picnic"]
},
{
  question: "What is a Goosnargh cake?",
  answer: "A type of biscuit from Lancashire spiced with carraway seeds", 
  options: ["A type of biscuit from Lancashire spiced with sunflower seeds", "A type of biscuit from Lancashire spiced with carraway seeds"]
},
{
  question: "Which animal is on the Toblerone logo?",
  answer: "A bear", 
  options: ["A Moose", "An Elk", "A bear", "A cow"]
},
{
  question: "What is chawanmushi?",
  answer: "A traditional Japanese breakfast food", 
  options: ["A traditional Japanese breakfast food", "A traditional Chinese breakfast food"]
},
{
  question: "What is the golden rule of cooking a carbonara?",
  answer: "Don't add cream", 
  options: ["Add cream", "Don't add cream"]
},
{
  question: "What is the filling of a Cadbury Creme Egg made of?",
  answer: "Fondant", 
  options: ["Creme", "Fondant", "Egg", "Cheese"]
},
{
  question: "How many spice levels are there at Nando's?",
  answer: "Seven", 
  options: ["Seven", "Ten", "Five", "Eight"]
},
{
  question: "Who are M&Ms named after?",
  answer: "They were named after their creators Mars and Murrie", 
  options: ["They were named after their creators Mars and Murrie", "They were named after their mascots Mars and Murrie"]
},
{
  question: "Where was the Hawaiian pizza invented?",
  answer: "Ontario, Canada", 
  options: ["Hawaii", "Germany", "Ontario, Canada", "Los Angeles"]
},
{
  question: "What is the American name for coriander?",
  answer: "Cilantro", 
  options: ["Cilantro", "Coriander"]
},
{
  question: "A fresh egg will do what in a glass of water?",
  answer: "Sink", 
  options: ["Float", "Sink"]
},
{
  question: "What is the most popular flavour of crisps in the UK?",
  answer: "Cheese and onion", 
  options: ["Paprika", "Cheese and onion", "Chili", "Salt and vinegar"]
},
{
  question: "Bucatini, Rigatoni and Strozzapreti are all types of what?",
  answer: "Pasta", 
  options: ["Breat", "Pasta", "Apples", "Potatoes"]
},
{
  question: "Is an avocado a fruit or vegetable?",
  answer: "A fruit", 
  options: ["A fruit", "A vegetable"]
},
{
  question: "What is the secret to Ross's Thanksgiving sandwich in Friends?",
  answer: "An extra slice of gravy soaked bread in the middle of the sandwich", 
  options: ["An extra slice of beef in the middle of the sandwich", "An extra slice of gravy soaked bread in the middle of the sandwich"]
},
{
  question: "What are the typical ingredients of a negroni cocktail?",
  answer: "Campari, vermouth and gin", 
  options: ["Campari, vermouth and vodka", "Campari, vermouth and gin"]
},
{
  question: "What is alliumphobia a fear of?",
  answer: "A fear of garlic", 
  options: ["A fear of apples", "A fear of sugar", "A fear of garlic", "A fear of calories"]
},
{
  question: "What pastry is Portugal known for?",
  answer: "Pastel de nata", 
  options: ["Pasta de peste", "Pastel de nata"]
},
{
  question: "On average how many cups of tea does a Brit drink day?",
  answer: "2.7", 
  options: ["4.7", "5" , "8", "2.7"]
},
{
  question: "Who is the 'naked chef'?",
  answer: "Jamie Oliver", 
  options: ["Jamie Oliver", "Gordon Ramsay"]
},
{
  question: "Which country produces the most coffee?",
  answer: "Brazil", 
  options: ["Spain", "Thailand", "Brazil", "Madagascar"]
},
{
  question: "What does 'nasi' mean?",
  answer: "Rice", 
  options: ["Milk", "Sea Food", "Rice", "Vegetables"]
},
{
  question: "How many Prets are there in London?",
  answer: "267", 
  options: ["154", "346", "267", "238"]
},
{
  question: "Paella originates from which country?",
  answer: "Spain", 
  options: ["Spain", "Mexico", "Brazil", "Portugal"]
},
{
  question: "A Yorkshire pudding traditionally accompanies what type of roast dinner?",
  answer: "Beef", 
  options: ["Pork", "Chicken", "Beef", "Turkey"]
}
];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayQuestion() {
  const questionData = quizData[currentQuestion];

  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerHTML = questionData.question;

  const optionsElement = document.createElement('div');
  optionsElement.className = 'options';

  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);

  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement('label');
    option.className = 'option';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = shuffledOptions[i];

    const optionText = document.createTextNode(shuffledOptions[i]);

    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    const answer = selectedOption.value;
    if (answer === quizData[currentQuestion].answer) {
      score++;
    } else {
      incorrectAnswers.push({
        question: quizData[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: quizData[currentQuestion].answer,
      });
    }
    currentQuestion++;
    selectedOption.checked = false;
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
}

function displayResult() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'inline-block';
  resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  quizContainer.style.display = 'block';
  submitButton.style.display = 'inline-block';
  retryButton.style.display = 'none';
  showAnswerButton.style.display = 'none';
  resultContainer.innerHTML = '';
  displayQuestion();
}

function showAnswer() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'none';

  let incorrectAnswersHtml = '';
  for (let i = 0; i < incorrectAnswers.length; i++) {
    incorrectAnswersHtml += `
      <p>
        <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
        <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
        <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
      </p>
    `;
  }

  resultContainer.innerHTML = `
    <p>You scored ${score} out of ${quizData.length}!</p>
    <p>Incorrect Answers:</p>
    ${incorrectAnswersHtml}
  `;
}

submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);

displayQuestion();