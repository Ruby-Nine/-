const imagePath = "assets/"

var currImageId = -1;
var questions = database["questionLists"];

var total = questions.length;
var difficulty = "";
const hintBox = document.getElementById("hint");

document.getElementById('showRandomImage').addEventListener('click', function () {
    showRandomImage()
});
document.getElementById('showHint').addEventListener('click', function(){
    showHint();
});
document.getElementById('showOrigin').addEventListener('click', function(){
    showOrigin();
});
document.getElementById('showAnswer').addEventListener('click', function(){
    showAnswer();
});


function showRandomImage(){
    randomImageId();
    while(difficulty!="" && questions[currImageId]["difficulty"] != difficulty){
        randomImageId();
    }
    let randomImageSrc = imagePath + questions[currImageId]["image"];
    document.getElementById("currentImage").src = randomImageSrc;
    // document.getElementById("hint").value = "";
    // document.getElementById("origin").value = "";
    // document.getElementById("answer").value = "";
    hintBox.innerHTML = "";
}

function showHint(){
    let hint = questions[currImageId]["hint"];
    // document.getElementById("hint").value = hint;
    // alert(hint);
    hintBox.innerHTML = hint;
}

function showOrigin(){
    let origin = questions[currImageId]["origin"];
    // document.getElementById("origin").value = origin;
    // alert(origin);
    hintBox.innerHTML = origin;
}

function showAnswer(){
    // showHint();
    // showOrigin();
    let origin = questions[currImageId]["origin"];
    let answer = questions[currImageId]["answer"];
    // alert("出处：" + origin + "\n" + answer);
    // document.getElementById("answer").value = answer;
    hintBox.innerHTML = "《" + origin + "》: " + answer;
}

function randomImageId(){ 
    let newId = -1;
    do{
        newId = Math.floor(Math.random() * total); 
    }while (newId == currImageId)
    currImageId = newId;
} 
