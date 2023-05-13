const questionArray = ["How old are you?", "How physically active are you?","How exhausted would you say you are at the end of the day?","How much do you eat throughout the day?","How busy would you say you are throughout the day?","How frequently do you nap throughout the day?","How stressed are you?"," How much sleep do you usually get?"]
const option1Array = ["13-18", "Not at all active (0-30 min)","Not exhausted, I still have a lot of energy","Minimally (please eat more) (0-1000 calories)"," Not very busy, I'm chillin (0-1 hrs)","Never, I only sleep after the days over","✨Not at all!, I feel great✨  (liar)", "0-3 hours (how are you alive)"]
const option2Array = ["18-24", "Somewhat active","A little exhausted but I can still do a bit before I end the day","A bit (not horrible, but don't eat too little please) (1000- 1600 calories)","Decently busy, I can handle this (2-3 hrs)","Once, just a little rest in the middle of the day","A bit, but it's tolerable", "3-5 hours (seek help)"]
const option3Array = ["25-30", "Moderately active","A bit tired but not worn out, I just need a nap and I'll be fine","Average (very cool and awesome) (1600-2000 calories)","Very busy, I'm drowning in work (4-5 hrs)","A few times a day. I need that energy","Pretty stressed", "5-7 hours (that's sick!)"]
const option4Array = ["30-42", "Frequently active","Exhausted, I collapse onto the bed and dream the day away","A lot (also sick and nice)  (2000+ calories)","Lord have mercy on my soul, what god forsaken crime have I committed to justify this punishment. Oh never mind I'm a TNS student, that makes much more sense. (6+ hrs)","My life goal is to nap as much as possible everyday. You cannot stop me. I only woke up to do this quiz. Good night.","Hell on Earth.", "7+ hours (must be nice)"]
const elementsArray = ["question", "option1", "option2", "option3", "option4"]
const previousBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")
var score = 0
var totalQuestions = 8
let questionIndex = 0
var resultMessage = ""
var resultImage = ""

// dictionary to get the correct array to take text from
arrayDict = {
    "question": questionArray,
    "option1": option1Array,
    "option2": option2Array,
    "option3": option3Array,
    "option4": option4Array
}

function showQuestion() {
    elementsArray.forEach(element => {
        const currentElement = document.getElementById(element)
        if (element == "question") {
            currentElement.innerHTML = arrayDict[element][questionIndex]
        } else {
            currentElement.value = arrayDict[element][questionIndex]
        }
    });
}

// make the first question appear correctly
showQuestion()


function showOrHideSubmit() {
    const submitButton = document.getElementById("submit")
    
    if (optionsChosenArray.length == 8) {
        submitButton.style.display = "inline"
    } else {
        submitButton.style.display = "none"
    }
}

function incrementIndex() {
    // Do not go higher than index 7
    if (questionIndex < 7) {
        questionIndex += 1
        console.log(`Current question index: ${questionIndex}`)
    }
}

// function decrementIndex() {
//     // Do not go lower than index 0
//     if (questionIndex > 0) {
//         questionIndex -= 1
//         console.log(`Current question index: ${questionIndex}`)
//     }
// }

// nextBtn.addEventListener('click', () => {
//     incrementIndex()
//     showQuestion()
//     showOrHideSubmit()
// })

// previousBtn.addEventListener('click', () => {
//     decrementIndex()
//     showQuestion()
//     showOrHideSubmit()
// })

optionsChosenArray = []
optionChosen = ""
function pressedOption(event) {
    if (optionsChosenArray.length != 8) {
        optionChosen = event.target.id
        optionsChosenArray.push(optionChosen)
    }

    console.log(optionsChosenArray)
    incrementIndex()
    showQuestion()
    showOrHideSubmit()
}

function showResult()
{
    //option variables & scores
    optionsChosenArray.forEach(element => {
        console.log(element)
        if (element == "option1")
        {
            score ++
        } else if (element == "option2")
            {
                score += 20
            } else if (element == "option3")
                {
                    score += 30
                } else if (element == "option4")
                    {
                        score += 40
                    }
    });

    var scorePercentage = score;
    console.log(`score: ${score}. score percentage: ${scorePercentage}.`)

    // score results

    if (scorePercentage <= 8)
    {
    resultMessage = "You need sleep!!!! Lot's of it, I reccomend a full 8 hours a night";
    resultImage = "resources/imgs/moon.gif";
    }
    
    else if (scorePercentage > 8 && scorePercentage <= 160)

    {
        resultMessage = "You gotta sleep more! add 3 more hours to your sleep schedule";
        resultImage = "resources/imgs/moon.gif";
    }
    else if (scorePercentage > 160 && scorePercentage <= 240)

    {
        resultMessage = "You are well rested, I reccomend a small nap here and there for a pick me up, 10-30 min";
        resultImage = "resources/imgs/moon.gif";
    }
    else if (scorePercentage > 240 && scorePercentage <= 320)
    {
        resultMessage = "You get a good amount of sleep, good job!";
        resultImage = "resources/imgs/moon.gif";
    }

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<h2 id='result-title'>Sleep Time: " + "<p id='result-text'>" + resultMessage + "</p>" + "<img src='" + resultImage + "'>";
}