//document.queryselector(#bodycopy).style.background = "ff0000";
// const selectElement = documeant = document.querySelector("choices");
// const result = document.querySelector("results");
const questions = [
    {
        question: "Question 1",
        options: [
            {text: "Option 1", score: 1},
            {text: "Option 2", score: 2},
            {text: "Option 3", score: 3},
            {text: "Option 4", score: 4}
        ]
    },
    {
        question: "Question 2",
        options: [
            {text: "Option 1", score: 4},
            {text: "Option 2", score: 3},
            {text: "Option 3", score: 2},
            {text: "Option 4", score: 1}
        ]
    },
    {
        question: "Question 3",
        options: [
            {text: "Option 1", score: 3},
            {text: "Option 2", score: 2},
            {text: "Option 3", score: 1},
            {text: "Option 4", score: 4}
        ]
    },
    {
        question: "Question 4",
        options: [
            {text: "Option 1", score: 3},
            {text: "Option 2", score: 2},
            {text: "Option 3", score: 1},
            {text: "Option 4", score: 4}
        ]
    },
    {
        question: "Question 5",
        options: [
            {text: "Option 1", score: 3},
            {text: "Option 2", score: 2},
            {text: "Option 3", score: 1},
            {text: "Option 4", score: 4}
        ]
    },
    {
        question: "Question 6",
        options: [
            {text: "Option 1", score: 3},
            {text: "Option 2", score: 2},
            {text: "Option 3", score: 1},
            {text: "Option 4", score: 4}
        ]
    },
    {
        question: "Question 7",
        options: [
            {text: "Option 1", score: 3},
            {text: "Option 2", score: 2},
            {text: "Option 3", score: 1},
            {text: "Option 4", score: 4}
        ]
    },
    {
        question: "Question 8",
        options: [
            {text: "Option 1", score: 3},
            {text: "Option 2", score: 2},
            {text: "Option 3", score: 1},
            {text: "Option 4", score: 4}
        ]
    }
    // needs more questions here
];

const resultRanges = [
    {minScore: 0, maxScore: 5, result: "Result 1"},
    {minScore: 6, maxScore: 10, result: "Result 2"},
    {minScore: 11, maxScore: 15, result: "Result 3"},
    // needs more result ranges here
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const submitButton = document.getElementById("submit");
const questionElement = document.getElementById("question");
const optionElements = document.getElementById("options").querySelectorAll(".option");
const resultTitleElement = document.getElementById("result-title");
const resultTextElement = document.getElementById("result-text");

function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    optionElements.forEach((optionElement, index) => {
        const option = question.options[index];
        optionElement.textContent = option.text;
    });
}

function selectOption(optionIndex) {
}