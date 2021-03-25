let questionsRight = 0;
let questionsWrong = 0;
let medals = "None";
const GameOverReminder = new Audio('audio/three-wrong-answers-reminder.mp3');
const ItsGameOver = new Audio('audio/game-over.wav');

function theAnswerIsRight() {
    questionsRight++;
    document.getElementById("amount-of-questions-right").innerHTML = "Q's Correct: " + questionsRight;
    medalEarned();
}

function theAnswerIsWrong() {
    if (questionsWrong == 2) {
        document.getElementById("scoreboard").style.display = "none";
        document.getElementById("questions-container").style.display = "none";
        document.querySelector('header').style.display = "none";
        document.getElementById("game-over").style.display = "block";
        ItsGameOver.play();
    } else {
        questionsWrong++;
    document.getElementById("amount-of-questions-wrong").innerHTML = "Q's Incorrect: " + questionsWrong;
    medalEarned();
    GameOverReminder.play();
    }
    
}

function medalEarned() {

    if (questionsRight <= 5) {

        medals = "None";
        document.getElementById("player-earned-medal").innerHTML = "Medal You Earned:" + " " + medals;
        document.getElementById("questions-player-won").innerHTML = "You only got " + questionsRight + " right";
    }

    if (questionsRight >= 5 && questionsRight <= 10) {

        medals = "Bronze";
        document.getElementById("player-earned-medal").innerHTML = "Medal You Earned: " + medals;
        document.getElementById("questions-player-won").innerHTML = "You only got " + questionsRight + " right";
    }

    if (questionsRight >= 10 && questionsRight <= 15) {

        medals = "Silver";
        document.getElementById("player-earned-medal").innerHTML = "Medal You Earned: " + medals;
        document.getElementById("questions-player-won").innerHTML = "You only got " + questionsRight + " right";
    }

    if (questionsRight >= 15 && questionsRight <= 20) {

        medals = "Gold";
        document.getElementById("player-earned-medal").innerHTML = "Medal You Earned: " + medals;
        document.getElementById("questions-player-won").innerHTML = "You only got " + questionsRight + " right";
    }

    if (questionsRight == 20) {

        window.location = "winner.html";

    }
}

function winnerMainMenu() {

    window.location = "index.html";
}

function gameIsComplete() {

    medalEarned();
    document.getElementById("player-won-but-didnt-get-all-questions").style.display = "block";
    document.querySelector('header').style.display = "none";
    document.getElementById("scoreboard").style.display = "none";
    document.getElementById("questions-container").style.display = "none";
}

// All questions //
function questionOne() {

    var question1 = prompt("What is your answer?");

    if (question1.toLowerCase() == "george washington")

    {

        document.getElementById("answer1").style.color = "green";
        document.getElementById("answer1").innerHTML = question1;
        theAnswerIsRight();
        document.getElementById("buttonOne").style.display = "none";


    } else  {

         document.getElementById("answer1").style.color = "red";
         document.getElementById("answer1").innerHTML = question1;
         theAnswerIsWrong();
         document.getElementById("buttonOne").style.display = "none";
    }
}

function questionTwo() {

    var question2 = prompt("What is your answer?");

    if (question2.toLowerCase() == "donald trump")

    {

        document.getElementById("answer2").style.color = "green";
        document.getElementById("answer2").innerHTML = question2;
        theAnswerIsRight();
        document.getElementById("buttonTwo").style.display = "none";


    } else  {

         document.getElementById("answer2").style.color = "red";
         document.getElementById("answer2").innerHTML = question2;
         theAnswerIsWrong();
         document.getElementById("buttonTwo").style.display = "none";
    }
}

function questionThree() {

    var question3 = prompt("What is your answer? Please make sure your answer is in the format of (City, State Abbreviation)");

    if (question3.toLowerCase() == "hodgenville, ky")

    {
        document.getElementById("answer3").style.color = "green";
        document.getElementById("answer3").innerHTML = question3;
        theAnswerIsRight();
        document.getElementById("buttonThree").style.display = "none";
    }

    else {

        document.getElementById("answer3").style.color = "red";
        document.getElementById("answer3").innerHTML = question3;
        theAnswerIsWrong();
        document.getElementById("buttonThree").style.display = "none";
    }
}

function questionFour() {

    var question4 = prompt("What is your answer?");

    if (question4.toLowerCase() == "dallas")
    {
        document.getElementById("answer4").style.color = "green";
        document.getElementById("answer4").innerHTML = question4;
        theAnswerIsRight();
        document.getElementById("buttonFour").style.display = "none";
    }

    else {

        document.getElementById("answer4").style.color = "red";
        document.getElementById("answer4").innerHTML = question4;
        theAnswerIsWrong();
        document.getElementById("buttonFour").style.display = "none";
    }
}

