// Quiz Questions, Options, and Results
const questions = [
  {
      question: "It’s a sunny Saturday, and you’re ready to spend time relaxing. What’s your ideal activity?",
      options: [
          "A) 🌱 Planting a garden or growing some veggies.",
          "B) 🚶‍♀️ Going for a nature walk or hike to admire the beauty of the earth.",
          "C) ♻️ Hosting a neighborhood cleanup and recycling drive.",
          "D) 🛍 Shopping in your own closet instead of buying a cute new outfit."
      ]
  },
  {
      question: "You’re at school, and it’s time for lunch. What’s in your eco-friendly lunchbox?",
      options: [
          "A) 🥕 Veggies and fruits you picked from your home garden.",
          "B) 🍎 A reusable container filled with snacks and a reusable water bottle.",
          "C) 🍽 Leftovers in a reusable container to avoid food waste.",
          "D) 🥤 An eco-friendly bamboo cutlery set, cloth napkin, and a metal straw for your juice."
      ]
  },
  // Add additional questions here following the same structure...
];

const results = {
  "A": "Green Thumb Goddess 🌱 - You have a deep connection with nature, and you love helping things grow.",
  "B": "Nature Protector 🌿 - You love being outside and taking care of the planet’s natural beauty.",
  "C": "Recycling Champion ♻️ - You’re all about reducing waste and finding ways to reuse everything.",
  "D": "Eco Fashionista 🎨 - You believe sustainability can be stylish, and you’re passionate about eco-friendly choices."
};

// Quiz State
let currentQuestion = 0;
let scores = { A: 0, B: 0, C: 0, D: 0 };
let selectedAnswer = null;

function setup() {
  createCanvas(600, 400);
  nextButton = createButton("Next");
  nextButton.mousePressed(nextQuestion);
  nextButton.position(250, 350);
  showQuestion();
}

function showQuestion() {
  background(244);
  let questionData = questions[currentQuestion];
  textSize(18);
  textAlign(LEFT, TOP);
  text(questionData.question, 20, 20, 560, 100);
  
  let y = 120;
  questionData.options.forEach((option, index) => {
      let button = createButton(option);
      button.position(20, y);
      button.size(550, 30);
      button.mousePressed(() => selectAnswer(option.charAt(0)));
      y += 40;
  });
}

function selectAnswer(answer) {
  selectedAnswer = answer;
}

function nextQuestion() {
  if (!selectedAnswer) {
      alert("Please select an answer.");
      return;
  }
  scores[selectedAnswer]++;
  selectedAnswer = null;

  currentQuestion++;
  if (currentQuestion < questions.length) {
      showQuestion();
  } else {
      showResult();
  }
}

function showResult() {
  background(244);
  let highestScore = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
  let resultText = results[highestScore];
  textSize(18);
  textAlign(CENTER, CENTER);
  text(resultText, 20, 20, 560, 360);

  nextButton.hide();
}