function questionFive() {

    var question5 = prompt("What is your answer?");

    if (question5.toLowerCase() == "john" ||  question5.toLowerCase() == "jon")

    {

        document.getElementById("answer5").style.color = "green";
        document.getElementById("answer5").innerHTML = question5;
        theAnswerIsRight();
        document.getElementById("buttonFive").style.display = "none";
    }

    else {

        document.getElementById("answer5").style.color = "red";
        document.getElementById("answer5").innerHTML = question5;
        theAnswerIsWrong();
        document.getElementById("buttonFive").style.display = "none";
    }
}

function questionSix() {

    var question6 = prompt("What is your answer?");

    if (question6.toLowerCase() == "html")

    {
        document.getElementById("answer6").style.color = "green";
        document.getElementById("answer6").innerHTML = question6;
        theAnswerIsRight();
        document.getElementById("buttonSix").style.display = "none";
    }

    else {

        document.getElementById("answer6").style.color = "red";
        document.getElementById("answer6").innerHTML = question6;
        theAnswerIsWrong();
        document.getElementById("buttonSix").style.display = "none";
    }
}

function questionSeven() {

    var question7 = prompt("What is your answer?");

    if (question7.toLowerCase() == "coronavirus" || question7.toLowerCase() == "covid-19" || question7.toLowerCase() == "covid")

    {
        document.getElementById("answer7").style.color = "green";
        document.getElementById("answer7").innerHTML = question7;
        theAnswerIsRight();
        document.getElementById("buttonSeven").style.display = "none";
    }

    else {

        document.getElementById("answer7").style.color = "red";
        document.getElementById("answer7").innerHTML = question7;
        theAnswerIsWrong();
        document.getElementById("buttonSeven").style.display = "none";
    }
}

function questionEight() {

    var question8 = prompt("What is your answer?");

    if (question8.toLowerCase() == "frankfort")

    {
        document.getElementById("answer8").style.color = "green";
        document.getElementById("answer8").innerHTML = question8;
        theAnswerIsRight();
        document.getElementById("buttonEight").style.display = "none";
    }

    else {

        document.getElementById("answer8").style.color = "red";
        document.getElementById("answer8").innerHTML = question8;
        theAnswerIsWrong();
        document.getElementById("buttonEight").style.display = "none";      
    }
}

function questionNine() {

    var question9 = prompt("What is your answer?");

    if (question9.toLowerCase() == "2015")

    {
        document.getElementById("answer9").style.color = "green";
        document.getElementById("answer9").innerHTML = question9;
        theAnswerIsRight();
        document.getElementById("buttonNine").style.display = "none";
    }

    else {

        document.getElementById("answer9").style.color = "red";
        document.getElementById("answer9").innerHTML = question9;
        theAnswerIsWrong();
        document.getElementById("buttonNine").style.display = "none";        
    }
}

function questionTen() {

    var question10 = prompt("What is your answer?");

    if (question10.toLowerCase() == "tennessee")

    {
        document.getElementById("answer10").style.color = "green";
        document.getElementById("answer10").innerHTML = question10;
        theAnswerIsRight();
        document.getElementById("buttonTen").style.display = "none";
    }

    else {

        document.getElementById("answer10").style.color = "red";
        document.getElementById("answer10").innerHTML = question10;
        theAnswerIsWrong();
        document.getElementById("buttonTen").style.display = "none";        
    }
}

function questionEleven() {

    var question11 = prompt("What is your answer?");

    if (question11.toLowerCase() == "south carolina")

    {
        document.getElementById("answer11").style.color = "green";
        document.getElementById("answer11").innerHTML = question11;
        theAnswerIsRight();
        document.getElementById("buttonEleven").style.display = "none";
    }

    else {

        document.getElementById("answer11").style.color = "red";
        document.getElementById("answer11").innerHTML = question11;
        theAnswerIsWrong();
        document.getElementById("buttonEleven").style.display = "none";        
    }
}

function questionTwelve() {

    var question12 = prompt("What is your answer?");

    if (question12.toLowerCase() == "nashville")

    {
        document.getElementById("answer12").style.color = "green";
        document.getElementById("answer12").innerHTML = question12;
        theAnswerIsRight();
        document.getElementById("buttonTwelve").style.display = "none";
    }

    else {

        document.getElementById("answer12").style.color = "red";
        document.getElementById("answer12").innerHTML = question12;
        theAnswerIsWrong();
        document.getElementById("buttonTwelve").style.display = "none";
    }
}

function questionThirteen() {

    var question13 = prompt("What is your answer?");

    if (question13.toLowerCase() == "sandy hook elementary school")

    {
        document.getElementById("answer13").style.color = "green";
        document.getElementById("answer13").innerHTML = question13;
        theAnswerIsRight();
        document.getElementById("buttonThirteen").style.display = "none";
    }

    else {

        document.getElementById("answer13").style.color = "red";
        document.getElementById("answer13").innerHTML = question13;
        theAnswerIsWrong();
        document.getElementById("buttonThirteen").style.display = "none";        
    }
}

function questionFourteen() {

    var question14 = prompt("What is your answer?");

    if (question14.toLowerCase() == "non traditional instruction")

    {
        document.getElementById("answer14").style.color = "green";
        document.getElementById("answer14").innerHTML = question14;
        theAnswerIsRight();
        document.getElementById("buttonFourteen").style.display = "none";
    }

    else {

        document.getElementById("answer14").style.color = "red";
        document.getElementById("answer14").innerHTML = question14;
        theAnswerIsWrong();
        document.getElementById("buttonFourteen").style.display = "none";        
    }
}

function questionFifteen() {

    var question15 = prompt("What is your answer?");

    if (question15.toLowerCase() == "white house" || question15.toLowerCase() == "washington, dc" || question15.toLowerCase() == "washington dc")

    {
        document.getElementById("answer15").style.color = "green";
        document.getElementById("answer15").innerHTML = question15;
        theAnswerIsRight();
        document.getElementById("buttonFifteen").style.display = "none";
    }

    else {

        document.getElementById("answer15").style.color = "red";
        document.getElementById("answer15").innerHTML = question15;
        theAnswerIsWrong();
        document.getElementById("buttonFifteen").style.display = "none";        
    }
}

function questionSixteen() {

    var question16 = prompt("What is your answer?");

    if (question16.toLowerCase() == "depreciation")

    {
        document.getElementById("answer16").style.color = "green";
        document.getElementById("answer16").innerHTML = question16;
        theAnswerIsRight();
        document.getElementById("buttonSixteen").style.display = "none";
    }

    else {

        document.getElementById("answer16").style.color = "red";
        document.getElementById("answer16").innerHTML = question16;
        theAnswerIsWrong();
        document.getElementById("buttonSixteen").style.display = "none";
    }
}

function questionSeventeen() {

    var question17 = prompt("What is your answer?");

    if (question17.toLowerCase() == "javascript")

    {
        document.getElementById("answer17").style.color = "green";
        document.getElementById("answer17").innerHTML = question17;
        theAnswerIsRight();
        document.getElementById("buttonSeventeen").style.display = "none";
    }

    else {

        document.getElementById("answer17").style.color = "red";
        document.getElementById("answer17").innerHTML = question17;
        theAnswerIsWrong();
        document.getElementById("buttonSeventeen").style.display = "none";       
    }
}

function questionEighteen() {

    var question18 = prompt("What is your answer?");

    if (question18 == 2005)

    {
        document.getElementById("answer18").style.color = "green";
        document.getElementById("answer18").innerHTML = question18;
        theAnswerIsRight();
        document.getElementById("buttonEighteen").style.display = "none";
    }

    else {

        document.getElementById("answer18").style.color = "red";
        document.getElementById("answer18").innerHTML = question18;
        theAnswerIsWrong();
        document.getElementById("buttonEighteen").style.display = "none";
    }
}

function questionNineteen() {

    var question19 = prompt("What is your answer?");

    if (question19.toLowerCase() == "purple")

    {
        document.getElementById("answer19").style.color = "green";
        document.getElementById("answer19").innerHTML = question19;
        theAnswerIsRight();
        document.getElementById("buttonNineteen").style.display = "none";
    }

    else {

        document.getElementById("answer19").style.color = "red";
        document.getElementById("answer19").innerHTML = question19;
        theAnswerIsWrong();
        document.getElementById("buttonNineteen").style.display = "none";        
    }
}

function questionTwenty() {

    var question20 = prompt("What is your answer?");

    if (question20.toLowerCase() == 4)

    {
        document.getElementById("answer20").style.color = "green";
        document.getElementById("answer20").innerHTML = question20;
        theAnswerIsRight();
        document.getElementById("buttonTwenty").style.display = "none";
    }

    else {

        document.getElementById("answer20").style.color = "red";
        document.getElementById("answer20").innerHTML = question20;
        theAnswerIsWrong();
        document.getElementById("buttonTwenty").style.display = "none";        
    }
}

function toggleNavMenu() {

    const xx = document.getElementById("mobile-nav-container");
    const lOne = document.getElementById("line-one");
    const lTwo = document.getElementById("line-two");
    const lThree = document.getElementById("line-three");

    const switcher = window.getComputedStyle(xx);

    if (switcher.style.display == "none") {

        switcher.style.display = "block";
        switcher.style.opacity = "1";
        lOne.style.backgroundColor = "red";
        lTwo.style.backgroundColor = "orange";
        lThree.style.backgroundColor = "yellow";
    } else {

        switcher.style.display = "none";
        lOne.style.backgroundColor = "white";
        lTwo.style.backgroundColor = "white";
        lThree.style.backgroundColor = "white";
    }
}